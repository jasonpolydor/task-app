import {Component, OnInit} from '@angular/core';
import {UnsubscribeHelper} from '../../shared/utils/Unsubscribe.helper';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends UnsubscribeHelper implements OnInit {

  public searchForm: FormGroup;

  constructor(
  ){
    super();
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.searchForm.value));
  }
}
