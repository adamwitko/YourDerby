import { CanActivate } from '@angular/router';

export class AuthenticationGuard implements CanActivate {
    canActivate() {
        return true;
    }
}