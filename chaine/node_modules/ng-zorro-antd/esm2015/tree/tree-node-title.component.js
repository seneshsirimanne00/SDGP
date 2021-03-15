/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from './tree-drop-indicator.component';
import * as ɵngcc4 from 'ng-zorro-antd/core/highlight';

function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("nzType", ctx_r4.icon);
} }
function NzTreeNodeTitleComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template, 1, 1, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-tree-icon__open", ctx_r2.isSwitcherOpen)("ant-tree-icon__close", ctx_r2.isSwitcherClose)("ant-tree-icon_loading", ctx_r2.isLoading)("ant-select-tree-iconEle", ctx_r2.selectMode)("ant-tree-iconEle", !ctx_r2.selectMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-select-tree-iconEle", ctx_r2.selectMode)("ant-select-tree-icon__customize", ctx_r2.selectMode)("ant-tree-iconEle", !ctx_r2.selectMode)("ant-tree-icon__customize", !ctx_r2.selectMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.icon);
} }
function NzTreeNodeTitleComponent_ng_container_1_nz_tree_drop_indicator_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-tree-drop-indicator", 7);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("dropPosition", ctx_r3.dragPosition)("level", ctx_r3.context.level);
} }
function NzTreeNodeTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeTitleComponent_ng_container_1_span_1_Template, 3, 19, "span", 2);
    ɵngcc0.ɵɵelement(2, "span", 3);
    ɵngcc0.ɵɵpipe(3, "nzHighlight");
    ɵngcc0.ɵɵtemplate(4, NzTreeNodeTitleComponent_ng_container_1_nz_tree_drop_indicator_4_Template, 1, 2, "nz-tree-drop-indicator", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.icon && ctx_r1.showIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind4(3, 3, ctx_r1.title, ctx_r1.matchedValue, "i", "font-highlight"), ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showIndicator);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, origin: a1 }; };
