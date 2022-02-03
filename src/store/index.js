import { createStore } from "vuex";

import defaultStore from '@/store/default/defaultStore';
import Counter from './Counter';
import {moduleA} from "./moduleA";


export default createStore({
    modules: {
        defaultStore,
        Counter, moduleA
    }
})