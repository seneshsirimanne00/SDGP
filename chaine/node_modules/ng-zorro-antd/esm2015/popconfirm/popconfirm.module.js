/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent, NzPopconfirmDirective } from './popconfirm';
import * as ɵngcc0 from '@angular/core';
export class NzPopconfirmModule {
}
NzPopconfirmModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPopconfirmModule });
NzPopconfirmModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
            BidiModule,
            CommonModule,
            NzButtonModule,
            OverlayModule,
            NzI18nModule,
            NzIconModule,
            NzOutletModule,
            NzOverlayModule,
            NzNoAnimationModule,
            NzToolTipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPopconfirmModule, { declarations: function () { return [NzPopconfirmComponent, NzPopconfirmDirective]; }, imports: function () { return [BidiModule,
        CommonModule,
        NzButtonModule,
        OverlayModule,
        NzI18nModule,
        NzIconModule,
        NzOutletModule,
        NzOverlayModule,
        NzNoAnimationModule,
        NzToolTipModule]; }, exports: function () { return [NzPopconfirmComponent, NzPopconfirmDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmModule, [{
        type: NgModule,
        args: [{
                declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                entryComponents: [NzPopconfirmComponent],
                imports: [
                    BidiModule,
                    CommonModule,
                    NzButtonModule,
                    OverlayModule,
                    NzI18nModule,
                    NzIconModule,
                    NzOutletModule,
                    NzOverlayModule,
                    NzNoAnimationModule,
                    NzToolTipModule
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wY29uZmlybS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9wb3Bjb25maXJtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBbUI1RSxNQUFNLE9BQU8sa0JBQWtCO0FBQUc7OENBakJqQyxRQUFRLFNBQUM7QUFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxrQkFDNUQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsa0JBQ3ZEO1NBQWUsRUFBRSxDQUFDO1NBQXFCLENBQUM7RUFDeEMsT0FBTyxFQUFFO0tBQ1AsVUFBVTtVQUNWLFlBQVk7a0JBQ1o7TUFBYztBQUNkLGFBQWE7TUFDYixZQUFZO09BQ1osWUFBWTthQUNaO1lBQWMsc0JBQ2QsZUFBZSxzQkFDZixtQkFBbUIsc0JBQ25CLGVBQWUsa0JBQ2hCLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCwgTnpQb3Bjb25maXJtRGlyZWN0aXZlIH0gZnJvbSAnLi9wb3Bjb25maXJtJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTnpQb3Bjb25maXJtQ29tcG9uZW50LCBOelBvcGNvbmZpcm1EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTnpQb3Bjb25maXJtQ29tcG9uZW50LCBOelBvcGNvbmZpcm1EaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOelBvcGNvbmZpcm1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQmlkaU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpCdXR0b25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBOekkxOG5Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56T3V0bGV0TW9kdWxlLFxuICAgIE56T3ZlcmxheU1vZHVsZSxcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybU1vZHVsZSB7fVxuIl19