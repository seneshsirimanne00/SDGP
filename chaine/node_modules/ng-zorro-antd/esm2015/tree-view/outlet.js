/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNodeOutlet, CDK_TREE_NODE_OUTLET_NODE } from '@angular/cdk/tree';
import { Directive, Inject, Optional, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzTreeNodeOutletDirective {
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
NzTreeNodeOutletDirective.ɵfac = function NzTreeNodeOutletDirective_Factory(t) { return new (t || NzTreeNodeOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
NzTreeNodeOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeOutletDirective, selectors: [["", "nzTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: CdkTreeNodeOutlet,
                useExisting: NzTreeNodeOutletDirective
            }
        ])] });
NzTreeNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodeOutlet]',
                providers: [
                    {
                        provide: CdkTreeNodeOutlet,
                        useExisting: NzTreeNodeOutletDirective
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUtdmlldy9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhOUUsTUFBTSxPQUFPLHlCQUF5QjtBQUFHLElBQ3ZDLFlBQW1CLGFBQStCLEVBQXdELEtBQWlCO0FBQUksUUFBNUcsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQUMsUUFBdUQsVUFBSyxHQUFMLEtBQUssQ0FBWTtBQUFDLElBQUUsQ0FBQztBQUNqSTtxREFYQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLHlCQUF5QixzQkFDdkMsa0JBQ0YsY0FDRjs7Ozs7ZUFDSTtBQUFDO0FBQW1ELFlBYm5CLGdCQUFnQjtBQUFJLDRDQWNILE1BQU0sU0FBQyx5QkFBeUIsY0FBRyxRQUFRO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtUcmVlTm9kZU91dGxldCwgQ0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBPcHRpb25hbCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpUcmVlTm9kZU91dGxldF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBDZGtUcmVlTm9kZU91dGxldCxcbiAgICAgIHVzZUV4aXN0aW5nOiBOelRyZWVOb2RlT3V0bGV0RGlyZWN0aXZlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBDZGtUcmVlTm9kZU91dGxldCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBASW5qZWN0KENES19UUkVFX05PREVfT1VUTEVUX05PREUpIEBPcHRpb25hbCgpIHB1YmxpYyBfbm9kZT86IE56U2FmZUFueSkge31cbn1cbiJdfQ==