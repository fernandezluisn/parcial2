import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RutasRoutingModule} from  './rutas/rutas-routing.module';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire'; 
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
