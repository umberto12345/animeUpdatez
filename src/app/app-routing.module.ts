import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {TestComponent} from './test/test.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent  },
  { path: 'register', component: LoginComponent },
  { path: 'test/y', component: TestComponent },
  { path: '404' , component: NotFoundComponent , canActivate: [AuthGuard]},




];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
