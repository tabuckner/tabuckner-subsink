import { Component, OnDestroy } from '@angular/core';
import { SubSinkConsumer, SubSink } from 'dist/tabuckner/subsink';
import { Subscription, Subject } from 'rxjs';

@SubSink()
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnDestroy, SubSinkConsumer {
  subSink = new Subscription();

  constructor() {
    this.subSink.add(new Subject().next('abc'));
  }

  public ngOnDestroy() {}

}
