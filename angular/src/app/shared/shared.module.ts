import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlService } from './services/url.service';
import { InfiniteScrollerDirective } from './directives/infinite-scroller.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      InfiniteScrollerDirective
  ],
  exports: [
      InfiniteScrollerDirective
  ],
  providers: [
    UrlService
  ]
})
export class SharedModule { }
