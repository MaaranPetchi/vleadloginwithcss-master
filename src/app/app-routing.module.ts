import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [ 
  { path: '', redirectTo: 'Home', pathMatch: 'full', }, 
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } }, 
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard Page' } },
  { path: 'Home', component: HomeComponent, data: { title: 'Home Page' } }

]; 

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 

export class AppRoutingModule { } 