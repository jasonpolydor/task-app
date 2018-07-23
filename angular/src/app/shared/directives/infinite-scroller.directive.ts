import { Directive , AfterViewInit, ElementRef, Input } from '@angular/core';
import {UnsubscribeHelper} from '../utils/Unsubscribe.helper';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective extends UnsubscribeHelper implements AfterViewInit {

  private scrollEvent$;

  private userScrolledDown$;

  private requestStream$;

  private requestOnScroll$;

  // callback function which should return an observable
  @Input() scrollCallback;

  // a boolean value, if true as soon as the directive is initialized call the callback()
  @Input() immediateCallBack;

  // until what percentage the user should scroll the container for the scrollCallback to be called
  @Input() ScrollPercent = 70;

  constructor(private elm: ElementRef) {
    super();
  }

  ngAfterViewInit() {
      this.registerScrollEvent();

      this.streamScrollEvents();

      this.requestCallbackOnScroll();
  }

}
