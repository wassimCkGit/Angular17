import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'http://localhost:3000';

  httpClient: any;
  constructor() { 
    this.httpClient = inject(HttpClient);}


    getVersion() {
      return this.httpClient.get(this.apiUrl, { responseType: 'text' }).subscribe((res: any)=>{});
    }
  
  getxRentMsn(text: string): Observable<string> {
    return this.httpClient.get(`https://localhost:44386/GetxRent?text=${text}`, { responseType: 'text' });
  }
}
