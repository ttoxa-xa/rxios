import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs/Observable';
export interface rxiosConfig extends AxiosRequestConfig {
    localCache?: boolean;
}
export declare class rxios {
    private options;
    private _httpClient;
    constructor(options?: rxiosConfig);
    private _makeRequest<T>(method, url, queryParams?, body?);
    get<T>(url: string, queryParams?: object): Observable<T>;
    post<T>(url: string, body: object, queryParams?: object): Observable<T>;
    put<T>(url: string, body: object, queryParams?: object): Observable<T>;
    patch<T>(url: string, body: object, queryParams?: object): Observable<T>;
    delete(url: string, queryParams?: object): Observable<{}>;
}
