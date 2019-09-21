const isFunction = (fn) => {
  return typeof fn === 'function';
};

export function SubSink({ debug = false } = {}) {
  return function(constructor: any) {
    const ogOnDestroy = constructor.prototype.ngOnDestroy;

    if (!isFunction(ogOnDestroy)) {
      throw new Error(`${constructor.name} is using @AutoUnsubscribe but does not implement OnDestroy`);
    }

    constructor.prototype.ngOnDestroy = function() {
      const usesSubSink = this.subSink && this.subSink.unsubscribe && isFunction(this.subSink.unsubscribe);

      if (usesSubSink) {
        if (debug) {
          console.warn(`${constructor.name} is using 'subSink' and is being automatically unsubscribed.`);
        }
        this.subSink.unsubscribe();
      }

      const usesSubs = this.subs && this.subs.unsubscribe && isFunction(this.subs.unsubscribe);
      if (usesSubs) {
        if (debug) {
          console.warn(`${constructor.name} is using 'subs' and is being automatically unsubscribed.`);
        }
        this.subs.unsubscribe();
      }

      // Execute ogOnDestroy ngOnDestroy
      if (ogOnDestroy && typeof ogOnDestroy === 'function') {
        ogOnDestroy.apply(this, arguments);
      }
    };
  };
}
