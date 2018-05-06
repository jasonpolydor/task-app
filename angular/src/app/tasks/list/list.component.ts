import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import {TaskModel} from '../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: TaskModel[];

  constructor(
      public tasksService: TasksService
  ){}

  ngOnInit() {
    this.tasksService.getTasks();
  }
}
