import { isFunction } from './helpers/is-function';

export function TakesUntil({ debug = false } = {}) {
  return function(constructor: any) {
    const ogOnDestroy = constructor.prototype.ngOnDestroy;

    if (!isFunction(ogOnDestroy)) {
      throw new Error(`${constructor.name} is using @TakesUntil but does not implement OnDestroy`);
    }

    constructor.prototype.ngOnDestroy = function() {
      const usesTakesUntil = this.$onDestroy && this.$onDestroy.next && isFunction(this.$onDestroy.next) && this.$onDestroy.complete && isFunction(this.$onDestroy.complete);

      if (usesTakesUntil) {
        if (debug) {
          console.warn(`${constructor.name} is using '@TakesUntil()'. Calling .next() and .complete()`);
        }
        this.$onDestroy.next();
        this.$onDestroy.complete();
      }

      // Execute ogOnDestroy ngOnDestroy
      if (ogOnDestroy && typeof ogOnDestroy === 'function') {
        ogOnDestroy.apply(this, arguments);
      }
    };
  };
}
