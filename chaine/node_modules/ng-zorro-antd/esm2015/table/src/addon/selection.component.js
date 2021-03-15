/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/checkbox';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from 'ng-zorro-antd/dropdown';
import * as ɵngcc5 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc6 from 'ng-zorro-antd/icon';
import * as ɵngcc7 from 'ng-zorro-antd/menu';

function NzTableSelectionComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 2);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onCheckedChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
} }
function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() { const selection_r6 = ctx.$implicit; return selection_r6.onSelect(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const selection_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selection_r6.text, " ");
} }
function NzTableSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "span", 4);
    ɵngcc0.ɵɵelement(2, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "nz-dropdown-menu", null, 6);
    ɵngcc0.ɵɵelementStart(5, "ul", 7);
    ɵngcc0.ɵɵtemplate(6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = ɵngcc0.ɵɵreference(4);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzDropdownMenu", _r4);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.listOfSelections);
} }
export class NzTableSelectionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.listOfSelections = [];
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.showCheckbox = false;
        this.showRowSelection = false;
        this.checkedChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-selection');
    }
    onCheckedChange(checked) {
        this.checked = checked;
        this.checkedChange.emit(checked);
    }
}
NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) { return new (t || NzTableSelectionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTableSelectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableSelectionComponent, selectors: [["nz-table-selection"]], inputs: { listOfSelections: "listOfSelections", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", showCheckbox: "showCheckbox", showRowSelection: "showRowSelection" }, outputs: { checkedChange: "checkedChange" }, decls: 2, vars: 2, consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]], template: function NzTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);
        ɵngcc0.ɵɵtemplate(1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.showCheckbox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showRowSelection);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzCheckboxComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc4.NzDropDownDirective, ɵngcc5.ɵNzTransitionPatchDirective, ɵngcc6.NzIconDirective, ɵngcc4.NzDropdownMenuComponent, ɵngcc7.NzMenuDirective, ɵngcc1.NgForOf, ɵngcc7.NzMenuItemDirective], encapsulation: 2, changeDetection: 0 });
NzTableSelectionComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzTableSelectionComponent.propDecorators = {
    listOfSelections: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    indeterminate: [{ type: Input }],
    showCheckbox: [{ type: Input }],
    showRowSelection: [{ type: Input }],
    checkedChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableSelectionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table-selection',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <label
      *ngIf="showCheckbox"
      nz-checkbox
      [class.ant-table-selection-select-all-custom]="showRowSelection"
      [ngModel]="checked"
      [nzDisabled]="disabled"
      [nzIndeterminate]="indeterminate"
      (ngModelChange)="onCheckedChange($event)"
    ></label>
    <div class="ant-table-selection-extra" *ngIf="showRowSelection">
      <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
        <i nz-icon nzType="down"></i>
      </span>
      <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
        <ul nz-menu class="ant-table-selection-menu">
          <li nz-menu-item *ngFor="let selection of listOfSelections" (click)="selection.onSelect()">
            {{ selection.text }}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { listOfSelections: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], showCheckbox: [{
            type: Input
        }], showRowSelection: [{
            type: Input
        }], checkedChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvYWRkb24vc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQy9ILE1BQU0sT0FBTyx5QkFBeUI7QUFDdEMsSUFRRSxZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFSbEMscUJBQWdCLEdBQXVFLEVBQUUsQ0FBQztBQUNyRyxRQUFXLFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQVcsa0JBQWEsR0FBRyxLQUFLLENBQUM7QUFDakMsUUFBVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQUFXLHFCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNwQyxRQUFxQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDakUsUUFFSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlLENBQUMsT0FBZ0I7QUFBSSxRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNIO3FEQS9DQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztPQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRSx3MEJBc0JULGNBQ0Y7Ozs7Ozs7NFVBQ0k7QUFBQztBQUNVLFlBakM2QixVQUFVO0FBQUc7QUFBRztBQUE2QywrQkFpQ3ZHLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDRCQUNWLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUtc2VsZWN0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbFxuICAgICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgbnotY2hlY2tib3hcbiAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLXNlbGVjdC1hbGwtY3VzdG9tXT1cInNob3dSb3dTZWxlY3Rpb25cIlxuICAgICAgW25nTW9kZWxdPVwiY2hlY2tlZFwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpJbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKCRldmVudClcIlxuICAgID48L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLWV4dHJhXCIgKm5nSWY9XCJzaG93Um93U2VsZWN0aW9uXCI+XG4gICAgICA8c3BhbiBuei1kcm9wZG93biBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZG93blwiIG56UGxhY2VtZW50PVwiYm90dG9tTGVmdFwiIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICNzZWxlY3Rpb25NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgICAgPHVsIG56LW1lbnUgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLW1lbnVcIj5cbiAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBzZWxlY3Rpb24gb2YgbGlzdE9mU2VsZWN0aW9uc1wiIChjbGljayk9XCJzZWxlY3Rpb24ub25TZWxlY3QoKVwiPlxuICAgICAgICAgICAge3sgc2VsZWN0aW9uLnRleHQgfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVTZWxlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBsaXN0T2ZTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgb25TZWxlY3QoLi4uYXJnczogTnpTYWZlQW55W10pOiBOelNhZmVBbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS1zZWxlY3Rpb24nKTtcbiAgfVxuXG4gIG9uQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdChjaGVja2VkKTtcbiAgfVxufVxuIl19