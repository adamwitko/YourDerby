import { Component } from '@angular/core';
import { HEADER_DIRECTIVES } from './shared/header/header.component';
import { FOOTER_DIRECTIVES } from './shared/footer/footer.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [ require('./app.style.scss').toString() ],
  directives: [ HEADER_DIRECTIVES, FOOTER_DIRECTIVES ]
})
export class AppComponent {
}