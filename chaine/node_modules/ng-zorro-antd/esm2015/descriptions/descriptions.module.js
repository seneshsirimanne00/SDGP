/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDescriptionsItemComponent } from './descriptions-item.component';
import { NzDescriptionsComponent } from './descriptions.component';
import * as ɵngcc0 from '@angular/core';
export class NzDescriptionsModule {
}
NzDescriptionsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDescriptionsModule });
NzDescriptionsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[BidiModule, CommonModule, NzOutletModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDescriptionsModule, { declarations: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; }, imports: function () { return [BidiModule, CommonModule, NzOutletModule, PlatformModule]; }, exports: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzOutletModule, PlatformModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRpb25zLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbnMvZGVzY3JpcHRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT25FLE1BQU0sT0FBTyxvQkFBb0I7QUFBRztnREFMbkMsUUFBUSxTQUFDLGtCQUNSO0tBQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxrQkFDbkUsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUMsa0JBQ3BFLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFO01BQTJCLENBQUMsY0FDaEU7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcblxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2Rlc2NyaXB0aW9ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBOek91dGxldE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOekRlc2NyaXB0aW9uc0NvbXBvbmVudCwgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056RGVzY3JpcHRpb25zQ29tcG9uZW50LCBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56RGVzY3JpcHRpb25zTW9kdWxlIHt9XG4iXX0=