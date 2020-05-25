import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DodawanieComponent } from './dodawanie/dodawanie.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'dodawanie',
    component: DodawanieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
