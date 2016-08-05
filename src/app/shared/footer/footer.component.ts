import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'site-footer',
    templateUrl: './footer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { 
}

export const FOOTER_DIRECTIVES: any[] = [ FooterComponent ];