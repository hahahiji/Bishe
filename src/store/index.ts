// store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    map:null,
    gpplayer:null
  },
  mutations: {
    setmap(state,map){
      state.map = map
    },
    setlayer(layer){
      this.gpplayer = layer
    }
  },
  actions: {
  },
  getters: {
  },
})

export default store