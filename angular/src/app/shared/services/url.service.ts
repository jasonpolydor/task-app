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
      return this.API_URL + '/task/list';
    }

    editTask(id: number): string{
        return this.API_URL + '/task/edit/' + id;
    }

    newTask(): string{
        return this.API_URL + '/task/new';
    }

    deleteTask(id: number): string{
        return this.API_URL + '/task/delete/' + id;
    }
}
