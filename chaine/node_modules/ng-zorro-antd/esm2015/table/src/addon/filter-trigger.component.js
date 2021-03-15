/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/dropdown';

const _c0 = ["*"];
export class NzFilterTriggerComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.nzActive = false;
        this.nzVisible = false;
        this.nzHasBackdrop = false;
        this.nzVisibleChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-filter-trigger-container');
    }
    onVisibleChange(visible) {
        this.nzVisible = visible;
        this.nzVisibleChange.next(visible);
    }
    onFilterClick($event) {
        $event.stopPropagation();
    }
    hide() {
        this.nzVisible = false;
        this.cdr.markForCheck();
    }
    show() {
        this.nzVisible = true;
        this.cdr.markForCheck();
    }
}
NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) { return new (t || NzFilterTriggerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzFilterTriggerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzFilterTriggerComponent, selectors: [["nz-filter-trigger"]], hostVars: 2, hostBindings: function NzFilterTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-filter-trigger-container-open", ctx.nzVisible);
    } }, inputs: { nzActive: "nzActive", nzVisible: "nzVisible", nzHasBackdrop: "nzHasBackdrop", nzDropdownMenu: "nzDropdownMenu" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzFilterTrigger"], ngContentSelectors: _c0, decls: 2, vars: 8, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzHasBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange", "click"]], template: function NzFilterTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵlistener("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) { return ctx.onVisibleChange($event); })("click", function NzFilterTriggerComponent_Template_span_click_0_listener($event) { return ctx.onFilterClick($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
        ɵngcc0.ɵɵproperty("nzHasBackdrop", ctx.nzHasBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
    } }, directives: [ɵngcc1.NzDropDownDirective], encapsulation: 2, changeDetection: 0 });
NzFilterTriggerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzFilterTriggerComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzDropdownMenu: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzHasBackdrop: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFilterTriggerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-filter-trigger',
                exportAs: `nzFilterTrigger`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzHasBackdrop]="nzHasBackdrop"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
      (click)="onFilterClick($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
                host: {
                    '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { nzActive: [{
            type: Input
        }], nzVisible: [{
            type: Input
        }], nzHasBackdrop: [{
            type: Input
        }], nzVisibleChange: [{
            type: Output
        }], nzDropdownMenu: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXRyaWdnZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9hZGRvbi9maWx0ZXItdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQThCakUsTUFBTSxPQUFPLHdCQUF3QjtBQUNyQyxJQTBCRSxZQUFvQixHQUFzQixFQUFVLFVBQXNCO0FBQzVFLFFBRHNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUExQmxFLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFDVyxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQVcsa0JBQWEsR0FBRyxLQUFLLENBQUM7QUFDakMsUUFDcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ25FLFFBcUJJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUN0RixJQUFFLENBQUM7QUFDSCxJQXZCRSxlQUFlLENBQUMsT0FBZ0I7QUFBSSxRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QixRQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYSxDQUFDLE1BQWtCO0FBQUksUUFDbEMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSTtBQUFLLFFBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSTtBQUFLLFFBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDMUIsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNIO29EQXREQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG1CQUFtQixrQkFDN0IsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDO0lBQU0sa0JBQy9DLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7OzZTQWlCVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osaURBQWlELEVBQUUsV0FBVyxrQkFDL0QsY0FDRjs7Ozs7Ozs7OzJGQUNJO0FBQUM7QUFDVSxZQXZDZCxpQkFBaUI7QUFDakIsWUFDQSxVQUFVO0FBQ1g7QUFBRztBQUdTLHVCQWlDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssOEJBRVYsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1maWx0ZXItdHJpZ2dlcicsXG4gIGV4cG9ydEFzOiBgbnpGaWx0ZXJUcmlnZ2VyYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBuei1kcm9wZG93blxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICBbbnpIYXNCYWNrZHJvcF09XCJuekhhc0JhY2tkcm9wXCJcbiAgICAgIFtuekNsaWNrSGlkZV09XCJmYWxzZVwiXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwibnpEcm9wZG93bk1lbnVcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJuekFjdGl2ZVwiXG4gICAgICBbY2xhc3MuYW50LXRhYmxlLWZpbHRlci1vcGVuXT1cIm56VmlzaWJsZVwiXG4gICAgICBbbnpWaXNpYmxlXT1cIm56VmlzaWJsZVwiXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJvbkZpbHRlckNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXItb3Blbl0nOiAnbnpWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyVHJpZ2dlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51ITogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekhhc0JhY2tkcm9wID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBvblZpc2libGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KHZpc2libGUpO1xuICB9XG5cbiAgb25GaWx0ZXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRhYmxlLWZpbHRlci10cmlnZ2VyLWNvbnRhaW5lcicpO1xuICB9XG59XG4iXX0=