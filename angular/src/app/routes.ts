import { Routes } from '@angular/router';
import { ListComponent } from './tasks/list/list.component';
import { FormComponent } from './tasks/form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
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
