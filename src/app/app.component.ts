import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HEADER_DIRECTIVES } from './_shared/header/header.component';
import { FOOTER_DIRECTIVES } from './_shared/footer/footer.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [ require('./app.style.scss').toString() ],
  directives: [ HEADER_DIRECTIVES, FOOTER_DIRECTIVES, ROUTER_DIRECTIVES ]
})
export class AppComponent { }