import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://172.18.4.123:9898/product"
  constructor(private http:HttpClient) { }
  select()
  {
    return this.http.get(this.url);
  }
}
