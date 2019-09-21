import { Subscription } from 'rxjs';

export interface SubSinkConsumer {
  subSink: Subscription;
}

export interface SubsConsumer {
  subs: Subscription;
}
