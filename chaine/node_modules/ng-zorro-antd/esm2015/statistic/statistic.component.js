/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './statistic-number.component';

function NzStatisticComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzTitle);
} }
function NzStatisticComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzPrefix);
} }
function NzStatisticComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtemplate(1, NzStatisticComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzPrefix);
} }
function NzStatisticComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzSuffix);
} }
function NzStatisticComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtemplate(1, NzStatisticComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzSuffix);
} }
export class NzStatisticComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzValueStyle = {};
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzStatisticComponent.ɵfac = function NzStatisticComponent_Factory(t) { return new (t || NzStatisticComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzStatisticComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStatisticComponent, selectors: [["nz-statistic"]], inputs: { nzValueStyle: "nzValueStyle", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzTitle: "nzTitle", nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatistic"], decls: 7, vars: 8, consts: [[1, "ant-statistic"], [1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]], template: function NzStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzStatisticComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NzStatisticComponent_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelement(5, "nz-statistic-number", 5);
        ɵngcc0.ɵɵtemplate(6, NzStatisticComponent_span_6_Template, 2, 1, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-statistic-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzValueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPrefix);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSuffix);
    } }, directives: [ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NgStyle, ɵngcc3.NgIf, ɵngcc4.NzStatisticNumberComponent], encapsulation: 2, changeDetection: 0 });
NzStatisticComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzStatisticComponent.propDecorators = {
    nzPrefix: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzValueStyle: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                template: `
    <div class="ant-statistic" [class.ant-statistic-rtl]="dir === 'rtl'">
      <div class="ant-statistic-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div class="ant-statistic-content" [ngStyle]="nzValueStyle">
        <span *ngIf="nzPrefix" class="ant-statistic-content-prefix">
          <ng-container *nzStringTemplateOutlet="nzPrefix">{{ nzPrefix }}</ng-container>
        </span>
        <nz-statistic-number [nzValue]="nzValue" [nzValueTemplate]="nzValueTemplate"></nz-statistic-number>
        <span *ngIf="nzSuffix" class="ant-statistic-content-suffix">
          <ng-container *nzStringTemplateOutlet="nzSuffix">{{ nzSuffix }}</ng-container>
        </span>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzValueStyle: [{
            type: Input
        }], nzPrefix: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWMvc3RhdGlzdGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QjNDLE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQVdsQyxZQUFzQixHQUFzQixFQUFzQixjQUE4QjtBQUFJLFFBQTlFLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBcUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQUMsUUFOeEYsaUJBQVksR0FBcUIsRUFBRSxDQUFDO0FBQy9DLFFBQ0UsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUNVLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3pDLElBQ3FHLENBQUM7QUFDdEcsSUFDRSxRQUFRO0FBQUs7QUFDTCxRQUFOLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtBQUNsRyxZQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsRUFBRTtBQUNQLFFBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO2dEQWhEQyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7VUFBYyxrQkFDeEIsUUFBUSxFQUFFLGFBQWEsa0JBQ3ZCLFFBQVEsRUFBRTs7O09BZVQsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUtBQ0k7QUFBQztBQUE4QyxZQXBDbEQsaUJBQWlCO0FBQ2pCLFlBSmtCLGNBQWMsdUJBa0RlLFFBQVE7QUFBTTtBQUFHO0FBRWhFLHVCQVpDLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1zdGF0aXN0aWMnLFxuICBleHBvcnRBczogJ256U3RhdGlzdGljJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXN0YXRpc3RpY1wiIFtjbGFzcy5hbnQtc3RhdGlzdGljLXJ0bF09XCJkaXIgPT09ICdydGwnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0YXRpc3RpYy10aXRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudFwiIFtuZ1N0eWxlXT1cIm56VmFsdWVTdHlsZVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIm56UHJlZml4XCIgY2xhc3M9XCJhbnQtc3RhdGlzdGljLWNvbnRlbnQtcHJlZml4XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UHJlZml4XCI+e3sgbnpQcmVmaXggfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bnotc3RhdGlzdGljLW51bWJlciBbbnpWYWx1ZV09XCJuelZhbHVlXCIgW256VmFsdWVUZW1wbGF0ZV09XCJuelZhbHVlVGVtcGxhdGVcIj48L256LXN0YXRpc3RpYy1udW1iZXI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibnpTdWZmaXhcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC1zdWZmaXhcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWZmaXhcIj57eyBuelN1ZmZpeCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgbnpQcmVmaXg/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWZmaXg/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelZhbHVlPzogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XG4gIEBJbnB1dCgpIG56VmFsdWVTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfT47XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==