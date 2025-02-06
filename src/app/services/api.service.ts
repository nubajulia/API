import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://rickandmortyapi.com/api/character';

  getCharacters(): Observable<any> {
    return this._http.get<any>(this.urlBase);
  }

  getCharacter(id: number): Observable<any> {
    return this._http.get<any>(`${this.urlBase}/${id}`);
  }

  getProduct(id: number): Observable<any> {
    return this._http.get<any>(`${this.urlBase}/${id}`);
  }

}
