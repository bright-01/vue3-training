<template>
  <MyInput v-model="inputText"></MyInput>
  <hr/>
  <SetUpMethodComponent></SetUpMethodComponent>


</template>

<script>

import MyInput from "@/components/vmodel/MyInput";
import SetUpMethodComponent from "@/components/CompositionApi/SetUpMethodComponent";

export default {
  components: {
    MyInput,
    SetUpMethodComponent
  },
  data() {
    return {
      inputText: ''
    }
  }
}
</script>

<style>
</style>
