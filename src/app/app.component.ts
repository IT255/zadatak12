import { Component } from '@angular/core';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {BodyComponent} from './components/body.component';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  name = 'Angular';

  
 }
