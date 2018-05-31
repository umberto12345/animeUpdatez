import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {TestComponent} from './test/test.component';
import {AdminGuard} from './guard/admin.guard';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent  },
  { path: 'test/y', component: TestComponent , canActivate :[AuthGuard]},
  { path: 'admin' , component:AdminComponent, canActivate:[AdminGuard]},
  { path: '404' , component: NotFoundComponent , canActivate: [AuthGuard]},
  { path: '',   redirectTo: 'login', pathMatch: 'full' },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
