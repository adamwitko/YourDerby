import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'notification',
    templateUrl: './notification.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
    @Input()
    public description: String;

    private dismissed: Boolean = false;

    public dismiss = ($event: any) => this.dismissed = true;
}

export const NOTIFICATION_DIRECTIVES: any[] = [NotificationComponent];