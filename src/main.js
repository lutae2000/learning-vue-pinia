import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import store from './store/store.js'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBarsStaggered, faLocationDot, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

const pinia = createPinia();

library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass)

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
                .use(pinia)
                .mount('#app')