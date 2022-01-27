<template>
  <div>
    <span>title : {{state.title}}</span>
    <p>content : {{state.content}}</p>
    <button @click="test">test button</button>
    <p>{{counter}}</p>
    <p>{{book.title2}}</p>
    <button ref="myButton">ref button</button>
  </div>
</template>

<script>

import {ref, toRefs, reactive, onMounted} from "vue";
/**
 * setup()
 * 컴포넌트가 생성되기 전에 실행. create()보다 먼저 실행.
 * 함수 안에서 this를 사용 할 수 없다. 인자로 넘겨 받는 props, context를 제외하고는 컴포넌트 옵션 속성에 접근 할 수 없음. ( props, {attrs, slots, emit} ) 단 4개의 인스턴스 속성에 접근.
 * ==> 왜냐.. 컴포넌트가 아직 실행되지 않았기 때문에!!
 * ==> setUp 밖의 속성들은 ( data, computed, methods ) setUp함수 안에서 접근 할 수 없다.
 *
 * 반환한 객체는 템플릿 표현식에서 사용할 수 있음.
 *
 * */
export default {
  name: "SetUpMethodComponent",
  // vue2.x 방식
  // props:{
  //   contentId : String
  // },
  // data (){
  //   return {
  //     title : '',
  //     content: ''
  //   }
  // },
  // methods:{
  //   test(){
  //     console.log('called test');
  //   }
  // }

  // vue3.x 방식
  props: {
    contentId : String,
  },
  setup(props, context){
    console.log(props);
    const { contentId } = toRefs(props); // << 이렇게 디스트럭처링을 사용.
    console.log("contentId : ", contentId);

    // context는 3개의 컴포넌트 속성에 접근 할 수 있다.
    //  setup(props, {attrs, slots, emit}) << 모두 반응성이 없어서 이렇게 디스트럭처링이 가능하다.
    // 애트리뷰트(반응성 없는 객체)
    console.log(context.attrs)
    // 슬롯(반응성 없는 객체)
    console.log(context.slots)
    // 이벤트 에밋
    console.log(context.emit)

    const state = ref({
      title : 'title Test',
      content: 'content Test'
    })

    const test = () => {
      console.log('called test')
    }

    const counter = ref(0);
    counter.value++;

    const book = reactive({title2 : 'Vue3 setUp Guide'});


    const refButton = ref(null);
    onMounted(()=>{
      console.log("REF BUTTON!!!")
    })

    return {
      state, test,
      counter, book,
      refButton
    }
  }
}
</script>

<style scoped>

</style>