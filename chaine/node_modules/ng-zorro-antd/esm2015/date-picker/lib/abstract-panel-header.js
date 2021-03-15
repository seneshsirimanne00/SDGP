/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
export class AbstractPanelHeader {
    constructor() {
        this.prefixCls = `ant-picker-header`;
        this.selectors = [];
        this.showSuperPreBtn = true;
        this.showSuperNextBtn = true;
        this.showPreBtn = true;
        this.showNextBtn = true;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    superPreviousTitle() {
        return this.locale.previousYear;
    }
    previousTitle() {
        return this.locale.previousMonth;
    }
    superNextTitle() {
        return this.locale.nextYear;
    }
    nextTitle() {
        return this.locale.nextMonth;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-1));
    }
    superNext() {
        this.changeValue(this.value.addYears(1));
    }
    previous() {
        this.changeValue(this.value.addMonths(-1));
    }
    next() {
        this.changeValue(this.value.addMonths(1));
    }
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    changeMode(mode) {
        this.panelModeChange.emit(mode);
    }
    render() {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    }
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.selectors = this.getSelectors();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    }
}
AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) { return new (t || AbstractPanelHeader)(); };
AbstractPanelHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractPanelHeader, inputs: { showSuperPreBtn: "showSuperPreBtn", showSuperNextBtn: "showSuperNextBtn", showPreBtn: "showPreBtn", showNextBtn: "showNextBtn", value: "value", locale: "locale" }, outputs: { panelModeChange: "panelModeChange", valueChange: "valueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AbstractPanelHeader.propDecorators = {
    value: [{ type: Input }],
    locale: [{ type: Input }],
    showSuperPreBtn: [{ type: Input }],
    showSuperNextBtn: [{ type: Input }],
    showPreBtn: [{ type: Input }],
    showNextBtn: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    valueChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractPanelHeader, [{
        type: Directive
    }], function () { return []; }, { showSuperPreBtn: [{
            type: Input
        }], showSuperNextBtn: [{
            type: Input
        }], showPreBtn: [{
            type: Input
        }], showNextBtn: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], value: [{
            type: Input
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNcEQsa0RBQWtEOztBQUNsRCxNQUFNLE9BQWdCLG1CQUFtQjtBQUFHLElBRjVDO0FBQ0csUUFFRCxjQUFTLEdBQVcsbUJBQW1CLENBQUM7QUFDMUMsUUFBRSxjQUFTLEdBQW9CLEVBQUUsQ0FBQztBQUNsQyxRQUdXLG9CQUFlLEdBQVksSUFBSSxDQUFDO0FBQzNDLFFBQVcscUJBQWdCLEdBQVksSUFBSSxDQUFDO0FBQzVDLFFBQVcsZUFBVSxHQUFZLElBQUksQ0FBQztBQUN0QyxRQUFXLGdCQUFXLEdBQVksSUFBSSxDQUFDO0FBQ3ZDLFFBQ3FCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztBQUN0RSxRQUFxQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7QUFDakUsSUFpRUEsQ0FBQztBQUNELElBL0RFLGtCQUFrQjtBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUNyQyxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWM7QUFBSyxRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUztBQUFLLFFBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWE7QUFBSyxRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVM7QUFBSyxRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSTtBQUFLLFFBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLEtBQWdCO0FBQUksUUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtBQUM5QixZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFlBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxJQUFnQjtBQUFJLFFBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNILElBQ1UsTUFBTTtBQUFLLFFBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzNDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3JCLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsd0JBQXdCO0FBQzVELFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDekMsWUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOytDQWhGQyxTQUFTO3VYQUNSO0FBQUM7QUFBdUMsb0JBS3ZDLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLDhCQUVWLE1BQU07QUFBSywwQkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpEYXRlTW9kZSB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBhbmVsSGVhZGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9IGBhbnQtcGlja2VyLWhlYWRlcmA7XG4gIHNlbGVjdG9yczogUGFuZWxTZWxlY3RvcltdID0gW107XG5cbiAgQElucHV0KCkgdmFsdWUhOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93U3VwZXJQcmVCdG46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93U3VwZXJOZXh0QnRuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1ByZUJ0bjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dOZXh0QnRuOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBhYnN0cmFjdCBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdO1xuXG4gIHN1cGVyUHJldmlvdXNUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5wcmV2aW91c1llYXI7XG4gIH1cblxuICBwcmV2aW91c1RpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlLnByZXZpb3VzTW9udGg7XG4gIH1cblxuICBzdXBlck5leHRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5uZXh0WWVhcjtcbiAgfVxuXG4gIG5leHRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5uZXh0TW9udGg7XG4gIH1cblxuICBzdXBlclByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMSkpO1xuICB9XG5cbiAgc3VwZXJOZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygxKSk7XG4gIH1cblxuICBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkTW9udGhzKC0xKSk7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRNb250aHMoMSkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlKG1vZGU6IE56RGF0ZU1vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3JzID0gdGhpcy5nZXRTZWxlY3RvcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxuICAgIH1cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHRoaXMuZ2V0U2VsZWN0b3JzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5sb2NhbGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=