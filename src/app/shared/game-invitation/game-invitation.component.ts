import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import { IGameInvite } from '../interfaces/game-invite';

@Component({
    moduleId: module.id,
    selector: 'game-invitation',
    templateUrl: './game-invitation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInvitationComponent {
    @Input()
    public game: IGameInvite;

    private show: Boolean = true;

    public accept = ($event: any) => this.show = false;
    public decline = ($event: any) => this.show = false;
}

export const GAME_INVITATION_DIRECTIVES: any[] = [GameInvitationComponent];