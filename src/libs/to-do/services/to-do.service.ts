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

  toDoList$ = of(this.toDoList);

  constructor() { }

  getToDoList(): Observable<ToDo[]> {
    return this.toDoList$;
  }

  addToDo(item: ToDo) {
    this.toDoList.push(item);
  }

  updateToDo(item: ToDo) {
    this.toDoList.find(toDo => {
      if(toDo.name==item.name)  toDo.done = item.done
    })
  }

}
