import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'John Doe',
      age: 30,
    }
  },
  getters: {
    doubleAge: (state) => state.age * 2,
  },
  actions: {
    increment() {
      this.age++
    },
  },
})