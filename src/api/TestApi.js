import {instance} from "./index";

const fetchUserRepositories = (user) => {
    return instance.get('user');
}

export {
    fetchUserRepositories
}