import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { environment } from '../../environments/environment';
import { Actor } from '../actor/actor';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = environment.baseUrl + 'movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  createMovies(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  updateMovie(movie:Movie, actor:any):Observable<Movie> {
    console.info("ID: ", actor.id)
    return this.http.post<Movie>(this.apiUrl + "/"+ movie.id + "/actors/" + actor.id, movie);
  }

}