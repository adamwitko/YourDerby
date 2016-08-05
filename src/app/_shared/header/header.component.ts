import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'site-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 
}

export const HEADER_DIRECTIVES: any[] = [ HeaderComponent ];