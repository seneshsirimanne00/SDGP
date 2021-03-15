/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './anchor.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './anchor.component';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["nzTemplate"];
const _c1 = ["linkTitle"];
function NzAnchorLinkComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.titleStr);
} }
const _c2 = ["*"];
export class NzAnchorLinkComponent {
    constructor(elementRef, anchorComp, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.platform = platform;
        this.renderer = renderer;
        this.nzHref = '#';
        this.titleStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    getLinkTitleElement() {
        return this.linkTitle.nativeElement;
    }
    setActive() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    }
    unsetActive() {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    }
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    }
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) { return new (t || NzAnchorLinkComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzAnchorComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzAnchorLinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAnchorLinkComponent, selectors: [["nz-link"]], contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
    } }, viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.linkTitle = _t.first);
    } }, inputs: { nzHref: "nzHref", nzTitle: "nzTitle" }, exportAs: ["nzLink"], ngContentSelectors: _c2, decls: 4, vars: 4, consts: [[1, "ant-anchor-link-title", 3, "href", "title", "click"], ["linkTitle", ""], [4, "ngIf", "ngIfElse"]], template: function NzAnchorLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "a", 0, 1);
        ɵngcc0.ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) { return ctx.goToClick($event); });
        ɵngcc0.ɵɵtemplate(2, NzAnchorLinkComponent_span_2_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3);
    } if (rf & 2) {
        ɵngcc0.ɵɵpropertyInterpolate("href", ctx.nzHref, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.titleStr);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
    } }, directives: [ɵngcc3.NgIf], encapsulation: 2, changeDetection: 0 });
NzAnchorLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzAnchorComponent },
    { type: Platform },
    { type: Renderer2 }
];
NzAnchorLinkComponent.propDecorators = {
    nzHref: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: false },] }],
    linkTitle: [{ type: ViewChild, args: ['linkTitle',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAnchorLinkComponent, [{
        type: Component,
        args: [{
                selector: 'nz-link',
                exportAs: 'nzLink',
                preserveWhitespaces: false,
                template: `
    <a #linkTitle (click)="goToClick($event)" href="{{ nzHref }}" class="ant-anchor-link-title" title="{{ titleStr }}">
      <span *ngIf="titleStr; else titleTpl || nzTemplate">{{ titleStr }}</span>
    </a>
    <ng-content></ng-content>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzAnchorComponent }, { type: ɵngcc2.Platform }, { type: ɵngcc0.Renderer2 }]; }, { nzHref: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzTemplate: [{
            type: ContentChild,
            args: ['nzTemplate', { static: false }]
        }], linkTitle: [{
            type: ViewChild,
            args: ['linkTitle']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2FuY2hvci9hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV2RCxNQUFNLE9BQU8scUJBQXFCO0FBQUcsSUFtQm5DLFlBQ1MsVUFBc0IsRUFDckIsVUFBNkIsRUFDN0IsUUFBa0IsRUFDbEIsUUFBbUI7QUFDNUIsUUFKUSxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7QUFBQyxRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO0FBQUMsUUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUMvQixRQXZCVyxXQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLFFBQ0UsYUFBUSxHQUFrQixFQUFFLENBQUM7QUFDL0IsUUFxQkksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3hFLElBQUUsQ0FBQztBQUNILElBckJFLElBQ0ksT0FBTyxDQUFDLEtBQWlDO0FBQy9DLFFBQUksSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDM0IsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBYUUsUUFBUTtBQUFLLFFBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxtQkFBbUI7QUFBSyxRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUztBQUFLLFFBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUNwRixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFDdkYsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTLENBQUMsQ0FBUTtBQUFJLFFBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixRQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN4QixRQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSDtpREFwRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxTQUFTLGtCQUNuQixRQUFRLEVBQUUsUUFBUSxrQkFDbEIsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsUUFBUSxFQUFFOzJKQUtULGtCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztFQUFJLGtCQUNyQyxlQUFlLEVBQUU7UUFBdUIsQ0FBQyxNQUFNO1NBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRFQUNJO0FBQUM7QUFBK0MsWUExQm5ELFVBQVU7QUFDVixZQVVPLGlCQUFpQjtBQUFJLFlBaEJyQixRQUFRO0FBQUksWUFTbkIsU0FBUztBQUNWO0FBQUc7QUFFYSxxQkFvQmQsS0FBSztBQUFLLHNCQUtWLEtBQUs7QUFDTix5QkFTQyxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFPLHdCQUNuRCxTQUFTLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekFuY2hvckNvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpbmsnLFxuICBleHBvcnRBczogJ256TGluaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhICNsaW5rVGl0bGUgKGNsaWNrKT1cImdvVG9DbGljaygkZXZlbnQpXCIgaHJlZj1cInt7IG56SHJlZiB9fVwiIGNsYXNzPVwiYW50LWFuY2hvci1saW5rLXRpdGxlXCIgdGl0bGU9XCJ7eyB0aXRsZVN0ciB9fVwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJ0aXRsZVN0cjsgZWxzZSB0aXRsZVRwbCB8fCBuelRlbXBsYXRlXCI+e3sgdGl0bGVTdHIgfX08L3NwYW4+XG4gICAgPC9hPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpBbmNob3JMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekhyZWYgPSAnIyc7XG5cbiAgdGl0bGVTdHI6IHN0cmluZyB8IG51bGwgPSAnJztcbiAgdGl0bGVUcGw/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCdsaW5rVGl0bGUnKSBsaW5rVGl0bGUhOiBFbGVtZW50UmVmPEhUTUxBbmNob3JFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFuY2hvckNvbXA6IE56QW5jaG9yQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1hbmNob3ItbGluaycpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnJlZ2lzdGVyTGluayh0aGlzKTtcbiAgfVxuXG4gIGdldExpbmtUaXRsZUVsZW1lbnQoKTogSFRNTEFuY2hvckVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmxpbmtUaXRsZS5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgc2V0QWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYW5jaG9yLWxpbmstYWN0aXZlJyk7XG4gIH1cblxuICB1bnNldEFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWFuY2hvci1saW5rLWFjdGl2ZScpO1xuICB9XG5cbiAgZ29Ub0NsaWNrKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmFuY2hvckNvbXAuaGFuZGxlU2Nyb2xsVG8odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnVucmVnaXN0ZXJMaW5rKHRoaXMpO1xuICB9XG59XG4iXX0=