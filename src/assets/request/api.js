import $axios from '@/api/index.js'

const requestUrl = {}

// 城市接口
requestUrl.requestCity = async(params = {}) => {
    return await $axios.get('/city/cityList.json', params)
}

// 分类
requestUrl.requestCate = async() => {
    return await $axios.get('/category.json')
}

export default requestUrl