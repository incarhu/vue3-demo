<template>
  <section class="city_list">
    <Navbar :title="titles" @onBackFun="onBackFun" />
    <div class="city_list_content">
      <div class="current_city">
        <p class="city-1bnTP icon iconfont icondingwei">当前定位的城市</p>
        <div class="city-5r26m">{{getCity || currentCity}}</div>
      </div>
      <div class="wrapper">
        <div class="city-3Obwy_0" v-for="(item, index) of cityList.arr.cityList" :key="index">
          <div class="city-1bnTP_0">{{item.idx}}</div>
          <div class="city-5r26m_0" v-for="(item2, index2) of item.cities" 
            :key="index2"
             @click="handleCurrentCity(item2)"
             @touchend="touchEnd">
            <span>{{item2.name}}</span>
          </div>
        </div>
      </div>
      <!-- 右侧区域S -->
      <div class="city-CDS">
        <span v-for="(item, index2) in cityList.arr.alphabet" :key="index2"
            :class="item == activeStr ? 'active' : ''" 
            @click="handleAlphabet(item, index2)">{{item}}</span>
      </div>
      <!-- 右侧区域E -->
    </div>
  </section>
</template>

<script>
import { getCurrentInstance, onBeforeMount, ref, reactive } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { useRouter } from 'vue-router'
import requestUrl from '@/assets/request/api.js'
export default {
  props: {
    cityData: {
      type: Array,
      default: ()=> {
        return []
      }
    },
    title: {
      type: String,
      default: '城市选择'
    }
  },
  computed: {
    ...mapGetters([
      'getCity',
    ])
  },
  setup(props) {
    const titles = ref(props.title)
    // 获取挂载在全局上app的实例
    // const internalInstance = getCurrentInstance().appContext.config.globalProperties
    const currentCity = ref('暂无定位')   // 当前城市
    const activeStr = ref("A")
    const cityList = reactive({arr: []})
    const store = useStore()
    const router = useRouter()
    
    // onBeforeMount(async _=> {
    //   // 获取全国城市列表
    //   let res = await internalInstance.$axios.get('/city/cityList.json')
    //   if(res) {
    //     cityList.arr = Object.freeze(res.data[0])
    //   }
    // })
	
    onBeforeMount(()=> {
			let obj = {
				id: 1
			};
      requestUrl.requestCity(obj).then(res=> {
        if(res) {
          cityList.arr = Object.freeze(res.data[0])
        }
      })
    })
    
    // 点击城市列表索引，跳转到对应城市区域
    const handleAlphabet = (val, index) => {
      activeStr.value = val   // 赋值给点击事件触发样式
      let nodeList = document.querySelectorAll('.city-3Obwy_0')
      let tops = nodeList[index].offsetTop
      ScrollTop((tops - 45), 500)
    }

    // 点击当前城市
    const handleCurrentCity = (data) => {
      currentCity.value = data.name
      store.commit('getCity', data.name)
      router.push({
        path: 'classify'
      })
    }

    // 返回
    const onBackFun = () => {
      router.push({
        path: 'classify'
      })
    }

    // 滑动
    const touchEnd = (e) => {
      let path = e.path[1].innerText
      let currentIndex = path.substring(0, 1)
      activeStr.value = currentIndex
    }

    const ScrollTop = (number = 0, time) => {
      if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number
        return number
      }
      const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
      let spacingInex = time / spacingTime // 计算循环的次数
      let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
      let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
      let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
          spacingInex--
          ScrollTop(nowTop += everTop)
        } else {
          clearInterval(scrollTimer) // 清除计时器
        }
      }, spacingTime)
    }

    return {
      titles,
      activeStr,
      currentCity,
      cityList,
      handleAlphabet,
      handleCurrentCity,
      touchEnd,
      onBackFun
    }
  }
}
</script>

<style lang="scss" scoped>
.city_list_content {
  height: 100%;
  margin-top: calStyle(90);
  font-size: 16px;
  overflow-y: scroll;
  .current_city {
    background: #fff;
    .city-1bnTP {
      padding: 3.733333vw 0 1.866667vw 4vw;
      border-bottom: 1px solid #ddd;
      color: #666;
      background: #f5f5f5;
    }
    .city-5r26m {
      height: calStyle(90);
      line-height: calStyle(90);
      margin-left: 4vw;
      border: none;
    }
  }
  .wrapper {
    box-sizing: inherit;
    background: #fff;
    .city-3Obwy_0 {
      color: #333;
      .city-1bnTP_0 {
        padding: 3.733333vw 0 1.866667vw 4vw;
        border-bottom: 1px solid #ddd;
        color: #666;
        background: #f5f5f5;
      }
      .city-5r26m_0 {
        height: calStyle(100);
        line-height: calStyle(100);
        margin-left: 4vw;
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .city-CDS {
    position: fixed;
    right: 2.666667vw;
    top: 30vw;
    width: 5.333333vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #999;
    span {
      height: calStyle(40);
      font-size: 14px;
    }
    .active {
      color: #ff0000;
      transform: scale(1.4);
    }
  }
}
.icondingwei:before {
  font-size: 18px;
}
</style>