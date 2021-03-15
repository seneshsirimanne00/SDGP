/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTableStyleService } from '../table-style.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../table-style.service';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["tdElement"];
const _c1 = ["nz-table-fixed-row", ""];
function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzTableFixedRowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵpipe(1, "async");
    ɵngcc0.ɵɵtemplate(2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵstyleProp("width", ɵngcc0.ɵɵpipeBind1(1, 3, ctx_r1.hostWidth$), "px");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c2 = ["*"];
export class NzTableFixedRowComponent {
    constructor(nzTableStyleService, renderer) {
        this.nzTableStyleService = nzTableStyleService;
        this.renderer = renderer;
        this.hostWidth$ = new BehaviorSubject(null);
        this.enableAutoMeasure$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (this.nzTableStyleService) {
            const { enableAutoMeasure$, hostWidth$ } = this.nzTableStyleService;
            enableAutoMeasure$.pipe(takeUntil(this.destroy$)).subscribe(this.enableAutoMeasure$);
            hostWidth$.subscribe(this.hostWidth$);
        }
    }
    ngAfterViewInit() {
        this.nzTableStyleService.columnCount$.pipe(takeUntil(this.destroy$)).subscribe(count => {
            this.renderer.setAttribute(this.tdElement.nativeElement, 'colspan', `${count}`);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) { return new (t || NzTableFixedRowComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTableStyleService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTableFixedRowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableFixedRowComponent, selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]], viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tdElement = _t.first);
    } }, attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 4, consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]], template: function NzTableFixedRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "td", 0, 1);
        ɵngcc0.ɵɵtemplate(2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], pipes: [ɵngcc2.AsyncPipe], encapsulation: 2, changeDetection: 0 });
NzTableFixedRowComponent.ctorParameters = () => [
    { type: NzTableStyleService },
    { type: Renderer2 }
];
NzTableFixedRowComponent.propDecorators = {
    tdElement: [{ type: ViewChild, args: ['tdElement',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableFixedRowComponent, [{
        type: Component,
        args: [{
                selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      <div
        class="ant-table-expanded-row-fixed"
        *ngIf="enableAutoMeasure$ | async; else contentTemplate"
        style="position: sticky; left: 0px; overflow: hidden;"
        [style.width.px]="hostWidth$ | async"
      >
        <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      </div>
    </td>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc1.NzTableStyleService }, { type: ɵngcc0.Renderer2 }]; }, { tdElement: [{
            type: ViewChild,
            args: ['tdElement']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZml4ZWQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvdGFibGUvdGFibGUtZml4ZWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUdWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I3RCxNQUFNLE9BQU8sd0JBQXdCO0FBQUcsSUFLdEMsWUFBb0IsbUJBQXdDLEVBQVUsUUFBbUI7QUFBSSxRQUF6RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0FBQUMsUUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFIMUYsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFnQixJQUFJLENBQUMsQ0FBQztBQUN4RCxRQUFFLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0FBQzNELFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbkMsSUFBOEYsQ0FBQztBQUMvRixJQUFFLFFBQVE7QUFBSyxRQUNYLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO0FBQ2xDLFlBQU0sTUFBTSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUMxRSxZQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNGLFlBQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQUUsZUFBZTtBQUFLLFFBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDM0YsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUFFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO29EQXhDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DO1FBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7Ozs7O2lJQVlULGNBQ0Y7Ozs7Ozs7Ozs7O2dJQUNJO0FBQUM7QUFBa0QsWUFwQi9DLG1CQUFtQjtBQUFJLFlBTjlCLFNBQVM7QUFDVjtBQUFHO0FBRVcsd0JBd0JaLFNBQVMsU0FBQyxXQUFXO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZVN0eWxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLXN0eWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltuei10YWJsZS1maXhlZC1yb3ddLCB0cltuekV4cGFuZF0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGQgY2xhc3M9XCJuei1kaXNhYmxlLXRkIGFudC10YWJsZS1jZWxsXCIgI3RkRWxlbWVudD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZXhwYW5kZWQtcm93LWZpeGVkXCJcbiAgICAgICAgKm5nSWY9XCJlbmFibGVBdXRvTWVhc3VyZSQgfCBhc3luYzsgZWxzZSBjb250ZW50VGVtcGxhdGVcIlxuICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiBzdGlja3k7IGxlZnQ6IDBweDsgb3ZlcmZsb3c6IGhpZGRlbjtcIlxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiaG9zdFdpZHRoJCB8IGFzeW5jXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVGaXhlZFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGRFbGVtZW50JykgdGRFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgaG9zdFdpZHRoJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGVuYWJsZUF1dG9NZWFzdXJlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelRhYmxlU3R5bGVTZXJ2aWNlOiBOelRhYmxlU3R5bGVTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHsgZW5hYmxlQXV0b01lYXN1cmUkLCBob3N0V2lkdGgkIH0gPSB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgICBlbmFibGVBdXRvTWVhc3VyZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLmVuYWJsZUF1dG9NZWFzdXJlJCk7XG4gICAgICBob3N0V2lkdGgkLnN1YnNjcmliZSh0aGlzLmhvc3RXaWR0aCQpO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmNvbHVtbkNvdW50JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNvdW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudGRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjb2xzcGFuJywgYCR7Y291bnR9YCk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=