/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
const NZ_CONFIG_MODULE_NAME = 'form';
export const DefaultTooltipIcon = {
    type: 'question-circle',
    theme: 'outline'
};
export class NzFormDirective {
    constructor(nzConfigService, elementRef, renderer, directionality) {
        var _a;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzLayout = 'horizontal';
        this.nzNoColon = false;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = false;
        this.nzTooltipIcon = DefaultTooltipIcon;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.inputChanges$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    getInputObservable(changeType) {
        return this.inputChanges$.pipe(filter(changes => changeType in changes), map(value => value[changeType]));
    }
    ngOnChanges(changes) {
        this.inputChanges$.next(changes);
    }
    ngOnDestroy() {
        this.inputChanges$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzFormDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzFormDirective, selectors: [["", "nz-form", ""]], hostVars: 8, hostBindings: function NzFormDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
    } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon", nzAutoTips: "nzAutoTips", nzDisableAutoTips: "nzDisableAutoTips", nzTooltipIcon: "nzTooltipIcon" }, exportAs: ["nzForm"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzFormDirective.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: Input }],
    nzNoColon: [{ type: Input }],
    nzAutoTips: [{ type: Input }],
    nzDisableAutoTips: [{ type: Input }],
    nzTooltipIcon: [{ type: Input }]
};
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzFormDirective.prototype, "nzAutoTips", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzFormDirective.prototype, "nzTooltipIcon", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFormDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                host: {
                    '[class.ant-form-horizontal]': `nzLayout === 'horizontal'`,
                    '[class.ant-form-vertical]': `nzLayout === 'vertical'`,
                    '[class.ant-form-inline]': `nzLayout === 'inline'`,
                    '[class.ant-form-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzLayout: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }], nzAutoTips: [{
            type: Input
        }], nzDisableAutoTips: [{
            type: Input
        }], nzTooltipIcon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUF3QixRQUFRLEVBQUUsU0FBUyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUdySSxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhELE1BQU0scUJBQXFCLEdBQWdCLE1BQU0sQ0FBQztBQUlsRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRztBQUNsQyxJQUFFLElBQUksRUFBRSxpQkFBaUI7QUFDekIsSUFBRSxLQUFLLEVBQUUsU0FBUztBQUNsQixDQUFVLENBQUM7QUFZWCxNQUFNLE9BQU8sZUFBZTtBQUFHLElBc0I3QixZQUNTLGVBQWdDLEVBQ3ZDLFVBQXNCLEVBQ2QsUUFBbUIsRUFDUCxjQUE4QjtBQUNuRDtBQUNVLFFBTEYsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFFaEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ1IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQ3RELFFBMUJXLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO0FBQzlELFFBR1csYUFBUSxHQUFxQixZQUFZLENBQUM7QUFDckQsUUFBeUMsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNwRSxRQUF5QixlQUFVLEdBQTJDLEVBQUUsQ0FBQztBQUNqRixRQUEyQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDckQsUUFBeUIsa0JBQWEsR0FBZ0Qsa0JBQWtCLENBQUM7QUFDekcsUUFDRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0FBQ3pCLFFBQUUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDM0IsUUFBVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0FBQ3ZELFFBY0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqRSxRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDekMsUUFBSSxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7QUFDbEcsWUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUMzQixRQUFJLENBQUMsRUFBRTtBQUNQLElBQUUsQ0FBQztBQUNILElBcEJFLGtCQUFrQixDQUF1QixVQUFhO0FBQUksUUFDeEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxFQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQyxDQUFDLENBQzFDLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQWVFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIOzJDQXZEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFdBQVcsa0JBQ3JCLFFBQVEsRUFBRSxRQUFRLGtCQUNsQixJQUFJLEVBQUUsc0JBQ0osNkJBQTZCLEVBQUUsMkJBQTJCLHNCQUMxRCwyQkFBMkI7Q0FBRSx5QkFBeUIsc0JBQ3RELHlCQUF5QixFQUFFLHVCQUF1QixzQkFDbEQsc0JBQXNCLEVBQUUsZUFBZSxrQkFDeEMsY0FDRjs7c09BQ0k7QUFBQztBQUF5QyxZQXpCekIsZUFBZTtBQUFJLFlBSHJCLFVBQVU7QUFBSSxZQUFxQyxTQUFTO0FBQUksWUFEaEUsY0FBYyx1QkF1RDdCLFFBQVE7QUFBTTtBQUFHO0FBQ3BCLHVCQXRCQyxLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFJO0FBSDZCO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUM5QixrREFEd0Q7QUFDM0M7QUFBYSxJQUExQixVQUFVLEVBQUU7QUFBRTtBQUFzQyxtREFBaUI7QUFDdEQ7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNoQiwwREFEeUM7QUFDNUI7QUFBYSxJQUExQixVQUFVLEVBQUU7QUFBRTtBQUFzQyxzREFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ3pHO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5cbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRPYnNlcnZhYmxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZm9ybSc7XG5cbmV4cG9ydCB0eXBlIE56Rm9ybUxheW91dFR5cGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZSc7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0VG9vbHRpcEljb24gPSB7XG4gIHR5cGU6ICdxdWVzdGlvbi1jaXJjbGUnLFxuICB0aGVtZTogJ291dGxpbmUnXG59IGFzIGNvbnN0O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZm9ybV0nLFxuICBleHBvcnRBczogJ256Rm9ybScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWhvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LWZvcm0tdmVydGljYWxdJzogYG56TGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWlubGluZV0nOiBgbnpMYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLmFudC1mb3JtLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXRPYnNlcnZhYmxlIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek5vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZUF1dG9UaXBzOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpMYXlvdXQ6IE56Rm9ybUxheW91dFR5cGUgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIG56Tm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56QXV0b1RpcHM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVBdXRvVGlwcyA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56VG9vbHRpcEljb246IHN0cmluZyB8IHsgdHlwZTogc3RyaW5nOyB0aGVtZTogVGhlbWVUeXBlIH0gPSBEZWZhdWx0VG9vbHRpcEljb247XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlucHV0Q2hhbmdlcyQgPSBuZXcgU3ViamVjdDxTaW1wbGVDaGFuZ2VzPigpO1xuXG4gIGdldElucHV0T2JzZXJ2YWJsZTxLIGV4dGVuZHMga2V5b2YgdGhpcz4oY2hhbmdlVHlwZTogSyk6IE9ic2VydmFibGU8U2ltcGxlQ2hhbmdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRDaGFuZ2VzJC5waXBlKFxuICAgICAgZmlsdGVyKGNoYW5nZXMgPT4gY2hhbmdlVHlwZSBpbiBjaGFuZ2VzKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVtjaGFuZ2VUeXBlIGFzIHN0cmluZ10pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtJyk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Q2hhbmdlcyQubmV4dChjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VzJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19