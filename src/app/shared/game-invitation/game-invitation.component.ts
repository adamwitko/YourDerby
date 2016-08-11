import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'game-invitation',
    templateUrl: './game-invitation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInvitationComponent {
}

export const GAME_INVITATION_DIRECTIVES: any[] = [GameInvitationComponent];