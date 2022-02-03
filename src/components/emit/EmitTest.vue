<template>

</template>

<script>
/**
 * https://v3.ko.vuejs.org/ko-KR/guide/forms.html#modifiers 폼바인딩 빌트인 수식어
 * */
export default {
  name: "EmitTest",
  // emits:['in-forcus', 'submit'] // 자동 대소문자 변환을 제공하지 않음. camelCase, PascalCase를 사용할 필요 없다. 항상 kebab-case로 작성하는것을 권장.
  emits: {
    //검사 절차 없음
    click : null,

    //submit 이벤트 검사
    // emit의 전달인자를 받아 이벤트가 유효한지 검증 한다.
    submit : ({email, password}) =>{
      if(email && password){
        return true;
      }else{
        console.warn('잘못된 이벤트 입니다.');
        return false;
      }
    }
  },
  methods:{
    submitForm(email, password){
      this.$emit('submit',  {email, password})
    }
  }
}
</script>

<style scoped>

</style>