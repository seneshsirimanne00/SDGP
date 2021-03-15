/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentChildren, Directive, Optional, QueryList } from '@angular/core';
import { combineLatest, merge, ReplaySubject, Subject } from 'rxjs';
import { map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzCellFixedDirective } from '../cell/cell-fixed.directive';
import { NzThMeasureDirective } from '../cell/th-measure.directive';
import { NzTableStyleService } from '../table-style.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../table-style.service';
export class NzTrDirective {
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.destroy$ = new Subject();
        this.listOfFixedColumns$ = new ReplaySubject(1);
        this.listOfColumns$ = new ReplaySubject(1);
        this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(switchMap(list => merge(...[this.listOfFixedColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfFixedColumns$))), takeUntil(this.destroy$));
        this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map(list => list.filter(item => item.nzLeft !== false)));
        this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map(list => list.filter(item => item.nzRight !== false)));
        this.listOfColumnsChanges$ = this.listOfColumns$.pipe(switchMap(list => merge(...[this.listOfColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfColumns$))), takeUntil(this.destroy$));
        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
    }
    ngAfterContentInit() {
        if (this.nzTableStyleService) {
            this.listOfCellFixedDirective.changes
                .pipe(startWith(this.listOfCellFixedDirective), takeUntil(this.destroy$))
                .subscribe(this.listOfFixedColumns$);
            this.listOfNzThDirective.changes.pipe(startWith(this.listOfNzThDirective), takeUntil(this.destroy$)).subscribe(this.listOfColumns$);
            /** set last left and first right **/
            this.listOfFixedLeftColumnChanges$.subscribe(listOfFixedLeft => {
                listOfFixedLeft.forEach(cell => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
            });
            this.listOfFixedRightColumnChanges$.subscribe(listOfFixedRight => {
                listOfFixedRight.forEach(cell => cell.setIsFirstRight(cell === listOfFixedRight[0]));
            });
            /** calculate fixed nzLeft and nzRight **/
            combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$])
                .pipe(takeUntil(this.destroy$))
                .subscribe(([listOfAutoWidth, listOfLeftCell]) => {
                listOfLeftCell.forEach((cell, index) => {
                    if (cell.isAutoLeft) {
                        const currentArray = listOfLeftCell.slice(0, index);
                        const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
                        const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
                        cell.setAutoLeftWidth(`${width}px`);
                    }
                });
            });
            combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$])
                .pipe(takeUntil(this.destroy$))
                .subscribe(([listOfAutoWidth, listOfRightCell]) => {
                listOfRightCell.forEach((_, index) => {
                    const cell = listOfRightCell[listOfRightCell.length - index - 1];
                    if (cell.isAutoRight) {
                        const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                        const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
                        const width = listOfAutoWidth
                            .slice(listOfAutoWidth.length - count, listOfAutoWidth.length)
                            .reduce((pre, cur) => pre + cur, 0);
                        cell.setAutoRightWidth(`${width}px`);
                    }
                });
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTableStyleService, 8)); };
NzTrDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]], contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzThMeasureDirective, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCellFixedDirective, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzThDirective = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfCellFixedDirective = _t);
    } }, hostVars: 2, hostBindings: function NzTrDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-row", ctx.isInsideTable);
    } } });
