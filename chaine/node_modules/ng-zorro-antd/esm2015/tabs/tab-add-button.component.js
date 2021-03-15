/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, ElementRef, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc2 from 'ng-zorro-antd/icon';

function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r1);
} }
export class NzTabAddButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.addIcon = 'plus';
        this.element = this.elementRef.nativeElement;
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
}
NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) { return new (t || NzTabAddButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTabAddButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabAddButtonComponent, selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.addIcon);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc2.NzIconDirective], encapsulation: 2 });
NzTabAddButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzTabAddButtonComponent.propDecorators = {
    addIcon: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabAddButtonComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tab-add-button, button[nz-tab-add-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-nav-add',
                    'aria-label': 'Add tab',
                    type: 'button'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { addIcon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFkZC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLWFkZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBaUIxRSxNQUFNLE9BQU8sdUJBQXVCO0FBQ3BDLElBSUUsWUFBb0IsVUFBbUM7QUFDekQsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7QUFBQyxRQUovQyxZQUFPLEdBQW9DLE1BQU0sQ0FBQztBQUM3RCxRQUlJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDakQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQUs7QUFDZCxRQUFKLE9BQU8sT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCO0FBQUs7QUFDZixRQUFKLE9BQU8sT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxZQUFZLEtBQUksQ0FBQyxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNIO21EQTdCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDhDQUE4QyxrQkFDeEQ7Q0FBUSxFQUFFLGdKQUlULGtCQUNELElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsa0JBQWtCLHNCQUN6QixZQUFZLEVBQUUsU0FBUyxzQkFDdkIsSUFBSSxFQUFFLFFBQVEsa0JBQ2YsY0FDRjs7OzsyR0FDSTtBQUFDO0FBQ1UsWUFsQkksVUFBVTtBQUFHO0FBQUc7QUFFakMsc0JBZ0JBLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWItYWRkLWJ1dHRvbiwgYnV0dG9uW256LXRhYi1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImFkZEljb247IGxldCBpY29uXCI+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicy1uYXYtYWRkJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdBZGQgdGFiJyxcbiAgICB0eXBlOiAnYnV0dG9uJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFiQWRkQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldEVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICBnZXRFbGVtZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudD8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIH1cbn1cbiJdfQ==