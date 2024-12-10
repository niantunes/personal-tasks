import { Routes } from '@angular/router';

import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';


export const routes: Routes = [
    { path: 'task-form', component: TaskFormComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'user-info', component: UserInfoComponent },
    { path: 'user-login', component: UserLoginComponent },
    { path: 'contact', component: ContactInfoComponent },
    { path: 'home', redirectTo: '/user-login', pathMatch: 'full' },
    { path: '', redirectTo: '/user-login', pathMatch: 'full' }
];
