/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["nz-table-content", ""];
function NzTableContentComponent_col_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "col");
} if (rf & 2) {
    const width_r3 = ctx.$implicit;
    ɵngcc0.ɵɵstyleProp("width", width_r3)("min-width", width_r3);
} }
function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableContentComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead", 3);
    ɵngcc0.ɵɵtemplate(1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.theadTemplate);
} }
function NzTableContentComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = ["*"];
export class NzTableContentComponent {
    constructor() {
        this.tableLayout = 'auto';
        this.theadTemplate = null;
        this.contentTemplate = null;
        this.listOfColWidth = [];
        this.scrollX = null;
    }
}
NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) { return new (t || NzTableContentComponent)(); };
NzTableContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableContentComponent, selectors: [["table", "nz-table-content", ""]], hostVars: 8, hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
        ɵngcc0.ɵɵclassProp("ant-table-fixed", ctx.scrollX);
    } }, inputs: { tableLayout: "tableLayout", theadTemplate: "theadTemplate", contentTemplate: "contentTemplate", listOfColWidth: "listOfColWidth", scrollX: "scrollX" }, attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]], template: function NzTableContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);
        ɵngcc0.ɵɵtemplate(1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);
        ɵngcc0.ɵɵtemplate(2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵngcc0.ɵɵprojection(3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listOfColWidth);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.theadTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzTableContentComponent.propDecorators = {
    tableLayout: [{ type: Input }],
    theadTemplate: [{ type: Input }],
    contentTemplate: [{ type: Input }],
    listOfColWidth: [{ type: Input }],
    scrollX: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableContentComponent, [{
        type: Component,
        args: [{
                selector: 'table[nz-table-content]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <col [style.width]="width" [style.minWidth]="width" *ngFor="let width of listOfColWidth" />
    <thead class="ant-table-thead" *ngIf="theadTemplate">
      <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
    </thead>
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
  `,
                host: {
                    '[style.table-layout]': 'tableLayout',
                    '[class.ant-table-fixed]': 'scrollX',
                    '[style.width]': 'scrollX',
                    '[style.min-width]': `scrollX ? '100%': null`
                }
            }]
    }], function () { return []; }, { tableLayout: [{
            type: Input
        }], theadTemplate: [{
            type: Input
        }], contentTemplate: [{
            type: Input
        }], listOfColWidth: [{
            type: Input
        }], scrollX: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL3RhYmxlL3RhYmxlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QjFHLE1BQU0sT0FBTyx1QkFBdUI7QUFDcEMsSUFwQkE7QUFDRyxRQW1CUSxnQkFBVyxHQUFrQixNQUFNLENBQUM7QUFDL0MsUUFBVyxrQkFBYSxHQUFrQyxJQUFJLENBQUM7QUFDL0QsUUFBVyxvQkFBZSxHQUFrQyxJQUFJLENBQUM7QUFDakUsUUFBVyxtQkFBYyxHQUFpQyxFQUFFLENBQUM7QUFDN0QsUUFBVyxZQUFPLEdBQWtCLElBQUksQ0FBQztBQUN6QyxJQUFBLENBQUM7QUFDRDttREExQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx5QkFBeUI7ZUFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7OztpRUFPVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osc0JBQXNCLEVBQUUsYUFBYSxzQkFDckMseUJBQXlCLEVBQUUsU0FBUyxzQkFDcEMsZUFBZSxFQUFFLFNBQVMsc0JBQzFCLG1CQUFtQixFQUFFLHdCQUF3QixrQkFDOUMsY0FDRjs7Ozs7Ozs7Ozs7O3FIQUNJO0FBQUM7QUFDSSwwQkFBUCxLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VGFibGVMYXlvdXQgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlW256LXRhYmxlLWNvbnRlbnRdJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvbCBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUubWluV2lkdGhdPVwid2lkdGhcIiAqbmdGb3I9XCJsZXQgd2lkdGggb2YgbGlzdE9mQ29sV2lkdGhcIiAvPlxuICAgIDx0aGVhZCBjbGFzcz1cImFudC10YWJsZS10aGVhZFwiICpuZ0lmPVwidGhlYWRUZW1wbGF0ZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoZWFkVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvdGhlYWQ+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS50YWJsZS1sYXlvdXRdJzogJ3RhYmxlTGF5b3V0JyxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maXhlZF0nOiAnc2Nyb2xsWCcsXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnc2Nyb2xsWCcsXG4gICAgJ1tzdHlsZS5taW4td2lkdGhdJzogYHNjcm9sbFggPyAnMTAwJSc6IG51bGxgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUNvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSB0YWJsZUxheW91dDogTnpUYWJsZUxheW91dCA9ICdhdXRvJztcbiAgQElucHV0KCkgdGhlYWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mQ29sV2lkdGg6IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgQElucHV0KCkgc2Nyb2xsWDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG59XG4iXX0=