/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from './partial/not-found';
import * as ɵngcc6 from './partial/server-error.component';
import * as ɵngcc7 from './partial/unauthorized';

function NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r12);
} }
function NzResultComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.icon);
} }
function NzResultComponent_ng_container_1_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "!icon"]);
} }
function NzResultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_container_1_ng_content_2_Template, 1, 0, "ng-content", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.icon);
} }
function NzResultComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r13.nzTitle, " ");
} }
function NzResultComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_2_div_1_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzResultComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2, ["*ngIf", "!nzTitle"]);
} }
function NzResultComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r14.nzSubTitle, " ");
} }
function NzResultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_4_div_1_Template, 2, 1, "div", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzSubTitle);
} }
function NzResultComponent_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3, ["*ngIf", "!nzSubTitle"]);
} }
function NzResultComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r15.nzExtra, " ");
} }
function NzResultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzExtra);
} }
function NzResultComponent_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 4, ["*ngIf", "!nzExtra"]);
} }
function NzResultComponent_ng_template_9_nz_result_not_found_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-not-found");
} }
function NzResultComponent_ng_template_9_nz_result_server_error_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-server-error");
} }
function NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-result-unauthorized");
} }
function NzResultComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 12);
    ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_template_9_nz_result_not_found_1_Template, 1, 0, "nz-result-not-found", 13);
    ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_template_9_nz_result_server_error_2_Template, 1, 0, "nz-result-server-error", 13);
    ɵngcc0.ɵɵtemplate(3, NzResultComponent_ng_template_9_nz_result_unauthorized_3_Template, 1, 0, "nz-result-unauthorized", 13);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r8.nzStatus);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "404");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "500");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "403");
} }
const _c0 = [[["nz-result-content"], ["", "nz-result-content", ""]], [["", "nz-result-icon", ""]], [["div", "nz-result-title", ""]], [["div", "nz-result-subtitle", ""]], [["div", "nz-result-extra", ""]]];
const _c1 = ["nz-result-content, [nz-result-content]", "[nz-result-icon]", "div[nz-result-title]", "div[nz-result-subtitle]", "div[nz-result-extra]"];
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    constructor(elementRef, cdr, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzStatus = 'info';
        this.isException = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-result');
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges() {
        this.setStatusIcon();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusIcon() {
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[icon] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[this.nzStatus];
    }
}
NzResultComponent.ɵfac = function NzResultComponent_Factory(t) { return new (t || NzResultComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzResultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResultComponent, selectors: [["nz-result"]], hostVars: 10, hostBindings: function NzResultComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-result-success", ctx.nzStatus === "success")("ant-result-error", ctx.nzStatus === "error")("ant-result-info", ctx.nzStatus === "info")("ant-result-warning", ctx.nzStatus === "warning")("ant-result-rtl", ctx.dir === "rtl");
    } }, inputs: { nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubTitle: "nzSubTitle", nzExtra: "nzExtra" }, exportAs: ["nzResult"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "ant-result-icon"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "ant-result-extra", 4, "ngIf"], ["exceptionTpl", ""], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"], ["class", "ant-result-title", 4, "nzStringTemplateOutlet"], [1, "ant-result-title"], ["class", "ant-result-subtitle", 4, "nzStringTemplateOutlet"], [1, "ant-result-subtitle"], [1, "ant-result-extra"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function NzResultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzResultComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NzResultComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, NzResultComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵtemplate(4, NzResultComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(5, NzResultComponent_ng_content_5_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵtemplate(7, NzResultComponent_div_7_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(8, NzResultComponent_ng_content_8_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵtemplate(9, NzResultComponent_ng_template_9_Template, 4, 4, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r7 = ɵngcc0.ɵɵreference(10);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isException)("ngIfElse", _r7);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSubTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSubTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzExtra);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc5.NzResultNotFoundComponent, ɵngcc6.NzResultServerErrorComponent, ɵngcc7.NzResultUnauthorizedComponent], encapsulation: 2, changeDetection: 0 });
NzResultComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzSubTitle: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResultComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: `
    <div class="ant-result-icon">
      <ng-container *ngIf="!isException; else exceptionTpl">
        <ng-container *ngIf="icon">
          <ng-container *nzStringTemplateOutlet="icon; let icon">
            <i nz-icon [nzType]="icon" nzTheme="fill"></i>
          </ng-container>
        </ng-container>
        <ng-content *ngIf="!icon" select="[nz-result-icon]"></ng-content>
      </ng-container>
    </div>
    <ng-container *ngIf="nzTitle">
      <div class="ant-result-title" *nzStringTemplateOutlet="nzTitle">
        {{ nzTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzTitle" select="div[nz-result-title]"></ng-content>
    <ng-container *ngIf="nzSubTitle">
      <div class="ant-result-subtitle" *nzStringTemplateOutlet="nzSubTitle">
        {{ nzSubTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzSubTitle" select="div[nz-result-subtitle]"></ng-content>
    <ng-content select="nz-result-content, [nz-result-content]"></ng-content>
    <div class="ant-result-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">
        {{ nzExtra }}
      </ng-container>
    </div>
    <ng-content *ngIf="!nzExtra" select="div[nz-result-extra]"></ng-content>

    <ng-template #exceptionTpl>
      <ng-container [ngSwitch]="nzStatus">
        <nz-result-not-found *ngSwitchCase="'404'"></nz-result-not-found>
        <nz-result-server-error *ngSwitchCase="'500'"></nz-result-server-error>
        <nz-result-unauthorized *ngSwitchCase="'403'"></nz-result-unauthorized>
      </ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-result-success]': `nzStatus === 'success'`,
                    '[class.ant-result-error]': `nzStatus === 'error'`,
                    '[class.ant-result-info]': `nzStatus === 'info'`,
                    '[class.ant-result-warning]': `nzStatus === 'warning'`,
                    '[class.ant-result-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzStatus: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzSubTitle: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0MsTUFBTSxPQUFPLEdBQUc7QUFDaEIsSUFBRSxPQUFPLEVBQUUsY0FBYztBQUN6QixJQUFFLEtBQUssRUFBRSxjQUFjO0FBQ3ZCLElBQUUsSUFBSSxFQUFFLG9CQUFvQjtBQUM1QixJQUFFLE9BQU8sRUFBRSxTQUFTO0FBQ3BCLENBQUMsQ0FBQztBQUNGLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQXNEOUMsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBYS9CLFlBQW9CLFVBQXNCLEVBQVUsR0FBc0IsRUFBc0IsY0FBOEI7QUFDaEksUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQVMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUFxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQVZ0SCxh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KiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpSZXN1bHRJY29uVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZyc7XG5leHBvcnQgdHlwZSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgPSAnNDA0JyB8ICc1MDAnIHwgJzQwMyc7XG5leHBvcnQgdHlwZSBOelJlc3VsdFN0YXR1c1R5cGUgPSBOekV4Y2VwdGlvblN0YXR1c1R5cGUgfCBOelJlc3VsdEljb25UeXBlO1xuXG5jb25zdCBJY29uTWFwID0ge1xuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUnLFxuICBpbmZvOiAnZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgd2FybmluZzogJ3dhcm5pbmcnXG59O1xuY29uc3QgRXhjZXB0aW9uU3RhdHVzID0gWyc0MDQnLCAnNTAwJywgJzQwMyddO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcmVzdWx0JyxcbiAgZXhwb3J0QXM6ICduelJlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1yZXN1bHQtaWNvblwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0V4Y2VwdGlvbjsgZWxzZSBleGNlcHRpb25UcGxcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImljb25cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaWNvbjsgbGV0IGljb25cIj5cbiAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiFpY29uXCIgc2VsZWN0PVwiW256LXJlc3VsdC1pY29uXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC10aXRsZVwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPlxuICAgICAgICB7eyBuelRpdGxlIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFuelRpdGxlXCIgc2VsZWN0PVwiZGl2W256LXJlc3VsdC10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U3ViVGl0bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcmVzdWx0LXN1YnRpdGxlXCIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YlRpdGxlXCI+XG4gICAgICAgIHt7IG56U3ViVGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56U3ViVGl0bGVcIiBzZWxlY3Q9XCJkaXZbbnotcmVzdWx0LXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1yZXN1bHQtY29udGVudCwgW256LXJlc3VsdC1jb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC1leHRyYVwiICpuZ0lmPVwibnpFeHRyYVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXh0cmFcIj5cbiAgICAgICAge3sgbnpFeHRyYSB9fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpFeHRyYVwiIHNlbGVjdD1cImRpdltuei1yZXN1bHQtZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPG5nLXRlbXBsYXRlICNleGNlcHRpb25UcGw+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJuelN0YXR1c1wiPlxuICAgICAgICA8bnotcmVzdWx0LW5vdC1mb3VuZCAqbmdTd2l0Y2hDYXNlPVwiJzQwNCdcIj48L256LXJlc3VsdC1ub3QtZm91bmQ+XG4gICAgICAgIDxuei1yZXN1bHQtc2VydmVyLWVycm9yICpuZ1N3aXRjaENhc2U9XCInNTAwJ1wiPjwvbnotcmVzdWx0LXNlcnZlci1lcnJvcj5cbiAgICAgICAgPG56LXJlc3VsdC11bmF1dGhvcml6ZWQgKm5nU3dpdGNoQ2FzZT1cIic0MDMnXCI+PC9uei1yZXN1bHQtdW5hdXRob3JpemVkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJlc3VsdC1zdWNjZXNzXSc6IGBuelN0YXR1cyA9PT0gJ3N1Y2Nlc3MnYCxcbiAgICAnW2NsYXNzLmFudC1yZXN1bHQtZXJyb3JdJzogYG56U3RhdHVzID09PSAnZXJyb3InYCxcbiAgICAnW2NsYXNzLmFudC1yZXN1bHQtaW5mb10nOiBgbnpTdGF0dXMgPT09ICdpbmZvJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcmVzdWx0LXdhcm5pbmddJzogYG56U3RhdHVzID09PSAnd2FybmluZydgLFxuICAgICdbY2xhc3MuYW50LXJlc3VsdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UmVzdWx0U3RhdHVzVHlwZSA9ICdpbmZvJztcbiAgQElucHV0KCkgbnpTdWJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc0V4Y2VwdGlvbiA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1yZXN1bHQnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXR1c0ljb24oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdHVzSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5uekljb247XG5cbiAgICB0aGlzLmlzRXhjZXB0aW9uID0gRXhjZXB0aW9uU3RhdHVzLmluZGV4T2YodGhpcy5uelN0YXR1cykgIT09IC0xO1xuICAgIHRoaXMuaWNvbiA9IGljb25cbiAgICAgID8gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnXG4gICAgICAgID8gSWNvbk1hcFtpY29uIGFzIE56UmVzdWx0SWNvblR5cGVdIHx8IGljb25cbiAgICAgICAgOiBpY29uXG4gICAgICA6IHRoaXMuaXNFeGNlcHRpb25cbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IEljb25NYXBbdGhpcy5uelN0YXR1cyBhcyBOelJlc3VsdEljb25UeXBlXTtcbiAgfVxufVxuIl19