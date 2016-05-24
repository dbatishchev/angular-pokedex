
import { Injectable } from 'angular2/angular2';

@Injectable()
export class PokemonApi {
    url: string;
    constructor() {
        this.url = 'https://api.spotify.com/v1/';
    }

    public searchArtist (value) {
        return window.fetch(this.url + 'search?type=artist&q=' + value);
    }

    public getArtistById (id) {
        return window.fetch(this.url + 'artists/' + id);
    }
}