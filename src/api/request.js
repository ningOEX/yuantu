import axios from "axios";


// 创建实例
const ins = axios.create({
    baseURL: "",
    timeout: 5000,

})

// 请求拦截
ins.interceptors.request.use(
    config => {
        // console.log(config, "请求拦截");
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
ins.interceptors.response.use(
    config => {
        // console.log(config, "响应拦截");
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


export default ins