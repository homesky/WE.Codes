//axios封装
//sky 

import axios from 'axios';

//axios配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL ='/api';

let cancel, promiseArr = {}
//http request 拦截器
axios.interceptors.request.use(
    config => {
        //发起请求时，取消掉当前正在进行的相同请求
        if (promiseArr[config.url]) {
            promiseArr[config.url]('操作取消')
            promiseArr[config.url] = cancel
        } else {
            promiseArr[config.url] = cancel
        }

        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);