import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TasksService } from './services/tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {routes} from '../routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    declarations: [
        ListComponent,
        ItemComponent
    ],
    exports:[
        ListComponent,
        ItemComponent
    ],
    providers: [
        TasksService,
        HttpClientModule
    ]
})
export class TasksModule { }
