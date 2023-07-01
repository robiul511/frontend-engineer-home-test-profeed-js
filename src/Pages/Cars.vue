<script setup lang="ts">
import { ref } from 'vue'

// components
import Notification from '../components/Notification/Notification.vue'
import Button from '../components/Button/Button.vue'

// style
import { StyledTable, StyledTableHead, StyledTableData, StyledTab, StyledTabItem, StyledNavbar } from '../App.style'

// store
import { useCarsStore } from '../stores/cars.store'
import { useBrandsStore } from '../stores/brands.store'

const brandStores = useBrandsStore()

const carStores = useCarsStore()

console.log(carStores);

const addBrands = () => {
  const payload = {
    id: 2,
    name: 'honda'
  }

  brandStores.addBrand(payload)
}

const addNewCar = () => {
  const payload = {
    id: 3,
    name: 'Calya',
    brand: {
      id: 1,
      name: 'Toyota'
    },
    year: 2025,
    note: '',
    machineCapacity: '2000 cc',
  }

  carStores.addCar(payload)
}

const testInput = ref('')

</script>

<template>
  <Notification v-if="true" message="masuk coy" color="danger" />

  <StyledNavbar>
    <StyledTab>
      <StyledTabItem :is-selected="true" @click="$router.push('/')">
        Cars
      </StyledTabItem>
      <StyledTabItem @click="$router.push('/brands')">
        Brands
      </StyledTabItem>
    </StyledTab>

    <Button @click="addNewCar" icon="add"> Add New Car </Button>
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
      <StyledTableData>{{ car.brand.name}}</StyledTableData>
      <StyledTableData>{{ car.year }}</StyledTableData>
      <StyledTableData> {{ car.machineCapacity }} </StyledTableData>
      <StyledTableData>{{ car.note }}</StyledTableData>
      <StyledTableData>
        <Button icon="edit"> Edit </Button>
      </StyledTableData>
      <StyledTableData>
        <Button variant="danger" icon="delete"> Delete </Button>
      </StyledTableData>
    </tr>
  </StyledTable>
</template>

<style scoped>
</style>