import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'site-header',
    templateUrl: './header.component.html',
    styles: [require('./header.style.scss').toString()],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
}

export const HEADER_DIRECTIVES: any[] = [HeaderComponent];