import { Routes } from '@angular/router';
import { ListComponent } from './tasks/list/list.component';

export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
