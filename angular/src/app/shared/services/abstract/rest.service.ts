import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {UrlService} from '../url.service';

export abstract class RestService
{
  /**
   *
   * @param urlService
   * @param http
   */
  constructor(
      protected urlService: UrlService,
      protected http: HttpClient
  )
  {}

  protected getItem(routeGetter: Function) : Observable<any>{
      return this.http
          .get(routeGetter());
  }

  protected postItem(routeGetter: Function, params) : Observable<any>{
    return this.http
        .post(routeGetter(), params);
  }
}
