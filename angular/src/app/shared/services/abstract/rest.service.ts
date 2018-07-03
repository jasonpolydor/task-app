import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {UrlService} from '../url.service';
import {UnsubscribeHelper} from '../../utils/Unsubscribe.helper';

export abstract class RestService extends UnsubscribeHelper
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
  {
    super();
  }

  protected getItem(routeGetter: Function) : Observable<any>{
      return this.http
          .get(routeGetter());
  }

  protected putItem(routeGetter: Function, params: Object) : Observable<any>{
    return this.http
        .put(routeGetter(), params);
  }

  protected postItem(routeGetter: Function, params: Object) : Observable<any>{
    return this.http
        .post(routeGetter(), params);
  }

  protected deleteItem(routeGetter: Function, id: number) : Observable<any>{
    return this.http
        .delete(routeGetter(),{ body: { id } });
  }

}
