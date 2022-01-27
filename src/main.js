import { createApp } from 'vue'
import App from './App.vue'
import {reactive} from "vue";


const app = createApp(App).use(reactive);

app.mount('#app')
