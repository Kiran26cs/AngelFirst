import {Routes, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Injectable} from '@angular/core'

@Injectable()
export class RouterSecurityService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

        let idValue = route.params['id']//returns string value
        if (parseInt(idValue) > 1) {
            this.router.navigate(['noexistence']);
            return false;
        } else {
            return true;
        }
    }
}

