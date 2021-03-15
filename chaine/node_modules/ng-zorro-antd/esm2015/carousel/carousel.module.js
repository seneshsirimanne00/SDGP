/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCarouselContentDirective } from './carousel-content.directive';
import { NzCarouselComponent } from './carousel.component';
import * as ɵngcc0 from '@angular/core';
export class NzCarouselModule {
}
NzCarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCarouselModule });
NzCarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[BidiModule, CommonModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCarouselModule, { declarations: function () { return [NzCarouselComponent, NzCarouselContentDirective]; }, imports: function () { return [BidiModule, CommonModule, PlatformModule]; }, exports: function () { return [NzCarouselComponent, NzCarouselContentDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [BidiModule, CommonModule, PlatformModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFPM0QsTUFBTSxPQUFPLGdCQUFnQjtBQUFHOzRDQUwvQixRQUFRLFNBQUM7RUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQyxrQkFDL0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsa0JBQzFELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUU7WUFBYyxDQUFDLGNBQ3BEOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2Nhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW056Q2Fyb3VzZWxDb21wb25lbnQsIE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW056Q2Fyb3VzZWxDb21wb25lbnQsIE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxNb2R1bGUge31cbiJdfQ==