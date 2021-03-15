/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { gridResponsiveMap, NzBreakpointEnum, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from 'ng-zorro-antd/core/config';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from './pagination-simple.component';
import * as ɵngcc7 from './pagination-default.component';

function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1.template);
} }
function NzPaginationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
} }
const NZ_CONFIG_MODULE_NAME = 'pagination';
export class NzPaginationComponent {
    constructor(i18n, cdr, breakpointService, nzConfigService, directionality, elementRef) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this.elementRef = elementRef;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzShowTotal = null;
        this.nzItemRender = null;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzShowSizeChanger = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzDisabled = false;
        this.nzResponsive = false;
        this.nzHideOnSinglePage = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.showPagination = true;
        this.size = 'default';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.total$ = new ReplaySubject(1);
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-pagination');
    }
    validatePageIndex(value, lastIndex) {
        if (value > lastIndex) {
            return lastIndex;
        }
        else if (value < 1) {
            return 1;
        }
        else {
            return value;
        }
    }
    onPageIndexChange(index) {
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        const validIndex = this.validatePageIndex(index, lastIndex);
        if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
            this.nzPageIndex = validIndex;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
    }
    onPageSizeChange(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(size);
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            this.onPageIndexChange(lastIndex);
        }
    }
    onTotalChange(total) {
        const lastIndex = this.getLastIndex(total, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            Promise.resolve().then(() => this.onPageIndexChange(lastIndex));
        }
    }
    getLastIndex(total, pageSize) {
        return Math.ceil(total / pageSize);
    }
    ngOnInit() {
        var _a;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        });
        this.total$.pipe(takeUntil(this.destroy$)).subscribe(total => {
            this.onTotalChange(total);
        });
        this.breakpointService
            .subscribe(gridResponsiveMap)
            .pipe(takeUntil(this.destroy$))
            .subscribe(bp => {
            if (this.nzResponsive) {
                this.size = bp === NzBreakpointEnum.xs ? 'small' : 'default';
                this.cdr.markForCheck();
            }
        });
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
    ngOnChanges(changes) {
        const { nzHideOnSinglePage, nzTotal, nzPageSize, nzSize } = changes;
        if (nzTotal) {
            this.total$.next(this.nzTotal);
        }
        if (nzHideOnSinglePage || nzTotal || nzPageSize) {
            this.showPagination = (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) || (this.nzTotal > 0 && !this.nzHideOnSinglePage);
        }
        if (nzSize) {
            this.size = nzSize.currentValue;
        }
    }
}
NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzBreakpointService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzPaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPaginationComponent, selectors: [["nz-pagination"]], hostVars: 8, hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
    } }, inputs: { nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzShowSizeChanger: "nzShowSizeChanger", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzDisabled: "nzDisabled", nzResponsive: "nzResponsive", nzHideOnSinglePage: "nzHideOnSinglePage", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 18, consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        ɵngcc0.ɵɵelementStart(1, "nz-pagination-simple", 1, 2);
        ɵngcc0.ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) { return ctx.onPageIndexChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "nz-pagination-default", 3, 4);
        ɵngcc0.ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) { return ctx.onPageIndexChange($event); })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) { return ctx.onPageSizeChange($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.showPagination);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
    } }, directives: [ɵngcc5.NgIf, ɵngcc6.NzPaginationSimpleComponent, ɵngcc7.NzPaginationDefaultComponent, ɵngcc5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzPaginationComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService },
    { type: NzConfigService },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
