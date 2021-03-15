/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NzCardLoadingComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelement(1, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const className_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", className_r3);
} }
function NzCardLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, NzCardLoadingComponent_div_1_div_1_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const listOfClassName_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", listOfClassName_r1);
} }
export class NzCardLoadingComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.listOfLoading = [
            ['ant-col-22'],
            ['ant-col-8', 'ant-col-15'],
            ['ant-col-6', 'ant-col-18'],
            ['ant-col-13', 'ant-col-9'],
            ['ant-col-4', 'ant-col-3', 'ant-col-16'],
            ['ant-col-8', 'ant-col-6', 'ant-col-8']
        ];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-card-loading-content');
    }
}
NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) { return new (t || NzCardLoadingComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCardLoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCardLoadingComponent, selectors: [["nz-card-loading"]], exportAs: ["nzCardLoading"], decls: 2, vars: 1, consts: [[1, "ant-card-loading-content"], ["class", "ant-row", "style", "margin-left: -4px; margin-right: -4px;", 4, "ngFor", "ngForOf"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], ["style", "padding-left: 4px; padding-right: 4px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-left", "4px", "padding-right", "4px", 3, "ngClass"], [1, "ant-card-loading-block"]], template: function NzCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzCardLoadingComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listOfLoading);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
NzCardLoadingComponent.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardLoadingComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-loading',
                exportAs: 'nzCardLoading',
                template: `
    <div class="ant-card-loading-content">
      <div class="ant-row" style="margin-left: -4px; margin-right: -4px;" *ngFor="let listOfClassName of listOfLoading">
        <div *ngFor="let className of listOfClassName" [ngClass]="className" style="padding-left: 4px; padding-right: 4px;">
          <div class="ant-card-loading-block"></div>
        </div>
      </div>
    </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkL2NhcmQtbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxHLE1BQU0sT0FBTyxzQkFBc0I7QUFDbkMsSUFRRSxZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFSM0Msa0JBQWEsR0FBZTtBQUM5QixZQUFJLENBQUMsWUFBWSxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO0FBQy9CLFlBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztBQUM1QyxZQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7QUFDM0MsU0FBRyxDQUFDO0FBQ0osUUFDSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDNUUsSUFBRSxDQUFDO0FBQ0g7a0RBN0JDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCLGtCQUMzQixRQUFRLEVBQUUsZUFBZTtTQUN6QixRQUFRLEVBQUUsa1lBUVQsa0JBQ0QsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3RDOzs7Ozs7OytGQUNJO0FBQUM7QUFDVSxZQW5CNkIsVUFBVTtBQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jYXJkLWxvYWRpbmcnLFxuICBleHBvcnRBczogJ256Q2FyZExvYWRpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogLTRweDsgbWFyZ2luLXJpZ2h0OiAtNHB4O1wiICpuZ0Zvcj1cImxldCBsaXN0T2ZDbGFzc05hbWUgb2YgbGlzdE9mTG9hZGluZ1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjbGFzc05hbWUgb2YgbGlzdE9mQ2xhc3NOYW1lXCIgW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRMb2FkaW5nQ29tcG9uZW50IHtcbiAgbGlzdE9mTG9hZGluZzogc3RyaW5nW11bXSA9IFtcbiAgICBbJ2FudC1jb2wtMjInXSxcbiAgICBbJ2FudC1jb2wtOCcsICdhbnQtY29sLTE1J10sXG4gICAgWydhbnQtY29sLTYnLCAnYW50LWNvbC0xOCddLFxuICAgIFsnYW50LWNvbC0xMycsICdhbnQtY29sLTknXSxcbiAgICBbJ2FudC1jb2wtNCcsICdhbnQtY29sLTMnLCAnYW50LWNvbC0xNiddLFxuICAgIFsnYW50LWNvbC04JywgJ2FudC1jb2wtNicsICdhbnQtY29sLTgnXVxuICBdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtY2FyZC1sb2FkaW5nLWNvbnRlbnQnKTtcbiAgfVxufVxuIl19