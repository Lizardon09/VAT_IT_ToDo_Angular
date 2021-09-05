import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoService } from 'src/libs/to-do/services/to-do.service';
import { takeUntil } from 'rxjs/operators/';
import { ComponentLifetime } from 'src/libs/utils/component-lifetime';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {

  private _componentLifetime = new ComponentLifetime();

  inputPlaceHolder = "What needs to be done?";
  toDoList = [];

  constructor(private _toDoService: ToDoService) { }

  ngOnInit(): void {
    this._toDoService.getToDoList()
      .pipe(
        takeUntil(this._componentLifetime.isDestroyed$)
      )
      .subscribe(
        toDoList => {
          if(toDoList)  this.toDoList = toDoList;
        }
      );
  }

  ngOnDestroy() {
    this._componentLifetime.onDestroy();
  }

  inputNewToDo(event){
    if(event.target.value?.trim())  this._toDoService.addToDo({name: event.target.value, done: false});
  }

  updateToDo(item, index) {
    if(item && index>=0)  this._toDoService.updateToDo({name: item.name, done: !item.done}, index)
  }

  removeToDo(index) {
    if(index>=0) this._toDoService.removeToDo(index);
  }

  itemsLeft() {
    return this.toDoList.filter(todo => !todo.done).length;
  }

}
