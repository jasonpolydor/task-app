import { Routes } from '@angular/router';
import { ListComponent as Task } from './tasks/list/list.component';
import { FormComponent } from './tasks/form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlayerComponent } from './game/player/player.component';
import { ListComponent as Translator } from './translator/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'translator',
        component: Translator,
    },
    {
        path: 'task',
        component: Task,
    },
    {
        path: 'game',
        component: PlayerComponent,
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
