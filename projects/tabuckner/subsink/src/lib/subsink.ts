const isFunction = (fn) => {
  return typeof fn === 'function';
};

const isUnsubscribable = (target) => {
  return target && target.unsubscribe && (typeof target.unsubscribe === 'function');
};

export function SubSink({} = {}) {
  return function(constructor: any) {
    const ogOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function() {
      const usesSubSink = this.subSink && this.subSink.unsubscribe && (typeof this.subSink.unsubscribe === 'function');

      if (usesSubSink) {
        console.warn('usesSubSink');
        this.subSink.unsubscribe();
      }

      const usesSubs = this.subs && this.subs.unsubscribe && (typeof this.subs.unsubscribe === 'function');
      if (usesSubs) {
        console.warn('usesSubs');
        this.subs.unsubscribe();
      }

      // Execute ogOnDestroy ngOnDestroy
      if (ogOnDestroy && typeof ogOnDestroy === 'function') {
        ogOnDestroy.apply(this, arguments);
      }
    };
  };
}
