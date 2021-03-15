/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TimeHolder } from './time-holder';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/button';
import * as ɵngcc4 from 'ng-zorro-antd/core/wave';
import * as ɵngcc5 from 'ng-zorro-antd/core/transition-patch';

const _c0 = ["hourListElement"];
const _c1 = ["minuteListElement"];
const _c2 = ["secondListElement"];
const _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\u00A0");
} }
function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const hour_r8 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.selectHour(hour_r8); });
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "number");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r9.isSelectedHour(hour_r8))("ant-picker-time-panel-cell-disabled", hour_r8.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(3, 5, hour_r8.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r7.nzHideDisabledOptions && hour_r8.disabled));
} }
function NzTimePickerPanelComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 6, 7);
    ɵngcc0.ɵɵtemplate(2, NzTimePickerPanelComponent_ul_2_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.hourRange)("ngForTrackBy", ctx_r1.trackByFn);
} }
function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const minute_r16 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.selectMinute(minute_r16); });
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "number");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r16 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r17.isSelectedMinute(minute_r16))("ant-picker-time-panel-cell-disabled", minute_r16.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(3, 5, minute_r16.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const minute_r16 = ctx.$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r15.nzHideDisabledOptions && minute_r16.disabled));
} }
function NzTimePickerPanelComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 6, 12);
    ɵngcc0.ɵɵtemplate(2, NzTimePickerPanelComponent_ul_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.minuteRange)("ngForTrackBy", ctx_r2.trackByFn);
} }
function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r28); const second_r24 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.selectSecond(second_r24); });
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "number");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const second_r24 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r25.isSelectedSecond(second_r24))("ant-picker-time-panel-cell-disabled", second_r24.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(3, 5, second_r24.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const second_r24 = ctx.$implicit;
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r23.nzHideDisabledOptions && second_r24.disabled));
} }
function NzTimePickerPanelComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 6, 13);
    ɵngcc0.ɵɵtemplate(2, NzTimePickerPanelComponent_ul_4_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.secondRange)("ngForTrackBy", ctx_r3.trackByFn);
} }
function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); const range_r32 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.select12Hours(range_r32); });
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r32 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r33 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r33.isSelected12Hours(range_r32));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(range_r32.value);
} }
function NzTimePickerPanelComponent_ul_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template, 3, 3, "li", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r31 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r31.nzHideDisabledOptions);
} }
function NzTimePickerPanelComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 6, 14);
    ɵngcc0.ɵɵtemplate(2, NzTimePickerPanelComponent_ul_5_ng_container_2_Template, 2, 1, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.use12HoursRange);
} }
function NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template(rf, ctx) { }
function NzTimePickerPanelComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r38.nzAddOn);
} }
function NzTimePickerPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_div_1_Template, 2, 1, "div", 18);
    ɵngcc0.ɵɵelementStart(2, "ul", 19);
    ɵngcc0.ɵɵelementStart(3, "li", 20);
    ɵngcc0.ɵɵelementStart(4, "a", 21);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_Template_a_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.onClickNow(); });
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "nzI18n");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "li", 22);
    ɵngcc0.ɵɵelementStart(8, "button", 23);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_Template_button_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.onClickOk(); });
    ɵngcc0.ɵɵtext(9);
    ɵngcc0.ɵɵpipe(10, "nzI18n");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.nzAddOn);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.nzNowText || ɵngcc0.ɵɵpipeBind1(6, 3, "Calendar.lang.now"), " ");
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.nzOkText || ɵngcc0.ɵɵpipeBind1(10, 5, "Calendar.lang.ok"), " ");
} }
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
export class NzTimePickerPanelComponent {
    constructor(cdr, dateHelper, elementRef) {
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._disabledHours = () => [];
        this._disabledMinutes = () => [];
        this._disabledSeconds = () => [];
        this._allowEmpty = true;
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.firstScrolled = false;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.closePanel = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker-time-panel');
    }
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (!!this._disabledHours) {
            this.buildHours();
        }
    }
    get nzDisabledHours() {
        return this._disabledHours;
    }
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    get format() {
        return this._format;
    }
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    get nzHourStep() {
        return this._nzHourStep;
    }
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    trackByFn(index) {
        return index;
    }
    buildHours() {
        var _a;
        let hourRanges = 24;
        let disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
        let startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(i => i >= 12).map(i => (i > 12 ? i - 12 : i));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter(i => i < 12 || i === 24).map(i => (i === 24 || i === 0 ? 12 : i));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(r => {
            return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
            };
        });
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(r => {
            return {
                index: r,
                disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
            };
        });
    }
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map(r => {
            return {
                index: r,
                disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
            };
        });
    }
    build12Hours() {
        const isUpperFormat = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperFormat ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperFormat ? 'PM' : 'pm'
            }
        ];
    }
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    scrollToTime(delay = 0) {
        if (this.hourEnabled && this.hourListElement) {
            this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, 'hour');
        }
        if (this.minuteEnabled && this.minuteListElement) {
            this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, 'minute');
        }
        if (this.secondEnabled && this.secondListElement) {
            this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, 'second');
        }
        if (this.nzUse12Hours && this.use12HoursListElement) {
            const selectedHours = this.time.selected12Hours;
            const index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    }
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
    }
    select12Hours(value) {
        this.time.setSelected12Hours(value.value);
        if (!!this._disabledHours) {
            this.buildHours();
        }
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    scrollToSelected(instance, index, duration = 0, unit) {
        if (!instance) {
            return;
        }
        const transIndex = this.translateIndex(index, unit);
        const currentOption = (instance.children[transIndex] || instance.children[0]);
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    translateIndex(index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, this.time.hours), this.minuteRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, this.time.hours, this.time.minutes), this.secondRange.map(item => item.index).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map(item => item.index).indexOf(index));
        }
    }
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        const difference = to - element.scrollTop;
        const perTick = (difference / duration) * 10;
        reqAnimFrame(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        });
    }
    calcIndex(array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }, 0));
        }
        else {
            return index;
        }
    }
    changed() {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    }
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    timeDisabled(value) {
        var _a, _b, _c, _d, _e, _f;
        const hour = value.getHours();
        const minute = value.getMinutes();
        const second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
            ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
            ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    }
    onClickNow() {
        const now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    }
    onClickOk() {
        this.closePanel.emit();
    }
    isSelectedHour(hour) {
        return hour.index === this.time.viewHours;
    }
    isSelectedMinute(minute) {
        return minute.index === this.time.minutes;
    }
    isSelectedSecond(second) {
        return second.index === this.time.seconds;
    }
    isSelected12Hours(value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    }
    ngOnInit() {
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.changed();
            this.touched();
            this.scrollToTime(120);
        });
        this.buildTimes();
        setTimeout(() => {
            this.scrollToTime();
            this.firstScrolled = true;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, nzDefaultOpenValue } = changes;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    }
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event) {
        event.preventDefault();
    }
}
NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) { return new (t || NzTimePickerPanelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTimePickerPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimePickerPanelComponent, selectors: [["nz-time-picker-panel"]], viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
    } }, hostVars: 12, hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NzTimePickerPanelComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
    } }, inputs: { nzInDatePicker: "nzInDatePicker", nzHideDisabledOptions: "nzHideDisabledOptions", nzUse12Hours: "nzUse12Hours", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzAddOn: "nzAddOn", nzClearText: "nzClearText", nzNowText: "nzNowText", nzOkText: "nzOkText", nzPlaceHolder: "nzPlaceHolder", nzDefaultOpenValue: "nzDefaultOpenValue" }, outputs: { closePanel: "closePanel" }, exportAs: ["nzTimePickerPanel"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 6, consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content"], ["class", "ant-picker-time-panel-column", "style", "position: relative;", 4, "ngIf"], ["class", "ant-picker-footer", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], ["hourListElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled", "click", 4, "ngIf"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [4, "ngFor", "ngForOf"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "click", 4, "ngIf"], [1, "ant-picker-footer"], ["class", "ant-picker-footer-extra", 4, "ngIf"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [1, "ant-picker-footer-extra"], [3, "ngTemplateOutlet"]], template: function NzTimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzTimePickerPanelComponent_ul_2_Template, 3, 2, "ul", 2);
        ɵngcc0.ɵɵtemplate(3, NzTimePickerPanelComponent_ul_3_Template, 3, 2, "ul", 2);
        ɵngcc0.ɵɵtemplate(4, NzTimePickerPanelComponent_ul_4_Template, 3, 2, "ul", 2);
        ɵngcc0.ɵɵtemplate(5, NzTimePickerPanelComponent_ul_5_Template, 3, 1, "ul", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzTimePickerPanelComponent_div_6_Template, 11, 7, "div", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzInDatePicker);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hourEnabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.minuteEnabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.secondEnabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzUse12Hours);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzInDatePicker);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc3.NzButtonComponent, ɵngcc4.NzWaveDirective, ɵngcc5.ɵNzTransitionPatchDirective, ɵngcc2.NgTemplateOutlet], pipes: [ɵngcc2.DecimalPipe, ɵngcc1.NzI18nPipe], encapsulation: 2, changeDetection: 0 });
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: ElementRef }
];
NzTimePickerPanelComponent.propDecorators = {
    hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
    minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
    secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
    use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
    nzInDatePicker: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzHideDisabledOptions: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzNowText: [{ type: Input }],
    nzOkText: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzUse12Hours: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    closePanel: [{ type: Output }],
    nzAllowEmpty: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    format: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimePickerPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                template: `
    <div *ngIf="nzInDatePicker" class="ant-picker-header">
      <div class="ant-picker-header-view">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>
    </div>
    <div class="ant-picker-content">
      <ul *ngIf="hourEnabled" #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let hour of hourRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && hour.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectHour(hour)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
            [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="minuteEnabled" #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let minute of minuteRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && minute.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectMinute(minute)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
            [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="secondEnabled" #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let second of secondRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && second.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectSecond(second)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
            [class.ant-picker-time-panel-cell-disabled]="second.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="nzUse12Hours" #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let range of use12HoursRange">
          <li
            *ngIf="!nzHideDisabledOptions"
            (click)="select12Hours(range)"
            class="ant-picker-time-panel-cell"
            [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
          </li>
        </ng-container>
      </ul>
    </div>
    <div *ngIf="!nzInDatePicker" class="ant-picker-footer">
      <div *ngIf="nzAddOn" class="ant-picker-footer-extra">
        <ng-template [ngTemplateOutlet]="nzAddOn"></ng-template>
      </div>
      <ul class="ant-picker-ranges">
        <li class="ant-picker-now">
          <a (click)="onClickNow()">
            {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}
          </a>
        </li>
        <li class="ant-picker-ok">
          <button nz-button type="button" nzSize="small" nzType="primary" (click)="onClickOk()">
            {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}
          </button>
        </li>
      </ul>
    </div>
  `,
                host: {
                    '[class.ant-picker-time-panel-column-0]': `enabledColumns === 0 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-1]': `enabledColumns === 1 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-2]': `enabledColumns === 2 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-3]': `enabledColumns === 3 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-narrow]': `enabledColumns < 3`,
                    '[class.ant-picker-time-panel-placement-bottomLeft]': `!nzInDatePicker`,
                    '(mousedown)': 'onMousedown($event)'
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.DateHelperService }, { type: ɵngcc0.ElementRef }]; }, { nzInDatePicker: [{
            type: Input
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], closePanel: [{
            type: Output
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }], format: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }], hourListElement: [{
            type: ViewChild,
            args: ['hourListElement', { static: false }]
        }], minuteListElement: [{
            type: ViewChild,
            args: ['minuteListElement', { static: false }]
        }], secondListElement: [{
            type: ViewChild,
            args: ['secondListElement', { static: false }]
        }], use12HoursListElement: [{
            type: ViewChild,
            args: ['use12HoursListElement', { static: false }]
        }], nzAddOn: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzNowText: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlLENBQUMsRUFBRSxRQUFnQixDQUFD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LDhCQVVDLEtBQUs7QUFDTixnQ0FXQyxLQUFLO0FBQ04sZ0NBV0MsS0FBSztBQUNOLHFCQVdDLEtBQUs7QUFDTix5QkEyQkMsS0FBSztBQUNOLDJCQVdDLEtBQUs7QUFDTiwyQkFXQyxLQUFLO0FBQ1A7QUF6RzBCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDWCxnRUFEK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ2hEO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVidWdFbGVtZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaW1lSG9sZGVyIH0gZnJvbSAnLi90aW1lLWhvbGRlcic7XG5cbmZ1bmN0aW9uIG1ha2VSYW5nZShsZW5ndGg6IG51bWJlciwgc3RlcDogbnVtYmVyID0gMSwgc3RhcnQ6IG51bWJlciA9IDApOiBudW1iZXJbXSB7XG4gIHJldHVybiBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHN0ZXApKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKGkgKyBzdGFydCkgKiBzdGVwKTtcbn1cblxuZXhwb3J0IHR5cGUgTnpUaW1lUGlja2VyVW5pdCA9ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCcgfCAnMTItaG91cic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei10aW1lLXBpY2tlci1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnbnpUaW1lUGlja2VyUGFuZWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJuekluRGF0ZVBpY2tlclwiIGNsYXNzPVwiYW50LXBpY2tlci1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLWhlYWRlci12aWV3XCI+e3sgZGF0ZUhlbHBlci5mb3JtYXQoJGFueSh0aW1lPy52YWx1ZSksIGZvcm1hdCkgfHwgJyZuYnNwOycgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1jb250ZW50XCI+XG4gICAgICA8dWwgKm5nSWY9XCJob3VyRW5hYmxlZFwiICNob3VyTGlzdEVsZW1lbnQgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91clJhbmdlOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIShuekhpZGVEaXNhYmxlZE9wdGlvbnMgJiYgaG91ci5kaXNhYmxlZClcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0SG91cihob3VyKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZEhvdXIoaG91cilcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWRpc2FibGVkXT1cImhvdXIuZGlzYWJsZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1pbm5lclwiPnt7IGhvdXIuaW5kZXggfCBudW1iZXI6ICcyLjAtMCcgfX08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgKm5nSWY9XCJtaW51dGVFbmFibGVkXCIgI21pbnV0ZUxpc3RFbGVtZW50IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtblwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgbWludXRlUmFuZ2U7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhKG56SGlkZURpc2FibGVkT3B0aW9ucyAmJiBtaW51dGUuZGlzYWJsZWQpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1pbnV0ZShtaW51dGUpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1zZWxlY3RlZF09XCJpc1NlbGVjdGVkTWludXRlKG1pbnV0ZSlcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWRpc2FibGVkXT1cIm1pbnV0ZS5kaXNhYmxlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWlubmVyXCI+e3sgbWludXRlLmluZGV4IHwgbnVtYmVyOiAnMi4wLTAnIH19PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgICAgPHVsICpuZ0lmPVwic2Vjb25kRW5hYmxlZFwiICNzZWNvbmRMaXN0RWxlbWVudCBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW5cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2Vjb25kIG9mIHNlY29uZFJhbmdlOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIShuekhpZGVEaXNhYmxlZE9wdGlvbnMgJiYgc2Vjb25kLmRpc2FibGVkKVwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RTZWNvbmQoc2Vjb25kKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFNlY29uZChzZWNvbmQpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1kaXNhYmxlZF09XCJzZWNvbmQuZGlzYWJsZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1pbm5lclwiPnt7IHNlY29uZC5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fTwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC91bD5cbiAgICAgIDx1bCAqbmdJZj1cIm56VXNlMTJIb3Vyc1wiICN1c2UxMkhvdXJzTGlzdEVsZW1lbnQgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJhbmdlIG9mIHVzZTEySG91cnNSYW5nZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhbnpIaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QxMkhvdXJzKHJhbmdlKVwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1zZWxlY3RlZF09XCJpc1NlbGVjdGVkMTJIb3VycyhyYW5nZSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1pbm5lclwiPnt7IHJhbmdlLnZhbHVlIH19PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCIhbnpJbkRhdGVQaWNrZXJcIiBjbGFzcz1cImFudC1waWNrZXItZm9vdGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwibnpBZGRPblwiIGNsYXNzPVwiYW50LXBpY2tlci1mb290ZXItZXh0cmFcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56QWRkT25cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJhbnQtcGlja2VyLXJhbmdlc1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJhbnQtcGlja2VyLW5vd1wiPlxuICAgICAgICAgIDxhIChjbGljayk9XCJvbkNsaWNrTm93KClcIj5cbiAgICAgICAgICAgIHt7IG56Tm93VGV4dCB8fCAoJ0NhbGVuZGFyLmxhbmcubm93JyB8IG56STE4bikgfX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFudC1waWNrZXItb2tcIj5cbiAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnpTaXplPVwic21hbGxcIiBuelR5cGU9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2tPaygpXCI+XG4gICAgICAgICAgICB7eyBuek9rVGV4dCB8fCAoJ0NhbGVuZGFyLmxhbmcub2snIHwgbnpJMThuKSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi0wXSc6IGBlbmFibGVkQ29sdW1ucyA9PT0gMCAmJiAhbnpJbkRhdGVQaWNrZXJgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi0xXSc6IGBlbmFibGVkQ29sdW1ucyA9PT0gMSAmJiAhbnpJbkRhdGVQaWNrZXJgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi0yXSc6IGBlbmFibGVkQ29sdW1ucyA9PT0gMiAmJiAhbnpJbkRhdGVQaWNrZXJgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtbi0zXSc6IGBlbmFibGVkQ29sdW1ucyA9PT0gMyAmJiAhbnpJbkRhdGVQaWNrZXJgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLW5hcnJvd10nOiBgZW5hYmxlZENvbHVtbnMgPCAzYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1wbGFjZW1lbnQtYm90dG9tTGVmdF0nOiBgIW56SW5EYXRlUGlja2VyYCxcbiAgICAnKG1vdXNlZG93biknOiAnb25Nb3VzZWRvd24oJGV2ZW50KSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VXNlMTJIb3VyczogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgX256SG91clN0ZXAgPSAxO1xuICBwcml2YXRlIF9uek1pbnV0ZVN0ZXAgPSAxO1xuICBwcml2YXRlIF9uelNlY29uZFN0ZXAgPSAxO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgb25DaGFuZ2U/OiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25Ub3VjaD86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXSA9ICgpID0+IFtdO1xuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSA9ICgpID0+IFtdO1xuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10gPSAoKSA9PiBbXTtcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XG4gIHRpbWUgPSBuZXcgVGltZUhvbGRlcigpO1xuICBob3VyRW5hYmxlZCA9IHRydWU7XG4gIG1pbnV0ZUVuYWJsZWQgPSB0cnVlO1xuICBzZWNvbmRFbmFibGVkID0gdHJ1ZTtcbiAgZmlyc3RTY3JvbGxlZCA9IGZhbHNlO1xuICBlbmFibGVkQ29sdW1ucyA9IDM7XG4gIGhvdXJSYW5nZSE6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgbWludXRlUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIHNlY29uZFJhbmdlITogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICB1c2UxMkhvdXJzUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PjtcblxuICBAVmlld0NoaWxkKCdob3VyTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgaG91ckxpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaW51dGVMaXN0RWxlbWVudD86IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2Vjb25kTGlzdEVsZW1lbnQ/OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3VzZTEySG91cnNMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB1c2UxMkhvdXJzTGlzdEVsZW1lbnQ/OiBEZWJ1Z0VsZW1lbnQ7XG5cbiAgQElucHV0KCkgbnpJbkRhdGVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSWYgaW5zaWRlIGEgZGF0ZS1waWNrZXIsIG1vcmUgZGlmZiB3b3JrcyBuZWVkIHRvIGJlIGRvbmVcbiAgQElucHV0KCkgbnpBZGRPbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGVhclRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Tm93VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1RleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI/OiBzdHJpbmcgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpVc2UxMkhvdXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlUGFuZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2FsbG93RW1wdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRIb3Vycyh2YWx1ZTogdW5kZWZpbmVkIHwgKCgpID0+IG51bWJlcltdKSkge1xuICAgIHRoaXMuX2Rpc2FibGVkSG91cnMgPSB2YWx1ZTtcbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6IHVuZGVmaW5lZCB8ICgoKSA9PiBudW1iZXJbXSkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRNaW51dGVzKHZhbHVlOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRNaW51dGVzID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkTWludXRlcygpOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRNaW51dGVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZFNlY29uZHMoKTogdW5kZWZpbmVkIHwgKChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZFNlY29uZHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xuICAgICAgY29uc3QgY2hhclNldCA9IG5ldyBTZXQodmFsdWUpO1xuICAgICAgdGhpcy5ob3VyRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdIJykgfHwgY2hhclNldC5oYXMoJ2gnKTtcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XG4gICAgICB0aGlzLnNlY29uZEVuYWJsZWQgPSBjaGFyU2V0LmhhcygncycpO1xuICAgICAgaWYgKHRoaXMuaG91ckVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcbiAgICBsZXQgaG91clJhbmdlcyA9IDI0O1xuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnM/LigpO1xuICAgIGxldCBzdGFydEluZGV4ID0gMDtcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcbiAgICAgIGhvdXJSYW5nZXMgPSAxMjtcbiAgICAgIGlmIChkaXNhYmxlZEhvdXJzKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggZ3JlYXRlciBvciBlcXVhbCB0byAxMlxuICAgICAgICAgICAqIFswLCAxLCAyLCAuLi4sIDEyLCAxMywgMTQsIDE1LCAuLi4sIDIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA+PSAxMikubWFwKGkgPT4gKGkgPiAxMiA/IGkgLSAxMiA6IGkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBsZXNzIHRoYW4gMTJcbiAgICAgICAgICAgKiBbMCwgMSwgMiwuLi4sIDEyLCAxMywgMTQsIDE1LCAuLi4yM10gPT4gWzEyLCAxLCAyLCAzLCAuLi4sIDExXVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPCAxMiB8fCBpID09PSAyNCkubWFwKGkgPT4gKGkgPT09IDI0IHx8IGkgPT09IDAgPyAxMiA6IGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnRJbmRleCA9IDE7XG4gICAgfVxuICAgIHRoaXMuaG91clJhbmdlID0gbWFrZVJhbmdlKGhvdXJSYW5nZXMsIHRoaXMubnpIb3VyU3RlcCwgc3RhcnRJbmRleCkubWFwKHIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IHIsXG4gICAgICAgIGRpc2FibGVkOiAhIWRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycy5pbmRleE9mKHIpICE9PSAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy5ob3VyUmFuZ2VbdGhpcy5ob3VyUmFuZ2UubGVuZ3RoIC0gMV0uaW5kZXggPT09IDEyKSB7XG4gICAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuaG91clJhbmdlXTtcbiAgICAgIHRlbXAudW5zaGlmdCh0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xuICAgICAgdGVtcC5zcGxpY2UodGVtcC5sZW5ndGggLSAxLCAxKTtcbiAgICAgIHRoaXMuaG91clJhbmdlID0gdGVtcDtcbiAgICB9XG4gIH1cblxuICBidWlsZE1pbnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiByLFxuICAgICAgICBkaXNhYmxlZDogISF0aGlzLm56RGlzYWJsZWRNaW51dGVzICYmIHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzISkuaW5kZXhPZihyKSAhPT0gLTFcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFNlY29uZHMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uelNlY29uZFN0ZXApLm1hcChyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiByLFxuICAgICAgICBkaXNhYmxlZDogISF0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKS5pbmRleE9mKHIpICE9PSAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkMTJIb3VycygpOiB2b2lkIHtcbiAgICBjb25zdCBpc1VwcGVyRm9ybWF0ID0gdGhpcy5fZm9ybWF0LmluY2x1ZGVzKCdBJyk7XG4gICAgdGhpcy51c2UxMkhvdXJzUmFuZ2UgPSBbXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcm1hdCA/ICdBTScgOiAnYW0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JtYXQgPyAnUE0nIDogJ3BtJ1xuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBidWlsZFRpbWVzKCk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICB9XG5cbiAgc2Nyb2xsVG9UaW1lKGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG91ckVuYWJsZWQgJiYgdGhpcy5ob3VyTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUudmlld0hvdXJzISwgZGVsYXksICdob3VyJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLm1pbnV0ZXMhLCBkZWxheSwgJ21pbnV0ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkICYmIHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5zZWNvbmRzISwgZGVsYXksICdzZWNvbmQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzICYmIHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycztcbiAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRIb3VycyA9PT0gJ0FNJyA/IDAgOiAxO1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGluZGV4LCBkZWxheSwgJzEyLWhvdXInKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRIb3Vycyhob3VyLmluZGV4LCBob3VyLmRpc2FibGVkKTtcbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMgfHwgdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRNaW51dGVzKG1pbnV0ZS5pbmRleCwgbWludXRlLmRpc2FibGVkKTtcbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0U2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFNlY29uZHMoc2Vjb25kLmluZGV4LCBzZWNvbmQuZGlzYWJsZWQpO1xuICB9XG5cbiAgc2VsZWN0MTJIb3Vycyh2YWx1ZTogeyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0U2VsZWN0ZWQxMkhvdXJzKHZhbHVlLnZhbHVlKTtcbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZCB7XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XG4gICAgY29uc3QgY3VycmVudE9wdGlvbiA9IChpbnN0YW5jZS5jaGlsZHJlblt0cmFuc0luZGV4XSB8fCBpbnN0YW5jZS5jaGlsZHJlblswXSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxUbyhpbnN0YW5jZSwgY3VycmVudE9wdGlvbi5vZmZzZXRUb3AsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZUluZGV4KGluZGV4OiBudW1iZXIsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiBudW1iZXIge1xuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleCh0aGlzLm56RGlzYWJsZWRIb3Vycz8uKCksIHRoaXMuaG91clJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgodGhpcy5uekRpc2FibGVkTWludXRlcz8uKHRoaXMudGltZS5ob3VycyEpLCB0aGlzLm1pbnV0ZVJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgICAvLyBzZWNvbmRcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChcbiAgICAgICAgdGhpcy5uekRpc2FibGVkU2Vjb25kcz8uKHRoaXMudGltZS5ob3VycyEsIHRoaXMudGltZS5taW51dGVzISksXG4gICAgICAgIHRoaXMuc2Vjb25kUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDEyLWhvdXJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHBlclRpY2sgPSAoZGlmZmVyZW5jZSAvIGR1cmF0aW9uKSAqIDEwO1xuXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10gfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChhcnJheT8ubGVuZ3RoICYmIHRoaXMubnpIaWRlRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbmRleCAtXG4gICAgICAgIGFycmF5LnJlZHVjZSgocHJlLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcbiAgICAgICAgfSwgMClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnRpbWUudmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdG91Y2hlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XG4gICAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICB0aW1lRGlzYWJsZWQodmFsdWU6IERhdGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGUgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5uekRpc2FibGVkSG91cnM/LigpLmluZGV4T2YoaG91cikgPz8gLTEpID4gLTEgfHxcbiAgICAgICh0aGlzLm56RGlzYWJsZWRNaW51dGVzPy4oaG91cikuaW5kZXhPZihtaW51dGUpID8/IC0xKSA+IC0xIHx8XG4gICAgICAodGhpcy5uekRpc2FibGVkU2Vjb25kcz8uKGhvdXIsIG1pbnV0ZSkuaW5kZXhPZihzZWNvbmQpID8/IC0xKSA+IC0xXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2xpY2tOb3coKTogdm9pZCB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBpZiAodGhpcy50aW1lRGlzYWJsZWQobm93KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUobm93KTtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICB0aGlzLmNsb3NlUGFuZWwuZW1pdCgpO1xuICB9XG5cbiAgb25DbGlja09rKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VQYW5lbC5lbWl0KCk7XG4gIH1cblxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLnZpZXdIb3VycztcbiAgfVxuXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUubWludXRlcztcbiAgfVxuXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuc2Vjb25kcztcbiAgfVxuXG4gIGlzU2VsZWN0ZWQxMkhvdXJzKHZhbHVlOiB7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1waWNrZXItdGltZS1wYW5lbCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgICB0aGlzLnRvdWNoZWQoKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9UaW1lKDEyMCk7XG4gICAgfSk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbFRvVGltZSgpO1xuICAgICAgdGhpcy5maXJzdFNjcm9sbGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzLCBuekRlZmF1bHRPcGVuVmFsdWUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKCFuelVzZTEySG91cnM/LnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgfVxuICAgIGlmIChuekRlZmF1bHRPcGVuVmFsdWU/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50aW1lLnNldERlZmF1bHRPcGVuVmFsdWUodGhpcy5uekRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRWYWx1ZSh2YWx1ZSwgdGhpcy5uelVzZTEySG91cnMpO1xuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xuXG4gICAgaWYgKHZhbHVlICYmIHRoaXMuZmlyc3RTY3JvbGxlZCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUoMTIwKTtcbiAgICB9XG4gICAgLy8gTWFyayB0aGlzIGNvbXBvbmVudCB0byBiZSBjaGVja2VkIG1hbnVhbGx5IHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBjaGFuZ2luZyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDgxNilcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCBpbnB1dCBsb3NpbmcgZm9jdXMgd2hlbiBjbGljayBwYW5lbFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19