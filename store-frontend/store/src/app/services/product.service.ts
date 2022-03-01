import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000/api/v1/products';

  constructor(private http: HttpClient) { }

    postProduct(product: Product): Observable<any> {
      return this.http.post(this.API_URL, product);
    }  

    getProducts(): Observable<any> {
      return this.http.get(this.API_URL);
    }  

    getProductById(id: String): Observable<any> {
      return this.http.get(`${this.API_URL}/${id}`);
    }  
  
    putProduct(id: String, product: Product): Observable<any> {
      return this.http.put(`${this.API_URL}/${id}`, product);
    }  
  
    deleteProduct(id: String): Observable<any> {
      return this.http.delete(`${this.API_URL}/${id}`);
    }
  
}
