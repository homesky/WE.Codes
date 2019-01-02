//axios封装
import Vue from 'vue'
import axios from 'axios';
//axios配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://192.168.0.143:8054/api';

//http request 拦截器
axios.interceptors.request.use(
    config => {
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
        return Promise.reject(error);
    }
);


//响应拦截器
axios.interceptors.response.use(response => {
    console.log(response)
    if (response.data.errCode == 401) {
        router.push({
            path: "/login",
            querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
        })
    }
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = "连接到服务器失败"
    }
    //TODO:对话框
    message.error(error.message)
    return Promise.resolve(error.response)
});


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
    })
};

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(response => {
            resolve(response.data);
        }, error => {
            console.log(error);
            reject(error)
        })
    })
}
Vue.prototype.$get = get;
Vue.prototype.$post = post;

/*GET调用方法如下，其中url是接口地址
this.$get(url).then((res) {
});
//POST调用方法如下，其中url是接口地址，data是请求的数据。
this.$post(url,data).then({
});*/