import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { DataService } from 'src/app/services';
import * as featureActions from './actions';

@Injectable()
export class TimelineStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  loadTimelineEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadTimelineAction>(
      featureActions.ActionTypes.LOAD_TIMELINE
    ),
    concatMap(action =>
      this.dataService.getTimeline(action.payload.hashtag).pipe(
        map(
          timeline =>
            new featureActions.LoadTimelineSuccessAction({
              hashtag: action.payload.hashtag,
              statuses: timeline.statuses,
              metadata: timeline.metadata
            })
        ),
        catchError(error =>
          of(
            new featureActions.LoadTimelineFailureAction({
              hashtag: action.payload.hashtag,
              error
            })
          )
        )
      )
    )
  );
}
