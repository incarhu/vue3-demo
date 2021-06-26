<template>
  <div class="regist-wrap">
    <!-- <Navbar :title="title"></Navbar> -->
    <div class="login-wrap">
      <div class="login-tips">
         为了你的账户安全请填写一个手机号完成验证
      </div>

      <section class="login-content">
        <div class="login-list">
          <div class="login-list-item">
            <div class="login-list-label">手机号</div>
            <div class="login-list-control">
              <input type="number" class="login-list-input" v-model.trim="registData.tel">
            </div>
          </div>
          <div class="login-list-item">
            <div class="login-list-label">密码</div>
            <div class="login-list-control">
              <input type="password" class="login-list-input" v-model.trim="registData.password">
            </div>
          </div>
        </div>
      </section>

      <SlideBlock @passVerify="passVerify" ref="verify"></SlideBlock>
    </div>      
  </div> 
</template>

<script>
export default {
  data () {
    return {
      title: '注册',
      registData: {}
    }
  },
  methods: {
    // 滑动通过
    passVerify () {
        if (this.registData.tel === '' || this.registData.tel === '' || !/^[1][0-9]{9}\d$/.test(this.registData.tel)) {
          console.log('请输入正确手机号')
          this.$refs.verify.moseUpFn()
        } else if (!this.registData.password) {
          console.log('请输入密码')
          this.$refs.verify.moseUpFn()
        } else {
          // 发送请求
          console.log('成功')
          this.$store.dispatch('setStorage', {user: this.registData.tel})
          this.$store.dispatch('setLogin', '1')
          this.$router.push({path: '/home'})
        }
    }
  },
}
</script>

<style lang="scss" scoped>
.login-wrap {
  padding-top: calStyle(90);
  .login-tips {
    margin: calStyle(20) 0;
    text-align: center;
    font-size: 14px; /*no*/
  }

  .login-content {
    margin: calStyle(20) 0;  
    background: #fff;
    font-size: 16px; /*no*/
    .login-list {
      margin-top: calStyle(40);
      .login-list-item {
        display: flex;
        height: calStyle(100);
        line-height: calStyle(100);
        padding-left: calStyle(20);
        border-bottom: 1px solid #d2d2d2; /*no*/
        .login-list-label {
          width: calStyle(100);
          margin-right: calStyle(30);
        }
        .login-list-control {
          flex: 1;
          .login-list-input {
            height: calStyle(80);
            outline: none;
            font-size: 16px; /*no*/
          }
        }
      }
    }
  }
}
</style>
