"use strict";

import {$axios} from "./axios"
import router from "@/router";

function hasFile(data) {
    if (data instanceof File) {
        return true;
    }

    if (data && (Array.isArray(data) || data instanceof Object)) {
        for(let k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k)) {
                if (hasFile(data[k])) {
                    return true;
                }
            }
        }
    }

    return false;
}

function recursiveAdd(formData, data, prefix = "") {
    if (data instanceof File) {
        formData.append(prefix, data);
        return;
    }

    if (data && (Array.isArray(data) || data instanceof Object)) {
        for(let k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k)) {
                recursiveAdd(formData, data[k], prefix + (prefix ? "[" : "") + k + (prefix ? "]" : ""));
            }
        }
    } else {
        formData.append(prefix, data);
    }
}

let api = {
    endpoint: [],
    url() {
        if (api.endpoint.length === 0) {
            // router nomidan kelib chiqib url aniqlanadi. Component ichida ishlatishga qulay.
            api.endpoint = router.currentRoute.name.split(".")
        }
        let url = api.endpoint.join("/").replaceAll("_", "-") + "/"
        api.endpoint = [];
        return url;
    },
    async request(method, data, params, options) {
        try {
            let headers = {};

            if (hasFile(data)) {
                let formData = new FormData();
                recursiveAdd(formData, data);

                headers["Content-Type"] = "multipart/form-data";
                data = formData;
            }

            let url = api.url();
            if (params) {
                let _params = {}
                Object.keys(params).forEach(item => {
                    let key = '/' + item.replaceAll('_', '-') + '/';
                    if (url.includes(key)) {
                        url = url.replace(key, '/' + params[item].toString() + '/');
                    } else {
                        _params[item] = params[item];
                    }
                });

                params = _params;
            }

            options = Object.assign({}, {
                method,
                url,
                data,
                params,
                headers
            }, options);

            return $axios(options);
        } catch (e) {
            return e;  //axios.js da to'g'rilanadi
        }
    },
    async post(data, params) {
        return await api.request('post', data, params);
    },
    async get(params, options) {
        return await api.request('get', null, params, options);
    },
    async put(data, params) {
        return await api.request('put', data, params);
    },
    async delete(data, params) {
        return await api.request('delete', data, params);
    }
}

let apiProxy = new Proxy(api, {
    get: function(target, prop) {
        if (typeof target[prop] != 'undefined') {
            return target[prop];
        }
        api.endpoint.push(prop);
        return apiProxy;
    }
});

export const $api = apiProxy;

export default {
    install: function (app) {
        app.config.globalProperties.$api = apiProxy;
    }
};
