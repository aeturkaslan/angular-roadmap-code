import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

//canActivate Guard
export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //...
    //...
    console.log("canActivate Guard");
    return true;
};

//canActivateChild Guard
export const canActivateChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //...
    //...
    console.log("canActivateChildGuard");
    return true;
};

//canDeactivate Guard
export const canDeactivateGuard: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, 
                                                        currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
                                                            console.log("canDeactivate Guard");
                                                            return true;
                                                            };

//Resolve Guard
export const resolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    /*ResolveFn'de, yapılacak HTTP isteğinin modellenmesi gerekir. Bunun için httpClient instance'ına ihtiyacımız var. 
    Provider'dan talep etmemiz gerekiyor. Bir fonksiyonda provider'dan Dependency Injection ile instance talebi yapmak için inject
    fonksiyonunu kullanmamız gerekiyor. */

    const httpClient = inject(HttpClient);
    return httpClient.get("https://jsonplaceholder.typicode.com/photos"); //Observable döndürülmesi lazım.(subscribe olmamak gerekiyor.)
};

//canMatch Guard
export const isAdminGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return !!localStorage.getItem("admin"); //localstorageda admin varsa true döndürür.
}

export const isUserGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return !localStorage.getItem("admin"); //localstorageda admin yoksa true döndürür.
}