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
import {AdminGuard} from './guard/admin.guard';
import {AdminInterceptor} from './helper/admin.interceptor';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    TestComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [AuthGuard,AuthService,AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AdminInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
