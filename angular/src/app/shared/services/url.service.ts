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

    getTasks(): string
    {
      return this.API_URL + '/tasks/list';
    }
}
