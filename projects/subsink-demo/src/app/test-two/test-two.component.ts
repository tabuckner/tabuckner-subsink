import { Component, OnDestroy } from '@angular/core';
import { SubsConsumer, SubSink } from 'projects/tabuckner/subsink/src/public-api';
import { Subscription, Subject } from 'rxjs';

@SubSink()
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
