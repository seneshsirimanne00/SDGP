/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { getStyleAsText, InputNumber, shallowEqual } from 'ng-zorro-antd/core/util';
import { fromEvent, merge, ReplaySubject, Subject, Subscription } from 'rxjs';
import { auditTime, map, takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { AffixRespondEvents } from './respond-events';
import { getTargetRect } from './utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';

const _c0 = ["fixedEl"];
const _c1 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'affix';
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
export class NzAffixComponent {
    constructor(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer, cdr, directionality) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzChange = new EventEmitter();
        this.dir = 'ltr';
        this.positionChangeSubscription = Subscription.EMPTY;
        this.offsetChanged$ = new ReplaySubject(1);
        this.destroy$ = new Subject();
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    get target() {
        const el = this.nzTarget;
        return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.registerListeners();
            this.updatePosition({});
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzOffsetBottom, nzOffsetTop, nzTarget } = changes;
        if (nzOffsetBottom || nzOffsetTop) {
            this.offsetChanged$.next();
        }
        if (nzTarget) {
            this.registerListeners();
        }
    }
    ngAfterViewInit() {
        this.registerListeners();
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    registerListeners() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListeners();
        this.positionChangeSubscription = this.ngZone.runOutsideAngular(() => {
            return merge(...Object.keys(AffixRespondEvents).map(evName => fromEvent(this.target, evName)), this.offsetChanged$.pipe(takeUntil(this.destroy$), map(() => ({}))))
                .pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe(e => this.updatePosition(e));
        });
        this.timeout = setTimeout(() => this.updatePosition({}));
    }
    removeListeners() {
        clearTimeout(this.timeout);
        this.positionChangeSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    getOffset(element, target) {
        const elemRect = element.getBoundingClientRect();
        const targetRect = getTargetRect(target);
        const scrollTop = this.scrollSrv.getScroll(target, true);
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        const docElem = this.document.body;
        const clientTop = docElem.clientTop || 0;
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    setAffixStyle(e, affixStyle) {
        const originalAffixStyle = this.affixStyle;
        const isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        const fixed = !!affixStyle;
        const wrapEl = this.fixedEl.nativeElement;
        this.renderer.setStyle(wrapEl, 'cssText', getStyleAsText(affixStyle));
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        this.updateRtlClass();
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    setPlaceholderStyle(placeholderStyle) {
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.renderer.setStyle(this.placeholderNode, 'cssText', getStyleAsText(placeholderStyle));
        this.placeholderStyle = placeholderStyle;
    }
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.renderer.setStyle(this.placeholderNode, 'cssText', '');
        this.placeholderStyle = undefined;
        const styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, Object.assign(Object.assign({}, this.affixStyle), styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        const targetNode = this.target;
        let offsetTop = this.nzOffsetTop;
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        const elemOffset = this.getOffset(this.placeholderNode, targetNode);
        const fixedNode = this.fixedEl.nativeElement;
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        const targetRect = getTargetRect(targetNode);
        const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
        if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
            const width = elemOffset.width;
            const top = targetRect.top + offsetTop;
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
            const targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffset + this.nzOffsetBottom,
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === AffixRespondEvents.resize &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign(Object.assign({}, this.affixStyle), { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
    updateRtlClass() {
        const wrapEl = this.fixedEl.nativeElement;
        if (this.dir === 'rtl') {
            if (wrapEl.classList.contains(NZ_AFFIX_CLS_PREFIX)) {
                wrapEl.classList.add(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
            }
            else {
                wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
            }
        }
        else {
            wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
        }
    }
}
NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) { return new (t || NzAffixComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzScrollService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzAffixComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAffixComponent, selectors: [["nz-affix"]], viewQuery: function NzAffixComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    } }, inputs: { nzTarget: "nzTarget", nzOffsetTop: "nzOffsetTop", nzOffsetBottom: "nzOffsetBottom" }, outputs: { nzChange: "nzChange" }, exportAs: ["nzAffix"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["fixedEl", ""]], template: function NzAffixComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", null, 0);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
NzAffixComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: NgZone },
    { type: Platform },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzAffixComponent.propDecorators = {
    fixedEl: [{ type: ViewChild, args: ['fixedEl', { static: true },] }],
    nzTarget: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzOffsetBottom: [{ type: Input }],
    nzChange: [{ type: Output }]
};
__decorate([
    WithConfig(),
    InputNumber(undefined),
    __metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([
    WithConfig(),
    InputNumber(undefined),
    __metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAffixComponent, [{
        type: Component,
        args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: `
    <div #fixedEl>
      <ng-content></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.NzScrollService }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.Platform }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzChange: [{
            type: Output
        }], fixedEl: [{
            type: ViewChild,
            args: ['fixedEl', { static: true }]
        }], nzTarget: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzOffsetBottom: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2FmZml4L2FmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7OztBQUVwRCxNQUFNLHFCQUFxQixHQUFnQixPQUFPLENBQUM7QUFDbkQsTUFBTSxtQkFBbUIs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WixVQUFVLEVBQWlCO0FBQzdCLElBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQztBQUN4QjtBQUVHLHdEQUY2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNqQztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOelNjcm9sbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnVtYmVySW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZUFzVGV4dCwgSW5wdXROdW1iZXIsIHNoYWxsb3dFcXVhbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQWZmaXhSZXNwb25kRXZlbnRzIH0gZnJvbSAnLi9yZXNwb25kLWV2ZW50cyc7XG5pbXBvcnQgeyBnZXRUYXJnZXRSZWN0LCBTaW1wbGVSZWN0IH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfQ0xTX1BSRUZJWCA9ICdhbnQtYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjZml4ZWRFbD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpBZmZpeENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256T2Zmc2V0VG9wOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256T2Zmc2V0Qm90dG9tOiBOdW1iZXJJbnB1dDtcblxuICBAVmlld0NoaWxkKCdmaXhlZEVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBmaXhlZEVsITogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgbnpUYXJnZXQ/OiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93O1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KClcbiAgQElucHV0TnVtYmVyKHVuZGVmaW5lZClcbiAgbnpPZmZzZXRUb3A/OiBudWxsIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KClcbiAgQElucHV0TnVtYmVyKHVuZGVmaW5lZClcbiAgbnpPZmZzZXRCb3R0b20/OiBudWxsIHwgbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgb2Zmc2V0Q2hhbmdlZCQgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgdGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgcHJpdmF0ZSBnZXQgdGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIGNvbnN0IGVsID0gdGhpcy5uelRhcmdldDtcbiAgICByZXR1cm4gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWwpIHx8IHdpbmRvdztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55LFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICAvLyBUaGUgd3JhcHBlciB3b3VsZCBzdGF5IGF0IHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBhcyBhIHBsYWNlaG9sZGVyLlxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPZmZzZXRCb3R0b20sIG56T2Zmc2V0VG9wLCBuelRhcmdldCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuek9mZnNldEJvdHRvbSB8fCBuek9mZnNldFRvcCkge1xuICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkJC5uZXh0KCk7XG4gICAgfVxuICAgIGlmIChuelRhcmdldCkge1xuICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhBZmZpeFJlc3BvbmRFdmVudHMpLm1hcChldk5hbWUgPT4gZnJvbUV2ZW50KHRoaXMudGFyZ2V0LCBldk5hbWUpKSxcbiAgICAgICAgdGhpcy5vZmZzZXRDaGFuZ2VkJC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBtYXAoKCkgPT4gKHt9KSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICAucGlwZShhdWRpdFRpbWUoTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSkpXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKGUgYXMgRXZlbnQpKTtcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMucG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogU2ltcGxlUmVjdCB7XG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRUYXJnZXRSZWN0KHRhcmdldCEpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgdHJ1ZSk7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcblxuICAgIGNvbnN0IGRvY0VsZW0gPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWxlbS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGVsZW1SZWN0LmxlZnQgLSB0YXJnZXRSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICAgIHdpZHRoOiBlbGVtUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWZmaXhTdHlsZShlOiBFdmVudCwgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLnRhcmdldCA9PT0gd2luZG93O1xuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkID0gISFhZmZpeFN0eWxlO1xuICAgIGNvbnN0IHdyYXBFbCA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUod3JhcEVsLCAnY3NzVGV4dCcsIGdldFN0eWxlQXNUZXh0KGFmZml4U3R5bGUpKTtcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKE5aX0FGRklYX0NMU19QUkVGSVgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVJ0bENsYXNzKCk7XG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBsYWNlaG9sZGVyTm9kZSwgJ2Nzc1RleHQnLCBnZXRTdHlsZUFzVGV4dChwbGFjZWhvbGRlclN0eWxlKSk7XG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gcGxhY2Vob2xkZXJTdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1BsYWNlaG9sZGVyU3R5bGUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWZmaXhTdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucGxhY2Vob2xkZXJOb2RlLCAnY3NzVGV4dCcsICcnKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3R5bGVPYmogPSB7XG4gICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcbiAgICAgIC4uLnN0eWxlT2JqXG4gICAgfSk7XG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHN0eWxlT2JqKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldDtcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5uek9mZnNldFRvcDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XG4gICAgY29uc3QgZml4ZWROb2RlID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgZWxlbVNpemUgPSB7XG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBmaXhlZE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2VcbiAgICB9O1xuICAgIC8vIERlZmF1bHQgdG8gYG9mZnNldFRvcD0wYC5cbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUgYXMgV2luZG93KTtcbiAgICBjb25zdCB0YXJnZXRJbm5lckhlaWdodCA9ICh0YXJnZXROb2RlIGFzIFdpbmRvdykuaW5uZXJIZWlnaHQgfHwgKHRhcmdldE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcbiAgICBpZiAoc2Nyb2xsVG9wID49IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3AsXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbFRvcCA8PSBlbGVtT2Zmc2V0LnRvcCArIGVsZW1TaXplLmhlaWdodCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJiBvZmZzZXRNb2RlLmJvdHRvbSkge1xuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2Zmc2V0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6IHdpbmRvdy5pbm5lckhlaWdodCAtIHRhcmdldFJlY3QuYm90dG9tITtcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICBib3R0b206IHRhcmdldEJvdHRvbU9mZnNldCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudHlwZSA9PT0gQWZmaXhSZXNwb25kRXZlbnRzLnJlc2l6ZSAmJlxuICAgICAgICB0aGlzLmFmZml4U3R5bGUgJiZcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgICAuLi50aGlzLmFmZml4U3R5bGUsXG4gICAgICAgICAgd2lkdGg6IHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKCk7XG4gICAgfVxuXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgIHRoaXMuc3luY1BsYWNlaG9sZGVyU3R5bGUoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdGxDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICBpZiAod3JhcEVsLmNsYXNzTGlzdC5jb250YWlucyhOWl9BRkZJWF9DTFNfUFJFRklYKSkge1xuICAgICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChgJHtOWl9BRkZJWF9DTFNfUFJFRklYfS1ydGxgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKGAke05aX0FGRklYX0NMU19QUkVGSVh9LXJ0bGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LnJlbW92ZShgJHtOWl9BRkZJWF9DTFNfUFJFRklYfS1ydGxgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==