/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { coerceElement } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */
import * as ɵngcc0 from '@angular/core';
export class NzResizeObserverFactory {
    create(callback) {
        return typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(callback);
    }
}
NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
NzResizeObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeObserverFactory_Factory() { return new NzResizeObserverFactory(); }, token: NzResizeObserverFactory, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeObserverFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** An injectable service that allows watching elements for changes to their content. */
export class NzResizeObserver {
    constructor(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /** Keeps track of the existing ResizeObservers so they can be reused. */
        this.observedElements = new Map();
    }
    ngOnDestroy() {
        this.observedElements.forEach((_, element) => this.cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
            const stream = this.observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this.unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            const stream = new Subject();
            const observer = this.nzResizeObserverFactory.create(mutations => stream.next(mutations));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this.observedElements.get(element).count++;
        }
        return this.observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */
    unobserveElement(element) {
        if (this.observedElements.has(element)) {
            this.observedElements.get(element).count--;
            if (!this.observedElements.get(element).count) {
                this.cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying ResizeObserver for the specified element. */
    cleanupObserver(element) {
        if (this.observedElements.has(element)) {
            const { observer, stream } = this.observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    }
}
NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(ɵngcc0.ɵɵinject(NzResizeObserverFactory)); };
NzResizeObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeObserver_Factory() { return new NzResizeObserver(i0.ɵɵinject(NzResizeObserverFactory)); }, token: NzResizeObserver, providedIn: "root" });
NzResizeObserver.ctorParameters = () => [
    { type: NzResizeObserverFactory }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NzResizeObserverFactory }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVycy5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvcmVzaXplLW9ic2VydmVycy9yZXNpemUtb2JzZXJ2ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQWMsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtBQUNwQyxJQUFFLE1BQU0sQ0FBQyxRQUFnQztBQUFJLFFBQ3pDLE9BQU8sT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZGLElBQUUsQ0FBQztBQUNIOzRIQUFDO0FBQ0Q7bURBTkMsVUFBVSxTQUFDLEVBQUU7QUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBQzdCO0FBTUwsd0ZBQXdGO0FBRXhGLE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQVc5QixZQUFvQix1QkFBZ0Q7QUFBSSxRQUFwRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0FBQUMsUUFWckUseUVBQXlFO0FBQzNFLFFBQVUscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBTy9CLENBQUM7QUFDTixJQUN5RSxDQUFDO0FBQzFFLElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FB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QUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOytJQUFDO0FBQ0QscU5BMUVLO0FBQUM7RUFETCxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsbkNBQ3NCLFlBV0QsdUJBQXVCO0FBQUc7QUFaekMsRUFBRTs7O2lGQWFsQztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgY29lcmNlRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBGYWN0b3J5IHRoYXQgY3JlYXRlcyBhIG5ldyBSZXNpemVPYnNlcnZlciBhbmQgYWxsb3dzIHVzIHRvIHN0dWIgaXQgb3V0IGluIHVuaXQgdGVzdHMuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVPYnNlcnZlckZhY3Rvcnkge1xuICBjcmVhdGUoY2FsbGJhY2s6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2spOiBSZXNpemVPYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBSZXNpemVPYnNlcnZlcihjYWxsYmFjayk7XG4gIH1cbn1cblxuLyoqIEFuIGluamVjdGFibGUgc2VydmljZSB0aGF0IGFsbG93cyB3YXRjaGluZyBlbGVtZW50cyBmb3IgY2hhbmdlcyB0byB0aGVpciBjb250ZW50LiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZU9ic2VydmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBleGlzdGluZyBSZXNpemVPYnNlcnZlcnMgc28gdGhleSBjYW4gYmUgcmV1c2VkLiAqL1xuICBwcml2YXRlIG9ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPFxuICAgIEVsZW1lbnQsXG4gICAge1xuICAgICAgb2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyIHwgbnVsbDtcbiAgICAgIHN0cmVhbTogU3ViamVjdDxSZXNpemVPYnNlcnZlckVudHJ5W10+O1xuICAgICAgY291bnQ6IG51bWJlcjtcbiAgICB9XG4gID4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXJGYWN0b3J5OiBOelJlc2l6ZU9ic2VydmVyRmFjdG9yeSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCkpO1xuICB9XG5cbiAgb2JzZXJ2ZShlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxSZXNpemVPYnNlcnZlckVudHJ5W10+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50T3JSZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8UmVzaXplT2JzZXJ2ZXJFbnRyeVtdPikgPT4ge1xuICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN0cmVhbS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy51bm9ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBieSB1c2luZyB0aGUgZXhpc3RpbmcgUmVzaXplT2JzZXJ2ZXIgaWYgYXZhaWxhYmxlLCBvciBjcmVhdGluZyBhXG4gICAqIG5ldyBvbmUgaWYgbm90LlxuICAgKi9cbiAgcHJpdmF0ZSBvYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU3ViamVjdDxSZXNpemVPYnNlcnZlckVudHJ5W10+IHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdWJqZWN0PFJlc2l6ZU9ic2VydmVyRW50cnlbXT4oKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5uelJlc2l6ZU9ic2VydmVyRmFjdG9yeS5jcmVhdGUobXV0YXRpb25zID0+IHN0cmVhbS5uZXh0KG11dGF0aW9ucykpO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHsgb2JzZXJ2ZXIsIHN0cmVhbSwgY291bnQ6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5zdHJlYW07XG4gIH1cblxuICAvKipcbiAgICogVW4tb2JzZXJ2ZXMgdGhlIGdpdmVuIGVsZW1lbnQgYW5kIGNsZWFucyB1cCB0aGUgdW5kZXJseWluZyBSZXNpemVPYnNlcnZlciBpZiBub2JvZHkgZWxzZSBpc1xuICAgKiBvYnNlcnZpbmcgdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB1bm9ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQtLTtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFuIHVwIHRoZSB1bmRlcmx5aW5nIFJlc2l6ZU9ic2VydmVyIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuICovXG4gIHByaXZhdGUgY2xlYW51cE9ic2VydmVyKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3QgeyBvYnNlcnZlciwgc3RyZWFtIH0gPSB0aGlzLm9ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpITtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBzdHJlYW0uY29tcGxldGUoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=