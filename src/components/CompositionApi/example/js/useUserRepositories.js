import {fetchUserRepositories} from "../../../../api/TestApi";
import {ref, onMounted, watch, toRefs} from 'vue';

export default function useUserRepositories(user) {
    const repositories = ref([]);
    const getUserRepositories = async () =>{
        repositories.value = await fetchUserRepositories(user.value);
    }

    onMounted(getUserRepositories);
    watch(user, getUserRepositories);

    return {
        repositories,
        getUserRepositories
    }
}