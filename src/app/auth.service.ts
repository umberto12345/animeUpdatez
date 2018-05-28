import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthService {


  constructor(
    private http: HttpClient) {}


   url = 'https://api001.app/api/login';
  login(email: string, password: string) {
    return this.http.post<any>('https://api001.app/api/login', { email: email, password: password })
      .pipe(map((res:any) => {
        console.log("lol");
        console.log(res);
        var Tokens = res.success.token;
        console.log(Tokens);
        // login successful if there's a jwt token in the response
        if (res && Tokens) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email, token: Tokens }));

        }
      }));




}
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
