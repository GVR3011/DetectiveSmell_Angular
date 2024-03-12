import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActorDetail } from './actorDetail';
import { environment } from '../../environments/environment';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = environment.baseUrl + 'actors';
  private apiUrlmovies="";
  private actId="";

  constructor(private http: HttpClient) { }

  getActores(): Observable<ActorDetail[]> {
    return this.http.get<ActorDetail[]>(this.apiUrl);
  }

  getActor(actorId:string):Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl+"/{{"+ actorId +"}}");
  }
  getMovies(actId:string ): Observable<Actor[]>{
    this.actId=actId;
    this.apiUrlmovies=environment.baseUrl + actId +  '/movies';
    return this.http.get<Actor[]>(this.apiUrlmovies);
  }
  createActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.apiUrl, actor);
  }
 /* updateActor(actor:Actor, movie:any):Observable<Actor> {
    console.info("ID: ", actor.id)
    return this.http.post<Actor>(this.apiUrl + "/"+ actor.id + "/movies/" + movie.id, actor);
  } */
}