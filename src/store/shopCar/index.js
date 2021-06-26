export default {
    state: {
        title: '',
        subTitle: '',
        price: 0,
        count: 0,
        total: 0
    },

    mutations: {
        shopCar: (state, data) => {
            [state.title, state.subTitle, state.price, state.count] = [data.title, data.subTitle, data.price, data.count]
            state.total = data.price * data.count
        }
    },

    getter: {
        shopCar(state) {
            return state
        }
    }
}