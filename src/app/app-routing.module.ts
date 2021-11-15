import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Auth/auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[AuthGuardGuard] },
  { path: 'login', component: LoginComponent, canActivate:[AuthGuardGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard] },
  { path: 'menu', component: FoodMenuComponent, canActivate:[AuthGuardGuard] },
  { path: 'register', component:RegisterationComponent, canActivate:[AuthGuardGuard] },
];

RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
