import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Timeline } from 'types/Timeline';
import { Tweet } from 'types/Tweet';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASE_URL = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getTimeline(hashtag: string) {
    const params = new HttpParams().set('hashtag', hashtag);
    return this.http.get<Timeline>(`${this.BASE_URL}/timeline`, {
      params
    });
  }

  getEmbedHtmlForTweet(tweet: Tweet) {
    return this.http.post<any>(`${this.BASE_URL}/tweet-embed`, tweet);
  }
}
