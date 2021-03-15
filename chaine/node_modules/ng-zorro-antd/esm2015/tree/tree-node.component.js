/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core/tree';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/tree';
import * as ɵngcc2 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc3 from './tree-indent.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from './tree-node-title.component';
import * as ɵngcc6 from './tree-node-switcher.component';
import * as ɵngcc7 from './tree-node-checkbox.component';

const _c0 = ["builtin", ""];
function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-tree-node-switcher", 4);
    ɵngcc0.ɵɵlistener("click", function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template_nz_tree_node_switcher_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.clickExpand($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzSelectMode", ctx_r0.nzSelectMode)("context", ctx_r0.nzTreeNode)("isLeaf", ctx_r0.isLeaf)("isExpanded", ctx_r0.isExpanded)("isLoading", ctx_r0.isLoading);
} }
function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-tree-node-checkbox", 5);
    ɵngcc0.ɵɵlistener("click", function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template_nz_tree_node_checkbox_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.clickCheckBox($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSelectMode", ctx_r1.nzSelectMode)("isChecked", ctx_r1.isChecked)("isHalfChecked", ctx_r1.isHalfChecked)("isDisabled", ctx_r1.isDisabled)("isDisableCheckbox", ctx_r1.isDisableCheckbox);
} }
export class NzTreeNodeBuiltinComponent {
    constructor(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        /**
         * for global property
         */
        this.icon = '';
        this.title = '';
        this.isLoading = false;
        this.isSelected = false;
        this.isDisabled = false;
        this.isMatched = false;
        this.isStart = [];
        this.isEnd = [];
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzTreeTemplate = null;
        this.nzSearchValue = '';
        this.nzDraggable = false;
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        this.showIndicator = false;
    }
    /**
     * default set
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
    }
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * collapse node
     * @param event
     */
    clickExpand(event) {
        event.preventDefault();
        if (!this.isLoading && !this.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.isExpanded);
        }
        this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
        this.nzExpandChange.emit(eventNext);
    }
    clickSelect(event) {
        event.preventDefault();
        if (this.isSelectable && !this.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzClick.emit(eventNext);
    }
    dblClick(event) {
        event.preventDefault();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzDblClick.emit(eventNext);
    }
    contextMenu(event) {
        event.preventDefault();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzContextMenu.emit(eventNext);
    }
    /**
     * check node
     * @param event
     */
    clickCheckBox(event) {
        event.preventDefault();
        // return if node is disabled
        if (this.isDisabled || this.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzCheckBoxChange.emit(eventNext);
    }
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over', 'drop-target'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.elementRef.nativeElement, e);
        });
    }
    /**
     * drag event
     * @param e
     */
    handleDragStart(e) {
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', this.nzTreeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzOnDragStart.emit(eventNext);
    }
    handleDragEnter(e) {
        var _a;
        e.preventDefault();
        // reset position
        this.showIndicator = this.nzTreeNode.key !== ((_a = this.nzTreeService.getSelectedNode()) === null || _a === void 0 ? void 0 : _a.key);
        this.renderIndicator(2);
        this.ngZone.run(() => {
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            this.nzOnDragEnter.emit(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.renderIndicator(dropPosition);
            // leaf node will pass
            if (!(this.dragPos === 0 && this.isLeaf)) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
                this.renderer.addClass(this.elementRef.nativeElement, 'drop-target');
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzOnDragOver.emit(eventNext);
    }
    handleDragLeave(e) {
        e.preventDefault();
        this.renderIndicator(2);
        this.clearDragClass();
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzOnDragLeave.emit(eventNext);
    }
    handleDragDrop(e) {
        this.ngZone.run(() => {
            this.showIndicator = false;
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: this.nzTreeService.getSelectedNode(),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    this.nzOnDrop.emit(dropEvent);
                    this.nzOnDragEnd.emit(dragEndEvent);
                });
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                this.nzOnDrop.emit(dropEvent);
            }
        });
    }
    handleDragEnd(e) {
        e.preventDefault();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                this.nzOnDragEnd.emit(eventNext);
            }
        });
    }
    /**
     * Listening to dragging events.
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.nzDraggable) {
                const nativeElement = this.elementRef.nativeElement;
                this.destroy$ = new Subject();
                fromEvent(nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        });
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzTreeNode.component = this;
    }
    ngOnChanges(changes) {
        const { nzDraggable } = changes;
        if (nzDraggable) {
            this.handDragEvent();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    renderIndicator(dropPosition) {
        this.ngZone.run(() => {
            var _a;
            this.showIndicator = dropPosition !== 2;
            if (this.nzTreeNode.key === ((_a = this.nzTreeService.getSelectedNode()) === null || _a === void 0 ? void 0 : _a.key) || (dropPosition === 0 && this.isLeaf)) {
                return;
            }
            this.dragPos = dropPosition;
            this.cdr.markForCheck();
        });
    }
}
NzTreeNodeBuiltinComponent.ɵfac = function NzTreeNodeBuiltinComponent_Factory(t) { return new (t || NzTreeNodeBuiltinComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzNoAnimationDirective, 9)); };
NzTreeNodeBuiltinComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeBuiltinComponent, selectors: [["nz-tree-node", "builtin", ""]], hostVars: 34, hostBindings: function NzTreeNodeBuiltinComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NzTreeNodeBuiltinComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", ctx.displayStyle);
        ɵngcc0.ɵɵclassProp("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading);
    } }, inputs: { icon: "icon", title: "title", isLoading: "isLoading", isSelected: "isSelected", isDisabled: "isDisabled", isMatched: "isMatched", isStart: "isStart", isEnd: "isEnd", nzHideUnMatched: "nzHideUnMatched", nzNoAnimation: "nzNoAnimation", nzSelectMode: "nzSelectMode", nzShowIcon: "nzShowIcon", nzTreeTemplate: "nzTreeTemplate", nzSearchValue: "nzSearchValue", nzDraggable: "nzDraggable", isExpanded: "isExpanded", isLeaf: "isLeaf", isChecked: "isChecked", isHalfChecked: "isHalfChecked", isDisableCheckbox: "isDisableCheckbox", isSelectable: "isSelectable", canHide: "canHide", nzTreeNode: "nzTreeNode", nzShowLine: "nzShowLine", nzShowExpand: "nzShowExpand", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzExpandedIcon: "nzExpandedIcon", nzBeforeDrop: "nzBeforeDrop" }, outputs: { nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTreeBuiltinNode"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 22, consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click", 4, "ngIf"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click", 4, "ngIf"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "showIndicator", "dragPosition", "dblclick", "click", "contextmenu"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click"]], template: function NzTreeNodeBuiltinComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "nz-tree-indent", 0);
        ɵngcc0.ɵɵtemplate(1, NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template, 1, 8, "nz-tree-node-switcher", 1);
        ɵngcc0.ɵɵtemplate(2, NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template, 1, 5, "nz-tree-node-checkbox", 2);
        ɵngcc0.ɵɵelementStart(3, "nz-tree-node-title", 3);
        ɵngcc0.ɵɵlistener("dblclick", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_dblclick_3_listener($event) { return ctx.dblClick($event); })("click", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_click_3_listener($event) { return ctx.clickSelect($event); })("contextmenu", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) { return ctx.contextMenu($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowExpand);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCheckable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode)("showIndicator", ctx.showIndicator)("dragPosition", ctx.dragPos);
    } }, directives: [ɵngcc3.NzTreeIndentComponent, ɵngcc4.NgIf, ɵngcc5.NzTreeNodeTitleComponent, ɵngcc6.NzTreeNodeSwitcherComponent, ɵngcc7.NzTreeNodeBuiltinCheckboxComponent], encapsulation: 2, changeDetection: 0 });
NzTreeNodeBuiltinComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeNodeBuiltinComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    isLoading: [{ type: Input }],
    isSelected: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isMatched: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isLeaf: [{ type: Input }],
    isChecked: [{ type: Input }],
    isHalfChecked: [{ type: Input }],
    isDisableCheckbox: [{ type: Input }],
    isSelectable: [{ type: Input }],
    canHide: [{ type: Input }],
    isStart: [{ type: Input }],
    isEnd: [{ type: Input }],
    nzTreeNode: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeBuiltinComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeBuiltinComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeBuiltinComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeBuiltinComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeBuiltinComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeBuiltinComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeBuiltinComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeBuiltinComponent.prototype, "nzShowIcon", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeBuiltinComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node[builtin]',
                exportAs: 'nzTreeBuiltinNode',
                template: `
    <nz-tree-indent [nzTreeLevel]="nzTreeNode.level" [nzSelectMode]="nzSelectMode" [nzIsStart]="isStart" [nzIsEnd]="isEnd"></nz-tree-indent>
    <nz-tree-node-switcher
      *ngIf="nzShowExpand"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzSelectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [isLeaf]="isLeaf"
      [isExpanded]="isExpanded"
      [isLoading]="isLoading"
      (click)="clickExpand($event)"
    ></nz-tree-node-switcher>
    <nz-tree-node-checkbox
      builtin
      *ngIf="nzCheckable"
      (click)="clickCheckBox($event)"
      [nzSelectMode]="nzSelectMode"
      [isChecked]="isChecked"
      [isHalfChecked]="isHalfChecked"
      [isDisabled]="isDisabled"
      [isDisableCheckbox]="isDisableCheckbox"
    ></nz-tree-node-checkbox>
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [showIndicator]="showIndicator"
      [dragPosition]="dragPos"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-treenode]': `nzSelectMode`,
                    '[class.ant-select-tree-treenode-disabled]': `nzSelectMode && isDisabled`,
                    '[class.ant-select-tree-treenode-switcher-open]': `nzSelectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-treenode-switcher-close]': `nzSelectMode && isSwitcherClose`,
                    '[class.ant-select-tree-treenode-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-treenode-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-treenode-selected]': `nzSelectMode && isSelected`,
                    '[class.ant-select-tree-treenode-loading]': `nzSelectMode && isLoading`,
                    '[class.ant-tree-treenode]': `!nzSelectMode`,
                    '[class.ant-tree-treenode-disabled]': `!nzSelectMode && isDisabled`,
                    '[class.ant-tree-treenode-switcher-open]': `!nzSelectMode && isSwitcherOpen`,
                    '[class.ant-tree-treenode-switcher-close]': `!nzSelectMode && isSwitcherClose`,
                    '[class.ant-tree-treenode-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-treenode-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-treenode-selected]': `!nzSelectMode && isSelected`,
                    '[class.ant-tree-treenode-loading]': `!nzSelectMode && isLoading`,
                    '[style.display]': 'displayStyle',
                    '(mousedown)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeBaseService }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { icon: [{
            type: Input
        }], title: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], isSelected: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isMatched: [{
            type: Input
        }], isStart: [{
            type: Input
        }], isEnd: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzTreeTemplate: [{
            type: Input
        }], nzSearchValue: [{
            type: Input
        }], nzDraggable: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzDblClick: [{
            type: Output
        }], nzContextMenu: [{
            type: Output
        }], nzCheckBoxChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnDragStart: [{
            type: Output
        }], nzOnDragEnter: [{
            type: Output
        }], nzOnDragOver: [{
            type: Output
        }], nzOnDragLeave: [{
            type: Output
        }], nzOnDrop: [{
            type: Output
        }], nzOnDragEnd: [{
            type: Output
        }], isExpanded: [{
            type: Input
        }], isLeaf: [{
            type: Input
        }], isChecked: [{
            type: Input
        }], isHalfChecked: [{
            type: Input
        }], isDisableCheckbox: [{
            type: Input
        }], isSelectable: [{
            type: Input
        }], canHide: [{
            type: Input
        }], nzTreeNode: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzBeforeDrop: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlL3RyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBOEMsaUJBQWlCLEVBQUUsVUFBVSxFQUFxQixNQUFNLHlCQUF5QixDQUFDO0FBRXZJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEUzQyxNQUFNLE9BQU8sMEJBQTBCO0FBQUcsSUF5UnhDLFlBQ1MsYUFBZ0MsRUFDL0IsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ0gsV0FBb0M7QUFDaEUsUUFOUSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7QUFBQyxRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQUMsUUFDZixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDSixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFDbkUsUUF0UkU7QUFDRjtBQUVBLFdB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Q0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7QUFDdkMsWUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsZ0JBQVEsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDNUQsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3RDLGdCQUFRLFNBQVMsQ0FBWSxhQUFhLEVBQUUsV0FBVyxDQUFDO0FBQ3hELHFCQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFXLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFRLFNBQVMsQ0FBWSxhQUFhLEVBQUUsV0FBVyxDQUFDO0FBQ3hELHFCQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFXLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFRLFNBQVMsQ0FBWSxhQUFhLEVBQUUsVUFBVSxDQUFDO0FBQ3ZELHFCQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFXLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdCQUFRLFNBQVMsQ0FBWSxhQUFhLEVBQUUsV0FBVyxDQUFDO0FBQ3hELHFCQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFXLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFD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c0JBQ1YsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyw0QkFDWCxNQUFNO0FBQUssK0JBQ1gsTUFBTTtBQUFLLDZCQUNYLE1BQU07QUFBSyw0QkFDWCxNQUFNO0FBQUssNEJBQ1gsTUFBTTtBQUFLLDJCQUNYLE1BQU07QUFBSyw0QkFDWCxNQUFNO0FBQUssdUJBQ1gsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSTtBQXZCYztBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1YsOERBRDhCO0FBQ3JCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDWixnRUFEa0M7QUFDdkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNYLCtEQURnQztBQUN0QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1gsK0RBRGdDO0FBQ3RCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZCxtRUFEcUM7QUFDeEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNaLGlFQURpQztBQUN0QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1gsZ0VBRCtCO0FBQ3JCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCw4REFEMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDOUM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcblxuaW1wb3J0IHsgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVCYXNlU2VydmljZSwgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZVtidWlsdGluXScsXG4gIGV4cG9ydEFzOiAnbnpUcmVlQnVpbHRpbk5vZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10cmVlLWluZGVudCBbbnpUcmVlTGV2ZWxdPVwibnpUcmVlTm9kZS5sZXZlbFwiIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCIgW256SXNTdGFydF09XCJpc1N0YXJ0XCIgW256SXNFbmRdPVwiaXNFbmRcIj48L256LXRyZWUtaW5kZW50PlxuICAgIDxuei10cmVlLW5vZGUtc3dpdGNoZXJcbiAgICAgICpuZ0lmPVwibnpTaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwibnpTaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgW256RXhwYW5kZWRJY29uXT1cIm56RXhwYW5kZWRJY29uXCJcbiAgICAgIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgIFtjb250ZXh0XT1cIm56VHJlZU5vZGVcIlxuICAgICAgW2lzTGVhZl09XCJpc0xlYWZcIlxuICAgICAgW2lzRXhwYW5kZWRdPVwiaXNFeHBhbmRlZFwiXG4gICAgICBbaXNMb2FkaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAoY2xpY2spPVwiY2xpY2tFeHBhbmQoJGV2ZW50KVwiXG4gICAgPjwvbnotdHJlZS1ub2RlLXN3aXRjaGVyPlxuICAgIDxuei10cmVlLW5vZGUtY2hlY2tib3hcbiAgICAgIGJ1aWx0aW5cbiAgICAgICpuZ0lmPVwibnpDaGVja2FibGVcIlxuICAgICAgKGNsaWNrKT1cImNsaWNrQ2hlY2tCb3goJGV2ZW50KVwiXG4gICAgICBbbnpTZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICBbaXNDaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBbaXNIYWxmQ2hlY2tlZF09XCJpc0hhbGZDaGVja2VkXCJcbiAgICAgIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgW2lzRGlzYWJsZUNoZWNrYm94XT1cImlzRGlzYWJsZUNoZWNrYm94XCJcbiAgICA+PC9uei10cmVlLW5vZGUtY2hlY2tib3g+XG4gICAgPG56LXRyZWUtbm9kZS10aXRsZVxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgICAgW2lzTG9hZGluZ109XCJpc0xvYWRpbmdcIlxuICAgICAgW2lzU2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgICBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtpc01hdGNoZWRdPVwiaXNNYXRjaGVkXCJcbiAgICAgIFtpc0V4cGFuZGVkXT1cImlzRXhwYW5kZWRcIlxuICAgICAgW2lzTGVhZl09XCJpc0xlYWZcIlxuICAgICAgW3NlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxuICAgICAgW3RyZWVUZW1wbGF0ZV09XCJuelRyZWVUZW1wbGF0ZVwiXG4gICAgICBbZHJhZ2dhYmxlXT1cIm56RHJhZ2dhYmxlXCJcbiAgICAgIFtzaG93SWNvbl09XCJuelNob3dJY29uXCJcbiAgICAgIFtzZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICBbY29udGV4dF09XCJuelRyZWVOb2RlXCJcbiAgICAgIFtzaG93SW5kaWNhdG9yXT1cInNob3dJbmRpY2F0b3JcIlxuICAgICAgW2RyYWdQb3NpdGlvbl09XCJkcmFnUG9zXCJcbiAgICAgIChkYmxjbGljayk9XCJkYmxDbGljaygkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJjbGlja1NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQpXCJcbiAgICA+PC9uei10cmVlLW5vZGUtdGl0bGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlXSc6IGBuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlLWRpc2FibGVkXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNEaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtc3dpdGNoZXItb3Blbl0nOiBgbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJPcGVuYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZV0nOiBgbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJDbG9zZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtY2hlY2tib3gtY2hlY2tlZF0nOiBgbnpTZWxlY3RNb2RlICYmIGlzQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV0nOiBgbnpTZWxlY3RNb2RlICYmIGlzSGFsZkNoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlLXNlbGVjdGVkXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNTZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtbG9hZGluZ10nOiBgbnpTZWxlY3RNb2RlICYmIGlzTG9hZGluZ2AsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZV0nOiBgIW56U2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1kaXNhYmxlZF0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc0Rpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLXN3aXRjaGVyLW9wZW5dJzogYCFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlck9wZW5gLFxuICAgICdbY2xhc3MuYW50LXRyZWUtdHJlZW5vZGUtc3dpdGNoZXItY2xvc2VdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWNoZWNrYm94LWNoZWNrZWRdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNDaGVja2VkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNIYWxmQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1zZWxlY3RlZF0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc1NlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWxvYWRpbmddJzogYCFuelNlbGVjdE1vZGUgJiYgaXNMb2FkaW5nYCxcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogJ2Rpc3BsYXlTdHlsZScsXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUJ1aWx0aW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0xpbmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0V4cGFuZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDaGVja2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXN5bmNEYXRhOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVVbk1hdGNoZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9BbmltYXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2VsZWN0TW9kZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93SWNvbjogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBmb3IgZ2xvYmFsIHByb3BlcnR5XG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTWF0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0V4cGFuZGVkITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNMZWFmITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNDaGVja2VkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNTZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2FuSGlkZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzU3RhcnQ6IGJvb2xlYW5bXSA9IFtdO1xuICBASW5wdXQoKSBpc0VuZDogYm9vbGVhbltdID0gW107XG4gIEBJbnB1dCgpIG56VHJlZU5vZGUhOiBOelRyZWVOb2RlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGE/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlVW5NYXRjaGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek5vQW5pbWF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb24gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb24/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcD86IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZSA9ICcnO1xuICBASW5wdXQoKSBuekRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBkcmFnIHZhclxuICAgKi9cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBkcmFnUG9zID0gMjtcbiAgZHJhZ1Bvc0NsYXNzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICcwJzogJ2RyYWctb3ZlcicsXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcbiAgfTtcbiAgc2hvd0luZGljYXRvciA9IGZhbHNlO1xuICAvKipcbiAgICogZGVmYXVsdCBzZXRcbiAgICovXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICAvLyB0byBoaWRlIHVubWF0Y2hlZCBub2Rlc1xuICAgIHJldHVybiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgdGhpcy5uekhpZGVVbk1hdGNoZWQgJiYgIXRoaXMuaXNNYXRjaGVkICYmICF0aGlzLmlzRXhwYW5kZWQgJiYgdGhpcy5jYW5IaWRlID8gJ25vbmUnIDogJyc7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlck9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0xlYWY7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlckNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzTGVhZjtcbiAgfVxuXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RNb2RlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xsYXBzZSBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMuaXNMZWFmKSB7XG4gICAgICAvLyBzZXQgYXN5bmMgc3RhdGVcbiAgICAgIGlmICh0aGlzLm56QXN5bmNEYXRhICYmIHRoaXMubnpUcmVlTm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIXRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZCghdGhpcy5pc0V4cGFuZGVkKTtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgY2xpY2tTZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZDtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekNsaWNrLmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekRibENsaWNrLmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcmV0dXJuIGlmIG5vZGUgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuaXNEaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkO1xuICAgIHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzLm56VHJlZU5vZGUpO1xuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcbiAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZHJhZ0NsYXNzID0gWydkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInLCAnZHJvcC10YXJnZXQnXTtcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGRyYWcgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLm56VHJlZU5vZGUua2V5ISk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGVtcHR5XG4gICAgfVxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdzdGFydCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcmVzZXQgcG9zaXRpb25cbiAgICB0aGlzLnNob3dJbmRpY2F0b3IgPSB0aGlzLm56VHJlZU5vZGUua2V5ICE9PSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk/LmtleTtcbiAgICB0aGlzLnJlbmRlckluZGljYXRvcigyKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgdGhpcy5uek9uRHJhZ0VudGVyLmVtaXQoZXZlbnROZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcbiAgICBpZiAodGhpcy5kcmFnUG9zICE9PSBkcm9wUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcbiAgICAgIHRoaXMucmVuZGVySW5kaWNhdG9yKGRyb3BQb3NpdGlvbik7XG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5pc0xlYWYpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzW3RoaXMuZHJhZ1Bvc10pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZHJvcC10YXJnZXQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnb3ZlcicsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJlbmRlckluZGljYXRvcigyKTtcbiAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGV2ZW50TmV4dCk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5zaG93SW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgaWYgKCFub2RlIHx8IChub2RlICYmIG5vZGUua2V5ID09PSB0aGlzLm56VHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMuaXNMZWFmKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgY29uc3QgZHJhZ0VuZEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy5uelRyZWVOb2RlLCBlKTtcbiAgICAgIGlmICh0aGlzLm56QmVmb3JlRHJvcCkge1xuICAgICAgICB0aGlzLm56QmVmb3JlRHJvcCh7XG4gICAgICAgICAgZHJhZ05vZGU6IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSEsXG4gICAgICAgICAgbm9kZTogdGhpcy5uelRyZWVOb2RlLFxuICAgICAgICAgIHBvczogdGhpcy5kcmFnUG9zXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5uek9uRHJvcC5lbWl0KGRyb3BFdmVudCk7XG4gICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRyYWdFbmRFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VHJlZU5vZGUpIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLm56VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXG4gICAgICBpZiAoIXRoaXMubnpCZWZvcmVEcm9wKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChldmVudE5leHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBkcmFnZ2luZyBldmVudHMuXG4gICAqL1xuICBoYW5kRHJhZ0V2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm56RHJhZ2dhYmxlKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5kZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KG5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4obmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50PihuYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ092ZXIoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50PihuYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdMZWF2ZShlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KG5hdGl2ZUVsZW1lbnQsICdkcm9wJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4obmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VuZChlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZU5vZGUuY29tcG9uZW50ID0gdGhpcztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICBjb25zdCB7IG56RHJhZ2dhYmxlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekRyYWdnYWJsZSkge1xuICAgICAgdGhpcy5oYW5kRHJhZ0V2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbmRpY2F0b3IoZHJvcFBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5zaG93SW5kaWNhdG9yID0gZHJvcFBvc2l0aW9uICE9PSAyO1xuICAgICAgaWYgKHRoaXMubnpUcmVlTm9kZS5rZXkgPT09IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKT8ua2V5IHx8IChkcm9wUG9zaXRpb24gPT09IDAgJiYgdGhpcy5pc0xlYWYpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=