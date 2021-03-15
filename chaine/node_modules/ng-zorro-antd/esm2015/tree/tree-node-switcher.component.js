/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-select-tree-switcher-icon", ctx_r5.nzSelectMode)("ant-tree-switcher-icon", !ctx_r5.nzSelectMode);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, origin: a1 }; };
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzExpandedIcon)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, ctx_r4.context, ctx_r4.context.origin));
} }
function NzTreeNodeSwitcherComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isLoading)("ngIfElse", _r2);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("nzType", ctx_r8.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template, 1, 1, "i", 5);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template, 1, 0, "i", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.isShowLineIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.isShowLineIcon);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.nzExpandedIcon)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, ctx_r6.context, ctx_r6.context.origin));
} }
function NzTreeNodeSwitcherComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.isLoading)("ngIfElse", _r2);
} }
function NzTreeNodeSwitcherComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("nzSpin", true);
} }
export class NzTreeNodeSwitcherComponent {
    constructor() {
        this.nzSelectMode = false;
    }
    get isShowLineIcon() {
        return !this.isLeaf && !!this.nzShowLine;
    }
    get isShowSwitchIcon() {
        return !this.isLeaf && !this.nzShowLine;
    }
    get isSwitcherOpen() {
        return !!this.isExpanded && !this.isLeaf;
    }
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeSwitcherComponent.ɵfac = function NzTreeNodeSwitcherComponent_Factory(t) { return new (t || NzTreeNodeSwitcherComponent)(); };
NzTreeNodeSwitcherComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeSwitcherComponent, selectors: [["nz-tree-node-switcher"]], hostVars: 16, hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
    } }, inputs: { nzSelectMode: "nzSelectMode", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzExpandedIcon: "nzExpandedIcon", context: "context", isLeaf: "isLeaf", isLoading: "isLoading", isExpanded: "isExpanded" }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"]], template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeSwitcherComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, NzTreeNodeSwitcherComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isShowSwitchIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowLine);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTreeNodeSwitcherComponent.propDecorators = {
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    context: [{ type: Input }],
    isLeaf: [{ type: Input }],
    isLoading: [{ type: Input }],
    isExpanded: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeSwitcherComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-switcher',
                template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></i>
          <i *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <i nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></i>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-switcher]': 'nzSelectMode',
                    '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
                    '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
                    '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
                    '[class.ant-tree-switcher]': '!nzSelectMode',
                    '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
                    '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
                    '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
                }
            }]
    }], function () { return []; }, { nzSelectMode: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], context: [{
            type: Input
        }], isLeaf: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], isExpanded: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlL3RyZWUtbm9kZS1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDeEUsTUFBTSxPQUFPLDJCQUEyQjtBQUN4QyxJQTlDQTtBQUNHLFFBZ0RRLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLElBb0JBLENBQUM7QUFDRCxJQWhCRSxJQUFJLGNBQWM7QUFBSyxRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksZ0JBQWdCO0FBQUssUUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxjQUFjO0FBQUssUUFDckIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDN0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGVBQWU7QUFBSyxRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUMsSUFBRSxDQUFDO0FBQ0g7dURBdEVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsdUJBQXVCO0tBQ2pDLFFBQVEsRUFBRTs7OGVBNkJULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixJQUFJLEVBQUUsc0JBQ0osa0NBQWtDLEVBQUUsY0FBYyxzQkFDbEQsdUNBQXVDLEVBQUUsd0JBQXdCLHNCQUNqRSx1Q0FBdUMsRUFBRSxnQ0FBZ0M7UUFDekUsd0NBQXdDLEVBQUUsaUNBQWlDLHNCQUMzRTt3QkFBMkIsRUFBRSxlQUFlLHNCQUM1QyxnQ0FBZ0MsRUFBRTtjQUF5QixzQkFDM0QsZ0NBQWdDLEVBQUUsaUNBQWlDLHNCQUNuRTtlQUFpQyxFQUFFOytCQUFrQyxrQkFDdEU7TUFDRjs7NElBQ0k7QUFBQztBQUNJLDJCQUFQLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZS1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2hvd1N3aXRjaEljb25cIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMb2FkaW5nOyBlbHNlIGxvYWRpbmdUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHBhbmRlZEljb247IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0LCBvcmlnaW46IGNvbnRleHQub3JpZ2luIH1cIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgbnpUeXBlPVwiY2FyZXQtZG93blwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLXN3aXRjaGVyLWljb25dPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlci1pY29uXT1cIiFuelNlbGVjdE1vZGVcIlxuICAgICAgICAgID48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2hvd0xpbmVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMb2FkaW5nOyBlbHNlIGxvYWRpbmdUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHBhbmRlZEljb247IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZXh0LCBvcmlnaW46IGNvbnRleHQub3JpZ2luIH1cIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgKm5nSWY9XCJpc1Nob3dMaW5lSWNvblwiXG4gICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICBbbnpUeXBlXT1cImlzU3dpdGNoZXJPcGVuID8gJ21pbnVzLXNxdWFyZScgOiAncGx1cy1zcXVhcmUnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbGluZS1pY29uXCJcbiAgICAgICAgICA+PC9pPlxuICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNsb2FkaW5nVGVtcGxhdGU+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBbbnpTcGluXT1cInRydWVcIiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxvYWRpbmctaWNvblwiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zd2l0Y2hlcl0nOiAnbnpTZWxlY3RNb2RlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zd2l0Y2hlci1ub29wXSc6ICduelNlbGVjdE1vZGUgJiYgaXNMZWFmJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zd2l0Y2hlcl9vcGVuXSc6ICduelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlck9wZW4nLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXN3aXRjaGVyX2Nsb3NlXSc6ICduelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyXSc6ICchbnpTZWxlY3RNb2RlJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyLW5vb3BdJzogJyFuelNlbGVjdE1vZGUgJiYgaXNMZWFmJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyX29wZW5dJzogJyFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlck9wZW4nLFxuICAgICdbY2xhc3MuYW50LXRyZWUtc3dpdGNoZXJfY2xvc2VdJzogJyFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVTd2l0Y2hlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56U2hvd0V4cGFuZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2hvd0xpbmU/OiBib29sZWFuO1xuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+O1xuICBASW5wdXQoKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY29udGV4dCE6IE56VHJlZU5vZGU7XG4gIEBJbnB1dCgpIGlzTGVhZj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzTG9hZGluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xuXG4gIGdldCBpc1Nob3dMaW5lSWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNMZWFmICYmICEhdGhpcy5uelNob3dMaW5lO1xuICB9XG5cbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzTGVhZiAmJiAhdGhpcy5uelNob3dMaW5lO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0xlYWY7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlckNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzTGVhZjtcbiAgfVxufVxuIl19