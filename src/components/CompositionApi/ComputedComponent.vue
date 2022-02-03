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

    const counter = ref(0)
    const twiceTheCounter = computed(() => counter.value * 2)

    counter.value++
    console.log(counter.value) // 1
    console.log(twiceTheCounter.value) // 2

    /**
     * 여기, computed 펑션은computed의 첫번째 인자를 전달된 게터와 같은 콜백의 결과에 대한 읽기 전용 반응성 참조를 리턴합니다.
     * 새로 생성된 computed 변수의 value에 접근하려면, ref와 마찬가지로 .value 속성을 사용해야합니다.
     ([역주] 함수에서 반환될 때나 속성으로 할당될 때 반응성을 잃어버리기 때문에, 실제 값을 객체(.value 속성 존재)에 래핑하고 해당 객체를 리턴하여 사용하는 ref()와 사용법이 동일합니다.)
     * */

    const state = reactive(
        {
          title: 'title Test!!!!!!!!!!',
          content: 'TEST CONTENT!!!!!',
          lowerCaseTitle : computed(()=>state.title.toLowerCase())
        });
    return {
      state, counter
    }
  }
}
</script>

<style scoped>

</style>