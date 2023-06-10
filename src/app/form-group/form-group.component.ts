import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
loginForm = new FormGroup({
  user : new FormControl(''),
  password : new FormControl(''),
}) 

loginUser(){
  console.log(this.loginForm.value)
}
}
