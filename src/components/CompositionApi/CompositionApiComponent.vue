<template>
  <div>
    <div>
      <label for="username">username : </label>
      <input type="text" id="username" v-model="state.username">
    </div>
    <div>
      <label for="usernameLow">username LOW CASE : </label>
      <input type="text" id="usernameLow" v-model="state.lowCaseUsername">
    </div>
    <div>
      <label for="address">address : </label>
      <input type="text" id="address" v-model="state.address">
    </div>

    <div>
      <label for="changeName">changeName : </label>
      <input type="text" id="changeName" @input="changeName">
    </div>
    <button @click="login">login</button>



  </div>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "CompositionApiComponent",
  props:{
    company : Object
  },
  setup(props, {attrs, slots, emit}) {

    console.log("props :" , props);

    const state = reactive({
      username: '',
      address: '',
      lowCaseUsername: computed(() => state.username.toLowerCase())
    })

    const changeName = (e) => {
      console.log(e);
      state.username = e.target.value;
    }

    const login = () => { emit('login', state.username)}

    return {
      state, changeName, login
    }
  }
}
</script>

<style scoped>

</style>