/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, Optional, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTableStyleService } from '../table-style.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../table-style.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './tr-measure.component';
import * as ɵngcc4 from './table-fixed-row.component';
import * as ɵngcc5 from 'ng-zorro-antd/empty';

function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr", 3);
    ɵngcc0.ɵɵlistener("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.onListOfAutoWidthChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const listOfMeasureColumn_r2 = ɵngcc0.ɵɵnextContext().ngIf;
    ɵngcc0.ɵɵproperty("listOfMeasureColumn", listOfMeasureColumn_r2);
} }
function NzTbodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const listOfMeasureColumn_r2 = ctx.ngIf;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
} }
function NzTbodyComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 4);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 5);
    ɵngcc0.ɵɵpipe(2, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("specificContent", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r1.noResult$));
} }
const _c0 = ["*"];
export class NzTbodyComponent {
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.isInsideTable = false;
        this.showEmpty$ = new BehaviorSubject(false);
        this.noResult$ = new BehaviorSubject(undefined);
        this.listOfMeasureColumn$ = new BehaviorSubject([]);
        this.destroy$ = new Subject();
        this.isInsideTable = !!this.nzTableStyleService;
        if (this.nzTableStyleService) {
            const { showEmpty$, noResult$, listOfMeasureColumn$ } = this.nzTableStyleService;
            noResult$.pipe(takeUntil(this.destroy$)).subscribe(this.noResult$);
            listOfMeasureColumn$.pipe(takeUntil(this.destroy$)).subscribe(this.listOfMeasureColumn$);
            showEmpty$.pipe(takeUntil(this.destroy$)).subscribe(this.showEmpty$);
        }
    }
    onListOfAutoWidthChange(listOfAutoWidth) {
        this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) { return new (t || NzTbodyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTableStyleService, 8)); };
NzTbodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTbodyComponent, selectors: [["tbody"]], hostVars: 2, hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-tbody", ctx.isInsideTable);
    } }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]], template: function NzTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵpipe(1, "async");
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);
        ɵngcc0.ɵɵpipe(4, "async");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 2, ctx.listOfMeasureColumn$));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(4, 4, ctx.showEmpty$));
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzTrMeasureComponent, ɵngcc4.NzTableFixedRowComponent, ɵngcc5.NzEmbedEmptyComponent], pipes: [ɵngcc2.AsyncPipe], encapsulation: 2, changeDetection: 0 });
NzTbodyComponent.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTbodyComponent, [{
        type: Component,
        args: [{
                selector: 'tbody',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-container *ngIf="listOfMeasureColumn$ | async as listOfMeasureColumn">
      <tr
        nz-table-measure-row
        *ngIf="isInsideTable && listOfMeasureColumn.length"
        [listOfMeasureColumn]="listOfMeasureColumn"
        (listOfAutoWidth)="onListOfAutoWidthChange($event)"
      ></tr>
    </ng-container>
    <ng-content></ng-content>
    <tr class="ant-table-placeholder" nz-table-fixed-row *ngIf="showEmpty$ | async">
      <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
    </tr>
  `,
                host: {
                    '[class.ant-table-tbody]': 'isInsideTable'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTableStyleService, decorators: [{
                type: Optional
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy90YWJsZS90Ym9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVDQUF1QztBQUV2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUI3RCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUFPOUIsWUFBZ0MsbUJBQXdDO0FBQzFFLFFBRGtDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7QUFBQyxRQU56RSxrQkFBYSxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFFLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztBQUNuRCxRQUFFLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBOEMsU0FBUyxDQUFDLENBQUM7QUFDMUYsUUFBRSx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBd0IsRUFBRSxDQUFDLENBQUM7QUFDeEUsUUFBVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUN6QyxRQUVJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUNwRCxRQUFJLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO0FBQ2xDLFlBQU0sTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDdkYsWUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pFLFlBQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0YsWUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNFLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLHVCQUF1QixDQUFDLGVBQXlCO0FBQUksUUFDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pFLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0g7NENBaERDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsT0FBTyxrQkFDakIsbUJBQW1CLEVBQUUsS0FBSztBQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRTs7Z2JBYVQsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKO2VBQXlCLEVBQUUsZUFBZTtnQkFDM0MsY0FDRjs7Ozs7Ozs7O21NQUNJO0FBQUM7QUFBMEMsWUF6QnZDLG1CQUFtQix1QkFnQ2IsUUFBUTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZVN0eWxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLXN0eWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Ym9keScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGlzdE9mTWVhc3VyZUNvbHVtbiQgfCBhc3luYyBhcyBsaXN0T2ZNZWFzdXJlQ29sdW1uXCI+XG4gICAgICA8dHJcbiAgICAgICAgbnotdGFibGUtbWVhc3VyZS1yb3dcbiAgICAgICAgKm5nSWY9XCJpc0luc2lkZVRhYmxlICYmIGxpc3RPZk1lYXN1cmVDb2x1bW4ubGVuZ3RoXCJcbiAgICAgICAgW2xpc3RPZk1lYXN1cmVDb2x1bW5dPVwibGlzdE9mTWVhc3VyZUNvbHVtblwiXG4gICAgICAgIChsaXN0T2ZBdXRvV2lkdGgpPVwib25MaXN0T2ZBdXRvV2lkdGhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC90cj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPHRyIGNsYXNzPVwiYW50LXRhYmxlLXBsYWNlaG9sZGVyXCIgbnotdGFibGUtZml4ZWQtcm93ICpuZ0lmPVwic2hvd0VtcHR5JCB8IGFzeW5jXCI+XG4gICAgICA8bnotZW1iZWQtZW1wdHkgbnpDb21wb25lbnROYW1lPVwidGFibGVcIiBbc3BlY2lmaWNDb250ZW50XT1cIihub1Jlc3VsdCQgfCBhc3luYykhXCI+PC9uei1lbWJlZC1lbXB0eT5cbiAgICA8L3RyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGJvZHldJzogJ2lzSW5zaWRlVGFibGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzSW5zaWRlVGFibGUgPSBmYWxzZTtcbiAgc2hvd0VtcHR5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBub1Jlc3VsdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGxpc3RPZk1lYXN1cmVDb2x1bW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZWFkb25seUFycmF5PHN0cmluZz4+KFtdKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelRhYmxlU3R5bGVTZXJ2aWNlOiBOelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0luc2lkZVRhYmxlID0gISF0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgaWYgKHRoaXMubnpUYWJsZVN0eWxlU2VydmljZSkge1xuICAgICAgY29uc3QgeyBzaG93RW1wdHkkLCBub1Jlc3VsdCQsIGxpc3RPZk1lYXN1cmVDb2x1bW4kIH0gPSB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgICBub1Jlc3VsdCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLm5vUmVzdWx0JCk7XG4gICAgICBsaXN0T2ZNZWFzdXJlQ29sdW1uJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoaXMubGlzdE9mTWVhc3VyZUNvbHVtbiQpO1xuICAgICAgc2hvd0VtcHR5JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoaXMuc2hvd0VtcHR5JCk7XG4gICAgfVxuICB9XG5cbiAgb25MaXN0T2ZBdXRvV2lkdGhDaGFuZ2UobGlzdE9mQXV0b1dpZHRoOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXRMaXN0T2ZBdXRvV2lkdGgobGlzdE9mQXV0b1dpZHRoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19