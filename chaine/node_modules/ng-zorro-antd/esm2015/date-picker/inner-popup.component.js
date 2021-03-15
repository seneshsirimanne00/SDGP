/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { PREFIX_CLASS } from './util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './lib/decade-header.component';
import * as ɵngcc3 from './lib/decade-table.component';
import * as ɵngcc4 from './lib/year-header.component';
import * as ɵngcc5 from './lib/year-table.component';
import * as ɵngcc6 from './lib/month-header.component';
import * as ɵngcc7 from './lib/month-table.component';
import * as ɵngcc8 from './lib/date-header.component';
import * as ɵngcc9 from './lib/date-table.component';
import * as ɵngcc10 from 'ng-zorro-antd/time-picker';
import * as ɵngcc11 from '@angular/forms';

function InnerPopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "decade-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "decade-table", 5);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onChooseDecade($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
} }
function InnerPopupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "year-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "year-table", 6);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onChooseYear($event); })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
} }
function InnerPopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "month-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "month-table", 7);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onChooseMonth($event); })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
} }
function InnerPopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "date-header", 8);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "date-table", 9);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onSelectDate($event); })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
} }
function InnerPopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "nz-time-picker-panel", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onSelectTime($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
} }
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        // TODO: name is not proper
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     * @param direction
     * @param panelMode
     */
    enablePrevNext(direction, panelMode) {
        if (!this.showTimePicker &&
            panelMode === this.endPanelMode &&
            ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
            return false;
        }
        return true;
    }
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    onSelectDate(date) {
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
    onChooseMonth(value) {
        this.activeDate = this.activeDate.setMonth(value.getMonth());
        if (this.endPanelMode === 'month') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseYear(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'year') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseDecade(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'decade') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit('year');
        }
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        // New Antd vesion has merged 'date' ant 'time' to one panel,
        // So there is not 'time' panel
        if (changes.panelMode && changes.panelMode.currentValue === 'time') {
            this.panelMode = 'date';
        }
    }
}
InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
InnerPopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { activeDate: "activeDate", value: "value", panelMode: "panelMode", endPanelMode: "endPanelMode", showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", partType: "partType" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", cellHover: "cellHover" }, exportAs: ["innerPopup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 11, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementContainerStart(2, 0);
        ɵngcc0.ɵɵtemplate(3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(6, InnerPopupComponent_ng_container_6_Template, 4, 17, "ng-container", 2);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-datetime-panel", ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.panelMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "decade");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "year");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "month");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
    } }, directives: [ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgSwitchDefault, ɵngcc1.NgIf, ɵngcc2.DecadeHeaderComponent, ɵngcc3.DecadeTableComponent, ɵngcc4.YearHeaderComponent, ɵngcc5.YearTableComponent, ɵngcc6.MonthHeaderComponent, ɵngcc7.MonthTableComponent, ɵngcc8.DateHeaderComponent, ɵngcc9.DateTableComponent, ɵngcc10.NzTimePickerPanelComponent, ɵngcc11.NgControlStatus, ɵngcc11.NgModel], encapsulation: 2, changeDetection: 0 });
