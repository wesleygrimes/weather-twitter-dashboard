import { Tweet } from 'types/Tweet';
import { TweetMetadata } from 'types/TweetMetadata';

export interface RawTwitterResponse {
  statuses: Tweet[];
  search_metadata: TweetMetadata;
}
