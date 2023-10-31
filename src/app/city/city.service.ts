import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface City {
  id: number;
  name: string;
  postCode: number;
}

@Injectable()
export class CityService {

  cities = [{
    "name": "Ho Chi Minh",
    "postCode": 700000
  }, {
    "name": "Ha Noi",
    "postCode": 100000
  }, {
    "name": "Da Nang",
    "postCode": 550000
  }];
  constructor(
    private httpClient: HttpClient
  ) { }

  getCities(): Observable<City[]> {
    if (location.hostname === 'localhost') {
      return of(this.cities as City[]);
    } else {
      const url = 'https://raw.githubusercontent.com/leovo2708/ngx-treeview/master/src/app/city/cities.json';
      return this.httpClient.get<City[]>(url);
    }
  }
}
