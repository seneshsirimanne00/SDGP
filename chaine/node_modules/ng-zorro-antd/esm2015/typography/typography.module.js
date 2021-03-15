/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTextCopyComponent } from './text-copy.component';
import { NzTextEditComponent } from './text-edit.component';
import { NzTypographyComponent } from './typography.component';
import * as ɵngcc0 from '@angular/core';
export class NzTypographyModule {
}
NzTypographyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTypographyModule });
NzTypographyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[
            BidiModule,
            CommonModule,
            NzIconModule,
            NzToolTipModule,
            NzInputModule,
            NzI18nModule,
            NzTransButtonModule,
            ClipboardModule,
            NzOutletModule
        ], PlatformModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTypographyModule, { declarations: function () { return [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]; }, imports: function () { return [BidiModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        NzInputModule,
        NzI18nModule,
        NzTransButtonModule,
        ClipboardModule,
        NzOutletModule]; }, exports: function () { return [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    NzIconModule,
                    NzToolTipModule,
                    NzInputModule,
                    NzI18nModule,
                    NzTransButtonModule,
                    ClipboardModule,
                    NzOutletModule
                ],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFpQi9ELE1BQU0sT0FBTyxrQkFBa0I7QUFBRzs4Q0FmakMsUUFBUSxTQUFDO0FBQ1IsT0FBTyxFQUFFLHNCQUNQLFVBQVUsc0JBQ1YsWUFBWSxzQkFDWixZQUFZLHNCQUNaLGVBQWU7V0FDZjtBQUFhLHNCQUNiO1FBQVk7SUFDWixtQkFBbUI7Z0JBQ25CO0lBQWU7QUFDZixjQUFjLGtCQUNmO2lCQUNELE9BQU8sRUFBRSxDQUFDO21CQUFxQixFQUFFO2FBQW1CLEVBQUU7R0FBbUIsRUFBRSxjQUFjLENBQUMsa0JBQzFGLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLGNBQ2hGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDbGlwYm9hcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvY2xpcGJvYXJkJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56VHJhbnNCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJhbnMtYnV0dG9uJztcblxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LWNvcHkuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL3RleHQtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUeXBvZ3JhcGh5Q29tcG9uZW50IH0gZnJvbSAnLi90eXBvZ3JhcGh5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCaWRpTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56SW5wdXRNb2R1bGUsXG4gICAgTnpJMThuTW9kdWxlLFxuICAgIE56VHJhbnNCdXR0b25Nb2R1bGUsXG4gICAgQ2xpcGJvYXJkTW9kdWxlLFxuICAgIE56T3V0bGV0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnQsIFBsYXRmb3JtTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpUeXBvZ3JhcGh5Q29tcG9uZW50LCBOelRleHRDb3B5Q29tcG9uZW50LCBOelRleHRFZGl0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlNb2R1bGUge31cbiJdfQ==