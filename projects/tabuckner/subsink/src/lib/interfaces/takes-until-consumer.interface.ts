import { Subject } from 'rxjs';

export interface TakesUntilConsumer {
  $onDestroy: Subject<void>;
}
