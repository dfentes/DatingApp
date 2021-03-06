import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
