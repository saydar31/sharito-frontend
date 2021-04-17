import axios from 'axios';
import store from '@/store';

const apiUrl = process.env.VUE_APP_GLOBAL_URL;

const headers = () => {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    let token = store.getters.token;
    if (token)
        Object.assign(headers.headers, {Authorization: token});

    return headers;
};

const formHeaders = () => {
    let headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    let token = store.getters.token;
    if (token)
        Object.assign(headers.headers, {Authorization: token});

    return headers;
}

const restStart = () => {
    store.dispatch('restStart');
};

const restFinish = () => {
    store.dispatch('restFinish');
};

const restPromise = (axiosPromise) => {
    return new Promise((resolve, reject) => {
        axiosPromise
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                })
                .finally(() => {
                    restFinish();
                })
    })
};

export default {
    getFile(url) {
        restStart();
        return restPromise(
            axios.get(apiUrl + url, { headers : {Authorization: store.getters.token}, responseType: 'arraybuffer'})
        );
    },

    getFileToDownload(url) {
        restStart();
        return restPromise(
            axios.get(apiUrl + url, { headers : {Authorization: store.getters.token}, responseType: 'blob'})
        );
    },

    doGet(url) {
        restStart();
        return restPromise(
                axios.get(apiUrl + url, headers())
        );
    },

    doPut(url, body) {
        restStart();
        return restPromise(
                axios.put(apiUrl + url, body ? body : {}, headers())
        );
    },

    doPost(url, body) {
        restStart();
        return restPromise(
                axios.post(apiUrl + url, body ? body : {}, headers())
        );
    },

    doPostAsForm(url, body){
        restStart();
        return restPromise(
            axios.post(apiUrl + url, body ? body : new FormData(), formHeaders())
        );
    },

    doDelete(url) {
        restStart();
        return restPromise(
                axios.delete(apiUrl + url, headers())
        );
    },

    encodeSearchURI(string){
        return encodeURIComponent(string).replace(/[!'()*]/g, escape);
    }
}
