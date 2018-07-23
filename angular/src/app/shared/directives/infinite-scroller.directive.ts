import { Directive , AfterViewInit, OnInit, ElementRef, Input } from '@angular/core';
import { UnsubscribeHelper } from '../utils/Unsubscribe.helper';

import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { pairwise } from 'rxjs/internal/operators/pairwise';
import { map } from 'rxjs/internal/operators/map';
import { exhaustMap } from 'rxjs/internal/operators/exhaustMap';
import { filter } from 'rxjs/internal/operators/filter';
import { startWith } from 'rxjs/internal/operators/startWith';

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
export class InfiniteScrollerDirective extends UnsubscribeHelper implements AfterViewInit, OnInit {

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

  ngOnInit(){
    console.log('init');
  }

  ngAfterViewInit() {
    console.log('after view init');
    this.registerScrollEvent();

    this.streamScrollEvents();

    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
      console.log('registerScrollEvent');
      this.scrollEvent$ = fromEvent(this.elm.nativeElement, 'scroll');
      console.log(this.scrollEvent$);
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$
        .pipe(map((e: any): ScrollPosition => ({
          sH: e.target.scrollHeight,
          sT: e.target.scrollTop,
          cH: e.target.clientHeight
        })))
        .pipe(pairwise())
        .pipe(filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1])))

    console.log(this.userScrolledDown$);
  }

  private requestCallbackOnScroll() {

    this.requestOnScroll$ = this.userScrolledDown$;

    if (this.immediateCallback) {
      this.requestOnScroll$ = this.requestOnScroll$
          .pipe(startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]));
    }

    this.requestOnScroll$
        .pipe(exhaustMap(() => { return this.scrollCallback(); }))
        .subscribe(() => { });

  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }

}
