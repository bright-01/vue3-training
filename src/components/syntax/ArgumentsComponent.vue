<template>
<div>
  <a :[attributeName]="url">...</a>
</div>
</template>

<script>
export default {
  name: "ArgumentsComponent",
  data(){
    return {
      attributeName : 'href',
      url : 'http://localhost:3000'
    }
  }
}
</script>

<style scoped>

</style>