import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoapService } from '../../services/soap.service';
import { FormControl } from '@angular/forms';
import { APIService } from '../../services/api.service';
@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  constructor(private soapService: SoapService) {
    this.makeSoapCall();
  }
  name = new FormControl('');
  data = new APIService;
  makeSoapCall() {
    // this.data.getVersion().subscribe((result: any) => {
    //   this.name.setValue(result.toString());
    // });
  }
}
