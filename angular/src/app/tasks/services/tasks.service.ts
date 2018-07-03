import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../shared/services/url.service';
import {RestService} from '../../shared/services/abstract/rest.service';
import {TaskModel} from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService extends RestService{

    private tasks = [];
    private _tasks$: BehaviorSubject<TaskModel[]>;

    constructor(
      urlService: UrlService,
      http: HttpClient
    ) {
        super(urlService, http);
        this._tasks$ = new BehaviorSubject<TaskModel[]>(this.tasks);
    }

    public getTasks()
    {
        this.getItem(
            () => this.urlService.getTasks()
        )
        .subscribe(data =>{
            this.tasks = data['tasks'];
            this._tasks$.next(this.tasks);
        });
    }

    public editTask(task: TaskModel) {
        this.postItem(
            () => this.urlService.editTask(task.id),
            task
        )
        .subscribe(data =>{
            const index = this.tasks.findIndex(t => t.id == task.id);
            this.tasks = [
                ...this.tasks.slice(0, index),
                task,
                ...this.tasks.slice(index + 1)
            ];
            this._tasks$.next(this.tasks);
        });
    }

    public getTask(id: number): TaskModel {
        return this.tasks.find(task => task.id == id);
    }

    public newTask(task: TaskModel) {
        this.tasks.push(task);
        this._tasks$.next(this.tasks);
    }

    public deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    public getObservable(): Observable<TaskModel[]> {
        return this._tasks$.asObservable();
    }
}
