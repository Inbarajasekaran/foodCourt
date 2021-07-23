import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Auth/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

const routes: Routes = [
  { path: '', component: LoginComponent,},
  { path: 'login', component: LoginComponent, },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard] },
  { path: 'menu', component: FoodMenuComponent, canActivate:[AuthGuardGuard] },
  { path: 'register', component:RegisterationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
