import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WhatisprizmComponent } from './components/whatisprizm/whatisprizm.component';
import { ParaMiningComponent } from './components/para-mining/para-mining.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'how_prizmx', component: WhatisprizmComponent},
    { path: 'paramining_content', component: ParaMiningComponent},
];