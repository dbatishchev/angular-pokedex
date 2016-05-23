/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './components/pages/home';
import { RouterActive } from './directives/router-active';

//import {header} from './header.component';
//import {footer} from './footer.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [RouterActive],
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('normalize.css'),
        require('bootstrap/dist/css/bootstrap.css'),
        require('./app.scss')
    ],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', name: 'Index', component: Home, useAsDefault: true},
    {path: '/home', name: 'Home', component: Home},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    {path: '/about', name: 'About', loader: () => require('es6-promise!./components/pages/about')('About')},
    {path: '/list', name: 'List', loader: () => require('es6-promise!./components/pages/list')('List')},
    {path: '/list/:id', name: 'Detail', loader: () => require('es6-promise!./components/pages/detail')('Detail')},
    {path: '/profile', name: 'Profile', loader: () => require('es6-promise!./components/pages/profile')('Profile')}
])
export class App {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    loading = false;
    name = 'Pokedex';
    url = 'https://twitter.com/AngularClass';

    constructor(public appState:AppState) {
    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}