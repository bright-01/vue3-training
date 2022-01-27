<template>
  <div>
    <input type="text" @keyup.enter="enter">
  </div>
</template>
<script>
export default {
  name: "KeyboardEventControl",
  methods: {
    enter() {
      console.log('ENTER!!!!!!');
    }
  }
}

/**
 * # Key Modifier
 * .enter
 * .tab
 * .delete
 * .esc
 * .space
 * .up
 * .down
 * .left
 * .right
 * */
</script>

<style scoped>

</style>