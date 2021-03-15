/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderService } from './slider.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './slider.service';
import * as ɵngcc2 from 'ng-zorro-antd/tooltip';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["handle"];
export class NzSliderHandleComponent {
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.dir = 'ltr';
        this.style = {};
        this.enterHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse, dir } = changes;
        if (offset || reverse || dir) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
        }
    }
    updateStyle() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const offset = this.offset;
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: `translateX(${reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-'}50%)` });
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzSliderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzSliderHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzTooltipDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.handleEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { tooltipVisible: "tooltipVisible", active: "active", dir: "dir", vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter" }, exportAs: ["nzSliderHandle"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0, 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [ɵngcc2.NzTooltipDirective, ɵngcc3.NgStyle], encapsulation: 2, changeDetection: 0 });
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: ChangeDetectorRef }
];
NzSliderHandleComponent.propDecorators = {
    handleEl: [{ type: ViewChild, args: ['handle', { static: false },] }],
    tooltip: [{ type: ViewChild, args: [NzTooltipDirective, { static: false },] }],
    vertical: [{ type: Input }],
    reverse: [{ type: Input }],
    offset: [{ type: Input }],
    value: [{ type: Input }],
    tooltipVisible: [{ type: Input }],
    tooltipPlacement: [{ type: Input }],
    tooltipFormatter: [{ type: Input }],
    active: [{ type: Input }],
    dir: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "active", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderHandleComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [ngStyle]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzSliderService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { tooltipVisible: [{
            type: Input
        }], active: [{
            type: Input
        }], dir: [{
            type: Input
        }], handleEl: [{
            type: ViewChild,
            args: ['handle', { static: false }]
        }], tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], vertical: [{
            type: Input
        }], reverse: [{
            type: Input
        }], offset: [{
            type: Input
        }], value: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipFormatter: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7QUEwQm5ELE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQW1CckMsWUFBb0IsYUFBOEIsRUFBVSxHQUFzQjtBQUFJLFFBQWxFLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtBQUFDLFFBQVMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQVQxRSxtQkFBYyxHQUF3QixTQUFTLENBQUM7QUFDM0QsUUFFMkIsV0FBTSxHQUFHLEtBQUssQ0FBQztBQUMxQyxRQUFXLFFBQUcsR0FBYyxLQUFLLENBQUM7QUFDbEMsUUFFRSxVQUFLLEdBQXFCLEVBQUUsQ0FBQztBQUMvQixRQTRCRSxnQkFBVyxHQUFHLEdBQUcsRUFBRTtBQUNyQixZQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtBQUN4QyxnQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGdCQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ25DLGdCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsYUFBSztBQUNMLFFBQUUsQ0FBQyxDQUFD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WUFBWSxFQUFFO0FBQUU7QUFDTCx1REFEbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUMxQztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTnpTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zbGlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOelNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXNsaWRlci1oYW5kbGUnLFxuICBleHBvcnRBczogJ256U2xpZGVySGFuZGxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI2hhbmRsZVxuICAgICAgY2xhc3M9XCJhbnQtc2xpZGVyLWhhbmRsZVwiXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgbnotdG9vbHRpcFxuICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxuICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRvb2x0aXBGb3JtYXR0ZXIgPT09IG51bGwgfHwgdG9vbHRpcFZpc2libGUgPT09ICduZXZlcicgPyBudWxsIDogdG9vbHRpcFRpdGxlXCJcbiAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm51bGxcIlxuICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICA+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ2VudGVySGFuZGxlKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hY3RpdmU6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdoYW5kbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgaGFuZGxlRWw/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA/OiBOelRvb2x0aXBEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgdmVydGljYWw/OiBib29sZWFuO1xuICBASW5wdXQoKSByZXZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgb2Zmc2V0PzogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZT86IG51bWJlcjtcbiAgQElucHV0KCkgdG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgdG9vbHRpcFRpdGxlPzogc3RyaW5nO1xuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyU2VydmljZTogTnpTbGlkZXJTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgb2Zmc2V0LCB2YWx1ZSwgYWN0aXZlLCB0b29sdGlwVmlzaWJsZSwgcmV2ZXJzZSwgZGlyIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG9mZnNldCB8fCByZXZlcnNlIHx8IGRpcikge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGl0bGUoKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgaWYgKGFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9vbHRpcFZpc2libGU/LmN1cnJlbnRWYWx1ZSA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b2dnbGVUb29sdGlwKHRydWUsIHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBlbnRlckhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfTtcblxuICBsZWF2ZUhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfTtcblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUVsPy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghZm9yY2UgJiYgKHRoaXMudG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnRvb2x0aXA/LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b29sdGlwPy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIgPyB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIodGhpcy52YWx1ZSEpIDogYCR7dGhpcy52YWx1ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvb2x0aXA/LnVwZGF0ZVBvc2l0aW9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3QgdmVydGljYWwgPSB0aGlzLnZlcnRpY2FsO1xuICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLnJldmVyc2U7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBjb25zdCBwb3NpdGlvblN0eWxlID0gdmVydGljYWxcbiAgICAgID8ge1xuICAgICAgICAgIFtyZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJ106IGAke29mZnNldH0lYCxcbiAgICAgICAgICBbcmV2ZXJzZSA/ICdib3R0b20nIDogJ3RvcCddOiAnYXV0bycsXG4gICAgICAgICAgdHJhbnNmb3JtOiByZXZlcnNlID8gbnVsbCA6IGB0cmFuc2xhdGVZKCs1MCUpYFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICAuLi50aGlzLmdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCksXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3JldmVyc2UgPyAodGhpcy5kaXIgPT09ICdydGwnID8gJy0nIDogJysnKSA6IHRoaXMuZGlyID09PSAncnRsJyA/ICcrJyA6ICctJ301MCUpYFxuICAgICAgICB9O1xuXG4gICAgdGhpcy5zdHlsZSA9IHBvc2l0aW9uU3R5bGU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCk6IHsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH0ge1xuICAgIGxldCBsZWZ0ID0gdGhpcy5yZXZlcnNlID8gJ2F1dG8nIDogYCR7dGhpcy5vZmZzZXR9JWA7XG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5yZXZlcnNlID8gYCR7dGhpcy5vZmZzZXR9JWAgOiAnYXV0byc7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgY29uc3QgdG1wID0gbGVmdDtcbiAgICAgIGxlZnQgPSByaWdodDtcbiAgICAgIHJpZ2h0ID0gdG1wO1xuICAgIH1cbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCB9O1xuICB9XG59XG4iXX0=