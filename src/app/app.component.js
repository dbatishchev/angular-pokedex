var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_1 = require('./home');
var router_active_1 = require('./router-active');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.loading = false;
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [],
            directives: [router_active_1.RouterActive],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                require('normalize.css'),
                "html, body{\n      height: 100%;\n      background: #F4FAFA;\n    }\n    button.active{\n      background: #fff;\n      color: #009688;\n    }\n    button.active:hover{\n      color: #fff;\n    }\n    .fill{\n      flex: 1 1 auto;\n    }\n    .app-state{\n      margin: 15px;\n      flex: 1;\n    }\n    .home{\n      flex: 1;\n    }\n    md-content{\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n    footer{\n      flex: 0 0 60px;\n      padding: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: #fff;\n    }"
            ],
            template: "\n    <md-content>\n      <md-toolbar color=\"primary\">\n          <span>{{ name }}</span>\n          <span class=\"fill\"></span>\n          <button md-button router-active [routerLink]=\" ['Index'] \">\n            Index\n          </button>\n          <button md-button router-active [routerLink]=\" ['Home'] \">\n            Home\n          </button>\n          <button md-button router-active [routerLink]=\" ['About'] \">\n            About\n          </button>\n          <button md-button router-active [routerLink]=\" ['List'] \">\n            List\n          </button>\n          <button md-button router-active [routerLink]=\" ['Profile'] \">\n            Profile\n          </button>\n      </md-toolbar>\n      \n      <md-progress-bar mode=\"indeterminate\" color=\"primary\" *ngIf=\"loading\"></md-progress-bar>\n\n      <router-outlet></router-outlet>\n\n      <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n      <footer>\n        <img [src]=\"angularclassLogo\" width=\"6%\">\n        WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a>\n      </footer>\n      </md-content>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
            { path: '/home', name: 'Home', component: home_1.Home },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', name: 'About', loader: function () { return require('es6-promise!./about')('About'); } },
            { path: '/list', name: 'List', loader: function () { return require('es6-promise!./list')('List'); } },
            { path: '/list/:id', name: 'Detail', loader: function () { return require('es6-promise!./detail')('Detail'); } },
            { path: '/profile', name: 'Profile', loader: function () { return require('es6-promise!./profile')('Profile'); } }
        ])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.component.js.map