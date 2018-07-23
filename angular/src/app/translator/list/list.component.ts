import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {UnsubscribeHelper} from '../../shared/utils/Unsubscribe.helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends UnsubscribeHelper implements OnInit {

  constructor(public translatorService : TranslatorService) {
    super();
  }

  ngOnInit() {
    this.translatorService.getTranslations();
  }

}
