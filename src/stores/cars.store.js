import { get, set } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCarsStore = defineStore('cars', () => {
  /**
   * Helper States
  */
  const dataCars = ref([
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu',
      year: '2024'
    },
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu',
      year: '2024'
    },
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu',
      year: '2024'
    }
  ])

  const addCar = (_cars) => {
    const result = get(dataCars)
    result.push(_cars)
    set(dataCars, result)
  }

  const editCar = (_cars, id) => {
    console.log(id);
    
    const result = get(dataCars)
    result.push(_cars)
    set(dataCars, result)
  }

  const deleteCar = (id) => {
    console.log(id);
    
  }


  return {
    // state
    dataCars,
    
    // function
    addCar,
    editCar,
    deleteCar
  }
})