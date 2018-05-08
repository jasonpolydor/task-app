import {Component, EventEmitter, OnInit, OnDestroy, Output} from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { tasksnameValidators } from '../../shared/common/validators/tasksname.validators';
import {UnsubscribeHelper} from '../../shared/utils/Unsubscribe.helper';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent extends UnsubscribeHelper implements OnInit, OnDestroy{
    task: TaskModel;
    taskForm: FormGroup;

    constructor(
        protected tasksService: TasksService,
        protected router: Router,
        protected activateRoute : ActivatedRoute,
        protected fb: FormBuilder
    ){
        this.taskForm = fb.group({
            id: ['', Validators.required],
            user: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.addSubscription(this.activateRoute.params.subscribe(params =>{
            if(params['id']){
                this.task = this.tasksService.getTask(+params['id']);
                this.task.isEditable = true;
            }
            else
                this.tasks = new TaskModel();
        }));
    }

    editTask(){
        this.tasksService.editTask(this.tasks);
        this.router.navigate(['']);
    }

    createTask(){
        this.tasksService.newTask(this.tasks)
        this.router.navigate(['']);
    }
}
