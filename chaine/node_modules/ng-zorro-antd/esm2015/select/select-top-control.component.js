/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzSelectSearchComponent } from './select-search.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './select-search.component';
import * as ɵngcc4 from './select-item.component';
import * as ɵngcc5 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc6 from './select-placeholder.component';

function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-item", 6);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
} }
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "nz-select-search", 4);
    ɵngcc0.ɵɵlistener("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onInputValueChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzId", ctx_r0.nzId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isShowSingleLabel);
} }
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select-item", 9);
    ɵngcc0.ɵɵlistener("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const item_r8 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.onDeleteItem(item_r8.contentTemplateOutletContext); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
} }
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 7);
    ɵngcc0.ɵɵelementStart(2, "nz-select-search", 8);
    ɵngcc0.ɵɵlistener("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onInputValueChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
} }
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-placeholder", 10);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("placeholder", ctx_r2.placeHolder);
} }
export class NzSelectTopControlComponent {
    constructor(elementRef, noAnimation) {
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.nzId = null;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select-selector');
    }
    onHostKeydown(e) {
        const inputValue = e.target.value;
        if (e.keyCode === BACKSPACE && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
        }
    }
    updateTemplateVariable() {
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    tokenSeparate(inputValue, tokenSeparators) {
        const includesSeparators = (str, separators) => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        const splitBySeparators = (str, separators) => {
            const reg = new RegExp(`[${separators.join()}]`);
            const array = str.split(reg).filter(token => token);
            return [...new Set(array)];
        };
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    trackValue(_index, option) {
        return option.nzValue;
    }
    onDeleteItem(item) {
        if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
        }
    }
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => {
                return {
                    nzLabel: o.nzLabel,
                    nzValue: o.nzValue,
                    nzDisabled: o.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: o
                };
            });
            if (this.listOfTopItem.length > this.maxTagCount) {
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                const listOfSelectedValue = this.listOfTopItem.map(item => item.nzValue);
                const exceededItem = {
                    nzLabel: exceededLabel,
                    nzValue: '$$__nz_exceeded_item',
                    nzDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
}
NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzSelectTopControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSelectTopControlComponent, selectors: [["nz-select-top-control"]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzSelectSearchComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
    } }, hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) { return ctx.onHostKeydown($event); });
    } }, inputs: { nzId: "nzId", showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", deleteItem: "deleteItem" }, exportAs: ["nzSelectTopControl"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.mode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "default");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isShowPlaceholder);
    } }, directives: [ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgIf, ɵngcc3.NzSelectSearchComponent, ɵngcc4.NzSelectItemComponent, ɵngcc2.NgForOf, ɵngcc5.ɵNzTransitionPatchDirective, ɵngcc6.NzSelectPlaceholderComponent], encapsulation: 2, changeDetection: 0 });
NzSelectTopControlComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzSelectTopControlComponent.propDecorators = {
    nzId: [{ type: Input }],
    showSearch: [{ type: Input }],
    placeHolder: [{ type: Input }],
    open: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    autofocus: [{ type: Input }],
    disabled: [{ type: Input }],
    mode: [{ type: Input }],
    customTemplate: [{ type: Input }],
    maxTagPlaceholder: [{ type: Input }],
    removeIcon: [{ type: Input }],
    listOfTopItem: [{ type: Input }],
    tokenSeparators: [{ type: Input }],
    tokenize: [{ type: Output }],
    inputValueChange: [{ type: Output }],
    deleteItem: [{ type: Output }],
    nzSelectSearchComponent: [{ type: ViewChild, args: [NzSelectSearchComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-select-top-control',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></nz-select-item>
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
                host: {
                    '(keydown)': 'onHostKeydown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzId: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], open: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mode: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], maxTagPlaceholder: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], listOfTopItem: [{
            type: Input
        }], tokenSeparators: [{
            type: Input
        }], tokenize: [{
            type: Output
        }], inputValueChange: [{
            type: Output
        }], deleteItem: [{
            type: Output
        }], nzSelectSearchComponent: [{
            type: ViewChild,
            args: [NzSelectSearchComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRXBFLE1BQU0sT0FBTywyQkFBMkI7QUFBRyxJQTJHekMsWUFBb0IsVUFBc0IsRUFBNkIsV0FBb0M7QUFDN0csUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQTRCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBMUduRyxTQUFJLEdBQWtCLElBQUksQ0FBQztBQUN0QyxRQUFXLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUIsUUFBVyxnQkFBVyxHQUEyQyxJQUFJLENBQUM7QUFDdEUsUUFBVyxTQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFFBQVcsZ0JBQVcsR0FBVyxRQUFRLENBQUM7QUFDMUMsUUFBVyxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQVcsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFXLFNBQUksR0FBcUIsU0FBUyxDQUFDO0FBQzlDLFFBQVcsbUJBQWMs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LENBQUM7QUFDSDt1REE1TUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx1QkFBdUIsa0JBQ2pDLFFBQVEsRUFBRSxvQkFBb0Isa0JBQzlCLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCO1NBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOzs7Ozs7OzAzQ0FtRFQsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLFdBQVcsRUFBRSx1QkFBdUIsa0JBQ3JDLGNBQ0Y7Ozs7Ozs7Ozs7OztpU0FDSTtBQUFDO0FBQXFELFlBL0V6RCxVQUFVO0FBQ1YsWUFXTyxzQkFBc0IsdUJBOEtnQixJQUFJLFlBQUksUUFBUTtBQUFNO0FBQUc7QUFDbEUsbUJBM0dILEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyx1QkFDVixNQUFNO0FBQUssK0JBQ1gsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyxzQ0FDWCxTQUFTLFNBQUMsdUJBQXVCO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNlbGVjdFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTZWxlY3RJdGVtSW50ZXJmYWNlLCBOelNlbGVjdE1vZGVUeXBlLCBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc2VsZWN0LXRvcC1jb250cm9sJyxcbiAgZXhwb3J0QXM6ICduelNlbGVjdFRvcENvbnRyb2wnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLXNpbmdsZSBtb2RlLS0+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RlZmF1bHQnXCI+XG4gICAgICAgIDxuei1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgW256SWRdPVwibnpJZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZSFcIlxuICAgICAgICAgIFtzaG93SW5wdXRdPVwic2hvd1NlYXJjaFwiXG4gICAgICAgICAgW21pcnJvclN5bmNdPVwiZmFsc2VcIlxuICAgICAgICAgIFthdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCJcbiAgICAgICAgICBbZm9jdXNUcmlnZ2VyXT1cIm9wZW5cIlxuICAgICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZ0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9uei1zZWxlY3Qtc2VhcmNoPlxuICAgICAgICA8bnotc2VsZWN0LWl0ZW1cbiAgICAgICAgICAqbmdJZj1cImlzU2hvd1NpbmdsZUxhYmVsXCJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZmFsc2VcIlxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxuICAgICAgICAgIFtsYWJlbF09XCJsaXN0T2ZUb3BJdGVtWzBdLm56TGFiZWxcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImxpc3RPZlRvcEl0ZW1bMF1cIlxuICAgICAgICA+PC9uei1zZWxlY3QtaXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICA8IS0tbXVsdGlwbGUgb3IgdGFncyBtb2RlLS0+XG4gICAgICAgIDxuei1zZWxlY3QtaXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RPZlNsaWNlZEl0ZW07IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxuICAgICAgICAgIFtsYWJlbF09XCJpdGVtLm56TGFiZWxcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtLm56RGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRcIlxuICAgICAgICAgIFtkZWxldGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XCJcbiAgICAgICAgICAoZGVsZXRlKT1cIm9uRGVsZXRlSXRlbShpdGVtLmNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQpXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LWl0ZW0+XG4gICAgICAgIDxuei1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgW256SWRdPVwibnpJZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZSFcIlxuICAgICAgICAgIFthdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCJcbiAgICAgICAgICBbc2hvd0lucHV0XT1cInRydWVcIlxuICAgICAgICAgIFttaXJyb3JTeW5jXT1cInRydWVcIlxuICAgICAgICAgIFtmb2N1c1RyaWdnZXJdPVwib3BlblwiXG4gICAgICAgICAgKGlzQ29tcG9zaW5nQ2hhbmdlKT1cImlzQ29tcG9zaW5nQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L256LXNlbGVjdC1zZWFyY2g+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bnotc2VsZWN0LXBsYWNlaG9sZGVyICpuZ0lmPVwiaXNTaG93UGxhY2Vob2xkZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIj48L256LXNlbGVjdC1wbGFjZWhvbGRlcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25Ib3N0S2V5ZG93bigkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBzaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlciA9IEluZmluaXR5O1xuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnlbXSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGxpc3RPZlRvcEl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XG4gIEBJbnB1dCgpIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRva2VuaXplID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlbGV0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPE56U2VsZWN0SXRlbUludGVyZmFjZT4oKTtcbiAgQFZpZXdDaGlsZChOelNlbGVjdFNlYXJjaENvbXBvbmVudCkgbnpTZWxlY3RTZWFyY2hDb21wb25lbnQhOiBOelNlbGVjdFNlYXJjaENvbXBvbmVudDtcbiAgbGlzdE9mU2xpY2VkSXRlbTogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGVbXSA9IFtdO1xuICBpc1Nob3dQbGFjZWhvbGRlciA9IHRydWU7XG4gIGlzU2hvd1NpbmdsZUxhYmVsID0gZmFsc2U7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIG9uSG9zdEtleWRvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gQkFDS1NQQUNFICYmIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmICFpbnB1dFZhbHVlICYmIHRoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbSh0aGlzLmxpc3RPZlRvcEl0ZW1bdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWRWYWx1ZUVtcHR5ID0gdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLmlzU2hvd1BsYWNlaG9sZGVyID0gaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcbiAgICB0aGlzLmlzU2hvd1NpbmdsZUxhYmVsID0gIWlzU2VsZWN0ZWRWYWx1ZUVtcHR5ICYmICF0aGlzLmlzQ29tcG9zaW5nICYmICF0aGlzLmlucHV0VmFsdWU7XG4gIH1cblxuICBpc0NvbXBvc2luZ0NoYW5nZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNDb21wb3NpbmcgPSBpc0NvbXBvc2luZztcbiAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgfVxuXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XG4gICAgICB0aGlzLmlucHV0VmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnRva2VuU2VwYXJhdGUodmFsdWUsIHRoaXMudG9rZW5TZXBhcmF0b3JzKTtcbiAgICB9XG4gIH1cblxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGNvbnN0IGluY2x1ZGVzU2VwYXJhdG9ycyA9IChzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBjb25zdCBzcGxpdEJ5U2VwYXJhdG9ycyA9IChzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcbiAgICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcbiAgICAgIHJldHVybiBbLi4ubmV3IFNldChhcnJheSldO1xuICAgIH07XG4gICAgaWYgKFxuICAgICAgaW5wdXRWYWx1ZSAmJlxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcbiAgICAgIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmXG4gICAgICBpbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxuICAgICkge1xuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSBzcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xuICAgICAgdGhpcy50b2tlbml6ZS5uZXh0KGxpc3RPZkxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuY2xlYXJJbnB1dFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XG4gIH1cblxuICBvbkRlbGV0ZUl0ZW0oaXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpdGVtLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVsZXRlSXRlbS5uZXh0KGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXNlbGVjdC1zZWxlY3RvcicpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbGlzdE9mVG9wSXRlbSwgbWF4VGFnQ291bnQsIGN1c3RvbVRlbXBsYXRlLCBtYXhUYWdQbGFjZWhvbGRlciB9ID0gY2hhbmdlcztcbiAgICBpZiAobGlzdE9mVG9wSXRlbSkge1xuICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XG4gICAgfVxuICAgIGlmIChsaXN0T2ZUb3BJdGVtIHx8IG1heFRhZ0NvdW50IHx8IGN1c3RvbVRlbXBsYXRlIHx8IG1heFRhZ1BsYWNlaG9sZGVyKSB7XG4gICAgICBjb25zdCBsaXN0T2ZTbGljZWRJdGVtOiBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZVtdID0gdGhpcy5saXN0T2ZUb3BJdGVtLnNsaWNlKDAsIHRoaXMubWF4VGFnQ291bnQpLm1hcChvID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuekxhYmVsOiBvLm56TGFiZWwsXG4gICAgICAgICAgbnpWYWx1ZTogby5uelZhbHVlLFxuICAgICAgICAgIG56RGlzYWJsZWQ6IG8ubnpEaXNhYmxlZCxcbiAgICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXQ6IHRoaXMuY3VzdG9tVGVtcGxhdGUsXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogb1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA+IHRoaXMubWF4VGFnQ291bnQpIHtcbiAgICAgICAgY29uc3QgZXhjZWVkZWRMYWJlbCA9IGArICR7dGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCAtIHRoaXMubWF4VGFnQ291bnR9IC4uLmA7XG4gICAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhjZWVkZWRJdGVtID0ge1xuICAgICAgICAgIG56TGFiZWw6IGV4Y2VlZGVkTGFiZWwsXG4gICAgICAgICAgbnpWYWx1ZTogJyQkX19uel9leGNlZWRlZF9pdGVtJyxcbiAgICAgICAgICBuekRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldDogdGhpcy5tYXhUYWdQbGFjZWhvbGRlcixcbiAgICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0OiBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNsaWNlKHRoaXMubWF4VGFnQ291bnQpXG4gICAgICAgIH07XG4gICAgICAgIGxpc3RPZlNsaWNlZEl0ZW0ucHVzaChleGNlZWRlZEl0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0T2ZTbGljZWRJdGVtID0gbGlzdE9mU2xpY2VkSXRlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==