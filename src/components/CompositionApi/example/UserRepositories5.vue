<template>

</template>


<script>
import userRepositoryNameSearch from "./js/useRepositoryNameSearch";
import useUserRepositories from "./js/useUserRepositories";
import {toRefs} from 'vue';

export default {
  name: "UserRepositories1",
  props: {
    type: String
  },
  setup(props) {
    const {user} = toRefs(props);

    const {repositories, getUserRepositories} = useUserRepositories(user);
    const {searchQuery, repositoriesMatchingSearchQuery} = userRepositoryNameSearch(repositories);


    return {
      repositories,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery
    }
  },
  data() {
    return {
      // repositories :[],
      filters: {},
      // searchQuery: ''
    }
  },
  computed: {
    filteredRepositories() {
    },
    // repositoriesMatchingSearchQuery() {
    // }
  },
  watch: {
    // user: 'getUserRepositories'
  },
  methods: {
    // getUserRepositories(){
    // },
    updateFilters() {
    }
  },
  // mounted(){
  //   this.getUserRepositories();
  // }
}
</script>

<style scoped>

</style>