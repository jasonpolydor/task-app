import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TasksService } from './services/tasks.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    declarations: [
        ListComponent,
        ItemComponent,
        FormComponent,
        SearchComponent
    ],
    exports:[
        ListComponent,
        ItemComponent,
        FormComponent,
        SearchComponent
    ],
    providers: [
        TasksService,
        HttpClientModule
    ]
})
export class TasksModule { }
