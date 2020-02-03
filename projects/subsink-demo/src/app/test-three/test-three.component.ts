import { Component, OnInit, OnDestroy } from '@angular/core';
import { TakesUntil, TakesUntilConsumer } from 'dist/tabuckner/subsink';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@TakesUntil({debug: true})
@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: ['./test-three.component.css']
})
export class TestThreeComponent implements OnInit, OnDestroy, TakesUntilConsumer {
  $onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit() {
    const subj = new Subject();
    subj.pipe(
      takeUntil(this.$onDestroy),
    ).subscribe(console.warn);
    subj.next('asdf');
    subj.next('l;kj');
    subj.next('123');
  }

  ngOnDestroy() {}

}
