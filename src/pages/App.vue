<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import scale from '@/assets/js/scale'
export default {
  name: 'App',
  mounted() {
    scale()
    this.checkInfo()
  },
  methods: {
    checkInfo() {
      let userInfo = this.$store._state.data.Auth

      if(Object.prototype.toString.call((userInfo.user)) == '[object Null]') {
        this.saveState()
      }
    },
    saveState() {
      let tel = null
      if(localStorage.getItem("user")) {
        tel = JSON.parse(localStorage.getItem("user")).user
      }
      let isLogin = localStorage.getItem("isLogin")      

      this.$store.dispatch('setStorage', {user: tel})
      this.$store.dispatch('setLogin', isLogin)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/iconfont/iconfont.css';
</style>