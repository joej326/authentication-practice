import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username;
  password;
  passwordRepeat;
  matchingPasswords = true;
  @ViewChild('passwordBox') passwordBox: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      username: [this.username, [Validators.required]],
      password: [this.password, [Validators.required]],
      passwordRepeat: [this.passwordRepeat, [Validators.required]]
    });
  }




  formSubmit() {
    if (this.password !== this.passwordRepeat) {
      this.matchingPasswords = false;
      this.form.get('password').setValue('');
      this.form.get('passwordRepeat').setValue('');
      this.passwordBox.nativeElement.focus();
    } else {
      this.matchingPasswords = true;
      console.log('form successfully submitted!');
    }

  }



}
