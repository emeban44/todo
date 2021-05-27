import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;
  message: string | undefined;
  
  // todos = [
  //   new Todo(1, 'Collect FPL prizes', false, new Date()),
  //   new Todo(2, 'Master Angular', false, new Date()),
  //   new Todo(3, 'Finish my SDP', false, new Date()),
  // ]

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('emeban').subscribe(
      response =>  {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log('delete todo ' + id);
    this.todoService.deleteTodo('emeban', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Delete of ' + id + ' successful!';
        this.refreshTodos();
      }
    )
  }

}
