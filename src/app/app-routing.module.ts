import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent , pathMatch:'full'},
  { path: 'register' , component: LoginComponent},
  { path: '404' , component: NotFoundComponent ,canActivate:[AuthGuard]},

  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: '**', redirectTo: '404' , pathMatch: 'full'}



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
