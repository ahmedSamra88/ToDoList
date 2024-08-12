import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
 private apiUrl="http://localhost:3000/todo/";
  constructor(private httpClient:HttpClient) { }
  // get all
  GetAll():Observable<ToDo[]>{
    return this.httpClient.get<ToDo[]>(this.apiUrl);
  }
  CreateTodo(todo:ToDo):Observable<ToDo>{
    return this.httpClient.post<ToDo>(this.apiUrl,JSON.stringify(todo));
  }
  GetDetails(id:number):Observable<ToDo>{
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`);
  }
  UpdateDetails(todo:ToDo):Observable<ToDo>{
    return this.httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`,todo)
  }
  DeleteTodo(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}${id}`);
  }



}
