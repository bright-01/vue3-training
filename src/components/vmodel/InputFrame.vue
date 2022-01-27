<template>
  <my-input v-model="inputText"></my-input>
</template>

<script>
import MyInput from "@/components/vmodel/MyInput";
export default {
  name: "InputFrame",
  components: {MyInput},
  data: function () {
    return {
      inputText: ''
    }
  }
}

</script>

<style scoped>

</style>