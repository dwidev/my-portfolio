import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavBarComponent from '../src/components/NavBarComponent.vue'
import Footer from '../src/components/Footer.vue'

const app = createApp(App)

app.component('NavBarComponent', NavBarComponent)
app.component('FooterVue', Footer)

app.use(router)
app.mount('#app')
