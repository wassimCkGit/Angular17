import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormComponentComponent } from '../form-component/form-component.component';
import { AppComponent } from '../../app.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-dataviewer',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormComponentComponent,AppComponent],
  template: ''
})
export class DataviewerComponent {
  httpClient = inject(HttpClient);
     data : any;
  constructor(){}
  
  getxRentMsn(text: string): Observable<string> {
    return this.httpClient.get(`https://localhost:44386/GetxRent?text=${text}`, { responseType: 'text' });
  }
}
