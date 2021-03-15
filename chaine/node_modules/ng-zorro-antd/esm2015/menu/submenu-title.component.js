/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

const _c0 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzIcon);
} }
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzTitle);
} }
function NzSubMenuTitleComponent_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} }
function NzSubMenuTitleComponent_span_3_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 9);
} }
function NzSubMenuTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtemplate(1, NzSubMenuTitleComponent_span_3_i_1_Template, 1, 0, "i", 6);
    ɵngcc0.ɵɵtemplate(2, NzSubMenuTitleComponent_span_3_i_2_Template, 1, 0, "i", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r2.dir);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "rtl");
} }
function NzSubMenuTitleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 10);
} }
const _c1 = ["*"];
export class NzSubMenuTitleComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzIcon = null;
        this.nzTitle = null;
        this.isMenuInsideDropDown = false;
        this.nzDisabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new EventEmitter();
        this.subMenuMouseState = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
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
    }
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    clickTitle() {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzSubMenuTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSubMenuTitleComponent, selectors: [["", "nz-submenu-title", ""]], hostVars: 8, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        ɵngcc0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    } }, inputs: { nzIcon: "nzIcon", nzTitle: "nzTitle", isMenuInsideDropDown: "isMenuInsideDropDown", nzDisabled: "nzDisabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuTitle"], attrs: _c0, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch"], ["nz-icon", "", "nzType", "left", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, NzSubMenuTitleComponent_span_3_Template, 3, 2, "span", 2);
        ɵngcc0.ɵɵtemplate(4, NzSubMenuTitleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r3);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault], encapsulation: 2, changeDetection: 0 });
NzSubMenuTitleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzSubMenuTitleComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    isMenuInsideDropDown: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    paddingLeft: [{ type: Input }],
    mode: [{ type: Input }],
    toggleSubMenu: [{ type: Output }],
    subMenuMouseState: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubMenuTitleComponent, [{
        type: Component,
        args: [{
                selector: '[nz-submenu-title]',
                exportAs: 'nzSubmenuTitle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="nzIcon" *ngIf="nzIcon"></i>
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span>{{ nzTitle }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span [ngSwitch]="dir" *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-expand-icon">
      <i *ngSwitchCase="'rtl'" nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon"></i>
      <i *ngSwitchDefault nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : paddingLeft `,
                    '[style.paddingRight.px]': `dir === 'rtl' ? paddingLeft : null`,
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzIcon: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], isMenuInsideDropDown: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], mode: [{
            type: Input
        }], toggleSubMenu: [{
            type: Output
        }], subMenuMouseState: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudS9zdWJtZW51LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0MzQyxNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUFhckMsWUFBb0IsR0FBc0IsRUFBc0IsY0FBOEI7QUFBSSxRQUE5RSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQXFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDLFFBWnRGLFdBQU0sR0FBa0IsSUFBSSxDQUFDO0FBQ3hDLFFBQVcsWUFBTyxHQUFzQyxJQUFJLENBQUM7QUFDN0QsUUFBVyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7QUFDeEMsUUFBVyxlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFFBQVcsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0FBQzdDLFFBQVcsU0FBSSxHQUFtQixVQUFVLENBQUM7QUFDN0MsUUFBcUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hELFFBQXFCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDckUsUUFDRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0FBQ3pCLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDekMsSUFDbUcsQ0FBQztBQUNwRyxJQUFFLFFBQVE7QUFBSztBQUNMLFFBQU4sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUN6QyxRQUFJLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtBQUNsRyxZQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsRUFBRTtBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhLENBQUMsS0FBYztBQUFJLFFBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFBRSxVQUFVO0FBQUssUUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNwRCxZQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO21EQWxFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7T0FDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRTs7O3VHQWFULGtCQUNELElBQUksRUFBRSxzQkFDSjs2QkFBeUMsRUFBRSxzQkFBc0Isc0JBQ2pFLGdDQUFnQyxFQUFFLHVCQUF1QjtZQUN6RCx3QkFBd0IsRUFBRSxxQ0FBcUMsc0JBQy9ELHlCQUF5QixFQUFFLG9DQUFvQyxzQkFDL0QsU0FBUyxFQUFFLGNBQWMsc0JBQ3pCLGNBQWMsRUFBRSxxQkFBcUIsc0JBQ3JDLGNBQWMsRUFBRSxzQkFBc0Isa0JBQ3ZDLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzBNQUNJO0FBQUM7QUFBaUQsWUE1Q3JELGlCQUFpQjtBQUNqQixZQUprQixjQUFjLHVCQTREYSxRQUFRO0FBQU07QUFBRztBQUMxRCxxQkFiSCxLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLG1DQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyw0QkFDVixNQUFNO0FBQUssZ0NBQ1gsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc3VibWVudS10aXRsZV0nLFxuICBleHBvcnRBczogJ256U3VibWVudVRpdGxlJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56SWNvblwiICpuZ0lmPVwibnpJY29uXCI+PC9pPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+XG4gICAgICA8c3Bhbj57eyBuelRpdGxlIH19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8c3BhbiBbbmdTd2l0Y2hdPVwiZGlyXCIgKm5nSWY9XCJpc01lbnVJbnNpZGVEcm9wRG93bjsgZWxzZSBub3REcm9wZG93blRwbFwiIGNsYXNzPVwiYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1leHBhbmQtaWNvblwiPlxuICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidydGwnXCIgbnotaWNvbiBuelR5cGU9XCJsZWZ0XCIgY2xhc3M9XCJhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93LWljb25cIj48L2k+XG4gICAgICA8aSAqbmdTd2l0Y2hEZWZhdWx0IG56LWljb24gbnpUeXBlPVwicmlnaHRcIiBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvblwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG5nLXRlbXBsYXRlICNub3REcm9wZG93blRwbD5cbiAgICAgIDxpIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudS1hcnJvd1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlXSc6ICdpc01lbnVJbnNpZGVEcm9wRG93bicsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXRpdGxlXSc6ICchaXNNZW51SW5zaWRlRHJvcERvd24nLFxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBudWxsIDogcGFkZGluZ0xlZnQgYCxcbiAgICAnW3N0eWxlLnBhZGRpbmdSaWdodC5weF0nOiBgZGlyID09PSAncnRsJyA/IHBhZGRpbmdMZWZ0IDogbnVsbGAsXG4gICAgJyhjbGljayknOiAnY2xpY2tUaXRsZSgpJyxcbiAgICAnKG1vdXNlZW50ZXIpJzogJ3NldE1vdXNlU3RhdGUodHJ1ZSknLFxuICAgICcobW91c2VsZWF2ZSknOiAnc2V0TW91c2VTdGF0ZShmYWxzZSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGlzTWVudUluc2lkZURyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtb2RlOiBOek1lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0b2dnbGVTdWJNZW51ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3ViTWVudU1vdXNlU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzZXRNb3VzZVN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3ViTWVudU1vdXNlU3RhdGUubmV4dChzdGF0ZSk7XG4gICAgfVxuICB9XG4gIGNsaWNrVGl0bGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2lubGluZScgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGVTdWJNZW51LmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==