<script setup lang="ts">
import { ref, reactive } from 'vue'
import { get, set } from '@vueuse/core';

// components
import Notification from '../components/Notification/Notification.vue'
import Button from '../components/Button/Button.vue'
import Input from '../components/Input/Input.vue'
import Select from '../components/Select/Select.vue'
import TextArea from '../components/TextArea/TextArea.vue'

// style
import {
  StyledTable,
  StyledTableHead,
  StyledTableData,
  StyledTab,
  StyledTabItem,
  StyledNavbar,
  StyledForm,
  StyledButtonForm,
} from '../App.style'

// store
import { useCarsStore } from '../stores/cars.store'
import { useBrandsStore } from '../stores/brands.store'

const brandStores = useBrandsStore()
const carStores = useCarsStore()

const form = reactive({
  idSelected: 0,
  data: {
    id: null,
    name: '',
    brand: 1,
    machineCapacity: '',
    note: '',
    year: '',
  }
})

const notification = reactive({
  isOpen: false,
  message: ''
})

const isOpenForm = ref(false)
const onFormClose = () => {
  form.idSelected = 0
  form.data = {
    id: null,
    name: '',
    brand: 1,
    machineCapacity: '',
    note: '',
    year: '',
  }
  set(isOpenForm, false)
}
const onClickEdit = (data) => {
  const { id, name, brand, machineCapacity, note, year } = data

  form.idSelected = id
  form.data = {
    id,
    name,
    brand,
    machineCapacity,
    note,
    year,
  }

  set(isOpenForm, true)
}
const validation = () => {
  const __form = get(form)

  if (!__form.data.id) {
    notification.isOpen = true
    notification.message = 'id is required'
    setTimeout(() => {
      notification.isOpen = false
    }, 3000)
    
    return false
  } else if (!__form.data.name) {
    notification.isOpen = true
    notification.message = 'name can not be null'

    setTimeout(() => {
      notification.isOpen = false
    }, 3000)
    
    return false
  } else if (!__form.data.machineCapacity) {
    notification.isOpen = true
    notification.message = 'machine capacity can not be null'
    setTimeout(() => {
      notification.isOpen = false
    }, 3000)
    
    return false
  }
  return true
}
const save = () => {
  if (validation()) {
    const { data, idSelected } = form
    console.log(idSelected, 'id selected');
    
    const dataCarsStore = get(carStores.dataCars)

    if (idSelected) {
      const filter = dataCarsStore.filter(car => car.id !== idSelected)
      const hasSameId = filter.some(e => Number(e.id) === Number(data.id))
      
      if (!hasSameId) {
        carStores.editCar(data, idSelected)
        onFormClose()

      } else {
        notification.isOpen = true
        notification.message = 'id must be unique'
        setTimeout(() => {
          notification.isOpen = false
        }, 3000)
      }

    } else {
      const hasSameId = dataCarsStore.some(e => Number(e.id) === Number(data.id))
      if (!hasSameId) {
        carStores.addCar(data)
        onFormClose()
        
      } else {
        notification.isOpen = true
        notification.message = 'id must be unique'
        setTimeout(() => {
          notification.isOpen = false
        }, 3000)
      }
    }
  }
}

const deleteCar = (_id) => {
  carStores.deleteCar(_id)
}

</script>

<template>
  <Notification v-if="notification.isOpen" :message="notification.message" color="danger" />

  <div v-if="isOpenForm">
    <StyledForm>
      <p>{{ form.idSelected ? 'Edit Car' : 'Add new Car' }}</p>
      <Input v-model="form.data.id" label="Id" type="number"/>
      <Input v-model="form.data.name" label="Name" />

      <Select v-model="form.data.brand" label="Brands">
        <option
          v-for="(brand, index) in brandStores.dataBrands"
          :key="index"
          :value="brand.id"
        >
          {{ brand.name }}
        </option>
      </Select>

      <Input v-model="form.data.machineCapacity" label="Machine capacity" />
      <Input v-model="form.data.year" label="Year" />

      <TextArea v-model="form.data.note" label="Note" />
    </StyledForm>
    <StyledButtonForm>
      <Button @click="save">Save</Button>
    </StyledButtonForm>
  </div>

  <div v-else>
    <StyledNavbar>
      <StyledTab>
        <StyledTabItem :is-selected="true" @click="$router.push('/')">
          Cars
        </StyledTabItem>
        <StyledTabItem @click="$router.push('/brands')">
          Brands
        </StyledTabItem>
      </StyledTab>

      <Button @click="isOpenForm= true " icon="add"> Add New Car </Button>
    </StyledNavbar>

    <StyledTable style="width: 100%">
      <tr>
        <StyledTableHead>Id</StyledTableHead>
        <StyledTableHead>Name</StyledTableHead>
        <StyledTableHead>Brand</StyledTableHead>
        <StyledTableHead>Year</StyledTableHead>
        <StyledTableHead>Machine Capacity</StyledTableHead>
        <StyledTableHead>Note</StyledTableHead>
        <StyledTableHead></StyledTableHead>
        <StyledTableHead></StyledTableHead>
      </tr>
      <tr v-for="car in carStores.dataCars">
        <StyledTableData>{{ car.id }}</StyledTableData>
        <StyledTableData>{{ car.name }}</StyledTableData>
        <StyledTableData>{{ car.brand}}</StyledTableData>
        <StyledTableData>{{ car.year }}</StyledTableData>
        <StyledTableData> {{ car.machineCapacity }} </StyledTableData>
        <StyledTableData>{{ car.note }}</StyledTableData>
        <StyledTableData>
          <Button icon="edit" @click="onClickEdit(car)"> Edit </Button>
        </StyledTableData>
        <StyledTableData>
          <Button variant="danger" icon="delete" @click="deleteCar(car.id)"> Delete </Button>
        </StyledTableData>
      </tr>
    </StyledTable>
  </div>
</template>

<style scoped>
</style>