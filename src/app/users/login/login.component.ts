import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username;
  password;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      username: [this.username, [Validators.required]],
      password: [this.password, [Validators.required]],
    });
  }

  formSubmit() {
    console.log('form submitted!');
  }

}
