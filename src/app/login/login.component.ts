import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {

  indexTab:number;
  RouteLogin = '/login';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(           private route: ActivatedRoute,
                         private formBuilder: FormBuilder,private router:Router, private  location: Location,private auth: AuthService) {
  }

  ngOnInit() {
    if(this.router.url != '/login'  && this.router.url != '/register'){

        if(this.router.url == '/login')
        {
          this.router.navigateByUrl('/login');

        }
        if(this.router.url == '/register')
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
   let  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

// convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
          console.log("errore" +           this.f.email.value) ;
        });
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
