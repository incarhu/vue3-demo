<template>
  <div class="todolist-contain">
    <input type="text" class="input-m" v-model="val" @keyup.enter="addTodo">
    <div class="content">
      <ul>
        <li class="col" v-for="(list, index) in lists.arr" :key="index">
          <span class="text" @dblclick="dbClilck">{{list.title}}</span>
          <i v-if="list.title" class="delete" @click="deletes(lists.arr,index)">删除</i>
        </li>
      </ul>
    </div>
    <div class="axle">x轴：{{x}}，，--，，y轴：{{y}}</div>
  </div>
</template>

<script setup>
// import {ref, reactive, toRefs} from 'vue'
import useTodos from './add/useTodos'
import deleteTodos from './delete/delete'
import { coordinate } from './coordinate/coordinate'

let { val, lists, addTodo } = useTodos()
let { deletes } = deleteTodos()
let {x, y} = coordinate()
</script>

<style scoped lang="scss">
.todolist-contain {
  padding: calStyle(20) calStyle(30);
  background: #ccc;
  .input-m {
    width: 100%;
    height: calStyle(60);
    padding: 0 calStyle(10);
    font-size: $font16;
    outline: 0;
  }

  .content {
    margin-top: calStyle(20);
    font-size: $font16;
    .col {
      display: flex;
      padding-top: calStyle(10);
      .text {
        flex: .8;
      }
      .delete {
        flex: .1;
        margin-left: calStyle(15);
        color: #ff0000;
        cursor: pointer;
      }
    }
  }
  .axle {
    margin-top: calStyle(20);
    font-size: $font16;
  }
}
</style>