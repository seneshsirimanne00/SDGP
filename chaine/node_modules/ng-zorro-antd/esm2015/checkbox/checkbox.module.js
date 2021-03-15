/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxGroupComponent } from './checkbox-group.component';
import { NzCheckboxWrapperComponent } from './checkbox-wrapper.component';
import { NzCheckboxComponent } from './checkbox.component';
import * as ɵngcc0 from '@angular/core';
export class NzCheckboxModule {
}
NzCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCheckboxModule });
NzCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[BidiModule, CommonModule, FormsModule, A11yModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCheckboxModule, { declarations: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; }, imports: function () { return [BidiModule, CommonModule, FormsModule, A11yModule]; }, exports: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, FormsModule, A11yModule],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBTzNELE1BQU0sT0FBTyxnQkFBZ0I7QUFBRzs0Q0FML0IsUUFBUSxTQUFDO0VBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGtCQUM1RCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQyxrQkFDekYsT0FBTyxFQUFFLENBQUM7VUFBbUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQyxjQUNyRjs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56Q2hlY2tib3hHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgQTExeU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056Q2hlY2tib3hDb21wb25lbnQsIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCwgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpDaGVja2JveENvbXBvbmVudCwgTnpDaGVja2JveEdyb3VwQ29tcG9uZW50LCBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveE1vZHVsZSB7fVxuIl19