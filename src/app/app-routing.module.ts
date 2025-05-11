import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'LMS | Home' },
  { path: 'register-course', component: RegisterCourseComponent, title: 'LMS | Register Course' },
  { path: 'contact-us', component: ContactUsComponent, title: 'LMS | Contact Us' },
  { path: 'signup', component: SignupComponent, title: 'LMS | Sign Up' },
  { path: 'login', component: LoginComponent, title: 'LMS | Login' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
