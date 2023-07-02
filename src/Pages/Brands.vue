<script setup>
// components
import Notification from '../components/Notification/Notification.vue'
import Button from '../components/Button/Button.vue'
import Input from '../components/Input/Input.vue'

// styled
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

import { useBrandsStore } from '../stores/brands.store'
import { reactive, ref } from 'vue';
import { get, set } from '@vueuse/core';

const brandStores = useBrandsStore()

const notification = reactive({
  isOpen: false,
  message: ''
})

const form = reactive({
  idSelected: '',
  data: {
    id: '',
    name: ''
  }
})

const isOpenForm = ref(false)
const onFormClose = () => {
  form.idSelected = ''
  form.data = {
    id: '',
    name: ''
  }

  set(isOpenForm, false)
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
  }
  return true
}

const save = () => {
  if (validation()) {
    const { data, idSelected } = form    

    const dataBrandsStore = get(brandStores.dataBrands)

    if (idSelected) {
      const filter = dataBrandsStore.filter(brand => brand.id !== idSelected)
      const hasSameId = filter.some(e => Number(e.id) === Number(data.id))
      
      if (!hasSameId) {
        brandStores.editBrand(data, idSelected)
        onFormClose()
      } else {
        notification.isOpen = true
        notification.message = 'id must be unique'
        setTimeout(() => {
          notification.isOpen = false
        }, 3000)
      }

    } else {
      const hasSameId = dataBrandsStore.some(e => Number(e.id) === Number(data.id))
      if (!hasSameId) {
        brandStores.addBrand(data)
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

const onClickEdit = (data) => {
  const { id, name, } = data

  form.idSelected = id
  form.data = {
    id,
    name,
  }

  set(isOpenForm, true)
}
const deleteBrand = (_id) => {
  brandStores.deleteBrand(_id)
}
</script>

<template>
  <Notification v-if="notification.isOpen" :message="notification.message" color="danger" />

  <div v-if="isOpenForm">
    <StyledForm>
      <p>{{ form.idSelected ? 'Edit Brands' : 'Add new Brands' }}</p>
      <Input v-model="form.data.id" label="Id" type="number"/>
      <Input v-model="form.data.name" label="Name" />
    </StyledForm>
    <StyledButtonForm>
      <Button @click="save">Save</Button>
    </StyledButtonForm>
  </div>

  <div v-else>
    <StyledNavbar>
      <StyledTab>
        <StyledTabItem @click="$router.push('/')">
          Cars
        </StyledTabItem>
        <StyledTabItem :is-selected="true" @click="$router.push('/brands')">
          Brands
        </StyledTabItem>
      </StyledTab>
      
      <Button @click="isOpenForm = true" icon="add"> Add New Brand </Button>
    </StyledNavbar>
    <StyledTable style="width: 100%">
      <tr>
        <StyledTableHead>Id</StyledTableHead>
        <StyledTableHead>Name</StyledTableHead>
        <StyledTableHead></StyledTableHead>
        <StyledTableHead></StyledTableHead>
      </tr>
      <tr v-for="brand in brandStores.dataBrands">
        <StyledTableData>{{ brand.id }}</StyledTableData>
        <StyledTableData>{{ brand.name }}</StyledTableData>
        <StyledTableData>
          <Button icon="edit" @click="onClickEdit(brand)"> Edit </Button>
        </StyledTableData>
        <StyledTableData>
          <Button variant="danger" icon="delete" @click="deleteBrand(brand.id)"> Delete </Button>
        </StyledTableData>
      </tr>
    </StyledTable>
  </div>
  
</template>

<style scoped>
</style>
