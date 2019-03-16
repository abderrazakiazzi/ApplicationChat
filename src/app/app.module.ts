import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import  *  as firebase from 'firebase';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Loginservice } from './login/login.service';
import{environment } from './environnement/environnement.component';
import { AppService } from './app.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { ChatService } from './chat-message/chat.Service';
import { RoomsService } from './rooms/rooms.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChatMessageComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule  
  ],
  providers: [Loginservice, AppService, ChatService, RoomsService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
