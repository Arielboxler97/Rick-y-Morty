import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_Url : string = 'https://rickandmortyapi.com/api/character'

  constructor(private http:HttpClient){}

  getAll():Observable<Personaje>{
    return this.http.get<Personaje>(this.api_Url)
  }

  getPersonaje(id:number):Observable<any>{
    return this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`)
  }

   buscador(name:string):Observable<Personaje>{
    const url = `${this.api_Url}?name=${name}`;
    return this.http.get<Personaje>(url);
   }
}
