//These first 3 lines will be deprecated by the final release
import {Component} from "@angular/core";

import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {Location} from "@angular/common";
import {AuthService} from '../../services/auth.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [],
    template: require('./header.html')
})
export class Navbar {
    constructor(private location:Location, private router:Router, private authService:AuthService) {
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

    doLogin() {
        this.authService.doLogin();
    }

    doLogout() {
        this.authService.doLogout();
    }

    get userName() {
        return this.authService.getUserName();
    }

    get page() {
        return this.location.path().split('/')[1];
    }
}