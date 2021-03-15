/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["tdElement"];
const _c1 = ["nz-table-measure-row", ""];
function NzTrMeasureComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 1, 2);
} }
export class NzTrMeasureComponent {
    constructor(nzResizeObserver, ngZone, elementRef) {
        this.nzResizeObserver = nzResizeObserver;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.listOfMeasureColumn = [];
        this.listOfAutoWidth = new EventEmitter();
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-measure-now');
    }
    trackByFunc(_, key) {
        return key;
    }
    ngAfterViewInit() {
        this.listOfTdElement.changes
            .pipe(startWith(this.listOfTdElement))
            .pipe(switchMap(list => {
            return combineLatest(list.toArray().map((item) => {
                return this.nzResizeObserver.observe(item).pipe(map(([entry]) => {
                    const { width } = entry.target.getBoundingClientRect();
                    return Math.floor(width);
                }));
            }));
        }), debounceTime(16), takeUntil(this.destroy$))
            .subscribe(data => {
            this.ngZone.run(() => {
                this.listOfAutoWidth.next(data);
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) { return new (t || NzTrMeasureComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTrMeasureComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTrMeasureComponent, selectors: [["tr", "nz-table-measure-row", ""]], viewQuery: function NzTrMeasureComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfTdElement = _t);
    } }, inputs: { listOfMeasureColumn: "listOfMeasureColumn" }, outputs: { listOfAutoWidth: "listOfAutoWidth" }, attrs: _c1, decls: 1, vars: 2, consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]], template: function NzTrMeasureComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
NzTrMeasureComponent.ctorParameters = () => [
    { type: NzResizeObserver },
    { type: NgZone },
    { type: ElementRef }
];
NzTrMeasureComponent.propDecorators = {
    listOfMeasureColumn: [{ type: Input }],
    listOfAutoWidth: [{ type: Output }],
    listOfTdElement: [{ type: ViewChildren, args: ['tdElement',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTrMeasureComponent, [{
        type: Component,
        args: [{
                selector: 'tr[nz-table-measure-row]',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <td
      #tdElement
      class="nz-disable-td"
      style="padding: 0px; border: 0px; height: 0px;"
      *ngFor="let th of listOfMeasureColumn; trackBy: trackByFunc"
    ></td>
  `
            }]
    }], function () { return [{ type: ɵngcc1.NzResizeObserver }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }]; }, { listOfMeasureColumn: [{
            type: Input
        }], listOfAutoWidth: [{
            type: Output
        }], listOfTdElement: [{
            type: ViewChildren,
            args: ['tdElement']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHItbWVhc3VyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL3RhYmxlL3RyLW1lYXN1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1Q0FBdUM7QUFFdkMsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0FBZ0JwRixNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUFLbEMsWUFBb0IsZ0JBQWtDLEVBQVUsTUFBYyxFQUFVLFVBQXNCO0FBQ2hILFFBRHNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUp0Ryx3QkFBbUIsR0FBMEIsRUFBRSxDQUFDO0FBQzNELFFBQXFCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztBQUNwRSxRQUNVLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ25DLFFBQ0ksbURBQW1EO0FBQ3ZELFFBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3pFLElBQUUsQ0FBQztBQUNILElBQUUsV0FBVyxDQUFDLENBQVMsRUFBRSxHQUFXO0FBQUksUUFDcEMsT0FBTyxHQUFHLENBQUM7QUFDZixJQUFFLENBQUM7QUFDSCxJQUFFLGVBQWU7QUFBSyxRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87QUFDaEMsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxhQUFPLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBVSxPQUFPLGFBQWEsQ0FDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtBQUNwRCxnQkFBYyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7QUFDaEMsb0JBQWtCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDekUsb0JBQWtCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNoQixZQUFZLENBQUMsQ0FBQyxDQUNxQixDQUFDO0FBQ3BDLFFBQVEsQ0FBQyxDQUFDLEVBQ0YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjtBQUNQLGFBQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLFlBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQzdCLGdCQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFlBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUFBRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDtnREF2REMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwwQkFBMEIsa0JBQ3BDLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQztTQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOztRQU9UO0VBQ0Y7Ozs7OzsrRUFDSTtBQUFDO0FBQThDLFlBbEIzQyxnQkFBZ0I7QUFBSSxZQVAzQixNQUFNO0FBQ04sWUFKQSxVQUFVO0FBQ1g7QUFBRztBQUdLLGtDQXlCTixLQUFLO0FBQUssOEJBQ1YsTUFBTTtBQUFLLDhCQUNYLFlBQVksU0FBQyxXQUFXO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyW256LXRhYmxlLW1lYXN1cmUtcm93XScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGRcbiAgICAgICN0ZEVsZW1lbnRcbiAgICAgIGNsYXNzPVwibnotZGlzYWJsZS10ZFwiXG4gICAgICBzdHlsZT1cInBhZGRpbmc6IDBweDsgYm9yZGVyOiAwcHg7IGhlaWdodDogMHB4O1wiXG4gICAgICAqbmdGb3I9XCJsZXQgdGggb2YgbGlzdE9mTWVhc3VyZUNvbHVtbjsgdHJhY2tCeTogdHJhY2tCeUZ1bmNcIlxuICAgID48L3RkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VHJNZWFzdXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbGlzdE9mTWVhc3VyZUNvbHVtbjogUmVhZG9ubHlBcnJheTxzdHJpbmc+ID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBsaXN0T2ZBdXRvV2lkdGggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuICBAVmlld0NoaWxkcmVuKCd0ZEVsZW1lbnQnKSBsaXN0T2ZUZEVsZW1lbnQhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXI6IE56UmVzaXplT2JzZXJ2ZXIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS1tZWFzdXJlLW5vdycpO1xuICB9XG4gIHRyYWNrQnlGdW5jKF86IG51bWJlciwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mVGRFbGVtZW50LmNoYW5nZXNcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZlRkRWxlbWVudCkpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGxpc3QgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgbGlzdC50b0FycmF5KCkubWFwKChpdGVtOiBFbGVtZW50UmVmKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gZW50cnkudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Iod2lkdGgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgYXMgT2JzZXJ2YWJsZTxudW1iZXJbXT47XG4gICAgICAgIH0pLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTYpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5saXN0T2ZBdXRvV2lkdGgubmV4dChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==