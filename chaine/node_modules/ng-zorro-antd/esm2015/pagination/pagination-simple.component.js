/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { toNumber } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from './pagination-item.component';

const _c0 = ["containerTemplate"];
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 1);
    ɵngcc0.ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.prePage(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(1, "li", 2);
    ɵngcc0.ɵɵelementStart(2, "input", 3);
    ɵngcc0.ɵɵlistener("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.jumpToPageViaInput($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 4);
    ɵngcc0.ɵɵtext(4, "/");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "li", 5);
    ɵngcc0.ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.nextPage(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵngcc0.ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.lastIndex, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵngcc0.ɵɵattribute("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
} }
export class NzPaginationSimpleComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.itemRender = null;
        this.disabled = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageIndexChange = new EventEmitter();
        this.lastIndex = 0;
        this.isFirstIndex = false;
        this.isLastIndex = false;
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
    jumpToPageViaInput($event) {
        const target = $event.target;
        const index = toNumber(target.value, this.pageIndex);
        this.onPageIndexChange(index);
        target.value = `${this.pageIndex}`;
    }
    prePage() {
        this.onPageIndexChange(this.pageIndex - 1);
    }
    nextPage() {
        this.onPageIndexChange(this.pageIndex + 1);
    }
    onPageIndexChange(index) {
        this.pageIndexChange.next(index);
    }
    updateBindingValue() {
        this.lastIndex = Math.ceil(this.total / this.pageSize);
        this.isFirstIndex = this.pageIndex === 1;
        this.isLastIndex = this.pageIndex === this.lastIndex;
    }
    ngOnChanges(changes) {
        const { pageIndex, total, pageSize } = changes;
        if (pageIndex || total || pageSize) {
            this.updateBindingValue();
        }
    }
}
NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) { return new (t || NzPaginationSimpleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzPaginationSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPaginationSimpleComponent, selectors: [["nz-pagination-simple"]], viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { itemRender: "itemRender", disabled: "disabled", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "direction", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "direction", "itemRender", "click"]], template: function NzPaginationSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 12, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NzPaginationItemComponent], encapsulation: 2, changeDetection: 0 });
NzPaginationSimpleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzPaginationSimpleComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['containerTemplate', { static: true },] }],
    itemRender: [{ type: Input }],
    disabled: [{ type: Input }],
    locale: [{ type: Input }],
    total: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageIndexChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-pagination-simple',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #containerTemplate>
      <li
        nz-pagination-item
        [attr.title]="locale.prev_page"
        [disabled]="isFirstIndex"
        [direction]="dir"
        (click)="prePage()"
        type="prev"
        [itemRender]="itemRender"
      ></li>
      <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
        <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
        <span class="ant-pagination-slash">/</span>
        {{ lastIndex }}
      </li>
      <li
        nz-pagination-item
        [attr.title]="locale?.next_page"
        [disabled]="isLastIndex"
        [direction]="dir"
        (click)="nextPage()"
        type="next"
        [itemRender]="itemRender"
      ></li>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { itemRender: [{
            type: Input
        }], disabled: [{
            type: Input
        }], total: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], pageIndexChange: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: ['containerTemplate', { static: true }]
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DM0MsTUFBTSxPQUFPLDJCQUEyQjtBQUFHLElBZ0J6QyxZQUNVLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsY0FBOEI7QUFDbkQsUUFKUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFuQlcsZUFBVSxHQUFvRCxJQUFJLENBQUM7QUFDOUUsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQ1csVUFBSyxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFXLGNBQVMsR0FBRyxDQUFDLENBQUM7QUFDekIsUUFBVyxhQUFRLEdBQUcsRUFB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b250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbi1zaW1wbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNjb250YWluZXJUZW1wbGF0ZT5cbiAgICAgIDxsaVxuICAgICAgICBuei1wYWdpbmF0aW9uLWl0ZW1cbiAgICAgICAgW2F0dHIudGl0bGVdPVwibG9jYWxlLnByZXZfcGFnZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0ZpcnN0SW5kZXhcIlxuICAgICAgICBbZGlyZWN0aW9uXT1cImRpclwiXG4gICAgICAgIChjbGljayk9XCJwcmVQYWdlKClcIlxuICAgICAgICB0eXBlPVwicHJldlwiXG4gICAgICAgIFtpdGVtUmVuZGVyXT1cIml0ZW1SZW5kZXJcIlxuICAgICAgPjwvbGk+XG4gICAgICA8bGkgW2F0dHIudGl0bGVdPVwicGFnZUluZGV4ICsgJy8nICsgbGFzdEluZGV4XCIgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1zaW1wbGUtcGFnZXJcIj5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFt2YWx1ZV09XCJwYWdlSW5kZXhcIiAoa2V5ZG93bi5lbnRlcik9XCJqdW1wVG9QYWdlVmlhSW5wdXQoJGV2ZW50KVwiIHNpemU9XCIzXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1zbGFzaFwiPi88L3NwYW4+XG4gICAgICAgIHt7IGxhc3RJbmRleCB9fVxuICAgICAgPC9saT5cbiAgICAgIDxsaVxuICAgICAgICBuei1wYWdpbmF0aW9uLWl0ZW1cbiAgICAgICAgW2F0dHIudGl0bGVdPVwibG9jYWxlPy5uZXh0X3BhZ2VcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNMYXN0SW5kZXhcIlxuICAgICAgICBbZGlyZWN0aW9uXT1cImRpclwiXG4gICAgICAgIChjbGljayk9XCJuZXh0UGFnZSgpXCJcbiAgICAgICAgdHlwZT1cIm5leHRcIlxuICAgICAgICBbaXRlbVJlbmRlcl09XCJpdGVtUmVuZGVyXCJcbiAgICAgID48L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uU2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuICBASW5wdXQoKSBpdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBsYXN0SW5kZXggPSAwO1xuICBpc0ZpcnN0SW5kZXggPSBmYWxzZTtcbiAgaXNMYXN0SW5kZXggPSBmYWxzZTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICByZW5kZXJlci5yZW1vdmVDaGlsZChyZW5kZXJlci5wYXJlbnROb2RlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMudXBkYXRlUnRsU3R5bGUoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy51cGRhdGVSdGxTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdGxTdHlsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBhZ2luYXRpb24tcnRsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGFnaW5hdGlvbi1ydGwnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBqdW1wVG9QYWdlVmlhSW5wdXQoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBpbmRleCA9IHRvTnVtYmVyKHRhcmdldC52YWx1ZSwgdGhpcy5wYWdlSW5kZXgpO1xuICAgIHRoaXMub25QYWdlSW5kZXhDaGFuZ2UoaW5kZXgpO1xuICAgIHRhcmdldC52YWx1ZSA9IGAke3RoaXMucGFnZUluZGV4fWA7XG4gIH1cblxuICBwcmVQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMub25QYWdlSW5kZXhDaGFuZ2UodGhpcy5wYWdlSW5kZXggLSAxKTtcbiAgfVxuICBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uUGFnZUluZGV4Q2hhbmdlKHRoaXMucGFnZUluZGV4ICsgMSk7XG4gIH1cblxuICBvblBhZ2VJbmRleENoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlSW5kZXhDaGFuZ2UubmV4dChpbmRleCk7XG4gIH1cblxuICB1cGRhdGVCaW5kaW5nVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucGFnZVNpemUpO1xuICAgIHRoaXMuaXNGaXJzdEluZGV4ID0gdGhpcy5wYWdlSW5kZXggPT09IDE7XG4gICAgdGhpcy5pc0xhc3RJbmRleCA9IHRoaXMucGFnZUluZGV4ID09PSB0aGlzLmxhc3RJbmRleDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhZ2VJbmRleCwgdG90YWwsIHBhZ2VTaXplIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChwYWdlSW5kZXggfHwgdG90YWwgfHwgcGFnZVNpemUpIHtcbiAgICAgIHRoaXMudXBkYXRlQmluZGluZ1ZhbHVlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=