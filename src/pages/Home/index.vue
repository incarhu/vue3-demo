<template>
  <div class="home-wrap">
    <div class="sc-bxivhb">
      <div class="header-bd">
        <a class="placeholder" @click="openSearch"><span class="text iconfont icon-search">寻找宝贝店铺</span></a>
      </div>
    </div>
    
    <!-- 轮播图S -->
    <div class="slide-show">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(slide, index) in recommends" :key="index">
          <a :href="slide.linkUrl">
            <img :src="slide.linkUrl" class="img-style">
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图E -->

    <!-- wrapper -->
    <div class="box-wrap">
      <div class="DView"></div>
      <div class="box-header">
        <div class="header-back"></div>
      </div>
      <ul class="list-wrapper">
        <li class="wrapper-flex" v-for="(item, index) in wrapperData" :key="index">
          <router-link to="" class="block">
            <img :src="item.icon" class="wrap-icon icon-tm">
            <span class="wrapper-text">{{item.text}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- wrapper -->

    <!-- 中奖头条S -->
    <div class="notice">
      <div class="notice-text">淘宝头条</div>
      <div class="wrap">
        <marquee direction="up" scrolldelay="1" scrollamount="1" loop="-1" behavior="scroll" hspace="20" vspace="1" 
                width="100%" height="30px">                   
          <p>恭喜 135****2801会员成功。</p>
          <p>恭喜 138****2251会员成功。</p>
          <p>恭喜 159****3368会员成功。</p>
          <p>恭喜 135****2287会员成功。</p>
          <p>恭喜 155****2567会员成功。</p>
          <p>恭喜 152****8967会员成功。</p>
          <p>恭喜 139****5468会员成功。</p>
        </marquee>
      </div>
    </div>
    <!-- 中奖头条E -->

    <audio controls autoplay="autoplay" ref="audio" style="display:none">
      <source src="../../assets/audio/because.mp3" type="audio/mpeg">
    </audio>

    <!-- 商品展示S -->
    <div class="commodity">
      <div class="box-wrap">
       <ul class="list-wrapper">
        <li class="commondity-flex" v-for="(item, index) in commondityData" :key="index" @click="toCommondityDetail(item)">
          <router-link to="" class="commondity-style">
            <div class="commondity-detail">
              <p class="commondity-text">{{item.text}}</p>
              <p class="commondity-desc">{{item.descript}}</p>
            </div>
            <img :src="item.icon" class="commondity-icon icon-tm">
          </router-link>
        </li>
      </ul>
      </div>
    </div>
    <!-- 商品展示E -->
    
    <!-- 回到顶部S -->
    <div class="to-top" v-show="showToTop" @click="goTop">
      <div class="fSEVbN">
        <span class="top-img"></span>
        <i class="top-text">顶部</i>
      </div>
    </div>
    <!-- 回到顶部E -->

    <Tabs />
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
import { commondityData } from '@/pages/Home/js/commondity-data.js'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2000,
          // stopOnLastSlide: false,
          disableOnInteraction: true
        },
        effect: 'coverflow',
        loop: true
      },
      recommends: [
        {
          linkUrl: 'http://gw.alicdn.com/imgextra/i1/87/O1CN01MeKysy1CVt6PPMZxH_!!87-0-lubanu.jpg',
        },
        {
          linkUrl: 'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
        },
        {
          linkUrl: 'https://aecpm.alicdn.com/tps/i4/TB1pgxYJXXXXXcAXpXXrVZt0FXX-640-200.jpg',
        },
        {
          linkUrl: 'https://img.alicdn.com/imgextra/i2/50/O1CN01rdzmZw1CEwRjCoqxX_!!50-0-luban.jpg',
        }
      ],
      wrapperData: [
        {text: '天猫', "icon": require('../../assets/img/home/wrapper/tm.png')},
        {text: '聚划算', "icon": require('../../assets/img/home/wrapper/jhs.png')},
        {text: '天猫国际', "icon": require('../../assets/img/home/wrapper/tmgj.png')},
        {text: '外卖', "icon": require('../../assets/img/home/wrapper/wm.png')},
        {text: '天猫超市', "icon": require('../../assets/img/home/wrapper/tmcs.png')},
        {text: '充值中心', "icon": require('../../assets/img/home/wrapper/czzx.png')},
        {text: '飞猪旅行', "icon": require('../../assets/img/home/wrapper/fzlx.png')},
        {text: '领金币', "icon": require('../../assets/img/home/wrapper/ljb.png')},
        {text: '拍卖', "icon": require('../../assets/img/home/wrapper/pm.png')},
        {text: '分类', "icon": require('../../assets/img/home/wrapper/fl.png')},
      ],
      commondityData: commondityData,
      showToTop: false  // 显示回到顶部
    }
  },
  mounted () {
    this.autoPlay()
    window.addEventListener('scroll', this.$utils.debounce(this.onScroll, 200))
  },
  methods: {
    // 打开搜索背景
    openSearch () {
      console.log('1211')
    },

    // 播放音乐
    autoPlay () {
      return new Promise((resolve) => {
        let audio = this.$refs.audio;
        resolve(audio)
      }).then((res)=> {
        res.play()
      })
    },

    // 监听滚动条
    onScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 200) {
        this.showToTop = true
      } else {
        this.showToTop = false
      }
    },

    // 回到顶部
    goTop () {
      let timer = null;
      timer = setInterval(() => {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop = document.documentElement.scrollTop - 20
        }
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer)
        }
      }, 30)
    },

    // 跳转到推荐详情
    toCommondityDetail (data) {
      this.$router.push({path: `/product-detail/${data.id}`})
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 35px !important;;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.home-wrap {
  width: 100%;
  font-size: $font14; /*no*/
  .sc-bxivhb {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: calStyle(80);
    background-color: #FF852A;
    .header-bd {
      width: 100%;
      padding-right: calStyle(20);
      padding-left: calStyle(84);
      padding-top: calStyle(12);
      padding-bottom: calStyle(12);
      background-image: url('../../assets/img/home/logo.png');
      background-repeat: no-repeat;
      background-size: calStyle(54) calStyle(40);
      background-position: calStyle(18) center;
      .placeholder {
        display: block;
        font-size: 0;
        background-color: #FF4E22;
        text-align: center;
        border-radius: calStyle(8);
        .text {
          position: relative;
          display: inline-block;
          height: calStyle(50);
          line-height: calStyle(50);
          font-size: $font14; /*no*/
          color: #F0E0DC;
          &::before {
            position: absolute;
            left: calStyle(-36);
            top: calStyle(8);
            display: inline-block;
            content: "";
            width: calStyle(30);
            height: calStyle(30);
            color: #fff;
            background: url('../../assets/img/home/search-c.png') no-repeat;
          }
        }
      }
    }
  }
  .slide-show {
    height: 100%;
    padding-top: calStyle(80);
    overflow: hidden;
    z-index: 1;
    .img-style {
      width: 100%;
      height: calStyle(240);
    }
  }

  /* 
    box-wrapper
  */
  .box-wrap {
    display: flex;
    position: relative;
    margin-top: calStyle(-22);
    z-index: 2;
    .DView {
      display: flex;
      overflow: hidden;
      background-color: rgb(255, 255, 255);
      margin-top: calStyle(20);
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
      position: absolute;
    }
    .box-header{
      display: flex;
      position: absolute;
      /*top: -10px;*/
      width: 100%;
      height: 100%;
      overflow: hidden;
      .header-back {
        width: 100%;
        height: 100%;
        background-image: url('../../assets/img/home/wrapper/wrapper_header.png');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
      }
    }
    .list-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      z-index: 2;
      .wrapper-flex {
        -webkit-box-flex: 0;
        flex: 0 0 20%;
        .block {
          display: flex;     
          align-items: center;       
          justify-content: center;
          flex-direction: column;
          padding: calStyle(12) calStyle(4);
          box-sizing: border-box;
          font-size: $font12; /*no*/
          color: #222;
          .wrap-icon {
            width: calStyle(122);
            height: calStyle(96);
          }
          .wrapper-text {
            margin-top: calStyle(10);
            color: #585656;
          }
        }
      }
      .commondity-flex {
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        .commondity-style  {
          display: flex;     
          align-items: center;       
          justify-content: center;
          flex-direction: column;
          min-height: calStyle(246);
          font-size: $font12; /*no*/
          color: #222;
          .commondity-detail {
            width: calStyle(120);
            min-height: calStyle(72);
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .commondity-text {
              margin-top: calStyle(10);
              color: #585656;
            }
            .commondity-desc {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .commondity-icon {
            width: calStyle(124);
            height: calStyle(124);
            margin-top: calStyle(20);
          }
        }
      }
    }
  }

  /*
    活动文字
  */
  .notice {
    display: flex;
    align-items: center;
    padding: 0 calStyle(30);
    height: calStyle(70);
    line-height: calStyle(70);
    background: $white;
    .notice-text {
      white-space: nowrap;
    }
    .wrap {
      position: relative;
      width: calStyle(550);
      height: calStyle(70);
      overflow: hidden;
      margin: 0 auto;
      ul {
        position:absolute;
        height: calStyle(70);
        line-height: calStyle(70);
        li {
          float: left;
          // width: 200px;
          margin-right: calStyle(40);
          height: calStyle(70);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: rgb(153, 153, 153)
        }
      }
    }
  }

  /* 商品展示 */
  .commodity {
    margin: calStyle(20) 0 calStyle(120);
    padding-top: calStyle(10);
    background: $white;
  }

  /* 回到顶部 */
  .to-top {
    position: fixed;
    bottom: calStyle(160);
    right: calStyle(20);
    transition: opacity 0.2s linear 0s, visibility;
    z-index: 3;
    opacity: 1;
    visibility: visible;
    .fSEVbN {
      position: relative;
      width: calStyle(90);
      height: calStyle(90);
      line-height: calStyle(90);
      color: #bbb;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      font-size: $font12; /*no*/
      text-align: center;
      .top-img {
        position: absolute;
        left: calStyle(22);
        top: calStyle(4);
        display: inline-block;
        width: calStyle(48);
        height: calStyle(48);
        background: url('../../assets/img/home/top.png') no-repeat;
        background-size: contain;
      }
      .top-text {
        position: absolute;
        top: calStyle(20);
        left: calStyle(22);
        display: block;
        letter-spacing: calStyle(2);
      }
    }
  }
}
</style>