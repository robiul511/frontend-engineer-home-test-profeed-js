<script setup>
// components
import Button from '../components/Button/Button.vue'

// styled
import { StyledTable, StyledTableHead, StyledTableData, StyledTab, StyledTabItem, StyledNavbar } from '../App.style'

import { useBrandsStore } from '../stores/brands.store'

const brandStores = useBrandsStore()
console.log(brandStores);

</script>

<template>
  <StyledNavbar>
    <StyledTab>
      <StyledTabItem @click="$router.push('/')">
        Cars
      </StyledTabItem>
      <StyledTabItem :is-selected="true" @click="$router.push('/brands')">
        Brands
      </StyledTabItem>
    </StyledTab>
    
    <Button @click="addNewCar" icon="add"> Add New Brand </Button>
  </StyledNavbar>
  <StyledTable style="width: 100%">
    <tr>
      <StyledTableHead>Id</StyledTableHead>
      <StyledTableHead>Name</StyledTableHead>
      <StyledTableHead></StyledTableHead>
      <StyledTableHead></StyledTableHead>
    </tr>
    <tr v-for="car in brandStores.dataBrands">
      <StyledTableData>{{ car.id }}</StyledTableData>
      <StyledTableData>{{ car.name }}</StyledTableData>
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
