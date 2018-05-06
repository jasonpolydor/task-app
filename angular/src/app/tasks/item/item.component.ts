import { Component, OnInit, Input } from '@angular/core';
import {TaskModel} from '../models/task.model';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('task') task: TaskModel;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
  }

  deleteTask(){
    this.tasksService.deleteTasks(this.task);
  }
}
