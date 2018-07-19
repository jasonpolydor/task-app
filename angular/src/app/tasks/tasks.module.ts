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

import { MatToolbarModule, MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        FlexLayoutModule,
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
