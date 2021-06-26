<template>
  <div class="recreation">
    <ul class="cont">
      <li v-for="(tab, index) in tabs.arr" :key="index" @click="tabClick(tab.name)" :class="tab.name == activeStr ? 'active' : ''">
        {{tab.title}}
      </li>
    </ul>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// import Book from './Book/book.vue'
// import Movie from './Movie/movie.vue'
// import Music from './Music/music.vue'
import { ref, reactive, defineAsyncComponent } from 'vue'
export default {
  props: {
    title: {
      type: String,
    }
  },
  setup(props) {
    const currentTabComponent = ref('Book')
    let activeStr = ref('Book')
    const tabs = reactive(
      {arr:[
        {title: '读书', name: 'Book'},
        {title: '电影', name: 'Movie'},
        {title: '音乐', name: 'Music'},
      ]} 
    )

    const tabClick = (name)=> {
      // console.log(props)
      currentTabComponent.value = name
      activeStr.value = name
    }

    return {
      currentTabComponent,
      activeStr,
      tabs,
      tabClick
    }
  },
  components: {
    Book: defineAsyncComponent({
      loader: ()=> import('./Book/book.vue')
    }),
    Movie: defineAsyncComponent({
      loader: ()=> import('./Movie/movie.vue')
    }),
    Music: defineAsyncComponent({
      loader: ()=> import('./Music/music.vue')
    })
  }
}
</script>

<style lang="scss" scoped>
.recreation {
  font-size: 16px;
  .cont {
    width: 100%;
    display: flex;
    height: calStyle(90);
    line-height: calStyle(90);
    align-items: center;
    .active {
      color: #ff0000;
    }
  }
  .cont li {
    flex: 1;
    line-height: calStyle(30);
    padding-top: calStyle(20);
    font-size: 20px;
    text-align: center;
  }
}
</style>