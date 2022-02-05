import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MaterialModule } from './materialModule/material';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { CheffListComponent } from './components/cheff-list/cheff-list.component';
import { TodaysSpecialComponent } from './components/todays-special/todays-special.component';
import { TopRatingsComponent } from './components/top-ratings/top-ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterationComponent,
    FoodMenuComponent,
    CheffListComponent,
    TodaysSpecialComponent,
    TopRatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
