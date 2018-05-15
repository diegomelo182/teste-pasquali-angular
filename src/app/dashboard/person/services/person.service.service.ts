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

  index = (params = {}) => {
    return this.httpClient.get(`${environment.apiHost}people`, { params });
  }
}