InnerPopupComponent.propDecorators = {
    activeDate: [{ type: Input }],
    endPanelMode: [{ type: Input }],
    panelMode: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    value: [{ type: Input }],
    partType: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    cellHover: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InnerPopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        <ng-container [ngSwitch]="panelMode">
          <ng-container *ngSwitchCase="'decade'">
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></decade-header>
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              ></decade-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'year'">
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></year-header>
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              ></year-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'month'">
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></month-header>
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              ></month-table>
            </div>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              [showPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></date-header>
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              ></date-table>
            </div>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="showTimePicker && timeOptions">
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        ></nz-time-picker-panel>
        <!-- use [opened] to trigger time panel \`initPosition()\` -->
      </ng-container>
    </div>
  `
            }]
    }], function () { return []; }, { panelModeChange: [{
            type: Output
        }], headerChange: [{
            type: Output
        }], selectDate: [{
            type: Output
        }], selectTime: [{
            type: Output
        }], cellHover: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], value: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], endPanelMode: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], timeOptions: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], partType: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2lubmVyLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUlwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9JdEMsTUFBTSxPQUFPLG1CQUFtQjtBQUFHLElBbEluQztBQUNHLFFBZ0prQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7QUFDdEUsUUFBRSwyQkFBMkI7QUFDN0IsUUFBcUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsK0NBQStDO0FBQ2xILFFBQXFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNERBQTREO0FBQzdILFFBQXFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0FBQ2hFLFFBQXFCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDO0FBQzdHLFFBQ0UsY0FBUyxHQUFXLFlBQVksQ0FBQztBQUNuQyxJQThFQSxDQUFDO0FBQ0QsSUE5RUU7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFFLGNBQWMsQ0FBQyxTQUEwQixFQUFFLFNBQXFCO0FBQUksUUFDbEUsSUFDRSxDQUFDLElBQUksQ0FBQyxjQUFjO0FBQzFCLFlBQU0sU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZO0FBQ3JDLFlBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUMzRztBQUNOLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZLENBQUMsSUFBVTtBQUFJLFFBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxvQ0FBb0M7QUFDdEMsSUFBRSxZQUFZLENBQUMsSUFBc0I7QUFBSSxRQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pFLFFBQUksTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQzlFLFFBQ0ksdUNBQXVDO0FBQzNDLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFO0FBQ2xDLFlBQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYSxDQUFDLEtBQWdCO0FBQUksUUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNqRSxRQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLEVBQUU7QUFDdkMsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN6QixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxZQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZLENBQUMsS0FBZ0I7QUFBSSxRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELFFBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25ELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWMsQ0FBQyxLQUFnQjtBQUFJLFFBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDL0QsUUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUFFO0FBQ3hDLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsWUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtBQUNoRSxZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN4QyxTQUFLO0FBQ0wsUUFBSSw2REFBNkQ7QUFDakUsUUFBSSwrQkFBK0I7QUFDbkMsUUFBSSxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO0FBQ3hFLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDOUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOytDQXZPQyxTQUFTLFNBQUMsa0JBQ1QsYUFBYSxFQUFFO0VBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLDhDQUE4QyxpQkFDOUMsUUFBUSxFQUFFLGFBQWEsa0JBQ3ZCLFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBiQTRIUDtBQUFDO0FBQXVDLHlCQUMxQyxLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssOEJBRVYsTUFBTTtBQUFLLDJCQUVYLE1BQU07QUFBSyx5QkFDWCxNQUFNO0FBQUsseUJBQ1gsTUFBTTtBQUFLLHdCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBdEJWO1FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBcUJjO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIE56RGF0ZU1vZGUsIFJhbmdlUGFydFR5cGUsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5uZXItcG9wdXAnLFxuICBleHBvcnRBczogJ2lubmVyUG9wdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmFudC1waWNrZXItZGF0ZXRpbWUtcGFuZWxdPVwic2hvd1RpbWVQaWNrZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0te3sgcGFuZWxNb2RlIH19LXBhbmVsXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInBhbmVsTW9kZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkZWNhZGUnXCI+XG4gICAgICAgICAgICA8ZGVjYWRlLWhlYWRlclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyUHJlQnRuXT1cImVuYWJsZVByZXZOZXh0KCdwcmV2JywgJ2RlY2FkZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwiZW5hYmxlUHJldk5leHQoJ25leHQnLCAnZGVjYWRlJylcIlxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2RlY2FkZS1oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRlY2FkZS10YWJsZVxuICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkNob29zZURlY2FkZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgID48L2RlY2FkZS10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiPlxuICAgICAgICAgICAgPHllYXItaGVhZGVyXG4gICAgICAgICAgICAgIFsodmFsdWUpXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAneWVhcicpXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwiZW5hYmxlUHJldk5leHQoJ25leHQnLCAneWVhcicpXCJcbiAgICAgICAgICAgICAgW3Nob3dOZXh0QnRuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgW3Nob3dQcmVCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cInBhbmVsTW9kZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwiaGVhZGVyQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC95ZWFyLWhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYm9keVwiPlxuICAgICAgICAgICAgICA8eWVhci10YWJsZVxuICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJzZWxlY3RlZFZhbHVlXCJcbiAgICAgICAgICAgICAgICBbaG92ZXJWYWx1ZV09XCJob3ZlclZhbHVlXCJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VZZWFyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChjZWxsSG92ZXIpPVwiY2VsbEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgID48L3llYXItdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+XG4gICAgICAgICAgICA8bW9udGgtaGVhZGVyXG4gICAgICAgICAgICAgIFsodmFsdWUpXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnbW9udGgnKVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJOZXh0QnRuXT1cImVuYWJsZVByZXZOZXh0KCduZXh0JywgJ21vbnRoJylcIlxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L21vbnRoLWhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYm9keVwiPlxuICAgICAgICAgICAgICA8bW9udGgtdGFibGVcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwic2VsZWN0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgW2hvdmVyVmFsdWVdPVwiaG92ZXJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlTW9udGgoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGNlbGxIb3Zlcik9XCJjZWxsSG92ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPjwvbW9udGgtdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDxkYXRlLWhlYWRlclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyUHJlQnRuXT1cInNob3dXZWVrID8gZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnd2VlaycpIDogZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwic2hvd1dlZWsgPyBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICd3ZWVrJykgOiBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICdkYXRlJylcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJzaG93V2VlayA/IGVuYWJsZVByZXZOZXh0KCdwcmV2JywgJ3dlZWsnKSA6IGVuYWJsZVByZXZOZXh0KCdwcmV2JywgJ2RhdGUnKVwiXG4gICAgICAgICAgICAgIFtzaG93TmV4dEJ0bl09XCJzaG93V2VlayA/IGVuYWJsZVByZXZOZXh0KCduZXh0JywgJ3dlZWsnKSA6IGVuYWJsZVByZXZOZXh0KCduZXh0JywgJ2RhdGUnKVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2RhdGUtaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkYXRlLXRhYmxlXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgICAgW2NlbGxSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwic2VsZWN0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgW2hvdmVyVmFsdWVdPVwiaG92ZXJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uU2VsZWN0RGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoY2VsbEhvdmVyKT1cImNlbGxIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICA+PC9kYXRlLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1RpbWVQaWNrZXIgJiYgdGltZU9wdGlvbnNcIj5cbiAgICAgICAgPG56LXRpbWUtcGlja2VyLXBhbmVsXG4gICAgICAgICAgW256SW5EYXRlUGlja2VyXT1cInRydWVcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlPy5uYXRpdmVEYXRlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblNlbGVjdFRpbWUoJGV2ZW50KVwiXG4gICAgICAgICAgW2Zvcm1hdF09XCIkYW55KHRpbWVPcHRpb25zLm56Rm9ybWF0KVwiXG4gICAgICAgICAgW256SG91clN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uekhvdXJTdGVwKVwiXG4gICAgICAgICAgW256TWludXRlU3RlcF09XCIkYW55KHRpbWVPcHRpb25zLm56TWludXRlU3RlcClcIlxuICAgICAgICAgIFtuelNlY29uZFN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uelNlY29uZFN0ZXApXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cIiRhbnkodGltZU9wdGlvbnMubnpEaXNhYmxlZEhvdXJzKVwiXG4gICAgICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cIiRhbnkodGltZU9wdGlvbnMubnpEaXNhYmxlZE1pbnV0ZXMpXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwiJGFueSh0aW1lT3B0aW9ucy5uekRpc2FibGVkU2Vjb25kcylcIlxuICAgICAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiISF0aW1lT3B0aW9ucy5uekhpZGVEaXNhYmxlZE9wdGlvbnNcIlxuICAgICAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiJGFueSh0aW1lT3B0aW9ucy5uekRlZmF1bHRPcGVuVmFsdWUpXCJcbiAgICAgICAgICBbbnpVc2UxMkhvdXJzXT1cIiEhdGltZU9wdGlvbnMubnpVc2UxMkhvdXJzXCJcbiAgICAgICAgICBbbnpBZGRPbl09XCIkYW55KHRpbWVPcHRpb25zLm56QWRkT24pXCJcbiAgICAgICAgPjwvbnotdGltZS1waWNrZXItcGFuZWw+XG4gICAgICAgIDwhLS0gdXNlIFtvcGVuZWRdIHRvIHRyaWdnZXIgdGltZSBwYW5lbCBcXGBpbml0UG9zaXRpb24oKVxcYCAtLT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIElubmVyUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhY3RpdmVEYXRlITogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBlbmRQYW5lbE1vZGUhOiBOekRhdGVNb2RlO1xuICBASW5wdXQoKSBwYW5lbE1vZGUhOiBOekRhdGVNb2RlO1xuICBASW5wdXQoKSBzaG93V2VlayE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93VGltZVBpY2tlciE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpbWVPcHRpb25zITogU3VwcG9ydFRpbWVPcHRpb25zIHwgbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWUhOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlITogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgdmFsdWUhOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIHBhcnRUeXBlITogUmFuZ2VQYXJ0VHlwZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlPigpO1xuICAvLyBUT0RPOiBuYW1lIGlzIG5vdCBwcm9wZXJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNlbGxIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9IFBSRUZJWF9DTEFTUztcblxuICAvKipcbiAgICogSGlkZSBcIm5leHRcIiBhcnJvdyBpbiBsZWZ0IHBhbmVsLFxuICAgKiBoaWRlIFwicHJldlwiIGFycm93IGluIHJpZ2h0IHBhbmVsXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHBhbmVsTW9kZVxuICAgKi9cbiAgZW5hYmxlUHJldk5leHQoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHBhbmVsTW9kZTogTnpEYXRlTW9kZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnNob3dUaW1lUGlja2VyICYmXG4gICAgICBwYW5lbE1vZGUgPT09IHRoaXMuZW5kUGFuZWxNb2RlICYmXG4gICAgICAoKHRoaXMucGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHRoaXMucGFydFR5cGUgPT09ICdyaWdodCcgJiYgZGlyZWN0aW9uID09PSAncHJldicpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RUaW1lLmVtaXQobmV3IENhbmR5RGF0ZShkYXRlKSk7XG4gIH1cblxuICAvLyBUaGUgdmFsdWUgcmVhbCBjaGFuZ2VkIHRvIG91dHNpZGVcbiAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICBjb25zdCB0aW1lVmFsdWUgPSB0aGlzLnRpbWVPcHRpb25zICYmIHRoaXMudGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlO1xuXG4gICAgLy8gRGlzcGxheSB0aW1lVmFsdWUgd2hlbiB2YWx1ZSBpcyBudWxsXG4gICAgaWYgKCF0aGlzLnZhbHVlICYmIHRpbWVWYWx1ZSkge1xuICAgICAgdmFsdWUuc2V0SG1zKHRpbWVWYWx1ZS5nZXRIb3VycygpLCB0aW1lVmFsdWUuZ2V0TWludXRlcygpLCB0aW1lVmFsdWUuZ2V0U2Vjb25kcygpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSk7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLmVuZFBhbmVsTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VZZWFyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpO1xuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLmVuZFBhbmVsTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSk7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSAnZGVjYWRlJykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoJ3llYXInKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlRGF0ZSAmJiAhY2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICAgIH1cbiAgICAvLyBOZXcgQW50ZCB2ZXNpb24gaGFzIG1lcmdlZCAnZGF0ZScgYW50ICd0aW1lJyB0byBvbmUgcGFuZWwsXG4gICAgLy8gU28gdGhlcmUgaXMgbm90ICd0aW1lJyBwYW5lbFxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSAmJiBjaGFuZ2VzLnBhbmVsTW9kZS5jdXJyZW50VmFsdWUgPT09ICd0aW1lJykge1xuICAgICAgdGhpcy5wYW5lbE1vZGUgPSAnZGF0ZSc7XG4gICAgfVxuICB9XG59XG4iXX0=