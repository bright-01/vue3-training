<template>

</template>

<script>
/**
 *
 *
 *
 * */
export default {
  name: "UserRepositories1",
  props:{
    type : String
  },
  data(){
    return {
      repositories :[],
      filters: {},
      searchQuery: ''
    }
  },
  computed:{
    filteredRepositories(){},
    repositoriesMatchingSearchQuery(){}
  },
  watch: {
    user : 'getUserRepositories'
  },
  methods: {
    getUserRepositories(){

    },
    updateFilters(){

    }
  },
  mounted(){
    this.getUserRepositories();
  }


}
</script>

<style scoped>

</style>