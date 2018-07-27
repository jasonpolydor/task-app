import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { scan } from 'rxjs/internal/operators/scan';
import { tap } from 'rxjs/internal/operators/tap';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private sprite;
  private meterContainer;
  private meter;

  private powerLevels = {
    100: {
      current: 'base',
      next: 'ssj'
    },
    200: {
      current: 'ssj',
      next: 'ssj2'
    },
    300: {
      current: 'ssj2',
      next: 'ssj3'
    }
  };

  constructor() {}

  ngOnInit() {
    this.sprite = document.querySelector('#sprite');
    this.meterContainer = document.querySelector('#meter-container');
    this.meter = document.querySelector('#meter');
    this.powerup();
  }

  private powerup(){
    let begin = fromEvent(document, 'keydown');
    let end = fromEvent(document, 'keyup');

    begin.pipe(
        scan(level => level + 1, 1),
        tap(level => {
          console.log({level});
          this.sprite.classList.add('powerup');
          this.fillMeter(level);
        }),
        map(level => this.powerLevels[level]),
        filter(level => level && level.next)

    )
        .subscribe(({ current, next }) => {
          console.log(current);
          console.log(next);
          this.sprite.classList.remove(current);
          this.sprite.classList.add(next);
        });

    end.subscribe(() => {
      this.sprite.classList.remove('powerup');
    });

  }

  private fillMeter(level){
    let limit = 300;

    if(level >= limit){
      return;
    }

    let containerWidth = this.meterContainer.offsetWidth;
    let newWidth = (level / limit ) * containerWidth;

    this.meter.style.width = `${newWidth}px`;
  };

}
