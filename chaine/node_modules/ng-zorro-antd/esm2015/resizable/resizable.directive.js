/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './resizable-utils';
import { NzResizableService } from './resizable.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './resizable.service';
import * as ɵngcc2 from '@angular/cdk/platform';
export class NzResizableDirective {
    constructor(elementRef, renderer, nzResizableService, platform, ngZone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzResizableService = nzResizableService;
        this.platform = platform;
        this.ngZone = ngZone;
        this.nzBounds = 'parent';
        this.nzMinHeight = 40;
        this.nzMinWidth = 40;
        this.nzGridColumnCount = -1;
        this.nzMaxColumn = -1;
        this.nzMinColumn = -1;
        this.nzLockAspectRatio = false;
        this.nzPreview = false;
        this.nzDisabled = false;
        this.nzResize = new EventEmitter();
        this.nzResizeEnd = new EventEmitter();
        this.nzResizeStart = new EventEmitter();
        this.resizing = false;
        this.currentHandleEvent = null;
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('nz-resizable');
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (this.nzDisabled) {
                return;
            }
            this.resizing = true;
            this.nzResizableService.startResizing(event.mouseEvent);
            this.currentHandleEvent = event;
            this.setCursor();
            this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            this.elRect = this.el.getBoundingClientRect();
        });
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (this.resizing) {
                this.resizing = false;
                this.nzResizableService.documentMouseUp$.next();
                this.endResize(event);
            }
        });
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (this.resizing) {
                this.resize(event);
            }
        });
    }
    onMouseenter() {
        this.nzResizableService.mouseEntered$.next(true);
    }
    onMouseleave() {
        this.nzResizableService.mouseEntered$.next(false);
    }
    setPosition() {
        const position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    }
    calcSize(width, height, ratio) {
        let newWidth;
        let newHeight;
        let maxWidth;
        let maxHeight;
        let col = 0;
        let spanWidth = 0;
        let minWidth = this.nzMinWidth;
        let boundWidth = Infinity;
        let boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            const parent = this.renderer.parentNode(this.el);
            if (parent instanceof HTMLElement) {
                const parentRect = parent.getBoundingClientRect();
                boundWidth = parentRect.width;
                boundHeight = parentRect.height;
            }
        }
        else if (this.nzBounds === 'window') {
            if (typeof window !== 'undefined') {
                boundWidth = window.innerWidth;
                boundHeight = window.innerHeight;
            }
        }
        else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
            const boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
            boundWidth = boundsRect.width;
            boundHeight = boundsRect.height;
        }
        maxWidth = ensureInBounds(this.nzMaxWidth, boundWidth);
        maxHeight = ensureInBounds(this.nzMaxHeight, boundHeight);
        if (this.nzGridColumnCount !== -1) {
            spanWidth = maxWidth / this.nzGridColumnCount;
            minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
            maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
        }
        if (ratio !== -1) {
            if (/(left|right)/i.test(this.currentHandleEvent.direction)) {
                newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                    newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                }
            }
            else {
                newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                if (newWidth >= maxWidth || newWidth <= minWidth) {
                    newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                }
            }
        }
        else {
            newWidth = Math.min(Math.max(width, minWidth), maxWidth);
            newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        }
        if (this.nzGridColumnCount !== -1) {
            col = Math.round(newWidth / spanWidth);
            newWidth = col * spanWidth;
        }
        return {
            col,
            width: newWidth,
            height: newHeight
        };
    }
    setCursor() {
        switch (this.currentHandleEvent.direction) {
            case 'left':
            case 'right':
                this.renderer.setStyle(document.body, 'cursor', 'ew-resize');
                break;
            case 'top':
            case 'bottom':
                this.renderer.setStyle(document.body, 'cursor', 'ns-resize');
                break;
            case 'topLeft':
            case 'bottomRight':
                this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                break;
            case 'topRight':
            case 'bottomLeft':
                this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                break;
        }
        this.renderer.setStyle(document.body, 'user-select', 'none');
    }
    resize(event) {
        const elRect = this.elRect;
        const resizeEvent = getEventWithPoint(event);
        const handleEvent = getEventWithPoint(this.currentHandleEvent.mouseEvent);
        let width = elRect.width;
        let height = elRect.height;
        const ratio = this.nzLockAspectRatio ? width / height : -1;
        switch (this.currentHandleEvent.direction) {
            case 'bottomRight':
                width = resizeEvent.clientX - elRect.left;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'bottomLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'topRight':
                width = resizeEvent.clientX - elRect.left;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'topLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'top':
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'right':
                width = resizeEvent.clientX - elRect.left;
                break;
            case 'bottom':
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'left':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        }
        const size = this.calcSize(width, height, ratio);
        this.sizeCache = Object.assign({}, size);
        this.ngZone.run(() => {
            this.nzResize.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        });
        if (this.nzPreview) {
            this.previewResize(size);
        }
    }
    endResize(event) {
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        const size = this.sizeCache
            ? Object.assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run(() => {
            this.nzResizeEnd.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        });
        this.sizeCache = null;
        this.currentHandleEvent = null;
    }
    previewResize({ width, height }) {
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', `${width}px`);
        this.renderer.setStyle(this.ghostElement, 'height', `${height}px`);
    }
    createGhostElement() {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    }
    removeGhostElement() {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    }
    ngOnDestroy() {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizableDirective.ɵfac = function NzResizableDirective_Factory(t) { return new (t || NzResizableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzResizableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NzResizableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzResizableDirective, selectors: [["", "nz-resizable", ""]], hostVars: 4, hostBindings: function NzResizableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NzResizableDirective_mouseenter_HostBindingHandler() { return ctx.onMouseenter(); })("mouseleave", function NzResizableDirective_mouseleave_HostBindingHandler() { return ctx.onMouseleave(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("nz-resizable-resizing", ctx.resizing)("nz-resizable-disabled", ctx.nzDisabled);
    } }, inputs: { nzBounds: "nzBounds", nzMinHeight: "nzMinHeight", nzMinWidth: "nzMinWidth", nzGridColumnCount: "nzGridColumnCount", nzMaxColumn: "nzMaxColumn", nzMinColumn: "nzMinColumn", nzLockAspectRatio: "nzLockAspectRatio", nzPreview: "nzPreview", nzDisabled: "nzDisabled", nzMaxHeight: "nzMaxHeight", nzMaxWidth: "nzMaxWidth" }, outputs: { nzResize: "nzResize", nzResizeEnd: "nzResizeEnd", nzResizeStart: "nzResizeStart" }, exportAs: ["nzResizable"], features: [ɵngcc0.ɵɵProvidersFeature([NzResizableService])] });
NzResizableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzResizableService },
    { type: Platform },
    { type: NgZone }
];
NzResizableDirective.propDecorators = {
    nzBounds: [{ type: Input }],
    nzMaxHeight: [{ type: Input }],
    nzMaxWidth: [{ type: Input }],
    nzMinHeight: [{ type: Input }],
    nzMinWidth: [{ type: Input }],
    nzGridColumnCount: [{ type: Input }],
    nzMaxColumn: [{ type: Input }],
    nzMinColumn: [{ type: Input }],
    nzLockAspectRatio: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzResize: [{ type: Output }],
    nzResizeEnd: [{ type: Output }],
    nzResizeStart: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzPreview", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizableDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-resizable]',
                exportAs: 'nzResizable',
                providers: [NzResizableService],
                host: {
                    '[class.nz-resizable-resizing]': 'resizing',
                    '[class.nz-resizable-disabled]': 'nzDisabled',
                    '(mouseenter)': 'onMouseenter()',
                    '(mouseleave)': 'onMouseleave()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzResizableService }, { type: ɵngcc2.Platform }, { type: ɵngcc0.NgZone }]; }, { nzBounds: [{
            type: Input
        }], nzMinHeight: [{
            type: Input
        }], nzMinWidth: [{
            type: Input
        }], nzGridColumnCount: [{
            type: Input
        }], nzMaxColumn: [{
            type: Input
        }], nzMinColumn: [{
            type: Input
        }], nzLockAspectRatio: [{
            type: Input
        }], nzPreview: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzResize: [{
            type: Output
        }], nzResizeEnd: [{
            type: Output
        }], nzResizeStart: [{
            type: Output
        }], nzMaxHeight: [{
            type: Input
        }], nzMaxWidth: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yZXNpemFibGUvcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEksT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQXFCekQsTUFBTSxPQUFPLG9CQUFvQjtBQUFHLElBNEJsQyxZQUNVLFVBQW1DLEVBQ25DLFFBQW1CLEVBQ25CLGtCQUFzQyxFQUN0QyxRQUFrQixFQUNsQixNQUFjO0FBQ3ZCLFFBTFMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7QUFBQyxRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtBQUFDLFFBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVU7QUFBQyxRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQzFCLFFBN0JXLGFBQVEsR0FBa0QsUUFBUSxDQUFDO0FBQzlFLFFBRVcsZ0JBQVcsR0FBVyxFQUFFLENBQUM7QUFDcEMsUUFBVyxlQUFVLEdBQVcsRUFBRSxDQUFDO0FBQ25DLFFB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QyxRQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDtnREE1UkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0Isa0JBQzFCLFFBQVEsRUFBRSxhQUFhLGtCQUN2QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFDL0IsSUFBSSxFQUFFLHNCQUNKLCtCQUErQixFQUFFLFVBQVUsc0JBQzNDO0VBQStCLEVBQUUsWUFBWSxzQkFDN0MsY0FBYyxFQUFFLGdCQUFnQixzQkFDaEMsY0FBYyxFQUFFLGdCQUFnQixrQkFDakMsY0FDRjs7OzswZ0JBQ0k7QUFBQztBQUE4QyxZQTdCakIsVUFBVTtBQUFJLFlBQThDLFNBQVM7QUFBSSxZQVFuRyxrQkFBa0I7QUFBSSxZQVR0QixRQUFRO0FBQUksWUFDK0MsTUFBTTtBQUFHO0FBQUc7QUFBd0MsdUJBa0NySCxLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHVCQUNWLE1BQU07QUFBSywwQkFDWCxNQUFNO0FBQUssNEJBQ1gsTUFBTTtBQUFJO0FBTGM7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUN4QiwrREFEMEQ7QUFDbkM7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNoQix1REFEMEM7QUFDM0I7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNqQix3REFENEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDdkQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBlbnN1cmVJbkJvdW5kcywgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXRFdmVudFdpdGhQb2ludCB9IGZyb20gJy4vcmVzaXphYmxlLXV0aWxzJztcbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vcmVzaXphYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56UmVzaXplRXZlbnQge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2w/OiBudW1iZXI7XG4gIG1vdXNlRXZlbnQ/OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXJlc2l6YWJsZV0nLFxuICBleHBvcnRBczogJ256UmVzaXphYmxlJyxcbiAgcHJvdmlkZXJzOiBbTnpSZXNpemFibGVTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnotcmVzaXphYmxlLXJlc2l6aW5nXSc6ICdyZXNpemluZycsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZWVudGVyKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZWxlYXZlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMb2NrQXNwZWN0UmF0aW86IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UHJldmlldzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56Qm91bmRzOiAnd2luZG93JyB8ICdwYXJlbnQnIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSAncGFyZW50JztcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4V2lkdGg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWluSGVpZ2h0OiBudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbnpNaW5XaWR0aDogbnVtYmVyID0gNDA7XG4gIEBJbnB1dCgpIG56R3JpZENvbHVtbkNvdW50OiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgbnpNYXhDb2x1bW46IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBuek1pbkNvbHVtbjogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpQcmV2aWV3OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVFdmVudD4oKTtcblxuICByZXNpemluZyA9IGZhbHNlO1xuICBwcml2YXRlIGVsUmVjdCE6IENsaWVudFJlY3QgfCBET01SZWN0O1xuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGdob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBlbCE6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG56UmVzaXphYmxlU2VydmljZTogTnpSZXNpemFibGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbnotcmVzaXphYmxlJyk7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuaGFuZGxlTW91c2VEb3duJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemluZyA9IHRydWU7XG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xuICAgICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50Lm1vdXNlRXZlbnRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZW5kUmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmRvY3VtZW50TW91c2VNb3ZlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbk1vdXNlbGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UubW91c2VFbnRlcmVkJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPT09ICdzdGF0aWMnIHx8ICFwb3NpdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xuICAgIGxldCBuZXdXaWR0aDogbnVtYmVyO1xuICAgIGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcbiAgICBsZXQgbWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgbGV0IGNvbCA9IDA7XG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XG4gICAgbGV0IG1pbldpZHRoID0gdGhpcy5uek1pbldpZHRoO1xuICAgIGxldCBib3VuZFdpZHRoID0gSW5maW5pdHk7XG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgaWYgKHRoaXMubnpCb3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbCk7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgYm91bmRXaWR0aCA9IHBhcmVudFJlY3Qud2lkdGg7XG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGJvdW5kV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgYm91bmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRzUmVjdCA9IHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xuICAgICAgYm91bmRIZWlnaHQgPSBib3VuZHNSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICBtYXhXaWR0aCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhXaWR0aCEsIGJvdW5kV2lkdGgpO1xuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQhLCBib3VuZEhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcbiAgICAgIHNwYW5XaWR0aCA9IG1heFdpZHRoIC8gdGhpcy5uekdyaWRDb2x1bW5Db3VudDtcbiAgICAgIG1pbldpZHRoID0gdGhpcy5uek1pbkNvbHVtbiAhPT0gLTEgPyBzcGFuV2lkdGggKiB0aGlzLm56TWluQ29sdW1uIDogbWluV2lkdGg7XG4gICAgICBtYXhXaWR0aCA9IHRoaXMubnpNYXhDb2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1heENvbHVtbiA6IG1heFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChyYXRpbyAhPT0gLTEpIHtcbiAgICAgIGlmICgvKGxlZnR8cmlnaHQpL2kudGVzdCh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEuZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgICAgIGlmIChuZXdIZWlnaHQgPj0gbWF4SGVpZ2h0IHx8IG5ld0hlaWdodCA8PSB0aGlzLm56TWluSGVpZ2h0KSB7XG4gICAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChuZXdIZWlnaHQgKiByYXRpbywgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgICBpZiAobmV3V2lkdGggPj0gbWF4V2lkdGggfHwgbmV3V2lkdGggPD0gbWluV2lkdGgpIHtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChuZXdXaWR0aCAvIHJhdGlvLCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpHcmlkQ29sdW1uQ291bnQgIT09IC0xKSB7XG4gICAgICBjb2wgPSBNYXRoLnJvdW5kKG5ld1dpZHRoIC8gc3BhbldpZHRoKTtcbiAgICAgIG5ld1dpZHRoID0gY29sICogc3BhbldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb2wsXG4gICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgIH07XG4gIH1cblxuICBzZXRDdXJzb3IoKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ2V3LXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbnMtcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdud3NlLXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgfVxuXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsUmVjdDtcbiAgICBjb25zdCByZXNpemVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcbiAgICBsZXQgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGggKyBoYW5kbGVFdmVudC5jbGllbnRYIC0gcmVzaXplRXZlbnQuY2xpZW50WDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xuICAgIHRoaXMuc2l6ZUNhY2hlID0geyAuLi5zaXplIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5uelByZXZpZXcpIHtcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcbiAgICB9XG4gIH1cblxuICBlbmRSZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIHRoaXMucmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZUNhY2hlXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxSZWN0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNpemVDYWNoZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlR2hvc3RFbGVtZW50KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdob3N0RWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XG4gIH1cblxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIHRoaXMuZ2hvc3RFbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZUdob3N0RWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbCwgdGhpcy5naG9zdEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmdob3N0RWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19