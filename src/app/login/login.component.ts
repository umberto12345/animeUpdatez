import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {

  indexTab:number;
  RouteLogin = '/login';
  RouteRegister = '/register';

  constructor(private router:Router, private  location: Location) {

  }

  ngOnInit() {
    if(this.router.url != '/login'  && this.router.url != '/home/register'){

        if(this.router.url == '/login')
        {
          this.router.navigateByUrl('/login');

        }
        else
          {
            this.router.navigateByUrl('/register');

          }

    }
    if(this.router.url == '/login'){
      this.location.go('/login');

      console.log("sei dentro login");
      this.indexTab = 0;


    }
    if(this.router.url =='/register')
    {
      this.location.go('register');

      console.log("sei dentro register");
      this.indexTab = 1;
    }


  }



  public clickme(){ console.log("lol");

    console.log(this.location.path());
    if(this.location.path() == '/login')
    {
      this.location.go('/register');


    }
else
  {
    if(this.location.path() == '/register')
    {
      this.location.go('/login');
      console.log("2");



    }
  }


  }


}
