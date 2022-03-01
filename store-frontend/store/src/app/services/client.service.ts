import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URL = 'http://localhost:3000/api/v1/clients';

  constructor(private http: HttpClient) { }

  postClient(client: Client): Observable<any> {
    return this.http.post(this.API_URL,client);
  }
    
  getClients(): Observable<any> {
    return this.http.get(this.API_URL);
  }  

  getClientById(id: String): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }  

  putClient(id: String, client: Client): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, client);
  }  

  deleteClient(id: String): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }



  
  


  
}
