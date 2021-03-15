/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CdkTree, CdkTreeNodeOutletContext } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { NzTreeNodeOutletDirective } from './outlet';
import { NzTreeView } from './tree';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from './outlet';
import * as ɵngcc3 from './node';

function NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTreeVirtualScrollViewComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("data", item_r1);
} }
const DEFAULT_SIZE = 28;
export class NzTreeVirtualScrollViewComponent extends NzTreeView {
    constructor() {
        super(...arguments);
        this.itemSize = DEFAULT_SIZE;
        /**
         * @deprecated use `nzItemSize` instead
         * @breaking-change 12.0.0
         */
        this.nzNodeWidth = DEFAULT_SIZE;
        this.nzItemSize = DEFAULT_SIZE;
        this.nzMinBufferPx = DEFAULT_SIZE * 5;
        this.nzMaxBufferPx = DEFAULT_SIZE * 10;
        this.nodes = [];
    }
    renderNodeChanges(data) {
        this.nodes = new Array(...data).map((n, i) => this.createNode(n, i));
    }
    createNode(nodeData, index) {
        const node = this._getNodeDef(nodeData, index);
        const context = new CdkTreeNodeOutletContext(nodeData);
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else {
            context.level = 0;
        }
        return {
            data: nodeData,
            context,
            nodeDef: node
        };
    }
    ngOnChanges(changes) {
        const { nzNodeWidth, nzItemSize } = changes;
        if (nzNodeWidth) {
            warnDeprecation('`nzNodeWidth` in nz-tree-virtual-scroll-view will be removed in 12.0.0, please use `nzItemSize` instead.');
            this.itemSize = nzNodeWidth.currentValue;
        }
        if (nzItemSize) {
            this.itemSize = nzItemSize.currentValue;
        }
    }
}
NzTreeVirtualScrollViewComponent.ɵfac = function NzTreeVirtualScrollViewComponent_Factory(t) { return ɵNzTreeVirtualScrollViewComponent_BaseFactory(t || NzTreeVirtualScrollViewComponent); };
NzTreeVirtualScrollViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeVirtualScrollViewComponent, selectors: [["nz-tree-virtual-scroll-view"]], viewQuery: function NzTreeVirtualScrollViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzTreeNodeOutletDirective, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollViewport = _t.first);
    } }, hostAttrs: [1, "ant-tree"], hostVars: 6, hostBindings: function NzTreeVirtualScrollViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
    } }, inputs: { nzNodeWidth: "nzNodeWidth", nzItemSize: "nzItemSize", nzMinBufferPx: "nzMinBufferPx", nzMaxBufferPx: "nzMaxBufferPx" }, exportAs: ["nzTreeVirtualScrollView"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
            { provide: CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[1, "ant-tree-list"], [1, "ant-tree-list-holder", 3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["nzTreeNodeOutlet", ""], ["nzTreeVirtualScrollNodeOutlet", "", 3, "data"]], template: function NzTreeVirtualScrollViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        ɵngcc0.ɵɵtemplate(2, NzTreeVirtualScrollViewComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementContainer(3, 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("itemSize", ctx.itemSize)("minBufferPx", ctx.nzMinBufferPx)("maxBufferPx", ctx.nzMaxBufferPx);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx.nodes);
    } }, directives: [ɵngcc1.CdkVirtualScrollViewport, ɵngcc1.CdkFixedSizeVirtualScroll, ɵngcc1.CdkVirtualForOf, ɵngcc2.NzTreeNodeOutletDirective, ɵngcc3.NzTreeVirtualScrollNodeOutletDirective], encapsulation: 2, changeDetection: 0 });
