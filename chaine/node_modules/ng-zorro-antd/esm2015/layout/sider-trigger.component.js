/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';

const _c0 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzZeroTrigger || _r4);
} }
function NzSiderTriggerComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.nzTrigger || _r2);
} }
function NzSiderTriggerComponent_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r8.nzCollapsed ? "right" : "left");
} }
function NzSiderTriggerComponent_ng_template_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r9.nzCollapsed ? "left" : "right");
} }
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSiderTriggerComponent_ng_template_2_i_0_Template, 1, 1, "i", 4);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_template_2_i_1_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzReverseArrow);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzReverseArrow);
} }
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} }
export class NzSiderTriggerComponent {
    constructor() {
        this.nzCollapsed = false;
        this.nzReverseArrow = false;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.matchBreakPoint = false;
        this.nzCollapsedWidth = null;
        this.siderWidth = null;
        this.nzBreakpoint = null;
        this.isZeroTrigger = false;
        this.isNormalTrigger = false;
    }
    updateTriggerType() {
        this.isZeroTrigger = this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
        this.isNormalTrigger = this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        this.updateTriggerType();
    }
    ngOnChanges() {
        this.updateTriggerType();
    }
}
NzSiderTriggerComponent.ɵfac = function NzSiderTriggerComponent_Factory(t) { return new (t || NzSiderTriggerComponent)(); };
NzSiderTriggerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSiderTriggerComponent, selectors: [["", "nz-sider-trigger", ""]], hostVars: 10, hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        ɵngcc0.ɵɵclassProp("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
    } }, inputs: { nzCollapsed: "nzCollapsed", nzReverseArrow: "nzReverseArrow", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", matchBreakPoint: "matchBreakPoint", nzCollapsedWidth: "nzCollapsedWidth", siderWidth: "siderWidth", nzBreakpoint: "nzBreakpoint" }, exportAs: ["nzSiderTrigger"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 6, vars: 2, consts: [[4, "ngIf"], ["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSiderTriggerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, NzSiderTriggerComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isZeroTrigger);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isNormalTrigger);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzSiderTriggerComponent.propDecorators = {
    nzCollapsed: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    matchBreakPoint: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    siderWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSiderTriggerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-sider-trigger]',
                exportAs: 'nzSiderTrigger',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger"></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" *ngIf="!nzReverseArrow"></i>
      <i nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" *ngIf="nzReverseArrow"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i nz-icon nzType="bars"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
                    '[style.width]': 'isNormalTrigger ? siderWidth : null',
                    '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
                    '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
                    '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
                }
            }]
    }], function () { return []; }, { nzCollapsed: [{
            type: Input
        }], nzReverseArrow: [{
            type: Input
        }], nzZeroTrigger: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], matchBreakPoint: [{
            type: Input
        }], nzCollapsedWidth: [{
            type: Input
        }], siderWidth: [{
            type: Input
        }], nzBreakpoint: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXItdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLXRyaWdnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBa0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQzdILE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQTdCdkM7QUFDRyxRQTZCUSxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUFXLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLFFBQVcsa0JBQWEsR0FBNkIsSUFBSSxDQUFDO0FBQzFELFFBQVcsY0FBUyxHQUF5QyxTQUFTLENBQUM7QUFDdkUsUUFBVyxvQkFBZSxHQUFHLEtBQUssQ0FBQztBQUNuQyxRQUFXLHFCQUFnQixHQUFrQixJQUFJLENBQUM7QUFDbEQsUUFBVyxlQUFVLEdBQWtCLElBQUksQ0FBQztBQUM1QyxRQUFXLGlCQUFZLEdBQTJCLElBQUksQ0FBQztBQUN2RCxRQUFFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFFBQUUsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFVQSxDQUFDO0FBQ0QsSUFYRSxpQkFBaUI7QUFBSyxRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVILFFBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELElBQUUsQ0FBQztBQUNILElBQUUsUUFBUTtBQUFLLFFBQ1gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDttREFsREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxvQkFBb0I7VUFDOUIsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxRQUFRLEVBQUU7Ozt3T0FjVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osa0NBQWtDLEVBQUUsaUJBQWlCLHNCQUNyRCxlQUFlLEVBQUUscUNBQXFDLHNCQUN0RCw2Q0FBNkMsRUFBRSxlQUFlLHNCQUM5RCxtREFBbUQsRUFBRSxpQ0FBaUMsc0JBQ3RGO2lCQUFrRCxFQUFFLGtDQUFrQyxrQkFDdkYsY0FDRjs7Ozs7Ozs7NkhBQ0k7QUFBQztBQUEyQywwQkFDOUMsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpCcmVha3BvaW50S2V5IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXNpZGVyLXRyaWdnZXJdJyxcbiAgZXhwb3J0QXM6ICduelNpZGVyVHJpZ2dlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNaZXJvVHJpZ2dlclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56WmVyb1RyaWdnZXIgfHwgZGVmYXVsdFplcm9UcmlnZ2VyXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNOb3JtYWxUcmlnZ2VyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUcmlnZ2VyIHx8IGRlZmF1bHRUcmlnZ2VyXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUcmlnZ2VyPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56Q29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J1wiICpuZ0lmPVwiIW56UmV2ZXJzZUFycm93XCI+PC9pPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56Q29sbGFwc2VkID8gJ2xlZnQnIDogJ3JpZ2h0J1wiICpuZ0lmPVwibnpSZXZlcnNlQXJyb3dcIj48L2k+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRaZXJvVHJpZ2dlcj5cbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiYmFyc1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXRyaWdnZXJdJzogJ2lzTm9ybWFsVHJpZ2dlcicsXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnaXNOb3JtYWxUcmlnZ2VyID8gc2lkZXJXaWR0aCA6IG51bGwnLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoLXRyaWdnZXJdJzogJ2lzWmVyb1RyaWdnZXInLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoLXRyaWdnZXItcmlnaHRdJzogJ2lzWmVyb1RyaWdnZXIgJiYgbnpSZXZlcnNlQXJyb3cnLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoLXRyaWdnZXItbGVmdF0nOiAnaXNaZXJvVHJpZ2dlciAmJiAhbnpSZXZlcnNlQXJyb3cnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTaWRlclRyaWdnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56WmVyb1RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCB1bmRlZmluZWQgfCBudWxsID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBtYXRjaEJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb2xsYXBzZWRXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNpZGVyV2lkdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekJyZWFrcG9pbnQ6IE56QnJlYWtwb2ludEtleSB8IG51bGwgPSBudWxsO1xuICBpc1plcm9UcmlnZ2VyID0gZmFsc2U7XG4gIGlzTm9ybWFsVHJpZ2dlciA9IGZhbHNlO1xuICB1cGRhdGVUcmlnZ2VyVHlwZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzWmVyb1RyaWdnZXIgPSB0aGlzLm56Q29sbGFwc2VkV2lkdGggPT09IDAgJiYgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLm1hdGNoQnJlYWtQb2ludCkgfHwgIXRoaXMubnpCcmVha3BvaW50KTtcbiAgICB0aGlzLmlzTm9ybWFsVHJpZ2dlciA9IHRoaXMubnpDb2xsYXBzZWRXaWR0aCAhPT0gMDtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUeXBlKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVUcmlnZ2VyVHlwZSgpO1xuICB9XG59XG4iXX0=