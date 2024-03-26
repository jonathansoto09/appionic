import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/users', {observe: 'response'});
  }

  createEncuesta(encuesta:any): Observable<any> {
    const options = encuesta;
    console.log('PORQUEE',options)
    return this.http.post<any>('http://localhost:3000/api/create-users', options );
  }
}
