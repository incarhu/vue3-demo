import { createStore } from 'vuex'

import Auth from './auth/auth.js' // 是否登录权限
import cityList from './cityList/index.js' // 城市
import shopCar from './shopCar/index.js' // 购物车

const store = createStore({
    modules: {
        Auth,
        cityList,
        shopCar
    }
})

export default store