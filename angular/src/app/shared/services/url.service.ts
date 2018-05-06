import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getTasks(): string
  {
    return this.getRouter().generate('task_list');
  }

  private getRouter():any{
    return window['Routing'];
  }
}
