import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/userStore.js";

const httpInstance = axios.create({
  baseURL: 'http://localhost:8086/',
  timeout: 5000
})
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1.pinia拿到token数据
  const userStore = useUserStore();
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance