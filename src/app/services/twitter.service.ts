import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  // private BASE_URL = environment.twitterBaseApiUrl;
  // constructor(private http: HttpClient) {}
  // getBearerToken(): Observable<string> {
  //   let headers = new HttpHeaders();
  //   headers.append(
  //     'Authorization',
  //     `Basic ${this.getBase64BasicHeaderToken()}`
  //   );
  //   return this.http.get(`${this.BASE_URL}`, { headers, responseType: 'text' });
  // }
  // getBase64BasicHeaderToken(): string {
  //   const tokenCredentials = `${environment.twitterConsumerKey}:${
  //     environment.twitterConsumerSecret
  //   }`;
  //   return btoa(tokenCredentials);
  // }
}
