export default {
  state: {
    city: ''
  },

  mutations: {
    getCity: (state,data) => {
      state.city = data
    }
  },

  getters: {
    getCity(state) {
      if(state.city != '') {
        return state.city
      }
    }
  }
}