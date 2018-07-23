import { Injectable } from '@angular/core';
import { UrlService } from '../../shared/services/url.service';
import { RestService } from '../../shared/services/abstract/rest.service';
import { HttpClient } from '@angular/common/http';
import { TranslatorModel } from '../models/translator.model';


@Injectable({
  providedIn: 'root'
})
export class TranslatorService extends RestService{

  private api:  string = '/translation';
  private translations = <Array>TranslatorModel;
  //private _translations$: BehaviorSubject<TranslatorModel[]>;

  constructor(
      urlService : UrlService,
      http : HttpClient
  ) {
    super(urlService, http);
    //this._translations$ = new BehaviorSubject<TranslatorModel[]>(this.translations);
  }

  public getTranslations(){
    this.addSubscription(
        this.getItem(
            () => this.urlService.get(this.api)
        ).subscribe(data =>{
            console.log(data['translations']);
            this.translations = data['translations'];
            //console.log(this.translations);
            //this._translations$.next(this.translations);
        })
    );
  }

  public getObservable(): Observable<TranslatorModel[]> {
    return this._translations$.asObservable();
  }
}
