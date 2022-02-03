
import {ref, computed} from 'vue'

export default function userRepositoryNameSearch(repositories){
    const searchQuery = ref('');
    const repositoriesMatchingSearchQuery = computed(()=>{
        return repositories.value.filter(repository => {
            return repository.name.includes(searchQuery.value)
        });
    });

    return {
        repositories, repositoriesMatchingSearchQuery
    }
}