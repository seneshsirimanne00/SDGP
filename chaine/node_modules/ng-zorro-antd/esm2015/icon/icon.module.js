/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NzIconDirective } from './icon.directive';
import { NzIconPatchService, NZ_ICONS, NZ_ICONS_PATCH } from './icon.service';
import * as ɵngcc0 from '@angular/core';
export class NzIconModule {
    static forRoot(icons) {
        return {
            ngModule: NzIconModule,
            providers: [
                {
                    provide: NZ_ICONS,
                    useValue: icons
                }
            ]
        };
    }
    static forChild(icons) {
        return {
            ngModule: NzIconModule,
            providers: [
                NzIconPatchService,
                {
                    provide: NZ_ICONS_PATCH,
                    useValue: icons
                }
            ]
        };
    }
}
NzIconModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconModule });
NzIconModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconModule_Factory(t) { return new (t || NzIconModule)(); }, imports: [[PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconModule, { declarations: function () { return [NzIconDirective]; }, imports: function () { return [PlatformModule]; }, exports: function () { return [NzIconDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconDirective],
                declarations: [NzIconDirective],
                imports: [PlatformModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU85RSxNQUFNLE9BQU8sWUFBWTtBQUN6QixJQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBdUI7QUFBSSxRQUN4QyxPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsWUFBWTtBQUM1QixZQUFNLFNBQVMsRUFBRTtBQUNqQixnQkFBUTtBQUNSLG9CQUFVLE9BQU8sRUFBRSxRQUFRO0FBQzNCLG9CQUFVLFFBQVEsRUFBRSxLQUFLO0FBQ3pCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUF1QjtBQUFJLFFBQ3pDLE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxZQUFZO0FBQzVCLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRLGtCQUFrQjtBQUMxQixnQkFBUTtBQUNSLG9CQUFVLE9BQU8sRUFBRSxjQUFjO0FBQ2pDLG9CQUFVLFFBQVEsRUFBRSxLQUFLO0FBQ3pCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIO3dDQTlCQyxRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQzFCLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFDL0IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQzFCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcblxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekljb25QYXRjaFNlcnZpY2UsIE5aX0lDT05TLCBOWl9JQ09OU19QQVRDSCB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW056SWNvbkRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW056SWNvbkRpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtQbGF0Zm9ybU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE56SWNvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnpJY29uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOWl9JQ09OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogaWNvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE56SWNvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnpJY29uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE56SWNvblBhdGNoU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5aX0lDT05TX1BBVENILFxuICAgICAgICAgIHVzZVZhbHVlOiBpY29uc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19