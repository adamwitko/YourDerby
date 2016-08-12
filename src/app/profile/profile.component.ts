import { Component } from '@angular/core';
import { IComment } from '../shared/interfaces/comment';

@Component({
  templateUrl: './profile.component.html',
  styles: [require('./profile.style.scss').toString()]
})
export class ProfileComponent {
  public comments: Array<IComment> = [{ author: 'Barbara Middleton', body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.', hoursAgo: '3 hrs' }];

  public postComment = ($event: any) => {
    this.comments.push({ author: 'Adam Witko', body: 'not my real comment', hoursAgo: 'now' });
    $event.preventDefault();
  }
}