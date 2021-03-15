/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './pagination-item.component';
import * as ɵngcc4 from './pagination-options.component';

const _c0 = ["containerTemplate"];
function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx_r2.total, ctx_r2.ranges));
} }
function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵlistener("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.jumpPage($event); })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.jumpDiff($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index)("direction", ctx_r3.dir);
} }
function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onPageIndexChange($event); })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onPageSizeChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
} }
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);
    ɵngcc0.ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 7, "li", 2);
    ɵngcc0.ɵɵtemplate(2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showTotal);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
} }
export class NzPaginationDefaultComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.nzSize = 'default';
        this.itemRender = null;
        this.showTotal = null;
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 40];
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.ranges = [0, 0];
        this.listOfPageItem = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.updateRtlStyle();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.updateRtlStyle();
    }
    updateRtlStyle() {
        if (this.dir === 'rtl') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    jumpPage(index) {
        this.onPageIndexChange(index);
    }
    jumpDiff(diff) {
        this.jumpPage(this.pageIndex + diff);
    }
    trackByPageItem(_, value) {
        return `${value.type}-${value.index}`;
    }
    onPageIndexChange(index) {
        this.pageIndexChange.next(index);
    }
    onPageSizeChange(size) {
        this.pageSizeChange.next(size);
    }
    getLastIndex(total, pageSize) {
        return Math.ceil(total / pageSize);
    }
    buildIndexes() {
        const lastIndex = this.getLastIndex(this.total, this.pageSize);
        this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
    }
    getListOfPageItem(pageIndex, lastIndex) {
        const concatWithPrevNext = (listOfPage) => {
            const prevItem = {
                type: 'prev',
                disabled: pageIndex === 1
            };
            const nextItem = {
                type: 'next',
                disabled: pageIndex === lastIndex
            };
            return [prevItem, ...listOfPage, nextItem];
        };
        const generatePage = (start, end) => {
            const list = [];
            for (let i = start; i <= end; i++) {
                list.push({
                    index: i,
                    type: 'page'
                });
            }
            return list;
        };
        if (lastIndex <= 9) {
            return concatWithPrevNext(generatePage(1, lastIndex));
        }
        else {
            const generateRangeItem = (selected, last) => {
                let listOfRange = [];
                const prevFiveItem = {
                    type: 'prev_5'
                };
                const nextFiveItem = {
                    type: 'next_5'
                };
                const firstPageItem = generatePage(1, 1);
                const lastPageItem = generatePage(lastIndex, lastIndex);
                if (selected < 4) {
                    listOfRange = [...generatePage(2, 5), nextFiveItem];
                }
                else if (selected < last - 3) {
                    listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
                }
                else {
                    listOfRange = [prevFiveItem, ...generatePage(last - 4, last - 1)];
                }
                return [...firstPageItem, ...listOfRange, ...lastPageItem];
            };
            return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
        }
    }
    ngOnChanges(changes) {
        const { pageIndex, pageSize, total } = changes;
        if (pageIndex || pageSize || total) {
            this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
            this.buildIndexes();
        }
    }
}
NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) { return new (t || NzPaginationDefaultComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzPaginationDefaultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPaginationDefaultComponent, selectors: [["nz-pagination-default"]], viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { nzSize: "nzSize", itemRender: "itemRender", showTotal: "showTotal", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]], template: function NzPaginationDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzPaginationItemComponent, ɵngcc4.NzPaginationOptionsComponent], encapsulation: 2, changeDetection: 0 });
NzPaginationDefaultComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzPaginationDefaultComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['containerTemplate', { static: true },] }],
    nzSize: [{ type: Input }],
    itemRender: [{ type: Input }],
    showTotal: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    showSizeChanger: [{ type: Input }],
    showQuickJumper: [{ type: Input }],
    total: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    pageIndexChange: [{ type: Output }],
    pageSizeChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'nz-pagination-default',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #containerTemplate>
      <li class="ant-pagination-total-text" *ngIf="showTotal">
        <ng-template [ngTemplateOutlet]="showTotal" [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"></ng-template>
      </li>
      <li
        *ngFor="let page of listOfPageItem; trackBy: trackByPageItem"
        nz-pagination-item
        [locale]="locale"
        [type]="page.type"
        [index]="page.index"
        [disabled]="!!page.disabled"
        [itemRender]="itemRender"
        [active]="pageIndex === page.index"
        (gotoIndex)="jumpPage($event)"
        (diffIndex)="jumpDiff($event)"
        [direction]="dir"
      ></li>
      <div
        nz-pagination-options
        *ngIf="showQuickJumper || showSizeChanger"
        [total]="total"
        [locale]="locale"
        [disabled]="disabled"
        [nzSize]="nzSize"
        [showSizeChanger]="showSizeChanger"
        [showQuickJumper]="showQuickJumper"
        [pageIndex]="pageIndex"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        (pageIndexChange)="onPageIndexChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
      ></div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzSize: [{
            type: Input
        }], itemRender: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], total: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], pageIndexChange: [{
            type: Output
        }], pageSizeChange: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: ['containerTemplate', { static: true }]
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1kZWZhdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24tZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkMzQyxNQUFNLE9BQU8sNEJBQTRCO0FBQUcsSUFxQjFDLFlBQ1UsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsVUFBc0IsRUFDVixjQUE4QjtBQUNuRCxRQUpTLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUNYLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUN0RCxRQXhCVyxXQUFNLEdBQXdCLFNBQVMsQ0FBQztBQUNuRCxRQUFXLGVBQVUsR0FBb0QsSUFBSSxDQUFDO0FBQzlFLFFBQVcsY0FBUyxHQUF1RSxJQUFJLENBQUM7QUFDaEcsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQ1csb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDbkMsUUFBVyxvQkFBZSxH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QUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRTs7Ozs7Oyt4QkFrQ1QsY0FDRjs7NExBQ0k7QUFBQztBQUFzRCxZQWhFMUQsaUJBQWlCO0FBQ2pCLFlBU0EsU0FBUztBQUNULFlBVEEsVUFBVTtBQUNWLFlBTmtCLGNBQWMsdUJBNEY3QixRQUFRO0FBQU07QUFBRztBQUViLHVCQTFCTixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQU8scUJBQ3RELEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssOEJBQ1YsTUFBTTtBQUFLLDZCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB9IGZyb20gJy4vcGFnaW5hdGlvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBhZ2luYXRpb24tZGVmYXVsdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRhaW5lclRlbXBsYXRlPlxuICAgICAgPGxpIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tdG90YWwtdGV4dFwiICpuZ0lmPVwic2hvd1RvdGFsXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzaG93VG90YWxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHRvdGFsLCByYW5nZTogcmFuZ2VzIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBsaXN0T2ZQYWdlSXRlbTsgdHJhY2tCeTogdHJhY2tCeVBhZ2VJdGVtXCJcbiAgICAgICAgbnotcGFnaW5hdGlvbi1pdGVtXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW3R5cGVdPVwicGFnZS50eXBlXCJcbiAgICAgICAgW2luZGV4XT1cInBhZ2UuaW5kZXhcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiISFwYWdlLmRpc2FibGVkXCJcbiAgICAgICAgW2l0ZW1SZW5kZXJdPVwiaXRlbVJlbmRlclwiXG4gICAgICAgIFthY3RpdmVdPVwicGFnZUluZGV4ID09PSBwYWdlLmluZGV4XCJcbiAgICAgICAgKGdvdG9JbmRleCk9XCJqdW1wUGFnZSgkZXZlbnQpXCJcbiAgICAgICAgKGRpZmZJbmRleCk9XCJqdW1wRGlmZigkZXZlbnQpXCJcbiAgICAgICAgW2RpcmVjdGlvbl09XCJkaXJcIlxuICAgICAgPjwvbGk+XG4gICAgICA8ZGl2XG4gICAgICAgIG56LXBhZ2luYXRpb24tb3B0aW9uc1xuICAgICAgICAqbmdJZj1cInNob3dRdWlja0p1bXBlciB8fCBzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgICBbdG90YWxdPVwidG90YWxcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwibnpTaXplXCJcbiAgICAgICAgW3Nob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgICBbc2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXG4gICAgICAgIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAocGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAocGFnZVNpemVDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkRlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdG90YWwgPSAwO1xuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzEwLCAyMCwgMzAsIDQwXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgcmFuZ2VzID0gWzAsIDBdO1xuICBsaXN0T2ZQYWdlSXRlbTogQXJyYXk8UGFydGlhbDxOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50Pj4gPSBbXTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICByZW5kZXJlci5yZW1vdmVDaGlsZChyZW5kZXJlci5wYXJlbnROb2RlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMudXBkYXRlUnRsU3R5bGUoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy51cGRhdGVSdGxTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdGxTdHlsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBhZ2luYXRpb24tcnRsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGFnaW5hdGlvbi1ydGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5vblBhZ2VJbmRleENoYW5nZShpbmRleCk7XG4gIH1cblxuICBqdW1wRGlmZihkaWZmOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMucGFnZUluZGV4ICsgZGlmZik7XG4gIH1cblxuICB0cmFja0J5UGFnZUl0ZW0oXzogbnVtYmVyLCB2YWx1ZTogUGFydGlhbDxOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50Pik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ZhbHVlLnR5cGV9LSR7dmFsdWUuaW5kZXh9YDtcbiAgfVxuXG4gIG9uUGFnZUluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU2l6ZUNoYW5nZS5uZXh0KHNpemUpO1xuICB9XG5cbiAgZ2V0TGFzdEluZGV4KHRvdGFsOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gIH1cblxuICBidWlsZEluZGV4ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodGhpcy50b3RhbCwgdGhpcy5wYWdlU2l6ZSk7XG4gICAgdGhpcy5saXN0T2ZQYWdlSXRlbSA9IHRoaXMuZ2V0TGlzdE9mUGFnZUl0ZW0odGhpcy5wYWdlSW5kZXgsIGxhc3RJbmRleCk7XG4gIH1cblxuICBnZXRMaXN0T2ZQYWdlSXRlbShwYWdlSW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBBcnJheTxQYXJ0aWFsPE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQ+PiB7XG4gICAgY29uc3QgY29uY2F0V2l0aFByZXZOZXh0ID0gKGxpc3RPZlBhZ2U6IEFycmF5PFBhcnRpYWw8TnpQYWdpbmF0aW9uSXRlbUNvbXBvbmVudD4+KSA9PiB7XG4gICAgICBjb25zdCBwcmV2SXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3ByZXYnLFxuICAgICAgICBkaXNhYmxlZDogcGFnZUluZGV4ID09PSAxXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV4dEl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICduZXh0JyxcbiAgICAgICAgZGlzYWJsZWQ6IHBhZ2VJbmRleCA9PT0gbGFzdEluZGV4XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFtwcmV2SXRlbSwgLi4ubGlzdE9mUGFnZSwgbmV4dEl0ZW1dO1xuICAgIH07XG4gICAgY29uc3QgZ2VuZXJhdGVQYWdlID0gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQXJyYXk8UGFydGlhbDxOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50Pj4gPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdHlwZTogJ3BhZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcbiAgICBpZiAobGFzdEluZGV4IDw9IDkpIHtcbiAgICAgIHJldHVybiBjb25jYXRXaXRoUHJldk5leHQoZ2VuZXJhdGVQYWdlKDEsIGxhc3RJbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmF0ZVJhbmdlSXRlbSA9IChzZWxlY3RlZDogbnVtYmVyLCBsYXN0OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxpc3RPZlJhbmdlID0gW107XG4gICAgICAgIGNvbnN0IHByZXZGaXZlSXRlbSA9IHtcbiAgICAgICAgICB0eXBlOiAncHJldl81J1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXh0Rml2ZUl0ZW0gPSB7XG4gICAgICAgICAgdHlwZTogJ25leHRfNSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlSXRlbSA9IGdlbmVyYXRlUGFnZSgxLCAxKTtcbiAgICAgICAgY29uc3QgbGFzdFBhZ2VJdGVtID0gZ2VuZXJhdGVQYWdlKGxhc3RJbmRleCwgbGFzdEluZGV4KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkIDwgNCkge1xuICAgICAgICAgIGxpc3RPZlJhbmdlID0gWy4uLmdlbmVyYXRlUGFnZSgyLCA1KSwgbmV4dEZpdmVJdGVtXTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA8IGxhc3QgLSAzKSB7XG4gICAgICAgICAgbGlzdE9mUmFuZ2UgPSBbcHJldkZpdmVJdGVtLCAuLi5nZW5lcmF0ZVBhZ2Uoc2VsZWN0ZWQgLSAyLCBzZWxlY3RlZCArIDIpLCBuZXh0Rml2ZUl0ZW1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RPZlJhbmdlID0gW3ByZXZGaXZlSXRlbSwgLi4uZ2VuZXJhdGVQYWdlKGxhc3QgLSA0LCBsYXN0IC0gMSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbLi4uZmlyc3RQYWdlSXRlbSwgLi4ubGlzdE9mUmFuZ2UsIC4uLmxhc3RQYWdlSXRlbV07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNvbmNhdFdpdGhQcmV2TmV4dChnZW5lcmF0ZVJhbmdlSXRlbShwYWdlSW5kZXgsIGxhc3RJbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIHRvdGFsIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChwYWdlSW5kZXggfHwgcGFnZVNpemUgfHwgdG90YWwpIHtcbiAgICAgIHRoaXMucmFuZ2VzID0gWyh0aGlzLnBhZ2VJbmRleCAtIDEpICogdGhpcy5wYWdlU2l6ZSArIDEsIE1hdGgubWluKHRoaXMucGFnZUluZGV4ICogdGhpcy5wYWdlU2l6ZSwgdGhpcy50b3RhbCldO1xuICAgICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==