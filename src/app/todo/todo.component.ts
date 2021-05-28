import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number | undefined;
  todo = new Todo(0, 'null', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //undefined problem could be solved with: this.todo new Todo(1, '', false, new Date());
    this.todoService.retrieveTodo('emeban', this.id).subscribe(
      data => this.todo = data
    )
  }

  saveTodo(){
    this.todoService.updateTodo('emeban', this.id, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }

}
