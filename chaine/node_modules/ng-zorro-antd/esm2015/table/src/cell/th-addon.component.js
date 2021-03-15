import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../addon/filter.component';
import * as ɵngcc3 from '../addon/sorters.component';

const _c0 = ["nzColumnKey", ""];
function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-table-filter", 5);
    ɵngcc0.ɵɵlistener("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onFilterValueChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
} }
function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) { }
function NzThAddOnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(6);
    const _r7 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
} }
function NzThAddOnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
    ɵngcc0.ɵɵprojection(1, 1);
} }
function NzThAddOnComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-table-sorters", 7);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    const _r7 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵproperty("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
} }
function NzThAddOnComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 2);
} }
const _c1 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
const _c2 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
export class NzThAddOnComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.manualClickOrder$ = new Subject();
        this.calcOperatorChange$ = new Subject();
        this.nzFilterValue = null;
        this.sortOrder = null;
        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrderChange$ = new Subject();
        this.destroy$ = new Subject();
        this.isNzShowSortChanged = false;
        this.isNzShowFilterChanged = false;
        this.nzFilterMultiple = true;
        this.nzSortOrder = null;
        this.nzSortPriority = false;
        this.nzSortDirections = ['ascend', 'descend', null];
        this.nzFilters = [];
        this.nzSortFn = null;
        this.nzFilterFn = null;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzCustomFilter = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortOrderChange = new EventEmitter();
        this.nzFilterChange = new EventEmitter();
    }
    getNextSortDirection(sortDirections, current) {
        const index = sortDirections.indexOf(current);
        if (index === sortDirections.length - 1) {
            return sortDirections[0];
        }
        else {
            return sortDirections[index + 1];
        }
    }
    emitNextSortValue() {
        if (this.nzShowSort) {
            const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
            this.setSortOrder(nextOrder);
            this.manualClickOrder$.next(this);
        }
    }
    setSortOrder(order) {
        this.sortOrderChange$.next(order);
    }
    clearSortOrder() {
        if (this.sortOrder !== null) {
            this.setSortOrder(null);
        }
    }
    onFilterValueChange(value) {
        this.nzFilterChange.emit(value);
        this.nzFilterValue = value;
        this.updateCalcOperator();
    }
    updateCalcOperator() {
        this.calcOperatorChange$.next();
    }
    ngOnInit() {
        this.sortOrderChange$.pipe(takeUntil(this.destroy$)).subscribe(order => {
            if (this.sortOrder !== order) {
                this.sortOrder = order;
                this.nzSortOrderChange.emit(order);
            }
            this.updateCalcOperator();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzSortDirections, nzFilters, nzSortOrder, nzSortFn, nzFilterFn, nzSortPriority, nzFilterMultiple, nzShowSort, nzShowFilter } = changes;
        if (nzSortDirections) {
            if (this.nzSortDirections && this.nzSortDirections.length) {
                this.sortDirections = this.nzSortDirections;
            }
        }
        if (nzSortOrder) {
            this.sortOrder = this.nzSortOrder;
            this.setSortOrder(this.nzSortOrder);
        }
        if (nzShowSort) {
            this.isNzShowSortChanged = true;
        }
        if (nzShowFilter) {
            this.isNzShowFilterChanged = true;
        }
        const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
        if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
            this.nzShowSort = true;
        }
        if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
            this.nzShowFilter = true;
        }
        if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
            const listOfValue = this.nzFilters.filter(item => item.byDefault).map(item => item.value);
            this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
        }
        if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
            this.updateCalcOperator();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) { return new (t || NzThAddOnComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzThAddOnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzThAddOnComponent, selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]], hostVars: 4, hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzThAddOnComponent_click_HostBindingHandler() { return ctx.emitNextSortValue(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
    } }, inputs: { nzFilterMultiple: "nzFilterMultiple", nzSortOrder: "nzSortOrder", nzSortPriority: "nzSortPriority", nzSortDirections: "nzSortDirections", nzFilters: "nzFilters", nzSortFn: "nzSortFn", nzFilterFn: "nzFilterFn", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzCustomFilter: "nzCustomFilter", nzColumnKey: "nzColumnKey" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortOrderChange: "nzSortOrderChange", nzFilterChange: "nzFilterChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 9, vars: 2, consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]], template: function NzThAddOnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);
        ɵngcc0.ɵɵtemplate(1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzTableFilterComponent, ɵngcc1.NgTemplateOutlet, ɵngcc3.NzTableSortersComponent], encapsulation: 2, changeDetection: 0 });
NzThAddOnComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzThAddOnComponent.propDecorators = {
    nzColumnKey: [{ type: Input }],
    nzFilterMultiple: [{ type: Input }],
    nzSortOrder: [{ type: Input }],
    nzSortPriority: [{ type: Input }],
    nzSortDirections: [{ type: Input }],
    nzFilters: [{ type: Input }],
    nzSortFn: [{ type: Input }],
    nzFilterFn: [{ type: Input }],
    nzShowSort: [{ type: Input }],
    nzShowFilter: [{ type: Input }],
    nzCustomFilter: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzSortOrderChange: [{ type: Output }],
    nzFilterChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzThAddOnComponent.prototype, "nzShowSort", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzThAddOnComponent, [{
        type: Component,
        args: [{
                selector: 'th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nz-table-filter
      *ngIf="nzShowFilter || nzCustomFilter; else notFilterTemplate"
      [contentTemplate]="notFilterTemplate"
      [extraTemplate]="extraTemplate"
      [customFilter]="nzCustomFilter"
      [filterMultiple]="nzFilterMultiple"
      [listOfFilter]="nzFilters"
      (filterChange)="onFilterValueChange($event)"
    ></nz-table-filter>
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate"></ng-template>
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]"></ng-content>
      <ng-content select="nz-filter-trigger"></ng-content>
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters [sortOrder]="sortOrder" [sortDirections]="sortDirections" [contentTemplate]="contentTemplate"></nz-table-sorters>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-table-column-has-sorters]': 'nzShowSort',
                    '[class.ant-table-column-sort]': `sortOrder === 'descend' || sortOrder === 'ascend'`,
                    '(click)': 'emitNextSortValue()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { nzFilterMultiple: [{
            type: Input
        }], nzSortOrder: [{
            type: Input
        }], nzSortPriority: [{
            type: Input
        }], nzSortDirections: [{
            type: Input
        }], nzFilters: [{
            type: Input
        }], nzSortFn: [{
            type: Input
        }], nzFilterFn: [{
            type: Input
        }], nzShowSort: [{
            type: Input
        }], nzShowFilter: [{
            type: Input
        }], nzCustomFilter: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }], nzSortOrderChange: [{
            type: Output
        }], nzFilterChange: [{
            type: Output
        }], nzColumnKey: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYWRkb24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9jZWxsL3RoLWFkZG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVDQUF1QztBQUN2QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDM0MsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBa0VoQyxZQUFvQixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUE3RDNDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFzQixDQUFDO0FBQ3hELFFBQUUsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUN0QyxRQUFFLGtCQUFhLEdBQXVCLElBQUksQ0FBQztBQUMzQyxRQUFFLGNBQVMsR0FBcUIsSUFBSSxDQUFDO0FBQ3JDLFFBQUUsbUJBQWMsR0FBdUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25FLFFBQVUscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7QUFDN0QsUUFBVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNuQyxRQUFVLHdCQUFtQixHQUFHLEtBQUssQ0FBQztBQUN0QyxRQUFVLDBCQUFxQixHQUFHLEtB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Q0FoS0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtpREFBcUgsa0JBQy9ILG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFOzs7OzBnQkF1QlQsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLHNDQUFzQyxFQUFFLFlBQVksc0JBQ3BELCtCQUErQixFQUFFLG1EQUFtRCxzQkFDcEYsU0FBUyxFQUFFLHFCQUFxQixrQkFDakMsY0FDRjs7Ozs7Ozs7OztvS0FDSTtBQUFDO0FBQTRDLFlBckRoRCxpQkFBaUI7QUFDbEI7QUFBRztBQUdBLDBCQStERCxLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLDhCQUNWLE1BQU07QUFBSyxnQ0FDWCxNQUFNO0FBQUssNkJBQ1gsTUFBTTtBQUFJO0FBTGM7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHNEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1gsd0RBRCtCO0FBQ3JCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDYiwwREFEbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDbEQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZUZpbHRlckZuLCBOelRhYmxlRmlsdGVyTGlzdCwgTnpUYWJsZUZpbHRlclZhbHVlLCBOelRhYmxlU29ydEZuLCBOelRhYmxlU29ydE9yZGVyIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aFtuekNvbHVtbktleV0sIHRoW256U29ydEZuXSwgdGhbbnpTb3J0T3JkZXJdLCB0aFtuekZpbHRlcnNdLCB0aFtuelNob3dTb3J0XSwgdGhbbnpTaG93RmlsdGVyXSwgdGhbbnpDdXN0b21GaWx0ZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10YWJsZS1maWx0ZXJcbiAgICAgICpuZ0lmPVwibnpTaG93RmlsdGVyIHx8IG56Q3VzdG9tRmlsdGVyOyBlbHNlIG5vdEZpbHRlclRlbXBsYXRlXCJcbiAgICAgIFtjb250ZW50VGVtcGxhdGVdPVwibm90RmlsdGVyVGVtcGxhdGVcIlxuICAgICAgW2V4dHJhVGVtcGxhdGVdPVwiZXh0cmFUZW1wbGF0ZVwiXG4gICAgICBbY3VzdG9tRmlsdGVyXT1cIm56Q3VzdG9tRmlsdGVyXCJcbiAgICAgIFtmaWx0ZXJNdWx0aXBsZV09XCJuekZpbHRlck11bHRpcGxlXCJcbiAgICAgIFtsaXN0T2ZGaWx0ZXJdPVwibnpGaWx0ZXJzXCJcbiAgICAgIChmaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+PC9uei10YWJsZS1maWx0ZXI+XG4gICAgPG5nLXRlbXBsYXRlICNub3RGaWx0ZXJUZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuelNob3dTb3J0ID8gc29ydFRlbXBsYXRlIDogY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmFUZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuei10aC1leHRyYV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1maWx0ZXItdHJpZ2dlclwiPjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjc29ydFRlbXBsYXRlPlxuICAgICAgPG56LXRhYmxlLXNvcnRlcnMgW3NvcnRPcmRlcl09XCJzb3J0T3JkZXJcIiBbc29ydERpcmVjdGlvbnNdPVwic29ydERpcmVjdGlvbnNcIiBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbnotdGFibGUtc29ydGVycz5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLXNvcnRlcnNdJzogJ256U2hvd1NvcnQnLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1zb3J0XSc6IGBzb3J0T3JkZXIgPT09ICdkZXNjZW5kJyB8fCBzb3J0T3JkZXIgPT09ICdhc2NlbmQnYCxcbiAgICAnKGNsaWNrKSc6ICdlbWl0TmV4dFNvcnRWYWx1ZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGhBZGRPbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U29ydDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RmlsdGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekN1c3RvbUZpbHRlcjogQm9vbGVhbklucHV0O1xuXG4gIG1hbnVhbENsaWNrT3JkZXIkID0gbmV3IFN1YmplY3Q8TnpUaEFkZE9uQ29tcG9uZW50PigpO1xuICBjYWxjT3BlcmF0b3JDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcbiAgbnpGaWx0ZXJWYWx1ZTogTnpUYWJsZUZpbHRlclZhbHVlID0gbnVsbDtcbiAgc29ydE9yZGVyOiBOelRhYmxlU29ydE9yZGVyID0gbnVsbDtcbiAgc29ydERpcmVjdGlvbnM6IE56VGFibGVTb3J0T3JkZXJbXSA9IFsnYXNjZW5kJywgJ2Rlc2NlbmQnLCBudWxsXTtcbiAgcHJpdmF0ZSBzb3J0T3JkZXJDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpUYWJsZVNvcnRPcmRlcj4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaXNOelNob3dTb3J0Q2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzTnpTaG93RmlsdGVyQ2hhbmdlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvbHVtbktleT86IHN0cmluZztcbiAgQElucHV0KCkgbnpGaWx0ZXJNdWx0aXBsZSA9IHRydWU7XG4gIEBJbnB1dCgpIG56U29ydE9yZGVyOiBOelRhYmxlU29ydE9yZGVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpTb3J0UHJpb3JpdHk6IG51bWJlciB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTb3J0RGlyZWN0aW9uczogTnpUYWJsZVNvcnRPcmRlcltdID0gWydhc2NlbmQnLCAnZGVzY2VuZCcsIG51bGxdO1xuICBASW5wdXQoKSBuekZpbHRlcnM6IE56VGFibGVGaWx0ZXJMaXN0ID0gW107XG4gIEBJbnB1dCgpIG56U29ydEZuOiBOelRhYmxlU29ydEZuIHwgYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZpbHRlckZuOiBOelRhYmxlRmlsdGVyRm4gfCBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTb3J0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dGaWx0ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q3VzdG9tRmlsdGVyID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRPcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYmxlRmlsdGVyVmFsdWU+KCk7XG5cbiAgZ2V0TmV4dFNvcnREaXJlY3Rpb24oc29ydERpcmVjdGlvbnM6IE56VGFibGVTb3J0T3JkZXJbXSwgY3VycmVudDogTnpUYWJsZVNvcnRPcmRlcik6IE56VGFibGVTb3J0T3JkZXIge1xuICAgIGNvbnN0IGluZGV4ID0gc29ydERpcmVjdGlvbnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICBpZiAoaW5kZXggPT09IHNvcnREaXJlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiBzb3J0RGlyZWN0aW9uc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvcnREaXJlY3Rpb25zW2luZGV4ICsgMV07XG4gICAgfVxuICB9XG5cbiAgZW1pdE5leHRTb3J0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xuICAgICAgY29uc3QgbmV4dE9yZGVyID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLnNvcnREaXJlY3Rpb25zLCB0aGlzLnNvcnRPcmRlciEpO1xuICAgICAgdGhpcy5zZXRTb3J0T3JkZXIobmV4dE9yZGVyKTtcbiAgICAgIHRoaXMubWFudWFsQ2xpY2tPcmRlciQubmV4dCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRTb3J0T3JkZXIob3JkZXI6IE56VGFibGVTb3J0T3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRPcmRlckNoYW5nZSQubmV4dChvcmRlcik7XG4gIH1cblxuICBjbGVhclNvcnRPcmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3J0T3JkZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U29ydE9yZGVyKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsdGVyVmFsdWVDaGFuZ2UodmFsdWU6IE56VGFibGVGaWx0ZXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5uekZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDYWxjT3BlcmF0b3IoKTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGNPcGVyYXRvcigpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGNPcGVyYXRvckNoYW5nZSQubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ydE9yZGVyQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9yZGVyID0+IHtcbiAgICAgIGlmICh0aGlzLnNvcnRPcmRlciAhPT0gb3JkZXIpIHtcbiAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5uelNvcnRPcmRlckNoYW5nZS5lbWl0KG9yZGVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlQ2FsY09wZXJhdG9yKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBuelNvcnREaXJlY3Rpb25zLFxuICAgICAgbnpGaWx0ZXJzLFxuICAgICAgbnpTb3J0T3JkZXIsXG4gICAgICBuelNvcnRGbixcbiAgICAgIG56RmlsdGVyRm4sXG4gICAgICBuelNvcnRQcmlvcml0eSxcbiAgICAgIG56RmlsdGVyTXVsdGlwbGUsXG4gICAgICBuelNob3dTb3J0LFxuICAgICAgbnpTaG93RmlsdGVyXG4gICAgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U29ydERpcmVjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm56U29ydERpcmVjdGlvbnMgJiYgdGhpcy5uelNvcnREaXJlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb25zID0gdGhpcy5uelNvcnREaXJlY3Rpb25zO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpTb3J0T3JkZXIpIHtcbiAgICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5uelNvcnRPcmRlcjtcbiAgICAgIHRoaXMuc2V0U29ydE9yZGVyKHRoaXMubnpTb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAobnpTaG93U29ydCkge1xuICAgICAgdGhpcy5pc056U2hvd1NvcnRDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG56U2hvd0ZpbHRlcikge1xuICAgICAgdGhpcy5pc056U2hvd0ZpbHRlckNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc0ZpcnN0Q2hhbmdlID0gKHZhbHVlOiBTaW1wbGVDaGFuZ2UpID0+IHZhbHVlICYmIHZhbHVlLmZpcnN0Q2hhbmdlICYmIHZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmICgoaXNGaXJzdENoYW5nZShuelNvcnRPcmRlcikgfHwgaXNGaXJzdENoYW5nZShuelNvcnRGbikpICYmICF0aGlzLmlzTnpTaG93U29ydENoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93U29ydCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0ZpcnN0Q2hhbmdlKG56RmlsdGVycykgJiYgIXRoaXMuaXNOelNob3dGaWx0ZXJDaGFuZ2VkKSB7XG4gICAgICB0aGlzLm56U2hvd0ZpbHRlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICgobnpGaWx0ZXJzIHx8IG56RmlsdGVyTXVsdGlwbGUpICYmIHRoaXMubnpTaG93RmlsdGVyKSB7XG4gICAgICBjb25zdCBsaXN0T2ZWYWx1ZSA9IHRoaXMubnpGaWx0ZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0uYnlEZWZhdWx0KS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcbiAgICAgIHRoaXMubnpGaWx0ZXJWYWx1ZSA9IHRoaXMubnpGaWx0ZXJNdWx0aXBsZSA/IGxpc3RPZlZhbHVlIDogbGlzdE9mVmFsdWVbMF0gfHwgbnVsbDtcbiAgICB9XG4gICAgaWYgKG56U29ydEZuIHx8IG56RmlsdGVyRm4gfHwgbnpTb3J0UHJpb3JpdHkgfHwgbnpGaWx0ZXJzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNhbGNPcGVyYXRvcigpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==