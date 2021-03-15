/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc4 from 'ng-zorro-antd/core/outlet';

function NzSelectArrowComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 2);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 7);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);
    ɵngcc0.ɵɵtemplate(2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.search);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.search);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r9 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", suffixIcon_r9);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.suffixIcon);
} }
function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r4 = ɵngcc0.ɵɵreference(2);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
} }
export class NzSelectArrowComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.loading = false;
        this.search = false;
        this.suffixIcon = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select-arrow');
    }
}
NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) { return new (t || NzSelectArrowComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzSelectArrowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSelectArrowComponent, selectors: [["nz-select-arrow"]], hostVars: 2, hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-arrow-loading", ctx.loading);
    } }, inputs: { loading: "loading", search: "search", suffixIcon: "suffixIcon" }, decls: 3, vars: 2, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzSelectArrowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzIconDirective, ɵngcc3.ɵNzTransitionPatchDirective, ɵngcc4.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzSelectArrowComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzSelectArrowComponent.propDecorators = {
    loading: [{ type: Input }],
    search: [{ type: Input }],
    suffixIcon: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectArrowComponent, [{
        type: Component,
        args: [{
                selector: 'nz-select-arrow',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></i>
    <ng-template #defaultArrow>
      <ng-container *ngIf="!suffixIcon; else suffixTemplate">
        <i nz-icon nzType="down" *ngIf="!search"></i>
        <i nz-icon nzType="search" *ngIf="search"></i>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </ng-template>
    </ng-template>
  `,
                host: {
                    '[class.ant-select-arrow-loading]': 'loading'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { loading: [{
            type: Input
        }], search: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFycm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LWFycm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnRILE1BQU0sT0FBTyxzQkFBc0I7QUFDbkMsSUFJRSxZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFKbEMsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFXLFdBQU0sR0FBRyxLQUFLLENBQUM7QUFDMUIsUUFBVyxlQUFVLEdBQTJDLElBQUksQ0FBQztBQUNyRSxRQUVJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNwRSxJQUFFLENBQUM7QUFDSDtrREEvQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxpQkFBaUIsa0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztHQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFOzsrVUFhVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osa0NBQWtDLEVBQUUsU0FBUyxrQkFDOUMsY0FDRjs7Ozs7O2dMQUNJO0FBQUM7QUFDVSxZQTFCNkIsVUFBVTtBQUFHO0FBQUc7QUFBMEMsc0JBMEJwRyxLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc2VsZWN0LWFycm93JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIGRlZmF1bHRBcnJvd1wiPjwvaT5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRBcnJvdz5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3VmZml4SWNvbjsgZWxzZSBzdWZmaXhUZW1wbGF0ZVwiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiAqbmdJZj1cIiFzZWFyY2hcIj48L2k+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic2VhcmNoXCIgKm5nSWY9XCJzZWFyY2hcIj48L2k+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjc3VmZml4VGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWZmaXhJY29uOyBsZXQgc3VmZml4SWNvblwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJzdWZmaXhJY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hcnJvdy1sb2FkaW5nXSc6ICdsb2FkaW5nJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0QXJyb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXNlbGVjdC1hcnJvdycpO1xuICB9XG59XG4iXX0=