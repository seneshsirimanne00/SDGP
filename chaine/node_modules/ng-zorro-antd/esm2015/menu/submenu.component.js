/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken } from './menu.token';
import { NzSubmenuService } from './submenu.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './menu.service';
import * as ɵngcc2 from './submenu.service';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc6 from './submenu-title.component';
import * as ɵngcc7 from '@angular/cdk/overlay';
import * as ɵngcc8 from '@angular/common';
import * as ɵngcc9 from './submenu-inline-child.component';
import * as ɵngcc10 from './submenu-non-inline-child.component';

const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("mode", ctx_r2.mode)("nzOpen", ctx_r2.nzOpen)("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("menuClass", ctx_r2.nzMenuClassName)("templateOutlet", _r5);
} }
function NzSubMenuComponent_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.setMouseEnterState($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    const _r5 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵproperty("theme", ctx_r7.theme)("mode", ctx_r7.mode)("nzOpen", ctx_r7.nzOpen)("position", ctx_r7.position)("nzDisabled", ctx_r7.nzDisabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.nzMenuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function NzSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵtemplate(0, NzSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 10, "ng-template", 7);
    ɵngcc0.ɵɵlistener("positionChange", function NzSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵproperty("cdkConnectedOverlayPositions", ctx_r4.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx_r4.triggerWidth)("cdkConnectedOverlayOpen", ctx_r4.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
const listOfVerticalPositions = [
    POSITION_MAP.rightTop,
    POSITION_MAP.right,
    POSITION_MAP.rightBottom,
    POSITION_MAP.leftTop,
    POSITION_MAP.left,
    POSITION_MAP.leftBottom
];
const listOfHorizontalPositions = [POSITION_MAP.bottomLeft];
export class NzSubMenuComponent {
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzMenuClassName = '';
        this.nzPaddingLeft = null;
        this.nzTitle = null;
        this.nzIcon = null;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new EventEmitter();
        this.cdkOverlayOrigin = null;
        this.listOfNzSubMenuComponent = null;
        this.listOfNzMenuItemDirective = null;
        this.level = this.nzSubmenuService.level;
        this.destroy$ = new Subject();
        this.position = 'right';
        this.triggerWidth = null;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlinePaddingLeft = null;
        this.overlayPositions = listOfVerticalPositions;
        this.isSelected = false;
        this.isActive = false;
        this.dir = 'ltr';
    }
    /** set the submenu host open status directly **/
    setOpenStateWithoutDebounce(open) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(open);
    }
    toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.nzOpen);
    }
    setMouseEnterState(value) {
        this.isActive = value;
        if (this.mode !== 'inline') {
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
        }
    }
    setTriggerWidth() {
        if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
            /** TODO: fast dom **/
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    onPositionChange(position) {
        const placement = getPlacementName(position);
        if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
            this.position = 'right';
        }
        else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
            this.position = 'left';
        }
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        /** submenu theme update **/
        this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe(theme => {
            this.theme = theme;
            this.cdr.markForCheck();
        });
        /** submenu mode update **/
        this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe(mode => {
            this.mode = mode;
            if (mode === 'horizontal') {
                this.overlayPositions = listOfHorizontalPositions;
            }
            else if (mode === 'vertical') {
                this.overlayPositions = listOfVerticalPositions;
            }
            this.cdr.markForCheck();
        });
        /** inlineIndent update **/
        combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            this.cdr.markForCheck();
        });
        /** current submenu open status **/
        this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            this.isActive = open;
            if (open !== this.nzOpen) {
                this.setTriggerWidth();
                this.nzOpen = open;
                this.nzOpenChange.emit(this.nzOpen);
                this.cdr.markForCheck();
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.setTriggerWidth();
        const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
        const changes = listOfNzMenuItemDirective.changes;
        const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map(menu => menu.selected$)]);
        changes
            .pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some(e => e.nzSelected)), takeUntil(this.destroy$))
            .subscribe(selected => {
            this.isSelected = selected;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzOpen } = changes;
        if (nzOpen) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
            this.setTriggerWidth();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzSubmenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(NzIsMenuInsideDropDownToken), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.NzNoAnimationDirective, 9)); };
NzSubMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkOverlayOrigin, true, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, hostVars: 34, hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [ɵngcc0.ɵɵProvidersFeature([NzSubmenuService]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 9, consts: [["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["nz-submenu-none-inline-child", "", 3, "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) { return ctx.setMouseEnterState($event); })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() { return ctx.toggleSubMenu(); });
        ɵngcc0.ɵɵtemplate(2, NzSubMenuComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NzSubMenuComponent_div_3_Template, 1, 6, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NzSubMenuComponent_ng_template_4_Template, 1, 5, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵproperty("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "inline")("ngIfElse", _r3);
    } }, directives: [ɵngcc6.NzSubMenuTitleComponent, ɵngcc7.CdkOverlayOrigin, ɵngcc8.NgIf, ɵngcc9.NzSubmenuInlineChildComponent, ɵngcc5.NzNoAnimationDirective, ɵngcc7.CdkConnectedOverlay, ɵngcc10.NzSubmenuNoneInlineChildComponent], encapsulation: 2, changeDetection: 0 });
