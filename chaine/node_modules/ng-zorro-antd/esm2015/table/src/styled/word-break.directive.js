/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
export class NzCellBreakWordDirective {
    constructor() {
        this.nzBreakWord = true;
    }
}
NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) { return new (t || NzCellBreakWordDirective)(); };
NzCellBreakWordDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCellBreakWordDirective, selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]], hostVars: 2, hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("word-break", ctx.nzBreakWord ? "break-all" : "");
    } }, inputs: { nzBreakWord: "nzBreakWord" } });
NzCellBreakWordDirective.propDecorators = {
    nzBreakWord: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCellBreakWordDirective, [{
        type: Directive,
        args: [{
                selector: 'th[nzBreakWord],td[nzBreakWord]',
                host: {
                    '[style.word-break]': `nzBreakWord ? 'break-all' : ''`
                }
            }]
    }], function () { return []; }, { nzBreakWord: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC1icmVhay5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL3N0eWxlZC93b3JkLWJyZWFrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBUXZELE1BQU0sT0FBTyx3QkFBd0I7QUFDckMsSUFQQTtBQUNHLFFBUXdCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlDLElBQUEsQ0FBQztBQUNEO29EQVhDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7R0FBaUMsa0JBQzNDLElBQUksRUFBRSxzQkFDSixvQkFBb0IsRUFBRSxnQ0FBZ0Msa0JBQ3ZELGNBQ0Y7O21EQUNJO0FBQUM7QUFDSSwwQkFFUCxLQUFLO0FBQUk7QUFBZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBRVgsNkRBRjZCOzs7Ozs7Ozs7OztvQkFDOUM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RoW256QnJlYWtXb3JkXSx0ZFtuekJyZWFrV29yZF0nLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS53b3JkLWJyZWFrXSc6IGBuekJyZWFrV29yZCA/ICdicmVhay1hbGwnIDogJydgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDZWxsQnJlYWtXb3JkRGlyZWN0aXZlIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QnJlYWtXb3JkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QnJlYWtXb3JkID0gdHJ1ZTtcbn1cbiJdfQ==