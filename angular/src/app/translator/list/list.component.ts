import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { UnsubscribeHelper } from '../../shared/utils/Unsubscribe.helper';
import { TranslatorModel } from '../models/translator.model';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends UnsubscribeHelper implements OnInit {

  translations: Array<any> = [];
  scrollCallback;

  constructor(public translatorService : TranslatorService) {
    super();
    this.scrollCallback = this.getTranslations.bind(this);
  }

  ngOnInit() {
    this.getTranslations();
  }

  private getTranslations(){
     this.addSubscription(
        this.translatorService.translations$.subscribe(
            (data: TranslatorModel[]) => {
                this.translations = data;
            },
            (err: HttpErrorResponse) => {
              if(err.error instanceof Error){
                console.log("Client-side error occured");
              }else{
                console.log("Server-side error occured");
              }
            }
        )
     );
  }

}
