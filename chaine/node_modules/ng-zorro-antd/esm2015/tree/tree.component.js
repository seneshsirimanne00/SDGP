import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { flattenTreeData, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTreeService } from './tree.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/tree';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from '@angular/cdk/scrolling';
import * as ɵngcc7 from './tree-node.component';

const _c0 = ["nzTreeTemplate"];
function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, node_r5));
} }
function NzTreeComponent_cdk_virtual_scroll_viewport_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 6);
    ɵngcc0.ɵɵtemplate(1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template, 2, 4, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r0.nzVirtualHeight);
    ɵngcc0.ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r0.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r0.nzSelectMode);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r0.nzVirtualItemSize)("minBufferPx", ctx_r0.nzVirtualMinBufferPx)("maxBufferPx", ctx_r0.nzVirtualMaxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r0.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r0.trackByFlattenNode);
} }
function NzTreeComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTreeComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r8 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, node_r8));
} }
function NzTreeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzTreeComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r1.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r1.nzSelectMode);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r1.beforeInit || (ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r1.nzFlattenNodes.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.nzFlattenNodes)("ngForTrackBy", ctx_r1.trackByFlattenNode);
} }
function NzTreeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-tree-node", 11);
    ɵngcc0.ɵɵlistener("nzExpandChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzExpandChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.eventTriggerChanged($event); })("nzClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.eventTriggerChanged($event); })("nzDblClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzDblClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.eventTriggerChanged($event); })("nzContextMenu", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzContextMenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.eventTriggerChanged($event); })("nzCheckBoxChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.eventTriggerChanged($event); })("nzOnDragStart", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.eventTriggerChanged($event); })("nzOnDragEnter", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.eventTriggerChanged($event); })("nzOnDragOver", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragOver_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.eventTriggerChanged($event); })("nzOnDragLeave", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragLeave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.eventTriggerChanged($event); })("nzOnDragEnd", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.eventTriggerChanged($event); })("nzOnDrop", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDrop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.eventTriggerChanged($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const treeNode_r10 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", treeNode_r10.icon)("title", treeNode_r10.title)("isLoading", treeNode_r10.isLoading)("isSelected", treeNode_r10.isSelected)("isDisabled", treeNode_r10.isDisabled)("isMatched", treeNode_r10.isMatched)("isExpanded", treeNode_r10.isExpanded)("isLeaf", treeNode_r10.isLeaf)("isStart", treeNode_r10.isStart)("isEnd", treeNode_r10.isEnd)("isChecked", treeNode_r10.isChecked)("isHalfChecked", treeNode_r10.isHalfChecked)("isDisableCheckbox", treeNode_r10.isDisableCheckbox)("isSelectable", treeNode_r10.isSelectable)("canHide", treeNode_r10.canHide)("nzTreeNode", treeNode_r10)("nzSelectMode", ctx_r3.nzSelectMode)("nzShowLine", ctx_r3.nzShowLine)("nzExpandedIcon", ctx_r3.nzExpandedIcon)("nzDraggable", ctx_r3.nzDraggable)("nzCheckable", ctx_r3.nzCheckable)("nzShowExpand", ctx_r3.nzShowExpand)("nzAsyncData", ctx_r3.nzAsyncData)("nzSearchValue", ctx_r3.nzSearchValue)("nzHideUnMatched", ctx_r3.nzHideUnMatched)("nzBeforeDrop", ctx_r3.nzBeforeDrop)("nzShowIcon", ctx_r3.nzShowIcon)("nzTreeTemplate", ctx_r3.nzTreeTemplate || ctx_r3.nzTreeTemplateChild);
} }
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_MODULE_NAME = 'tree';
export class NzTreeComponent extends NzTreeBase {
    // Handle emit event end
    constructor(nzTreeService, nzConfigService, cdr, directionality, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzShowIcon = false;
        this.nzHideUnMatched = false;
        this.nzBlockNode = false;
        this.nzExpandAll = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = null;
        this.nzData = [];
        this.nzExpandedKeys = [];
        this.nzSelectedKeys = [];
        this.nzCheckedKeys = [];
        this.nzSearchValue = '';
        this.nzFlattenNodes = [];
        this.beforeInit = true;
        this.dir = 'ltr';
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
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
        this.HIDDEN_STYLE = {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        };
        this.destroy$ = new Subject();
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    writeValue(value) {
        this.handleNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Render all properties of nzTree
     * @param changes: all changes from @Input
     */
    renderTreeProperties(changes) {
        let useDefaultExpandedKeys = false;
        let expandAll = false;
        const { nzData, nzExpandedKeys, nzSelectedKeys, nzCheckedKeys, nzCheckStrictly, nzExpandAll, nzMultiple, nzSearchValue } = changes;
        if (nzExpandAll) {
            useDefaultExpandedKeys = true;
            expandAll = this.nzExpandAll;
        }
        if (nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
        if (nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (nzData) {
            this.handleNzData(this.nzData);
        }
        if (nzCheckedKeys) {
            this.handleCheckedKeys(this.nzCheckedKeys);
        }
        if (nzCheckStrictly) {
            this.handleCheckedKeys(null);
        }
        if (nzExpandedKeys || nzExpandAll) {
            useDefaultExpandedKeys = true;
            this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
        }
        if (nzSelectedKeys) {
            this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
        }
        if (nzSearchValue) {
            if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
                useDefaultExpandedKeys = false;
                this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        }
        // flatten data
        const currentExpandedKeys = this.getExpandedNodeList().map(v => v.key);
        const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
        this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
    }
    trackByFlattenNode(_, node) {
        return node.key;
    }
    // Deal with properties
    /**
     * nzData
     * @param value
     */
    handleNzData(value) {
        if (Array.isArray(value)) {
            const data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
        }
    }
    handleFlattenNodes(data, expandKeys = []) {
        this.nzTreeService.flattenTreeData(data, expandKeys);
    }
    handleCheckedKeys(keys) {
        this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
    }
    handleExpandedKeys(keys = []) {
        this.nzTreeService.conductExpandedKeys(keys);
    }
    handleSelectedKeys(keys, isMulti) {
        this.nzTreeService.conductSelectedKeys(keys, isMulti);
    }
    handleSearchValue(value, searchFunc) {
        const dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map(v => v.data);
        const checkIfMatched = (node) => {
            if (searchFunc) {
                return searchFunc(node.origin);
            }
            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
        };
        dataList.forEach(v => {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;
            if (!v.isMatched) {
                v.setExpanded(false);
                this.nzTreeService.setExpandedNodeList(v);
            }
            else {
                // expand
                this.nzTreeService.expandNodeAllParentBySearch(v);
            }
            this.nzTreeService.setMatchedNodeList(v);
        });
    }
    /**
     * Handle emit event
     * @param event
     * handle each event
     */
    eventTriggerChanged(event) {
        const node = event.node;
        switch (event.eventName) {
            case 'expand':
                this.renderTree();
                this.nzExpandChange.emit(event);
                break;
            case 'click':
                this.nzClick.emit(event);
                break;
            case 'dblclick':
                this.nzDblClick.emit(event);
                break;
            case 'contextmenu':
                this.nzContextMenu.emit(event);
                break;
            case 'check':
                // Render checked state with nodes' property `isChecked`
                this.nzTreeService.setCheckedNodeList(node);
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
                // Cause check method will rerender list, so we need recover it and next the new event to user
                const eventNext = this.nzTreeService.formatEvent('check', node, event.event);
                this.nzCheckBoxChange.emit(eventNext);
                break;
            case 'dragstart':
                // if node is expanded
                if (node.isExpanded) {
                    node.setExpanded(!node.isExpanded);
                    this.renderTree();
                }
                this.nzOnDragStart.emit(event);
                break;
            case 'dragenter':
                const selectedNode = this.nzTreeService.getSelectedNode();
                if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                    node.setExpanded(true);
                    this.renderTree();
                }
                this.nzOnDragEnter.emit(event);
                break;
            case 'dragover':
                this.nzOnDragOver.emit(event);
                break;
            case 'dragleave':
                this.nzOnDragLeave.emit(event);
                break;
            case 'dragend':
                this.nzOnDragEnd.emit(event);
                break;
            case 'drop':
                this.renderTree();
                this.nzOnDrop.emit(event);
                break;
        }
    }
    /**
     * Click expand icon
     */
    renderTree() {
        this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map(v => v.key));
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.nzFlattenNodes = data;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnChanges(changes) {
        this.renderTreeProperties(changes);
    }
    ngAfterViewInit() {
        this.beforeInit = false;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) { return new (t || NzTreeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzNoAnimationDirective, 9)); };
NzTreeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeComponent, selectors: [["nz-tree"]], contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true, CdkVirtualScrollViewport);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, hostVars: 20, hostBindings: function NzTreeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-rtl", ctx.dir === "rtl")("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
    } }, inputs: { nzShowIcon: "nzShowIcon", nzHideUnMatched: "nzHideUnMatched", nzBlockNode: "nzBlockNode", nzExpandAll: "nzExpandAll", nzSelectMode: "nzSelectMode", nzCheckStrictly: "nzCheckStrictly", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzDraggable: "nzDraggable", nzMultiple: "nzMultiple", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualHeight: "nzVirtualHeight", nzData: "nzData", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", nzSearchValue: "nzSearchValue", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzSearchFunc: "nzSearchFunc" }, outputs: { nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", nzSearchValueChange: "nzSearchValueChange", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTree"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzTreeService,
            {
                provide: NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzTreeComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 5, consts: [["role", "tree"], [3, "ngStyle"], [1, "ant-tree-list"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height", 4, "ngIf"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation", 4, "ngIf"], ["nodeTemplate", ""], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["builtin", "", 3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate", "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop"]], template: function NzTreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "input", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵtemplate(4, NzTreeComponent_cdk_virtual_scroll_viewport_4_Template, 2, 11, "cdk-virtual-scroll-viewport", 3);
        ɵngcc0.ɵɵtemplate(5, NzTreeComponent_div_5_Template, 2, 9, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzTreeComponent_ng_template_6_Template, 1, 28, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.HIDDEN_STYLE);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-select-tree-list", ctx.nzSelectMode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzVirtualHeight);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzVirtualHeight);
    } }, directives: [ɵngcc5.NgStyle, ɵngcc5.NgIf, ɵngcc6.CdkVirtualScrollViewport, ɵngcc6.CdkFixedSizeVirtualScroll, ɵngcc6.CdkVirtualForOf, ɵngcc5.NgTemplateOutlet, ɵngcc4.NzNoAnimationDirective, ɵngcc5.NgForOf, ɵngcc7.NzTreeNodeBuiltinComponent], encapsulation: 2, data: { animation: [treeCollapseMotion] }, changeDetection: 0 });
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzBlockNode: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualHeight: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzData: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzCheckedKeys: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzSearchFunc: [{ type: Input }],
    nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }],
    cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport },] }],
    nzExpandedKeysChange: [{ type: Output }],
    nzSelectedKeysChange: [{ type: Output }],
    nzCheckedKeysChange: [{ type: Output }],
    nzSearchValueChange: [{ type: Output }],
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
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                animations: [treeCollapseMotion],
                template: `
    <div role="tree">
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div class="ant-tree-list" [class.ant-select-tree-list]="nzSelectMode">
      <div>
        <cdk-virtual-scroll-viewport
          *ngIf="nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="!nzSelectMode"
          [itemSize]="nzVirtualItemSize"
          [minBufferPx]="nzVirtualMinBufferPx"
          [maxBufferPx]="nzVirtualMaxBufferPx"
          [style.height]="nzVirtualHeight"
        >
          <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </cdk-virtual-scroll-viewport>

        <div
          *ngIf="!nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="!nzSelectMode"
          [@.disabled]="beforeInit || noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [@treeCollapseMotion]="nzFlattenNodes.length"
        >
          <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        builtin
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      ></nz-tree-node>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-tree]': `nzSelectMode`,
                    '[class.ant-select-tree-show-line]': `nzSelectMode && nzShowLine`,
                    '[class.ant-select-tree-icon-hide]': `nzSelectMode && !nzShowIcon`,
                    '[class.ant-select-tree-block-node]': `nzSelectMode && nzBlockNode`,
                    '[class.ant-tree]': `!nzSelectMode`,
                    '[class.ant-tree-rtl]': `dir === 'rtl'`,
                    '[class.ant-tree-show-line]': `!nzSelectMode && nzShowLine`,
                    '[class.ant-tree-icon-hide]': `!nzSelectMode && !nzShowIcon`,
                    '[class.ant-tree-block-node]': `!nzSelectMode && nzBlockNode`,
                    '[class.draggable-tree]': `nzDraggable`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeBaseService }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc4.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzShowIcon: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzBlockNode: [{
            type: Input
        }], nzExpandAll: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzDraggable: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzVirtualItemSize: [{
            type: Input
        }], nzVirtualMaxBufferPx: [{
            type: Input
        }], nzVirtualMinBufferPx: [{
            type: Input
        }], nzVirtualHeight: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzExpandedKeys: [{
            type: Input
        }], nzSelectedKeys: [{
            type: Input
        }], nzCheckedKeys: [{
            type: Input
        }], nzSearchValue: [{
            type: Input
        }], nzExpandedKeysChange: [{
            type: Output
        }], nzSelectedKeysChange: [{
            type: Output
        }], nzCheckedKeysChange: [{
            type: Output
        }], nzSearchValueChange: [{
            type: Output
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
        }], nzExpandedIcon: [{
            type: Input
        }], nzTreeTemplate: [{
            type: Input
        }], nzBeforeDrop: [{
            type: Input
        }], nzSearchFunc: [{
            type: Input
        }], nzTreeTemplateChild: [{
            type: ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFDTCxlQUFlLEVBR2YsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFJOUIsTUFBTSx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDOUM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNraXBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJlZUNvbGxhcHNlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQge1xuICBmbGF0dGVuVHJlZURhdGEsXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxuICBOekZvcm1hdEVtaXRFdmVudCxcbiAgTnpUcmVlQmFzZSxcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOelRyZWVOb2RlLFxuICBOelRyZWVOb2RlS2V5LFxuICBOelRyZWVOb2RlT3B0aW9uc1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRyZWVTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSwgdHJlZVNlcnZpY2U6IE56VHJlZVNlcnZpY2UpOiBOelRyZWVCYXNlU2VydmljZSB7XG4gIHJldHVybiBoaWdoZXJPcmRlclNlcnZpY2UgPyBoaWdoZXJPcmRlclNlcnZpY2UgOiB0cmVlU2VydmljZTtcbn1cblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICd0cmVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZScsXG4gIGV4cG9ydEFzOiAnbnpUcmVlJyxcbiAgYW5pbWF0aW9uczogW3RyZWVDb2xsYXBzZU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiByb2xlPVwidHJlZVwiPlxuICAgICAgPGlucHV0IFtuZ1N0eWxlXT1cIkhJRERFTl9TVFlMRVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC10cmVlLWxpc3RcIiBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWxpc3RdPVwibnpTZWxlY3RNb2RlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICAgKm5nSWY9XCJuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwiIW56U2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2l0ZW1TaXplXT1cIm56VmlydHVhbEl0ZW1TaXplXCJcbiAgICAgICAgICBbbWluQnVmZmVyUHhdPVwibnpWaXJ0dWFsTWluQnVmZmVyUHhcIlxuICAgICAgICAgIFttYXhCdWZmZXJQeF09XCJuelZpcnR1YWxNYXhCdWZmZXJQeFwiXG4gICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBub2RlIG9mIG56RmxhdHRlbk5vZGVzOyB0cmFja0J5OiB0cmFja0J5RmxhdHRlbk5vZGVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJub2RlVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdJZj1cIiFuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwiIW56U2VsZWN0TW9kZVwiXG4gICAgICAgICAgW0AuZGlzYWJsZWRdPVwiYmVmb3JlSW5pdCB8fCBub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtAdHJlZUNvbGxhcHNlTW90aW9uXT1cIm56RmxhdHRlbk5vZGVzLmxlbmd0aFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBub2RlIG9mIG56RmxhdHRlbk5vZGVzOyB0cmFja0J5OiB0cmFja0J5RmxhdHRlbk5vZGVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJub2RlVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNub2RlVGVtcGxhdGUgbGV0LXRyZWVOb2RlPlxuICAgICAgPG56LXRyZWUtbm9kZVxuICAgICAgICBidWlsdGluXG4gICAgICAgIFtpY29uXT1cInRyZWVOb2RlLmljb25cIlxuICAgICAgICBbdGl0bGVdPVwidHJlZU5vZGUudGl0bGVcIlxuICAgICAgICBbaXNMb2FkaW5nXT1cInRyZWVOb2RlLmlzTG9hZGluZ1wiXG4gICAgICAgIFtpc1NlbGVjdGVkXT1cInRyZWVOb2RlLmlzU2VsZWN0ZWRcIlxuICAgICAgICBbaXNEaXNhYmxlZF09XCJ0cmVlTm9kZS5pc0Rpc2FibGVkXCJcbiAgICAgICAgW2lzTWF0Y2hlZF09XCJ0cmVlTm9kZS5pc01hdGNoZWRcIlxuICAgICAgICBbaXNFeHBhbmRlZF09XCJ0cmVlTm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgW2lzTGVhZl09XCJ0cmVlTm9kZS5pc0xlYWZcIlxuICAgICAgICBbaXNTdGFydF09XCJ0cmVlTm9kZS5pc1N0YXJ0XCJcbiAgICAgICAgW2lzRW5kXT1cInRyZWVOb2RlLmlzRW5kXCJcbiAgICAgICAgW2lzQ2hlY2tlZF09XCJ0cmVlTm9kZS5pc0NoZWNrZWRcIlxuICAgICAgICBbaXNIYWxmQ2hlY2tlZF09XCJ0cmVlTm9kZS5pc0hhbGZDaGVja2VkXCJcbiAgICAgICAgW2lzRGlzYWJsZUNoZWNrYm94XT1cInRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94XCJcbiAgICAgICAgW2lzU2VsZWN0YWJsZV09XCJ0cmVlTm9kZS5pc1NlbGVjdGFibGVcIlxuICAgICAgICBbY2FuSGlkZV09XCJ0cmVlTm9kZS5jYW5IaWRlXCJcbiAgICAgICAgW256VHJlZU5vZGVdPVwidHJlZU5vZGVcIlxuICAgICAgICBbbnpTZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgICBbbnpFeHBhbmRlZEljb25dPVwibnpFeHBhbmRlZEljb25cIlxuICAgICAgICBbbnpEcmFnZ2FibGVdPVwibnpEcmFnZ2FibGVcIlxuICAgICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxuICAgICAgICBbbnpTaG93RXhwYW5kXT1cIm56U2hvd0V4cGFuZFwiXG4gICAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXG4gICAgICAgIFtuelNlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxuICAgICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cIm56SGlkZVVuTWF0Y2hlZFwiXG4gICAgICAgIFtuekJlZm9yZURyb3BdPVwibnpCZWZvcmVEcm9wXCJcbiAgICAgICAgW256U2hvd0ljb25dPVwibnpTaG93SWNvblwiXG4gICAgICAgIFtuelRyZWVUZW1wbGF0ZV09XCJuelRyZWVUZW1wbGF0ZSB8fCBuelRyZWVUZW1wbGF0ZUNoaWxkXCJcbiAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNsaWNrKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekRibENsaWNrKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNvbnRleHRNZW51KT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNoZWNrQm94Q2hhbmdlKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ1N0YXJ0KT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ0VudGVyKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ092ZXIpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnTGVhdmUpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnRW5kKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJvcCk9XCJldmVudFRyaWdnZXJDaGFuZ2VkKCRldmVudClcIlxuICAgICAgPjwvbnotdHJlZS1ub2RlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBOelRyZWVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBOelRyZWVTZXJ2aWNlXVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZV0nOiBgbnpTZWxlY3RNb2RlYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zaG93LWxpbmVdJzogYG56U2VsZWN0TW9kZSAmJiBuelNob3dMaW5lYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1pY29uLWhpZGVdJzogYG56U2VsZWN0TW9kZSAmJiAhbnpTaG93SWNvbmAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtYmxvY2stbm9kZV0nOiBgbnpTZWxlY3RNb2RlICYmIG56QmxvY2tOb2RlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlXSc6IGAhbnpTZWxlY3RNb2RlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1zaG93LWxpbmVdJzogYCFuelNlbGVjdE1vZGUgJiYgbnpTaG93TGluZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1pY29uLWhpZGVdJzogYCFuelNlbGVjdE1vZGUgJiYgIW56U2hvd0ljb25gLFxuICAgICdbY2xhc3MuYW50LXRyZWUtYmxvY2stbm9kZV0nOiBgIW56U2VsZWN0TW9kZSAmJiBuekJsb2NrTm9kZWAsXG4gICAgJ1tjbGFzcy5kcmFnZ2FibGUtdHJlZV0nOiBgbnpEcmFnZ2FibGVgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0ljb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZVVuTWF0Y2hlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCbG9ja05vZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RXhwYW5kQWxsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNlbGVjdE1vZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2hlY2tTdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dMaW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBc3luY0RhdGE6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RHJhZ2dhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek11bHRpcGxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKCkgbnpTaG93SWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKCkgbnpCbG9ja05vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb24/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQElucHV0KCkgbnpWaXJ0dWFsSXRlbVNpemUgPSAyODtcbiAgQElucHV0KCkgbnpWaXJ0dWFsTWF4QnVmZmVyUHggPSA1MDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMjg7XG4gIEBJbnB1dCgpIG56VmlydHVhbEhlaWdodDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcD86IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpEYXRhOiBOelRyZWVOb2RlT3B0aW9uc1tdIHwgTnpUcmVlTm9kZVtdID0gW107XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWxlY3RlZEtleXM6IE56VHJlZU5vZGVLZXlbXSA9IFtdO1xuICBASW5wdXQoKSBuekNoZWNrZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG56U2VhcmNoRnVuYz86IChub2RlOiBOelRyZWVOb2RlT3B0aW9ucykgPT4gYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkITogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KSBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQhOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIG56RmxhdHRlbk5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgYmVmb3JlSW5pdCA9IHRydWU7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgSElEREVOX1NUWUxFID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwXG4gIH07XG5cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVOekRhdGEodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYWxsIHByb3BlcnRpZXMgb2YgbnpUcmVlXG4gICAqIEBwYXJhbSBjaGFuZ2VzOiBhbGwgY2hhbmdlcyBmcm9tIEBJbnB1dFxuICAgKi9cbiAgcmVuZGVyVHJlZVByb3BlcnRpZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGxldCB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID0gZmFsc2U7XG4gICAgbGV0IGV4cGFuZEFsbCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbnpEYXRhLCBuekV4cGFuZGVkS2V5cywgbnpTZWxlY3RlZEtleXMsIG56Q2hlY2tlZEtleXMsIG56Q2hlY2tTdHJpY3RseSwgbnpFeHBhbmRBbGwsIG56TXVsdGlwbGUsIG56U2VhcmNoVmFsdWUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpFeHBhbmRBbGwpIHtcbiAgICAgIHVzZURlZmF1bHRFeHBhbmRlZEtleXMgPSB0cnVlO1xuICAgICAgZXhwYW5kQWxsID0gdGhpcy5uekV4cGFuZEFsbDtcbiAgICB9XG5cbiAgICBpZiAobnpNdWx0aXBsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XG4gICAgfVxuXG4gICAgaWYgKG56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgIH1cblxuICAgIGlmIChuekRhdGEpIHtcbiAgICAgIHRoaXMuaGFuZGxlTnpEYXRhKHRoaXMubnpEYXRhKTtcbiAgICB9XG5cbiAgICBpZiAobnpDaGVja2VkS2V5cykge1xuICAgICAgdGhpcy5oYW5kbGVDaGVja2VkS2V5cyh0aGlzLm56Q2hlY2tlZEtleXMpO1xuICAgIH1cblxuICAgIGlmIChuekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hlY2tlZEtleXMobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKG56RXhwYW5kZWRLZXlzIHx8IG56RXhwYW5kQWxsKSB7XG4gICAgICB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGFuZGxlRXhwYW5kZWRLZXlzKGV4cGFuZEFsbCB8fCB0aGlzLm56RXhwYW5kZWRLZXlzKTtcbiAgICB9XG5cbiAgICBpZiAobnpTZWxlY3RlZEtleXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0ZWRLZXlzKHRoaXMubnpTZWxlY3RlZEtleXMsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgfVxuXG4gICAgaWYgKG56U2VhcmNoVmFsdWUpIHtcbiAgICAgIGlmICghKG56U2VhcmNoVmFsdWUuZmlyc3RDaGFuZ2UgJiYgIXRoaXMubnpTZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgdXNlRGVmYXVsdEV4cGFuZGVkS2V5cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaFZhbHVlKG56U2VhcmNoVmFsdWUuY3VycmVudFZhbHVlLCB0aGlzLm56U2VhcmNoRnVuYyk7XG4gICAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZsYXR0ZW4gZGF0YVxuICAgIGNvbnN0IGN1cnJlbnRFeHBhbmRlZEtleXMgPSB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKS5tYXAodiA9PiB2LmtleSk7XG4gICAgY29uc3QgbmV3RXhwYW5kZWRLZXlzID0gdXNlRGVmYXVsdEV4cGFuZGVkS2V5cyA/IGV4cGFuZEFsbCB8fCB0aGlzLm56RXhwYW5kZWRLZXlzIDogY3VycmVudEV4cGFuZGVkS2V5cztcbiAgICB0aGlzLmhhbmRsZUZsYXR0ZW5Ob2Rlcyh0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLCBuZXdFeHBhbmRlZEtleXMpO1xuICB9XG5cbiAgdHJhY2tCeUZsYXR0ZW5Ob2RlKF86IG51bWJlciwgbm9kZTogTnpUcmVlTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5vZGUua2V5O1xuICB9XG4gIC8vIERlYWwgd2l0aCBwcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBuekRhdGFcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBoYW5kbGVOekRhdGEodmFsdWU6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZsYXR0ZW5Ob2RlcyhkYXRhOiBOelRyZWVOb2RlW10sIGV4cGFuZEtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IHZvaWQge1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5mbGF0dGVuVHJlZURhdGEoZGF0YSwgZXhwYW5kS2V5cyk7XG4gIH1cblxuICBoYW5kbGVDaGVja2VkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RDaGVjayhrZXlzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICBoYW5kbGVFeHBhbmRlZEtleXMoa2V5czogTnpUcmVlTm9kZUtleVtdIHwgdHJ1ZSA9IFtdKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RFeHBhbmRlZEtleXMoa2V5cyk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RlZEtleXMoa2V5czogTnpUcmVlTm9kZUtleVtdLCBpc011bHRpOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RTZWxlY3RlZEtleXMoa2V5cywgaXNNdWx0aSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nLCBzZWFyY2hGdW5jPzogKG5vZGU6IE56VHJlZU5vZGVPcHRpb25zKSA9PiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YUxpc3QgPSBmbGF0dGVuVHJlZURhdGEodGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcywgdHJ1ZSkubWFwKHYgPT4gdi5kYXRhKTtcbiAgICBjb25zdCBjaGVja0lmTWF0Y2hlZCA9IChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgICBpZiAoc2VhcmNoRnVuYykge1xuICAgICAgICByZXR1cm4gc2VhcmNoRnVuYyhub2RlLm9yaWdpbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXZhbHVlIHx8ICFub2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICBkYXRhTGlzdC5mb3JFYWNoKHYgPT4ge1xuICAgICAgdi5pc01hdGNoZWQgPSBjaGVja0lmTWF0Y2hlZCh2KTtcbiAgICAgIHYuY2FuSGlkZSA9ICF2LmlzTWF0Y2hlZDtcbiAgICAgIGlmICghdi5pc01hdGNoZWQpIHtcbiAgICAgICAgdi5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXhwYW5kXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5leHBhbmROb2RlQWxsUGFyZW50QnlTZWFyY2godik7XG4gICAgICB9XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0TWF0Y2hlZE5vZGVMaXN0KHYpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBlbWl0IGV2ZW50XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBoYW5kbGUgZWFjaCBldmVudFxuICAgKi9cbiAgZXZlbnRUcmlnZ2VyQ2hhbmdlZChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgc3dpdGNoIChldmVudC5ldmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcbiAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcbiAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgLy8gUmVuZGVyIGNoZWNrZWQgc3RhdGUgd2l0aCBub2RlcycgcHJvcGVydHkgYGlzQ2hlY2tlZGBcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgaWYgKCF0aGlzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdXNlIGNoZWNrIG1ldGhvZCB3aWxsIHJlcmVuZGVyIGxpc3QsIHNvIHdlIG5lZWQgcmVjb3ZlciBpdCBhbmQgbmV4dCB0aGUgbmV3IGV2ZW50IHRvIHVzZXJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIG5vZGUsIGV2ZW50LmV2ZW50ISk7XG4gICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGV2ZW50TmV4dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgICAgLy8gaWYgbm9kZSBpcyBleHBhbmRlZFxuICAgICAgICBpZiAobm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCghbm9kZS5pc0V4cGFuZGVkKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWROb2RlICYmIHNlbGVjdGVkTm9kZS5rZXkgIT09IG5vZGUua2V5ICYmICFub2RlLmlzRXhwYW5kZWQgJiYgIW5vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnbGVhdmUnOlxuICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgZXhwYW5kIGljb25cbiAgICovXG4gIHJlbmRlclRyZWUoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGbGF0dGVuTm9kZXMoXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLFxuICAgICAgdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKHYgPT4gdi5rZXkpXG4gICAgKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICAvLyBIYW5kbGUgZW1pdCBldmVudCBlbmRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5mbGF0dGVuTm9kZXMkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLm56RmxhdHRlbk5vZGVzID0gZGF0YTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJUcmVlUHJvcGVydGllcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJlZm9yZUluaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19