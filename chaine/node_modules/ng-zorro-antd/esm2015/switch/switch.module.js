/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchComponent } from './switch.component';
import * as ɵngcc0 from '@angular/core';
export class NzSwitchModule {
}
NzSwitchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzSwitchModule });
NzSwitchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzSwitchModule_Factory(t) { return new (t || NzSwitchModule)(); }, imports: [[BidiModule, CommonModule, NzWaveModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzSwitchModule, { declarations: function () { return [NzSwitchComponent]; }, imports: function () { return [BidiModule, CommonModule, NzWaveModule, NzIconModule, NzOutletModule]; }, exports: function () { return [NzSwitchComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSwitchModule, [{
        type: NgModule,
        args: [{
                exports: [NzSwitchComponent],
                declarations: [NzSwitchComponent],
                imports: [BidiModule, CommonModule, NzWaveModule, NzIconModule, NzOutletModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQU92RCxNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUw3QixRQUFRLFNBQUM7SUFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFDNUIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUMsa0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsY0FDaEY7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56V2F2ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS93YXZlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOelN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtOelN3aXRjaENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW056U3dpdGNoQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpXYXZlTW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3V0bGV0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOelN3aXRjaE1vZHVsZSB7fVxuIl19