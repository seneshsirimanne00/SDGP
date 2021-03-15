/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNode, CdkTreeNodeDef } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { NzTreeView } from './tree';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './tree';

function NzTreeNodeComponent_nz_tree_node_indents_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-tree-node-indents", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("indents", ctx_r0.indents);
} }
function NzTreeNodeComponent_nz_tree_node_toggle_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-tree-node-toggle", 3);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = [[["nz-tree-node-toggle"], ["", "nz-tree-node-toggle", ""]], [["nz-tree-node-checkbox"]], [["nz-tree-node-option"]], "*"];
const _c1 = ["nz-tree-node-toggle, [nz-tree-node-toggle]", "nz-tree-node-checkbox", "nz-tree-node-option", "*"];
export class NzTreeNodeComponent extends CdkTreeNode {
    constructor(elementRef, tree, renderer, cdr) {
        super(elementRef, tree);
        this.elementRef = elementRef;
        this.tree = tree;
        this.renderer = renderer;
        this.cdr = cdr;
        this.indents = [];
        this.disabled = false;
        this.selected = false;
        this.isLeaf = false;
        this._elementRef.nativeElement.classList.add('ant-tree-treenode');
    }
    ngOnInit() {
        this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
    }
    disable() {
        this.disabled = true;
        this.updateDisabledClass();
    }
    enable() {
        this.disabled = false;
        this.updateDisabledClass();
    }
    select() {
        this.selected = true;
        this.updateSelectedClass();
    }
    deselect() {
        this.selected = false;
        this.updateSelectedClass();
    }
    setIndents(indents) {
        this.indents = indents;
        this.cdr.markForCheck();
    }
    updateSelectedClass() {
        if (this.selected) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
    }
    updateDisabledClass() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
    }
}
NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeView), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTreeNodeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeComponent, selectors: [["nz-tree-node", 3, "builtin", ""]], hostVars: 4, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-treenode-switcher-open", ctx.isExpanded)("ant-tree-treenode-switcher-close", !ctx.isExpanded);
    } }, exportAs: ["nzTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNode, useExisting: NzTreeNodeComponent }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [[3, "indents", 4, "ngIf"], ["class", "nz-tree-leaf-line-icon", "nzTreeNodeNoopToggle", "", 4, "ngIf"], [3, "indents"], ["nzTreeNodeNoopToggle", "", 1, "nz-tree-leaf-line-icon"], [1, "ant-tree-switcher-leaf-line"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeComponent_nz_tree_node_indents_0_Template, 1, 1, "nz-tree-node-indents", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_nz_tree_node_toggle_2_Template, 2, 0, "nz-tree-node-toggle", 1);
        ɵngcc0.ɵɵprojection(3, 1);
        ɵngcc0.ɵɵprojection(4, 2);
        ɵngcc0.ɵɵprojection(5, 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.indents.length);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.indents.length && ctx.isLeaf);
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzTreeView },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node:not([builtin])',
                exportAs: 'nzTreeNode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: CdkTreeNode, useExisting: NzTreeNodeComponent }],
                template: `
    <nz-tree-node-indents [indents]="indents" *ngIf="indents.length"></nz-tree-node-indents>
    <ng-content select="nz-tree-node-toggle, [nz-tree-node-toggle]"></ng-content>
    <nz-tree-node-toggle class="nz-tree-leaf-line-icon" *ngIf="indents.length && isLeaf" nzTreeNodeNoopToggle>
      <span class="ant-tree-switcher-leaf-line"></span>
    </nz-tree-node-toggle>
    <ng-content select="nz-tree-node-checkbox"></ng-content>
    <ng-content select="nz-tree-node-option"></ng-content>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-tree-treenode-switcher-open]': 'isExpanded',
                    '[class.ant-tree-treenode-switcher-close]': '!isExpanded'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzTreeView }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();
export class NzTreeNodeDefDirective extends CdkTreeNodeDef {
}
NzTreeNodeDefDirective.ɵfac = function NzTreeNodeDefDirective_Factory(t) { return ɵNzTreeNodeDefDirective_BaseFactory(t || NzTreeNodeDefDirective); };
NzTreeNodeDefDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeDefDirective, selectors: [["", "nzTreeNodeDef", ""]], inputs: { when: ["nzTreeNodeDefWhen", "when"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NzTreeNodeDefDirective.propDecorators = {
    when: [{ type: Input, args: ['nzTreeNodeDefWhen',] }]
};
const ɵNzTreeNodeDefDirective_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeNodeDefDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeDefDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodeDef]',
                providers: [{ provide: CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]
            }]
    }], null, { when: [{
            type: Input,
            args: ['nzTreeNodeDefWhen']
        }] }); })();
export class NzTreeVirtualScrollNodeOutletDirective {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._viewRef = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            const viewContainerRef = this._viewContainerRef;
            if (this._viewRef) {
                viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
            }
            this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
            if (CdkTreeNode.mostRecentTreeNode && this._viewRef) {
                CdkTreeNode.mostRecentTreeNode.data = this.data.data;
            }
        }
        else if (this._viewRef && this.data.context) {
            this.updateExistingContext(this.data.context);
        }
    }
    shouldRecreateView(changes) {
        const ctxChange = changes.data;
        return !!changes.data || (ctxChange && this.hasContextShapeChanged(ctxChange));
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            this._viewRef.context[propName] = this.data.context[propName];
        }
    }
}
NzTreeVirtualScrollNodeOutletDirective.ɵfac = function NzTreeVirtualScrollNodeOutletDirective_Factory(t) { return new (t || NzTreeVirtualScrollNodeOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzTreeVirtualScrollNodeOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeVirtualScrollNodeOutletDirective, selectors: [["", "nzTreeVirtualScrollNodeOutlet", ""]], inputs: { data: "data" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzTreeVirtualScrollNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzTreeVirtualScrollNodeOutletDirective.propDecorators = {
    data: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeVirtualScrollNodeOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeVirtualScrollNodeOutlet]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { data: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlLXZpZXcvbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFDMUYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBRVYsS0FBSyxFQUlMLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QnBDLE1BQU0sT0FBTyxtQkFBdUIsU0FBUSxXQUFjO0FBQUcsSUFNM0QsWUFDWSxVQUFtQyxFQUNuQyxJQUFtQixFQUNyQixRQUFtQixFQUNuQixHQUFzQjtBQUMvQixRQUNDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIsUUFOYyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtBQUFDLFFBQ3BDLFNBQUksR0FBSixJQUFJLENBQWU7QUFBQyxRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFDbEMsUUFWRSxZQUFPLEdBQWMsRUFBRSxDQUFDO0FBQzFCLFFBQUUsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUNuQixRQUFFLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFFBUUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RFLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUFLLFFBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FB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RixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7a0VBckRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUNBQWlDLGNBQzVDO29QQUNJO0FBQUM7QUFBZ0UsWUExR3BFLGdCQUFnQjtBQUNoQjtBQUFHO0FBRWlDLG1CQXlHbkMsS0FBSztBQUFJOzs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrVHJlZU5vZGUsIENka1RyZWVOb2RlRGVmLCBDZGtUcmVlTm9kZU91dGxldENvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTnpUcmVlVmlldyB9IGZyb20gJy4vdHJlZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlVmlydHVhbE5vZGVEYXRhPFQ+IHtcbiAgZGF0YTogVDtcbiAgY29udGV4dDogQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0PFQ+O1xuICBub2RlRGVmOiBDZGtUcmVlTm9kZURlZjxUPjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1ub2RlOm5vdChbYnVpbHRpbl0pJyxcbiAgZXhwb3J0QXM6ICduelRyZWVOb2RlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrVHJlZU5vZGUsIHVzZUV4aXN0aW5nOiBOelRyZWVOb2RlQ29tcG9uZW50IH1dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10cmVlLW5vZGUtaW5kZW50cyBbaW5kZW50c109XCJpbmRlbnRzXCIgKm5nSWY9XCJpbmRlbnRzLmxlbmd0aFwiPjwvbnotdHJlZS1ub2RlLWluZGVudHM+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotdHJlZS1ub2RlLXRvZ2dsZSwgW256LXRyZWUtbm9kZS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuei10cmVlLW5vZGUtdG9nZ2xlIGNsYXNzPVwibnotdHJlZS1sZWFmLWxpbmUtaWNvblwiICpuZ0lmPVwiaW5kZW50cy5sZW5ndGggJiYgaXNMZWFmXCIgbnpUcmVlTm9kZU5vb3BUb2dnbGU+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxlYWYtbGluZVwiPjwvc3Bhbj5cbiAgICA8L256LXRyZWUtbm9kZS10b2dnbGU+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotdHJlZS1ub2RlLWNoZWNrYm94XCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXRyZWUtbm9kZS1vcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1zd2l0Y2hlci1vcGVuXSc6ICdpc0V4cGFuZGVkJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLXN3aXRjaGVyLWNsb3NlXSc6ICchaXNFeHBhbmRlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlQ29tcG9uZW50PFQ+IGV4dGVuZHMgQ2RrVHJlZU5vZGU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIGluZGVudHM6IGJvb2xlYW5bXSA9IFtdO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBpc0xlYWYgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHRyZWU6IE56VHJlZVZpZXc8VD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCB0cmVlKTtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRyZWUtdHJlZW5vZGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNMZWFmID0gIXRoaXMudHJlZS50cmVlQ29udHJvbC5pc0V4cGFuZGFibGUodGhpcy5kYXRhKTtcbiAgfVxuXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZENsYXNzKCk7XG4gIH1cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRDbGFzcygpO1xuICB9XG5cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDbGFzcygpO1xuICB9XG5cbiAgZGVzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDbGFzcygpO1xuICB9XG5cbiAgc2V0SW5kZW50cyhpbmRlbnRzOiBib29sZWFuW10pOiB2b2lkIHtcbiAgICB0aGlzLmluZGVudHMgPSBpbmRlbnRzO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRyZWUtdHJlZW5vZGUtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10cmVlLXRyZWVub2RlLXNlbGVjdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEaXNhYmxlZENsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRyZWUtdHJlZW5vZGUtZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10cmVlLXRyZWVub2RlLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelRyZWVOb2RlRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrVHJlZU5vZGVEZWYsIHVzZUV4aXN0aW5nOiBOelRyZWVOb2RlRGVmRGlyZWN0aXZlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVEZWZEaXJlY3RpdmU8VD4gZXh0ZW5kcyBDZGtUcmVlTm9kZURlZjxUPiB7XG4gIEBJbnB1dCgnbnpUcmVlTm9kZURlZldoZW4nKSB3aGVuITogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpUcmVlVmlydHVhbFNjcm9sbE5vZGVPdXRsZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVWaXJ0dWFsU2Nyb2xsTm9kZU91dGxldERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRhdGEhOiBOelRyZWVWaXJ0dWFsTm9kZURhdGE8VD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gdGhpcy5zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlcyk7XG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWY7XG5cbiAgICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgIHZpZXdDb250YWluZXJSZWYucmVtb3ZlKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl92aWV3UmVmKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZpZXdSZWYgPSB0aGlzLmRhdGEgPyB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmRhdGEubm9kZURlZi50ZW1wbGF0ZSwgdGhpcy5kYXRhLmNvbnRleHQpIDogbnVsbDtcblxuICAgICAgaWYgKENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSAmJiB0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgIENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZS5kYXRhID0gdGhpcy5kYXRhLmRhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3UmVmICYmIHRoaXMuZGF0YS5jb250ZXh0KSB7XG4gICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLmRhdGEuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN0eENoYW5nZSA9IGNoYW5nZXMuZGF0YTtcbiAgICByZXR1cm4gISFjaGFuZ2VzLmRhdGEgfHwgKGN0eENoYW5nZSAmJiB0aGlzLmhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlKSk7XG4gIH1cblxuICBwcml2YXRlIGhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcbiAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xuXG4gICAgaWYgKHByZXZDdHhLZXlzLmxlbmd0aCA9PT0gY3VyckN0eEtleXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XG4gICAgICAgIGlmIChwcmV2Q3R4S2V5cy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XG4gICAgICB0aGlzLl92aWV3UmVmIS5jb250ZXh0W3Byb3BOYW1lXSA9ICh0aGlzLmRhdGEuY29udGV4dCBhcyBOelNhZmVBbnkpW3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==