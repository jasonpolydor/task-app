import { Routes } from '@angular/router';
import { ListComponent } from './tasks/list/list.component';
import {FormComponent} from './tasks/form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'create',
        component: FormComponent
    },
    {
        path: 'edit/:id',
        component: FormComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
