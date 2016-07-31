import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [ require('./app.style.scss').toString() ],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES]
})
export class AppComponent {}