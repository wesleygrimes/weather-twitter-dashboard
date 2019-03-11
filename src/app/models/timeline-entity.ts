import { TimelineMetadata } from 'types/TimelineMetadata';
import { Tweet } from 'types/Tweet';
export interface TimelineEntity {
  hashtag: string;
  statuses: Tweet[];
  metadata: TimelineMetadata;
}
