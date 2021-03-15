/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/scrolling';
import * as ɵngcc3 from 'ng-zorro-antd/empty';
import * as ɵngcc4 from './option-item-group.component';
import * as ɵngcc5 from './option-item.component';

function NzOptionContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("specificContent", ctx_r0.notFoundContent);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option-item-group", 9);
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", item_r3.groupLabel);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-option-item", 10);
    ɵngcc0.ɵɵlistener("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onItemHover($event); })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
} }
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 6);
    ɵngcc0.ɵɵtemplate(1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);
    ɵngcc0.ɵɵtemplate(2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngSwitch", item_r3.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "group");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "item");
} }
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
export class NzOptionContainerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 32;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new EventEmitter();
        this.scrollToBottom = new EventEmitter();
        this.scrolledIndex = 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select-dropdown');
    }
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    trackValue(_index, option) {
        return option.key;
    }
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    scrollToActivatedValue() {
        const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => this.scrollToActivatedValue());
    }
}
NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzOptionContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["nz-option-container"]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["nzOptionContainer"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
        ɵngcc0.ɵɵlistener("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
        ɵngcc0.ɵɵtemplate(3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.listOfContainerItem.length === 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
        ɵngcc0.ɵɵclassProp("full-width", !ctx.matchWidth);
        ɵngcc0.ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.dropdownRender);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.CdkVirtualScrollViewport, ɵngcc2.CdkFixedSizeVirtualScroll, ɵngcc2.CdkVirtualForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.NzEmbedEmptyComponent, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc4.NzOptionItemGroupComponent, ɵngcc5.NzOptionItemComponent], encapsulation: 2, changeDetection: 0 });
NzOptionContainerComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzOptionContainerComponent.propDecorators = {
    notFoundContent: [{ type: Input }],
    menuItemSelectedIcon: [{ type: Input }],
    dropdownRender: [{ type: Input }],
    activatedValue: [{ type: Input }],
    listOfSelectedValue: [{ type: Input }],
    compareWith: [{ type: Input }],
    mode: [{ type: Input }],
    matchWidth: [{ type: Input }],
    itemSize: [{ type: Input }],
    maxItemLength: [{ type: Input }],
    listOfContainerItem: [{ type: Input }],
    itemClick: [{ type: Output }],
    scrollToBottom: [{ type: Output }],
    cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option-container',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { notFoundContent: [{
            type: Input
        }], menuItemSelectedIcon: [{
            type: Input
        }], dropdownRender: [{
            type: Input
        }], activatedValue: [{
            type: Input
        }], listOfSelectedValue: [{
            type: Input
        }], mode: [{
            type: Input
        }], matchWidth: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], maxItemLength: [{
            type: Input
        }], listOfContainerItem: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], scrollToBottom: [{
            type: Output
        }], compareWith: [{
            type: Input
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RHZCLE1BQU0sT0FBTywwQkFBMEI7QUFBRyxJQWlCeEMsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBaEJsQyxvQkFBZSxHQUFnRCxTQUFTLENBQUM7QUFDcEYsUUFBVyx5QkFBb0IsR0FBa0MsSUFBSSxDQUFDO0FBQ3RFLFFBQVcsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO0FBQ2hFLFFBQVcsbUJBQWMsR0FBcUIsSUFBSSxDQUFDO0FBQ25ELFFBQVcsd0JBQW1CLEdBQWdCLEVBQUUsQ0FBQztBQUNqRCxRQUNXLFNBQUksR0FBcUIsU0FBUyxDQUFDO0FBQzlDLFFBQVcsZUFBVSxHQUFHLElBQUksQ0FBQztBQUM3QixRQUFXLGFBQVEsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBVyxrQkFBYSxHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFXLHdCQUFtQixHQUE0QixFQUFFLENBQUM7QUFDN0QsUUFBcUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7QUFDL0QsUUFBcUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQy9ELFFBQ1Usa0JBQWEsR0FBRyxDQUFDLENB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56U2VsZWN0SXRlbUludGVyZmFjZSwgTnpTZWxlY3RNb2RlVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpPcHRpb25Db250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJsaXN0T2ZDb250YWluZXJJdGVtLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiYW50LXNlbGVjdC1pdGVtLWVtcHR5XCI+XG4gICAgICAgIDxuei1lbWJlZC1lbXB0eSBuekNvbXBvbmVudE5hbWU9XCJzZWxlY3RcIiBbc3BlY2lmaWNDb250ZW50XT1cIm5vdEZvdW5kQ29udGVudCFcIj48L256LWVtYmVkLWVtcHR5PlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgIFtjbGFzcy5mdWxsLXdpZHRoXT1cIiFtYXRjaFdpZHRoXCJcbiAgICAgICAgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCJcbiAgICAgICAgW21heEJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXG4gICAgICAgIFttaW5CdWZmZXJQeF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxuICAgICAgICAoc2Nyb2xsZWRJbmRleENoYW5nZSk9XCJvblNjcm9sbGVkSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwibGlzdE9mQ29udGFpbmVySXRlbS5sZW5ndGggKiBpdGVtU2l6ZVwiXG4gICAgICAgIFtzdHlsZS5tYXgtaGVpZ2h0LnB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXG4gICAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgIGNka1ZpcnR1YWxGb3JcbiAgICAgICAgICBbY2RrVmlydHVhbEZvck9mXT1cImxpc3RPZkNvbnRhaW5lckl0ZW1cIlxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yVHJhY2tCeV09XCJ0cmFja1ZhbHVlXCJcbiAgICAgICAgICBbY2RrVmlydHVhbEZvclRlbXBsYXRlQ2FjaGVTaXplXT1cIjBcIlxuICAgICAgICAgIGxldC1pdGVtXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLnR5cGVcIj5cbiAgICAgICAgICAgIDxuei1vcHRpb24taXRlbS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtuekxhYmVsXT1cIml0ZW0uZ3JvdXBMYWJlbFwiPjwvbnotb3B0aW9uLWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICA8bnotb3B0aW9uLWl0ZW1cbiAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpdGVtJ1wiXG4gICAgICAgICAgICAgIFtpY29uXT1cIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcbiAgICAgICAgICAgICAgW2N1c3RvbUNvbnRlbnRdPVwiaXRlbS5uekN1c3RvbUNvbnRlbnRcIlxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtncm91cGVkXT1cIiEhaXRlbS5ncm91cExhYmVsXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0ubnpEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtzaG93U3RhdGVdPVwibW9kZSA9PT0gJ3RhZ3MnIHx8IG1vZGUgPT09ICdtdWx0aXBsZSdcIlxuICAgICAgICAgICAgICBbbGFiZWxdPVwiaXRlbS5uekxhYmVsXCJcbiAgICAgICAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVXaXRoXCJcbiAgICAgICAgICAgICAgW2FjdGl2YXRlZFZhbHVlXT1cImFjdGl2YXRlZFZhbHVlXCJcbiAgICAgICAgICAgICAgW2xpc3RPZlNlbGVjdGVkVmFsdWVdPVwibGlzdE9mU2VsZWN0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLm56VmFsdWVcIlxuICAgICAgICAgICAgICAoaXRlbUhvdmVyKT1cIm9uSXRlbUhvdmVyKCRldmVudClcIlxuICAgICAgICAgICAgICAoaXRlbUNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgPjwvbnotb3B0aW9uLWl0ZW0+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkcm9wZG93blJlbmRlclwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcbiAgQElucHV0KCkgY29tcGFyZVdpdGghOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbWF0Y2hXaWR0aCA9IHRydWU7XG4gIEBJbnB1dCgpIGl0ZW1TaXplID0gMzI7XG4gIEBJbnB1dCgpIG1heEl0ZW1MZW5ndGggPSA4O1xuICBASW5wdXQoKSBsaXN0T2ZDb250YWluZXJJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiB0cnVlIH0pIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgcHJpdmF0ZSBzY3JvbGxlZEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtc2VsZWN0LWRyb3Bkb3duJyk7XG4gIH1cblxuICBvbkl0ZW1DbGljayh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkl0ZW1Ib3Zlcih2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgLy8gVE9ETzoga2V5ZG93bi5lbnRlciB3b24ndCBhY3RpdmF0ZSB0aGlzIHZhbHVlXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiBvcHRpb24ua2V5O1xuICB9XG5cbiAgb25TY3JvbGxlZEluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbGVkSW5kZXggPSBpbmRleDtcbiAgICBpZiAoaW5kZXggPT09IHRoaXMubGlzdE9mQ29udGFpbmVySXRlbS5sZW5ndGggLSB0aGlzLm1heEl0ZW1MZW5ndGgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQWN0aXZhdGVkVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZEluZGV4KGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLmtleSwgdGhpcy5hY3RpdmF0ZWRWYWx1ZSkpO1xuICAgIGlmIChpbmRleCA8IHRoaXMuc2Nyb2xsZWRJbmRleCB8fCBpbmRleCA+PSB0aGlzLnNjcm9sbGVkSW5kZXggKyB0aGlzLm1heEl0ZW1MZW5ndGgpIHtcbiAgICAgIHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LnNjcm9sbFRvSW5kZXgoaW5kZXggfHwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbGlzdE9mQ29udGFpbmVySXRlbSwgYWN0aXZhdGVkVmFsdWUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGxpc3RPZkNvbnRhaW5lckl0ZW0gfHwgYWN0aXZhdGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmF0ZWRWYWx1ZSgpO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbFRvQWN0aXZhdGVkVmFsdWUoKSk7XG4gIH1cbn1cbiJdfQ==