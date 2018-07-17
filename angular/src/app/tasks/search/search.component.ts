import {Component, OnInit} from '@angular/core';
import {UnsubscribeHelper} from '../../shared/utils/Unsubscribe.helper';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends UnsubscribeHelper implements OnInit {

  constructor(
  ){
    super();
  }

  ngOnInit() {}
}
