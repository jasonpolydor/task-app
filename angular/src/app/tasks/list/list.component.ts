import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { UnsubscribeHelper } from '../../shared/utils/Unsubscribe.helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends UnsubscribeHelper implements OnInit {

  private tasks;
  constructor(
      private tasksService: TasksService
  ) {
    super();
  }

  ngOnInit() {
    const tasks$ = this.tasksService.getTaskList();

    this.addSubscription(tasks$.subscribe(state => {
      this.tasks = state;
    }));
    console.log(this.tasks)
  }
}
