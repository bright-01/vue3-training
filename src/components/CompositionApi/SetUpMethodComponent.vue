<template>
  <div>
    <span>title : {{state.title}}</span>
    <p>content : {{state.content}}</p>
    <button @click="test">test button</button>
    <p>{{counter}}</p>
    <p>{{counter2.number}}</p>
    <p>{{counter3}}</p>
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

    /**
     * ref와 reactive의 차이점..
     * ref : 계산 속성이 사용 불가능, 원시적?? stirng, true, 12, ...=> 나중에 재할당
     * reactvie : 계산 속성 가능, 재할당이 필요 없음..객체
     * */
    const counter = ref(0);
    const counter2 = ref({number : 0});
    const counter3 = ref(123);
    const book = reactive({title2 : 'Vue3 setUp Guide'});

    counter.value++; // ref에 접근 해야되기 때문에 .value를 사용 해야한다. ( vue2.x가 this.을 사용한것처럼... )
    counter2.value.number ++;



    const refButton = ref(null);
    onMounted(()=>{
      console.log("REF BUTTON!!!")
    })

    return {
      state, test,
      counter, counter2, counter3, book,
      refButton
    }
  }
}
</script>

<style scoped>

</style>