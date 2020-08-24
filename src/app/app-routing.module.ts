import { ImportBohateraComponent } from './import-bohatera/import-bohatera.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { SekcjadodawanieComponent } from './sekcjadodawanie/sekcjadodawanie.component';
import { BohaterComponent } from './bohater/bohater.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'bohater', component: BohaterComponent },
  { path: 'dodawanie', component: SekcjadodawanieComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'import', component: ImportBohateraComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
