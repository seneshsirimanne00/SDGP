/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { fromEvent, merge, Subject } from 'rxjs';
import { delay, filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './table-content.component';
import * as ɵngcc5 from '@angular/cdk/scrolling';
import * as ɵngcc6 from './tbody.component';

const _c0 = ["tableHeaderElement"];
const _c1 = ["tableBodyElement"];
function NzTableInnerScrollComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7, 8);
    ɵngcc0.ɵɵelement(2, "table", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r3.bodyStyleMap);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("scrollX", ctx_r3.scrollX)("listOfColWidth", ctx_r3.listOfColWidth)("contentTemplate", ctx_r3.contentTemplate);
} }
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.virtualTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c2, item_r8, i_r9));
} }
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 10, 8);
    ɵngcc0.ɵɵelementStart(2, "table", 11);
    ɵngcc0.ɵɵelementStart(3, "tbody");
    ɵngcc0.ɵɵtemplate(4, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template, 2, 5, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r4.data.length ? ctx_r4.scrollY : ctx_r4.noDateVirtualHeight);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r4.virtualItemSize)("maxBufferPx", ctx_r4.virtualMaxBufferPx)("minBufferPx", ctx_r4.virtualMinBufferPx);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("scrollX", ctx_r4.scrollX)("listOfColWidth", ctx_r4.listOfColWidth);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r4.data)("cdkVirtualForTrackBy", ctx_r4.virtualForTrackBy);
} }
function NzTableInnerScrollComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2, 3);
    ɵngcc0.ɵɵelement(3, "table", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, NzTableInnerScrollComponent_ng_container_0_div_4_Template, 3, 4, "div", 5);
    ɵngcc0.ɵɵtemplate(5, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template, 5, 9, "cdk-virtual-scroll-viewport", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.headerStyleMap);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.virtualTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.virtualTemplate);
} }
function NzTableInnerScrollComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14, 8);
    ɵngcc0.ɵɵelement(2, "table", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.bodyStyleMap);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
} }
export class NzTableInnerScrollComponent {
    constructor(renderer, ngZone, platform, resizeService, elementRef) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.elementRef = elementRef;
        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.contentTemplate = null;
        this.widthConfig = [];
        this.listOfColWidth = [];
        this.theadTemplate = null;
        this.virtualTemplate = null;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = index => index;
        this.headerStyleMap = {};
        this.bodyStyleMap = {};
        this.verticalScrollBarWidth = 0;
        this.noDateVirtualHeight = '182px';
        this.data$ = new Subject();
        this.scroll$ = new Subject();
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-container');
    }
    setScrollPositionClassName(clear = false) {
        const { scrollWidth, scrollLeft, clientWidth } = this.tableBodyElement.nativeElement;
        const leftClassName = 'ant-table-ping-left';
        const rightClassName = 'ant-table-ping-right';
        if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.removeClass(this.tableMainElement, rightClassName);
        }
        else if (scrollLeft === 0) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
        else if (scrollWidth === scrollLeft + clientWidth) {
            this.renderer.removeClass(this.tableMainElement, rightClassName);
            this.renderer.addClass(this.tableMainElement, leftClassName);
        }
        else {
            this.renderer.addClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
    }
    ngOnChanges(changes) {
        const { scrollX, scrollY, data } = changes;
        if (scrollX || scrollY) {
            const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
            this.headerStyleMap = {
                overflowX: 'hidden',
                overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
            };
            this.bodyStyleMap = {
                overflowY: this.scrollY ? 'scroll' : 'hidden',
                overflowX: this.scrollX ? 'auto' : null,
                maxHeight: this.scrollY
            };
            this.scroll$.next();
        }
        if (data) {
            this.data$.next();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                const scrollEvent$ = this.scroll$.pipe(startWith(null), delay(0), switchMap(() => fromEvent(this.tableBodyElement.nativeElement, 'scroll').pipe(startWith(true))), takeUntil(this.destroy$));
                const resize$ = this.resizeService.subscribe().pipe(takeUntil(this.destroy$));
                const data$ = this.data$.pipe(takeUntil(this.destroy$));
                const setClassName$ = merge(scrollEvent$, resize$, data$, this.scroll$).pipe(startWith(true), delay(0), takeUntil(this.destroy$));
                setClassName$.subscribe(() => this.setScrollPositionClassName());
                scrollEvent$
                    .pipe(filter(() => !!this.scrollY))
                    .subscribe(() => (this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft));
            });
        }
    }
    ngOnDestroy() {
        this.setScrollPositionClassName(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) { return new (t || NzTableInnerScrollComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzResizeService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTableInnerScrollComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableInnerScrollComponent, selectors: [["nz-table-inner-scroll"]], viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c1, true, ElementRef);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true, CdkVirtualScrollViewport);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, inputs: { data: "data", scrollX: "scrollX", scrollY: "scrollY", contentTemplate: "contentTemplate", widthConfig: "widthConfig", listOfColWidth: "listOfColWidth", theadTemplate: "theadTemplate", virtualTemplate: "virtualTemplate", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", verticalScrollBarWidth: "verticalScrollBarWidth", tableMainElement: "tableMainElement" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-table-content", 3, "ngStyle", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-content", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"]], template: function NzTableInnerScrollComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTableInnerScrollComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzTableInnerScrollComponent_div_1_Template, 3, 5, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollY);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.scrollY);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgStyle, ɵngcc4.NzTableContentComponent, ɵngcc5.CdkVirtualScrollViewport, ɵngcc5.CdkFixedSizeVirtualScroll, ɵngcc6.NzTbodyComponent, ɵngcc5.CdkVirtualForOf, ɵngcc3.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzTableInnerScrollComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: Platform },
    { type: NzResizeService },
    { type: ElementRef }
];
NzTableInnerScrollComponent.propDecorators = {
    data: [{ type: Input }],
    scrollX: [{ type: Input }],
    scrollY: [{ type: Input }],
    contentTemplate: [{ type: Input }],
    widthConfig: [{ type: Input }],
    listOfColWidth: [{ type: Input }],
    theadTemplate: [{ type: Input }],
    virtualTemplate: [{ type: Input }],
    virtualItemSize: [{ type: Input }],
    virtualMaxBufferPx: [{ type: Input }],
    virtualMinBufferPx: [{ type: Input }],
    tableMainElement: [{ type: Input }],
    virtualForTrackBy: [{ type: Input }],
    tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement', { read: ElementRef },] }],
    tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement', { read: ElementRef },] }],
    cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport },] }],
    verticalScrollBarWidth: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableInnerScrollComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table-inner-scroll',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-container *ngIf="scrollY">
      <div #tableHeaderElement [ngStyle]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
        ></table>
      </div>
      <div #tableBodyElement *ngIf="!virtualTemplate" class="ant-table-body" [ngStyle]="bodyStyleMap">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [contentTemplate]="contentTemplate"
        ></table>
      </div>
      <cdk-virtual-scroll-viewport
        #tableBodyElement
        *ngIf="virtualTemplate"
        [itemSize]="virtualItemSize"
        [maxBufferPx]="virtualMaxBufferPx"
        [minBufferPx]="virtualMinBufferPx"
        [style.height]="data.length ? scrollY : noDateVirtualHeight"
      >
        <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
          <tbody>
            <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
              <ng-template [ngTemplateOutlet]="virtualTemplate" [ngTemplateOutletContext]="{ $implicit: item, index: i }"></ng-template>
            </ng-container>
          </tbody>
        </table>
      </cdk-virtual-scroll-viewport>
    </ng-container>
    <div class="ant-table-content" #tableBodyElement *ngIf="!scrollY" [ngStyle]="bodyStyleMap">
      <table
        nz-table-content
        tableLayout="fixed"
        [scrollX]="scrollX"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
        [contentTemplate]="contentTemplate"
      ></table>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }, { type: ɵngcc2.NzResizeService }, { type: ɵngcc0.ElementRef }]; }, { data: [{
            type: Input
        }], scrollX: [{
            type: Input
        }], scrollY: [{
            type: Input
        }], contentTemplate: [{
            type: Input
        }], widthConfig: [{
            type: Input
        }], listOfColWidth: [{
            type: Input
        }], theadTemplate: [{
            type: Input
        }], virtualTemplate: [{
            type: Input
        }], virtualItemSize: [{
            type: Input
        }], virtualMaxBufferPx: [{
            type: Input
        }], virtualMinBufferPx: [{
            type: Input
        }], virtualForTrackBy: [{
            type: Input
        }], verticalScrollBarWidth: [{
            type: Input
        }], tableMainElement: [{
            type: Input
        }], tableHeaderElement: [{
            type: ViewChild,
            args: ['tableHeaderElement', { read: ElementRef }]
        }], tableBodyElement: [{
            type: ViewChild,
            args: ['tableBodyElement', { read: ElementRef }]
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvdGFibGUvdGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFJVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RGhGLE1BQU0sT0FBTywyQkFBMkI7QUFBRyxJQTZDekMsWUFDVSxRQUFtQixFQUNuQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsYUFBOEIsRUFDOUIsVUFBc0I7QUFDL0IsUUFMUyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtBQUFDLFFBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtBQUFDLFFBQy9CLGVBQVUsR0FBVixV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UyxTQUFDLHdCQUF3QixFQUFFLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO0FBQ3BFLHFDQUdGLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelJlc2l6ZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUtaW5uZXItc2Nyb2xsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNjcm9sbFlcIj5cbiAgICAgIDxkaXYgI3RhYmxlSGVhZGVyRWxlbWVudCBbbmdTdHlsZV09XCJoZWFkZXJTdHlsZU1hcFwiIGNsYXNzPVwiYW50LXRhYmxlLWhlYWRlciBuei10YWJsZS1oaWRlLXNjcm9sbGJhclwiPlxuICAgICAgICA8dGFibGVcbiAgICAgICAgICBuei10YWJsZS1jb250ZW50XG4gICAgICAgICAgdGFibGVMYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgW3Njcm9sbFhdPVwic2Nyb2xsWFwiXG4gICAgICAgICAgW2xpc3RPZkNvbFdpZHRoXT1cImxpc3RPZkNvbFdpZHRoXCJcbiAgICAgICAgICBbdGhlYWRUZW1wbGF0ZV09XCJ0aGVhZFRlbXBsYXRlXCJcbiAgICAgICAgPjwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgI3RhYmxlQm9keUVsZW1lbnQgKm5nSWY9XCIhdmlydHVhbFRlbXBsYXRlXCIgY2xhc3M9XCJhbnQtdGFibGUtYm9keVwiIFtuZ1N0eWxlXT1cImJvZHlTdHlsZU1hcFwiPlxuICAgICAgICA8dGFibGVcbiAgICAgICAgICBuei10YWJsZS1jb250ZW50XG4gICAgICAgICAgdGFibGVMYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgW3Njcm9sbFhdPVwic2Nyb2xsWFwiXG4gICAgICAgICAgW2xpc3RPZkNvbFdpZHRoXT1cImxpc3RPZkNvbFdpZHRoXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgID48L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICN0YWJsZUJvZHlFbGVtZW50XG4gICAgICAgICpuZ0lmPVwidmlydHVhbFRlbXBsYXRlXCJcbiAgICAgICAgW2l0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiXG4gICAgICAgIFttYXhCdWZmZXJQeF09XCJ2aXJ0dWFsTWF4QnVmZmVyUHhcIlxuICAgICAgICBbbWluQnVmZmVyUHhdPVwidmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCJkYXRhLmxlbmd0aCA/IHNjcm9sbFkgOiBub0RhdGVWaXJ0dWFsSGVpZ2h0XCJcbiAgICAgID5cbiAgICAgICAgPHRhYmxlIG56LXRhYmxlLWNvbnRlbnQgdGFibGVMYXlvdXQ9XCJmaXhlZFwiIFtzY3JvbGxYXT1cInNjcm9sbFhcIiBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mQ29sV2lkdGhcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdmlydHVhbEZvclRyYWNrQnlcIj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInZpcnR1YWxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGkgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1jb250ZW50XCIgI3RhYmxlQm9keUVsZW1lbnQgKm5nSWY9XCIhc2Nyb2xsWVwiIFtuZ1N0eWxlXT1cImJvZHlTdHlsZU1hcFwiPlxuICAgICAgPHRhYmxlXG4gICAgICAgIG56LXRhYmxlLWNvbnRlbnRcbiAgICAgICAgdGFibGVMYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgIFtzY3JvbGxYXT1cInNjcm9sbFhcIlxuICAgICAgICBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mQ29sV2lkdGhcIlxuICAgICAgICBbdGhlYWRUZW1wbGF0ZV09XCJ0aGVhZFRlbXBsYXRlXCJcbiAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZV09XCJjb250ZW50VGVtcGxhdGVcIlxuICAgICAgPjwvdGFibGU+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkYXRhOiBSZWFkb25seUFycmF5PE56VGFibGVEYXRhPiA9IFtdO1xuICBASW5wdXQoKSBzY3JvbGxYOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2Nyb2xsWTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbGlzdE9mQ29sV2lkdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgQElucHV0KCkgdGhlYWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB2aXJ0dWFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdmlydHVhbEl0ZW1TaXplID0gMDtcbiAgQElucHV0KCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XG4gIEBJbnB1dCgpIHRhYmxlTWFpbkVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxOelRhYmxlRGF0YT4gPSBpbmRleCA9PiBpbmRleDtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlSGVhZGVyRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlQm9keUVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVCb2R5RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KVxuICBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ/OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIGhlYWRlclN0eWxlTWFwID0ge307XG4gIGJvZHlTdHlsZU1hcCA9IHt9O1xuICBASW5wdXQoKSB2ZXJ0aWNhbFNjcm9sbEJhcldpZHRoID0gMDtcbiAgbm9EYXRlVmlydHVhbEhlaWdodCA9ICcxODJweCc7XG4gIHByaXZhdGUgZGF0YSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNjcm9sbCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBzZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZShjbGVhcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JvbGxXaWR0aCwgc2Nyb2xsTGVmdCwgY2xpZW50V2lkdGggfSA9IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxlZnRDbGFzc05hbWUgPSAnYW50LXRhYmxlLXBpbmctbGVmdCc7XG4gICAgY29uc3QgcmlnaHRDbGFzc05hbWUgPSAnYW50LXRhYmxlLXBpbmctcmlnaHQnO1xuICAgIGlmICgoc2Nyb2xsV2lkdGggPT09IGNsaWVudFdpZHRoICYmIHNjcm9sbFdpZHRoICE9PSAwKSB8fCBjbGVhcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIGxlZnRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIHJpZ2h0Q2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCBsZWZ0Q2xhc3NOYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCByaWdodENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxXaWR0aCA9PT0gc2Nyb2xsTGVmdCArIGNsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgcmlnaHRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIGxlZnRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgbGVmdENsYXNzTmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgcmlnaHRDbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgcmVzaXplU2VydmljZTogTnpSZXNpemVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdGFibGUtY29udGFpbmVyJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZLCBkYXRhIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChzY3JvbGxYIHx8IHNjcm9sbFkpIHtcbiAgICAgIGNvbnN0IGhhc1ZlcnRpY2FsU2Nyb2xsQmFyID0gdGhpcy52ZXJ0aWNhbFNjcm9sbEJhcldpZHRoICE9PSAwO1xuICAgICAgdGhpcy5oZWFkZXJTdHlsZU1hcCA9IHtcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgb3ZlcmZsb3dZOiB0aGlzLnNjcm9sbFkgJiYgaGFzVmVydGljYWxTY3JvbGxCYXIgPyAnc2Nyb2xsJyA6ICdoaWRkZW4nXG4gICAgICB9O1xuICAgICAgdGhpcy5ib2R5U3R5bGVNYXAgPSB7XG4gICAgICAgIG92ZXJmbG93WTogdGhpcy5zY3JvbGxZID8gJ3Njcm9sbCcgOiAnaGlkZGVuJyxcbiAgICAgICAgb3ZlcmZsb3dYOiB0aGlzLnNjcm9sbFggPyAnYXV0bycgOiBudWxsLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuc2Nyb2xsWVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2Nyb2xsJC5uZXh0KCk7XG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEkLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxFdmVudCQgPSB0aGlzLnNjcm9sbCQucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgICAgZGVsYXkoMCksXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpLnBpcGUoc3RhcnRXaXRoKHRydWUpKSksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc2l6ZSQgPSB0aGlzLnJlc2l6ZVNlcnZpY2Uuc3Vic2NyaWJlKCkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgICAgICBjb25zdCBkYXRhJCA9IHRoaXMuZGF0YSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgICAgICBjb25zdCBzZXRDbGFzc05hbWUkID0gbWVyZ2Uoc2Nyb2xsRXZlbnQkLCByZXNpemUkLCBkYXRhJCwgdGhpcy5zY3JvbGwkKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgZGVsYXkoMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgICAgIHNldENsYXNzTmFtZSQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XG4gICAgICAgIHNjcm9sbEV2ZW50JFxuICAgICAgICAgIC5waXBlKGZpbHRlcigoKSA9PiAhIXRoaXMuc2Nyb2xsWSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiAodGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=