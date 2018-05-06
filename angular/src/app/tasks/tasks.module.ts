import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [
      ListComponent,
      ItemComponent
  ],
  providers: [
      TasksService
  ]
})
export class TasksModule { }
