<template>
  <section class="video_container">
    <!-- <swiper
      :slides-per-view="1"
      @click="onClick"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <video class="video"
          loop
          :direction="vertical"
          ref="video"
          src="../resource/22.mp4"
          autoplay
          controls>
        </video>
      </swiper-slide>
    </swiper>  -->
    <van-swipe vertical :show-indicators="true" @change="handleSwipeVertical">
        <van-swipe-item v-for="(item, index) in recommends.arr" :key="index">
            <!-- ///视频模块 -->
            <div class="swipe_video">
                <video class="vdplayer"
                  loop
                  preload="auto"
                  autoplay
                  ref="vdType"
                  :src="item.linkUrl"
                  :poster="item.linkUrl"
                  webkit-playsinline="true" 
                  x5-video-player-type="h5-page"
                  x5-video-player-fullscreen="true"
                  playsinline
                  @click="handleVideoClicked">
                </video>
            </div>
            <div class="right_info" @click="operationClick">
              <!-- 右边工具模块 -->
              <div class="operation_list">
                <div class="mrbom20" @click="handleCollect(item)">
                  <p class="icon iconfont" :class="[isActive ? 'iconbuoumaotubiao16' : 'icondianzan']"></p>
                  <p>{{item.operation.collect}}</p>
                </div>
                <div class="mrbom20" @click="handleComment(item)">
                  <p class="icon iconfont icon53pinglun-"></p>
                  <p>{{item.operation.comment}}</p>
                </div>
                <div @click="handleShare(item)">
                  <p class="icon iconfont iconredo"></p>
                  <p>{{item.operation.share}}</p>
                </div>
              </div>
            </div>
            <div class="bottom_progress">
              <span class="progress" :style="{'width': dynamicProgress + '%'}"></span>
            </div>
        </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import {ref, reactive, onMounted} from 'vue'
import a1 from './images/11.jpg'
import a2 from './images/22.jpg'
import a3 from './images/33.jpg'
import a4 from './images/44.jpg'
export default {
  setup() {
    const vdType = ref(null)
    const dynamicProgress = ref(0)
    const isActive = ref(false)
    const recommends = reactive(
      {
        arr: [
          {
            id: 1,
            linkUrl: a1,
            timer: '15',
            operation: {
              collect: 200,
              comment: 1,
              share: 1
            }
          },
          {
            id: 2,
            linkUrl: a2,
            timer: '15',
            operation: {
              collect: 1,
              comment: 3,
              share: 2
            }
          },
          {
            id: 3,
            linkUrl: a3,
            timer: '15',
            operation: {
              collect: 2,
              comment: 6,
              share: 3
            }
          },
          {
            id: 4,
            linkUrl: a4,
            timer: '15',
            operation: {
              collect: 2,
              comment: 7,
              share: 4
            }
          }
        ]
      }
    )

    // 滑动视频
    const handleSwipeVertical = (index) => {
      // alert(index)
      aa(index)
    }

    function aa (index)  {
      alert(index)
    }

    // 点击视频
    const handleVideoClicked = (e) => {
      e.stopPropagation()

      if(vdType.value.paused) {
        vdType.value.play()
      } else {
        vdType.value.pause()
      }
    }

    // 点击工具栏
    const operationClick = (e) => {
      e.stopPropagation()
    }

    // 点击收藏
    const handleCollect = (data) => {
      console.log('收藏中...')
      console.log(data)
      isActive.value = !isActive.value
    }

    // 点击评论
    const handleComment = (data) => {
      console.log('评论中...')
      console.log(data)
    }

    // 点击分享
    const handleShare = (data) => {
      console.log('分享中...')
      console.log(data)
    }

    onMounted(_=> {
      progress()
    })

    // 进度条
    function progress () {
      let totalTime = recommends.arr[0].timer
      let currentTime = 1
      let timer = null

      timer = setInterval(_ => {
        console.log(dynamicProgress.value)
        if(dynamicProgress.value <= 100) {
          dynamicProgress.value = (currentTime / totalTime) * 100
          currentTime += 1
        } else {
          clearInterval(timer)
        }
      }, 1000)
    }

    return {
      recommends,
      vdType,
      dynamicProgress,
      handleSwipeVertical,
      handleVideoClicked,
      operationClick,
      handleCollect,
      handleComment,
      handleShare,
      isActive
    }
  }
}
</script>

<style scoped lang="scss">
.video_container {
  overflow: hidden;
  height: 100%;
  z-index: 1;
  .swipe_video {
    width: 100%;
    height: 667px;
  }

  .right_info {
    position: absolute;
    right: 6%;
    top: 10%;
    width: 50px;
    z-index: 9;
    background: rgba(255, 255, 255, 1);
    font-size: 16px;
    .operation_list {
      display: flex;
      padding: calStyle(20) 0;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      .iconbuoumaotubiao16 {
        color: #ff0000;
        font-size: 26px;
      }
    }
  }

  .bottom_progress {
    position: absolute;
    top: 22%;
    width: 100%;
    z-index: 9;
    background: #c1c0c0;
    .progress {
      display: block;
      height: 1px;
      background: #fff;
      transition: width 2s;
    }
  }
}
.iconfont {
  font-size: 26px;
}
.mrbom20 {
  margin-bottom: calStyle(40)
}
</style>