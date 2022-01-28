<template>

</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 *
 * 스토어를 모듈화 해서 쪼개서 사용할때 호출 방법
 * state : state.moduleName.stateName으로 호출 ==> store.state.Counter.counter
 * getter, mutation, action은 모둘 네임으로 쪼개지지 않고 전역값으로 들어감
 * => store.getters.time2, store.getters.doubleCount
 *
 * #namespace로 스토어를 관리 할 때 ==> namespaced: true, 스토어에 이거 하나만 넣으면 됌
 *
 *
 * state는 기존대로 state.moduleName.stateName으로 부릅니다.

 getters는 computed(() => store.getters["moduleName/getterName"])으로 부릅니다. ==> store.getters["moduleA/doublecount"]

 mutation은 store.commit("moduleName/mutationName", params)으로 부릅니다.

 action은 store.dispatch("moduleName/actionName", params)으로 부릅니다. `





 *
 * Global action, mutation
 * ==> dispath 할때 root : true 를 넣어준다
 * ==> dispatch ( "globalActoin", null, {root: true} )
 *
 *
 *
 * */
export default {
  name: "StoreTestComponent",
  setup(){

    const store = useStore();
    const counter = computed(()=> store.state.counter);
    const test = computed(()=>store.getters);
    const inc = () => store.commit("SET_COUNTER", counter.value + 1);

    return {
      counter, inc, test
    }

  }

}
</script>

<style scoped>

</style>