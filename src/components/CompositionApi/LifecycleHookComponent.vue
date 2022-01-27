<template>

</template>

<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated, onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated
} from "vue";

// return 할 필요 없음.
export default {
  name: "LifecycleHookComponent",
  setup() {
    onBeforeMount(() => {
      // ...
    })
    onMounted(() => {
      // ...
    })
    onBeforeUpdate(() => {
      // ...
    })
    onUpdated(() => {
      // ...
    })
    onBeforeUnmount(() => {
      // ...
    })
    onUnmounted(() => {
      // ...
    })
    onActivated(() => {
      // ...
    })
    onDeactivated(() => {
      // ...
    })
    onErrorCaptured(() => {
      // ...
    })
  }
}
</script>

<style scoped>

</style>