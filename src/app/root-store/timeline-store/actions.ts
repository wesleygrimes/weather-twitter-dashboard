import { Action } from '@ngrx/store';
import { TimelineMetadata } from 'types/TimelineMetadata';
import { Tweet } from 'types/Tweet';

export enum ActionTypes {
  LOAD_TIMELINE = '[Timeline] Load Timeline',
  LOAD_TIMELINE_SUCCESS = '[Timeline] Load Timeline Success',
  LOAD_TIMELINE_FAILURE = '[Timeline] Load Timeline Failure'
}

export class LoadTimelineAction implements Action {
  readonly type = ActionTypes.LOAD_TIMELINE;
  constructor(public payload: { hashtag: string }) {}
}

export class LoadTimelineSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_TIMELINE_SUCCESS;
  constructor(
    public payload: {
      hashtag: string;
      statuses: Tweet[];
      metadata: TimelineMetadata;
    }
  ) {}
}

export class LoadTimelineFailureAction implements Action {
  readonly type = ActionTypes.LOAD_TIMELINE_FAILURE;
  constructor(public payload: { hashtag: string; error: any }) {}
}

export type Actions =
  | LoadTimelineAction
  | LoadTimelineSuccessAction
  | LoadTimelineFailureAction;
