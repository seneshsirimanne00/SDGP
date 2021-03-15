/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toArray } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTransferListComponent } from './transfer-list.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from './transfer-list.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/button';
import * as ɵngcc6 from 'ng-zorro-antd/core/wave';
import * as ɵngcc7 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc8 from 'ng-zorro-antd/icon';

function NzTransferComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzOperations[1]);
} }
function NzTransferComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzOperations[0]);
} }
function NzTransferComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "button", 4);
    ɵngcc0.ɵɵlistener("click", function NzTransferComponent_div_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.moveToLeft(); });
    ɵngcc0.ɵɵelement(2, "i", 5);
    ɵngcc0.ɵɵtemplate(3, NzTransferComponent_div_1_span_3_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 4);
    ɵngcc0.ɵɵlistener("click", function NzTransferComponent_div_1_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.moveToRight(); });
    ɵngcc0.ɵɵelement(5, "i", 7);
    ɵngcc0.ɵɵtemplate(6, NzTransferComponent_div_1_span_6_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.nzDisabled || !ctx_r0.leftActive)("nzType", "primary")("nzSize", "small");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzOperations[1]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.nzDisabled || !ctx_r0.rightActive)("nzType", "primary")("nzSize", "small");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzOperations[0]);
} }
function NzTransferComponent_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.nzOperations[0]);
} }
function NzTransferComponent_div_2_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.nzOperations[1]);
} }
function NzTransferComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "button", 4);
    ɵngcc0.ɵɵlistener("click", function NzTransferComponent_div_2_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.moveToRight(); });
    ɵngcc0.ɵɵelement(2, "i", 5);
    ɵngcc0.ɵɵtemplate(3, NzTransferComponent_div_2_span_3_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 4);
    ɵngcc0.ɵɵlistener("click", function NzTransferComponent_div_2_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.moveToLeft(); });
    ɵngcc0.ɵɵelement(5, "i", 7);
    ɵngcc0.ɵɵtemplate(6, NzTransferComponent_div_2_span_6_Template, 2, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzOperations[0]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzOperations[1]);
} }
export class NzTransferComponent {
    // #endregion
    constructor(cdr, i18n, elementRef, directionality) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.unsubscribe$ = new Subject();
        this.leftFilter = '';
        this.rightFilter = '';
        this.dir = 'ltr';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzListStyle = {};
        this.nzShowSelectAll = true;
        this.nzCanMove = (arg) => of(arg.list);
        this.nzRenderList = null;
        this.nzRender = null;
        this.nzFooter = null;
        this.nzShowSearch = false;
        this.nzTargetKeys = [];
        this.nzSelectedKeys = [];
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (checked) => this.handleSelect('left', checked);
        this.handleRightSelectAll = (checked) => this.handleSelect('right', checked);
        this.handleLeftSelect = (item) => this.handleSelect('left', !!item.checked, item);
        this.handleRightSelect = (item) => this.handleSelect('right', !!item.checked, item);
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = () => this.moveTo('left');
        this.moveToRight = () => this.moveTo('right');
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-transfer');
    }
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(record => {
            if (record.direction === 'right') {
                record.direction = 'right';
                this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                this.leftDataSource.push(record);
            }
        });
    }
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
    }
    handleSelect(direction, checked, item) {
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
    }
    moveTo(direction) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const moveList = datasource.filter(item => item.checked === true && !item.disabled);
        this.nzCanMove({ direction, list: moveList }).subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => (i.checked = false)));
    }
    truthMoveTo(direction, list) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            item.hide = false;
            item.direction = direction;
            datasource.splice(datasource.indexOf(item), 1);
        }
        targetDatasource.splice(0, 0, ...list);
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
        this.markForCheckAllList();
    }
    markForCheckAllList() {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(i => i.markForCheck());
    }
    handleNzTargetKeys() {
        const keys = toArray(this.nzTargetKeys);
        const hasOwnKey = (e) => e.hasOwnProperty('key');
        this.leftDataSource.forEach(e => {
            if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
                e.checked = true;
            }
        });
        this.moveToRight();
    }
    handleNzSelectedKeys() {
        const keys = toArray(this.nzSelectedKeys);
        this.nzDataSource.forEach(e => {
            if (keys.indexOf(e.key) !== -1) {
                e.checked = true;
            }
        });
        const term = (ld) => ld.disabled === false && ld.checked === true;
        this.rightActive = this.leftDataSource.some(term);
        this.leftActive = this.rightDataSource.some(term);
    }
    ngOnInit() {
        var _a;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Transfer');
            this.markForCheckAllList();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.unsubscribe$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnChanges(changes) {
        if (changes.nzDataSource) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
        if (changes.nzTargetKeys) {
            this.handleNzTargetKeys();
        }
        if (changes.nzSelectedKeys) {
            this.handleNzSelectedKeys();
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzTransferComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTransferListComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lists = _t);
    } }, hostVars: 6, hostBindings: function NzTransferComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-transfer-rtl", ctx.dir === "rtl")("ant-transfer-disabled", ctx.nzDisabled)("ant-transfer-customize-list", ctx.nzRenderList);
    } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzListStyle: "nzListStyle", nzShowSelectAll: "nzShowSelectAll", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzRender: "nzRender", nzFooter: "nzFooter", nzShowSearch: "nzShowSearch", nzTargetKeys: "nzTargetKeys", nzSelectedKeys: "nzSelectedKeys", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 32, consts: [["data-direction", "left", "direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], ["class", "ant-transfer-operation", 4, "ngIf"], ["data-direction", "right", "direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-transfer-list", 0);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, NzTransferComponent_div_1_Template, 7, 8, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzTransferComponent_div_2_Template, 7, 8, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "nz-transfer-list", 2);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_3_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_3_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_3_listener($event) { return ctx.handleRightSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dir !== "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
    } }, directives: [ɵngcc3.NzTransferListComponent, ɵngcc4.NgStyle, ɵngcc4.NgIf, ɵngcc5.NzButtonComponent, ɵngcc6.NzWaveDirective, ɵngcc7.ɵNzTransitionPatchDirective, ɵngcc8.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTransferComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTransferComponent.propDecorators = {
    lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
    nzDisabled: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    nzTitles: [{ type: Input }],
    nzOperations: [{ type: Input }],
    nzListStyle: [{ type: Input }],
    nzShowSelectAll: [{ type: Input }],
    nzItemUnit: [{ type: Input }],
    nzItemsUnit: [{ type: Input }],
    nzCanMove: [{ type: Input }],
    nzRenderList: [{ type: Input }],
    nzRender: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzFilterOption: [{ type: Input }],
    nzSearchPlaceholder: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzTargetKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzSearchChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSearch", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferComponent, [{
        type: Component,
        args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    ></nz-transfer-list>
    <div *ngIf="dir !== 'rtl'" class="ant-transfer-operation">
      <button nz-button (click)="moveToLeft()" [disabled]="nzDisabled || !leftActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="left"></i>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
      <button nz-button (click)="moveToRight()" [disabled]="nzDisabled || !rightActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="right"></i>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
    </div>
    <div *ngIf="dir === 'rtl'" class="ant-transfer-operation">
      <button nz-button (click)="moveToRight()" [disabled]="nzDisabled || !rightActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="left"></i>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
      <button nz-button (click)="moveToLeft()" [disabled]="nzDisabled || !leftActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="right"></i>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
    </div>
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    ></nz-transfer-list>
  `,
                host: {
                    '[class.ant-transfer-rtl]': `dir === 'rtl'`,
                    '[class.ant-transfer-disabled]': `nzDisabled`,
                    '[class.ant-transfer-customize-list]': `nzRenderList`
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzDisabled: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], nzTitles: [{
            type: Input
        }], nzOperations: [{
            type: Input
        }], nzListStyle: [{
            type: Input
        }], nzShowSelectAll: [{
            type: Input
        }], nzCanMove: [{
            type: Input
        }], nzRenderList: [{
            type: Input
        }], nzRender: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzTargetKeys: [{
            type: Input
        }], nzSelectedKeys: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzSearchChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], lists: [{
            type: ViewChildren,
            args: [NzTransferListComponent]
        }], nzItemUnit: [{
            type: Input
        }], nzItemsUnit: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], nzSearchPlaceholder: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyYW5zZmVyL3RyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUdULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUEyQixNQUFNLG9CQUFvQixDQUFDO0FBRTVFLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGcEUsTUFBTSxPQUFPLG1CQUFtQjtBQUFHLElBc0lqQyxhQUFhO0FBQ2YsSUFDRSxZQUNVLEdBQXNCLEVBQ3RCLElBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsY0FBOEI7QUFDbkQsUUFKUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3ZCLFNBQUksR0FBSixJQUFJLENBQWU7QUFBQyxRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUF4SVUsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQzdDLFFBSUUsZUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUNFLGlCQUFpQjtBQUNuQixRQUMyQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQVcsaUJBQVksR0FBbUIsRUFBRSxDQUFDO0FBQzdDLFFBQVcsYUFBUSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLFFBQVcsaUJBQVksR0FBYSxFQUFFLENBQUM7QUFDdkMsUUFBVyxnQkFBVyxHQUFxQixFQUFFLENBQUM7QUFDOUMsUUFBMkIsb0JBQWUsR0FBRyxJQUFJLENBQUM7QUFDbEQsUUFFVyxjQUFTLEdBQXlELENBQUMsR0FBb0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwSCxRQUFXLGlCQUFZLEdBQWdELElBQUksQ0FBQztBQUM1RSxRQUFXLGFBQVEsR0FBa0MsSUFBSSxDQUFDO0FBQzFELFFBQVcsYUFBUSxHQUFrQyxJQUFJLENBQUM7QUFDMUQsUUFBMkIsaUJBQVksR0FBRyxLQUFLLENBQUM7QUFDaEQsUUFHVyxpQkFBWSxHQUFhLEVBQUUsQ0FBQztBQUN2QyxRQUFXLG1CQUFjLEdBQWEsRUFBRSxDQUFDO0FBQ3pDLFFBQ0UsU0FBUztBQUNYLFFBQXFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztBQUNuRSxRQUFxQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO0FBQy9FLFFBQXFCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7QUFDL0UsUUFDRSxhQUFhO0FBQ2YsUUFDRSx1QkFBdUI7QUFDekIsUUFDRSxPQUFPO0FBQ1QsUUFBRSxtQkFBYyxHQUFtQixFQUFFLENBQUM7QUFDdEMsUUFDRSxRQUFRO0FBQ1YsUUFBRSxvQkFBZSxHQUFtQixFQUFFLENBQUM7QUFDdkMsUUFtQkUsd0JBQW1CLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRixRQUFFLHlCQUFvQixHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkYsUUFDRSxxQkFBZ0IsR0FBRyxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdGLFFBQUUsc0JBQWlCLEdBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvRixRQVdFLGFBQWE7QUFDZixRQUNFLG9CQUFvQjtBQUN0QixRQUNFLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDckIsUUFBRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUN0QixRQU1FLGVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLFFBQUUsZ0JBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLFFBNENJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEUsSUFBRSxDQUFDO0FBQ0gsSUEvRlUsZUFBZTtBQUFLLFFBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN2QyxZQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7QUFDeEMsZ0JBQVEsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDbEMsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsYUFBTztBQUNQLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNVLGNBQWMsQ0FBQyxTQUE0QjtBQUFJLFFBQ3JELE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRyxJQUFFLENBQUM7QUFDSCxJQU9FLFlBQVksQ0FBQyxTQUE0QixFQUFFLE9BQWdCLEVBQUUsSUFBbUI7QUFBSSxRQUNsRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELFFBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsUUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxrQkFBa0IsQ0FBQyxHQUFvRDtBQUFJLFFBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNILElBUVUscUJBQXFCLENBQUMsU0FBNEIsRUFBRSxLQUFjO0FBQUksUUFDNUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzlELFlBQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEgsSUFBRSxDQUFDO0FBQ0gsSUFJRSxNQUFNLENBQUMsU0FBNEI7QUFBSSxRQUNyQyxNQUFNLGlCQUFpQixHQUFHLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3RFLFFBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFFBQUksTUFBTSxVQUFVLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUN6RixRQUFJLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RixRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyRCxXQUFXLENBQUMsRUFBRSxDQUNaLElBQUksQ0FBQyxXQUFXLENBQ2QsU0FBUyxFQUNULFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdCLEVBQ0gsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsSUFDVSxXQUFXLENBQUMsU0FBNEIsRUFBRSxJQUFvQjtBQUFJLFFBQ3hFLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEUsUUFBSSxNQUFNLFVBQVUsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ3pGLFFBQUksTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0FBQy9GLFFBQUksS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDN0IsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUMzQixZQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDakMsWUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsU0FBSztBQUNMLFFBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMzQyxRQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xELFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDdkIsWUFBTSxJQUFJLEVBQUUsaUJBQWlCO0FBQzdCLFlBQU0sRUFBRSxFQUFFLFNBQVM7QUFDbkIsWUFBTSxJQUFJO0FBQ1YsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBYVUsbUJBQW1CO0FBQUssUUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDckIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUM5QyxJQUFFLENBQUM7QUFDSCxJQUNVLGtCQUFrQjtBQUFLLFFBQzdCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsUUFBSSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRSxRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BDLFlBQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQ3JFLGdCQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLGFBQU87QUFDUCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxvQkFBb0I7QUFBSyxRQUMvQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbEMsWUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3RDLGdCQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLGFBQU87QUFDUCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLEVBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO0FBQ3BGLFFBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUs7QUFDTCxRQUFOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUM3RSxZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNqQyxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ3pDLFFBQUksTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO0FBQ3RHLFlBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQy9CLFFBQUksQ0FBQyxFQUFFO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFDOUIsWUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsWUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUMsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQy9CLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDakMsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO0FBQzlCLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDbEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixRQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakMsSUFBRSxDQUFDO0FBQ0g7K0NBalNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsYUFBYSxrQkFDdkIsUUFBUSxFQUFFLFlBQVksa0JBQ3RCLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs2YUFtRVQsa0JBQ0QsSUFBSSxFQUFFO0VBQ0osMEJBQTBCLEVBQUU7Y0FBZSxzQkFDM0MsK0JBQStCLEVBQUUsWUFBWTtxQkFDN0MscUNBQXFDLEVBQUUsY0FBYztVQUN0RCxrQkFDRCxhQUFhLEVBQUU7R0FBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUNoRDs7Ozs7Ozs7OzswT0FDSTtBQUFDO0FBQTZDLFlBMUdqRCxpQkFBaUI7QUFDakIsWUFpQk8sYUFBYTtBQUFJLFlBaEJ4QixVQUFVO0FBQ1YsWUFOa0IsY0FBYyx1QkF5UDdCLFFBQVE7QUFBTTtBQUFHO0FBRXRCLG9CQXZJRyxZQUFZLFNBQUMsdUJBQXVCO0FBQU8seUJBUzNDLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssa0NBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLHVCQUdWLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUssNkJBQ1gsTUFBTTtBQUFJO0FBdEJjO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCx1REFEMkI7QUFLbkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNiLDREQURtQztBQU92QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1gseURBRCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNoRDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0FycmF5IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpUcmFuc2ZlckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUcmFuc2ZlckNhbk1vdmUsIFRyYW5zZmVyQ2hhbmdlLCBUcmFuc2ZlckRpcmVjdGlvbiwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmFuc2ZlcicsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10cmFuc2Zlci1saXN0XG4gICAgICBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0XCJcbiAgICAgIFtuZ1N0eWxlXT1cIm56TGlzdFN0eWxlXCJcbiAgICAgIGRhdGEtZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgIFt0aXRsZVRleHRdPVwibnpUaXRsZXNbMF1cIlxuICAgICAgW3Nob3dTZWxlY3RBbGxdPVwibnpTaG93U2VsZWN0QWxsXCJcbiAgICAgIFtkYXRhU291cmNlXT1cImxlZnREYXRhU291cmNlXCJcbiAgICAgIFtmaWx0ZXJdPVwibGVmdEZpbHRlclwiXG4gICAgICBbZmlsdGVyT3B0aW9uXT1cIm56RmlsdGVyT3B0aW9uXCJcbiAgICAgIChmaWx0ZXJDaGFuZ2UpPVwiaGFuZGxlRmlsdGVyQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3JlbmRlckxpc3RdPVwibnpSZW5kZXJMaXN0ICYmIG56UmVuZGVyTGlzdFswXVwiXG4gICAgICBbcmVuZGVyXT1cIm56UmVuZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtzaG93U2VhcmNoXT1cIm56U2hvd1NlYXJjaFwiXG4gICAgICBbc2VhcmNoUGxhY2Vob2xkZXJdPVwibnpTZWFyY2hQbGFjZWhvbGRlciB8fCBsb2NhbGU/LnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtub3RGb3VuZENvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxuICAgICAgW2l0ZW1Vbml0XT1cIm56SXRlbVVuaXQgfHwgbG9jYWxlPy5pdGVtVW5pdFwiXG4gICAgICBbaXRlbXNVbml0XT1cIm56SXRlbXNVbml0IHx8IGxvY2FsZT8uaXRlbXNVbml0XCJcbiAgICAgIFtmb290ZXJdPVwibnpGb290ZXJcIlxuICAgICAgKGhhbmRsZVNlbGVjdCk9XCJoYW5kbGVMZWZ0U2VsZWN0KCRldmVudClcIlxuICAgICAgKGhhbmRsZVNlbGVjdEFsbCk9XCJoYW5kbGVMZWZ0U2VsZWN0QWxsKCRldmVudClcIlxuICAgID48L256LXRyYW5zZmVyLWxpc3Q+XG4gICAgPGRpdiAqbmdJZj1cImRpciAhPT0gJ3J0bCdcIiBjbGFzcz1cImFudC10cmFuc2Zlci1vcGVyYXRpb25cIj5cbiAgICAgIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJtb3ZlVG9MZWZ0KClcIiBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZCB8fCAhbGVmdEFjdGl2ZVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCIgW256U2l6ZV09XCInc21hbGwnXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibGVmdFwiPjwvaT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJuek9wZXJhdGlvbnNbMV1cIj57eyBuek9wZXJhdGlvbnNbMV0gfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJtb3ZlVG9SaWdodCgpXCIgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWQgfHwgIXJpZ2h0QWN0aXZlXCIgW256VHlwZV09XCIncHJpbWFyeSdcIiBbbnpTaXplXT1cIidzbWFsbCdcIj5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJyaWdodFwiPjwvaT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJuek9wZXJhdGlvbnNbMF1cIj57eyBuek9wZXJhdGlvbnNbMF0gfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiZGlyID09PSAncnRsJ1wiIGNsYXNzPVwiYW50LXRyYW5zZmVyLW9wZXJhdGlvblwiPlxuICAgICAgPGJ1dHRvbiBuei1idXR0b24gKGNsaWNrKT1cIm1vdmVUb1JpZ2h0KClcIiBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZCB8fCAhcmlnaHRBY3RpdmVcIiBbbnpUeXBlXT1cIidwcmltYXJ5J1wiIFtuelNpemVdPVwiJ3NtYWxsJ1wiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxlZnRcIj48L2k+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibnpPcGVyYXRpb25zWzBdXCI+e3sgbnpPcGVyYXRpb25zWzBdIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwibW92ZVRvTGVmdCgpXCIgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWQgfHwgIWxlZnRBY3RpdmVcIiBbbnpUeXBlXT1cIidwcmltYXJ5J1wiIFtuelNpemVdPVwiJ3NtYWxsJ1wiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInJpZ2h0XCI+PC9pPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIm56T3BlcmF0aW9uc1sxXVwiPnt7IG56T3BlcmF0aW9uc1sxXSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxuei10cmFuc2Zlci1saXN0XG4gICAgICBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0XCJcbiAgICAgIFtuZ1N0eWxlXT1cIm56TGlzdFN0eWxlXCJcbiAgICAgIGRhdGEtZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgW3RpdGxlVGV4dF09XCJuelRpdGxlc1sxXVwiXG4gICAgICBbc2hvd1NlbGVjdEFsbF09XCJuelNob3dTZWxlY3RBbGxcIlxuICAgICAgW2RhdGFTb3VyY2VdPVwicmlnaHREYXRhU291cmNlXCJcbiAgICAgIFtmaWx0ZXJdPVwicmlnaHRGaWx0ZXJcIlxuICAgICAgW2ZpbHRlck9wdGlvbl09XCJuekZpbHRlck9wdGlvblwiXG4gICAgICAoZmlsdGVyQ2hhbmdlKT1cImhhbmRsZUZpbHRlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtyZW5kZXJMaXN0XT1cIm56UmVuZGVyTGlzdCAmJiBuelJlbmRlckxpc3RbMV1cIlxuICAgICAgW3JlbmRlcl09XCJuelJlbmRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbc2hvd1NlYXJjaF09XCJuelNob3dTZWFyY2hcIlxuICAgICAgW3NlYXJjaFBsYWNlaG9sZGVyXT1cIm56U2VhcmNoUGxhY2Vob2xkZXIgfHwgbG9jYWxlPy5zZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICBbbm90Rm91bmRDb250ZW50XT1cIm56Tm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtpdGVtVW5pdF09XCJuekl0ZW1Vbml0IHx8IGxvY2FsZT8uaXRlbVVuaXRcIlxuICAgICAgW2l0ZW1zVW5pdF09XCJuekl0ZW1zVW5pdCB8fCBsb2NhbGU/Lml0ZW1zVW5pdFwiXG4gICAgICBbZm9vdGVyXT1cIm56Rm9vdGVyXCJcbiAgICAgIChoYW5kbGVTZWxlY3QpPVwiaGFuZGxlUmlnaHRTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAoaGFuZGxlU2VsZWN0QWxsKT1cImhhbmRsZVJpZ2h0U2VsZWN0QWxsKCRldmVudClcIlxuICAgID48L256LXRyYW5zZmVyLWxpc3Q+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyLWRpc2FibGVkXSc6IGBuekRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1jdXN0b21pemUtbGlzdF0nOiBgbnpSZW5kZXJMaXN0YFxuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dTZWxlY3RBbGw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NlYXJjaDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkcmVuKE56VHJhbnNmZXJMaXN0Q29tcG9uZW50KSBsaXN0cyE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XG4gIGxvY2FsZSE6IE56VHJhbnNmZXJJMThuSW50ZXJmYWNlO1xuXG4gIGxlZnRGaWx0ZXIgPSAnJztcbiAgcmlnaHRGaWx0ZXIgPSAnJztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbnpUaXRsZXM6IHN0cmluZ1tdID0gWycnLCAnJ107XG4gIEBJbnB1dCgpIG56T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlbGVjdEFsbCA9IHRydWU7XG4gIEBJbnB1dCgpIG56SXRlbVVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SXRlbXNVbml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuekNhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcbiAgQElucHV0KCkgbnpSZW5kZXJMaXN0OiBBcnJheTxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpGb290ZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbj86IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTZWFyY2hQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56VGFyZ2V0S2V5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWxlY3RlZEtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gZXZlbnRzXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWFyY2hDaGFuZ2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWxlY3RDaGFuZ2U+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHJvY2VzcyBkYXRhXG5cbiAgLy8gbGVmdFxuICBsZWZ0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICAvLyByaWdodFxuICByaWdodERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5sZWZ0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMucmlnaHREYXRhU291cmNlID0gW107XG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgaWYgKHJlY29yZC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcmVjb3JkLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogVHJhbnNmZXJJdGVtW10ge1xuICAgIHJldHVybiB0aGlzW2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XG4gIGhhbmRsZVJpZ2h0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBjaGVja2VkOiBib29sZWFuLCBpdGVtPzogVHJhbnNmZXJJdGVtKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb24sIGxpc3QubGVuZ3RoKTtcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb24sIGNoZWNrZWQsIGxpc3QsIGl0ZW0gfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UocmV0OiB7IGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb247IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMubnpTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXG5cbiAgbGVmdEFjdGl2ZSA9IGZhbHNlO1xuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpc1tkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdEFjdGl2ZScgOiAncmlnaHRBY3RpdmUnXSA9XG4gICAgICAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcbiAgfVxuXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xuXG4gIG1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24sIDApO1xuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcbiAgICBjb25zdCBtb3ZlTGlzdCA9IGRhdGFzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlICYmICFpdGVtLmRpc2FibGVkKTtcbiAgICB0aGlzLm56Q2FuTW92ZSh7IGRpcmVjdGlvbiwgbGlzdDogbW92ZUxpc3QgfSkuc3Vic2NyaWJlKFxuICAgICAgbmV3TW92ZUxpc3QgPT5cbiAgICAgICAgdGhpcy50cnV0aE1vdmVUbyhcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKVxuICAgICAgICApLFxuICAgICAgKCkgPT4gbW92ZUxpc3QuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ1dGhNb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgbGlzdDogVHJhbnNmZXJJdGVtW10pOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0RGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5sZWZ0RGF0YVNvdXJjZSA6IHRoaXMucmlnaHREYXRhU291cmNlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uaGlkZSA9IGZhbHNlO1xuICAgICAgaXRlbS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB0YXJnZXREYXRhc291cmNlLnNwbGljZSgwLCAwLCAuLi5saXN0KTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgdG86IGRpcmVjdGlvbixcbiAgICAgIGxpc3RcbiAgICB9KTtcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdHJhbnNmZXInKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5saXN0cy5mb3JFYWNoKGkgPT4gaS5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU56VGFyZ2V0S2V5cygpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlzID0gdG9BcnJheSh0aGlzLm56VGFyZ2V0S2V5cyk7XG4gICAgY29uc3QgaGFzT3duS2V5ID0gKGU6IFRyYW5zZmVySXRlbSkgPT4gZS5oYXNPd25Qcm9wZXJ0eSgna2V5Jyk7XG4gICAgdGhpcy5sZWZ0RGF0YVNvdXJjZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgaWYgKGhhc093bktleShlKSAmJiBrZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSAmJiAhZS5kaXNhYmxlZCkge1xuICAgICAgICBlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubW92ZVRvUmlnaHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTnpTZWxlY3RlZEtleXMoKTogdm9pZCB7XG4gICAgY29uc3Qga2V5cyA9IHRvQXJyYXkodGhpcy5uelNlbGVjdGVkS2V5cyk7XG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChlID0+IHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICBlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHRlcm0gPSAobGQ6IFRyYW5zZmVySXRlbSkgPT4gbGQuZGlzYWJsZWQgPT09IGZhbHNlICYmIGxkLmNoZWNrZWQgPT09IHRydWU7XG4gICAgdGhpcy5yaWdodEFjdGl2ZSA9IHRoaXMubGVmdERhdGFTb3VyY2Uuc29tZSh0ZXJtKTtcbiAgICB0aGlzLmxlZnRBY3RpdmUgPSB0aGlzLnJpZ2h0RGF0YVNvdXJjZS5zb21lKHRlcm0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUcmFuc2ZlcicpO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpEYXRhU291cmNlKSB7XG4gICAgICB0aGlzLnNwbGl0RGF0YVNvdXJjZSgpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdyaWdodCcpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56VGFyZ2V0S2V5cykge1xuICAgICAgdGhpcy5oYW5kbGVOelRhcmdldEtleXMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpTZWxlY3RlZEtleXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlTnpTZWxlY3RlZEtleXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19