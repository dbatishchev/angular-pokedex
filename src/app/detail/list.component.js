var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`List` component loaded asynchronously');
var List = (function () {
    function List(http) {
        var _this = this;
        this.pokemons = { results: [] };
        http.get('https://pokeapi.co/api/v2/pokemon/')
            .map(function (res) { return res.json(); })
            .subscribe(function (pokemons) { return _this.pokemons = pokemons; });
    }
    List.prototype.ngOnInit = function () {
        console.log('hello `List` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpack();
    };
    List.prototype.asyncDataWithWebpack = function () {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
        // setTimeout(() => {
        //
        //   let asyncDataPromise = asyncMockDataPromiseFactory();
        //   asyncDataPromise.then(json => {
        //     console.log('async mockData', json);
        //   });
        //
        // });
    };
    List = __decorate([
        core_1.Component({
            selector: 'list',
            styles: ["\n    h1 {\n      font-family: Arial, Helvetica, sans-serif\n    }\n    md-card{\n      margin: 25px;\n    }\n  "],
            template: "\n    <ul>\n        <li *ngFor=\"let pokemon of pokemons.results\">{{ pokemon.name }}</li>\n    </ul>\n  <md-card>\n    Ololo!\n    <pre>npm run start:hmr</pre>\n  </md-card>\n  <md-card>\n    <h3>\n      dimitrybatishchev\n    </h3>\n  </md-card>\n  "
        })
    ], List);
    return List;
})();
exports.List = List;
//# sourceMappingURL=list.component.js.map