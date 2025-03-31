import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import "@/assets/main.scss" 
import 'element-plus/theme-chalk/el-message.css'



const app = createApp(App)

app.use(router)

app.use(ElementPlus,{
    locale:zhCn,
})

app.mount('#app')
