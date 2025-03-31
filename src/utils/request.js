import axios from "axios";
import { getToken, removeToken } from "./cookie";
import router from "@/router";


// 不同的功能通过axios请求的是不同的接口地址
// 127.0.0.1:19090
// 配置代理服务器   浏览器->代理服务器->后端接口
axios.defaults.headers["Content-Type"]="application/json;charset=utf-8";

const service=axios.create({
    baseURL: "/dev-api",
    timeout: 5000,    
});

// 请求拦截器
service.interceptors.request.use(
    (config)=>{
        if(getToken()){
            config.headers["Authorization"]="Bearer "+getToken();
        }
        return config;
    },
    (error)=>{
        console.log(error);
        return Promise.reject(error);
  }
);

service.interceptors.response.use(
    // 成功的回掉函数，只要能正常与后端进行通讯就算成功
    (res) => {
        // 未设置状态码则默认成功状态
        const code=res.data.code;
        const msg=res.data.msg;
        if(code===3001){
            ElMessage.error(msg);
            removeToken()
            // router.push('/oj/login')
            return Promise.reject(new Error(msg));
        }else if(code!==1000){
            console.log("print");
            ElMessage.error(msg);
            // removeToken()
            // router.push('/oj/login')
            return Promise.reject(new Error(msg)); // 抛出异常
        }else{
            return Promise.resolve(res.data);   //  将返回数据进行一层解包
        }
    },
    // 失败的回掉函数
    (error)=>{
        return Promise.reject(error);
    }
);

export default service;