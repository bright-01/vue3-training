<template>
<!--  1 -->
  <todo-item is-completed></todo-item>

<!-- 2 -->
  <!-- 축약 문법 -->
  <app-title v-bind="appInfo"></app-title>
  <!-- 실제로는 아래와 같이 동작 - 기존 문법 -->
  <app-title v-bind:title="appInfo.title" v-bind:version="appInfo.version"></app-title>
</template>


<script>
export default {
  name: "PropsComponent",
  props: ['isCompleted'],
  // 3
  // emits: ['remove', 'add:todo'] // 기존 문법
  emits: {
    // 유효성 검사 문법 정의
    remove: false,
    'add:todo': ({ item }) => {
      if (item) {
        return true;
      } else {
        console.log('invalid event payload');
        return false;
      }
    }
  },
  data() {
    // 2
    return {
      appInfo: {
        title: '제목',
        version: '버전'
      }
    }
  },
  created() {
    // 1
    console.log(this.isCompleted); // true
  }
}

/*
* props 속성에 값을 연결하지 않으면 true 값을 갖는다. 1
*
*
* 주석 번호는 각각의 변경된 문법끼리 묶은거..
* */
</script>

<style scoped>

</style>