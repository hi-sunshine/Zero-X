/**
 * @file client.js
 *
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 * @see https://github.com/axios/axios
 */
import axios from 'axios';

export default class ApiClient {
    _buildRequest(method, url, query = {}, option = {}) {
        const ajaxParam = Object.assign({
            url,
            method,
            headers: option.headers || {
                'content-type': 'application/json;charset=utf-8',
            }
        });
        if (['post', 'put', 'delete'].includes(method.toLowerCase())) {
            ajaxParam.data = JSON.stringify(query);
        }
        return axios(ajaxParam).then(({status, data}) => {
            if (status >= 200 && status < 300) {
                return data;
            }
            return Promise.reject(res);
        }, error => {
            if (axios.isCancel(error)) {
                return;
            }
            const {response} = error;
            if (response.status == 401) {
                return;
            }
            else if (response.status == 500) {
                return;
            }
            return Promise.reject(error);
        });
    }

    queryUser(userID) {
        return this._buildRequest('get', `/user/${userID}`);
    }
};
