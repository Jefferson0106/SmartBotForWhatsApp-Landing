import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueTelInput } from 'vue3-tel-input'; 
import 'vue3-tel-input/dist/vue3-tel-input.css'; 

const app = createApp(App);

app.use(router);


app.component('VueTelInput', VueTelInput);

app.mount('#app');