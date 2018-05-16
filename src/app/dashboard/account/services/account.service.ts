import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private httpClient: HttpClient
  ) { }

  index = (params = {}) => this.httpClient.get(`${environment.apiHost}accounts`, { params });

  show = (id) => this.httpClient.get(`${environment.apiHost}accounts/${id}`);

  create = (params = {}) => this.httpClient.post(`${environment.apiHost}accounts`, params);

  update = (id, params = {}) => this.httpClient.put(`${environment.apiHost}accounts/${id}`, params);

  remove = (id) => this.httpClient.delete(`${environment.apiHost}accounts/${id}`);
}
