/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
export class NzTreeNodeCheckboxComponent {
    constructor() {
        this.nzClick = new EventEmitter();
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
}
NzTreeNodeCheckboxComponent.ɵfac = function NzTreeNodeCheckboxComponent_Factory(t) { return new (t || NzTreeNodeCheckboxComponent)(); };
NzTreeNodeCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeCheckboxComponent, selectors: [["nz-tree-node-checkbox", 3, "builtin", ""]], hostAttrs: [1, "ant-tree-checkbox"], hostVars: 6, hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeNodeCheckboxComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-checkbox-checked", ctx.nzChecked)("ant-tree-checkbox-indeterminate", ctx.nzIndeterminate)("ant-tree-checkbox-disabled", ctx.nzDisabled);
    } }, inputs: { nzChecked: "nzChecked", nzIndeterminate: "nzIndeterminate", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick" }, decls: 1, vars: 0, consts: [[1, "ant-tree-checkbox-inner"]], template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeCheckboxComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeCheckboxComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-checkbox:not([builtin])',
                template: `
    <span class="ant-tree-checkbox-inner"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    class: 'ant-tree-checkbox',
                    '[class.ant-tree-checkbox-checked]': `nzChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `nzIndeterminate`,
                    '[class.ant-tree-checkbox-disabled]': `nzDisabled`,
                    '(click)': 'onClick($event)'
                }
            }]
    }], function () { return []; }, { nzClick: [{
            type: Output
        }], nzChecked: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHJlZS12aWV3L2NoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWlCdkQsTUFBTSxPQUFPLDJCQUEyQjtBQUN4QyxJQWhCQTtBQUNHLFFBb0JrQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztBQUM5RCxJQU1BLENBQUM7QUFDRCxJQU5FLE9BQU8sQ0FBQyxDQUFhO0FBQUksUUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDMUIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7dURBNUJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7RUFBc0Msa0JBQ2hELFFBQVEsRUFBRSx1REFFVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxtQkFBbUIsc0JBQzFCOzZCQUFtQyxFQUFFLFdBQVcsc0JBQ2hELHlDQUF5QyxFQUFFLGlCQUFpQjtPQUM1RDt1QkFBb0MsRUFBRSxZQUFZLHNCQUNsRCxTQUFTLEVBQUUsaUJBQWlCLGtCQUM3QixjQUNGOzs7aURBQ0k7QUFBQztBQUNJLHdCQUVQLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHNCQUNWLE1BQU07QUFBSTtBQURjO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDViwrREFEOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNoRDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZS1jaGVja2JveDpub3QoW2J1aWx0aW5dKScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJlZS1jaGVja2JveC1pbm5lclwiPjwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdHJlZS1jaGVja2JveCcsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1jaGVja2JveC1jaGVja2VkXSc6IGBuekNoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV0nOiBgbnpJbmRldGVybWluYXRlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWRpc2FibGVkXSc6IGBuekRpc2FibGVkYCxcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekNoZWNrZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZD86IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56Q2xpY2suZW1pdChlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==