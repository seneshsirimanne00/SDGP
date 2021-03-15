/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzDatePickerComponent } from './date-picker.component';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker.component';
export class NzYearPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'year';
    }
}
NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDatePickerComponent, 9)); };
NzYearPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], exportAs: ["nzYearPicker"] });
NzYearPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzYearPickerComponent, [{
        type: Directive,
        args: [{
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker'
            }]
    }], function () { return [{ type: ɵngcc1.NzDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL3llYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTWhFLGtEQUFrRDs7O0FBQ2xELE1BQU0sT0FBTyxxQkFBcUI7QUFDbEMsSUFBRSxZQUF1QyxVQUFpQztBQUMxRSxRQUR5QyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtBQUFDLFFBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNwQyxJQUFFLENBQUM7QUFDSDtpREFUQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsUUFBUSxFQUFFLGNBQWMsY0FDekI7b0pBQ0k7QUFBQztBQUNKLFlBUE8scUJBQXFCLHVCQVFmLFFBQVEsWUFBSSxJQUFJO0FBQU07Ozs7Ozs7Ozs7O2tDQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXllYXItcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduelllYXJQaWNrZXInXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBOelllYXJQaWNrZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBkYXRlUGlja2VyOiBOekRhdGVQaWNrZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIubnpNb2RlID0gJ3llYXInO1xuICB9XG59XG4iXX0=