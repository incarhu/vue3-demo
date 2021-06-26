<template>
  <section class="video_wrap">
    <!-- <div>视频{{GetId}}</div> -->
    <ul class="cont">
      <li v-for="(tab, index) in tabs.arr" :key="index" @click="tabClick(tab.name)" :class="tab.name == activeStr ? 'active' : ''">
        {{tab.title}}
      </li>
    </ul>
    <keep-alive>
      <transition name="fade">
        <component :is="currentComponent" @click="tabClick"></component>
      </transition>
    </keep-alive>
  </section>
  <Tabs />
</template>

<script>
import { onBeforeMount, onMounted, getCurrentInstance, ref, reactive, watchEffect, defineAsyncComponent} from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default {
  setup(props, ctx) {
    const router = useRouter()
    const route = useRoute()
    // 获取挂载在全局上app的实例
    const internalInstance = getCurrentInstance().appContext.config.globalProperties
    let GetId = ref()
    const currentComponent = ref()
    let activeStr = ref('Recommend')
    let tabs = reactive(
      {
        arr: []
      }
    )

    onBeforeMount(_=> {
      internalInstance.$axios.get('/category.json')
        .then(res => {
          tabs.arr = res.data
        })
    })
    // watchEffect(async () => {
    //   await internalInstance.$axios.get('/category.json')
    //   .then(res => {
    //     if(res.data.code == 2000) {
    //       tabs = res.data.data
    //       console.log(tabs)
    //     }
    //   })
    // })

    onMounted(_=> {
      GetId.value = router.currentRoute.value.params.id
      currentComponent.value = 'Recommend'
      // console.log(props)
      // console.log(ctx)
    })

    function tabClick(val) {
      currentComponent.value = val
      activeStr.value = val
    }

    return {
      GetId,
      tabs,
      currentComponent,
      activeStr,
      tabClick
    }
  },
  components: {
    Recommend: defineAsyncComponent({
      loader: () => import('./recommend/index.vue')
    }),
    Attention: defineAsyncComponent({
      loader: () => import('./attention/index.vue')
    })
  }
}
</script>

<style lang="scss" scoped>
.video_wrap {
  height: 100%;
  overflow: hidden;
  .cont {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    justify-content: space-evenly;
    color: #b5b3b3;
  }
  .cont li {
    padding-top: calStyle(20);
    font-size: 20px;
    text-align: center;
  }
  .active {
    color: #fff;   
    &::after {
      content: "";
      display: block;
      width: 95%;
      height: 1px;
      padding-top: 5px;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>