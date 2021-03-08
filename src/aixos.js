import axios from 'axios'

axios.defaults.baseURL ="https://hotel.gxhxinfo.com/";
// axios.defaults.baseURL ="http://192.168.1.104/lw/ldyapi/public/index.php";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// response.setHeader("Access-Control-Allow-Origin", "*");
axios.interceptors.request.use(function (config) {

    config.params = {
        ...config.params,
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
}
)

export default axios;
