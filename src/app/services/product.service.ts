import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IProduct } from '../interface/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL:string='http://localhost:8080/api'
  constructor(private http:HttpClient) { }
  product(product:any):Observable<any>{
    return this.http.post<any>(`${this.API_URL}/products`,product)
  }
}
