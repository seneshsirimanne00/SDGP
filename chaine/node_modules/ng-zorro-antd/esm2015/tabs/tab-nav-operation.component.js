/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/dropdown';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/menu';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc6 from './tab-add-button.component';

function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r5.tab.label);
} }
const _c0 = function () { return { visible: false }; };
function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵlistener("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const item_r5 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onSelect(item_r5); })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const item_r5 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onContextmenu(item_r5, $event); });
    ɵngcc0.ɵɵtemplate(1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    ɵngcc0.ɵɵproperty("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(6, _c0));
} }
function NzTabNavOperationComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 6);
    ɵngcc0.ɵɵtemplate(1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.items);
} }
function NzTabNavOperationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.addClicked.emit(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("addIcon", ctx_r3.addIcon);
} }
const _c1 = function () { return { minWidth: "46px" }; };
export class NzTabNavOperationComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.items = [];
        this.addable = false;
        this.addIcon = 'plus';
        this.addClicked = new EventEmitter();
        this.selected = new EventEmitter();
        this.closeAnimationWaitTimeoutId = -1;
        this.menuOpened = false;
        this.element = this.elementRef.nativeElement;
    }
    onSelect(item) {
        if (!item.disabled) {
            // ignore nzCanDeactivate
            item.tab.nzClick.emit();
            this.selected.emit(item);
        }
    }
    onContextmenu(item, e) {
        if (!item.disabled) {
            item.tab.nzContextmenu.emit(e);
        }
    }
    showItems() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
        this.menuOpened = true;
        this.cdr.markForCheck();
    }
    menuVisChange(visible) {
        if (!visible) {
            this.closeAnimationWaitTimeoutId = setTimeout(() => {
                this.menuOpened = false;
                this.cdr.markForCheck();
            }, 150);
        }
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
    ngOnDestroy() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
    }
}
NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) { return new (t || NzTabNavOperationComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTabNavOperationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabNavOperationComponent, selectors: [["nz-tab-nav-operation"]], hostAttrs: [1, "ant-tabs-nav-operations"], hostVars: 2, hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["nzTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "addIcon", "click"]], template: function NzTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0, 1);
        ɵngcc0.ɵɵlistener("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
        ɵngcc0.ɵɵelement(2, "i", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
        ɵngcc0.ɵɵtemplate(5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("nzDropdownMenu", _r1)("nzOverlayStyle", ɵngcc0.ɵɵpureFunction0(5, _c1))("nzMatchWidthElement", null);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.menuOpened);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.addable);
    } }, directives: [ɵngcc1.NzDropDownDirective, ɵngcc2.NzIconDirective, ɵngcc1.NzDropdownMenuComponent, ɵngcc3.NgIf, ɵngcc4.NzMenuDirective, ɵngcc3.NgForOf, ɵngcc4.NzMenuItemDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc6.NzTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
NzTabNavOperationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzTabNavOperationComponent.propDecorators = {
    items: [{ type: Input }],
    addable: [{ type: Input }],
    addIcon: [{ type: Input }],
    addClicked: [{ type: Output }],
    selected: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabNavOperationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tab-nav-operation',
                exportAs: 'nzTabNavOperation',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">{{ item.tab.label }}</ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
                host: {
                    class: 'ant-tabs-nav-operations',
                    '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { items: [{
            type: Input
        }], addable: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], addClicked: [{
            type: Output
        }], selected: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0R2QixNQUFNLE9BQU8sMEJBQTBCO0FBQUcsSUFXeEMsWUFBbUIsR0FBc0IsRUFBVSxVQUFtQztBQUN4RixRQURxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7QUFBQyxRQVY5RSxVQUFLLEdBQTRCLEVBQUUsQ0FBQztBQUMvQyxRQUFXLFlBQU8sR0FBWSxLQUFLLENBQUM7QUFDcEMsUUFBVyxZQUFPLEdBQW9DLE1BQU0sQ0FBQztBQUM3RCxRQUNxQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztBQUMzRCxRQUFxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7QUFDMUUsUUFBRSxnQ0FBMkIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQyxRQUFFLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDckIsUUFHSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLElBQTJCO0FBQUksUUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDeEIsWUFBTSx5QkFBeUI7QUFDL0IsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxJQUEyQixFQUFFLENBQWE7QUFBSSxRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN4QixZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxTQUFTO0FBQUssUUFDWixZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDbkQsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhLENBQUMsT0FBZ0I7QUFBSSxRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2xCLFlBQU0sSUFBSSxDQUFDLDJCQUEyQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDekQsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDaEMsZ0JBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoQyxZQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNkLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFBSztBQUNkLFFBQUosT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFdBQVcsS0FBSSxDQUFDLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxnQkFBZ0I7QUFBSztBQUNmLFFBQUosT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFlBQVksS0FBSSxDQUFDLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDbkQsSUFBRSxDQUFDO0FBQ0g7c0RBcEdDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsc0JBQXNCLGtCQUNoQyxRQUFRLEVBQUUsbUJBQW1CLGtCQUM3QixtQkFBbUIsRUFBRSxLQUFLO0VBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOztvOEJBa0NULGtCQUNELElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUseUJBQXlCLHNCQUNoQyx3Q0FBd0MsRUFBRSxvQkFBb0I7VUFDL0QsY0FDRjs7Ozs7Ozs7Ozs7Ozs7OzRTQUNJO0FBQUM7QUFBb0QsWUE3RHhELGlCQUFpQjtBQUNqQixZQUNBLFVBQVU7QUFDWDtBQUFHO0FBSUYsb0JBdURDLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHlCQUVWLE1BQU07QUFBSyx1QkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTnpUYWJOYXZJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2LWl0ZW0uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFiLW5hdi1vcGVyYXRpb24nLFxuICBleHBvcnRBczogJ256VGFiTmF2T3BlcmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIG56LWRyb3Bkb3duXG4gICAgICBjbGFzcz1cImFudC10YWJzLW5hdi1tb3JlXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lPVwibnotdGFicy1kcm9wZG93blwiXG4gICAgICAjZHJvcGRvd25UcmlnZ2VyPVwibnpEcm9wZG93blwiXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwibWVudVwiXG4gICAgICBbbnpPdmVybGF5U3R5bGVdPVwieyBtaW5XaWR0aDogJzQ2cHgnIH1cIlxuICAgICAgW256TWF0Y2hXaWR0aEVsZW1lbnRdPVwibnVsbFwiXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIm1lbnVWaXNDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobW91c2VlbnRlcik9XCJzaG93SXRlbXMoKVwiXG4gICAgPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJlbGxpcHNpc1wiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8bnotZHJvcGRvd24tbWVudSAjbWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICA8dWwgbnotbWVudSAqbmdJZj1cIm1lbnVPcGVuZWRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgbnotbWVudS1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNlbGVjdGVkXT1cIml0ZW0uYWN0aXZlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCJcbiAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoaXRlbSlcIlxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbkNvbnRleHRtZW51KGl0ZW0sICRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0udGFiLmxhYmVsOyBjb250ZXh0OiB7IHZpc2libGU6IGZhbHNlIH1cIj57eyBpdGVtLnRhYi5sYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImFkZGFibGVcIiBuei10YWItYWRkLWJ1dHRvbiBbYWRkSWNvbl09XCJhZGRJY29uXCIgKGNsaWNrKT1cImFkZENsaWNrZWQuZW1pdCgpXCI+PC9idXR0b24+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10YWJzLW5hdi1vcGVyYXRpb25zJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLW5hdi1vcGVyYXRpb25zLWhpZGRlbl0nOiAnaXRlbXMubGVuZ3RoID09PSAwJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaXRlbXM6IE56VGFiTmF2SXRlbURpcmVjdGl2ZVtdID0gW107XG4gIEBJbnB1dCgpIGFkZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWRkQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYk5hdkl0ZW1EaXJlY3RpdmU+KCk7XG4gIGNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCA9IC0xO1xuICBtZW51T3BlbmVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG9uU2VsZWN0KGl0ZW06IE56VGFiTmF2SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgLy8gaWdub3JlIG56Q2FuRGVhY3RpdmF0ZVxuICAgICAgaXRlbS50YWIubnpDbGljay5lbWl0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0bWVudShpdGVtOiBOelRhYk5hdkl0ZW1EaXJlY3RpdmUsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIGl0ZW0udGFiLm56Q29udGV4dG1lbnUuZW1pdChlKTtcbiAgICB9XG4gIH1cbiAgc2hvd0l0ZW1zKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCk7XG4gICAgdGhpcy5tZW51T3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG1lbnVWaXNDaGFuZ2UodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tZW51T3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Py5vZmZzZXRXaWR0aCB8fCAwO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldEhlaWdodCB8fCAwO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkKTtcbiAgfVxufVxuIl19