/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzResizableService } from './resizable.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './resizable.service';

const _c0 = ["*"];
export class NzResizeHandleMouseDownEvent {
    constructor(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
}
export class NzResizeHandleComponent {
    constructor(nzResizableService, cdr, elementRef) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('nz-resizable-handle');
    }
    ngOnInit() {
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe(entered => {
            this.entered = entered;
            this.cdr.markForCheck();
        });
    }
    onMousedown(event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizeHandleComponent.ɵfac = function NzResizeHandleComponent_Factory(t) { return new (t || NzResizeHandleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzResizableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzResizeHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResizeHandleComponent, selectors: [["nz-resize-handle"], ["", "nz-resize-handle", ""]], hostVars: 18, hostBindings: function NzResizeHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NzResizeHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("touchstart", function NzResizeHandleComponent_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("nz-resizable-handle-top", ctx.nzDirection === "top")("nz-resizable-handle-right", ctx.nzDirection === "right")("nz-resizable-handle-bottom", ctx.nzDirection === "bottom")("nz-resizable-handle-left", ctx.nzDirection === "left")("nz-resizable-handle-topRight", ctx.nzDirection === "topRight")("nz-resizable-handle-bottomRight", ctx.nzDirection === "bottomRight")("nz-resizable-handle-bottomLeft", ctx.nzDirection === "bottomLeft")("nz-resizable-handle-topLeft", ctx.nzDirection === "topLeft")("nz-resizable-handle-box-hover", ctx.entered);
    } }, inputs: { nzDirection: "nzDirection" }, outputs: { nzMouseDown: "nzMouseDown" }, exportAs: ["nzResizeHandle"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzResizeHandleComponent.ctorParameters = () => [
    { type: NzResizableService },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzResizeHandleComponent.propDecorators = {
    nzDirection: [{ type: Input }],
    nzMouseDown: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeHandleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handle, [nz-resize-handle]',
                exportAs: 'nzResizeHandle',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.nz-resizable-handle-top]': `nzDirection === 'top'`,
                    '[class.nz-resizable-handle-right]': `nzDirection === 'right'`,
                    '[class.nz-resizable-handle-bottom]': `nzDirection === 'bottom'`,
                    '[class.nz-resizable-handle-left]': `nzDirection === 'left'`,
                    '[class.nz-resizable-handle-topRight]': `nzDirection === 'topRight'`,
                    '[class.nz-resizable-handle-bottomRight]': `nzDirection === 'bottomRight'`,
                    '[class.nz-resizable-handle-bottomLeft]': `nzDirection === 'bottomLeft'`,
                    '[class.nz-resizable-handle-topLeft]': `nzDirection === 'topLeft'`,
                    '[class.nz-resizable-handle-box-hover]': 'entered',
                    '(mousedown)': 'onMousedown($event)',
                    '(touchstart)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzResizableService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { nzDirection: [{
            type: Input
        }], nzMouseDown: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmVzaXphYmxlL3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUl6RCxNQUFNLE9BQU8sNEJBQTRCO0FBQ3pDLElBQUUsWUFBbUIsU0FBNEIsRUFBUyxVQUFtQztBQUFJLFFBQTVFLGNBQVMsR0FBVCxTQUFTLENBQW1CO0FBQUMsUUFBUSxlQUFVLEdBQVYsVUFBVSxDQUF5QjtBQUFDLElBQUUsQ0FBQztBQUNqRyxDQUFDO0FBdUJELE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQU9yQyxZQUFvQixrQkFBc0MsRUFBVSxHQUFzQixFQUFVLFVBQXNCO0FBQzVILFFBRHNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7QUFBQyxRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFObEgsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO0FBQzFELFFBQXFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7QUFDcEYsUUFDRSxZQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDekMsUUFFSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzdGLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxLQUE4QjtBQUFJLFFBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDN0csSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDttREFoREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQ0FBc0Msa0JBQ2hELFFBQVEsRUFBRSxnQkFBZ0Isa0JBQzFCLFFBQVEsRUFBRSxtQ0FFVCxrQkFDRDtFQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsSUFBSSxFQUFFLHNCQUNKLGlDQUFpQyxFQUFFLHVCQUF1QixzQkFDMUQsbUNBQW1DLEVBQUUseUJBQXlCLHNCQUM5RDsyQkFBb0MsRUFBRSwwQkFBMEIsc0JBQ2hFLGtDQUFrQyxFQUFFLHdCQUF3QixzQkFDNUQsc0NBQXNDLEVBQUUsNEJBQTRCLHNCQUNwRTs7Q0FBeUMsRUFBRSwrQkFBK0Isc0JBQzFFLHdDQUF3QyxFQUFFLDhCQUE4QixzQkFDeEUscUNBQXFDLEVBQUUsMkJBQTJCLHNCQUNsRSx1Q0FBdUMsRUFBRSxTQUFTLHNCQUNsRCxhQUFhLEVBQUUscUJBQXFCLHNCQUNwQyxjQUFjLEVBQUUscUJBQXFCLGtCQUN0QyxjQUNGOzs7O2lEQUNJO0FBQUM7QUFBaUQsWUE3QjlDLGtCQUFrQjtBQUFJLFlBWjdCLGlCQUFpQjtBQUNqQixZQUNBLFVBQVU7QUFDWDtBQUFHO0FBR0ssMEJBb0NOLEtBQUs7QUFBSywwQkFDVixNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6YWJsZS5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTnpSZXNpemVEaXJlY3Rpb24gPSAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICd0b3BSaWdodCcgfCAnYm90dG9tUmlnaHQnIHwgJ2JvdHRvbUxlZnQnIHwgJ3RvcExlZnQnO1xuXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uLCBwdWJsaWMgbW91c2VFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXJlc2l6ZS1oYW5kbGUsIFtuei1yZXNpemUtaGFuZGxlXScsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtdG9wXSc6IGBuekRpcmVjdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1yaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21dJzogYG56RGlyZWN0aW9uID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWxlZnRdJzogYG56RGlyZWN0aW9uID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS10b3BSaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICd0b3BSaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21SaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICdib3R0b21SaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21MZWZ0XSc6IGBuekRpcmVjdGlvbiA9PT0gJ2JvdHRvbUxlZnQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtdG9wTGVmdF0nOiBgbnpEaXJlY3Rpb24gPT09ICd0b3BMZWZ0J2AsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWJveC1ob3Zlcl0nOiAnZW50ZXJlZCcsXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknLFxuICAgICcodG91Y2hzdGFydCknOiAnb25Nb3VzZWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uID0gJ2JvdHRvbVJpZ2h0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xuXG4gIGVudGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelJlc2l6YWJsZVNlcnZpY2U6IE56UmVzaXphYmxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduei1yZXNpemFibGUtaGFuZGxlJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZW50ZXJlZCA9PiB7XG4gICAgICB0aGlzLmVudGVyZWQgPSBlbnRlcmVkO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLm5leHQobmV3IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQodGhpcy5uekRpcmVjdGlvbiwgZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19