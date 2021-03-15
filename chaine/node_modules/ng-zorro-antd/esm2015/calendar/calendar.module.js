/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibPackerModule } from 'ng-zorro-antd/date-picker';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './calendar-cells';
import { NzCalendarHeaderComponent } from './calendar-header.component';
import { NzCalendarComponent } from './calendar.component';
import * as ɵngcc0 from '@angular/core';
export class NzCalendarModule {
}
NzCalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCalendarModule });
NzCalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: function () { return [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective]; }, imports: function () { return [BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]; }, exports: function () { return [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
                imports: [BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYzNELE1BQU0sT0FBTyxnQkFBZ0I7QUFBRzs0Q0FaL0IsUUFBUSxTQUFDO0VBQ1IsWUFBWSxFQUFFLHNCQUNaLHlCQUF5QixzQkFDekIsbUJBQW1CLHNCQUNuQixtQkFBbUIsc0JBQ25CLHVCQUF1QixzQkFDdkIsb0JBQW9CLHNCQUNwQjtzQkFBd0Isa0JBQ3pCLGtCQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFO01BQXdCLENBQUMsa0JBQzVIO0dBQU8sRUFBRSxDQUFDLFVBQVUsRUFBRTtDQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtVQUFhLEVBQUUsY0FBYyxFQUFFO2FBQWUsQ0FBQyxjQUMvRzs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExpYlBhY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5cbmltcG9ydCB7IE56RGF0ZUNlbGxEaXJlY3RpdmUsIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci1jZWxscyc7XG5pbXBvcnQgeyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbTnpDYWxlbmRhckNvbXBvbmVudCwgTnpEYXRlQ2VsbERpcmVjdGl2ZSwgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsIE56TW9udGhDZWxsRGlyZWN0aXZlLCBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelJhZGlvTW9kdWxlLCBOelNlbGVjdE1vZHVsZSwgTGliUGFja2VyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHt9XG4iXX0=