import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  apiUrl = 'https://sheet.best/api/sheets/ee0be666-2ef7-4c26-8191-36651737cf4a';

  constructor(private httpClient: HttpClient) { }
  // C.R.U.D - Criate, Read, Update, Delete

  //retorna a lista de usuarios
  getUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.apiUrl);
  }
}
