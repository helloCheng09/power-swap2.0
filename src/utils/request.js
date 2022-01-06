import { __awaiter, __generator } from "tslib";
/**
 * ------------------------------------------------------------------
 * Request
 * @data 2021-10-11
 * @author WaltChan<1814638551@qq.com>
 * ------------------------------------------------------------------
 */
import axios from 'axios';
import { message } from 'ant-design-vue';
import { useAppStore } from '../store/app';
// 调用函数 获取store
var appStore = useAppStore();
message.config({
    duration: 5
});
var HttpRequest = /** @class */ (function () {
    function HttpRequest(config) {
        // 单例输出
        if (HttpRequest._instance) {
            return HttpRequest._instance;
        }
        // 初始化
        this._init(config);
    }
    HttpRequest.prototype.request = function (url, config, mock) {
        if (mock === void 0) { mock = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.url = HttpRequest.API_PREFIX + (config.url || url);
                        return [4 /*yield*/, this._axiosInstance.post(url, config.data)];
                    case 1:
                        result = _a.sent();
                        data = result.data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // get !!!
    HttpRequest.prototype.get = function (url, config, mock) {
        if (mock === void 0) { mock = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.url = HttpRequest.API_PREFIX + (config.url || url);
                        return [4 /*yield*/, this._axiosInstance.post(url, config.data)];
                    case 1:
                        result = _a.sent();
                        data = result.data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // post !!!
    HttpRequest.prototype.post = function (url, config, mock) {
        if (mock === void 0) { mock = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.url = HttpRequest.API_PREFIX + (config.url || url);
                        return [4 /*yield*/, this._axiosInstance.post(url, config.data)];
                    case 1:
                        result = _a.sent();
                        data = result.data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // 初始化axios
    HttpRequest.prototype._init = function (config) {
        if (config === void 0) { config = {
            baseURL: process.env.VUE_APP_BASE_API,
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }; }
        // 创建axios实例
        this._axiosInstance = axios.create(config);
        this.addRequestIpt();
        this.addResponseIpt();
        HttpRequest._instance = this;
    };
    // 添加请求拦截器
    HttpRequest.prototype.addRequestIpt = function () {
        // 添加请求拦截器
        this._axiosInstance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            // 公共参数
            var commonParams = {};
            // 混入公共参数
            if (config.data) {
                config.data = Object.assign(config.data, commonParams);
            }
            // 标记response按照请求顺序返回
            if (config.data && config.data.isSync) {
                /*
                  生成一个时间戳，绑定到url，一个存到到全局变量，另一个添加到请求配置中并随response返回
                  然后拿response返回的时间戳与全局变量中的去比对，如果不一致，则添加一个为按请求顺序返回的标记
                */
                var time = Date.now();
                HttpRequest.stamps = HttpRequest.stamps || {};
                HttpRequest.stamps[config.url] = time;
            }
            return config; // 此处切记记得将请求参数return出去
        }, function (error) {
            // 对请求错误做些什么
            // 下放错误
            Promise.reject(error);
        });
    };
    // 添加请求拦截器
    HttpRequest.prototype.addResponseIpt = function () {
        // 添加响应拦截器
        this._axiosInstance.interceptors.response.use(function (response) {
            var _a = response.data, code = _a.code, msg = _a.msg, config = response.config;
            // 是否是二进制文件流
            // 对一些错误的code 的处理，比如登录过期等等
            if (code === 404) {
                // xxxx
            }
            // 对响应数据做点什么
            if (response.data.status === '403') {
                // router.push('/login')
            }
            // 只将response 中的 data 输出
            return response;
        }, 
        /**
         * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
         * 如通过httpRequest 状态码标识 逻辑可写在下面error中
         */
        function (err) {
            // 对响应错误做点什么
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '(错误请求) 服务器不理解请求的语法。';
                        break;
                    case 401:
                        err.message =
                            '(未授权) 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。';
                        break;
                    case 403:
                        err.message = '(禁止) 服务器拒绝请求。';
                        break;
                    case 404:
                        err.message = "(\u672A\u627E\u5230) \u670D\u52A1\u5668\u627E\u4E0D\u5230\u8BF7\u6C42\u7684\u63A5\u53E3\u3002".concat(err.response.config.url);
                        break;
                    case 408:
                        err.message = '(请求超时) 服务器等候请求时发生超时。';
                        break;
                    case 500:
                        err.message = '(服务器内部错误) 服务器遇到错误，无法完成请求。';
                        break;
                    case 501:
                        err.message =
                            '(尚未实施) 服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码。';
                        break;
                    case 502:
                        err.message =
                            '(错误网关) 服务器作为网关或代理，从上游服务器收到无效响应。';
                        break;
                    case 503:
                        err.message =
                            '(服务不可用) 服务器目前无法使用(由于超载或停机维护)。通常，这只是暂时状态。';
                        break;
                    case 504:
                        err.message =
                            '(网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求。';
                        break;
                    case 505:
                        err.message =
                            '(HTTP 版本不受支持) 服务器不支持请求中所用的 HTTP 协议版本。';
                        break;
                    default:
                }
                message.error(err.message);
                appStore.changeSpinStatus(false);
            }
            // 可在此注入log操作 !!!!!
            // 下放错误
            return Promise.resolve(err);
        });
    };
    HttpRequest.API_PREFIX = '';
    HttpRequest.stamps = {};
    return HttpRequest;
}());
export default new HttpRequest();
//# sourceMappingURL=request.js.map