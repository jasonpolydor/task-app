import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UnsubscribeHelper } from '../../shared/utils/Unsubscribe.helper';

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
        super();
    }

    ngOnInit() {
        //with FormBuilder
        // this.taskForm = this.fb.group({
        //     id: ['', Validators.required],
        //     title:   ['',
        //         Validators.required,
        //         Validators.pattern('^[a-zA-Z]+$'),
        //         Validators.minLength(3)
        //     ],
        //     user:   ['', Validators.required],
        //     description:  ['', Validators.required],
        //     status:  ['', Validators.required],
        // });

        //without FormBuilder
        this.taskForm = new FormGroup({
            id: new FormControl('', Validators.compose([ Validators.required ])),
            title: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+$'),
                Validators.minLength(3)
            ])),
            user:  new FormControl('', Validators.compose([ Validators.required ])),
            description:  new FormControl('', Validators.compose([ Validators.required ])),
            status:  new FormControl('', Validators.compose([ Validators.required ]))
        });

        this.addSubscription(this.activateRoute.params.subscribe(params =>{
            if(params['id']){
                this.task = this.tasksService.getTask(+params['id']);
                this.task.isEditable = true;
            }
            else
                this.task = new TaskModel();
        }));
    }

    editTask(){
        this.tasksService.editTask(this.task);
        this.router.navigate(['']);
    }

    createTask(){
        this.tasksService.newTask(this.task);
        this.router.navigate(['']);
    }
}
