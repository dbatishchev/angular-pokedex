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
console.log('`Detail` component loaded asynchronously');
var Detail = (function () {
    function Detail(params, http) {
        var _this = this;
        this.id = params.get('id');
        this.pokemon = {};
        http.get('https://pokeapi.co/api/v2/pokemon/' + this.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; });
    }
    Detail.prototype.ngOnInit = function () {
        console.log('hello `Detail` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpack();
    };
    Detail.prototype.asyncDataWithWebpack = function () {
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
    Detail = __decorate([
        core_1.Component({
            selector: 'detail',
            styles: ["\n    h1 {\n      font-family: Arial, Helvetica, sans-serif\n    }\n    md-card{\n      margin: 25px;\n    }\n  "],
            template: "\n  <md-card>\n    <pre>{{pokemon.name}}</pre>\n    <pre>{{pokemon.id}}</pre>\n  </md-card>\n  "
        })
    ], Detail);
    return Detail;
})();
exports.Detail = Detail;
//# sourceMappingURL=detail.component.js.map