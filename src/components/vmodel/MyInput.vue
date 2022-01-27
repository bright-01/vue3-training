<template>
  <div>
    <input :value="modelValue" @input="updateInput">
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    updateInput(event) {
      console.log(event.target.value);
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>