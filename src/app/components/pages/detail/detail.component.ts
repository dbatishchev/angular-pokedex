import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { RouteConfig, RouteParams, Router } from '@angular/router-deprecated';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
    selector: 'detail',
    styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
    template: `
  <md-card>
    <pre>{{pokemon.name}}</pre>
    <pre>{{pokemon.id}}</pre>
  </md-card>
  `
})
export class Detail {
    id: String;
    pokemon: Object;

    constructor(params: RouteParams, http: Http) {
        this.id = params.get('id');
        this.pokemon = {};

        http.get('https://pokeapi.co/api/v2/pokemon/' + this.id)
            .map(res => res.json())
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    ngOnInit() {
        console.log('hello `Detail` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpack();
    }
    asyncDataWithWebpack() {
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
    }
}
