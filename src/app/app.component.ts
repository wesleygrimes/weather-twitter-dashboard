import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimelineEntity } from './models';
import { RootState } from './root-store/root-state';
import {
  TimelineStoreActions,
  TimelineStoreSelectors
} from './root-store/timeline-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tweets-by-hashtag';

  timelines$: Observable<TimelineEntity[]>;

  constructor(private store$: Store<RootState>) {
    this.timelines$ = this.store$.pipe(
      select(TimelineStoreSelectors.selectAllTimelines)
    );
  }

  ngOnInit() {
    this.store$.dispatch(
      new TimelineStoreActions.LoadTimelineAction({ hashtag: 'ncwx' })
    );
    this.store$.dispatch(
      new TimelineStoreActions.LoadTimelineAction({ hashtag: 'flwx' })
    );
    this.store$.dispatch(
      new TimelineStoreActions.LoadTimelineAction({ hashtag: 'tnwx' })
    );
    this.store$.dispatch(
      new TimelineStoreActions.LoadTimelineAction({ hashtag: 'azwx' })
    );
  }
}
