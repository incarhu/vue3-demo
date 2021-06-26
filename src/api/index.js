import axios from 'axios'
import { Toast } from 'vant'

// const URL = 'http://localhost:8080'

// // 创建实例时设置配置的默认值
// var instance = axios.create({
//   baseURL: URL
// })

// 请求拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    Toast.loading({
        message: '加载中...',
        forbidClick: true
    })
    return config
}, (error) => {
    // 对请求错误做些什么
    return Toast.loading({
        message: error.message,
        forbidClick: true
    })
})

// 响应拦截器
axios.interceptors.response.use(res => {
    // 对响应数据做点什么
    if (res.data.code == 2000) {
        Toast.clear()
    }
    return res.data
}, (error) => {
    // 对响应错误做点什么
    return Toast.loading({
        message: error.message,
        forbidClick: true
    })
})

export default axios