NzSubMenuComponent.ctorParameters = () => [
    { type: MenuService },
    { type: ChangeDetectorRef },
    { type: NzSubmenuService },
    { type: Platform },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzSubMenuComponent.propDecorators = {
    nzMenuClassName: [{ type: Input }],
    nzPaddingLeft: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true, read: ElementRef },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSubMenuComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubMenuComponent, [{
        type: Component,
        args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <div
      *ngIf="mode === 'inline'; else nonInlineTemplate"
      nz-submenu-inline-child
      [mode]="mode"
      [nzOpen]="nzOpen"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [menuClass]="nzMenuClassName"
      [templateOutlet]="subMenuTemplate"
    ></div>
    <ng-template #nonInlineTemplate>
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    </ng-template>

    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-submenu-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-dropdown-menu-submenu-open]': `isMenuInsideDropDown && nzOpen`,
                    '[class.ant-dropdown-menu-submenu-selected]': `isMenuInsideDropDown && isSelected`,
                    '[class.ant-dropdown-menu-submenu-vertical]': `isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-dropdown-menu-submenu-horizontal]': `isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-dropdown-menu-submenu-inline]': `isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-dropdown-menu-submenu-active]': `isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-submenu-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-submenu-open]': `!isMenuInsideDropDown && nzOpen`,
                    '[class.ant-menu-submenu-selected]': `!isMenuInsideDropDown && isSelected`,
                    '[class.ant-menu-submenu-vertical]': `!isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-menu-submenu-horizontal]': `!isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-menu-submenu-inline]': `!isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-menu-submenu-active]': `!isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.MenuService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzSubmenuService }, { type: ɵngcc3.Platform }, { type: Boolean, decorators: [{
                type: Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzMenuClassName: [{
            type: Input
        }], nzPaddingLeft: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudS9zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1C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QU07QUFBRztBQUM5Qiw4QkFqRUcsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMkJBQ1YsTUFBTTtBQUFLLCtCQUNYLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUFPLHVDQUNyRSxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ3ZELHdDQUNGLGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDekQ7QUFQdUI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNMLGtEQURtQjtBQUNmO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCxzREFEMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM5QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldFBsYWNlbWVudE5hbWUsIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XG5pbXBvcnQgeyBOek1lbnVNb2RlVHlwZSwgTnpNZW51VGhlbWVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL3N1Ym1lbnUuc2VydmljZSc7XG5cbmNvbnN0IGxpc3RPZlZlcnRpY2FsUG9zaXRpb25zID0gW1xuICBQT1NJVElPTl9NQVAucmlnaHRUb3AsXG4gIFBPU0lUSU9OX01BUC5yaWdodCxcbiAgUE9TSVRJT05fTUFQLnJpZ2h0Qm90dG9tLFxuICBQT1NJVElPTl9NQVAubGVmdFRvcCxcbiAgUE9TSVRJT05fTUFQLmxlZnQsXG4gIFBPU0lUSU9OX01BUC5sZWZ0Qm90dG9tXG5dO1xuY29uc3QgbGlzdE9mSG9yaXpvbnRhbFBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVAuYm90dG9tTGVmdF07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1zdWJtZW51XScsXG4gIGV4cG9ydEFzOiAnbnpTdWJtZW51JyxcbiAgcHJvdmlkZXJzOiBbTnpTdWJtZW51U2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBuei1zdWJtZW51LXRpdGxlXG4gICAgICBjZGtPdmVybGF5T3JpZ2luXG4gICAgICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXG4gICAgICBbbnpJY29uXT1cIm56SWNvblwiXG4gICAgICBbbnpUaXRsZV09XCJuelRpdGxlXCJcbiAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgW256RGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbaXNNZW51SW5zaWRlRHJvcERvd25dPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW3BhZGRpbmdMZWZ0XT1cIm56UGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnRcIlxuICAgICAgKHN1Yk1lbnVNb3VzZVN0YXRlKT1cInNldE1vdXNlRW50ZXJTdGF0ZSgkZXZlbnQpXCJcbiAgICAgICh0b2dnbGVTdWJNZW51KT1cInRvZ2dsZVN1Yk1lbnUoKVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiICpuZ0lmPVwiIW56VGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJtb2RlID09PSAnaW5saW5lJzsgZWxzZSBub25JbmxpbmVUZW1wbGF0ZVwiXG4gICAgICBuei1zdWJtZW51LWlubGluZS1jaGlsZFxuICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICBbbnpPcGVuXT1cIm56T3BlblwiXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbbWVudUNsYXNzXT1cIm56TWVudUNsYXNzTmFtZVwiXG4gICAgICBbdGVtcGxhdGVPdXRsZXRdPVwic3ViTWVudVRlbXBsYXRlXCJcbiAgICA+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNub25JbmxpbmVUZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJ0cmlnZ2VyV2lkdGghXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm56T3BlblwiXG4gICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtbWVudS1zdWJtZW51J1wiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBuei1zdWJtZW51LW5vbmUtaW5saW5lLWNoaWxkXG4gICAgICAgICAgW3RoZW1lXT1cInRoZW1lXCJcbiAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICBbbnpPcGVuXT1cIm56T3BlblwiXG4gICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgICAgICBbaXNNZW51SW5zaWRlRHJvcERvd25dPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgICAgIFt0ZW1wbGF0ZU91dGxldF09XCJzdWJNZW51VGVtcGxhdGVcIlxuICAgICAgICAgIFttZW51Q2xhc3NdPVwibnpNZW51Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIChzdWJNZW51TW91c2VTdGF0ZSk9XCJzZXRNb3VzZUVudGVyU3RhdGUoJGV2ZW50KVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc3ViTWVudVRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG56RGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1vcGVuXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuek9wZW5gLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNTZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXZlcnRpY2FsXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaW5saW5lXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFjdGl2ZV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNBY3RpdmVgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtZGlzYWJsZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuekRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtb3Blbl0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG56T3BlbmAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNTZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXZlcnRpY2FsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1pbmxpbmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LWFjdGl2ZV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGlzQWN0aXZlYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPcGVuOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNka092ZXJsYXlPcmlnaW46IEVsZW1lbnRSZWYgfCBudWxsID0gbnVsbDtcbiAgQENvbnRlbnRDaGlsZHJlbihOelN1Yk1lbnVDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PE56TWVudUl0ZW1EaXJlY3RpdmU+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHRoZW1lOiBOek1lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xuICBtb2RlOiBOek1lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIGlubGluZVBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgb3ZlcmxheVBvc2l0aW9ucyA9IGxpc3RPZlZlcnRpY2FsUG9zaXRpb25zO1xuICBpc1NlbGVjdGVkID0gZmFsc2U7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLyoqIHNldCB0aGUgc3VibWVudSBob3N0IG9wZW4gc3RhdHVzIGRpcmVjdGx5ICoqL1xuICBzZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2Uob3Blbik7XG4gIH1cblxuICB0b2dnbGVTdWJNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKCF0aGlzLm56T3Blbik7XG4gIH1cblxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRNb3VzZUVudGVyVGl0bGVPck92ZXJsYXlTdGF0ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLmNka092ZXJsYXlPcmlnaW4pIHtcbiAgICAgIC8qKiBUT0RPOiBmYXN0IGRvbSAqKi9cbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pO1xuICAgIGlmIChwbGFjZW1lbnQgPT09ICdyaWdodFRvcCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHRCb3R0b20nIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0VG9wJyB8fCBwbGFjZW1lbnQgPT09ICdsZWZ0Qm90dG9tJyB8fCBwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW4sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvKiogc3VibWVudSB0aGVtZSB1cGRhdGUgKiovXG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLnRoZW1lJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoZW1lID0+IHtcbiAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8qKiBzdWJtZW51IG1vZGUgdXBkYXRlICoqL1xuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5tb2RlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1vZGUgPT4ge1xuICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgIGlmIChtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25zID0gbGlzdE9mSG9yaXpvbnRhbFBvc2l0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBsaXN0T2ZWZXJ0aWNhbFBvc2l0aW9ucztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIC8qKiBpbmxpbmVJbmRlbnQgdXBkYXRlICoqL1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubnpTdWJtZW51U2VydmljZS5tb2RlJCwgdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudCRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIGlubGluZUluZGVudF0pID0+IHtcbiAgICAgICAgdGhpcy5pbmxpbmVQYWRkaW5nTGVmdCA9IG1vZGUgPT09ICdpbmxpbmUnID8gdGhpcy5sZXZlbCAqIGlubGluZUluZGVudCA6IG51bGw7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgLyoqIGN1cnJlbnQgc3VibWVudSBvcGVuIHN0YXR1cyAqKi9cbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2UuaXNDdXJyZW50U3ViTWVudU9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3BlbiA9PiB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gb3BlbjtcbiAgICAgIGlmIChvcGVuICE9PSB0aGlzLm56T3Blbikge1xuICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLm56T3BlbiA9IG9wZW47XG4gICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICBjb25zdCBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlID0gdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlO1xuICAgIGNvbnN0IGNoYW5nZXMgPSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5jaGFuZ2VzO1xuICAgIGNvbnN0IG1lcmdlZE9ic2VydmFibGUgPSBtZXJnZSguLi5bY2hhbmdlcywgLi4ubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSEubWFwKG1lbnUgPT4gbWVudS5zZWxlY3RlZCQpXSk7XG4gICAgY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1lcmdlZE9ic2VydmFibGUpLFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5zb21lKGUgPT4gZS5uelNlbGVjdGVkKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPcGVuIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuek9wZW4pIHtcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==