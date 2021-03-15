/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzTreeNode } from './nz-tree-base-node';
import { flattenTreeData, isCheckDisabled, isInArray } from './nz-tree-base-util';
import * as ɵngcc0 from '@angular/core';
export class NzTreeBaseService {
    constructor() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.flattenNodes$ = new BehaviorSubject([]);
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
    }
    flattenTreeData(nzNodes, expandedKeys = []) {
        this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map(item => item.data));
    }
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * set drag node
     */
    setSelectedNode(node) {
        this.selectedNode = node;
    }
    /**
     * set node selected status
     */
    setNodeActive(node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(n => {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            });
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node, isMultiple = false) {
        const index = this.getIndexOfArray(this.selectedNodeList, node.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
        }
    }
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node) {
        const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
        }
    }
    setCheckedNodeList(node) {
        const index = this.getIndexOfArray(this.checkedNodeList, node.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type = 'check') {
        let resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                const isIgnore = (node) => {
                    const parentNode = node.getParentNode();
                    if (parentNode) {
                        if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore(parentNode);
                        }
                    }
                    return false;
                };
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    }
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        const index = this.getIndexOfArray(this.expandedNodeList, node.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    }
    setMatchedNodeList(node) {
        const index = this.getIndexOfArray(this.matchedNodeList, node.key);
        if (node.isMatched && index === -1) {
            this.matchedNodeList.push(node);
        }
        else if (!node.isMatched && index > -1) {
            this.matchedNodeList.splice(index, 1);
        }
    }
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node, isCheckStrictly);
        });
    }
    // reset other node checked state based current node
    conduct(node, isCheckStrictly = false) {
        const isChecked = node.isChecked;
        if (node && !isCheckStrictly) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * flush after delete node
     */
    afterRemove(nodes) {
        // to reset selectedNodeList & expandedNodeList
        const loopNode = (node) => {
            // remove selected node
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
            // remove expanded node
            this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
            // remove checked node
            this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
            if (node.children) {
                node.children.forEach(child => {
                    loopNode(child);
                });
            }
        };
        nodes.forEach(n => {
            loopNode(n);
        });
        this.refreshCheckState(this.isCheckStrictly);
    }
    /**
     * drag event
     */
    refreshDragNode(node) {
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(child => {
                this.refreshDragNode(child);
            });
        }
    }
    // reset node level
    resetNodeLevel(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.children) {
            this.resetNodeLevel(child);
        }
    }
    calcDropPosition(event) {
        const { clientY } = event;
        // to fix firefox undefined
        const { top, bottom, height } = event.target.getBoundingClientRect();
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        const treeService = targetNode.treeService;
        const targetParent = targetNode.getParentNode();
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
        }
        else {
            this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    const parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.resetNodeLevel(this.rootNodes[targetIndex]);
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(child => {
            if (!child.treeService) {
                child.service = treeService;
            }
            this.refreshDragNode(child);
        });
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName, node, event) {
        const emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map(n => n.key) });
                break;
            case 'check':
                const checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map(n => n.key) });
                break;
        }
        return emitStructure;
    }
    /**
     * New functions for flatten nodes
     */
    getIndexOfArray(list, key) {
        return list.findIndex(v => v.key === key);
    }
    /**
     * Render by nzCheckedKeys
     * When keys equals null, just render with checkStrictly
     * @param keys
     * @param checkStrictly
     */
    conductCheck(keys, checkStrictly) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (keys === null) {
                    // render tree if no default checked keys found
                    node.isChecked = !!node.origin.checked;
                }
                else {
                    if (isInArray(node.key, keys || [])) {
                        node.isChecked = true;
                        node.isHalfChecked = false;
                    }
                    else {
                        node.isChecked = false;
                        node.isHalfChecked = false;
                    }
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(this.rootNodes);
        this.refreshCheckState(checkStrictly);
    }
    conductExpandedKeys(keys = []) {
        const expandedKeySet = new Set(keys === true ? [] : keys);
        this.expandedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
                if (node.isExpanded) {
                    this.setExpandedNodeList(node);
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(this.rootNodes);
    }
    conductSelectedKeys(keys, isMulti) {
        this.selectedNodeList.forEach(node => (node.isSelected = false));
        this.selectedNodeList = [];
        const calc = (nodes) => {
            return nodes.every(node => {
                if (isInArray(node.key, keys)) {
                    node.isSelected = true;
                    this.setSelectedNodeList(node);
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            });
        };
        calc(this.rootNodes);
    }
    /**
     * Expand parent nodes by child node
     * @param node
     */
    expandNodeAllParentBySearch(node) {
        const calc = (n) => {
            if (n) {
                n.canHide = false;
                n.setExpanded(true);
                this.setExpandedNodeList(n);
                if (n.getParentNode()) {
                    return calc(n.getParentNode());
                }
            }
        };
        calc(node.getParentNode());
    }
}
NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) { return new (t || NzTreeBaseService)(); };
NzTreeBaseService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzTreeBaseService, factory: NzTreeBaseService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeBaseService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS90cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFJbEYsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QixJQUZBO0FBQ0UsUUFDQSxvQkFBZSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFFLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLFFBQ0Usb0JBQWUsR0FBWSxLQUFLLENBQUM7QUFDbkMsUUFBRSxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQzlCLFFBQ0UsY0FBUyxHQUFpQixFQUFFLENBQUM7QUFDL0IsUUFBRSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELFFBQUUscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztBQUN0QyxRQUFFLHFCQUFnQixHQUFpQixFQUFFLENBQUM7QUFDdEMsUUFBRSxvQkFBZSxHQUFpQixFQUFFLENBQUM7QUFDckMsUUFBRSx3QkFBbUIsR0FBaUIsRUFBRSxDQUFDO0FBQ3pDLFFBQUUsb0JBQWUsR0FBaUIsRUFBRSxDQUFDO0FBQ3JDLElBK2ZBLENBQUM7QUFDRCxJQS9mRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsUUFBUSxDQUFDLE9BQXFCO0FBQUksUUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsZ0JB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QUFvQixFQUFRLEVBQUU7QUFDaEQsWUFBTSxJQUFJLENBQUMsRUFBRTtBQUNiLGdCQUFRLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzFCLGdCQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFRLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO0FBQy9CLG9CQUFVLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFFBQUksQ0FBQyxDQUFDO0FBQ04sUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0g7NkNBOWdCQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56VHJlZU5vZGVLZXkgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcbmltcG9ydCB7IGZsYXR0ZW5UcmVlRGF0YSwgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtYmFzZS11dGlsJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZVNlcnZpY2Uge1xuICBEUkFHX1NJREVfUkFOR0UgPSAwLjI1O1xuICBEUkFHX01JTl9HQVAgPSAyO1xuXG4gIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkTm9kZSE6IE56VHJlZU5vZGU7XG4gIHJvb3ROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIGZsYXR0ZW5Ob2RlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56VHJlZU5vZGVbXT4oW10pO1xuICBzZWxlY3RlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgZXhwYW5kZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGhhbGZDaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBtYXRjaGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiByZXNldCB0cmVlIG5vZGVzIHdpbGwgY2xlYXIgZGVmYXVsdCBub2RlIGxpc3RcbiAgICovXG4gIGluaXRUcmVlKG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIHRoaXMucm9vdE5vZGVzID0gbnpOb2RlcztcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XG4gIH1cblxuICBmbGF0dGVuVHJlZURhdGEobnpOb2RlczogTnpUcmVlTm9kZVtdLCBleHBhbmRlZEtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IHZvaWQge1xuICAgIHRoaXMuZmxhdHRlbk5vZGVzJC5uZXh0KGZsYXR0ZW5UcmVlRGF0YShuek5vZGVzLCBleHBhbmRlZEtleXMpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWROb2RlKCk6IE56VHJlZU5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGU7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHNvbWUgbGlzdFxuICAgKi9cbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ3NlbGVjdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBjaGVja2VkIG5vZGVzXG4gICAqL1xuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdjaGVjaycpO1xuICB9XG5cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2hhbGZDaGVjaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2V4cGFuZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBzZWFyY2ggbWF0Y2hlZCBub2Rlc1xuICAgKi9cbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnbWF0Y2gnKTtcbiAgfVxuXG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBkcmFnIG5vZGVcbiAgICovXG4gIHNldFNlbGVjdGVkTm9kZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBub2RlIHNlbGVjdGVkIHN0YXR1c1xuICAgKi9cbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUgJiYgbm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcbiAgICAgICAgaWYgKG5vZGUua2V5ICE9PSBuLmtleSkge1xuICAgICAgICAgIC8vIHJlc2V0IG90aGVyIG5vZGVzXG4gICAgICAgICAgbi5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2luZ2xlIG1vZGU6IHJlbW92ZSBwcmUgbm9kZVxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgfVxuICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLmlzTXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBvciByZW1vdmUgbm9kZSB0byBzZWxlY3RlZE5vZGVMaXN0XG4gICAqL1xuICBzZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5zZWxlY3RlZE5vZGVMaXN0LCBub2RlLmtleSk7XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbbm9kZV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbi5rZXkgIT09IG5vZGUua2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgc2V0SGFsZkNoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZBcnJheSh0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QsIG5vZGUua2V5KTtcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xuICAgIH1cbiAgfVxuXG4gIHNldENoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZBcnJheSh0aGlzLmNoZWNrZWROb2RlTGlzdCwgbm9kZS5rZXkpO1xuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb25kdWN0IGNoZWNrZWQvc2VsZWN0ZWQvZXhwYW5kZWQga2V5c1xuICAgKi9cbiAgY29uZHVjdE5vZGVTdGF0ZSh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcbiAgICBsZXQgcmVzdWx0Tm9kZXNMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleHBhbmQnOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLm1hdGNoZWROb2RlTGlzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0O1xuICAgICAgICBjb25zdCBpc0lnbm9yZSA9IChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbi5rZXkgPT09IHBhcmVudE5vZGUua2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzSWdub3JlKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vIG1lcmdlIGNoZWNrZWRcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbHRlcihuID0+ICFpc0lnbm9yZShuKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYWxmQ2hlY2snOlxuICAgICAgICBpZiAoIXRoaXMuaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Tm9kZXNMaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgc2V0RXhwYW5kZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5leHBhbmRlZE5vZGVMaXN0LCBub2RlLmtleSk7XG4gICAgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBzZXRNYXRjaGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5tYXRjaGVkTm9kZUxpc3QsIG5vZGUua2V5KTtcbiAgICBpZiAobm9kZS5pc01hdGNoZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNNYXRjaGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIHN0YXRlXG4gICAqIEBwYXJhbSBpc0NoZWNrU3RyaWN0bHlcbiAgICovXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5jb25kdWN0KG5vZGUsIGlzQ2hlY2tTdHJpY3RseSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXNldCBvdGhlciBub2RlIGNoZWNrZWQgc3RhdGUgYmFzZWQgY3VycmVudCBub2RlXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSwgaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBub2RlLmlzQ2hlY2tlZDtcbiAgICBpZiAobm9kZSAmJiAhaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdERvd24obm9kZSwgaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxuICAgKiAy44CBY2hpbGRyZW4gYWxsIGNoZWNrZWQsIHBhcmVudCBjaGVja2VkXG4gICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXG4gICAqL1xuICBjb25kdWN0VXAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGRyZW4uZXZlcnkoY2hpbGQgPT4gaXNDaGVja0Rpc2FibGVkKGNoaWxkKSB8fCAoIWNoaWxkLmlzSGFsZkNoZWNrZWQgJiYgY2hpbGQuaXNDaGVja2VkKSkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLmlzSGFsZkNoZWNrZWQgfHwgY2hpbGQuaXNDaGVja2VkKSkge1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuc2V0SGFsZkNoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBjaGlsZCBjaGVjayBzdGF0ZVxuICAgKi9cbiAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChub2RlKSkge1xuICAgICAgbm9kZS5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XG4gICAgICAgIHRoaXMuY29uZHVjdERvd24obiwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZsdXNoIGFmdGVyIGRlbGV0ZSBub2RlXG4gICAqL1xuICBhZnRlclJlbW92ZShub2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgLy8gdG8gcmVzZXQgc2VsZWN0ZWROb2RlTGlzdCAmIGV4cGFuZGVkTm9kZUxpc3RcbiAgICBjb25zdCBsb29wTm9kZSA9IChub2RlOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAvLyByZW1vdmUgc2VsZWN0ZWQgbm9kZVxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICAvLyByZW1vdmUgZXhwYW5kZWQgbm9kZVxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICAvLyByZW1vdmUgY2hlY2tlZCBub2RlXG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGxvb3BOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgbG9vcE5vZGUobik7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZSh0aGlzLmlzQ2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKi9cbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIHVudGlsIHJvb3RcbiAgICAgIHRoaXMuY29uZHVjdFVwKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZXNldCBub2RlIGxldmVsXG4gIHJlc2V0Tm9kZUxldmVsKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5sZXZlbCA9IDA7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY0Ryb3BQb3NpdGlvbihldmVudDogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50O1xuICAgIC8vIHRvIGZpeCBmaXJlZm94IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIGhlaWdodCB9ID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xuXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogZHJvcFxuICAgKiAwOiBpbm5lciAtMTogcHJlIDE6IG5leHRcbiAgICovXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0Tm9kZSB8fCBkcmFnUG9zID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0cmVlU2VydmljZSA9IHRhcmdldE5vZGUudHJlZVNlcnZpY2U7XG4gICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgY29uc3QgaXNTZWxlY3RlZFJvb3ROb2RlID0gdGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgIC8vIHJlbW92ZSB0aGUgZHJhZ05vZGVcbiAgICBpZiAoaXNTZWxlY3RlZFJvb3ROb2RlKSB7XG4gICAgICBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4gPSBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4uZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZXMuZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFt0aGlzLnNlbGVjdGVkTm9kZV0pO1xuICAgICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKHRhcmdldE5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNvbnN0IHRJbmRleCA9IGRyYWdQb3MgPT09IDEgPyAxIDogMDtcbiAgICAgICAgaWYgKHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHRhcmdldFBhcmVudC5hZGRDaGlsZHJlbihbdGhpcy5zZWxlY3RlZE5vZGVdLCB0YXJnZXRQYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0YXJnZXROb2RlKSArIHRJbmRleCk7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuc2VsZWN0ZWROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbChwYXJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xuICAgICAgICAgIC8vIEluc2VydCByb290IG5vZGUuXG4gICAgICAgICAgdGhpcy5yb290Tm9kZXMuc3BsaWNlKHRhcmdldEluZGV4LCAwLCB0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgdGhpcy5yb290Tm9kZXNbdGFyZ2V0SW5kZXhdLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGhpcy5yb290Tm9kZXNbdGFyZ2V0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZmx1c2ggYWxsIG5vZGVzXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAoIWNoaWxkLnRyZWVTZXJ2aWNlKSB7XG4gICAgICAgIGNoaWxkLnNlcnZpY2UgPSB0cmVlU2VydmljZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmcmVzaERyYWdOb2RlKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IFN0cnVjdHVyZVxuICAgKiBldmVudE5hbWVcbiAgICogbm9kZVxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxuICAgKiBkcmFnTm9kZVxuICAgKi9cbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUgfCBudWxsLCBldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCB8IG51bGwpOiBOekZvcm1hdEVtaXRFdmVudCB7XG4gICAgY29uc3QgZW1pdFN0cnVjdHVyZTogTnpGb3JtYXRFbWl0RXZlbnQgPSB7XG4gICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBldmVudDogZXZlbnRcbiAgICB9O1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgZHJhZ05vZGU6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlKCkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgY2FzZSAnZGJsY2xpY2snOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgc2VsZWN0ZWRLZXlzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogdGhpcy5zZWxlY3RlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogdGhpcy5zZWxlY3RlZE5vZGVMaXN0Lm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgIGNvbnN0IGNoZWNrZWROb2RlTGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBjaGVja2VkS2V5czogY2hlY2tlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IGNoZWNrZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IGNoZWNrZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG1hdGNoZWRLZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBrZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleHBhbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZW1pdFN0cnVjdHVyZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXcgZnVuY3Rpb25zIGZvciBmbGF0dGVuIG5vZGVzXG4gICAqL1xuXG4gIGdldEluZGV4T2ZBcnJheShsaXN0OiBOelRyZWVOb2RlW10sIGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbGlzdC5maW5kSW5kZXgodiA9PiB2LmtleSA9PT0ga2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYnkgbnpDaGVja2VkS2V5c1xuICAgKiBXaGVuIGtleXMgZXF1YWxzIG51bGwsIGp1c3QgcmVuZGVyIHdpdGggY2hlY2tTdHJpY3RseVxuICAgKiBAcGFyYW0ga2V5c1xuICAgKiBAcGFyYW0gY2hlY2tTdHJpY3RseVxuICAgKi9cbiAgY29uZHVjdENoZWNrKGtleXM6IE56VHJlZU5vZGVLZXlbXSB8IG51bGwsIGNoZWNrU3RyaWN0bHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKGtleXMgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyByZW5kZXIgdHJlZSBpZiBubyBkZWZhdWx0IGNoZWNrZWQga2V5cyBmb3VuZFxuICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gISFub2RlLm9yaWdpbi5jaGVja2VkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGtleXMgfHwgW10pKSB7XG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FsYyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjYWxjKHRoaXMucm9vdE5vZGVzKTtcbiAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKGNoZWNrU3RyaWN0bHkpO1xuICB9XG5cbiAgY29uZHVjdEV4cGFuZGVkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10gfCB0cnVlID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBleHBhbmRlZEtleVNldCA9IG5ldyBTZXQoa2V5cyA9PT0gdHJ1ZSA/IFtdIDoga2V5cyk7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBub2RlLnNldEV4cGFuZGVkKGtleXMgPT09IHRydWUgfHwgZXhwYW5kZWRLZXlTZXQuaGFzKG5vZGUua2V5KSB8fCBub2RlLmlzRXhwYW5kZWQgPT09IHRydWUpO1xuICAgICAgICBpZiAobm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGModGhpcy5yb290Tm9kZXMpO1xuICB9XG5cbiAgY29uZHVjdFNlbGVjdGVkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10sIGlzTXVsdGk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChub2RlID0+IChub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIG5vZGVzLmV2ZXJ5KG5vZGUgPT4ge1xuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBrZXlzKSkge1xuICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICAgIGlmICghaXNNdWx0aSkge1xuICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgbXVsdGkgc2VsZWN0XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBSZWN1cnNpb25cbiAgICAgICAgICByZXR1cm4gY2FsYyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY2FsYyh0aGlzLnJvb3ROb2Rlcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kIHBhcmVudCBub2RlcyBieSBjaGlsZCBub2RlXG4gICAqIEBwYXJhbSBub2RlXG4gICAqL1xuICBleHBhbmROb2RlQWxsUGFyZW50QnlTZWFyY2gobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGNhbGMgPSAobjogTnpUcmVlTm9kZSB8IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIG4uY2FuSGlkZSA9IGZhbHNlO1xuICAgICAgICBuLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobik7XG4gICAgICAgIGlmIChuLmdldFBhcmVudE5vZGUoKSkge1xuICAgICAgICAgIHJldHVybiBjYWxjKG4uZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY2FsYyhub2RlLmdldFBhcmVudE5vZGUoKSk7XG4gIH1cbn1cbiJdfQ==