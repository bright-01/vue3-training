<template>

</template>


<script>
import { fetchUserRepositories } from "@/api/TestApi";
import { ref,toRefs, onMounted, watch } from 'vue';
export default {
  name: "UserRepositories1",
  props:{
    type : String
  },
  setup(props){
    console.log('setup!');
    const { user } = toRefs(props);
    // let repositories = []; 아래와 같은 방식으로 선언해서 반응형 참조를 만든다.
    let repositories = ref([]);
    const getUserRepositories = async () => {
      // props.user의 참조 .value에 접근하기 위해서 'user.value'로 변경
      repositories = await fetchUserRepositories(user.value);
    }

    //라이프사이클 훅 추가
    onMounted(getUserRepositories);

    // props로 받고 반응성참조가 된 user에 감시자를 세팅
    watch(user, getUserRepositories)

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
  // mounted(){
  //   this.getUserRepositories();
  }


}
</script>

<style scoped>

</style>