import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  retrieveTodo(username: string, id: any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  createTodo(username: string, todo: Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }

  updateTodo(username: string, id: any, todo: Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username: string, id: any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

}
