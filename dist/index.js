"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Observable_1 = require("rxjs/Observable");
class rxios {
    constructor(options = {}) {
        this.options = options;
        this._httpClient = axios_1.default.create(options);
    }
    _makeRequest(method, url, queryParams, body) {
        let request;
        switch (method) {
            case 'GET':
                request = this._httpClient.get(url, { params: queryParams });
                break;
            case 'POST':
                request = this._httpClient.post(url, body, { params: queryParams });
                break;
            case 'PUT':
                request = this._httpClient.put(url, body, { params: queryParams });
                break;
            case 'PATCH':
                request = this._httpClient.patch(url, body, { params: queryParams });
                break;
            case 'DELETE':
                request = this._httpClient.delete(url, { params: queryParams });
                break;
            default:
                throw new Error('Method not supported');
        }
        return new Observable_1.Observable(subscriber => {
            request.then(response => {
                subscriber.next(response);
                subscriber.complete();
            }).catch((err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    get(url, queryParams) {
        return this._makeRequest('GET', url, queryParams);
    }
    post(url, body, queryParams) {
        return this._makeRequest('POST', url, queryParams, body);
    }
    put(url, body, queryParams) {
        return this._makeRequest('PUT', url, queryParams, body);
    }
    patch(url, body, queryParams) {
        return this._makeRequest('PATCH', url, queryParams, body);
    }
    delete(url, queryParams) {
        return this._makeRequest('DELETE', url, queryParams);
    }
}
exports.rxios = rxios;
//# sourceMappingURL=index.js.map
