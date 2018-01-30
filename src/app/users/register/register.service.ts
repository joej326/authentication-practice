import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }


  saveUser(user) {
    console.log('service called');
    this.http.post('http://localhost:3001/users/register', user).subscribe();
  }

}
