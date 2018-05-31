import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import{Users} from './test/users';

@Injectable()
export class AuthService {
  public rules = {
    user: 1,
    admin: 2
  };

   private isAdmin:any;
  constructor(
    private http: HttpClient,private router:Router) {

    console.log(this.rules);
    console.log(this.rules);


  }

  url = 'https://api001.app/api/login';
  login(email: string, password: string) {
    return this.http.post<any>('https://api001.app/api/login', { email: email, password: password })
      .pipe(map((res:any) => {
        console.log("lol");
        console.log(res);
        var Tokens = res.success.token;
        var Role = res.role;
        console.log(Role + 'this is role');
        console.log(Tokens);
        // login successful if there's a jwt token in the response
        if (res && Tokens && Role == this.rules.user ) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email, token: Tokens }));
          return 1;

        }
        if(res && Tokens && Role == this.rules.admin) {

          localStorage.setItem('currentUser', JSON.stringify({Admtoken: Tokens }));
          localStorage.setItem('AdminUser', JSON.stringify({Admtoken: Tokens}));
          return 0;


        }

      }));

  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);

  }
  logoutAdmin()
  {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('AdminUser');
    this.router.navigate(["login"]);


  }


getAdmin(): Observable<Users[]> {
  const AdminUser = JSON.parse(localStorage.getItem('AdminUser'));

  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      Authorization: `Bearer ${AdminUser.Admtoken}`,
    })
  };

  return this.http.get<Users[]>('https://api001.app/api/admin', httpOptions);
}





}
