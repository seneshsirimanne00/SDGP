/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

const _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 9);
} }
function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵelement(1, "i", 12);
    ɵngcc0.ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵelement(1, "i", 13);
    ɵngcc0.ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", !ctx_r10.oldAPIIcon && icon_r11)("ngClass", ctx_r10.oldAPIIcon && icon_r11);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.nzIcon);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    ɵngcc0.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    ɵngcc0.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(3, NzStepComponent_ng_template_3_span_3_Template, 2, 1, "span", 10);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzStatus === "finish" && !ctx_r1.nzIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzStatus === "error");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r1.nzStatus === "process" || ctx_r1.nzStatus === "wait") && !ctx_r1.nzIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 15, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r12 = ɵngcc0.ɵɵreference(2);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customProcessTemplate || _r12)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c1, _r12, ctx_r2.nzStatus, ctx_r2.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzDescription);
} }
export class NzStepComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
    }
    get nzStatus() {
        return this._status;
    }
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get nzIcon() {
        return this._icon;
    }
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
        }
        this._icon = value;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    enable() {
        this.nzDisabled = false;
        this.cdr.markForCheck();
    }
    disable() {
        this.nzDisabled = true;
        this.cdr.markForCheck();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzStepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
    } }, hostAttrs: [1, "ant-steps-item"], hostVars: 16, hostBindings: function NzStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function NzStepComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵtemplate(1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        ɵngcc0.ɵɵtemplate(4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtemplate(7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵtemplate(10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
        ɵngcc0.ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.last !== true);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.showProcessDot);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showProcessDot);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSubtitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzStepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate', { static: false },] }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzIcon: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzStepComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
      (click)="onClick()"
    >
      <div class="ant-steps-item-tail" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon">
        <ng-template [ngIf]="!showProcessDot">
          <span class="ant-steps-icon" *ngIf="nzStatus === 'finish' && !nzIcon"><i nz-icon nzType="check"></i></span>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'error'"><i nz-icon nzType="close"></i></span>
          <span class="ant-steps-icon" *ngIf="(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon">{{ index + 1 }}</span>
          <span class="ant-steps-icon" *ngIf="nzIcon">
            <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
              <i nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></i>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            ></ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          <div *ngIf="nzSubtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-steps-item',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { nzDisabled: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], processDotTemplate: [{
            type: ViewChild,
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc3RlcHMvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FL0IsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQTZEN0IsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBckRsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBV0UsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBVSxZQUFPLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBY0UsZUFBVSxHQUFHLElBQUksQ0FBQztBQUNwQixRQUdFLGNBQVMsR0FBRyxZQUFZLENBQUM7QUFDM0IsUUFBRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1osUUFBRSxTQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2YsUUFBRSxjQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLFFBQUUsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFFBQUUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7QUFDakMsUUFZVSxr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Q3ZCLDZCQUE2QixFQUFFO1dBQXFCLHNCQUNwRDtxQkFBZ0MsRUFBRSx3QkFBd0Isc0JBQzFEO0lBQStCLEVBQUUsdUJBQXVCLHNCQUN4RDtHQUE4QixFQUFFLHNCQUFzQjtrQkFDdEQ7S0FBK0IsRUFBRSx3QkFBd0Isc0JBQ3pELGlDQUFpQyxFQUFFO0VBQVksc0JBQy9DO3dCQUErQixFQUFFO0tBQVUsc0JBQzNDOztNQUE4QixFQUFFLHlEQUF5RCxrQkFDMUY7YUFDRjs7Ozs7Ozs7Ozs7OztxTEFDSTtBQUFDO0FBQXlDLFlBL0U3QyxpQkFBaUI7QUFDbEI7QUFBRztBQUdBLGlDQThFRCxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sc0JBRXhELEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQ04scUJBWUMsS0FBSztBQUNQO0FBaEIwQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBR3JCLG1EQUh1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM5QztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXN0ZXAnLFxuICBleHBvcnRBczogJ256U3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tY29udGFpbmVyXCJcbiAgICAgIFthdHRyLnJvbGVdPVwiY2xpY2thYmxlICYmICFuekRpc2FibGVkID8gJ2J1dHRvbicgOiBudWxsXCJcbiAgICAgIFt0YWJpbmRleF09XCJjbGlja2FibGUgJiYgIW56RGlzYWJsZWQgPyAwIDogbnVsbFwiXG4gICAgICAoY2xpY2spPVwib25DbGljaygpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tdGFpbFwiICpuZ0lmPVwibGFzdCAhPT0gdHJ1ZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWljb25cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFzaG93UHJvY2Vzc0RvdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cIm56U3RhdHVzID09PSAnZmluaXNoJyAmJiAhbnpJY29uXCI+PGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiICpuZ0lmPVwibnpTdGF0dXMgPT09ICdlcnJvcidcIj48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCIobnpTdGF0dXMgPT09ICdwcm9jZXNzJyB8fCBuelN0YXR1cyA9PT0gJ3dhaXQnKSAmJiAhbnpJY29uXCI+e3sgaW5kZXggKyAxIH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cIm56SWNvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56SWNvbjsgbGV0IGljb25cIj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiFvbGRBUElJY29uICYmIGljb25cIiBbbmdDbGFzc109XCJvbGRBUElJY29uICYmIGljb25cIj48L2k+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaG93UHJvY2Vzc0RvdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcHJvY2Vzc0RvdFRlbXBsYXRlPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uLWRvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tUHJvY2Vzc1RlbXBsYXRlIHx8IHByb2Nlc3NEb3RUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiBwcm9jZXNzRG90VGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBuelN0YXR1cyxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS10aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJuelN1YnRpdGxlXCIgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56U3VidGl0bGVcIj57eyBuelN1YnRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXN0ZXBzLWl0ZW0nLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0td2FpdF0nOiAnbnpTdGF0dXMgPT09IFwid2FpdFwiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXByb2Nlc3NdJzogJ256U3RhdHVzID09PSBcInByb2Nlc3NcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1maW5pc2hdJzogJ256U3RhdHVzID09PSBcImZpbmlzaFwiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWVycm9yXSc6ICduelN0YXR1cyA9PT0gXCJlcnJvclwiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWFjdGl2ZV0nOiAnY3VycmVudEluZGV4ID09PSBpbmRleCcsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1jdXN0b21dJzogJyEhbnpJY29uJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1uZXh0LWVycm9yXSc6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJvY2Vzc0RvdFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1YnRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgc2V0IG56U3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xuICB9XG5cbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhdHVzID0gJ3dhaXQnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekljb24oKTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBzZXQgbnpJY29uKHZhbHVlOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgb2xkQVBJSWNvbiA9IHRydWU7XG4gIHByaXZhdGUgX2ljb24/OiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGN1c3RvbVByb2Nlc3NUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47IC8vIFNldCBieSBwYXJlbnQuXG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgaW5kZXggPSAwO1xuICBsYXN0ID0gZmFsc2U7XG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcbiAgY2xpY2thYmxlID0gZmFsc2U7XG4gIGNsaWNrJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IGN1cnJlbnQgPiB0aGlzLmluZGV4ID8gJ2ZpbmlzaCcgOiBjdXJyZW50ID09PSB0aGlzLmluZGV4ID8gdGhpcy5vdXRTdGF0dXMgfHwgJycgOiAnd2FpdCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja2FibGUgJiYgdGhpcy5jdXJyZW50SW5kZXggIT09IHRoaXMuaW5kZXggJiYgIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGljayQubmV4dCh0aGlzLmluZGV4KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=