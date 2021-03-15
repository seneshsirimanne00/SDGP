/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { InputBoolean, measureScrollbar } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTableInnerScrollComponent } from './table-inner-scroll.component';
import { NzTableVirtualScrollDirective } from './table-virtual-scroll.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '../table-style.service';
import * as ɵngcc4 from '../table-data.service';
import * as ɵngcc5 from '@angular/cdk/bidi';
import * as ɵngcc6 from 'ng-zorro-antd/spin';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from './title-footer.component';
import * as ɵngcc9 from './table-inner-scroll.component';
import * as ɵngcc10 from './table-inner-default.component';
import * as ɵngcc11 from 'ng-zorro-antd/pagination';

function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r8 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-table-title-footer", 11);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r2.nzTitle);
} }
function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-table-inner-scroll", 12);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r10 = ɵngcc0.ɵɵreference(13);
    const _r1 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵproperty("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
} }
function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-table-inner-default", 13);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    const _r10 = ɵngcc0.ɵɵreference(13);
    ɵngcc0.ɵɵproperty("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
} }
function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-table-title-footer", 14);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("footer", ctx_r6.nzFooter);
} }
function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r8 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-pagination", 16);
    ɵngcc0.ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onPageSizeChange($event); })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onPageIndexChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("hidden", !ctx_r14.showPagination)("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzPaginationType === "small" ? "small" : ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
} }
function NzTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 12, "nz-pagination", 15);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
} }
function NzTableComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c0 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'table';
export class NzTableComponent {
    constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzTableStyleService = nzTableStyleService;
        this.nzTableDataService = nzTableDataService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzTableLayout = 'auto';
        this.nzShowTotal = null;
        this.nzItemRender = null;
        this.nzTitle = null;
        this.nzFooter = null;
        this.nzNoResult = undefined;
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzVirtualForTrackBy = index => index;
        this.nzLoadingDelay = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzPaginationType = 'default';
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzOuterBordered = false;
        this.nzLoadingIndicator = null;
        this.nzBordered = false;
        this.nzSize = 'default';
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzQueryParams = new EventEmitter();
        this.nzCurrentPageDataChange = new EventEmitter();
        /** public data for ngFor tr */
        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.theadTemplate = null;
        this.listOfAutoColWidth = [];
        this.listOfManualColWidth = [];
        this.hasFixLeft = false;
        this.hasFixRight = false;
        this.showPagination = true;
        this.destroy$ = new Subject();
        this.loading$ = new BehaviorSubject(false);
        this.templateMode$ = new BehaviorSubject(false);
        this.dir = 'ltr';
        this.verticalScrollBarWidth = 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-wrapper');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    onPageSizeChange(size) {
        this.nzTableDataService.updatePageSize(size);
    }
    onPageIndexChange(index) {
        this.nzTableDataService.updatePageIndex(index);
    }
    ngOnInit() {
        var _a;
        const { pageIndexDistinct$, pageSizeDistinct$, listOfCurrentPageData$, total$, queryParams$ } = this.nzTableDataService;
        const { theadTemplate$, hasFixLeft$, hasFixRight$ } = this.nzTableStyleService;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        queryParams$.pipe(takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
        pageIndexDistinct$.pipe(takeUntil(this.destroy$)).subscribe(pageIndex => {
            if (pageIndex !== this.nzPageIndex) {
                this.nzPageIndex = pageIndex;
                this.nzPageIndexChange.next(pageIndex);
            }
        });
        pageSizeDistinct$.pipe(takeUntil(this.destroy$)).subscribe(pageSize => {
            if (pageSize !== this.nzPageSize) {
                this.nzPageSize = pageSize;
                this.nzPageSizeChange.next(pageSize);
            }
        });
        total$
            .pipe(takeUntil(this.destroy$), filter(() => this.nzFrontPagination))
            .subscribe(total => {
            if (total !== this.nzTotal) {
                this.nzTotal = total;
                this.cdr.markForCheck();
            }
        });
        listOfCurrentPageData$.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.data = data;
            this.nzCurrentPageDataChange.next(data);
            this.cdr.markForCheck();
        });
        theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe(theadTemplate => {
            this.theadTemplate = theadTemplate;
            this.cdr.markForCheck();
        });
        hasFixLeft$.pipe(takeUntil(this.destroy$)).subscribe(hasFixLeft => {
            this.hasFixLeft = hasFixLeft;
            this.cdr.markForCheck();
        });
        hasFixRight$.pipe(takeUntil(this.destroy$)).subscribe(hasFixRight => {
            this.hasFixRight = hasFixRight;
            this.cdr.markForCheck();
        });
        combineLatest([total$, this.loading$, this.templateMode$])
            .pipe(map(([total, loading, templateMode]) => total === 0 && !loading && !templateMode), takeUntil(this.destroy$))
            .subscribe(empty => {
            this.nzTableStyleService.setShowEmpty(empty);
        });
        this.verticalScrollBarWidth = measureScrollbar('vertical');
        this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntil(this.destroy$)).subscribe(listOfWidth => {
            this.listOfAutoColWidth = listOfWidth;
            this.cdr.markForCheck();
        });
        this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntil(this.destroy$)).subscribe(listOfWidth => {
            this.listOfManualColWidth = listOfWidth;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzScroll, nzPageIndex, nzPageSize, nzFrontPagination, nzData, nzWidthConfig, nzNoResult, nzLoading, nzTemplateMode } = changes;
        if (nzPageIndex) {
            this.nzTableDataService.updatePageIndex(this.nzPageIndex);
        }
        if (nzPageSize) {
            this.nzTableDataService.updatePageSize(this.nzPageSize);
        }
        if (nzData) {
            this.nzData = this.nzData || [];
            this.nzTableDataService.updateListOfData(this.nzData);
        }
        if (nzFrontPagination) {
            this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
        }
        if (nzScroll) {
            this.setScrollOnChanges();
        }
        if (nzWidthConfig) {
            this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
        }
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
        if (nzTemplateMode) {
            this.templateMode$.next(this.nzTemplateMode);
        }
        if (nzNoResult) {
            this.nzTableStyleService.setNoResult(this.nzNoResult);
        }
        this.updateShowPagination();
    }
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map(([entry]) => {
            const { width } = entry.target.getBoundingClientRect();
            const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
            return Math.floor(width - scrollBarWidth);
        }), takeUntil(this.destroy$))
            .subscribe(this.nzTableStyleService.hostWidth$);
        if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
            this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setScrollOnChanges() {
        this.scrollX = (this.nzScroll && this.nzScroll.x) || null;
        this.scrollY = (this.nzScroll && this.nzScroll.y) || null;
        this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
    }
    updateShowPagination() {
        this.showPagination =
            (this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize) ||
                (this.nzData.length > 0 && !this.nzHideOnSinglePage) ||
                (!this.nzFrontPagination && this.nzTotal > this.nzPageSize);
    }
}
NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzTableStyleService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzTableDataService), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8)); };
NzTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTableVirtualScrollDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
    } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTableInnerScrollComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTableInnerScrollComponent = _t.first);
    } }, hostVars: 2, hostBindings: function NzTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-wrapper-rtl", ctx.dir === "rtl");
    } }, inputs: { nzTableLayout: "nzTableLayout", nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzTotal: "nzTotal", nzWidthConfig: "nzWidthConfig", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzPaginationType: "nzPaginationType", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzOuterBordered: "nzOuterBordered", nzLoadingIndicator: "nzLoadingIndicator", nzBordered: "nzBordered", nzSize: "nzSize", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzQueryParams: "nzQueryParams", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [ɵngcc0.ɵɵProvidersFeature([NzTableStyleService, NzTableDataService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 14, vars: 27, consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "nz-spin", 0);
        ɵngcc0.ɵɵtemplate(1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵtemplate(4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 4);
        ɵngcc0.ɵɵtemplate(5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 5);
        ɵngcc0.ɵɵtemplate(6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r4 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", _r4);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzFooter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
    } }, directives: [ɵngcc6.NzSpinComponent, ɵngcc7.NgIf, ɵngcc7.NgTemplateOutlet, ɵngcc8.NzTableTitleFooterComponent, ɵngcc9.NzTableInnerScrollComponent, ɵngcc10.NzTableInnerDefaultComponent, ɵngcc11.NzPaginationComponent], encapsulation: 2, changeDetection: 0 });
NzTableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzResizeObserver },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzTableStyleService },
    { type: NzTableDataService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTableComponent.propDecorators = {
    nzTableLayout: [{ type: Input }],
    nzShowTotal: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualForTrackBy: [{ type: Input }],
    nzLoadingDelay: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzWidthConfig: [{ type: Input }],
    nzData: [{ type: Input }],
    nzPaginationPosition: [{ type: Input }],
    nzScroll: [{ type: Input }],
    nzPaginationType: [{ type: Input }],
    nzFrontPagination: [{ type: Input }],
    nzTemplateMode: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzOuterBordered: [{ type: Input }],
    nzLoadingIndicator: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzQueryParams: [{ type: Output }],
    nzCurrentPageDataChange: [{ type: Output }],
    nzVirtualScrollDirective: [{ type: ContentChild, args: [NzTableVirtualScrollDirective, { static: false },] }],
    nzTableInnerScrollComponent: [{ type: ViewChild, args: [NzTableInnerScrollComponent,] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzFrontPagination", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzTemplateMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzShowPagination", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzOuterBordered", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTableComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzSimple", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                providers: [NzTableStyleService, NzTableDataService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'top'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-rtl]="dir === 'rtl'"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.nz-table-out-bordered]="nzOuterBordered && !nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        <nz-table-title-footer [title]="nzTitle" *ngIf="nzTitle"></nz-table-title-footer>
        <nz-table-inner-scroll
          *ngIf="scrollY || scrollX; else defaultTemplate"
          [data]="data"
          [scrollX]="scrollX"
          [scrollY]="scrollY"
          [contentTemplate]="contentTemplate"
          [listOfColWidth]="listOfAutoColWidth"
          [theadTemplate]="theadTemplate"
          [verticalScrollBarWidth]="verticalScrollBarWidth"
          [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
          [virtualItemSize]="nzVirtualItemSize"
          [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [virtualMinBufferPx]="nzVirtualMinBufferPx"
          [tableMainElement]="tableMainElement"
          [virtualForTrackBy]="nzVirtualForTrackBy"
        ></nz-table-inner-scroll>
        <ng-template #defaultTemplate>
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
          ></nz-table-inner-default>
        </ng-template>
        <nz-table-title-footer [footer]="nzFooter" *ngIf="nzFooter"></nz-table-title-footer>
      </div>
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
    </nz-spin>
    <ng-template #paginationTemplate>
      <nz-pagination
        *ngIf="nzShowPagination && data.length"
        [hidden]="!showPagination"
        class="ant-table-pagination ant-table-pagination-right"
        [nzShowSizeChanger]="nzShowSizeChanger"
        [nzPageSizeOptions]="nzPageSizeOptions"
        [nzItemRender]="nzItemRender!"
        [nzShowQuickJumper]="nzShowQuickJumper"
        [nzHideOnSinglePage]="nzHideOnSinglePage"
        [nzShowTotal]="nzShowTotal"
        [nzSize]="nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'"
        [nzPageSize]="nzPageSize"
        [nzTotal]="nzTotal"
        [nzSimple]="nzSimple"
        [nzPageIndex]="nzPageIndex"
        (nzPageSizeChange)="onPageSizeChange($event)"
        (nzPageIndexChange)="onPageIndexChange($event)"
      ></nz-pagination>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-table-wrapper-rtl]': 'dir === "rtl"'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzResizeObserver }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.NzTableStyleService }, { type: ɵngcc4.NzTableDataService }, { type: ɵngcc5.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzTableLayout: [{
            type: Input
        }], nzShowTotal: [{
            type: Input
        }], nzItemRender: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzNoResult: [{
            type: Input
        }], nzPageSizeOptions: [{
            type: Input
        }], nzVirtualItemSize: [{
            type: Input
        }], nzVirtualMaxBufferPx: [{
            type: Input
        }], nzVirtualMinBufferPx: [{
            type: Input
        }], nzVirtualForTrackBy: [{
            type: Input
        }], nzLoadingDelay: [{
            type: Input
        }], nzPageIndex: [{
            type: Input
        }], nzPageSize: [{
            type: Input
        }], nzTotal: [{
            type: Input
        }], nzWidthConfig: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzPaginationPosition: [{
            type: Input
        }], nzScroll: [{
            type: Input
        }], nzPaginationType: [{
            type: Input
        }], nzFrontPagination: [{
            type: Input
        }], nzTemplateMode: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzOuterBordered: [{
            type: Input
        }], nzLoadingIndicator: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzShowSizeChanger: [{
            type: Input
        }], nzHideOnSinglePage: [{
            type: Input
        }], nzShowQuickJumper: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzPageSizeChange: [{
            type: Output
        }], nzPageIndexChange: [{
            type: Output
        }], nzQueryParams: [{
            type: Output
        }], nzCurrentPageDataChange: [{
            type: Output
        }], nzVirtualScrollDirective: [{
            type: ContentChild,
            args: [NzTableVirtualScrollDirective, { static: false }]
        }], nzTableInnerScrollComponent: [{
            type: ViewChild,
            args: [NzTableInnerScrollComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVM3RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixNQUFNLHFCQUFxQixHQUFnQixPQUFPLENBQUM7QUFzRm5ELE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQThFOUIsWUFDVSxVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsR0FBc0IsRUFDdEIsbUJBQXdDLEVBQ3hDLGtCQUFzQyxFQUMxQixjQUE4QjtBQUNuRCxRQVBTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0FBQUMsUUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDakMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0FBQUMsUUFDekMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtBQUFDLFFBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUN0RCxRQXJGVyxrQkFBYSxHQUFnQixxQkFBcUIsQ0FBQztBQUM5RCxRQVlXLGtCQUFhLEdBQWtCLE1BQU0sQ0FBQztBQUNqRCxRQUFXLGdCQUFXLEdBQXVFLElBQUksQ0FBQztBQUNsRyxRQUFXLGlCQUFZLEdBQW9ELElBQUksQ0FBQztBQUNoRixRQUFXLFlBQU8sR0FBMkMsSUFBSSxDQUFDO0FBQ2xFLFFBQVcsYUFBUSxHQUEyQyxJQUFJLENBQUM7QUFDbkUsUUFBVyxlQUFVLEdBQWdELFNBQVMsQ0FBQztBQUMvRSxRQUFXLHNCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELFFBQVcsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLFFBQVcseUJBQW9CLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLFFBQVcseUJBQW9CLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLFFBQVcsd0JBQW1CLEdBQWlDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQzlFLFFBQVcsbUJBQWMsR0FBRyxDQUFDLENBQUM7QUFDOUIsUUFBVyxnQkFBVyxHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFXLGVBQVUsR0FBRyxFQUFFLENBQUM7QUFDM0IsUUFBVyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFFBQVcsa0JBQWEsR0FBaUMsRUFBRSxDQUFDO0FBQzVELFFBQVcsV0FBTSxHQUFxQixFQUFFLENBQUM7QUFDekMsUUFBVyx5QkFBb0IsR0FBOEIsUUFBUSxDQUFDO0FBQ3RFLFFBQVcsYUFBUSxHQUE2QyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3JGLFFBQVcscUJBQWdCLEdBQTBCLFNBQVMsQ0FBQztBQUMvRCxRQUEyQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7QUFDcEQsUUFBMkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDbEQsUUFBMkIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQ25ELFFBQTJCLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDN0MsUUFBMkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDbkQsUUFBeUIsdUJBQWtCLEdBQWtDLElBQUksQ0FBQztBQUNsRixRQUF5QyxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3JFLFFBQXlCLFdBQU0sR0FBZ0IsU0FBUyxDQUFDO0FBQ3pELFFBQXlDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztBQUM1RSxRQUF5Qyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7QUFDN0UsUUFBeUMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0FBQzVFLFFBQXlDLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDbkUsUUFBcUIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztBQUNuRSxRQUFxQixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ3BFLFFBQXFCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7QUFDNUUsUUFBcUIsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7QUFDOUYsUUFDRSwrQkFBK0I7QUFDakMsUUFBUyxTQUFJLEdBQXFCLEVBQUUsQ0FBQztBQUNyQyxRQUNFLFlBQU8sR0FBa0IsSUFBSSxDQUFDO0FBQ2hDLFFBQUUsWUFBTyxHQUFrQixJQUFJLENBQUM7QUFDaEMsUUFBRSxrQkFBYSxHQUFrQyxJQUFJLENBQUM7QUFDdEQsUUFBRSx1QkFBa0IsR0FBaUMsRUFBRSxDQUFDO0FBQ3hELFFBQUUseUJBQW9CLEdBQWlDLEVBQUUsQ0FBQztBQUMxRCxRQUFFLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDckIsUUFBRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUN0QixRQUFFLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDekMsUUFBVSxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7QUFDekQsUUFBVSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0FBQzlELFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUdFLDJCQUFzQixHQUFHLENBQUMsQ0FBQztBQUM3QixRQWlCSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDckUsUUFBSSxJQUFJLENBQUMsZUFBZTtBQUN4QixhQUFPLGdDQUFnQyxDQUFDLHFCQUFxQixDQUFDO0FBQzlELGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsYUFBTyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3RCLFlBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoQyxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUExQkUsZ0JBQWdCLENBQUMsSUFBWTtBQUFJLFFBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxLQUFhO0FBQUksUUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFDSCxJQW9CRSxRQUFRO0FBQUs7QUFDTCxRQUFOLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzVILFFBQUksTUFBTSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQ25GLFFBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUN6QyxRQUFJLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtBQUNsRyxZQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsRUFBRTtBQUNQLFFBQ0ksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5RSxRQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQzVFLFlBQU0sSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMxQyxnQkFBUSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUNyQyxnQkFBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLGFBQU87QUFDUCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMxRSxZQUFNLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDeEMsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksTUFBTTtBQUNWLGFBQU8sSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FDckM7QUFDUCxhQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN6QixZQUFRLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDcEMsZ0JBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDL0IsZ0JBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNsQyxhQUFTO0FBQ1QsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFFBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDM0UsWUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUM1RSxZQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3pDLFlBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDdEUsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNuQyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3hFLFlBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDckMsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5RCxhQUFPLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDakYsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7QUFDUCxhQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN6QixZQUFRLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFFBQ0ksSUFBSSxDQUFDLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9ELFFBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzNHLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUM1QyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3pHLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztBQUM5QyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDM0ksUUFBSSxJQUFJLFdBQVcsRUFBRTtBQUNyQixZQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hFLFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUQsU0FBSztBQUNMLFFBQUksSUFBSSxNQUFNLEVBQUU7QUFDaEIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1RCxTQUFLO0FBQ0wsUUFBSSxJQUFJLGlCQUFpQixFQUFFO0FBQzNCLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVFLFNBQUs7QUFDTCxRQUFJLElBQUksUUFBUSxFQUFFO0FBQ2xCLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQUksSUFBSSxhQUFhLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZFLFNBQUs7QUFDTCxRQUFJLElBQUksU0FBUyxFQUFFO0FBQ25CLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLFNBQUs7QUFDTCxRQUFJLElBQUksY0FBYyxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25ELFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUQsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQUssUUFDbEIsSUFBSSxDQUFDLGdCQUFnQjtBQUN6QixhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQy9CLGFBQU8sSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtBQUN4QixZQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDakUsWUFBVSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRixZQUFVLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDcEQsUUFBUSxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjtBQUNQLGFBQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksSUFBSSxDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx3QkFBd0IsRUFBRTtBQUN2RyxZQUFNLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQUM7QUFDaEcsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDVSxrQkFBa0I7QUFBSyxRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUM5RCxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQzlELFFBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRSxJQUFFLENBQUM7QUFDSCxJQUNVLG9CQUFvQjtBQUFLLFFBQy9CLElBQUksQ0FBQyxjQUFjO0FBQ3ZCLFlBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN2RSxnQkFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUMxRCxnQkFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xFLElBQUUsQ0FBQztBQUNIOzRDQXBVQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFVBQVUsa0JBQ3BCLFFBQVEsRUFBRSxTQUFTLGtCQUNuQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQyxrQkFDcEQsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7bTBFQXdFVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osK0JBQStCLEVBQUUsZUFBZSxrQkFDakQsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MFFBQ0k7QUFBQztBQUEwQyxZQXhIOUMsVUFBVTtBQUNWLFlBY08sZ0JBQWdCO0FBQUksWUFEUCxlQUFlO0FBQUksWUFqQnZDLGlCQUFpQjtBQUNqQixZQXdCTyxtQkFBbUI7QUFBSSxZQUR2QixrQkFBa0I7QUFBSSxZQTdCWCxjQUFjLHVCQXFON0IsUUFBUTtBQUFNO0FBQUc7QUFDbkIsNEJBeEVBLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssbUNBQ1YsS0FBSztBQUFLLG1DQUNWLEtBQUs7QUFBSyxrQ0FDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssbUNBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssK0JBQ1YsTUFBTTtBQUFLLGdDQUNYLE1BQU07QUFBSyw0QkFDWCxNQUFNO0FBQUssc0NBQ1gsTUFBTTtBQUFLLHVDQWlCWCxZQUFZLFNBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzNELDBDQUNGLFNBQVMsU0FBQywyQkFBMkI7QUFBTTtBQWxDbkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNmLDJEQUR1QztBQUN6QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2Isd0RBRG1DO0FBQ3ZCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZCwwREFEcUM7QUFDeEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNSLG1EQUR5QjtBQUNsQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2QseURBRHFDO0FBQzFCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsNERBQWtCO0FBQ3pDO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUMvQixvREFEMEQ7QUFDNUM7QUFBYSxJQUExQixVQUFVLEVBQUU7QUFBRTtBQUNwQixnREFEbUQ7QUFDaEI7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBQ3RDLDJEQUR3RTtBQUNuQztBQUFhLElBQTFDLFVBQVUsRUFBRTtBQUFFLElBQUEsWUFBWSxFQUFFO0FBQUU7QUFDdkMsNERBRDBFO0FBQ3BDO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUN0QywyREFEd0U7QUFDbkM7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBQzdCLGtEQURzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ25FO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpSZXNpemVPYnNlcnZlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9yZXNpemUtb2JzZXJ2ZXJzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpUYWJsZVN0eWxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLXN0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTnpUYWJsZURhdGEsXG4gIE56VGFibGVMYXlvdXQsXG4gIE56VGFibGVQYWdpbmF0aW9uUG9zaXRpb24sXG4gIE56VGFibGVQYWdpbmF0aW9uVHlwZSxcbiAgTnpUYWJsZVF1ZXJ5UGFyYW1zLFxuICBOelRhYmxlU2l6ZVxufSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBOelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWlubmVyLXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJsZVZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJsZScsXG4gIGV4cG9ydEFzOiAnbnpUYWJsZScsXG4gIHByb3ZpZGVyczogW056VGFibGVTdHlsZVNlcnZpY2UsIE56VGFibGVEYXRhU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc3BpbiBbbnpEZWxheV09XCJuekxvYWRpbmdEZWxheVwiIFtuelNwaW5uaW5nXT1cIm56TG9hZGluZ1wiIFtuekluZGljYXRvcl09XCJuekxvYWRpbmdJbmRpY2F0b3JcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnIHx8IG56UGFnaW5hdGlvblBvc2l0aW9uID09PSAndG9wJ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGRpdlxuICAgICAgICAjdGFibGVNYWluRWxlbWVudFxuICAgICAgICBjbGFzcz1cImFudC10YWJsZVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpeGVkLWhlYWRlcl09XCJuekRhdGEubGVuZ3RoICYmIHNjcm9sbFlcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpeGVkLWNvbHVtbl09XCJzY3JvbGxYXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1oYXMtZml4LWxlZnRdPVwiaGFzRml4TGVmdFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtaGFzLWZpeC1yaWdodF09XCJoYXNGaXhSaWdodFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtYm9yZGVyZWRdPVwibnpCb3JkZXJlZFwiXG4gICAgICAgIFtjbGFzcy5uei10YWJsZS1vdXQtYm9yZGVyZWRdPVwibnpPdXRlckJvcmRlcmVkICYmICFuekJvcmRlcmVkXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1taWRkbGVdPVwibnpTaXplID09PSAnbWlkZGxlJ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc21hbGxdPVwibnpTaXplID09PSAnc21hbGwnXCJcbiAgICAgID5cbiAgICAgICAgPG56LXRhYmxlLXRpdGxlLWZvb3RlciBbdGl0bGVdPVwibnpUaXRsZVwiICpuZ0lmPVwibnpUaXRsZVwiPjwvbnotdGFibGUtdGl0bGUtZm9vdGVyPlxuICAgICAgICA8bnotdGFibGUtaW5uZXItc2Nyb2xsXG4gICAgICAgICAgKm5nSWY9XCJzY3JvbGxZIHx8IHNjcm9sbFg7IGVsc2UgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgICBbc2Nyb2xsWF09XCJzY3JvbGxYXCJcbiAgICAgICAgICBbc2Nyb2xsWV09XCJzY3JvbGxZXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgW2xpc3RPZkNvbFdpZHRoXT1cImxpc3RPZkF1dG9Db2xXaWR0aFwiXG4gICAgICAgICAgW3RoZWFkVGVtcGxhdGVdPVwidGhlYWRUZW1wbGF0ZVwiXG4gICAgICAgICAgW3ZlcnRpY2FsU2Nyb2xsQmFyV2lkdGhdPVwidmVydGljYWxTY3JvbGxCYXJXaWR0aFwiXG4gICAgICAgICAgW3ZpcnR1YWxUZW1wbGF0ZV09XCJuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgPyBuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUudGVtcGxhdGVSZWYgOiBudWxsXCJcbiAgICAgICAgICBbdmlydHVhbEl0ZW1TaXplXT1cIm56VmlydHVhbEl0ZW1TaXplXCJcbiAgICAgICAgICBbdmlydHVhbE1heEJ1ZmZlclB4XT1cIm56VmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbdmlydHVhbE1pbkJ1ZmZlclB4XT1cIm56VmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgICAgICAgICBbdGFibGVNYWluRWxlbWVudF09XCJ0YWJsZU1haW5FbGVtZW50XCJcbiAgICAgICAgICBbdmlydHVhbEZvclRyYWNrQnldPVwibnpWaXJ0dWFsRm9yVHJhY2tCeVwiXG4gICAgICAgID48L256LXRhYmxlLWlubmVyLXNjcm9sbD5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgICAgPG56LXRhYmxlLWlubmVyLWRlZmF1bHRcbiAgICAgICAgICAgIFt0YWJsZUxheW91dF09XCJuelRhYmxlTGF5b3V0XCJcbiAgICAgICAgICAgIFtsaXN0T2ZDb2xXaWR0aF09XCJsaXN0T2ZNYW51YWxDb2xXaWR0aFwiXG4gICAgICAgICAgICBbdGhlYWRUZW1wbGF0ZV09XCJ0aGVhZFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVdPVwiY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgICA+PC9uei10YWJsZS1pbm5lci1kZWZhdWx0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bnotdGFibGUtdGl0bGUtZm9vdGVyIFtmb290ZXJdPVwibnpGb290ZXJcIiAqbmdJZj1cIm56Rm9vdGVyXCI+PC9uei10YWJsZS10aXRsZS1mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnIHx8IG56UGFnaW5hdGlvblBvc2l0aW9uID09PSAnYm90dG9tJ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotc3Bpbj5cbiAgICA8bmctdGVtcGxhdGUgI3BhZ2luYXRpb25UZW1wbGF0ZT5cbiAgICAgIDxuei1wYWdpbmF0aW9uXG4gICAgICAgICpuZ0lmPVwibnpTaG93UGFnaW5hdGlvbiAmJiBkYXRhLmxlbmd0aFwiXG4gICAgICAgIFtoaWRkZW5dPVwiIXNob3dQYWdpbmF0aW9uXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFibGUtcGFnaW5hdGlvbiBhbnQtdGFibGUtcGFnaW5hdGlvbi1yaWdodFwiXG4gICAgICAgIFtuelNob3dTaXplQ2hhbmdlcl09XCJuelNob3dTaXplQ2hhbmdlclwiXG4gICAgICAgIFtuelBhZ2VTaXplT3B0aW9uc109XCJuelBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgIFtuekl0ZW1SZW5kZXJdPVwibnpJdGVtUmVuZGVyIVwiXG4gICAgICAgIFtuelNob3dRdWlja0p1bXBlcl09XCJuelNob3dRdWlja0p1bXBlclwiXG4gICAgICAgIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwibnpIaWRlT25TaW5nbGVQYWdlXCJcbiAgICAgICAgW256U2hvd1RvdGFsXT1cIm56U2hvd1RvdGFsXCJcbiAgICAgICAgW256U2l6ZV09XCJuelBhZ2luYXRpb25UeXBlID09PSAnc21hbGwnID8gJ3NtYWxsJyA6IG56U2l6ZSA9PT0gJ2RlZmF1bHQnID8gJ2RlZmF1bHQnIDogJ3NtYWxsJ1wiXG4gICAgICAgIFtuelBhZ2VTaXplXT1cIm56UGFnZVNpemVcIlxuICAgICAgICBbbnpUb3RhbF09XCJuelRvdGFsXCJcbiAgICAgICAgW256U2ltcGxlXT1cIm56U2ltcGxlXCJcbiAgICAgICAgW256UGFnZUluZGV4XT1cIm56UGFnZUluZGV4XCJcbiAgICAgICAgKG56UGFnZVNpemVDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvbnotcGFnaW5hdGlvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS13cmFwcGVyLXJ0bF0nOiAnZGlyID09PSBcInJ0bFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVDb21wb25lbnQ8VCA9IE56U2FmZUFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RnJvbnRQYWdpbmF0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelRlbXBsYXRlTW9kZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93UGFnaW5hdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekJvcmRlcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek91dGVyQm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NpemVDaGFuZ2VyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVPblNpbmdsZVBhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1F1aWNrSnVtcGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNpbXBsZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56VGFibGVMYXlvdXQ6IE56VGFibGVMYXlvdXQgPSAnYXV0byc7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuek5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xuICBASW5wdXQoKSBuelZpcnR1YWxJdGVtU2l6ZSA9IDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBuelZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgbnpWaXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIG56UGFnZUluZGV4ID0gMTtcbiAgQElucHV0KCkgbnpQYWdlU2l6ZSA9IDEwO1xuICBASW5wdXQoKSBuelRvdGFsID0gMDtcbiAgQElucHV0KCkgbnpXaWR0aENvbmZpZzogUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudWxsPiA9IFtdO1xuICBASW5wdXQoKSBuekRhdGE6IFJlYWRvbmx5QXJyYXk8VD4gPSBbXTtcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uUG9zaXRpb246IE56VGFibGVQYWdpbmF0aW9uUG9zaXRpb24gPSAnYm90dG9tJztcbiAgQElucHV0KCkgbnpTY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uVHlwZTogTnpUYWJsZVBhZ2luYXRpb25UeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGcm9udFBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek91dGVyQm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpUYWJsZVNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NpemVDaGFuZ2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIG56SGlkZU9uU2luZ2xlUGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dRdWlja0p1bXBlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UXVlcnlQYXJhbXMgPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFibGVRdWVyeVBhcmFtcz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZWFkb25seUFycmF5PE56VGFibGVEYXRhPj4oKTtcblxuICAvKiogcHVibGljIGRhdGEgZm9yIG5nRm9yIHRyICovXG4gIHB1YmxpYyBkYXRhOiBSZWFkb25seUFycmF5PFQ+ID0gW107XG4gIHB1YmxpYyBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ/OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIHNjcm9sbFg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBzY3JvbGxZOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgdGhlYWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBsaXN0T2ZBdXRvQ29sV2lkdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgbGlzdE9mTWFudWFsQ29sV2lkdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgaGFzRml4TGVmdCA9IGZhbHNlO1xuICBoYXNGaXhSaWdodCA9IGZhbHNlO1xuICBzaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxvYWRpbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByaXZhdGUgdGVtcGxhdGVNb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBAQ29udGVudENoaWxkKE56VGFibGVWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlITogTnpUYWJsZVZpcnR1YWxTY3JvbGxEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoTnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50KSBuelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQhOiBOelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQ7XG4gIHZlcnRpY2FsU2Nyb2xsQmFyV2lkdGggPSAwO1xuICBvblBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VTaXplKHNpemUpO1xuICB9XG5cbiAgb25QYWdlSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VJbmRleChpbmRleCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSxcbiAgICBwcml2YXRlIG56VGFibGVEYXRhU2VydmljZTogTnpUYWJsZURhdGFTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS13cmFwcGVyJyk7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFnZUluZGV4RGlzdGluY3QkLCBwYWdlU2l6ZURpc3RpbmN0JCwgbGlzdE9mQ3VycmVudFBhZ2VEYXRhJCwgdG90YWwkLCBxdWVyeVBhcmFtcyQgfSA9IHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlO1xuICAgIGNvbnN0IHsgdGhlYWRUZW1wbGF0ZSQsIGhhc0ZpeExlZnQkLCBoYXNGaXhSaWdodCQgfSA9IHRoaXMubnpUYWJsZVN0eWxlU2VydmljZTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgcXVlcnlQYXJhbXMkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhpcy5uelF1ZXJ5UGFyYW1zKTtcbiAgICBwYWdlSW5kZXhEaXN0aW5jdCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShwYWdlSW5kZXggPT4ge1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLm5leHQocGFnZUluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwYWdlU2l6ZURpc3RpbmN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhZ2VTaXplID0+IHtcbiAgICAgIGlmIChwYWdlU2l6ZSAhPT0gdGhpcy5uelBhZ2VTaXplKSB7XG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgICAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UubmV4dChwYWdlU2l6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG90YWwkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5uekZyb250UGFnaW5hdGlvbilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodG90YWwgPT4ge1xuICAgICAgICBpZiAodG90YWwgIT09IHRoaXMubnpUb3RhbCkge1xuICAgICAgICAgIHRoaXMubnpUb3RhbCA9IHRvdGFsO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBsaXN0T2ZDdXJyZW50UGFnZURhdGEkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGVhZFRlbXBsYXRlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoZWFkVGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy50aGVhZFRlbXBsYXRlID0gdGhlYWRUZW1wbGF0ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgaGFzRml4TGVmdCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShoYXNGaXhMZWZ0ID0+IHtcbiAgICAgIHRoaXMuaGFzRml4TGVmdCA9IGhhc0ZpeExlZnQ7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGhhc0ZpeFJpZ2h0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGhhc0ZpeFJpZ2h0ID0+IHtcbiAgICAgIHRoaXMuaGFzRml4UmlnaHQgPSBoYXNGaXhSaWdodDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29tYmluZUxhdGVzdChbdG90YWwkLCB0aGlzLmxvYWRpbmckLCB0aGlzLnRlbXBsYXRlTW9kZSRdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW3RvdGFsLCBsb2FkaW5nLCB0ZW1wbGF0ZU1vZGVdKSA9PiB0b3RhbCA9PT0gMCAmJiAhbG9hZGluZyAmJiAhdGVtcGxhdGVNb2RlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGVtcHR5ID0+IHtcbiAgICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFNob3dFbXB0eShlbXB0eSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmVydGljYWxTY3JvbGxCYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoJ3ZlcnRpY2FsJyk7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmxpc3RPZkxpc3RPZlRoV2lkdGhQeCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0T2ZXaWR0aCA9PiB7XG4gICAgICB0aGlzLmxpc3RPZkF1dG9Db2xXaWR0aCA9IGxpc3RPZldpZHRoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLm1hbnVhbFdpZHRoQ29uZmlnUHgkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobGlzdE9mV2lkdGggPT4ge1xuICAgICAgdGhpcy5saXN0T2ZNYW51YWxDb2xXaWR0aCA9IGxpc3RPZldpZHRoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelNjcm9sbCwgbnpQYWdlSW5kZXgsIG56UGFnZVNpemUsIG56RnJvbnRQYWdpbmF0aW9uLCBuekRhdGEsIG56V2lkdGhDb25maWcsIG56Tm9SZXN1bHQsIG56TG9hZGluZywgbnpUZW1wbGF0ZU1vZGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56UGFnZUluZGV4KSB7XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVQYWdlSW5kZXgodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgfVxuICAgIGlmIChuelBhZ2VTaXplKSB7XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVQYWdlU2l6ZSh0aGlzLm56UGFnZVNpemUpO1xuICAgIH1cbiAgICBpZiAobnpEYXRhKSB7XG4gICAgICB0aGlzLm56RGF0YSA9IHRoaXMubnpEYXRhIHx8IFtdO1xuICAgICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlTGlzdE9mRGF0YSh0aGlzLm56RGF0YSk7XG4gICAgfVxuICAgIGlmIChuekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlRnJvbnRQYWdpbmF0aW9uKHRoaXMubnpGcm9udFBhZ2luYXRpb24pO1xuICAgIH1cbiAgICBpZiAobnpTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmIChueldpZHRoQ29uZmlnKSB7XG4gICAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2Uuc2V0VGFibGVXaWR0aENvbmZpZyh0aGlzLm56V2lkdGhDb25maWcpO1xuICAgIH1cbiAgICBpZiAobnpMb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmckLm5leHQodGhpcy5uekxvYWRpbmcpO1xuICAgIH1cbiAgICBpZiAobnpUZW1wbGF0ZU1vZGUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVNb2RlJC5uZXh0KHRoaXMubnpUZW1wbGF0ZU1vZGUpO1xuICAgIH1cbiAgICBpZiAobnpOb1Jlc3VsdCkge1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldE5vUmVzdWx0KHRoaXMubnpOb1Jlc3VsdCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTaG93UGFnaW5hdGlvbigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5lbGVtZW50UmVmKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmVydGljYWxTY3JvbGxCYXJXaWR0aCA6IDA7XG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Iod2lkdGggLSBzY3JvbGxCYXJXaWR0aCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmhvc3RXaWR0aCQpO1xuICAgIGlmICh0aGlzLm56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudCAmJiB0aGlzLm56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudC5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgIHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0ID0gdGhpcy5uelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2Nyb2xsT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsWCA9ICh0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkgfHwgbnVsbDtcbiAgICB0aGlzLnNjcm9sbFkgPSAodGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLnkpIHx8IG51bGw7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFNjcm9sbCh0aGlzLnNjcm9sbFgsIHRoaXMuc2Nyb2xsWSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNob3dQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPVxuICAgICAgKHRoaXMubnpIaWRlT25TaW5nbGVQYWdlICYmIHRoaXMubnpEYXRhLmxlbmd0aCA+IHRoaXMubnpQYWdlU2l6ZSkgfHxcbiAgICAgICh0aGlzLm56RGF0YS5sZW5ndGggPiAwICYmICF0aGlzLm56SGlkZU9uU2luZ2xlUGFnZSkgfHxcbiAgICAgICghdGhpcy5uekZyb250UGFnaW5hdGlvbiAmJiB0aGlzLm56VG90YWwgPiB0aGlzLm56UGFnZVNpemUpO1xuICB9XG59XG4iXX0=