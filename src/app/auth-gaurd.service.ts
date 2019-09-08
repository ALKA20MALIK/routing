import { CanActivate, CanActivateChild, UrlTree } from '@angular/router';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Url } from 'url';

@Injectable()
export class AuthGaurd implements CanActivate,CanActivateChild {
constructor(private authService:AuthService,private router:Router){

}

//Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean
    {  
         return  this.authService.isAuthenticated()
            .then((authenticated:boolean)=>{
                    if(authenticated){
                        return true
                    }
                    else {

                        this.router.navigate(['/'])
                        return false
                    }
                }
            )
        }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state)
    }
}