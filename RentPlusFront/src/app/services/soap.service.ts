import { Injectable, inject  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  // private apiUrl = 'http://localhost:3444/RentPlusServices.asmx/GetVersion';

  // httpClient: any;
  // constructor(private http: HttpClient) { 
  //   this.httpClient = inject(HttpClient);}

  // getVersion() {
  //   return this.http.get(this.apiUrl, { responseType: 'text' });
  // }
}