NzTreeVirtualScrollViewComponent.propDecorators = {
    nodeOutlet: [{ type: ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }],
    virtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: true },] }],
    nzNodeWidth: [{ type: Input }],
    nzItemSize: [{ type: Input }],
    nzMinBufferPx: [{ type: Input }],
    nzMaxBufferPx: [{ type: Input }]
};
const ɵNzTreeVirtualScrollViewComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeVirtualScrollViewComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeVirtualScrollViewComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-virtual-scroll-view',
                exportAs: 'nzTreeVirtualScrollView',
                template: `
    <div class="ant-tree-list">
      <cdk-virtual-scroll-viewport
        class="ant-tree-list-holder"
        [itemSize]="itemSize"
        [minBufferPx]="nzMinBufferPx"
        [maxBufferPx]="nzMaxBufferPx"
      >
        <ng-container *cdkVirtualFor="let item of nodes; let i = index">
          <ng-template nzTreeVirtualScrollNodeOutlet [data]="item"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-container nzTreeNodeOutlet></ng-container>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
                    { provide: CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
                ],
                host: {
                    class: 'ant-tree',
                    '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                    '[class.ant-tree-directory]': 'nzDirectoryTree',
                    '[class.ant-tree-rtl]': `dir === 'rtl'`
                }
            }]
    }], null, { nzNodeWidth: [{
            type: Input
        }], nzItemSize: [{
            type: Input
        }], nzMinBufferPx: [{
            type: Input
        }], nzMaxBufferPx: [{
            type: Input
        }], nodeOutlet: [{
            type: ViewChild,
            args: [NzTreeNodeOutletDirective, { static: true }]
        }], virtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aXJ0dWFsLXNjcm9sbC12aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpcnR1YWwtc2Nyb2xsLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFpQ3hCLE1BQU0sT0FBTyxnQ0FBb0MsU0FBUSxVQUFhO0FBQUcsSUEvQnpFO0FBQ0c7QUFBNkIsUUErQjlCLGFBQVEsR0FBRyxZQUFZLENBQUM7QUFDMUIsUUFJRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxnQkFBVyxHQUFHLFlBQVksQ0FBQztBQUN0QyxRQUNXLGVBQVUsR0FBRyxZQUFZLENBQUM7QUFDckMsUUFBVyxrQkFBYSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDNUMsUUFBVyxrQkFBYSxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDN0MsUUFDRSxVQUFLLEdBQW9DLEVBQUUsQ0FBQztBQUM5QyxJQThCQSxDQUFDO0FBQ0QsSUE5QkUsaUJBQWlCLENBQUMsSUFBNEI7QUFBSSxRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxJQUFFLENBQUM7QUFDSCxJQUNVLFVBQVUsQ0FBQyxRQUFXLEVBQUUsS0FBYTtBQUFJLFFBQy9DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELFFBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBd0IsQ0FBSSxRQUFRLENBQUMsQ0FBQztBQUM5RCxRQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDbkMsWUFBTSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFELFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN4QixTQUFLO0FBQ0wsUUFBSSxPQUFPO0FBQ1gsWUFBTSxJQUFJLEVBQUUsUUFBUTtBQUNwQixZQUFNLE9BQU87QUFDYixZQUFNLE9BQU8sRUFBRSxJQUFJO0FBQ25CLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDaEQsUUFBSSxJQUFJLFdBQVcsRUFBRTtBQUNyQixZQUFNLGVBQWUsQ0FBQywwR0FBMEcsQ0FBQyxDQUFDO0FBQ2xJLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQy9DLFNBQUs7QUFDTCxRQUFJLElBQUksVUFBVSxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQzlDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDs0REE5RUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw2QkFBNkIsa0JBQ3ZDLFFBQVEsRUFBRSx5QkFBeUI7ZUFDbkMsUUFBUSxFQUFFOzs7Ozs7K0JBY1Qsa0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7SUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFNBQVMsRUFBRSxzQkFDVCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFOzBCQUFnQyxFQUFFLHNCQUN0RSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGdDQUFnQyxFQUFFLGtCQUNwRSxrQkFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsVUFBVSxzQkFDakIsNkJBQTZCLEVBQUUsZ0NBQWdDLHNCQUMvRCw0QkFBNEIsRUFBRSxpQkFBaUIsc0JBQy9DO1VBQXNCLEVBQUUsZUFBZSxrQkFDeEMsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Mk9BQ0k7QUFBQztBQUFvRCx5QkFHdkQsU0FBUyxTQUFDLHlCQUF5QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUFPLG9DQUM1RCxTQUFTLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQU8sMEJBTTNELEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBDZGtUcmVlLCBDZGtUcmVlTm9kZU91dGxldENvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcblxuaW1wb3J0IHsgTnpUcmVlVmlydHVhbE5vZGVEYXRhIH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7IE56VHJlZU5vZGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL291dGxldCc7XG5cbmltcG9ydCB7IE56VHJlZVZpZXcgfSBmcm9tICcuL3RyZWUnO1xuXG5jb25zdCBERUZBVUxUX1NJWkUgPSAyODtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS12aXJ0dWFsLXNjcm9sbC12aWV3JyxcbiAgZXhwb3J0QXM6ICduelRyZWVWaXJ0dWFsU2Nyb2xsVmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC10cmVlLWxpc3RcIj5cbiAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcbiAgICAgICAgY2xhc3M9XCJhbnQtdHJlZS1saXN0LWhvbGRlclwiXG4gICAgICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXG4gICAgICAgIFttaW5CdWZmZXJQeF09XCJuek1pbkJ1ZmZlclB4XCJcbiAgICAgICAgW21heEJ1ZmZlclB4XT1cIm56TWF4QnVmZmVyUHhcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2Ygbm9kZXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbnpUcmVlVmlydHVhbFNjcm9sbE5vZGVPdXRsZXQgW2RhdGFdPVwiaXRlbVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciBuelRyZWVOb2RlT3V0bGV0PjwvbmctY29udGFpbmVyPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOelRyZWVWaWV3LCB1c2VFeGlzdGluZzogTnpUcmVlVmlydHVhbFNjcm9sbFZpZXdDb21wb25lbnQgfSxcbiAgICB7IHByb3ZpZGU6IENka1RyZWUsIHVzZUV4aXN0aW5nOiBOelRyZWVWaXJ0dWFsU2Nyb2xsVmlld0NvbXBvbmVudCB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10cmVlJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLWJsb2NrLW5vZGVdJzogJ256RGlyZWN0b3J5VHJlZSB8fCBuekJsb2NrTm9kZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1kaXJlY3RvcnldJzogJ256RGlyZWN0b3J5VHJlZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlVmlydHVhbFNjcm9sbFZpZXdDb21wb25lbnQ8VD4gZXh0ZW5kcyBOelRyZWVWaWV3PFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgaXRlbVNpemUgPSBERUZBVUxUX1NJWkU7XG5cbiAgQFZpZXdDaGlsZChOelRyZWVOb2RlT3V0bGV0RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSByZWFkb25seSBub2RlT3V0bGV0ITogTnpUcmVlTm9kZU91dGxldERpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiB0cnVlIH0pIHJlYWRvbmx5IHZpcnR1YWxTY3JvbGxWaWV3cG9ydCE6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuekl0ZW1TaXplYCBpbnN0ZWFkXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXG4gICAqL1xuICBASW5wdXQoKSBuek5vZGVXaWR0aCA9IERFRkFVTFRfU0laRTtcblxuICBASW5wdXQoKSBuekl0ZW1TaXplID0gREVGQVVMVF9TSVpFO1xuICBASW5wdXQoKSBuek1pbkJ1ZmZlclB4ID0gREVGQVVMVF9TSVpFICogNTtcbiAgQElucHV0KCkgbnpNYXhCdWZmZXJQeCA9IERFRkFVTFRfU0laRSAqIDEwO1xuXG4gIG5vZGVzOiBBcnJheTxOelRyZWVWaXJ0dWFsTm9kZURhdGE8VD4+ID0gW107XG5cbiAgcmVuZGVyTm9kZUNoYW5nZXMoZGF0YTogVFtdIHwgUmVhZG9ubHlBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMubm9kZXMgPSBuZXcgQXJyYXkoLi4uZGF0YSkubWFwKChuLCBpKSA9PiB0aGlzLmNyZWF0ZU5vZGUobiwgaSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVOb2RlKG5vZGVEYXRhOiBULCBpbmRleDogbnVtYmVyKTogTnpUcmVlVmlydHVhbE5vZGVEYXRhPFQ+IHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZURlZihub2RlRGF0YSwgaW5kZXgpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0PFQ+KG5vZGVEYXRhKTtcbiAgICBpZiAodGhpcy50cmVlQ29udHJvbC5nZXRMZXZlbCkge1xuICAgICAgY29udGV4dC5sZXZlbCA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0TGV2ZWwobm9kZURhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxldmVsID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG5vZGVEYXRhLFxuICAgICAgY29udGV4dCxcbiAgICAgIG5vZGVEZWY6IG5vZGVcbiAgICB9O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpOb2RlV2lkdGgsIG56SXRlbVNpemUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Tm9kZVdpZHRoKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oJ2Buek5vZGVXaWR0aGAgaW4gbnotdHJlZS12aXJ0dWFsLXNjcm9sbC12aWV3IHdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIHBsZWFzZSB1c2UgYG56SXRlbVNpemVgIGluc3RlYWQuJyk7XG4gICAgICB0aGlzLml0ZW1TaXplID0gbnpOb2RlV2lkdGguY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAobnpJdGVtU2l6ZSkge1xuICAgICAgdGhpcy5pdGVtU2l6ZSA9IG56SXRlbVNpemUuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19