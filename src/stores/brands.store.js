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
      name: 'kijang inova',
    },
  ])

  const addBrand = (_brand) => {
    const __brands = get(dataBrands)
    __brands.push(_brand)
    set(dataBrands, __brands)
  }
  const editBrand = (_brand, id) => {
    console.log(id);
    
    const __brands = get(dataBrands)
    __brands.push(_brand)
    set(dataBrands, __brands)
  }
  const deleteBrand = (id) => {
    console.log(id);
  }


  return {
    // state
    dataBrands,
    
    // function
    addBrand,
    editBrand,
    deleteBrand
  }
})
