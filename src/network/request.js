import axios from 'axios'

export function request (config) {                      //导出函数 requestHome
  const instance = axios.create({                           //定义 requestHome 的 axios 实例
    baseURL: 'http://152.136.185.210:8000/api/z8',
    // baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  instance.interceptors.response.use(response => {
    return response.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}
