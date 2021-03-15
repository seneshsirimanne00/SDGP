/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './page-header-cells';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc6 from 'ng-zorro-antd/icon';

function NzPageHeaderComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const backIcon_r6 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", backIcon_r6 || ctx_r5.getBackIcon());
} }
function NzPageHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function NzPageHeaderComponent_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onBack(); });
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵtemplate(2, NzPageHeaderComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzBackIcon);
} }
function NzPageHeaderComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.nzTitle);
} }
function NzPageHeaderComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵtemplate(1, NzPageHeaderComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzPageHeaderComponent_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.nzSubtitle);
} }
function NzPageHeaderComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzPageHeaderComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
} }
function NzPageHeaderComponent_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 7, ["*ngIf", "!nzSubtitle"]);
} }
const _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
const _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
const NZ_CONFIG_MODULE_NAME = 'pageHeader';
export class NzPageHeaderComponent {
    constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBackIcon = null;
        this.nzGhost = true;
        this.nzBack = new EventEmitter();
        this.compact = false;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map(([entry]) => entry.contentRect.width), takeUntil(this.destroy$))
            .subscribe((width) => {
            this.compact = width < 768;
            this.cdr.markForCheck();
        });
    }
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            if (!this.location) {
                throw new Error(`${PREFIX} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
            }
            this.location.back();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getBackIcon() {
        if (this.dir === 'rtl') {
            return 'arrow-right';
        }
        return 'arrow-left';
    }
}
NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Location, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzPageHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    } }, hostAttrs: [1, "ant-page-header"], hostVars: 10, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBackIcon: "nzBackIcon", nzGhost: "nzGhost", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzPageHeaderComponent_div_3_Template, 3, 1, "div", 2);
        ɵngcc0.ɵɵprojection(4, 1);
        ɵngcc0.ɵɵtemplate(5, NzPageHeaderComponent_span_5_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵtemplate(6, NzPageHeaderComponent_ng_content_6_Template, 1, 0, "ng-content", 4);
        ɵngcc0.ɵɵtemplate(7, NzPageHeaderComponent_span_7_Template, 2, 1, "span", 5);
        ɵngcc0.ɵɵtemplate(8, NzPageHeaderComponent_ng_content_8_Template, 1, 0, "ng-content", 4);
        ɵngcc0.ɵɵprojection(9, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(10, 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(11, 4);
        ɵngcc0.ɵɵprojection(12, 5);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzBackIcon !== null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSubtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSubtitle);
    } }, directives: [ɵngcc1.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc6.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location, decorators: [{ type: Optional }] },
    { type: NzConfigService },
    { type: ElementRef },
    { type: NzResizeObserver },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzBack: [{ type: Output }],
    nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]"></ng-content>

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        <div *ngIf="nzBackIcon !== null" (click)="onBack()" class="ant-page-header-back">
          <div role="button" tabindex="0" class="ant-page-header-back-button">
            <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
              <i nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline"></i>
            </ng-container>
          </div>
        </div>
        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]"></ng-content>
        <!--title-->
        <span class="ant-page-header-heading-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzTitle" select="nz-page-header-title, [nz-page-header-title]"></ng-content>
        <!--subtitle-->
        <span class="ant-page-header-heading-sub-title" *ngIf="nzSubtitle">
          <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzSubtitle" select="nz-page-header-subtitle, [nz-page-header-subtitle]"></ng-content>
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]"></ng-content>
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]"></ng-content>
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]"></ng-content>
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]"></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb',
                    '[class.ant-page-header-compact]': 'compact',
                    '[class.ant-page-header-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.Location, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc3.NzResizeObserver }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBackIcon: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzBack: [{
            type: Output
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzPageHeaderFooter: [{
            type: ContentChild,
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: ContentChild,
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLE1BQU0scUJBQXFCLEdBQWdCLFlBQVksQ0FBQztBQWtEeEQsTUFBTSxPQUFPLHFCQUFxQjtBQUFHLElBZ0JuQyxZQUNzQixRQUFrQixFQUMvQixlQUFnQyxFQUMvQixVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsR0FBc0IsRUFDVixj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RUFBRSxnQkFBZ0Isa0JBQzFCLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7c2RBaUNULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxpQkFBaUIsc0JBQ3hCLG9CQUFvQixFQUFFLG9CQUFvQixzQkFDMUMsK0JBQStCLEVBQUUsU0FBUyxzQkFDMUM7R0FBd0IsRUFBRSx3QkFBd0I7Y0FDbEQ7ZUFBaUMsRUFBRSxTQUFTO0lBQzVDLDZCQUE2QixFQUFFO01BQWUsa0JBQy9DLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRJQUNJO0FBQUM7QUFBK0MsWUExRDVDLFFBQVEsdUJBMkVaLFFBQVE7QUFBTyxZQTFFRSxlQUFlO0FBQUksWUFidkMsVUFBVTtBQUNWLFlBY08sZ0JBQWdCO0FBQUksWUFsQjNCLGlCQUFpQjtBQUNqQixZQWFrQixjQUFjLHVCQWlGN0IsUUFBUTtBQUFNO0FBQUc7QUFHdEIseUJBdEJHLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxxQkFDVixNQUFNO0FBQUssaUNBRVgsWUFBWSxTQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFPLHFDQUNsRSxZQUFZLFNBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU07QUFKL0M7QUFBYSxJQUExQixVQUFVLEVBQUU7QUFBRTtBQUNYLHNEQURrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ2pEO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLWNlbGxzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdwYWdlSGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnZS1oZWFkZXInLFxuICBleHBvcnRBczogJ256UGFnZUhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotYnJlYWRjcnVtYltuei1wYWdlLWhlYWRlci1icmVhZGNydW1iXVwiPjwvbmctY29udGVudD5cblxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItaGVhZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nLWxlZnRcIj5cbiAgICAgICAgPCEtLWJhY2stLT5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm56QmFja0ljb24gIT09IG51bGxcIiAoY2xpY2spPVwib25CYWNrKClcIiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1iYWNrXCI+XG4gICAgICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItYmFjay1idXR0b25cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekJhY2tJY29uOyBsZXQgYmFja0ljb25cIj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImJhY2tJY29uIHx8IGdldEJhY2tJY29uKClcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLWF2YXRhci0tPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1hdmF0YXJbbnotcGFnZS1oZWFkZXItYXZhdGFyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPCEtLXRpdGxlLS0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWhlYWRpbmctdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiFuelRpdGxlXCIgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItdGl0bGUsIFtuei1wYWdlLWhlYWRlci10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS1zdWJ0aXRsZS0tPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nLXN1Yi10aXRsZVwiICpuZ0lmPVwibnpTdWJ0aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YnRpdGxlXCI+e3sgbnpTdWJ0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56U3VidGl0bGVcIiBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1zdWJ0aXRsZSwgW256LXBhZ2UtaGVhZGVyLXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItdGFncywgW256LXBhZ2UtaGVhZGVyLXRhZ3NdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLWV4dHJhLCBbbnotcGFnZS1oZWFkZXItZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItY29udGVudCwgW256LXBhZ2UtaGVhZGVyLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLWZvb3RlciwgW256LXBhZ2UtaGVhZGVyLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcGFnZS1oZWFkZXInLFxuICAgICdbY2xhc3MuaGFzLWZvb3Rlcl0nOiAnbnpQYWdlSGVhZGVyRm9vdGVyJyxcbiAgICAnW2NsYXNzLmFudC1wYWdlLWhlYWRlci1naG9zdF0nOiAnbnpHaG9zdCcsXG4gICAgJ1tjbGFzcy5oYXMtYnJlYWRjcnVtYl0nOiAnbnpQYWdlSGVhZGVyQnJlYWRjcnVtYicsXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItY29tcGFjdF0nOiAnY29tcGFjdCcsXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UGFnZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgQElucHV0KCkgbnpCYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1YnRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpHaG9zdDogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJGb290ZXI/OiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckJyZWFkY3J1bWI/OiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmU+O1xuXG4gIGNvbXBhY3QgPSBmYWxzZTtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXplT2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZilcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtlbnRyeV0pID0+IGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh3aWR0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcGFjdCA9IHdpZHRoIDwgNzY4O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25CYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm56QmFjay5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5sb2NhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBvciByZWdpc3RlciAnTG9jYXRpb24nIGlmIHlvdSB3YW50IHRvIHVzZSAnbnpCYWNrJyBkZWZhdWx0IGV2ZW50IWApO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0QmFja0ljb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICByZXR1cm4gJ2Fycm93LXJpZ2h0JztcbiAgICB9XG4gICAgcmV0dXJuICdhcnJvdy1sZWZ0JztcbiAgfVxufVxuIl19