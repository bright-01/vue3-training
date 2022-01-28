<template>

</template>


<script>
import { fetchUserRepositories } from "@/api/TestApi";
import { ref } from 'vue';
export default {
  name: "UserRepositories1",
  props:{
    type : String
  },
  setup(props){
    console.log('setup!');
    // let repositories = []; 아래와 같은 방식으로 선언해서 반응형 참조를 만든다.
    let repositories = ref([]);
    const getUserRepositories = async () => {
      repositories = await fetchUserRepositories(props.user);
    }
    return {
      repositories,
      getUserRepositories
    }
  },
  data(){
    return {
      // repositories :[],
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
    // getUserRepositories(){
    // },
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