/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPipesModule as NzPipesModuleFromCore } from 'ng-zorro-antd/core/pipe';
import { NzCountdownComponent } from './countdown.component';
import { NzStatisticNumberComponent } from './statistic-number.component';
import { NzStatisticComponent } from './statistic.component';
import * as ɵngcc0 from '@angular/core';
export class NzStatisticModule {
}
NzStatisticModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzStatisticModule });
NzStatisticModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzStatisticModule_Factory(t) { return new (t || NzStatisticModule)(); }, imports: [[BidiModule, CommonModule, PlatformModule, NzOutletModule, NzPipesModuleFromCore]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzStatisticModule, { declarations: function () { return [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]; }, imports: function () { return [BidiModule, CommonModule, PlatformModule, NzOutletModule, NzPipesModuleFromCore]; }, exports: function () { return [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, PlatformModule, NzOutletModule, NzPipesModuleFromCore],
                declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWMvc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsSUFBSSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU83RCxNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBTGhDLFFBQVEsU0FBQztDQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxrQkFDMUYsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUMsa0JBQ3RGLE9BQU8sRUFBRSxDQUFDO0lBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUMsY0FDbEY7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpQaXBlc01vZHVsZSBhcyBOelBpcGVzTW9kdWxlRnJvbUNvcmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcGlwZSc7XG5cbmltcG9ydCB7IE56Q291bnRkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGF0aXN0aWMtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdGlzdGljLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpQaXBlc01vZHVsZUZyb21Db3JlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpTdGF0aXN0aWNDb21wb25lbnQsIE56Q291bnRkb3duQ29tcG9uZW50LCBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY01vZHVsZSB7fVxuIl19