/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { coerceNumberProperty } from '@angular/cdk/coercion';
/** get some code from https://github.com/angular/material2 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, of, Subject, Subscription } from 'rxjs';
import { delay, filter, first, startWith, takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean, wrapIntoObservable } from 'ng-zorro-antd/core/util';
import { NzTabChangeEvent } from './interfaces';
import { NzTabNavBarComponent } from './tab-nav-bar.component';
import { NzTabComponent, NZ_TAB_SET } from './tab.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from './tab-nav-bar.component';
import * as ɵngcc6 from './tab-nav-item.directive';
import * as ɵngcc7 from '@angular/cdk/a11y';
import * as ɵngcc8 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc9 from './tab-close-button.component';
import * as ɵngcc10 from './tab-body.component';

function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.label);
} }
function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const i_r4 = ɵngcc0.ɵɵnextContext().index; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onClose(i_r4, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("closeIcon", tab_r3.nzCloseIcon);
} }
const _c0 = function () { return { visible: true }; };
function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.clickNavItem(tab_r3, i_r4, $event); })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const tab_r3 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.contextmenuNavItem(tab_r3, $event); });
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵtemplate(2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
    ɵngcc0.ɵɵclassProp("ant-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.nzDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
    ɵngcc0.ɵɵattribute("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(18, _c0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
} }
function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-tabs-nav", 4);
    ɵngcc0.ɵɵlistener("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.nzTabListScroll.emit($event); })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.setSelectedIndex($event); })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onAdd(); });
    ɵngcc0.ɵɵtemplate(1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 19, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.tabs);
} }
function NzTabSetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("active", ctx_r1.nzSelectedIndex == i_r20 && !ctx_r1.nzHideAll)("content", tab_r19.content)("forceRender", tab_r19.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
} }
const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;
export class NzTabSetComponent {
    constructor(nzConfigService, cdr, directionality, router) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this.router = router;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzTabPosition = 'top';
        this.nzCanDeactivate = null;
        this.nzAddIcon = 'plus';
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzSize = 'default';
        this.nzAnimated = true;
        this.nzTabBarGutter = undefined;
        this.nzHideAdd = false;
        this.nzCentered = false;
        this.nzHideAll = false;
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
        this.nzTabListScroll = new EventEmitter();
        this.nzClose = new EventEmitter();
        this.nzAdd = new EventEmitter();
        // Pick up only direct descendants under ivy rendering engine
        // We filter out only the tabs that belong to this tab set in `tabs`.
        this.allTabs = new QueryList();
        // All the direct tabs for this tab set
        this.tabs = new QueryList();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.indexToSelect = 0;
        this.selectedIndex = null;
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabsSubscription = Subscription.EMPTY;
        this.canDeactivateSubscription = Subscription.EMPTY;
        this.tabSetId = nextId++;
    }
    get nzSelectedIndex() {
        return this.selectedIndex;
    }
    set nzSelectedIndex(value) {
        this.indexToSelect = coerceNumberProperty(value, null);
    }
    get position() {
        return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
    }
    get addable() {
        return this.nzType === 'editable-card' && !this.nzHideAdd;
    }
    get closable() {
        return this.nzType === 'editable-card';
    }
    get line() {
        return this.nzType === 'line';
    }
    get inkBarAnimated() {
        return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
    }
    get tabPaneAnimated() {
        return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabs.destroy();
        this.tabLabelSubscription.unsubscribe();
        this.tabsSubscription.unsubscribe();
        this.canDeactivateSubscription.unsubscribe();
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.setUpRouter();
        });
        this.subscribeToTabLabels();
        this.subscribeToAllTabChanges();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this.selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `nzSelectedIndexChange` event.
                        this.indexToSelect = this.selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this.selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex == null;
            if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                if (!isFirstRun) {
                    this.nzSelectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this.selectedIndex;
            }
        });
        if (this.selectedIndex !== indexToSelect) {
            this.selectedIndex = indexToSelect;
            this.cdr.markForCheck();
        }
    }
    onClose(index, e) {
        e.preventDefault();
        e.stopPropagation();
        this.nzClose.emit({ index });
    }
    onAdd() {
        this.nzAdd.emit();
    }
    clampTabIndex(index) {
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
            this.tabs.forEach((tab, i) => {
                if (i !== index) {
                    tab.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    subscribeToAllTabChanges() {
        this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
            this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
            this.tabs.notifyOnChanges();
        });
    }
    canDeactivateFun(pre, next) {
        if (typeof this.nzCanDeactivate === 'function') {
            const observable = wrapIntoObservable(this.nzCanDeactivate(pre, next));
            return observable.pipe(first(), takeUntil(this.destroy$));
        }
        else {
            return of(true);
        }
    }
    clickNavItem(tab, index, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzClick.emit();
            if (!this.isRouterLinkClickEvent(index, e)) {
                this.setSelectedIndex(index);
            }
        }
    }
    isRouterLinkClickEvent(index, event) {
        var _a, _b;
        const target = event.target;
        if (this.nzLinkRouter) {
            return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
        }
        else {
            return false;
        }
    }
    contextmenuNavItem(tab, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzContextmenu.emit(e);
        }
    }
    setSelectedIndex(index) {
        this.canDeactivateSubscription.unsubscribe();
        this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
            if (can) {
                this.nzSelectedIndex = index;
                this.tabNavBarRef.focusIndex = index;
                this.cdr.markForCheck();
            }
        });
    }
    getTabIndex(tab, index) {
        if (tab.nzDisabled) {
            return null;
        }
        return this.selectedIndex === index ? 0 : -1;
    }
    getTabContentId(i) {
        return `nz-tabs-${this.tabSetId}-tab-${i}`;
    }
    setUpRouter() {
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd), startWith(true), delay(0))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.tabs.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
    }
    getTabContentMarginValue() {
        return -(this.nzSelectedIndex || 0) * 100;
    }
    getTabContentMarginLeft() {
        if (this.tabPaneAnimated) {
            if (this.dir !== 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
    getTabContentMarginRight() {
        if (this.tabPaneAnimated) {
            if (this.dir === 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
}
NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Router, 8)); };
NzTabSetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.allTabs = _t);
    } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTabNavBarComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
    } }, hostAttrs: [1, "ant-tabs"], hostVars: 24, hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
    } }, inputs: { nzTabPosition: "nzTabPosition", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd" }, exportAs: ["nzTabset"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NZ_TAB_SET,
                useExisting: NzTabSetComponent
            }
        ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["nz-tab-close-button", "", 3, "closeIcon", "click"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzTabSetComponent_div_3_Template, 1, 4, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.tabs.length);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
        ɵngcc0.ɵɵclassProp("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc4.NgIf, ɵngcc4.NgForOf, ɵngcc5.NzTabNavBarComponent, ɵngcc4.NgStyle, ɵngcc6.NzTabNavItemDirective, ɵngcc7.CdkMonitorFocus, ɵngcc8.NzStringTemplateOutletDirective, ɵngcc9.NzTabCloseButtonComponent, ɵngcc10.NzTabBodyComponent], encapsulation: 2 });
NzTabSetComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
NzTabSetComponent.propDecorators = {
    nzSelectedIndex: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzTabBarExtraContent: [{ type: Input }],
    nzCanDeactivate: [{ type: Input }],
    nzAddIcon: [{ type: Input }],
    nzTabBarStyle: [{ type: Input }],
    nzType: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzTabBarGutter: [{ type: Input }],
    nzHideAdd: [{ type: Input }],
    nzCentered: [{ type: Input }],
    nzHideAll: [{ type: Input }],
    nzLinkRouter: [{ type: Input }],
    nzLinkExact: [{ type: Input }],
    nzSelectChange: [{ type: Output }],
    nzSelectedIndexChange: [{ type: Output }],
    nzTabListScroll: [{ type: Output }],
    nzClose: [{ type: Output }],
    nzAdd: [{ type: Output }],
    allTabs: [{ type: ContentChildren, args: [NzTabComponent, { descendants: true },] }],
    tabNavBarRef: [{ type: ViewChild, args: [NzTabNavBarComponent, { static: false },] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzHideAdd", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTabSetComponent.prototype, "nzCentered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzHideAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabSetComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [
                    {
                        provide: NZ_TAB_SET,
                        useExisting: NzTabSetComponent
                    }
                ],
                template: `
    <nz-tabs-nav
      *ngIf="tabs.length"
      [ngStyle]="nzTabBarStyle"
      [selectedIndex]="nzSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="nzAddIcon"
      [hideBar]="nzHideAll"
      [position]="position"
      [extraTemplate]="nzTabBarExtraContent"
      (tabScroll)="nzTabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
        [class.ant-tabs-tab-active]="nzSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.nzDisabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <div
          role="tab"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.nzDisabled"
          [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.nzDisabled"
          [tab]="tab"
          [active]="nzSelectedIndex === i"
          class="ant-tabs-tab-btn"
          nzTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button
            nz-tab-close-button
            *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
            [closeIcon]="tab.nzCloseIcon"
            (click)="onClose(i, $event)"
          ></button>
        </div>
      </div>
    </nz-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [style.margin-left]="getTabContentMarginLeft()"
        [style.margin-right]="getTabContentMarginRight()"
      >
        <div
          nz-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="nzSelectedIndex == i && !nzHideAll"
          [content]="tab.content"
          [forceRender]="tab.nzForceRender"
          [tabPaneAnimated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-tabs',
                    '[class.ant-tabs-card]': `nzType === 'card' || nzType === 'editable-card'`,
                    '[class.ant-tabs-editable]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-editable-card]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-centered]': `nzCentered`,
                    '[class.ant-tabs-rtl]': `dir === 'rtl'`,
                    '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-default]': `nzSize === 'default'`,
                    '[class.ant-tabs-small]': `nzSize === 'small'`,
                    '[class.ant-tabs-large]': `nzSize === 'large'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc3.Router, decorators: [{
                type: Optional
            }] }]; }, { nzTabPosition: [{
            type: Input
        }], nzCanDeactivate: [{
            type: Input
        }], nzAddIcon: [{
            type: Input
        }], nzTabBarStyle: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzAnimated: [{
            type: Input
        }], nzTabBarGutter: [{
            type: Input
        }], nzHideAdd: [{
            type: Input
        }], nzCentered: [{
            type: Input
        }], nzHideAll: [{
            type: Input
        }], nzLinkRouter: [{
            type: Input
        }], nzLinkExact: [{
            type: Input
        }], nzSelectChange: [{
            type: Output
        }], nzSelectedIndexChange: [{
            type: Output
        }], nzTabListScroll: [{
            type: Output
        }], nzClose: [{
            type: Output
        }], nzAdd: [{
            type: Output
        }], allTabs: [{
            type: ContentChildren,
            args: [NzTabComponent, { descendants: true }]
        }], nzSelectedIndex: [{
            type: Input
        }], nzTabBarExtraContent: [{
            type: Input
        }], tabNavBarRef: [{
            type: ViewChild,
            args: [NzTabNavBarComponent, { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsOERBQThEO0FBRTlELE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQWtDLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVFLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUzRSxPQUFPLEVBRUwsZ0JBQWdCLEVBTWpCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1B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RTtBQUFFO0FBRVYsc0RBRjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM5QztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZpbHRlciwgZmlyc3QsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQsIE56U2FmZUFueSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHdyYXBJbnRvT2JzZXJ2YWJsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHtcbiAgTnpBbmltYXRlZEludGVyZmFjZSxcbiAgTnpUYWJDaGFuZ2VFdmVudCxcbiAgTnpUYWJQb3NpdGlvbixcbiAgTnpUYWJQb3NpdGlvbk1vZGUsXG4gIE56VGFic0NhbkRlYWN0aXZhdGVGbixcbiAgTnpUYWJTY3JvbGxFdmVudCxcbiAgTnpUYWJUeXBlXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOelRhYk5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW5hdi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50LCBOWl9UQUJfU0VUIH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICd0YWJzJztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhYnNldCcsXG4gIGV4cG9ydEFzOiAnbnpUYWJzZXQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOWl9UQUJfU0VULFxuICAgICAgdXNlRXhpc3Rpbmc6IE56VGFiU2V0Q29tcG9uZW50XG4gICAgfVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10YWJzLW5hdlxuICAgICAgKm5nSWY9XCJ0YWJzLmxlbmd0aFwiXG4gICAgICBbbmdTdHlsZV09XCJuelRhYkJhclN0eWxlXCJcbiAgICAgIFtzZWxlY3RlZEluZGV4XT1cIm56U2VsZWN0ZWRJbmRleCB8fCAwXCJcbiAgICAgIFtpbmtCYXJBbmltYXRlZF09XCJpbmtCYXJBbmltYXRlZFwiXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgIFthZGRJY29uXT1cIm56QWRkSWNvblwiXG4gICAgICBbaGlkZUJhcl09XCJuekhpZGVBbGxcIlxuICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgICAgIFtleHRyYVRlbXBsYXRlXT1cIm56VGFiQmFyRXh0cmFDb250ZW50XCJcbiAgICAgICh0YWJTY3JvbGwpPVwibnpUYWJMaXN0U2Nyb2xsLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoc2VsZWN0Rm9jdXNlZEluZGV4KT1cInNldFNlbGVjdGVkSW5kZXgoJGV2ZW50KVwiXG4gICAgICAoYWRkQ2xpY2tlZCk9XCJvbkFkZCgpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRhYnMtdGFiXCJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJwb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnID8gbnpUYWJCYXJHdXR0ZXIgOiBudWxsXCJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwicG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcgPyBuelRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJuelNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmF2SXRlbSh0YWIsIGksICRldmVudClcIlxuICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dG1lbnVOYXZJdGVtKHRhYiwgJGV2ZW50KVwiXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICBbYXR0ci50YWJJbmRleF09XCJnZXRUYWJJbmRleCh0YWIsIGkpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIm56U2VsZWN0ZWRJbmRleCA9PT0gaSAmJiAhbnpIaWRlQWxsXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImdldFRhYkNvbnRlbnRJZChpKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgICBbdGFiXT1cInRhYlwiXG4gICAgICAgICAgW2FjdGl2ZV09XCJuelNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtdGFiLWJ0blwiXG4gICAgICAgICAgbnpUYWJOYXZJdGVtXG4gICAgICAgICAgY2RrTW9uaXRvckVsZW1lbnRGb2N1c1xuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi5sYWJlbDsgY29udGV4dDogeyB2aXNpYmxlOiB0cnVlIH1cIj57eyB0YWIubGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuei10YWItY2xvc2UtYnV0dG9uXG4gICAgICAgICAgICAqbmdJZj1cInRhYi5uekNsb3NhYmxlICYmIGNsb3NhYmxlICYmICF0YWIubnpEaXNhYmxlZFwiXG4gICAgICAgICAgICBbY2xvc2VJY29uXT1cInRhYi5uekNsb3NlSWNvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbG9zZShpLCAkZXZlbnQpXCJcbiAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uei10YWJzLW5hdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtY29udGVudC1ob2xkZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1jb250ZW50XCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtdG9wXT1cIm56VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtYm90dG9tXT1cIm56VGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtbGVmdF09XCJuelRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1yaWdodF09XCJuelRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtYW5pbWF0ZWRdPVwidGFiUGFuZUFuaW1hdGVkXCJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1sZWZ0XT1cImdldFRhYkNvbnRlbnRNYXJnaW5MZWZ0KClcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0XT1cImdldFRhYkNvbnRlbnRNYXJnaW5SaWdodCgpXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG56LXRhYi1ib2R5XG4gICAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBbYWN0aXZlXT1cIm56U2VsZWN0ZWRJbmRleCA9PSBpICYmICFuekhpZGVBbGxcIlxuICAgICAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcbiAgICAgICAgICBbZm9yY2VSZW5kZXJdPVwidGFiLm56Rm9yY2VSZW5kZXJcIlxuICAgICAgICAgIFt0YWJQYW5lQW5pbWF0ZWRdPVwidGFiUGFuZUFuaW1hdGVkXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10YWJzJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLWNhcmRdJzogYG56VHlwZSA9PT0gJ2NhcmQnIHx8IG56VHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWVkaXRhYmxlXSc6IGBuelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJ2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1lZGl0YWJsZS1jYXJkXSc6IGBuelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJ2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jZW50ZXJlZF0nOiBgbnpDZW50ZXJlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdG9wXSc6IGBuelRhYlBvc2l0aW9uID09PSAndG9wJ2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ib3R0b21dJzogYG56VGFiUG9zaXRpb24gPT09ICdib3R0b20nYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxlZnRdJzogYG56VGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1yaWdodF0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1kZWZhdWx0XSc6IGBuelNpemUgPT09ICdkZWZhdWx0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJTZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVBZGQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZUFsbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDZW50ZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMaW5rUm91dGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxpbmtFeGFjdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RlZEluZGV4OiBOdW1iZXJJbnB1dDtcblxuICBASW5wdXQoKVxuICBnZXQgbnpTZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IG56U2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVsbCB8IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCBudWxsKTtcbiAgfVxuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56Q2FuRGVhY3RpdmF0ZTogTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56VHlwZTogTnpUYWJUeXBlID0gJ2xpbmUnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpUYWJCYXJHdXR0ZXI/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZUFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rUm91dGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxpbmtFeGFjdCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUYWJMaXN0U2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYlNjcm9sbEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyIH0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBnZXQgcG9zaXRpb24oKTogTnpUYWJQb3NpdGlvbk1vZGUge1xuICAgIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHRoaXMubnpUYWJQb3NpdGlvbikgPT09IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIGdldCBhZGRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnICYmICF0aGlzLm56SGlkZUFkZDtcbiAgfVxuXG4gIGdldCBjbG9zYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJztcbiAgfVxuXG4gIGdldCBsaW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2xpbmUnO1xuICB9XG5cbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxpbmUgJiYgKHR5cGVvZiB0aGlzLm56QW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMubnpBbmltYXRlZCA6IHRoaXMubnpBbmltYXRlZC5pbmtCYXIpO1xuICB9XG5cbiAgZ2V0IHRhYlBhbmVBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMubGluZSAmJiAodHlwZW9mIHRoaXMubnpBbmltYXRlZCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5uekFuaW1hdGVkIDogdGhpcy5uekFuaW1hdGVkLnRhYlBhbmUpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFBpY2sgdXAgb25seSBkaXJlY3QgZGVzY2VuZGFudHMgdW5kZXIgaXZ5IHJlbmRlcmluZyBlbmdpbmVcbiAgLy8gV2UgZmlsdGVyIG91dCBvbmx5IHRoZSB0YWJzIHRoYXQgYmVsb25nIHRvIHRoaXMgdGFiIHNldCBpbiBgdGFic2AuXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgYWxsVGFiczogUXVlcnlMaXN0PE56VGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoTnpUYWJOYXZCYXJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJOYXZCYXJSZWYhOiBOelRhYk5hdkJhckNvbXBvbmVudDtcblxuICAvLyBBbGwgdGhlIGRpcmVjdCB0YWJzIGZvciB0aGlzIHRhYiBzZXRcbiAgdGFiczogUXVlcnlMaXN0PE56VGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+KCk7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSByZWFkb25seSB0YWJTZXRJZCE6IG51bWJlcjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XG4gIHByaXZhdGUgc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBjYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICB0aGlzLnRhYlNldElkID0gbmV4dElkKys7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnRhYnMuZGVzdHJveSgpO1xuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VXBSb3V0ZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBhbW91bnQgb2YgdGFicywgaW4gb3JkZXIgdG8gYmVcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xuXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiBib3RoIHRvIHRoZSBgaW5kZXhUb1NlbGVjdGAgYW5kIGBzZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXG4gICAgICAgICAgICAvLyBhZGRpbmcgYSB0YWIgd2l0aGluIHRoZSBgbnpTZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cbiAgICAgICAgICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxuICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5zZWxlY3RlZEluZGV4ID09IG51bGw7XG5cbiAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cbiAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcblxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcbiAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcbiAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZShpbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5uekNsb3NlLmVtaXQoeyBpbmRleCB9KTtcbiAgfVxuXG4gIG9uQWRkKCk6IHZvaWQge1xuICAgIHRoaXMubnpBZGQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy50YWJzLmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnRhYnMgJiYgdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgZXZlbnQudGFiID0gdGhpcy50YWJzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIHRhYi5uekRlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIubnpTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvVGFiTGFiZWxzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMudGFicy5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hbGxUYWJzLmNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5hbGxUYWJzKSkuc3Vic2NyaWJlKCh0YWJzOiBRdWVyeUxpc3Q8TnpUYWJDb21wb25lbnQ+KSA9PiB7XG4gICAgICB0aGlzLnRhYnMucmVzZXQodGFicy5maWx0ZXIodGFiID0+IHRhYi5jbG9zZXN0VGFiU2V0ID09PSB0aGlzKSk7XG4gICAgICB0aGlzLnRhYnMubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlRnVuKHByZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpDYW5EZWFjdGl2YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlID0gd3JhcEludG9PYnNlcnZhYmxlKHRoaXMubnpDYW5EZWFjdGl2YXRlKHByZSwgbmV4dCkpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShmaXJzdCgpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tOYXZJdGVtKHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRhYi5uekRpc2FibGVkKSB7XG4gICAgICAvLyBpZ25vcmUgbnpDYW5EZWFjdGl2YXRlXG4gICAgICB0YWIubnpDbGljay5lbWl0KCk7XG4gICAgICBpZiAoIXRoaXMuaXNSb3V0ZXJMaW5rQ2xpY2tFdmVudChpbmRleCwgZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzUm91dGVyTGlua0NsaWNrRXZlbnQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMubnpMaW5rUm91dGVyKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XT8ubGlua0RpcmVjdGl2ZT8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb250ZXh0bWVudU5hdkl0ZW0odGFiOiBOelRhYkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGFiLm56RGlzYWJsZWQpIHtcbiAgICAgIC8vIGlnbm9yZSBuekNhbkRlYWN0aXZhdGVcbiAgICAgIHRhYi5uekNvbnRleHRtZW51LmVtaXQoZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gdGhpcy5jYW5EZWFjdGl2YXRlRnVuKHRoaXMuc2VsZWN0ZWRJbmRleCEsIGluZGV4KS5zdWJzY3JpYmUoY2FuID0+IHtcbiAgICAgIGlmIChjYW4pIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50YWJOYXZCYXJSZWYuZm9jdXNJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYjogTnpUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGFiLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCA/IDAgOiAtMTtcbiAgfVxuXG4gIGdldFRhYkNvbnRlbnRJZChpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbnotdGFicy0ke3RoaXMudGFiU2V0SWR9LXRhYi0ke2l9YDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBSb3V0ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMaW5rUm91dGVyKSB7XG4gICAgICBpZiAoIXRoaXMucm91dGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IHlvdSBzaG91bGQgaW1wb3J0ICdSb3V0ZXJNb2R1bGUnIGlmIHlvdSB3YW50IHRvIHVzZSAnbnpMaW5rUm91dGVyJyFgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgICBkZWxheSgwKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlci5uYXZpZ2F0ZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTtcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xuXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XG4gICAgICBjb25zdCBjID0gdGFiLmxpbmtEaXJlY3RpdmU7XG4gICAgICByZXR1cm4gYyA/IGlzQWN0aXZlKGMucm91dGVyTGluaykgfHwgaXNBY3RpdmUoYy5yb3V0ZXJMaW5rV2l0aEhyZWYpIDogZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gKGxpbmsgPyByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLm56TGlua0V4YWN0KSA6IGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFiQ29udGVudE1hcmdpblZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5uelNlbGVjdGVkSW5kZXggfHwgMCkgKiAxMDA7XG4gIH1cblxuICBnZXRUYWJDb250ZW50TWFyZ2luTGVmdCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnRhYlBhbmVBbmltYXRlZCkge1xuICAgICAgaWYgKHRoaXMuZGlyICE9PSAncnRsJykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJDb250ZW50TWFyZ2luVmFsdWUoKSArICclJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGdldFRhYkNvbnRlbnRNYXJnaW5SaWdodCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnRhYlBhbmVBbmltYXRlZCkge1xuICAgICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJDb250ZW50TWFyZ2luVmFsdWUoKSArICclJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=