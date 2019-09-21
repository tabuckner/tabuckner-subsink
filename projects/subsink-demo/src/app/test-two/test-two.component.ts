import { Component, OnDestroy } from '@angular/core';
import { SubsConsumer, SubSink } from 'dist/tabuckner/subsink';
import { Subscription, Subject } from 'rxjs';

@SubSink({debug: true})
@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements SubsConsumer, OnDestroy {
  subs = new Subscription();

  constructor() {
    this.subs.add(new Subject().next('123'));
  }

  ngOnDestroy() {}
}
