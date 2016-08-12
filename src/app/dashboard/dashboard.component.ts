import { Component } from '@angular/core';
import { GAME_INVITATION_DIRECTIVES } from '../shared/game-invitation/game-invitation.component';
import { NOTIFICATION_DIRECTIVES } from '../shared/notification/notification.component';
import { IGameInvite } from '../shared/interfaces/game-invite';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [require('./dashboard.style.scss').toString()],
  directives: [GAME_INVITATION_DIRECTIVES, NOTIFICATION_DIRECTIVES]
})
export class DashboardComponent {
  public game: IGameInvite = {
    title: 'The game title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.',
    dateTime: '19 August at 20:00',
    location: 'The Coop Academy', 
    tags: [ 'Intermediate', '12 Going', '3 Comments' ]
  };

  public notification: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.';
}