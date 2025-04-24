//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HelloWorld from "./components/HelloWorld.vue"
import IconDocumentation from './components/icons/IconDocumentation.vue'
import TestH from './components/TestH.vue'
import TypeGuard from './components/TypeGuard.vue'
import AlertCustom from './components/AlertCustom.vue'
import PiniaVsComps from './components/PiniaVsComps.vue'

//import App from './App.vue'
//import router from './router'


const NameInput = {
    template: ` <label for="name">
                    <input placeholder="Enter your name" id="name" v-model.lazy="name">
                </label>
                <div>
                    <label for="chapter1">
                        <input v-model="list" type="checkbox" value="chapter01" id="chapter1" />  
                        Chapter1
                    </label>
                    <label for="chapter21">
                        <input v-model="list" type="checkbox" value="chapter02" id="chapter2" />  
                        Chapter2
                    </label>
                    <label for="chapter3">
                        <input v-model="list" type="checkbox" value="chapter03" id="chapter3" />  
                        Chapter3
                    </label>
                    <label for="chapter4">
                        <input v-model="list" type="checkbox" value="chapter04" id="chapter4" />  
                        Chapter4
                    </label>
                    <label for="chapter5">
                        <input v-model="list" type="checkbox" value="chapter05" id="chapter5" />  
                        Chapter5
                    </label>
                </div>
                <img v-bind="image">
                <HelloWorld msg="HELLO" />
    `,
    data() {
        return {
            name: "",
            list: [],
            image: {
                src: "https://i.pinimg.com/originals/24/ac/ef/24acef8b3a6a45d7239480bcc4ff0193.jpg",
                alt: "Alt"
            }
        }
    }
}

const App = {
    components: { NameInput, TestH, TypeGuard, AlertCustom, PiniaVsComps },
    template: '<div><PiniaVsComps /><NameInput /><TestH /><TypeGuard name="Invalid" /><AlertCustom v-model:isOpen="isOpen" :text="text" /></div>',
    data() {
        return {
          isOpen: true,
          text: 'Hello World'
        }
      }
}

const app = createApp(App)

app.use(createPinia())
app.component('HelloWorld', HelloWorld)
app.component('IconDoc', IconDocumentation)

//app.use(router)

app.mount('#app')
