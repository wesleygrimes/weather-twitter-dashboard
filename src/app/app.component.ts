import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tweets-by-hashtag';
  bearerToken$: Observable<string>;

  constructor(private twitter: TwitterService) {
    // this.bearerToken$ = this.twitter.getBearerToken();
  }
}
