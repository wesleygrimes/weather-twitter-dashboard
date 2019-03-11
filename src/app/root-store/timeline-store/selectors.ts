import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { TimelineEntity } from 'src/app/models';
import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => {
  if (state.isLoading) {
    return state.isLoading;
  }
  return false;
};

export const selectTimelineState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('timeline');

export const selectAllTimelines: (
  state: object
) => TimelineEntity[] = featureAdapter.getSelectors(selectTimelineState)
  .selectAll;

export const selectTimelineByHashtag = (hashtag: string) =>
  createSelector(
    selectAllTimelines,
    (allTimelines: TimelineEntity[]) => {
      if (allTimelines) {
        return allTimelines.find(p => p.hashtag === hashtag);
      } else {
        return null;
      }
    }
  );

export const selectTimelineError: MemoizedSelector<
  object,
  any
> = createSelector(
  selectTimelineState,
  getError
);

export const selectTimelineIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectTimelineState,
  getIsLoading
);