export class NzTreeNodeTitleComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.treeTemplate = null;
        this.selectMode = false;
        // Drag indicator
        this.showIndicator = true;
    }
    get canDraggable() {
        return this.draggable && !this.isDisabled ? true : null;
    }
    get matchedValue() {
        return this.isMatched ? this.searchValue : '';
    }
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
    ngOnChanges(changes) {
        const { showIndicator, dragPosition } = changes;
        if (showIndicator || dragPosition) {
            this.cdr.markForCheck();
        }
    }
}
NzTreeNodeTitleComponent.ɵfac = function NzTreeNodeTitleComponent_Factory(t) { return new (t || NzTreeNodeTitleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTreeNodeTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeTitleComponent, selectors: [["nz-tree-node-title"]], hostVars: 21, hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);
        ɵngcc0.ɵɵclassProp("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
    } }, inputs: { treeTemplate: "treeTemplate", selectMode: "selectMode", showIndicator: "showIndicator", searchValue: "searchValue", draggable: "draggable", showIcon: "showIcon", context: "context", icon: "icon", title: "title", isLoading: "isLoading", isSelected: "isSelected", isDisabled: "isDisabled", isMatched: "isMatched", isExpanded: "isExpanded", isLeaf: "isLeaf", dragPosition: "dragPosition" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], [3, "dropPosition", "level", 4, "ngIf"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "dropPosition", "level"]], template: function NzTreeNodeTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        ɵngcc0.ɵɵtemplate(1, NzTreeNodeTitleComponent_ng_container_1_Template, 5, 8, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx.context, ctx.context.origin));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.treeTemplate);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc2.NzIconDirective, ɵngcc3.NzTreeDropIndicatorComponent], pipes: [ɵngcc4.NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
NzTreeNodeTitleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTreeNodeTitleComponent.propDecorators = {
    searchValue: [{ type: Input }],
    treeTemplate: [{ type: Input }],
    draggable: [{ type: Input }],
    showIcon: [{ type: Input }],
    selectMode: [{ type: Input }],
    context: [{ type: Input }],
    icon: [{ type: Input }],
    title: [{ type: Input }],
    isLoading: [{ type: Input }],
    isSelected: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isMatched: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isLeaf: [{ type: Input }],
    showIndicator: [{ type: Input }],
    dragPosition: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeTitleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-title',
                template: `
    <ng-template [ngTemplateOutlet]="treeTemplate" [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }"></ng-template>
    <ng-container *ngIf="!treeTemplate">
      <span
        *ngIf="icon && showIcon"
        [class.ant-tree-icon__open]="isSwitcherOpen"
        [class.ant-tree-icon__close]="isSwitcherClose"
        [class.ant-tree-icon_loading]="isLoading"
        [class.ant-select-tree-iconEle]="selectMode"
        [class.ant-tree-iconEle]="!selectMode"
      >
        <span
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-select-tree-icon__customize]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
          [class.ant-tree-icon__customize]="!selectMode"
        >
          <i nz-icon *ngIf="icon" [nzType]="icon"></i>
        </span>
      </span>
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue:'i':'font-highlight'"></span>
      <nz-tree-drop-indicator *ngIf="showIndicator" [dropPosition]="dragPosition" [level]="context.level"></nz-tree-drop-indicator>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.title]': 'title',
                    '[attr.draggable]': 'canDraggable',
                    '[attr.aria-grabbed]': 'canDraggable',
                    '[class.draggable]': 'canDraggable',
                    '[class.ant-select-tree-node-content-wrapper]': `selectMode`,
                    '[class.ant-select-tree-node-content-wrapper-open]': `selectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-node-content-wrapper-close]': `selectMode && isSwitcherClose`,
                    '[class.ant-select-tree-node-selected]': `selectMode && isSelected`,
                    '[class.ant-tree-node-content-wrapper]': `!selectMode`,
                    '[class.ant-tree-node-content-wrapper-open]': `!selectMode && isSwitcherOpen`,
                    '[class.ant-tree-node-content-wrapper-close]': `!selectMode && isSwitcherClose`,
                    '[class.ant-tree-node-selected]': `!selectMode && isSelected`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { treeTemplate: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], showIndicator: [{
            type: Input
        }], searchValue: [{
            type: Input
        }], draggable: [{
            type: Input
        }], showIcon: [{
            type: Input
        }], context: [{
            type: Input
        }], icon: [{
            type: Input
        }], title: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], isSelected: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isMatched: [{
            type: Input
        }], isExpanded: [{
            type: Input
        }], isLeaf: [{
            type: Input
        }], dragPosition: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlL3RyZWUtbm9kZS10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5QyxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q3hFLE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQW1DdEMsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBakNsQyxpQkFBWSxHQUE2RSxJQUFJLENBQUM7QUFDekcsUUFFVyxlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFFBU0UsaUJBQWlCO0FBQ25CLFFBQVcsa0JBQWEsR0FBRyxJQUFJLENBQUM7QUFDaEMsSUFrQitDLENBQUM7QUFDaEQsSUFqQkUsSUFBSSxZQUFZO0FBQUssUUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDNUQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsRCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGVBQWU7QUFBSyxRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUMsSUFBRSxDQUFDO0FBQ0gsSUFHRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNwRCxRQUFJLElBQUksYUFBYSxJQUFJLFlBQVksRUFBRTtBQUN2QyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO29EQXRGQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsUUFBUSxFQUFFOzs7O3lHQXVCVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsSUFBSSxFQUFFLHNCQUNKLGNBQWMsRUFBRSxPQUFPLHNCQUN2QixrQkFBa0IsRUFBRSxjQUFjLHNCQUNsQyxxQkFBcUIsRUFBRSxjQUFjLHNCQUNyQyxtQkFBbUIsRUFBRSxjQUFjLHNCQUNuQyw4Q0FBOEMsRUFBRSxZQUFZLHNCQUM1RCxtREFBbUQsRUFBRSw4QkFBOEIsc0JBQ25GLG9EQUFvRCxFQUFFLCtCQUErQixzQkFDckYsdUNBQXVDLEVBQUUsMEJBQTBCLHNCQUNuRSx1Q0FBdUMsRUFBRSxhQUFhO0FBQ3RELDRDQUE0QyxFQUFFLCtCQUErQixzQkFDN0U7eUNBQTZDLEVBQUUsZ0NBQWdDLHNCQUMvRTs7SUFBZ0MsRUFBRSwyQkFBMkIsa0JBQzlELGNBQ0Y7OzttTUFDSTtBQUFDO0FBQWtELFlBOUN0QixpQkFBaUI7QUFBRztBQUFHO0FBQTRDLDBCQStDbEcsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyw0QkFFVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZS10aXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogY29udGV4dCwgb3JpZ2luOiBjb250ZXh0Lm9yaWdpbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRyZWVUZW1wbGF0ZVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJpY29uICYmIHNob3dJY29uXCJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX29wZW5dPVwiaXNTd2l0Y2hlck9wZW5cIlxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fY2xvc2VdPVwiaXNTd2l0Y2hlckNsb3NlXCJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fbG9hZGluZ109XCJpc0xvYWRpbmdcIlxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWljb25FbGVdPVwic2VsZWN0TW9kZVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdHJlZS1pY29uRWxlXT1cIiFzZWxlY3RNb2RlXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWljb25FbGVdPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1pY29uX19jdXN0b21pemVdPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25FbGVdPVwiIXNlbGVjdE1vZGVcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdHJlZS1pY29uX19jdXN0b21pemVdPVwiIXNlbGVjdE1vZGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgbnotaWNvbiAqbmdJZj1cImljb25cIiBbbnpUeXBlXT1cImljb25cIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRyZWUtdGl0bGVcIiBbaW5uZXJIVE1MXT1cInRpdGxlIHwgbnpIaWdobGlnaHQ6IG1hdGNoZWRWYWx1ZTonaSc6J2ZvbnQtaGlnaGxpZ2h0J1wiPjwvc3Bhbj5cbiAgICAgIDxuei10cmVlLWRyb3AtaW5kaWNhdG9yICpuZ0lmPVwic2hvd0luZGljYXRvclwiIFtkcm9wUG9zaXRpb25dPVwiZHJhZ1Bvc2l0aW9uXCIgW2xldmVsXT1cImNvbnRleHQubGV2ZWxcIj48L256LXRyZWUtZHJvcC1pbmRpY2F0b3I+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aXRsZV0nOiAndGl0bGUnLFxuICAgICdbYXR0ci5kcmFnZ2FibGVdJzogJ2NhbkRyYWdnYWJsZScsXG4gICAgJ1thdHRyLmFyaWEtZ3JhYmJlZF0nOiAnY2FuRHJhZ2dhYmxlJyxcbiAgICAnW2NsYXNzLmRyYWdnYWJsZV0nOiAnY2FuRHJhZ2dhYmxlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlcl0nOiBgc2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXItb3Blbl0nOiBgc2VsZWN0TW9kZSAmJiBpc1N3aXRjaGVyT3BlbmAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXItY2xvc2VdJzogYHNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1ub2RlLXNlbGVjdGVkXSc6IGBzZWxlY3RNb2RlICYmIGlzU2VsZWN0ZWRgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXJdJzogYCFzZWxlY3RNb2RlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5dJzogYCFzZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJPcGVuYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLWNsb3NlXSc6IGAhc2VsZWN0TW9kZSAmJiBpc1N3aXRjaGVyQ2xvc2VgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtbm9kZS1zZWxlY3RlZF0nOiBgIXNlbGVjdE1vZGUgJiYgaXNTZWxlY3RlZGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzZWFyY2hWYWx1ZSE6IHN0cmluZztcbiAgQElucHV0KCkgdHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkcmFnZ2FibGUhOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93SWNvbiE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY29udGV4dCE6IE56VHJlZU5vZGU7XG4gIEBJbnB1dCgpIGljb24hOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlITogc3RyaW5nO1xuICBASW5wdXQoKSBpc0xvYWRpbmchOiBib29sZWFuO1xuICBASW5wdXQoKSBpc1NlbGVjdGVkITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzTWF0Y2hlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRXhwYW5kZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0xlYWYhOiBib29sZWFuO1xuICAvLyBEcmFnIGluZGljYXRvclxuICBASW5wdXQoKSBzaG93SW5kaWNhdG9yID0gdHJ1ZTtcbiAgQElucHV0KCkgZHJhZ1Bvc2l0aW9uPzogbnVtYmVyO1xuXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZSAmJiAhdGhpcy5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgbWF0Y2hlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNNYXRjaGVkID8gdGhpcy5zZWFyY2hWYWx1ZSA6ICcnO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNMZWFmO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0xlYWY7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2hvd0luZGljYXRvciwgZHJhZ1Bvc2l0aW9uIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChzaG93SW5kaWNhdG9yIHx8IGRyYWdQb3NpdGlvbikge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=