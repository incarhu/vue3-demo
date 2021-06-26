<template>
  <section class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <div class="tab-icon home home-active"></div>
      <div class="tab-link">首页</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/classify">
      <div class="tab-icon classify classify-active"></div>
      <div class="tab-link">分类</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/car">
      <div class="tab-icon car-color car-color-active"></div>
      <div class="tab-link">购物车</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <div class="tab-icon mine-color mine-color-active"></div>
      <div class="tab-link">我的</div>
    </router-link>
  </section>
</template>

<script>
  export default {
    name: "Tabs"
  }
</script>

<style scoped lang="scss">
  .tab {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    padding-top: calStyle(20);
    height: calStyle(96);
    align-items: center;
    background: #fff;
    font-size: 16px; /* no */
    z-index: 3;
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 12px; /*no*/
      .tab-link{
        padding-bottom: 10px;
      }
      &.router-link-active {
        .home-active {
          background: url('../../../assets/img/tabs/home_active.png') no-repeat;
          background-size: contain;
        }
        .classify-active {
          background: url('../../../assets/img/tabs/classify_active.png') no-repeat;
          background-size: contain;
        }
        .car-color-active {
          background: url('../../../assets/img/tabs/car_active.png') no-repeat;
          background-size: contain;
        }
        .mine-color-active {
          background: url('../../../assets/img/tabs/mine-active.png') no-repeat;
          background-size: contain;
        }
        .tab-link {
          color: #ff0000;
        }
      }    
      .tab-icon {
        width: calStyle(52);
        height: calStyle(52);
        margin: calStyle(6) auto;
      }
      .home {
        background: url('../../../assets/img/tabs/home.png') no-repeat;
        background-size: contain;
      }
      .classify {
        background: url('../../../assets/img/tabs/classify_gray.png') no-repeat;
        background-size: contain;
      }
      .car-color {
        background: url('../../../assets/img/tabs/car.png') no-repeat;
        background-size: contain;
      }
      .mine-color {
        background: url('../../../assets/img/tabs/mine-gray.png') no-repeat;
        background-size: contain;
      }
    }
  }
</style>