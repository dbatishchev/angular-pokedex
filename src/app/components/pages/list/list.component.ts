import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`List` component loaded asynchronously');

@Component({
    selector: 'list',
    styles: [
        require('./list.scss')
    ],
    template: require('./list.html')
})
export class List {

    pokemons:Array<Object>;

    constructor(http:Http) {
        this.pokemons = [];
        http.get('https://www.tablerig.com/tables/calpaterson/pokemon-with-images')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(pokemons => this.pokemons = pokemons.body.map((item) => {
                return {img: item['image-url'], name: item['pokemon-name'], id: item['national-pokedex-number']};
            }));
    }

    ngOnInit() {
        console.log('hello `List` component');
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
