import { get, set } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBrandsStore = defineStore('brands', () => {
  /**
   * Helper States
  */
  const dataBrands = ref([
    {
      id: 1,
      name: 'Toyota',
    },
  ])

  const addBrand = (_brand) => {
    const result = get(dataBrands)
    result.push(_brand)
    set(dataBrands, result)
  }

  const editBrand = (_brand, id) => {
    const findIndex = dataBrands.value.findIndex(brand => brand.id == id) 
    dataBrands.value[findIndex] = _brand
  }

  const deleteBrand = (id) => {
    const __brands = get(dataBrands)
    const filter = __brands.filter(e => e.id !== id)
    set(dataBrands, filter)
  }

  // getters
  const getBrandName = (id) => {
    const find = dataBrands.value.find(brand => brand.id == id)
    if(find) {
      return find.name
    }
    return '-'
  } 


  return {
    // state
    dataBrands,
    
    // function
    addBrand,
    editBrand,
    deleteBrand,

    // getters
    getBrandName,
  }
})
