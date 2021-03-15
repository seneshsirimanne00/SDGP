import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../addon/selection.component';

const _c0 = ["nzSelections", ""];
const _c1 = ["*"];
export class NzThSelectionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzShowCheckbox = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new EventEmitter();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-selection-column');
    }
    onCheckedChange(checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    }
    ngOnChanges(changes) {
        const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
        const { nzChecked, nzSelections, nzShowExpand, nzShowCheckbox } = changes;
        if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
        }
        if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
        }
        if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
            this.nzShowRowSelection = true;
        }
        if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
        }
    }
}
NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) { return new (t || NzThSelectionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzThSelectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzThSelectionComponent, selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]], inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzShowCheckbox: "nzShowCheckbox", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 6, consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]], template: function NzThSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "nz-table-selection", 0);
        ɵngcc0.ɵɵlistener("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) { return ctx.onCheckedChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
    } }, directives: [ɵngcc1.NzTableSelectionComponent], encapsulation: 2, changeDetection: 0 });
NzThSelectionComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzThSelectionComponent.propDecorators = {
    nzSelections: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzShowRowSelection: [{ type: Input }],
    nzCheckedChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzThSelectionComponent, [{
        type: Component,
        args: [{
                selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    ></nz-table-selection>
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzSelections: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzShowCheckbox: [{
            type: Input
        }], nzShowRowSelection: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvY2VsbC90aC1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUNBQXVDO0FBQ3ZDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFvQnZELE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQWVwQyxZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFYbEMsaUJBQVksR0FBdUUsRUFBRSxDQUFDO0FBQ2pHLFFBQVcsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUM3QixRQUFXLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUIsUUFBVyxvQkFBZSxHQUFHLEtBQUssQ0FBQztBQUNuQyxRQUEyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztBQUNsRCxRQUEyQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDdEQsUUFBcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ25FLFFBQ1UsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3hDLFFBQVUsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO0FBQzFDLFFBRUksbURBQW1EO0FBQ3ZELFFBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzlFLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZSxDQUFDLE9BQWdCO0FBQUksUUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7QUFDbEgsUUFBSSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQzlFLFFBQUksSUFBSSxZQUFZLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLFNBQUs7QUFDTCxRQUFJLElBQUksY0FBYyxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztBQUMxQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtBQUNwRSxZQUFNLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDckMsU0FBSztBQUNMLFFBQUksSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDbkUsWUFBTSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUNqQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7a0RBM0RDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7S0FBMEUsa0JBQ3BGLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLG9XQVdULGNBQ0Y7Ozs7Ozs7O2lHQUNJO0FBQUM7QUFBZ0QsWUE5QnBELFVBQVU7QUFDWDtBQUFHO0FBR0ksMkJBOEJMLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLDhCQUNWLE1BQU07QUFBSTtBQUZjO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDYiw4REFEbUM7QUFDdkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNqQixrRUFEMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUN0RDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoW256U2VsZWN0aW9uc10sdGhbbnpDaGVja2VkXSx0aFtuelNob3dDaGVja2JveF0sdGhbbnpTaG93Um93U2VsZWN0aW9uXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotdGFibGUtc2VsZWN0aW9uXG4gICAgICBbY2hlY2tlZF09XCJuekNoZWNrZWRcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcbiAgICAgIFtsaXN0T2ZTZWxlY3Rpb25zXT1cIm56U2VsZWN0aW9uc1wiXG4gICAgICBbc2hvd0NoZWNrYm94XT1cIm56U2hvd0NoZWNrYm94XCJcbiAgICAgIFtzaG93Um93U2VsZWN0aW9uXT1cIm56U2hvd1Jvd1NlbGVjdGlvblwiXG4gICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotdGFibGUtc2VsZWN0aW9uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelRoU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0NoZWNrYm94OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dSb3dTZWxlY3Rpb246IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuelNlbGVjdGlvbnM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBvblNlbGVjdCguLi5hcmdzOiBOelNhZmVBbnlbXSk6IE56U2FmZUFueSB9PiA9IFtdO1xuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGlzTnpTaG93RXhwYW5kQ2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzTnpTaG93Q2hlY2tib3hDaGFuZ2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4nKTtcbiAgfVxuXG4gIG9uQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgaXNGaXJzdENoYW5nZSA9ICh2YWx1ZTogU2ltcGxlQ2hhbmdlKSA9PiB2YWx1ZSAmJiB2YWx1ZS5maXJzdENoYW5nZSAmJiB2YWx1ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7IG56Q2hlY2tlZCwgbnpTZWxlY3Rpb25zLCBuelNob3dFeHBhbmQsIG56U2hvd0NoZWNrYm94IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelNob3dFeHBhbmQpIHtcbiAgICAgIHRoaXMuaXNOelNob3dFeHBhbmRDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG56U2hvd0NoZWNrYm94KSB7XG4gICAgICB0aGlzLmlzTnpTaG93Q2hlY2tib3hDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzRmlyc3RDaGFuZ2UobnpTZWxlY3Rpb25zKSAmJiAhdGhpcy5pc056U2hvd0V4cGFuZENoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93Um93U2VsZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzRmlyc3RDaGFuZ2UobnpDaGVja2VkKSAmJiAhdGhpcy5pc056U2hvd0NoZWNrYm94Q2hhbmdlZCkge1xuICAgICAgdGhpcy5uelNob3dDaGVja2JveCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=