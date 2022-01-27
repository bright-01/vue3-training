<template>
  <MyInput v-model="inputText"></MyInput>
  <hr/>
  <SetUpMethodComponent></SetUpMethodComponent>
  <hr/>
  <ComputedComponent></ComputedComponent>
  <hr/>
  <CompositionApiComponent :company="company" @login="login"></CompositionApiComponent>


</template>

<script>

import MyInput from "@/components/vmodel/MyInput";
import SetUpMethodComponent from "@/components/CompositionApi/SetUpMethodComponent";
import ComputedComponent from "@/components/CompositionApi/ComputedComponent";
import CompositionApiComponent from "@/components/CompositionApi/CompositionApiComponent";

export default {
  components: {
    MyInput,
    SetUpMethodComponent,
    ComputedComponent,
    CompositionApiComponent
  },
  setup(){
    const company = {
      name : 'mwcheon',
      phone : 1234,
      email: 'bright1@bright1.com'
    }

    const login = (name) =>{
      console.log("login : ", name);
    }
    return {
      company,
      login
    }
  }
}
</script>

<style>
</style>
