import { Injectable } from '@angular/core';
import { YoutubeTrailers } from './youtubeTrailers';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeTrailersService {
  private apiUrl = environment.baseUrl + 'youtube-trailers';
constructor(private http: HttpClient) { }
getTrailers(): Observable<YoutubeTrailers[]> {
  return this.http.get<YoutubeTrailers[]>(this.apiUrl);
}

createTrailer(trailer: YoutubeTrailers): Observable<YoutubeTrailers> {
  return this.http.post<YoutubeTrailers>(this.apiUrl, trailer);
}
}
