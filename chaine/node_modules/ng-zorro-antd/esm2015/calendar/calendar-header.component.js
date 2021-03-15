/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from 'ng-zorro-antd/select';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/radio';

function NzCalendarHeaderComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    const year_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", year_r2.label)("nzValue", year_r2.value);
} }
function NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", month_r4.label)("nzValue", month_r4.value);
} }
function NzCalendarHeaderComponent_nz_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_3_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.monthChange.emit($event); });
    ɵngcc0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template, 1, 2, "nz-option", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
export class NzCalendarHeaderComponent {
    constructor(i18n, dateHelper, elementRef) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new CandyDate();
        this.modeChange = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.years = [];
        this.months = [];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-fullcalendar-header');
    }
    get activeYear() {
        return this.activeDate.getYear();
    }
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.lang.year;
    }
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.lang.month;
    }
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    setUpYears(year) {
        const start = (year || this.activeYear) - this.yearOffset;
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            const dateInMonth = this.activeDate.setMonth(i);
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCalendarHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostVars: 2, hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", "block");
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 9, vars: 9, consts: [[1, "ant-picker-calendar-header"], [1, "ant-picker-calendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ant-picker-calendar-mode-switch", 3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "nz-select", 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.updateYear($event); });
        ɵngcc0.ɵɵtemplate(2, NzCalendarHeaderComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NzCalendarHeaderComponent_nz_select_3_Template, 2, 4, "nz-select", 3);
        ɵngcc0.ɵɵelementStart(4, "nz-radio-group", 4);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.modeChange.emit($event); });
        ɵngcc0.ɵɵelementStart(5, "label", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "label", 6);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.years);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "month");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.monthTypeText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.yearTypeText);
    } }, directives: [ɵngcc2.NzSelectComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc4.NgForOf, ɵngcc4.NgIf, ɵngcc5.NzRadioGroupComponent, ɵngcc5.NzRadioComponent, ɵngcc5.NzRadioButtonDirective, ɵngcc2.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: I18n },
    { type: DateHelperService },
    { type: ElementRef }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    fullscreen: [{ type: Input }],
    activeDate: [{ type: Input }],
    modeChange: [{ type: Output }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: `
    <div class="ant-picker-calendar-header">
      <nz-select
        class="ant-picker-calendar-year-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeYear"
        (ngModelChange)="updateYear($event)"
      >
        <nz-option *ngFor="let year of years" [nzLabel]="year.label" [nzValue]="year.value"></nz-option>
      </nz-select>

      <nz-select
        *ngIf="mode === 'month'"
        class="ant-picker-calendar-month-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeMonth"
        (ngModelChange)="monthChange.emit($event)"
      >
        <nz-option *ngFor="let month of months" [nzLabel]="month.label" [nzValue]="month.value"></nz-option>
      </nz-select>

      <nz-radio-group class="ant-picker-calendar-mode-switch" [(ngModel)]="mode" (ngModelChange)="modeChange.emit($event)" [nzSize]="size">
        <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
        <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
      </nz-radio-group>
    </div>
  `,
                host: {
                    '[style.display]': `'block'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc1.DateHelperService }, { type: ɵngcc0.ElementRef }]; }, { mode: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], modeChange: [{
            type: Output
        }], yearChange: [{
            type: Output
        }], monthChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QzlFLE1BQU0sT0FBTyx5QkFBeUI7QUFBRyxJQW1DdkMsWUFBb0IsSUFBVSxFQUFVLFVBQTZCLEVBQVUsVUFBc0I7QUFDdkcsUUFEc0IsU0FBSSxHQUFKLElBQUksQ0FBTTtBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7QUFBQyxRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQWxDN0YsU0FBSSxHQUFxQixPQUFPLENBQUM7QUFDNUMsUUFBVyxlQUFVLEdBQVksSUFBSSxDQUFDO0FBQ3RDLFFBQVcsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7QUFDbkQsUUFDcUIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3JGLFFBQXFCLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMzRSxRQUFxQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzVFLFFBQUUsZ0ZBQWdGO0FBQ2xGLFFBQ0UsZUFBVSxHQUFXLEVBQUUsQ0FBQztBQUMxQixRQUFFLGNBQVMsR0FBVyxFQUFFLENBQUM7QUFDekIsUUFB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QUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRSxvQkFBb0Isa0JBQzlCLFFBQVEsRUFBRTtXQUFrQixrQkFDNUIsUUFBUSxFQUFFOztpMkJBNEJULGtCQUNELElBQUksRUFBRSxzQkFDSixpQkFBaUIsRUFBRSxTQUFTO0dBQzdCLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhRQUNJO0FBQUM7QUFBbUQsWUF6Q1osSUFBSTtBQUFJLFlBQTVDLGlCQUFpQjtBQUFJLFlBRmUsVUFBVTtBQUFHO0FBQUc7QUFBNkMsbUJBNEN2RyxLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx5QkFFVixNQUFNO0FBQUsseUJBQ1gsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOelNlbGVjdFNpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXItaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFySGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1jYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgIDxuei1zZWxlY3RcbiAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLWNhbGVuZGFyLXllYXItc2VsZWN0XCJcbiAgICAgICAgW256U2l6ZV09XCJzaXplXCJcbiAgICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImZhbHNlXCJcbiAgICAgICAgW25nTW9kZWxdPVwiYWN0aXZlWWVhclwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVllYXIoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxuei1vcHRpb24gKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiBbbnpMYWJlbF09XCJ5ZWFyLmxhYmVsXCIgW256VmFsdWVdPVwieWVhci52YWx1ZVwiPjwvbnotb3B0aW9uPlxuICAgICAgPC9uei1zZWxlY3Q+XG5cbiAgICAgIDxuei1zZWxlY3RcbiAgICAgICAgKm5nSWY9XCJtb2RlID09PSAnbW9udGgnXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLWNhbGVuZGFyLW1vbnRoLXNlbGVjdFwiXG4gICAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJmYWxzZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cImFjdGl2ZU1vbnRoXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibW9udGhDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPG56LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzXCIgW256TGFiZWxdPVwibW9udGgubGFiZWxcIiBbbnpWYWx1ZV09XCJtb250aC52YWx1ZVwiPjwvbnotb3B0aW9uPlxuICAgICAgPC9uei1zZWxlY3Q+XG5cbiAgICAgIDxuei1yYWRpby1ncm91cCBjbGFzcz1cImFudC1waWNrZXItY2FsZW5kYXItbW9kZS1zd2l0Y2hcIiBbKG5nTW9kZWwpXT1cIm1vZGVcIiAobmdNb2RlbENoYW5nZSk9XCJtb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiIFtuelNpemVdPVwic2l6ZVwiPlxuICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJtb250aFwiPnt7IG1vbnRoVHlwZVRleHQgfX08L2xhYmVsPlxuICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJ5ZWFyXCI+e3sgeWVhclR5cGVUZXh0IH19PC9sYWJlbD5cbiAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1vZGU6ICdtb250aCcgfCAneWVhcicgPSAnbW9udGgnO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB5ZWFyT2Zmc2V0OiBudW1iZXIgPSAxMDtcbiAgeWVhclRvdGFsOiBudW1iZXIgPSAyMDtcbiAgeWVhcnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PiA9IFtdO1xuICBtb250aHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PiA9IFtdO1xuXG4gIGdldCBhY3RpdmVZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRZZWFyKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlTW9udGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gIH1cblxuICBnZXQgc2l6ZSgpOiBOelNlbGVjdFNpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gJ2RlZmF1bHQnIDogJ3NtYWxsJztcbiAgfVxuXG4gIGdldCB5ZWFyVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLmxhbmcueWVhcjtcbiAgfVxuXG4gIGdldCBtb250aFR5cGVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci5sYW5nLm1vbnRoO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtZnVsbGNhbGVuZGFyLWhlYWRlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRVcFllYXJzKCk7XG4gICAgdGhpcy5zZXRVcE1vbnRocygpO1xuICB9XG5cbiAgdXBkYXRlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh5ZWFyKTtcbiAgICB0aGlzLnNldFVwWWVhcnMoeWVhcik7XG4gIH1cblxuICBwcml2YXRlIHNldFVwWWVhcnMoeWVhcj86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gKHllYXIgfHwgdGhpcy5hY3RpdmVZZWFyKSAtIHRoaXMueWVhck9mZnNldDtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMueWVhclRvdGFsO1xuXG4gICAgdGhpcy55ZWFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goeyBsYWJlbDogYCR7aX1gLCB2YWx1ZTogaSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwTW9udGhzKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGVJbk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKGkpO1xuICAgICAgY29uc3QgbW9udGhUZXh0ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlSW5Nb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHsgbGFiZWw6IG1vbnRoVGV4dCwgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=