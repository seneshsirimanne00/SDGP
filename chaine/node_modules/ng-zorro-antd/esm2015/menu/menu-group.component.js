/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, Renderer2, SkipSelf, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzIsMenuInsideDropDownToken } from './menu.token';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["titleElement"];
const _c1 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzTitle);
} }
function NzMenuGroupComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
} }
const _c2 = ["*", [["", "title", ""]]];
const _c3 = ["*", "[title]"];
export function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
export class NzMenuGroupComponent {
    constructor(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    ngAfterViewInit() {
        const ulElement = this.titleElement.nativeElement.nextElementSibling;
        if (ulElement) {
            /** add classname to ul **/
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    }
}
NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzIsMenuInsideDropDownToken)); };
NzMenuGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], viewQuery: function NzMenuGroupComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.titleElement = _t.first);
    } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuGroupFactory,
                deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
            }
        ])], attrs: _c1, ngContentSelectors: _c3, decls: 5, vars: 6, consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"], [4, "ngIf"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", null, 0);
        ɵngcc0.ɵɵtemplate(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, NzMenuGroupComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(4);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc2.NgIf], encapsulation: 2, changeDetection: 0 });
NzMenuGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];
NzMenuGroupComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    titleElement: [{ type: ViewChild, args: ['titleElement',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuGroupComponent, [{
        type: Component,
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuGroupFactory,
                        deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: Boolean, decorators: [{
                type: Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }]; }, { nzTitle: [{
            type: Input
        }], titleElement: [{
            type: ViewChild,
            args: ['titleElement']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMseUJBQWtDO0FBQUksSUFDckUsT0FBTyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2RSxDQUFDO0FBMkJELE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQUlsQyxZQUNTLFVBQXNCLEVBQ3JCLFFBQW1CLEVBQ2lCLG9CQUE2QjtBQUMxRSxRQUhRLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDZ0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO0FBQzdFLFFBQ0ksTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUM7QUFDekcsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hFLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUFLLFFBQ2xCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzFFLFFBQUksSUFBSSxTQUFTLEVBQUU7QUFDbkIsWUFBTSwyQkFBMkI7QUFDakMsWUFBTSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztBQUNySCxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7Z0RBL0NDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCLGtCQUMzQixRQUFRLEVBQUUsYUFBYSxrQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFNBQVMsRUFBRTtVQUNULG9EQUFvRCxxQkFDcEQsMEJBQ0UsT0FBTyxFQUFFLDJCQUEyQiwwQkFDcEMsVUFBVSxFQUFFO0lBQWdCLDBCQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQUksUUFBUSxFQUFFLEVBQUUsSUFBSTtPQUFRLEVBQUUsRUFBRTtzQkFBMkIsQ0FBQyxDQUFDLHNCQUN0RSxrQkFDRixrQkFDRDtJQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOzs7Ozs7O29DQVVULGtCQUNELG1CQUFtQixFQUFFLEtBQUssY0FDM0I7Ozs7Ozs7Ozs7Ozs7b0hBQ0k7QUFBQztBQUE4QyxZQXpDbEQsVUFBVTtBQUNWLFlBR0EsU0FBUztBQUNULDBDQTJDRyxNQUFNLFNBQUMsMkJBQTJCO0FBQVE7QUFBRztBQUU1QyxzQkFSSCxLQUFLO0FBQUssMkJBQ1YsU0FBUyxTQUFDLGNBQWM7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVHcm91cEZhY3RvcnkoaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbjogYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA/IGlzTWVudUluc2lkZURyb3BEb3duVG9rZW4gOiBmYWxzZTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1tZW51LWdyb3VwXScsXG4gIGV4cG9ydEFzOiAnbnpNZW51R3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLyoqIGNoZWNrIGlmIG1lbnUgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IE1lbnVHcm91cEZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuXV1cbiAgICB9XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW2NsYXNzLmFudC1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLXRpdGxlXT1cImlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgICN0aXRsZUVsZW1lbnRcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIiAqbmdJZj1cIiFuelRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCd0aXRsZUVsZW1lbnQnKSB0aXRsZUVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuXG4gICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuaXNNZW51SW5zaWRlRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cCcgOiAnYW50LW1lbnUtaXRlbS1ncm91cCc7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWxFbGVtZW50ID0gdGhpcy50aXRsZUVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmICh1bEVsZW1lbnQpIHtcbiAgICAgIC8qKiBhZGQgY2xhc3NuYW1lIHRvIHVsICoqL1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3QnIDogJ2FudC1tZW51LWl0ZW0tZ3JvdXAtbGlzdCc7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHVsRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==