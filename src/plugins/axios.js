"use strict";

import axios from "axios";
import store from "@/store";
import {
    COMMON_SET_LOADING,
    COMMON_SET_SERVER_ERRORS,
    COMMON_UPDATE_LOGOUT_TIMEOUT
} from "../store/actions/common";
import router from "@/router";
import { ACCOUNT_REMOVE_TOKEN } from "../store/actions/account";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.headers['Accept-Language'] = "uz-UZ";
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '/api/';

// Buni store/accountni ichida yozib qo'ydim
// let token = localStorage.getItem('jwt-token')
// if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || "/api/"
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        store.commit(COMMON_SET_LOADING, true)
        store.commit(COMMON_SET_SERVER_ERRORS, {})
        return config;
    },
    function (error) {
        store.commit(COMMON_SET_LOADING, false)
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        let data = response.data;
        data.code = response.status
        data.success = data.status === 'success'
        data.fail = data.status === 'fail'
        data.error = data.status === 'error'

        store.commit(COMMON_SET_LOADING, false)

        if (data.fail) {
            store.commit(COMMON_SET_SERVER_ERRORS, data.data)
        }

        if (data.success || data.fail) {
            store.commit(COMMON_UPDATE_LOGOUT_TIMEOUT)
        }
        return data;
    },
    function (error) {
        store.commit(COMMON_SET_LOADING, false)

        let data = {
            code: typeof error.response != 'undefined' ? error.response.status : 404,
            error: true,
            status: 'error',
            data: typeof error.response != 'undefined' ? error.response.statusText : error.message
        }

        if (data.code === 401) {
            store.commit(ACCOUNT_REMOVE_TOKEN)
            let app = window.vueapp;
            if (app) {
                app.config.globalProperties.$toast.add({
                    severity: 'warn',
                    summary: app.config.globalProperties.$t('account.logout'),
                    detail: app.config.globalProperties.$t('account.token-timeout'),
                    life: 7000
                });
            }
            router.push({name: 'account.login'});
        }

        return data;
    }
);

export const $axios = _axios;

export default {
    install: (app) => {
        app.config.globalProperties.$axios = _axios;
    }
};

