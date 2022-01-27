<template>
<div>
  <button @click="logText($event), sayHi($event)">text</button>
</div>
</template>

<script>
export default {
  name: "MultiEventHandlerComponent",
  methods:{
    logText(event){
      console.log(event);
    },
    sayHi(event){
      console.log(event);
    }
  }

}
</script>

<style scoped>

</style>