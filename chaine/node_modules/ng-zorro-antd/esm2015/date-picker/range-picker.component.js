/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker.component';
export class NzRangePickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.isRange = true;
    }
}
NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDatePickerComponent, 9)); };
NzRangePickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"] });
NzRangePickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRangePickerComponent, [{
        type: Directive,
        args: [{
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker'
            }]
    }], function () { return [{ type: ɵngcc1.NzDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlci9yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNaEUsa0RBQWtEOzs7QUFDbEQsTUFBTSxPQUFPLHNCQUFzQjtBQUNuQyxJQUFFLFlBQXVDLFVBQWlDO0FBQzFFLFFBRHlDLGVBQVUsR0FBVixVQUFVLENBQXVCO0FBQUMsUUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNIO2tEQVRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCLGtCQUMzQixRQUFRLEVBQUUsZUFBZSxjQUMxQjt3SkFDSTtBQUFDO0FBQ0gsWUFQTSxxQkFBcUIsdUJBUWYsUUFBUSxZQUFJLElBQUk7QUFBTTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotcmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduelJhbmdlUGlja2VyJ1xufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IE56RGF0ZVBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5pc1JhbmdlID0gdHJ1ZTtcbiAgfVxufVxuIl19