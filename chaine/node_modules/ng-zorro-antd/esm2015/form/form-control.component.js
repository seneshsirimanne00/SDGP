/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject, Subscription } from 'rxjs';
import { filter, startWith, takeUntil, tap } from 'rxjs/operators';
import { NzFormDirective } from './form.directive';
import { NzFormItemComponent } from './form-item.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './form-item.component';
import * as ɵngcc2 from 'ng-zorro-antd/i18n';
import * as ɵngcc3 from './form.directive';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/icon';
import * as ɵngcc6 from 'ng-zorro-antd/core/outlet';

function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.innerTip);
} }
const _c0 = function (a1) { return ["ant-form-item-explain", a1]; };
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c0, "ant-form-item-explain-" + ctx_r1.status));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@helpMotion", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.innerTip)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx_r1.validateControl));
} }
function NzFormControlComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzExtra);
} }
function NzFormControlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzFormControlComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
const _c2 = ["*"];
const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
export class NzFormControlComponent {
    constructor(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
        var _a, _b;
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.validateString = null;
        this.destroyed$ = new Subject();
        this.status = null;
        this.validateControl = null;
        this.iconType = null;
        this.innerTip = null;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
        this.subscribeAutoTips(i18n.localeChange.pipe(tap(locale => (this.localeId = locale.locale))));
        this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
        this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe(filter(() => this.nzDisableAutoTips === 'default')));
    }
    get disableAutoTips() {
        var _a;
        return this.nzDisableAutoTips !== 'default' ? toBoolean(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
    }
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
        }
    }
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    set nzValidateStatus(value) {
        if (value instanceof AbstractControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setStatus();
        }
    }
    watchControl() {
        this.validateChanges.unsubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe(_ => {
                if (!this.disableAutoTips) {
                    this.updateAutoErrorTip();
                }
                this.setStatus();
                this.cdr.markForCheck();
            });
        }
    }
    setStatus() {
        this.status = this.getControlStatus(this.validateString);
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.innerTip = this.getInnerTip(this.status);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
            this.nzFormItemComponent.setStatus(this.status);
        }
    }
    getControlStatus(validateString) {
        let status;
        if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
            status = 'warning';
        }
        else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
            status = 'error';
        }
        else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
            status = 'validating';
        }
        else if (validateString === 'success' || this.validateControlStatus('VALID')) {
            status = 'success';
        }
        else {
            status = null;
        }
        return status;
    }
    validateControlStatus(validStatus, statusType) {
        if (!this.validateControl) {
            return false;
        }
        else {
            const { dirty, touched, status } = this.validateControl;
            return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
        }
    }
    getInnerTip(status) {
        switch (status) {
            case 'error':
                return (!this.disableAutoTips && this.autoErrorTip) || this.nzErrorTip || null;
            case 'validating':
                return this.nzValidatingTip || null;
            case 'success':
                return this.nzSuccessTip || null;
            case 'warning':
                return this.nzWarningTip || null;
            default:
                return null;
        }
    }
    updateAutoErrorTip() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.validateControl) {
            const errors = this.validateControl.errors || {};
            let autoErrorTip = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.nzAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.nzAutoTips.default) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.nzFormDirective) === null || _h === void 0 ? void 0 : _h.nzAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.nzFormDirective) === null || _m === void 0 ? void 0 : _m.nzAutoTips.default) === null || _o === void 0 ? void 0 : _o[key];
                }
                if (!!autoErrorTip) {
                    break;
                }
            }
            this.autoErrorTip = autoErrorTip;
        }
    }
    subscribeAutoTips(observable) {
        observable === null || observable === void 0 ? void 0 : observable.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            if (!this.disableAutoTips) {
                this.updateAutoErrorTip();
                this.setStatus();
                this.cdr.markForCheck();
            }
        });
    }
    ngOnChanges(changes) {
        const { nzDisableAutoTips, nzAutoTips, nzSuccessTip, nzWarningTip, nzErrorTip, nzValidatingTip } = changes;
        if (nzDisableAutoTips || nzAutoTips) {
            this.updateAutoErrorTip();
            this.setStatus();
        }
        else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
            this.setStatus();
        }
    }
    ngOnInit() {
        this.setStatus();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    }
}
NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzFormItemComponent, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzFormDirective, 8)); };
NzFormControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgControl, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
    } }, inputs: { nzAutoTips: "nzAutoTips", nzDisableAutoTips: "nzDisableAutoTips", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus", nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra" }, exportAs: ["nzFormControl"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 7, vars: 3, consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 3, 8, "div", 4);
        ɵngcc0.ɵɵtemplate(6, NzFormControlComponent_div_6_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.innerTip);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
    } }, directives: [ɵngcc4.NgIf, ɵngcc5.NzIconDirective, ɵngcc4.NgClass, ɵngcc6.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
NzFormControlComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NzI18nService },
    { type: NzFormDirective, decorators: [{ type: Optional }] }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl, { static: false },] }],
    nzSuccessTip: [{ type: Input }],
    nzWarningTip: [{ type: Input }],
    nzErrorTip: [{ type: Input }],
    nzValidatingTip: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzAutoTips: [{ type: Input }],
    nzDisableAutoTips: [{ type: Input }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
      <span class="ant-form-item-children-icon">
        <i *ngIf="nzHasFeedback && iconType" nz-icon [nzType]="iconType"></i>
      </span>
    </div>
    <div [ngClass]="['ant-form-item-explain', 'ant-form-item-explain-' + status]" *ngIf="innerTip">
      <div @helpMotion>
        <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{ innerTip }}</ng-container>
      </div>
    </div>
    <div class="ant-form-item-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.NzI18nService }, { type: ɵngcc3.NzFormDirective, decorators: [{
                type: Optional
            }] }]; }, { nzAutoTips: [{
            type: Input
        }], nzDisableAutoTips: [{
            type: Input
        }], nzHasFeedback: [{
            type: Input
        }], nzValidateStatus: [{
            type: Input
        }], defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], nzSuccessTip: [{
            type: Input
        }], nzWarningTip: [{
            type: Input
        }], nzErrorTip: [{
            type: Input
        }], nzValidatingTip: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9mb3JtL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFHVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbkQsT0FBTyxFQUEyQixtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRixNQUFNLFdBQVcsR0FBRztBQUNwQixJQUFFLEtBQUssRUFBRSxtQkFBbUI7QUFDNUIsSUFBRSxVQUFVLEVBQUUsU0FBUztBQUN2QixJQUFFLE9BQU8sRUFBRSxtQkFBbUI7QUFDOUIsSUFBRSxP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c2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlLCBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWl0ZW0uY29tcG9uZW50JztcblxuY29uc3QgaWNvblR5cGVNYXAgPSB7XG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlLWZpbGwnLFxuICB2YWxpZGF0aW5nOiAnbG9hZGluZycsXG4gIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUtZmlsbCcsXG4gIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCdcbn0gYXMgY29uc3Q7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWZvcm0tY29udHJvbCcsXG4gIGV4cG9ydEFzOiAnbnpGb3JtQ29udHJvbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jaGlsZHJlbi1pY29uXCI+XG4gICAgICAgIDxpICpuZ0lmPVwibnpIYXNGZWVkYmFjayAmJiBpY29uVHlwZVwiIG56LWljb24gW256VHlwZV09XCJpY29uVHlwZVwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYW50LWZvcm0taXRlbS1leHBsYWluJywgJ2FudC1mb3JtLWl0ZW0tZXhwbGFpbi0nICsgc3RhdHVzXVwiICpuZ0lmPVwiaW5uZXJUaXBcIj5cbiAgICAgIDxkaXYgQGhlbHBNb3Rpb24+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpbm5lclRpcDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZhbGlkYXRlQ29udHJvbCB9XCI+e3sgaW5uZXJUaXAgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4dHJhXCIgKm5nSWY9XCJuekV4dHJhXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHRyYVwiPnt7IG56RXh0cmEgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1Db250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGFzRmVlZGJhY2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlQXV0b1RpcHM6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xuICBwcml2YXRlIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsb2NhbGVJZCE6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRvRXJyb3JUaXA/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgZGlzYWJsZUF1dG9UaXBzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56RGlzYWJsZUF1dG9UaXBzICE9PSAnZGVmYXVsdCcgPyB0b0Jvb2xlYW4odGhpcy5uekRpc2FibGVBdXRvVGlwcykgOiB0aGlzLm56Rm9ybURpcmVjdGl2ZT8ubnpEaXNhYmxlQXV0b1RpcHM7XG4gIH1cblxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcbiAgdmFsaWRhdGVDb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbCA9IG51bGw7XG4gIGljb25UeXBlOiB0eXBlb2YgaWNvblR5cGVNYXBba2V5b2YgdHlwZW9mIGljb25UeXBlTWFwXSB8IG51bGwgPSBudWxsO1xuICBpbm5lclRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsID0gbnVsbDtcblxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w/OiBGb3JtQ29udHJvbE5hbWUgfCBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgbnpTdWNjZXNzVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56V2FybmluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBuekVycm9yVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56VmFsaWRhdGluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QXV0b1RpcHM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG4gIEBJbnB1dCgpIG56RGlzYWJsZUF1dG9UaXBzOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRmVlZGJhY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRIYXNGZWVkYmFjayh0aGlzLl9oYXNGZWVkYmFjayk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wgfHwgdmFsdWUgaW5zdGFuY2VvZiBOZ01vZGVsKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBdXRvRXJyb3JUaXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdHVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5nZXRDb250cm9sU3RhdHVzKHRoaXMudmFsaWRhdGVTdHJpbmcpO1xuICAgIHRoaXMuaWNvblR5cGUgPSB0aGlzLnN0YXR1cyA/IGljb25UeXBlTWFwW3RoaXMuc3RhdHVzXSA6IG51bGw7XG4gICAgdGhpcy5pbm5lclRpcCA9IHRoaXMuZ2V0SW5uZXJUaXAodGhpcy5zdGF0dXMpO1xuICAgIGlmICh0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHMoISF0aGlzLmlubmVyVGlwKTtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRTdGF0dXModGhpcy5zdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udHJvbFN0YXR1cyh2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCk6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlIHtcbiAgICBsZXQgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZTtcblxuICAgIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJywgJ3dhcm5pbmcnKSkge1xuICAgICAgc3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICdlcnJvcicgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ0lOVkFMSUQnKSkge1xuICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpKSB7XG4gICAgICBzdGF0dXMgPSAndmFsaWRhdGluZyc7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVDb250cm9sU3RhdHVzKHZhbGlkU3RhdHVzOiBzdHJpbmcsIHN0YXR1c1R5cGU/OiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBkaXJ0eSwgdG91Y2hlZCwgc3RhdHVzIH0gPSB0aGlzLnZhbGlkYXRlQ29udHJvbDtcbiAgICAgIHJldHVybiAoISFkaXJ0eSB8fCAhIXRvdWNoZWQpICYmIChzdGF0dXNUeXBlID8gdGhpcy52YWxpZGF0ZUNvbnRyb2wuaGFzRXJyb3Ioc3RhdHVzVHlwZSkgOiBzdGF0dXMgPT09IHZhbGlkU3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldElubmVyVGlwKHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PiB8IG51bGwge1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzICYmIHRoaXMuYXV0b0Vycm9yVGlwKSB8fCB0aGlzLm56RXJyb3JUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3ZhbGlkYXRpbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy5uelZhbGlkYXRpbmdUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5uelN1Y2Nlc3NUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy5ueldhcm5pbmdUaXAgfHwgbnVsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXV0b0Vycm9yVGlwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuZXJyb3JzIHx8IHt9O1xuICAgICAgbGV0IGF1dG9FcnJvclRpcCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXJyb3JzKSB7XG4gICAgICAgIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGF1dG9FcnJvclRpcCA9XG4gICAgICAgICAgICBlcnJvcnNba2V5XT8uW3RoaXMubG9jYWxlSWRdID8/XG4gICAgICAgICAgICB0aGlzLm56QXV0b1RpcHM/Llt0aGlzLmxvY2FsZUlkXT8uW2tleV0gPz9cbiAgICAgICAgICAgIHRoaXMubnpBdXRvVGlwcy5kZWZhdWx0Py5ba2V5XSA/P1xuICAgICAgICAgICAgdGhpcy5uekZvcm1EaXJlY3RpdmU/Lm56QXV0b1RpcHM/Llt0aGlzLmxvY2FsZUlkXT8uW2tleV0gPz9cbiAgICAgICAgICAgIHRoaXMubnpGb3JtRGlyZWN0aXZlPy5uekF1dG9UaXBzLmRlZmF1bHQ/LltrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIWF1dG9FcnJvclRpcCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmF1dG9FcnJvclRpcCA9IGF1dG9FcnJvclRpcDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUF1dG9UaXBzKG9ic2VydmFibGU6IE9ic2VydmFibGU8TnpTYWZlQW55Pik6IHZvaWQge1xuICAgIG9ic2VydmFibGU/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQXV0b0Vycm9yVGlwKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpGb3JtRGlyZWN0aXZlOiBOekZvcm1EaXJlY3RpdmVcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1jb250cm9sJyk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKGkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFwKGxvY2FsZSA9PiAodGhpcy5sb2NhbGVJZCA9IGxvY2FsZS5sb2NhbGUpKSkpO1xuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHModGhpcy5uekZvcm1EaXJlY3RpdmU/LmdldElucHV0T2JzZXJ2YWJsZSgnbnpBdXRvVGlwcycpKTtcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKFxuICAgICAgdGhpcy5uekZvcm1EaXJlY3RpdmU/LmdldElucHV0T2JzZXJ2YWJsZSgnbnpEaXNhYmxlQXV0b1RpcHMnKS5waXBlKGZpbHRlcigoKSA9PiB0aGlzLm56RGlzYWJsZUF1dG9UaXBzID09PSAnZGVmYXVsdCcpKVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVBdXRvVGlwcywgbnpBdXRvVGlwcywgbnpTdWNjZXNzVGlwLCBueldhcm5pbmdUaXAsIG56RXJyb3JUaXAsIG56VmFsaWRhdGluZ1RpcCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuekRpc2FibGVBdXRvVGlwcyB8fCBuekF1dG9UaXBzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9IGVsc2UgaWYgKG56U3VjY2Vzc1RpcCB8fCBueldhcm5pbmdUaXAgfHwgbnpFcnJvclRpcCB8fCBuelZhbGlkYXRpbmdUaXApIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMubnpWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbC5jb250cm9sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sITtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==