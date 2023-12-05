import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  httpClient: any;
  constructor() { 
    this.httpClient = inject(HttpClient);}


  
  getxRentMsn(text: string): Observable<string> {
    return this.httpClient.get(`https://localhost:44386/GetxRent?text=${text}`, { responseType: 'text' });
  }
}
