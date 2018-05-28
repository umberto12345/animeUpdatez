import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthGuard} from './guard';
import {AuthInterceptor} from './helper';
import { ReactiveFormsModule }    from '@angular/forms';

import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
//form module

import { FormsModule }   from '@angular/forms';


//material module
import { MaterialModule } from './material/material.module';

import {AuthService} from './auth.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [AuthGuard,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
