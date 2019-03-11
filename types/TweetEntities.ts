import { Hashtag } from './Hashtag';
import { URL } from './URL';
import { UserMention } from './UserMention';
export interface TweetEntities {
  hashtags?: Hashtag[];
  symbols?: any[];
  user_mentions?: UserMention[];
  urls?: URL[];
}
