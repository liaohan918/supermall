import axios from 'axios'

export function request(config){
    return new Promise((resolve,reject) => {
        const instance = axios.create({
            baseURL:'',
            timeout:5000
        })
        
        //请求拦截器
        instance.interceptors.request.use(config => {
            console.log('请求成功');
            //功能1-当发起请求时可以在界面中间显示等待会面,表示正在请求中
            //功能2-某些网络请求(比如登录必须携带token)，必须携带一些特殊信息
            return config;
        },error =>{
            console.log('请求失败');
        })

        instance.interceptors.response.use(res => {
            console.log("响应成功");
            return res;
        },error => {
            console.log('响应失败');
        })
        
        //发送真正的网络请求
        return instance(config);
    })
    
}