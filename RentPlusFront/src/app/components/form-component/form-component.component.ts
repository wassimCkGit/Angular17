import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormGroup,  FormsModule, Validators ,FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataviewerComponent } from '../dataviewer/dataviewer.component';
import { APIService } from '../../services/api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  name = new FormControl('');
  submitted = false;
  profileForm = new FormGroup({
    yourtext: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  title = "";
  // data = new DataviewerComponent;
  data = new APIService;
  version: any;

  constructor() {}
   
  onSubmit() {
    let value = "";
    value = this.profileForm.value.yourtext?.toString()!;
    let value2 = this.profileForm.value.yourtext?.toString() || '';
    this.data.getxRentMsn(value2).subscribe((result) => {
      this.name.setValue(result.toString());
    });
    this.submitted = true;
    console.warn(this.profileForm.value);
  }
  ngOnInit() {
    // Initialize Google Sign-In
    // google.accounts.id.initialize({
    //   client_id: 'YOUR_CLIENT_ID',
    //   callback: this.handleGoogleSignIn.bind(this),
    // });
  }
  
  handleGoogleSignIn(response: any) {
    // Handle the Google Sign-In response here
    console.log(response);
  }
    // // @ts-ignore
    // google.accounts.id.initialize({
    //   client_id: "708132787941-7r9f69j5hp9a29q7g5288kq2uuhjsmgd.apps.googleusercontent.com",
    //   callback: this.handleCredentialResponse.bind(this),
    //   auto_select: false,
    //   cancel_on_tap_outside: true,
  
    // });
    // // @ts-ignore
    // google.accounts.id.renderButton(
    // // @ts-ignore
    // document.getElementById("google-button"),
    //   { theme: "outline", size: "large", width: "100%" }
    // );
    // // @ts-ignore
    // google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  
  // async handleCredentialResponse(response: any) {
  //   // Here will be your response from Google.
  //   console.log(response);
  // }
  goBack(){
    this.submitted = false;
  }
}