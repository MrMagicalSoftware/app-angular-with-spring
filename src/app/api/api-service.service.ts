import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'json' });
  }

  getOnePerson(): Observable<any> {
    return this.http.get(API_URL + 'one', { responseType: 'json' });
  }


}

/*
export interface Persona {
  nome  : string;
  cognome : string;
  eta : number
}
*/