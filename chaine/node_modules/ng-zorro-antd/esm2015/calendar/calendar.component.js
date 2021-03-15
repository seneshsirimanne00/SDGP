/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './calendar-cells';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from './calendar-header.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/date-picker';

function NzCalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-table", 6);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_5_Template_date_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r2.prefixCls)("value", ctx_r2.activeDate)("activeDate", ctx_r2.activeDate)("cellRender", ctx_r2.dateCell)("fullCellRender", ctx_r2.dateFullCell)("disabledDate", ctx_r2.nzDisabledDate);
} }
function NzCalendarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "month-table", 7);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_7_Template_month_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r4.prefixCls)("value", ctx_r4.activeDate)("activeDate", ctx_r4.activeDate)("cellRender", ctx_r4.monthCell)("fullCellRender", ctx_r4.monthFullCell);
} }
export class NzCalendarComponent {
    constructor(cdr, elementRef, directionality) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-picker-calendar';
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker-calendar');
    }
    get dateCell() {
        return (this.nzDateCell || this.nzDateCellChild);
    }
    get dateFullCell() {
        return (this.nzDateFullCell || this.nzDateFullCellChild);
    }
    get monthCell() {
        return (this.nzMonthCell || this.nzMonthCellChild);
    }
    get monthFullCell() {
        return (this.nzMonthFullCell || this.nzMonthFullCellChild);
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.dir = this.directionality.value;
        });
    }
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    onYearSelect(year) {
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    onMonthSelect(month) {
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    writeValue(value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.updateDate(new CandyDate(this.nzValue), false);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzCalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DateCell, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DateFullCell, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MonthCell, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MonthFullCell, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 6, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzDisabledDate: "nzDisabledDate", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 9, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate", "valueChange"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-calendar-header", 0);
        ɵngcc0.ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzCalendarComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NzCalendarComponent_ng_template_5_Template, 1, 6, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NzCalendarComponent_ng_template_7_Template, 1, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(6);
        const _r3 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [ɵngcc2.NzCalendarHeaderComponent, ɵngcc3.NgIf, ɵngcc4.ɵDateTableComponent, ɵngcc4.ɵMonthTableComponent], encapsulation: 2, changeDetection: 0 });
NzCalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzPanelChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
    nzDateFullCell: [{ type: Input }],
    nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
    nzMonthCell: [{ type: Input }],
    nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
    nzMonthFullCell: [{ type: Input }],
    nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
    nzFullscreen: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    ></nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          <ng-container *ngIf="nzMode === 'month'; then monthModeTable; else yearModeTable"></ng-container>
        </div>
      </div>
    </div>
    <ng-template #monthModeTable>
      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
      <date-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(dateCell)"
        [fullCellRender]="$any(dateFullCell)"
        [disabledDate]="nzDisabledDate"
        (valueChange)="onDateSelect($event)"
      ></date-table>
    </ng-template>

    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
    <ng-template #yearModeTable>
      <month-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(monthCell)"
        [fullCellRender]="$any(monthFullCell)"
        (valueChange)="onDateSelect($event)"
      ></month-table>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen',
                    '[class.ant-picker-calendar-rtl]': `dir === 'rtl'`
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzMode: [{
            type: Input
        }], nzModeChange: [{
            type: Output
        }], nzPanelChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], nzValueChange: [{
            type: Output
        }], nzFullscreen: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzDisabledDate: [{
            type: Input
        }], nzDateCell: [{
            type: Input
        }], nzDateCellChild: [{
            type: ContentChild,
            args: [DateCell, { static: false, read: TemplateRef }]
        }], nzDateFullCell: [{
            type: Input
        }], nzDateFullCellChild: [{
            type: ContentChild,
            args: [DateFullCell, { static: false, read: TemplateRef }]
        }], nzMonthCell: [{
            type: Input
        }], nzMonthCellChild: [{
            type: ContentChild,
            args: [MonthCell, { static: false, read: TemplateRef }]
        }], nzMonthFullCell: [{
            type: Input
        }], nzMonthFullCellChild: [{
            type: ContentChild,
            args: [MonthFullCell, { static: false, read: TemplateRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxtQkFBbUIsSUFBSSxRQUFRLEVBQy9CLHVCQUF1QixJQUFJLFlBQVksRUFDdkMsb0JBQW9CLElBQUksU0FBUyxFQUNqQyx3QkFBd0IsSUFBSSxhQUFhLEVBQzFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRDFCLE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQWtEakMsWUFBb0IsR0FBc0IsRUFBVSxVQUFzQixFQUFzQixjQUE4QjtBQUNoSSxRQURzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQXFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtB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RSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFPLDZCQUtsRSxLQUFLO0FBQUssa0NBQ1YsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFPLDBCQUt0RSxLQUFLO0FBQUssK0JBQ1YsWUFBWSxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFPLDhCQUtuRSxLQUFLO0FBQUssbUNBQ1YsWUFBWSxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFPLDJCQUt2RSxLQUFLO0FBQUk7QUFBZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBRW5CLHlEQUYrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ3hEO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTnpEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCxcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxuICBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsXG4gIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsXG59IGZyb20gJy4vY2FsZW5kYXItY2VsbHMnO1xuXG5leHBvcnQgdHlwZSBOekNhbGVuZGFyTW9kZSA9ICdtb250aCcgfCAneWVhcic7XG50eXBlIE56Q2FsZW5kYXJEYXRlVGVtcGxhdGUgPSBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotY2FsZW5kYXItaGVhZGVyXG4gICAgICBbZnVsbHNjcmVlbl09XCJuekZ1bGxzY3JlZW5cIlxuICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICBbKG1vZGUpXT1cIm56TW9kZVwiXG4gICAgICAobW9kZUNoYW5nZSk9XCJvbk1vZGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoeWVhckNoYW5nZSk9XCJvblllYXJTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAobW9udGhDaGFuZ2UpPVwib25Nb250aFNlbGVjdCgkZXZlbnQpXCJcbiAgICA+PC9uei1jYWxlbmRhci1oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXIte3sgbnpNb2RlID09PSAnbW9udGgnID8gJ2RhdGUnIDogJ21vbnRoJyB9fS1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1ib2R5XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TW9kZSA9PT0gJ21vbnRoJzsgdGhlbiBtb250aE1vZGVUYWJsZTsgZWxzZSB5ZWFyTW9kZVRhYmxlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNtb250aE1vZGVUYWJsZT5cbiAgICAgIDwhLS0gIFRPRE8oQHdlbnFpNzMpIFtjZWxsUmVuZGVyXSBbZnVsbENlbGxSZW5kZXJdIC0tPlxuICAgICAgPGRhdGUtdGFibGVcbiAgICAgICAgW3ByZWZpeENsc109XCJwcmVmaXhDbHNcIlxuICAgICAgICBbdmFsdWVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICBbY2VsbFJlbmRlcl09XCIkYW55KGRhdGVDZWxsKVwiXG4gICAgICAgIFtmdWxsQ2VsbFJlbmRlcl09XCIkYW55KGRhdGVGdWxsQ2VsbClcIlxuICAgICAgICBbZGlzYWJsZWREYXRlXT1cIm56RGlzYWJsZWREYXRlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCJcbiAgICAgID48L2RhdGUtdGFibGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gIFRPRE8oQHdlbnFpNzMpIFtjZWxsUmVuZGVyXSBbZnVsbENlbGxSZW5kZXJdIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjeWVhck1vZGVUYWJsZT5cbiAgICAgIDxtb250aC10YWJsZVxuICAgICAgICBbcHJlZml4Q2xzXT1cInByZWZpeENsc1wiXG4gICAgICAgIFt2YWx1ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFtjZWxsUmVuZGVyXT1cIiRhbnkobW9udGhDZWxsKVwiXG4gICAgICAgIFtmdWxsQ2VsbFJlbmRlcl09XCIkYW55KG1vbnRoRnVsbENlbGwpXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCJcbiAgICAgID48L21vbnRoLXRhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItZnVsbF0nOiAnbnpGdWxsc2NyZWVuJyxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItbWluaV0nOiAnIW56RnVsbHNjcmVlbicsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWNhbGVuZGFyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekZ1bGxzY3JlZW46IEJvb2xlYW5JbnB1dDtcblxuICBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1waWNrZXItY2FsZW5kYXInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgQElucHV0KCkgbnpNb2RlOiBOekNhbGVuZGFyTW9kZSA9ICdtb250aCc7XG4gIEBJbnB1dCgpIG56VmFsdWU/OiBEYXRlO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZT86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekNhbGVuZGFyTW9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlOyBtb2RlOiBOekNhbGVuZGFyTW9kZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENhbm5vdCB1c2UgQElucHV0IGFuZCBAQ29udGVudENoaWxkIG9uIG9uZSB2YXJpYWJsZVxuICAgKiBiZWNhdXNlIHsgc3RhdGljOiBmYWxzZSB9IHdpbGwgbWFrZSBASW5wdXQgcHJvcGVydHkgZ2V0IGRlbGF5ZWRcbiAgICoqL1xuICBASW5wdXQoKSBuekRhdGVDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVDZWxsQ2hpbGQ/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBnZXQgZGF0ZUNlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56RGF0ZUNlbGwgfHwgdGhpcy5uekRhdGVDZWxsQ2hpbGQpITtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RGF0ZUZ1bGxDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlRnVsbENlbGxDaGlsZD86IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGU7XG4gIGdldCBkYXRlRnVsbENlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56RGF0ZUZ1bGxDZWxsIHx8IHRoaXMubnpEYXRlRnVsbENlbGxDaGlsZCkhO1xuICB9XG5cbiAgQElucHV0KCkgbnpNb250aENlbGw/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoQ2VsbENoaWxkPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgZ2V0IG1vbnRoQ2VsbCgpOiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gKHRoaXMubnpNb250aENlbGwgfHwgdGhpcy5uek1vbnRoQ2VsbENoaWxkKSE7XG4gIH1cblxuICBASW5wdXQoKSBuek1vbnRoRnVsbENlbGw/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aEZ1bGxDZWxsQ2hpbGQ/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBnZXQgbW9udGhGdWxsQ2VsbCgpOiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gKHRoaXMubnpNb250aEZ1bGxDZWxsIHx8IHRoaXMubnpNb250aEZ1bGxDZWxsQ2hpbGQpITtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1waWNrZXItY2FsZW5kYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vZGVDaGFuZ2UobW9kZTogTnpDYWxlbmRhck1vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICAgIHRoaXMubnpQYW5lbENoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5hY3RpdmVEYXRlLm5hdGl2ZURhdGUsIG1vZGUgfSk7XG4gIH1cblxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFjdGl2ZURhdGUgaXMgZW5vdWdoIGluIGNhbGVuZGFyXG4gICAgLy8gdGhpcy52YWx1ZSA9IGRhdGU7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSwgZmFsc2UpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBDYW5keURhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XG4gICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHRoaXMubnpWYWx1ZSksIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==