import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TimelineEntity } from '../../models/timeline-entity';

export const featureAdapter: EntityAdapter<
  TimelineEntity
> = createEntityAdapter<TimelineEntity>({
  selectId: model => model.hashtag,
  sortComparer: (a: TimelineEntity, b: TimelineEntity): number =>
    b.hashtag.toString().localeCompare(a.hashtag.toString())
});

export interface State extends EntityState<TimelineEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
