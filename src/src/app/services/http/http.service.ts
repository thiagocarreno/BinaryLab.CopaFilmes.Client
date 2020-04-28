import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ParamsBuilder } from './params-builder';

import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService<TEntity> {

  protected baseUrl: string;
  protected httpClient: HttpClient;

  constructor(baseUrl: string, http: HttpClient) {
    this.baseUrl = baseUrl;
    this.httpClient = http;
  }

  getAll(): Observable<TEntity[]> {
    return this.get(this.baseUrl);
  }

  getWithParams(parameters: any[]): Observable<TEntity[]> {
    const url = this.baseUrl + ParamsBuilder.buildRouteParams(parameters);
    return this.get(url);
  }

  get<TResponse = TEntity>(url: string): Observable<TResponse[]> {
      const response = this.httpClient.get(url, { headers: environment.headers.headers });
      return response as Observable<TResponse[]>;
  }
}
