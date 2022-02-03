<template>
<!--  2.x 구분
2.x에서는 엘리먼트에 v-bind="object" 코드와 이와 동일한 개별 속성이 모두 정의된 경우, 개별 속성이 항상 object의 바인딩을 덮어쓰게 됩니다.
-->
  <!-- 템플릿 -->
  <div id="red" v-bind="{ id: 'blue' }"></div>
  <!-- 결과 -->
  <div id="red"></div>


<!--  3.x
3.x에서는 엘리먼트에 v-bind="object" 코드와 이와 동일한 개별 속성이 모두 정의된 경우, 바인딩 선언 순서에 따라 병합 방법이 결정됩니다. 다시 말해, 개발자 여러분이 항상 object에 정의된 것을 덮어쓰기 위해 개별 속성을 사용하던 상황 대신, 이제 여러분이 원하는 대로 병합 동작을 제어할 수 있게 되었음을 의미합니다.
-->
  <!-- 템플릿 -->
  <div id="red" v-bind="{ id: 'blue' }"></div>
  <!-- 결과 -->
  <div id="blue"></div>

  <!-- 템플릿 -->
  <div v-bind="{ id: 'blue' }" id="red"></div>
  <!-- 결과 -->
  <div id="red"></div>

</template>

<script>
/**
 * v-bind 내용을 덮어쓰려는 경우, v-bind 속성을 개별 속성보다 먼저 선언했는지 확인해 보세요.
 */
export default {
  name: "v-bind-merge"
}
</script>

<style scoped>

</style>