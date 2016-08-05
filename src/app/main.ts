import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppRouterProviders } from './app.routes';
import { AuthenticationGuard } from './services/authentication.guard';

bootstrap(AppComponent, [
  AppRouterProviders,
  AuthenticationGuard
]);