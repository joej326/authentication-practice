import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterService } from './users/register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth0/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]}

];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RegisterService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
