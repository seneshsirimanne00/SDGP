/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './result-cells';
import { NzResultComponent } from './result.component';
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
import * as ɵngcc0 from '@angular/core';
const partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
const cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
export class NzResultModule {
}
NzResultModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzResultModule });
NzResultModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzResultModule_Factory(t) { return new (t || NzResultModule)(); }, imports: [[BidiModule, CommonModule, NzOutletModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzResultModule, { declarations: function () { return [NzResultComponent, NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective, NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent]; }, imports: function () { return [BidiModule, CommonModule, NzOutletModule, NzIconModule]; }, exports: function () { return [NzResultComponent, NzResultContentDirective,
        NzResultExtraDirective,
        NzResultIconDirective,
        NzResultSubtitleDirective,
        NzResultTitleDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResultModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzOutletModule, NzIconModule],
                declarations: [NzResultComponent, ...cellDirectives, ...partial],
                exports: [NzResultComponent, ...cellDirectives]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdkUsTUFBTSxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBRXpHLE1BQU0sY0FBYyxHQUFHO0FBQ3ZCLElBQUUsd0JBQXdCO0FBQzFCLElBQUUsc0JBQXNCO0FBQ3hCLElBQUUscUJBQXFCO0FBQ3ZCLElBQUUseUJBQXlCO0FBQzNCLElBQUUsc0JBQXNCO0FBQ3hCLENBQUMsQ0FBQztBQU9GLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxrQkFDakUsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQ2hFLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUc7VUFBYyxDQUFDLGNBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQge1xuICBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUsXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXG4gIE56UmVzdWx0SWNvbkRpcmVjdGl2ZSxcbiAgTnpSZXN1bHRTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxufSBmcm9tICcuL3Jlc3VsdC1jZWxscyc7XG5pbXBvcnQgeyBOelJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdWx0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE56UmVzdWx0Tm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvbm90LWZvdW5kJztcbmltcG9ydCB7IE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvc2VydmVyLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC91bmF1dGhvcml6ZWQnO1xuXG5jb25zdCBwYXJ0aWFsID0gW056UmVzdWx0Tm90Rm91bmRDb21wb25lbnQsIE56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQsIE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50XTtcblxuY29uc3QgY2VsbERpcmVjdGl2ZXMgPSBbXG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzLCAuLi5wYXJ0aWFsXSxcbiAgZXhwb3J0czogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRNb2R1bGUge31cbiJdfQ==