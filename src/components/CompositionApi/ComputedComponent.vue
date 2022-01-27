<template>
  <div>
    <span>title : {{ state.title }}</span>
    <span>title : {{ state.lowerCaseTitle }}</span>
    <p>content : {{ state.content }}</p>
  </div>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "ComputedComponent",
  props: {
    id : Number
  },
  setup(props, context) {
    const state = reactive(
        {
          title: 'title Test!!!!!!!!!!',
          content: 'TEST CONTENT!!!!!',
          lowerCaseTitle : computed(()=>state.title.toLowerCase())
        });
    return {
      state
    }
  }
}
</script>

<style scoped>

</style>