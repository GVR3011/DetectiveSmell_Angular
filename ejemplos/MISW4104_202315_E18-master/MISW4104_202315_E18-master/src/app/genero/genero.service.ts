import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Genre } from './genero';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = environment.baseUrl + 'genres';



  constructor(private http: HttpClient) { }

  getGeneros(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }

  createGeneros(genero: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genero);
  }

}
