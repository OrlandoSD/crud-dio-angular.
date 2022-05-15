import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from "../models/Users.1";

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


    //Exclui o usuario do banco DELETE
    deleteUser(id: number): Observable<User>{
      return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
    }
  }
}
