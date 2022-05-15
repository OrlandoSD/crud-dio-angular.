import { HttpClient, HttpHeaders } from '@angular/common/http';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Users } from './../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  apiUrl = 'https://sheet.best/api/sheets/ee0be666-2ef7-4c26-8191-36651737cf4a';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })

  }

  constructor(private httpClient: HttpClient) { }
  // C.R.U.D - Criate, Read, Update, Delete

  //retorna a lista de usuarios
  getUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.apiUrl);
  }

  //Salva usuario no banco CREATE
  postUser(user: Users): Observable<Users>{
    return this.httpClient.post<Users>(this.apiUrl, user, this.httpOptions);

  }
    //Exclui o usuario do banco DELETE

    deleteUser(id: Number): Observable<Users>{
      return this.httpClient.delete<Users>(`${this.apiUrl}/id/${id}`)
    }
  //Edita usuario UPDATE
  UpdateUser(id: string, user: Users):Observable<Users> {
        return this.httpClient.put<Users>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuarioa unico
  getUser(id: string): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.apiUrl}/id/${id}`)
  }
}
