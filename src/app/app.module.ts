import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './components/header.component';
import { FooterComponent }  from './components/footer.component';
import { BodyComponent }  from './components/body.component';



import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddRoomComponent } from './service/addroom.component';
import { RegisterComponent } from './service/register.component';
import { LoginComponent } from './service/login.component';


import { SearchPipe } from './pipes/search'




@NgModule({
  imports:      [ BrowserModule , HttpModule, routing, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent,  FooterComponent, BodyComponent,
  RoomComponent, AboutComponent, ContactComponent,AddRoomComponent, RegisterComponent, LoginComponent, SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
