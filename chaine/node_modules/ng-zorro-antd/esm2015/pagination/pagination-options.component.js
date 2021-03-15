/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { toNumber } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/select';
import * as ɵngcc3 from '@angular/forms';

const _c0 = ["nz-pagination-options", ""];
function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 4);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", option_r3.label)("nzValue", option_r3.value);
} }
function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 2);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onPageSizeChange($event); });
    ɵngcc0.ɵɵtemplate(1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NzPaginationOptionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "input", 6);
    ɵngcc0.ɵɵlistener("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.jumpToPageViaInput($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.locale.jump_to, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.locale.page, " ");
} }
export class NzPaginationOptionsComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzSize = 'default';
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [];
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.listOfPageSizeOption = [];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-pagination-options');
    }
    onPageSizeChange(size) {
        if (this.pageSize !== size) {
            this.pageSizeChange.next(size);
        }
    }
    jumpToPageViaInput($event) {
        const target = $event.target;
        const index = Math.floor(toNumber(target.value, this.pageIndex));
        this.pageIndexChange.next(index);
        target.value = '';
    }
    trackByOption(_, option) {
        return option.value;
    }
    ngOnChanges(changes) {
        const { pageSize, pageSizeOptions, locale } = changes;
        if (pageSize || pageSizeOptions || locale) {
            this.listOfPageSizeOption = [...new Set([...this.pageSizeOptions, this.pageSize])].map(item => {
                return {
                    value: item,
                    label: `${item} ${this.locale.items_per_page}`
                };
            });
        }
    }
}
NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) { return new (t || NzPaginationOptionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzPaginationOptionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPaginationOptionsComponent, selectors: [["div", "nz-pagination-options", ""]], inputs: { nzSize: "nzSize", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]], template: function NzPaginationOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);
        ɵngcc0.ɵɵtemplate(1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSizeChanger);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showQuickJumper);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzSelectComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc1.NgForOf, ɵngcc2.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
NzPaginationOptionsComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzPaginationOptionsComponent.propDecorators = {
    nzSize: [{ type: Input }],
    disabled: [{ type: Input }],
    showSizeChanger: [{ type: Input }],
    showQuickJumper: [{ type: Input }],
    locale: [{ type: Input }],
    total: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    pageIndexChange: [{ type: Output }],
    pageSizeChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationOptionsComponent, [{
        type: Component,
        args: [{
                selector: 'div[nz-pagination-options]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nz-select
      class="ant-pagination-options-size-changer"
      *ngIf="showSizeChanger"
      [nzDisabled]="disabled"
      [nzSize]="nzSize"
      [ngModel]="pageSize"
      (ngModelChange)="onPageSizeChange($event)"
    >
      <nz-option
        *ngFor="let option of listOfPageSizeOption; trackBy: trackByOption"
        [nzLabel]="option.label"
        [nzValue]="option.value"
      ></nz-option>
    </nz-select>
    <div class="ant-pagination-options-quick-jumper" *ngIf="showQuickJumper">
      {{ locale.jump_to }}
      <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
      {{ locale.page }}
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzSize: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], total: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], pageIndexChange: [{
            type: Output
        }], pageSizeChange: [{
            type: Output
        }], locale: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24tb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJuRCxNQUFNLE9BQU8sNEJBQTRCO0FBQUcsSUFjMUMsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBYmxDLFdBQU0sR0FBd0IsU0FBUyxDQUFDO0FBQ25ELFFBQVcsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFXLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ25DLFFBQVcsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDbkMsUUFDVyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBQVcsY0FBUyxHQUFHLENBQUMsQ0FBQztBQUN6QixRQUFXLGFBQVEsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBVyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztBQUMxQyxRQUFxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7QUFDbEUsUUFBcUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ2pFLFFBQUUseUJBQW9CLEdBQTRDLEVBQUUsQ0FBQztBQUNyRSxRQUVJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUMxRSxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLElBQVk7QUFBSSxRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0Usa0JBQWtCLENBQUMsTUFBYTtBQUFJLFFBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUEwQixDQUFDO0FBQ3JELFFBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNyRSxRQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLFFBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhLENBQUMsQ0FBUyxFQUFFLE1BQXdDO0FBQUksUUFDbkUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQzFELFFBQUksSUFBSSxRQUFRLElBQUksZUFBZSxJQUFJLE1BQU0sRUFBRTtBQUMvQyxZQUFNLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDcEcsZ0JBQVEsT0FBTztBQUNmLG9CQUFVLEtBQUssRUFBRSxJQUFJO0FBQ3JCLG9CQUFVLEtBQUssRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN4RCxpQkFBUyxDQUFDO0FBQ1YsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDt3REExRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw0QkFBNEIsa0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7U0FDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxRQUFRLEVBQUUsK29CQW9CVCxjQUNGOzs7Ozs7O3dMQUNJO0FBQUM7QUFBc0QsWUF0QzFELFVBQVU7QUFDWDtBQUFHO0FBSUEscUJBa0NELEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLDhCQUNWLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rpdltuei1wYWdpbmF0aW9uLW9wdGlvbnNdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1zZWxlY3RcbiAgICAgIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tb3B0aW9ucy1zaXplLWNoYW5nZXJcIlxuICAgICAgKm5nSWY9XCJzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJuelNpemVcIlxuICAgICAgW25nTW9kZWxdPVwicGFnZVNpemVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bnotb3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbGlzdE9mUGFnZVNpemVPcHRpb247IHRyYWNrQnk6IHRyYWNrQnlPcHRpb25cIlxuICAgICAgICBbbnpMYWJlbF09XCJvcHRpb24ubGFiZWxcIlxuICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgPjwvbnotb3B0aW9uPlxuICAgIDwvbnotc2VsZWN0PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlclwiICpuZ0lmPVwic2hvd1F1aWNrSnVtcGVyXCI+XG4gICAgICB7eyBsb2NhbGUuanVtcF90byB9fVxuICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChrZXlkb3duLmVudGVyKT1cImp1bXBUb1BhZ2VWaWFJbnB1dCgkZXZlbnQpXCIgLz5cbiAgICAgIHt7IGxvY2FsZS5wYWdlIH19XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgbGlzdE9mUGFnZVNpemVPcHRpb246IEFycmF5PHsgdmFsdWU6IG51bWJlcjsgbGFiZWw6IHN0cmluZyB9PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1wYWdpbmF0aW9uLW9wdGlvbnMnKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnZVNpemUgIT09IHNpemUpIHtcbiAgICAgIHRoaXMucGFnZVNpemVDaGFuZ2UubmV4dChzaXplKTtcbiAgICB9XG4gIH1cblxuICBqdW1wVG9QYWdlVmlhSW5wdXQoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IodG9OdW1iZXIodGFyZ2V0LnZhbHVlLCB0aGlzLnBhZ2VJbmRleCkpO1xuICAgIHRoaXMucGFnZUluZGV4Q2hhbmdlLm5leHQoaW5kZXgpO1xuICAgIHRhcmdldC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgdHJhY2tCeU9wdGlvbihfOiBudW1iZXIsIG9wdGlvbjogeyB2YWx1ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nIH0pOiBudW1iZXIge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgcGFnZVNpemVPcHRpb25zLCBsb2NhbGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHBhZ2VTaXplIHx8IHBhZ2VTaXplT3B0aW9ucyB8fCBsb2NhbGUpIHtcbiAgICAgIHRoaXMubGlzdE9mUGFnZVNpemVPcHRpb24gPSBbLi4ubmV3IFNldChbLi4udGhpcy5wYWdlU2l6ZU9wdGlvbnMsIHRoaXMucGFnZVNpemVdKV0ubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBgJHtpdGVtfSAke3RoaXMubG9jYWxlLml0ZW1zX3Blcl9wYWdlfWBcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19