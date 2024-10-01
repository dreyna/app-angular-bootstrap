import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
 private apiUrl='http://localhost:8080/api/autores';
  constructor(private http: HttpClient) { }

  getAutores():Observable<Autor[]>{
    return this.http.get<Autor[]>(this.apiUrl);
  }
}
