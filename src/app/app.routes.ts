import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: RouterConfig = [
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];