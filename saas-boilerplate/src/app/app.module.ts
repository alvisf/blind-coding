import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

import {HttpClientModule} from '@angular/common/http';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { BlindCodingComponent } from './blind-coding/blind-coding.component';
import { FinalRoundComponent } from './final-round/final-round.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';



@NgModule({
  declarations: [AppComponent, NavMenuComponent, SuperSecretComponent, AuthPageComponent, BlindCodingComponent, FinalRoundComponent, ThankyouPageComponent,],
  imports: [HttpClientModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    MatChipsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCIIOlyIKQmcq2sjbgtXpFbFgMaWEu3mtg',
      authDomain: 'saas-boilerplate-7741b.firebaseapp.com',
      databaseURL: 'https://saas-boilerplate-7741b.firebaseio.com',
      projectId: 'saas-boilerplate-7741b',
      storageBucket: 'saas-boilerplate-7741b.appspot.com',
      messagingSenderId: '853639551537',
      appId: '1:853639551537:web:a48b4024d29d4ac4e75310',
      measurementId: 'G-4QYR9W6K3S',
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
