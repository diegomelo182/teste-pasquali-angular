import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  index = (params = {}) => this.httpClient.get(`${environment.apiHost}people`, { params });

  show = (id) => this.httpClient.get(`${environment.apiHost}people/${id}`);

  create = (params = {}) => this.httpClient.post(`${environment.apiHost}people`, params);

  update = (id, params = {}) => this.httpClient.put(`${environment.apiHost}people/${id}`, params);

  remove = (id) => this.httpClient.delete(`${environment.apiHost}people/${id}`);
}
