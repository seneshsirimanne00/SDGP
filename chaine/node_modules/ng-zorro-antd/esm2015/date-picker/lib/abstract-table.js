/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
export class AbstractTable {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.headRow = [];
        this.bodyRows = [];
        this.MAX_ROW = 6;
        this.MAX_COL = 7;
        this.prefixCls = 'ant-picker';
        this.activeDate = new CandyDate();
        this.showWeek = false;
        this.selectedValue = []; // Range ONLY
        this.hoverValue = []; // Range ONLY
        this.valueChange = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
    }
    render() {
        if (this.activeDate) {
            this.headRow = this.makeHeadRow();
            this.bodyRows = this.makeBodyRows();
        }
    }
    trackByBodyRow(_index, item) {
        return item.trackByIndex;
    }
    trackByBodyColumn(_index, item) {
        return item.trackByIndex;
    }
    hasRangeValue() {
        var _a, _b;
        return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
    }
    getClassMap(cell) {
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-in-view`]: true,
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
            [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
            [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
            [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
            [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
            [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
            [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
        };
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        if (changes.disabledDate ||
            changes.locale ||
            changes.showWeek ||
            this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
}
AbstractTable.ɵfac = function AbstractTable_Factory(t) { return new (t || AbstractTable)(); };
AbstractTable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractTable, inputs: { prefixCls: "prefixCls", activeDate: "activeDate", showWeek: "showWeek", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", locale: "locale", disabledDate: "disabledDate", cellRender: "cellRender", fullCellRender: "fullCellRender" }, outputs: { valueChange: "valueChange", cellHover: "cellHover" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AbstractTable.propDecorators = {
    prefixCls: [{ type: Input }],
    value: [{ type: Input }],
    locale: [{ type: Input }],
    activeDate: [{ type: Input }],
    showWeek: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    disabledDate: [{ type: Input }],
    cellRender: [{ type: Input }],
    fullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }],
    cellHover: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractTable, [{
        type: Directive
    }], function () { return []; }, { prefixCls: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], cellHover: [{
            type: Output
        }], value: [{
            type: Input
        }], locale: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], cellRender: [{
            type: Input
        }], fullCellRender: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGFibGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBNEMsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUsxRSxrREFBa0Q7O0FBQ2xELE1BQU0sT0FBZ0IsYUFBYTtBQUFHLElBRnRDO0FBQ0csUUFFRCxrQkFBYSxHQUFHLGFBQWEsQ0FBQztBQUNoQyxRQUFFLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLFFBQUUsWUFBTyxHQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFFLGFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBQy9CLFFBQUUsWUFBTyxHQUFHLENBQUMsQ0FBQztBQUNkLFFBQUUsWUFBTyxHQUFHLENBQUMsQ0FBQztBQUNkLFFBQ1csY0FBUyxHQUFXLFlBQVksQ0FBQztBQUM1QyxRQUVXLGVBQVUsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ25ELFFBQVcsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFXLGtCQUFhLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLGFBQWE7QUFDekQsUUFBVyxlQUFVLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLGFBQWE7QUFDdEQsUUFJcUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0FBQ2pFLFFBQXFCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDO0FBQzdHLElBeUZBLENBQUM7QUFDRCxJQXpGWSxNQUFNO0FBQUssUUFDbkIsSUFBSSxJ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T0FBTyxLQUFLLENBQUM7QUFDakIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxVQUFVLENBQUMsSUFBZSxFQUFFLEtBQWdCO0FBQUksUUFDdEQsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RSxJQUFFLENBQUM7QUFDSDt5Q0FoSEMsU0FBUzsyYkFDUjtBQUFDO0FBQWlDLHdCQVNqQyxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssMEJBRVYsTUFBTTtBQUFLLHdCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG4gIGhlYWRSb3c6IERhdGVDZWxsW10gPSBbXTtcbiAgYm9keVJvd3M6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgTUFYX1JPVyA9IDY7XG4gIE1BWF9DT0wgPSA3O1xuXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1waWNrZXInO1xuICBASW5wdXQoKSB2YWx1ZSE6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW10gPSBbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBjZWxsUmVuZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8RGF0ZT4gfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBmdWxsQ2VsbFJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNlbGxIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgIHRoaXMuaGVhZFJvdyA9IHRoaXMubWFrZUhlYWRSb3coKTtcbiAgICAgIHRoaXMuYm9keVJvd3MgPSB0aGlzLm1ha2VCb2R5Um93cygpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlCb2R5Um93KF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQm9keVJvdyk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIGl0ZW0udHJhY2tCeUluZGV4O1xuICB9XG5cbiAgdHJhY2tCeUJvZHlDb2x1bW4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gaXRlbS50cmFja0J5SW5kZXg7XG4gIH1cblxuICBoYXNSYW5nZVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWU/Lmxlbmd0aCA+IDAgfHwgdGhpcy5ob3ZlclZhbHVlPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0Q2xhc3NNYXAoY2VsbDogRGF0ZUNlbGwpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsYF06IHRydWUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi12aWV3YF06IHRydWUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1zZWxlY3RlZGBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWQsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi1yYW5nZWBdOiAhIWNlbGwuaXNJblNlbGVjdGVkUmFuZ2UsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydGBdOiAhIWNlbGwuaXNTZWxlY3RlZFN0YXJ0LFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2Utc3RhcnQtc2luZ2xlYF06ICEhY2VsbC5pc1N0YXJ0U2luZ2xlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kLXNpbmdsZWBdOiAhIWNlbGwuaXNFbmRTaW5nbGUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3ZlcmBdOiAhIWNlbGwuaXNJbkhvdmVyUmFuZ2UsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1zdGFydGBdOiAhIWNlbGwuaXNIb3ZlclN0YXJ0LFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZW5kYF06ICEhY2VsbC5pc0hvdmVyRW5kLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1zdGFydGBdOiAhIWNlbGwuaXNGaXJzdENlbGxJblBhbmVsLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1lbmRgXTogISFjZWxsLmlzTGFzdENlbGxJblBhbmVsLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2Utc3RhcnQtbmVhci1ob3ZlcmBdOiAhIWNlbGwuaXNSYW5nZVN0YXJ0TmVhckhvdmVyLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kLW5lYXItaG92ZXJgXTogISFjZWxsLmlzUmFuZ2VFbmROZWFySG92ZXJcbiAgICB9O1xuICB9XG5cbiAgYWJzdHJhY3QgbWFrZUhlYWRSb3coKTogRGF0ZUNlbGxbXTtcbiAgYWJzdHJhY3QgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmVEYXRlICYmICFjaGFuZ2VzLmFjdGl2ZURhdGUuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy5kaXNhYmxlZERhdGUgfHxcbiAgICAgIGNoYW5nZXMubG9jYWxlIHx8XG4gICAgICBjaGFuZ2VzLnNob3dXZWVrIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5hY3RpdmVEYXRlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuaG92ZXJWYWx1ZSlcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbmR5RGF0ZSA9IHByZXZpb3VzVmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lRGF5KGxlZnQpKTtcbiAgfVxufVxuIl19