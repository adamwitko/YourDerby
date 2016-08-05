import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from './services/authentication.guard';
 
const routes: RouterConfig = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },  
  { path: '', component: DashboardComponent, canActivate: [AuthenticationGuard]  },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];