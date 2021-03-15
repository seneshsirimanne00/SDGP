/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzTableSortersComponent_ng_template_1_Template(rf, ctx) { }
function NzTableSortersComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", ctx_r1.sortOrder == "ascend");
} }
function NzTableSortersComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", ctx_r2.sortOrder == "descend");
} }
export class NzTableSortersComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrder = null;
        this.contentTemplate = null;
        this.isUp = false;
        this.isDown = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-column-sorters');
    }
    ngOnChanges(changes) {
        const { sortDirections } = changes;
        if (sortDirections) {
            this.isUp = this.sortDirections.indexOf('ascend') !== -1;
            this.isDown = this.sortDirections.indexOf('descend') !== -1;
        }
    }
}
NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) { return new (t || NzTableSortersComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTableSortersComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableSortersComponent, selectors: [["nz-table-sorters"]], inputs: { sortDirections: "sortDirections", sortOrder: "sortOrder", contentTemplate: "contentTemplate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]], template: function NzTableSortersComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span");
        ɵngcc0.ɵɵtemplate(1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtemplate(4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 3);
        ɵngcc0.ɵɵtemplate(5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isUp);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isDown);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc2.ɵNzTransitionPatchDirective, ɵngcc3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTableSortersComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzTableSortersComponent.propDecorators = {
    sortDirections: [{ type: Input }],
    sortOrder: [{ type: Input }],
    contentTemplate: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableSortersComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table-sorters',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        <i nz-icon nzType="caret-up" *ngIf="isUp" class="ant-table-column-sorter-up" [class.active]="sortOrder == 'ascend'"></i>
        <i nz-icon nzType="caret-down" *ngIf="isDown" class="ant-table-column-sorter-down" [class.active]="sortOrder == 'descend'"></i>
      </span>
    </span>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { sortDirections: [{
            type: Input
        }], sortOrder: [{
            type: Input
        }], contentTemplate: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL2FkZG9uL3NvcnRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CdkIsTUFBTSxPQUFPLHVCQUF1QjtBQUFHLElBT3JDLFlBQW9CLFVBQXNCO0FBQzVDLFFBRHNCLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQU5sQyxtQkFBYyxHQUF1QixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUUsUUFBVyxjQUFTLEdBQXFCLElBQUksQ0FBQztBQUM5QyxRQUFXLG9CQUFlLEdBQWtDLElBQUksQ0FBQztBQUNqRSxRQUFFLFNBQUksR0FBRyxLQUFLLENBQUM7QUFDZixRQUFFLFdBQU0sR0FBRyxLQUFLLENBQUM7QUFDakIsUUFFSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDNUUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3ZDLFFBQUksSUFBSSxjQUFjLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsRSxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7bURBbENDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixtQkFBbUIsRUFBRSxLQUFLO1NBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLDhnQkFRVCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lLQUNJO0FBQUM7QUFBaUQsWUF6QnJELFVBQVU7QUFDWDtBQUFHO0FBR0ksNkJBc0JMLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelRhYmxlU29ydE9yZGVyIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJsZS1zb3J0ZXJzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuPjxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyXCIgW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydGVyLWZ1bGxdPVwiaXNEb3duICYmIGlzVXBcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItaW5uZXJcIj5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC11cFwiICpuZ0lmPVwiaXNVcFwiIGNsYXNzPVwiYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXBcIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRPcmRlciA9PSAnYXNjZW5kJ1wiPjwvaT5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC1kb3duXCIgKm5nSWY9XCJpc0Rvd25cIiBjbGFzcz1cImFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd25cIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRPcmRlciA9PSAnZGVzY2VuZCdcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVTb3J0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc29ydERpcmVjdGlvbnM6IE56VGFibGVTb3J0T3JkZXJbXSA9IFsnYXNjZW5kJywgJ2Rlc2NlbmQnLCBudWxsXTtcbiAgQElucHV0KCkgc29ydE9yZGVyOiBOelRhYmxlU29ydE9yZGVyID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIGlzVXAgPSBmYWxzZTtcbiAgaXNEb3duID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXJzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzb3J0RGlyZWN0aW9ucyB9ID0gY2hhbmdlcztcbiAgICBpZiAoc29ydERpcmVjdGlvbnMpIHtcbiAgICAgIHRoaXMuaXNVcCA9IHRoaXMuc29ydERpcmVjdGlvbnMuaW5kZXhPZignYXNjZW5kJykgIT09IC0xO1xuICAgICAgdGhpcy5pc0Rvd24gPSB0aGlzLnNvcnREaXJlY3Rpb25zLmluZGV4T2YoJ2Rlc2NlbmQnKSAhPT0gLTE7XG4gICAgfVxuICB9XG59XG4iXX0=