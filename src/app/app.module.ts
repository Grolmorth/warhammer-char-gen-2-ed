import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodawanieComponent } from './dodawanie/dodawanie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AsideComponent } from './dodawanie/aside/aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';


import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { SekcjadodawanieComponent } from './sekcjadodawanie/sekcjadodawanie.component';
import { BohaterComponent } from './bohater/bohater.component';
import { BohaterBohaterComponent } from './bohater/bohater-bohater/bohater-bohater.component';
import { BohaterOpisBohateraComponent } from './bohater/bohater-opis-bohatera/bohater-opis-bohatera.component';
import { BohaterCechyComponent } from './bohater/bohater-cechy/bohater-cechy.component';
import { BohaterBronComponent } from './bohater/bohater-bron/bohater-bron.component';
import { BohaterPancerzComponent } from './bohater/bohater-pancerz/bohater-pancerz.component';
import { BohaterGraczComponent } from './bohater/bohater-gracz/bohater-gracz.component';
import { BohaterPunktyDoswiadczeniaComponent } from './bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component';
import { BohaterRuchWWalceComponent } from './bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component';
import { BohaterPunktyZbroiComponent } from './bohater/bohater-punkty-zbroi/bohater-punkty-zbroi.component';
import { BohaterZestawienieAkcjiComponent } from './bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component';
import { BohaterUmiejetnosciComponent } from './bohater/bohater-umiejetnosci/bohater-umiejetnosci.component';
import { BohaterZdolnosciComponent } from './bohater/bohater-zdolnosci/bohater-zdolnosci.component';
import { BohaterWyposarzenieComponent } from './bohater/bohater-wyposarzenie/bohater-wyposarzenie.component';
import { BohaterPieniadzeComponent } from './bohater/bohater-pieniadze/bohater-pieniadze.component';
import { ImportExportComponent } from './bohater/import-export/import-export.component';
import { ImportBohateraComponent } from './import-bohatera/import-bohatera.component';




@NgModule({
  declarations: [
    AppComponent,
    DodawanieComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    SignUpComponent,
    SignInComponent,
    SekcjadodawanieComponent,
    BohaterComponent,
    BohaterBohaterComponent,
    BohaterOpisBohateraComponent,
    BohaterCechyComponent,
    BohaterBronComponent,
    BohaterPancerzComponent,
    BohaterGraczComponent,
    BohaterPunktyDoswiadczeniaComponent,
    BohaterRuchWWalceComponent,
    BohaterPunktyZbroiComponent,
    BohaterZestawienieAkcjiComponent,
    BohaterUmiejetnosciComponent,
    BohaterZdolnosciComponent,
    BohaterWyposarzenieComponent,
    BohaterPieniadzeComponent,
    ImportExportComponent,
    ImportBohateraComponent,

  ],
  imports: [
    NgSelectModule,
    NgOptionHighlightModule,
    RouterModule,

    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, NgbModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
