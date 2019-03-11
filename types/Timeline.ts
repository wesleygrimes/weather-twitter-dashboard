import { TimelineMetadata } from './TimelineMetadata';
import { Tweet } from './Tweet';
export interface Timeline {
  statuses?: Tweet[];
  metadata?: TimelineMetadata;
}
