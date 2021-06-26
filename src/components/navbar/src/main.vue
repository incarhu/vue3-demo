<template>
  <div class="header">
    <div class="header-left">
      <i class="fl header-icon" @click="back" v-if="showLeftIcon"></i>
    </div>
    <h1 class="title" v-text="title"></h1>
    <div class="header-right" v-text="rightText" @click="rightEven"></div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Navbar',
  props: {
    showLeftIcon: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    let backFun = getCurrentInstance().attrs.onOnBackFun
    const router = useRouter()
    const back = () => {
      if(backFun) {
        console.log('自定义返回')
        context.emit('onBackFun')
      } else {
        router.go(-1)
      }
    }

    // 右边按钮事件
    const rightEven = () => {
      context.emit('rightEven')
    }

    return {
      back,
      rightEven
    }
  }
  // methods: {
  //   back() {
  //     console.log(this.$attrs)
  //     if(this.$attrs['onOnBackFun']) {
  //       console.log('自定义返回')
  //       this.$emit('onBackFun')
  //     } else {
  //       this.$router.go(-1)
  //     }
  //   },

  //   // 右边按钮事件
  //   rightEven () {
  //     this.$emit('rightEven')
  //   }
  // }
}
</script>

<style scoped lang="scss">
.header {
  height: calStyle(90);
  background: $mainColor;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 2;
  flex: 1;
  font-size: $font16;
  .header-left {
    height: calStyle(90);
    display: flex;
    align-items: center;
    margin-left: calStyle(30);
    flex: 1;
    .header-icon {
      width: calStyle(22);
      height: calStyle(36);
      background: url('../img/back.png') no-repeat;
      background-size: contain;
    }
  }
  h1.title {
    font-size: $font18; /*no*/
    font-weight: 400;
    line-height: calStyle(90);
    height: calStyle(90);
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-right {
    height: calStyle(90);
    line-height: calStyle(90);
    flex: 1;
    text-align: right;
    padding-right: calStyle(30);
  }
}
</style>
