import {Component, OnInit} from '@angular/core';
import {UnsubscribeHelper} from '../../shared/utils/Unsubscribe.helper';
import {FormControl, FormGroup} from '@angular/forms';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends UnsubscribeHelper implements OnInit {

  public searchForm: FormGroup;

  constructor(
      private taskService: TasksService
  ){
    super();
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  onSubmit() {
    this.addSubscription(
        this.taskService.searchTasks(this.searchForm.value).subscribe(
            (state)=> {
              this.taskService.task$(state);
            }
        )
    );
  }
}
