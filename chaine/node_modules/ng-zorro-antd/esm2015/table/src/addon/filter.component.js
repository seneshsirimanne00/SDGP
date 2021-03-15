/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { arraysEqual } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './filter-trigger.component';
import * as ɵngcc4 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc5 from 'ng-zorro-antd/icon';
import * as ɵngcc6 from 'ng-zorro-antd/dropdown';
import * as ɵngcc7 from 'ng-zorro-antd/menu';
import * as ɵngcc8 from 'ng-zorro-antd/button';
import * as ɵngcc9 from 'ng-zorro-antd/core/wave';
import * as ɵngcc10 from 'ng-zorro-antd/radio';
import * as ɵngcc11 from '@angular/forms';
import * as ɵngcc12 from 'ng-zorro-antd/checkbox';

function NzTableFilterComponent_ng_template_1_Template(rf, ctx) { }
function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 15);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const f_r4 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.check(f_r4); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngModel", f_r4.checked);
} }
function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 16);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const f_r4 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.check(f_r4); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngModel", f_r4.checked);
} }
function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 12);
    ɵngcc0.ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const f_r4 = ctx.$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.check(f_r4); });
    ɵngcc0.ɵɵtemplate(1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);
    ɵngcc0.ɵɵtemplate(2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzSelected", f_r4.checked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.filterMultiple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.filterMultiple);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(f_r4.text);
} }
function NzTableFilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "nz-filter-trigger", 3);
    ɵngcc0.ɵɵlistener("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onVisibleChange($event); });
    ɵngcc0.ɵɵelement(2, "i", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "nz-dropdown-menu", null, 5);
    ɵngcc0.ɵɵelementStart(5, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "ul", 7);
    ɵngcc0.ɵɵtemplate(7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 9);
    ɵngcc0.ɵɵelementStart(9, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.reset(); });
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.confirm(); });
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r2 = ɵngcc0.ɵɵreference(4);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", _r2);
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r1.isChecked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.locale.filterReset);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.locale.filterConfirm);
} }
export class NzTableFilterComponent {
    constructor(cdr, i18n, elementRef) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.elementRef = elementRef;
        this.contentTemplate = null;
        this.customFilter = false;
        this.extraTemplate = null;
        this.filterMultiple = true;
        this.listOfFilter = [];
        this.filterChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.isChecked = false;
        this.isVisible = false;
        this.listOfParsedFilter = [];
        this.listOfChecked = [];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-filter-column');
    }
    trackByValue(_, item) {
        return item.value;
    }
    check(filter) {
        if (this.filterMultiple) {
            this.listOfParsedFilter = this.listOfParsedFilter.map(item => {
                if (item === filter) {
                    return Object.assign(Object.assign({}, item), { checked: !filter.checked });
                }
                else {
                    return item;
                }
            });
            filter.checked = !filter.checked;
        }
        else {
            this.listOfParsedFilter = this.listOfParsedFilter.map(item => {
                return Object.assign(Object.assign({}, item), { checked: item === filter });
            });
        }
        this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
    confirm() {
        this.isVisible = false;
        this.emitFilterData();
    }
    reset() {
        this.isVisible = false;
        this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
        this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        this.emitFilterData();
    }
    onVisibleChange(value) {
        this.isVisible = value;
        if (!value) {
            this.emitFilterData();
        }
        else {
            this.listOfChecked = this.listOfParsedFilter.filter(item => item.checked).map(item => item.value);
        }
    }
    emitFilterData() {
        const listOfChecked = this.listOfParsedFilter.filter(item => item.checked).map(item => item.value);
        if (!arraysEqual(this.listOfChecked, listOfChecked)) {
            if (this.filterMultiple) {
                this.filterChange.emit(listOfChecked);
            }
            else {
                this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
            }
        }
    }
    parseListOfFilter(listOfFilter, reset) {
        return listOfFilter.map(item => {
            const checked = reset ? false : !!item.byDefault;
            return { text: item.text, value: item.value, checked };
        });
    }
    getCheckedStatus(listOfParsedFilter) {
        return listOfParsedFilter.some(item => item.checked);
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { listOfFilter } = changes;
        if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) { return new (t || NzTableFilterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTableFilterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTableFilterComponent, selectors: [["nz-table-filter"]], inputs: { contentTemplate: "contentTemplate", customFilter: "customFilter", extraTemplate: "extraTemplate", filterMultiple: "filterMultiple", listOfFilter: "listOfFilter" }, outputs: { filterChange: "filterChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[1, "ant-table-filter-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]], template: function NzTableFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
    } }, directives: [ɵngcc2.NgTemplateOutlet, ɵngcc2.NgIf, ɵngcc3.NzFilterTriggerComponent, ɵngcc4.ɵNzTransitionPatchDirective, ɵngcc5.NzIconDirective, ɵngcc6.NzDropdownMenuComponent, ɵngcc7.NzMenuDirective, ɵngcc2.NgForOf, ɵngcc8.NzButtonComponent, ɵngcc9.NzWaveDirective, ɵngcc7.NzMenuItemDirective, ɵngcc10.NzRadioComponent, ɵngcc11.NgControlStatus, ɵngcc11.NgModel, ɵngcc12.NzCheckboxComponent], encapsulation: 2, changeDetection: 0 });
NzTableFilterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ElementRef }
];
NzTableFilterComponent.propDecorators = {
    contentTemplate: [{ type: Input }],
    customFilter: [{ type: Input }],
    extraTemplate: [{ type: Input }],
    filterMultiple: [{ type: Input }],
    listOfFilter: [{ type: Input }],
    filterChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTableFilterComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table-filter',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span class="ant-table-filter-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    <ng-container *ngIf="!customFilter; else extraTemplate">
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <i nz-icon nzType="filter" nzTheme="fill"></i>
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            <li nz-menu-item [nzSelected]="f.checked" *ngFor="let f of listOfParsedFilter; trackBy: trackByValue" (click)="check(f)">
              <label nz-radio *ngIf="!filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <label nz-checkbox *ngIf="filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <span>{{ f.text }}</span>
            </li>
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">{{ locale.filterReset }}</button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    </ng-container>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ElementRef }]; }, { contentTemplate: [{
            type: Input
        }], customFilter: [{
            type: Input
        }], extraTemplate: [{
            type: Input
        }], filterMultiple: [{
            type: Input
        }], listOfFilter: [{
            type: Input
        }], filterChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvYWRkb24vZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QzNDLE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQStFcEMsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQixFQUFVLFVBQXNCO0FBQ3pHLFFBRHNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBUyxTQUFJLEdBQUosSUFBSSxDQUFlO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUE5RS9GLG9CQUFlLEdBQWtDLElBQUksQ0FBQztBQUNqRSxRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQVcsa0JBQWEsR0FBa0MsSUFBSSxDQUFDO0FBQy9ELFFBQVcsbUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDakMsUUFBVyxpQkFBWSxHQUFzQixFQUFFLENBQUM7QUFDaEQsUUFBcUIsaUJBQVksR0FBRyxJ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QUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFO09BQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOzs2RUE2QlQsY0FDRjs7Ozs7Ozs7eWJBQ0k7QUFBQztBQUFnRCxZQTlEcEQsaUJBQWlCO0FBQ2pCLFlBY08sYUFBYTtBQUFJLFlBYnhCLFVBQVU7QUFDWDtBQUFHO0FBR0ksOEJBeURMLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssMkJBQ1YsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBhcnJheXNFcXVhbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UsIE56VGFibGVJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VGFibGVGaWx0ZXJMaXN0IH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuXG5pbnRlcmZhY2UgTnpUaEl0ZW1JbnRlcmZhY2Uge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlOiBOelNhZmVBbnk7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhYmxlLWZpbHRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItY29sdW1uLXRpdGxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L3NwYW4+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjdXN0b21GaWx0ZXI7IGVsc2UgZXh0cmFUZW1wbGF0ZVwiPlxuICAgICAgPG56LWZpbHRlci10cmlnZ2VyXG4gICAgICAgIFtuelZpc2libGVdPVwiaXNWaXNpYmxlXCJcbiAgICAgICAgW256QWN0aXZlXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJmaWx0ZXJNZW51XCJcbiAgICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZmlsdGVyXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XG4gICAgICA8L256LWZpbHRlci10cmlnZ2VyPlxuICAgICAgPG56LWRyb3Bkb3duLW1lbnUgI2ZpbHRlck1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93blwiPlxuICAgICAgICAgIDx1bCBuei1tZW51PlxuICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSBbbnpTZWxlY3RlZF09XCJmLmNoZWNrZWRcIiAqbmdGb3I9XCJsZXQgZiBvZiBsaXN0T2ZQYXJzZWRGaWx0ZXI7IHRyYWNrQnk6IHRyYWNrQnlWYWx1ZVwiIChjbGljayk9XCJjaGVjayhmKVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gKm5nSWY9XCIhZmlsdGVyTXVsdGlwbGVcIiBbbmdNb2RlbF09XCJmLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVjayhmKVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCAqbmdJZj1cImZpbHRlck11bHRpcGxlXCIgW25nTW9kZWxdPVwiZi5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2soZilcIj48L2xhYmVsPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBmLnRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tYnRuc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwibGlua1wiIG56U2l6ZT1cInNtYWxsXCIgKGNsaWNrKT1cInJlc2V0KClcIiBbZGlzYWJsZWRdPVwiIWlzQ2hlY2tlZFwiPnt7IGxvY2FsZS5maWx0ZXJSZXNldCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiIG56U2l6ZT1cInNtYWxsXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPnt7IGxvY2FsZS5maWx0ZXJDb25maXJtIH19PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGN1c3RvbUZpbHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBleHRyYVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGZpbHRlck11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbGlzdE9mRmlsdGVyOiBOelRhYmxlRmlsdGVyTGlzdCA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnlbXSB8IE56U2FmZUFueT4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGxvY2FsZSE6IE56VGFibGVJMThuSW50ZXJmYWNlO1xuICBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgaXNWaXNpYmxlID0gZmFsc2U7XG4gIGxpc3RPZlBhcnNlZEZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBsaXN0T2ZDaGVja2VkOiBOelNhZmVBbnlbXSA9IFtdO1xuXG4gIHRyYWNrQnlWYWx1ZShfOiBudW1iZXIsIGl0ZW06IE56VGhJdGVtSW50ZXJmYWNlKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgfVxuXG4gIGNoZWNrKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIgPSB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlci5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBjaGVja2VkOiAhZmlsdGVyLmNoZWNrZWQgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIgPSB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlci5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGNoZWNrZWQ6IGl0ZW0gPT09IGZpbHRlciB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaXNDaGVja2VkID0gdGhpcy5nZXRDaGVja2VkU3RhdHVzKHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyKTtcbiAgfVxuXG4gIGNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXRGaWx0ZXJEYXRhKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyID0gdGhpcy5wYXJzZUxpc3RPZkZpbHRlcih0aGlzLmxpc3RPZkZpbHRlciwgdHJ1ZSk7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmdldENoZWNrZWRTdGF0dXModGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIpO1xuICAgIHRoaXMuZW1pdEZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5lbWl0RmlsdGVyRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZkNoZWNrZWQgPSB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlci5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXRGaWx0ZXJEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZkNoZWNrZWQgPSB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlci5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICAgIGlmICghYXJyYXlzRXF1YWwodGhpcy5saXN0T2ZDaGVja2VkLCBsaXN0T2ZDaGVja2VkKSkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChsaXN0T2ZDaGVja2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQobGlzdE9mQ2hlY2tlZC5sZW5ndGggPiAwID8gbGlzdE9mQ2hlY2tlZFswXSA6IG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlTGlzdE9mRmlsdGVyKGxpc3RPZkZpbHRlcjogTnpUYWJsZUZpbHRlckxpc3QsIHJlc2V0PzogYm9vbGVhbik6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xuICAgIHJldHVybiBsaXN0T2ZGaWx0ZXIubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJlc2V0ID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2hlY2tlZFN0YXR1cyhsaXN0T2ZQYXJzZWRGaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbGlzdE9mUGFyc2VkRmlsdGVyLnNvbWUoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS1maWx0ZXItY29sdW1uJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbGlzdE9mRmlsdGVyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChsaXN0T2ZGaWx0ZXIgJiYgdGhpcy5saXN0T2ZGaWx0ZXIgJiYgdGhpcy5saXN0T2ZGaWx0ZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlciA9IHRoaXMucGFyc2VMaXN0T2ZGaWx0ZXIodGhpcy5saXN0T2ZGaWx0ZXIpO1xuICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmdldENoZWNrZWRTdGF0dXModGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==