import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../shared/services/url.service';
import {RestService} from '../../shared/services/abstract/rest.service';
import {TaskModel} from '../models/task.model';
import {SearchModel} from '../models/search.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService extends RestService{

    private api:  string = '/task';
    private tasks = [];
    private _tasks$: BehaviorSubject<TaskModel[]>;

    constructor(
      urlService: UrlService,
      http: HttpClient
    ) {
        super(urlService, http);
        this._tasks$ = new BehaviorSubject<TaskModel[]>(this.tasks);
    }

    public searchTasks(query: SearchModel) : Observable<TaskModel>{
        return this.getItem(
            () => this.urlService.search(query['search'], this.api)
        ).pipe(
            map(
                (state =>{
                    return (state as TaskModel)
                })
            )
        )
    }

    public getTasks()
    {
        this.addSubscription(this.getItem(
            () => this.urlService.get(this.api)
        )
        .subscribe(data =>{
            this.tasks = data['tasks'];
            this._tasks$.next(this.tasks);
        }));
    }

    public getTask(id: number): TaskModel {
        return this.tasks.find(task => task.id == id);
    }

    public editTask(task: TaskModel) {
        this.addSubscription(this.putItem(
            () => this.urlService.edit(task.id, this.api),
            task
        )
        .subscribe(() =>{
            const index = this.tasks.findIndex(t => t.id == task.id);
            this.tasks = [
                ...this.tasks.slice(0, index),
                task,
                ...this.tasks.slice(index + 1)
            ];
            this._tasks$.next(this.tasks);
        }));
    }

    public newTask(task: TaskModel) {
        this.addSubscription(this.postItem(
            () => this.urlService.add(this.api),
            task
        )
        .subscribe(() =>{
            this.tasks.push(task);
            this._tasks$.next(this.tasks);
        }));
    }

    public deleteTask(task) {
        this.addSubscription(this.deleteItem(
            () => this.urlService.remove(task.id, this.api)
        )
        .subscribe(() =>{
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }));
    }

    //getter and setter for bSubject _task$
    task$(state){
        return this._tasks$.next(state);
    }

    public getObservable(): Observable<TaskModel[]> {
        return this._tasks$.asObservable();
    }
}
