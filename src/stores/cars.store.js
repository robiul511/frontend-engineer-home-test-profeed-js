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
      brand: 1,
      machineCapacity: '1200',
      note: 'asu',
      year: '2024'
    },
  ])

  const addCar = (_cars) => {
    const result = get(dataCars)
    result.push(_cars)
    set(dataCars, result)
  }

  const editCar = (_car, id) => {
    const findIndex = dataCars.value.findIndex(car => car.id == id) 
    dataCars.value[findIndex] = _car
  }

  const deleteCar = (id) => {
    const __cars = get(dataCars)
    const filter = __cars.filter(e => e.id !== id)
    set(dataCars, filter)
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