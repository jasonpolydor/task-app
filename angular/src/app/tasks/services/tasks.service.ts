import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../shared/services/url.service';
import {RestService} from '../../shared/services/abstract/rest.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService extends RestService{

  constructor(
      urlService: UrlService,
      http: HttpClient
  ) {
    super(urlService, http);
  }

  public getTaskList(){
      return this.getItem(
          () => this.urlService.getTasks()
      ).map(state => {
        console.log(state);
      });
  }
}