NzPaginationComponent.propDecorators = {
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzResponsive: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzPaginationComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Array)
], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzResponsive", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="showPagination">
      <ng-container *ngIf="nzSimple; else defaultPagination.template">
        <ng-template [ngTemplateOutlet]="simplePagination.template"></ng-template>
      </ng-container>
    </ng-container>
    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
                host: {
                    '[class.ant-pagination-simple]': 'nzSimple',
                    '[class.ant-pagination-disabled]': 'nzDisabled',
                    '[class.mini]': `!nzSimple && size === 'small'`,
                    '[class.ant-pagination-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzBreakpointService }, { type: ɵngcc3.NzConfigService }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }]; }, { nzPageSizeChange: [{
            type: Output
        }], nzPageIndexChange: [{
            type: Output
        }], nzShowTotal: [{
            type: Input
        }], nzItemRender: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzPageSizeOptions: [{
            type: Input
        }], nzShowSizeChanger: [{
            type: Input
        }], nzShowQuickJumper: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzResponsive: [{
            type: Input
        }], nzHideOnSinglePage: [{
            type: Input
        }], nzTotal: [{
            type: Input
        }], nzPageIndex: [{
            type: Input
        }], nzPageSize: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQyxNQUFNLHFCQUFxQixHQUFnQixZQUFZLENBQUM7QUFnRHhELE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQTRFbkMsWUFDVSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixpQkFBc0MsRUFDcEMsZUFBZ0MsRUFDdEIsY0FBOEIsRUFDMUMsVUFBc0I7QUFDL0IsUUFOUyxTQUFJLEdBQUosSUFBSSxDQUFlO0FBQUMsUUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO0FBQUMsUUFDckMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQUMsUUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUNsQyxRQWxGVyxrQkFBYSxHQUFnQixxQkFBcUIsQ0FBQztBQUM5RCxRQVdxQixxQkFBZ0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNqRixRQUFxQixzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNsRixRQUFXLGdCQUFXLEdBQXVFLElBQUksQ0FBQztBQUNsRyxRQUFXLGlCQUFZLEdBQW9ELElBQUksQ0FBQztBQUNoRixRQUF5QixXQUFNLEdBQXdCLFNBQVMsQ0FBQztBQUNqRSxRQUF5QixzQkFBaUIsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLFFBQXlDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNuRSxRQUF5QyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDbkUsUUFBeUMsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxRCxRQUEyQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQTJCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hELFFBQTJCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztBQUN0RCxRQUEwQixZQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLFFBQTBCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLFFBQTBCLGVBQVUsR0FBRyxFQUFFLENBQUM7QUFDMUMsUUFDRSxtQkFBYyxHQUFHLElBQUksQ0FBQztBQUN4QixRQUNFLFNBQUksR0FBd0IsU0FBUyxDQUFDO0FBQ3hDLFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUNVLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3pDLFFBQVUsV0FBTSxHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFFBZ0RJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRSxJQUFFLENBQUM7QUFDSCxJQWxERSxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsU0FBaUI7QUFBSSxRQUNwRCxJQUFJLEtBQUssR0FBRyxTQUFTLEVBQUU7QUFDM0IsWUFBTSxPQUFPLFNBQVMsQ0FBQztBQUN2QixTQUFLO0FBQUMsYUFBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDMUIsWUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxLQUFhO0FBQUksUUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RSxRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEUsUUFBSSxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM3RCxZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsSUFBWTtBQUFJLFFBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzNCLFFBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxRQUFJLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkUsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxLQUFhO0FBQUksUUFDN0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsRUFBRTtBQUN0QyxZQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtBQUFJLFFBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFhRSxRQUFRO0FBQUs7QUFDTCxRQUFOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUN6RSxZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUQsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakUsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLElBQUksQ0FBQyxpQkFBaUI7QUFDMUIsYUFBTyxTQUFTLENBQUMsaUJBQWlCLENBQUM7QUFDbkMsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0QixZQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMvQixnQkFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3ZFLGdCQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbEMsYUFBUztBQUNULFFBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUNJLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtBQUNsRyxZQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsRUFBRTtBQUNQLFFBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3hFLFFBQUksSUFBSSxPQUFPLEVBQUU7QUFDakIsWUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsU0FBSztBQUNMLFFBQUksSUFBSSxrQkFBa0IsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFO0FBQ3JELFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUksU0FBSztBQUNMLFFBQ0ksSUFBSSxNQUFNLEVBQUU7QUFDaEIsWUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDdEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO2lEQXBMQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRTs7OytsQkFnQ1Qsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLCtCQUErQixFQUFFLFVBQVUsc0JBQzNDLGlDQUFpQyxFQUFFLFlBQVksc0JBQy9DLGNBQWMsRUFBRSwrQkFBK0Isc0JBQy9DLDRCQUE0QixFQUFFLGVBQWUsa0JBQzlDLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzhLQUNJO0FBQUM7QUFBK0MsWUF0RDVDLGFBQWE7QUFBSSxZQWxCeEIsaUJBQWlCO0FBQ2pCLFlBYzRDLG1CQUFtQjtBQUFJLFlBRC9DLGVBQWU7QUFBSSxZQWpCckIsY0FBYyx1QkE0SjdCLFFBQVE7QUFBTyxZQXZKbEIsVUFBVTtBQUNYO0FBQUc7QUFHRywrQkErRUosTUFBTTtBQUFLLGdDQUNYLE1BQU07QUFBSywwQkFDWCxLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUk7QUFWYTtBQUFhLElBQTFCLFVBQVUsRUFBRTtBQUFFO0FBQXNDLHFEQUFDO0FBQ3hDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBcUMsZ0VBQVM7QUFDL0I7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBQzlCLGdFQUR1RDtBQUMxQjtBQUFhLElBQTFDLFVBQVUsRUFBRTtBQUFFLElBQUEsWUFBWSxFQUFFO0FBQUU7QUFDOUIsZ0VBRHVEO0FBQzFCO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUNyQix1REFEcUM7QUFDL0I7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHlEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1gsMkRBRCtCO0FBQ3JCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDakIsaUVBRDJDO0FBQzVCO0FBQzFCLElBRFksV0FBVyxFQUFFO0FBQUU7QUFDRCxzREFEWTtBQUNaO0FBQWEsSUFBM0IsV0FBVyxFQUFFO0FBQUU7QUFDTCwwREFEb0I7QUFDaEI7QUFBYSxJQUEzQixXQUFXLEVBQUU7QUFBRTtBQUVOLHlEQUZxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUMxQztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBncmlkUmVzcG9uc2l2ZU1hcCwgTnpCcmVha3BvaW50RW51bSwgTnpCcmVha3BvaW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGVzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdwYWdpbmF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpQYWdpbmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93UGFnaW5hdGlvblwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2ltcGxlOyBlbHNlIGRlZmF1bHRQYWdpbmF0aW9uLnRlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzaW1wbGVQYWdpbmF0aW9uLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1wYWdpbmF0aW9uLXNpbXBsZVxuICAgICAgI3NpbXBsZVBhZ2luYXRpb25cbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtpdGVtUmVuZGVyXT1cIm56SXRlbVJlbmRlclwiXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICBbcGFnZVNpemVdPVwibnpQYWdlU2l6ZVwiXG4gICAgICBbdG90YWxdPVwibnpUb3RhbFwiXG4gICAgICBbcGFnZUluZGV4XT1cIm56UGFnZUluZGV4XCJcbiAgICAgIChwYWdlSW5kZXhDaGFuZ2UpPVwib25QYWdlSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotcGFnaW5hdGlvbi1zaW1wbGU+XG4gICAgPG56LXBhZ2luYXRpb24tZGVmYXVsdFxuICAgICAgI2RlZmF1bHRQYWdpbmF0aW9uXG4gICAgICBbbnpTaXplXT1cInNpemVcIlxuICAgICAgW2l0ZW1SZW5kZXJdPVwibnpJdGVtUmVuZGVyXCJcbiAgICAgIFtzaG93VG90YWxdPVwibnpTaG93VG90YWxcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgW3Nob3dTaXplQ2hhbmdlcl09XCJuelNob3dTaXplQ2hhbmdlclwiXG4gICAgICBbc2hvd1F1aWNrSnVtcGVyXT1cIm56U2hvd1F1aWNrSnVtcGVyXCJcbiAgICAgIFt0b3RhbF09XCJuelRvdGFsXCJcbiAgICAgIFtwYWdlSW5kZXhdPVwibnpQYWdlSW5kZXhcIlxuICAgICAgW3BhZ2VTaXplXT1cIm56UGFnZVNpemVcIlxuICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJuelBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAocGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgKHBhZ2VTaXplQ2hhbmdlKT1cIm9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotcGFnaW5hdGlvbi1kZWZhdWx0PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1zaW1wbGVdJzogJ256U2ltcGxlJyxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLm1pbmldJzogYCFuelNpbXBsZSAmJiBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NpemVDaGFuZ2VyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVPblNpbmdsZVBhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1F1aWNrSnVtcGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNpbXBsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpSZXNwb25zaXZlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelRvdGFsOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UGFnZUluZGV4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UGFnZVNpemU6IE51bWJlcklucHV0O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuelBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbMTAsIDIwLCAzMCwgNDBdO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXNwb25zaXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUb3RhbCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGFnZUluZGV4ID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQYWdlU2l6ZSA9IDEwO1xuXG4gIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgbG9jYWxlITogTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZTtcbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3RhbCQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDEpO1xuXG4gIHZhbGlkYXRlUGFnZUluZGV4KHZhbHVlOiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUgPiBsYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybiBsYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ2V0TGFzdEluZGV4KHRoaXMubnpUb3RhbCwgdGhpcy5uelBhZ2VTaXplKTtcbiAgICBjb25zdCB2YWxpZEluZGV4ID0gdGhpcy52YWxpZGF0ZVBhZ2VJbmRleChpbmRleCwgbGFzdEluZGV4KTtcbiAgICBpZiAodmFsaWRJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCAmJiAhdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdmFsaWRJbmRleDtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpQYWdlU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodGhpcy5uelRvdGFsLCB0aGlzLm56UGFnZVNpemUpO1xuICAgIGlmICh0aGlzLm56UGFnZUluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLm9uUGFnZUluZGV4Q2hhbmdlKGxhc3RJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3RhbENoYW5nZSh0b3RhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodG90YWwsIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgaWYgKHRoaXMubnpQYWdlSW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblBhZ2VJbmRleENoYW5nZShsYXN0SW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRMYXN0SW5kZXgodG90YWw6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTnpCcmVha3BvaW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1wYWdpbmF0aW9uJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnUGFnaW5hdGlvbicpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRvdGFsJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRvdGFsID0+IHtcbiAgICAgIHRoaXMub25Ub3RhbENoYW5nZSh0b3RhbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlXG4gICAgICAuc3Vic2NyaWJlKGdyaWRSZXNwb25zaXZlTWFwKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShicCA9PiB7XG4gICAgICAgIGlmICh0aGlzLm56UmVzcG9uc2l2ZSkge1xuICAgICAgICAgIHRoaXMuc2l6ZSA9IGJwID09PSBOekJyZWFrcG9pbnRFbnVtLnhzID8gJ3NtYWxsJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpIaWRlT25TaW5nbGVQYWdlLCBuelRvdGFsLCBuelBhZ2VTaXplLCBuelNpemUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56VG90YWwpIHtcbiAgICAgIHRoaXMudG90YWwkLm5leHQodGhpcy5uelRvdGFsKTtcbiAgICB9XG4gICAgaWYgKG56SGlkZU9uU2luZ2xlUGFnZSB8fCBuelRvdGFsIHx8IG56UGFnZVNpemUpIHtcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSAodGhpcy5uekhpZGVPblNpbmdsZVBhZ2UgJiYgdGhpcy5uelRvdGFsID4gdGhpcy5uelBhZ2VTaXplKSB8fCAodGhpcy5uelRvdGFsID4gMCAmJiAhdGhpcy5uekhpZGVPblNpbmdsZVBhZ2UpO1xuICAgIH1cblxuICAgIGlmIChuelNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IG56U2l6ZS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=