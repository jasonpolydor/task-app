import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
    private API_URL: string;

    constructor() {
        this.API_URL = environment.apiUrl;
    }

    search(query: string, api: string): string
    {
        return this.API_URL + api +'/search?q=' + query;
    }

    get(api: string): string
    {
      return this.API_URL + api + '/list';
    }

    edit(id: number, api: string): string{
        return this.API_URL + api + '/edit/' + id;
    }

    add(api: string): string{
        return this.API_URL + api + '/new';
    }

    remove(id: number, api: string): string{
        return this.API_URL + api + '/delete/' + id;
    }
}
