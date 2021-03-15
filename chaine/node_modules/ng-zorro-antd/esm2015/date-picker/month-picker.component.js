/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker.component';
export class NzMonthPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'month';
    }
}
NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDatePickerComponent, 9)); };
NzMonthPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], exportAs: ["nzMonthPicker"] });
NzMonthPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthPickerComponent, [{
        type: Directive,
        args: [{
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker'
            }]
    }], function () { return [{ type: ɵngcc1.NzDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlci9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNaEUsa0RBQWtEOzs7QUFDbEQsTUFBTSxPQUFPLHNCQUFzQjtBQUNuQyxJQUFFLFlBQXVDLFVBQWlDO0FBQzFFLFFBRHlDLGVBQVUsR0FBVixVQUFVLENBQXVCO0FBQUMsUUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNIO2tEQVRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCLGtCQUMzQixRQUFRLEVBQUUsZUFBZSxjQUMxQjt3SkFDSTtBQUFDO0FBQ0gsWUFQTSxxQkFBcUIsdUJBUWYsUUFBUSxZQUFJLElBQUk7QUFBTTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotbW9udGgtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduek1vbnRoUGlja2VyJ1xufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTnpNb250aFBpY2tlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IE56RGF0ZVBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5uek1vZGUgPSAnbW9udGgnO1xuICB9XG59XG4iXX0=