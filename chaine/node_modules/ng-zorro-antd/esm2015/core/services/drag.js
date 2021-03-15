/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { getEventPosition, isTouchEvent } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
function getPagePosition(event) {
    const e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
export class NzDragService {
    constructor(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    requestDraggingSequence(event) {
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((e) => {
            return {
                x: e.pageX - this.currentStartingPoint.x,
                y: e.pageY - this.currentStartingPoint.y
            };
        }), filter((e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold), finalize(() => this.teardownDraggingSequence()));
    }
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
    }
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
NzDragService.ɵfac = function NzDragService_Factory(t) { return new (t || NzDragService)(ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2)); };
NzDragService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
NzDragService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDragService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.RendererFactory2 }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2RyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekU7O0FBY0EsU0FBUyxlQUFlLENBQUMsS0FBOEI7QUFBSSxJQUN6RCxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxJQUFFLE9BQU87QUFDVCxRQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztBQUNkLFFBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQ2QsS0FBRyxDQUFDO0FBQ0osQ0FBQztBQUVEO0FBQ0E7QUFDQSxHQUFHO0FBSUgsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFNRSxZQUFZLGdCQUFrQztBQUNoRCxRQVBVLHNCQUFpQixHQUFHLENBQUMsQ0FBQztBQUNoQyxRQUFVLDRCQUF1QixHQUF1QyxJQUFJLENBQUM7QUFDN0UsUUFBVSx5QkFBb0IsR0FBaUIsSUFBSSxDQUFDO0FBQ3BELFFBQVUsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0FBQ2xELFFBR0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hFLElBQUUsQ0FBQztBQUNILElBQ0UsdUJBQXVCLENBQUMsS0FBOEI7QUFBSSxRQUN4RCxJQUFJLENBQUMsSUFBSSxD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QUFDLENBQUM7QUFDVCxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQzlCLGdCQUFRLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtBQUNuRSxvQkFBVSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUM1Qyx3QkFBWSxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEQscUJBQVc7QUFDWCxnQkFBUSxDQUFDLENBQUM7QUFDVixhQUFPLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNVLHdCQUF3QjtBQUFLLFFBQ25DLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0g7c0lBQUM7QUFDRCxxTUExRUs7QUFBQztFQUhMLFVBQVUsU0FBQyxyQkFJSSxZQWxDZ0IsZ0JBQWdCO0FBQUc7S0ErQmpELFVBQVUsRUFBRSxNQUFNLGNBQ25COzs7OztpRkFoQ29EO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmluYWxpemUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0RXZlbnRQb3NpdGlvbiwgaXNUb3VjaEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxudHlwZSBEZWx0YSA9IFBvaW50O1xuXG5pbnRlcmZhY2UgSGFuZGxlckl0ZW0ge1xuICBoYW5kbGVyPyhlOiBFdmVudCk6IHZvaWQ7XG5cbiAgdGVhcmRvd24oKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IFBvaW50IHtcbiAgY29uc3QgZSA9IGdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGUgYSBnbG9iYWwgZHJhZ2dpbmcgc2VydmljZSB0byBvdGhlciBjb21wb25lbnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekRyYWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnZ2luZ1RocmVzaG9sZCA9IDU7XG4gIHByaXZhdGUgY3VycmVudERyYWdnaW5nU2VxdWVuY2U6IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGN1cnJlbnRTdGFydGluZ1BvaW50OiBQb2ludCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGhhbmRsZVJlZ2lzdHJ5ID0gbmV3IFNldDxIYW5kbGVySXRlbT4oKTtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlcXVlc3REcmFnZ2luZ1NlcXVlbmNlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IE9ic2VydmFibGU8RGVsdGE+IHtcbiAgICBpZiAoIXRoaXMuaGFuZGxlUmVnaXN0cnkuc2l6ZSkge1xuICAgICAgdGhpcy5yZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoRXZlbnQoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBDb21wbGV0ZSBsYXN0IGRyYWdnaW5nIHNlcXVlbmNlIGlmIGEgbmV3IHRhcmdldCBpcyBkcmFnZ2VkLlxuICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U3RhcnRpbmdQb2ludCA9IGdldFBhZ2VQb3NpdGlvbihldmVudCk7XG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaD4oKTtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLnBpcGUoXG4gICAgICBtYXAoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGUucGFnZVggLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS54LFxuICAgICAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50IS55XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoZTogRGVsdGEpID0+IE1hdGguYWJzKGUueCkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkIHx8IE1hdGguYWJzKGUueSkgPiB0aGlzLmRyYWdnaW5nVGhyZXNob2xkKSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMudGVhcmRvd25EcmFnZ2luZ1NlcXVlbmNlKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJEcmFnZ2luZ0hhbmRsZXIoaXNUb3VjaDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2htb3ZlJywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUudG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVJlZ2lzdHJ5LmFkZCh7XG4gICAgICAgIHRlYXJkb3duOiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UubmV4dChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==