NzTrDirective.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: Optional }] }
];
NzTrDirective.propDecorators = {
    listOfNzThDirective: [{ type: ContentChildren, args: [NzThMeasureDirective,] }],
    listOfCellFixedDirective: [{ type: ContentChildren, args: [NzCellFixedDirective,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTrDirective, [{
        type: Directive,
        args: [{
                selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
                host: {
                    '[class.ant-table-row]': 'isInsideTable'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTableStyleService, decorators: [{
                type: Optional
            }] }]; }, { listOfNzThDirective: [{
            type: ContentChildren,
            args: [NzThMeasureDirective]
        }], listOfCellFixedDirective: [{
            type: ContentChildren,
            args: [NzCellFixedDirective]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy90YWJsZS90ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBYSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBUTdELE1BQU0sT0FBTyxhQUFhO0FBQUcsSUF3QjNCLFlBQWdDLG1CQUF3QztBQUMxRSxRQURrQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0FBQUMsUUFyQmpFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3pDLFFBQVUsd0JBQW1CLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO0FBQzdFLFFBQVUsbUJBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBeUIsQ0FBQyxDQUFDLENBQUM7QUFDeEUsUUFBRSwrQkFBMEIsR0FBdUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDNUYsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FB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O0FBQ1gsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0g7eUNBbEZDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7Z0RBQStHLGtCQUN6SCxJQUFJLEVBQUUsc0JBQ0osdUJBQXVCLEVBQUUsZUFBZSxrQkFDekMsY0FDRjs7Ozs7Ozs7O1dBQ0k7QUFBQztBQUF1QyxZQVJwQyxtQkFBbUIsdUJBZ0NiLFFBQVE7QUFBTTtBQUFHO0FBQWlDLGtDQXZCOUQsZUFBZSxTQUFDLG9CQUFvQjtBQUFPLHVDQUMzQyxlQUFlLFNBQUMsb0JBQW9CO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgT25EZXN0cm95LCBPcHRpb25hbCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Q2VsbEZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi4vY2VsbC9jZWxsLWZpeGVkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRoTWVhc3VyZURpcmVjdGl2ZSB9IGZyb20gJy4uL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUYWJsZVN0eWxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLXN0eWxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0cjpub3QoW21hdC1yb3ddKTpub3QoW21hdC1oZWFkZXItcm93XSk6bm90KFtuei10YWJsZS1tZWFzdXJlLXJvd10pOm5vdChbbnpFeHBhbmRdKTpub3QoW256LXRhYmxlLWZpeGVkLXJvd10pJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvd10nOiAnaXNJbnNpZGVUYWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoTWVhc3VyZURpcmVjdGl2ZSkgbGlzdE9mTnpUaERpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxOelRoTWVhc3VyZURpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDZWxsRml4ZWREaXJlY3RpdmUpIGxpc3RPZkNlbGxGaXhlZERpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxOekNlbGxGaXhlZERpcmVjdGl2ZT47XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxpc3RPZkZpeGVkQ29sdW1ucyQgPSBuZXcgUmVwbGF5U3ViamVjdDxOekNlbGxGaXhlZERpcmVjdGl2ZVtdPigxKTtcbiAgcHJpdmF0ZSBsaXN0T2ZDb2x1bW5zJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE56VGhNZWFzdXJlRGlyZWN0aXZlW10+KDEpO1xuICBsaXN0T2ZGaXhlZENvbHVtbnNDaGFuZ2VzJDogT2JzZXJ2YWJsZTxOekNlbGxGaXhlZERpcmVjdGl2ZVtdPiA9IHRoaXMubGlzdE9mRml4ZWRDb2x1bW5zJC5waXBlKFxuICAgIHN3aXRjaE1hcChsaXN0ID0+XG4gICAgICBtZXJnZSguLi5bdGhpcy5saXN0T2ZGaXhlZENvbHVtbnMkLCAuLi5saXN0Lm1hcCgoYzogTnpDZWxsRml4ZWREaXJlY3RpdmUpID0+IGMuY2hhbmdlcyQpXSkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy5saXN0T2ZGaXhlZENvbHVtbnMkKVxuICAgICAgKVxuICAgICksXG4gICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICk7XG4gIGxpc3RPZkZpeGVkTGVmdENvbHVtbkNoYW5nZXMkID0gdGhpcy5saXN0T2ZGaXhlZENvbHVtbnNDaGFuZ2VzJC5waXBlKG1hcChsaXN0ID0+IGxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uekxlZnQgIT09IGZhbHNlKSkpO1xuICBsaXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQgPSB0aGlzLmxpc3RPZkZpeGVkQ29sdW1uc0NoYW5nZXMkLnBpcGUobWFwKGxpc3QgPT4gbGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm56UmlnaHQgIT09IGZhbHNlKSkpO1xuICBsaXN0T2ZDb2x1bW5zQ2hhbmdlcyQ6IE9ic2VydmFibGU8TnpUaE1lYXN1cmVEaXJlY3RpdmVbXT4gPSB0aGlzLmxpc3RPZkNvbHVtbnMkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGxpc3QgPT5cbiAgICAgIG1lcmdlKC4uLlt0aGlzLmxpc3RPZkNvbHVtbnMkLCAuLi5saXN0Lm1hcCgoYzogTnpUaE1lYXN1cmVEaXJlY3RpdmUpID0+IGMuY2hhbmdlcyQpXSkucGlwZShtZXJnZU1hcCgoKSA9PiB0aGlzLmxpc3RPZkNvbHVtbnMkKSlcbiAgICApLFxuICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICApO1xuICBpc0luc2lkZVRhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelRhYmxlU3R5bGVTZXJ2aWNlOiBOelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0luc2lkZVRhYmxlID0gISFuelRhYmxlU3R5bGVTZXJ2aWNlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMubGlzdE9mQ2VsbEZpeGVkRGlyZWN0aXZlLmNoYW5nZXNcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubGlzdE9mQ2VsbEZpeGVkRGlyZWN0aXZlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKHRoaXMubGlzdE9mRml4ZWRDb2x1bW5zJCk7XG4gICAgICB0aGlzLmxpc3RPZk56VGhEaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56VGhEaXJlY3RpdmUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLmxpc3RPZkNvbHVtbnMkKTtcbiAgICAgIC8qKiBzZXQgbGFzdCBsZWZ0IGFuZCBmaXJzdCByaWdodCAqKi9cbiAgICAgIHRoaXMubGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkTGVmdCA9PiB7XG4gICAgICAgIGxpc3RPZkZpeGVkTGVmdC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zZXRJc0xhc3RMZWZ0KGNlbGwgPT09IGxpc3RPZkZpeGVkTGVmdFtsaXN0T2ZGaXhlZExlZnQubGVuZ3RoIC0gMV0pKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkUmlnaHQgPT4ge1xuICAgICAgICBsaXN0T2ZGaXhlZFJpZ2h0LmZvckVhY2goY2VsbCA9PiBjZWxsLnNldElzRmlyc3RSaWdodChjZWxsID09PSBsaXN0T2ZGaXhlZFJpZ2h0WzBdKSk7XG4gICAgICB9KTtcbiAgICAgIC8qKiBjYWxjdWxhdGUgZml4ZWQgbnpMZWZ0IGFuZCBuelJpZ2h0ICoqL1xuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmxpc3RPZkxpc3RPZlRoV2lkdGgkLCB0aGlzLmxpc3RPZkZpeGVkTGVmdENvbHVtbkNoYW5nZXMkXSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKChbbGlzdE9mQXV0b1dpZHRoLCBsaXN0T2ZMZWZ0Q2VsbF0pID0+IHtcbiAgICAgICAgICBsaXN0T2ZMZWZ0Q2VsbC5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwuaXNBdXRvTGVmdCkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsaXN0T2ZMZWZ0Q2VsbC5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gY3VycmVudEFycmF5LnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXIuY29sc3BhbiB8fCBjdXIuY29sU3BhbiB8fCAxKSwgMCk7XG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbGlzdE9mQXV0b1dpZHRoLnNsaWNlKDAsIGNvdW50KS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyBjdXIsIDApO1xuICAgICAgICAgICAgICBjZWxsLnNldEF1dG9MZWZ0V2lkdGgoYCR7d2lkdGh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UubGlzdE9mTGlzdE9mVGhXaWR0aCQsIHRoaXMubGlzdE9mRml4ZWRSaWdodENvbHVtbkNoYW5nZXMkXSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKChbbGlzdE9mQXV0b1dpZHRoLCBsaXN0T2ZSaWdodENlbGxdKSA9PiB7XG4gICAgICAgICAgbGlzdE9mUmlnaHRDZWxsLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gbGlzdE9mUmlnaHRDZWxsW2xpc3RPZlJpZ2h0Q2VsbC5sZW5ndGggLSBpbmRleCAtIDFdO1xuICAgICAgICAgICAgaWYgKGNlbGwuaXNBdXRvUmlnaHQpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGlzdE9mUmlnaHRDZWxsLnNsaWNlKGxpc3RPZlJpZ2h0Q2VsbC5sZW5ndGggLSBpbmRleCwgbGlzdE9mUmlnaHRDZWxsLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gY3VycmVudEFycmF5LnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXIuY29sc3BhbiB8fCBjdXIuY29sU3BhbiB8fCAxKSwgMCk7XG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbGlzdE9mQXV0b1dpZHRoXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxpc3RPZkF1dG9XaWR0aC5sZW5ndGggLSBjb3VudCwgbGlzdE9mQXV0b1dpZHRoLmxlbmd0aClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgY3VyLCAwKTtcbiAgICAgICAgICAgICAgY2VsbC5zZXRBdXRvUmlnaHRXaWR0aChgJHt3aWR0aH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==