import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoList: ToDo[] = [
    {name: "Do some work", done: false}
  ]

  constructor() { }

  getToDoList(): Observable<ToDo[]> {
    return of(this.toDoList);
  }

  addToDo(item: ToDo) {
    this.toDoList.push(item);
  }

}
