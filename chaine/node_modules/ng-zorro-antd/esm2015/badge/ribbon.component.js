/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { badgePresetColors } from './preset-colors';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/outlet';

function NzRibbonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzText);
} }
const _c0 = ["*"];
export class NzRibbonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzPlacement = 'end';
        this.nzText = null;
        this.presetColor = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-ribbon-wrapper');
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
}
NzRibbonComponent.ɵfac = function NzRibbonComponent_Factory(t) { return new (t || NzRibbonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRibbonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRibbonComponent, selectors: [["nz-ribbon"]], inputs: { nzPlacement: "nzPlacement", nzText: "nzText", nzColor: "nzColor" }, exportAs: ["nzRibbon"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 11, consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"]], template: function NzRibbonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NzRibbonComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelement(3, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
        ɵngcc0.ɵɵstyleProp("background-color", !ctx.presetColor && ctx.nzColor);
        ɵngcc0.ɵɵclassProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("color", !ctx.presetColor && ctx.nzColor);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzRibbonComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzRibbonComponent.propDecorators = {
    nzColor: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzText: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRibbonComponent, [{
        type: Component,
        args: [{
                selector: 'nz-ribbon',
                exportAs: 'nzRibbon',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzPlacement: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzColor: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmliYm9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9iYWRnZS9yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFzQnBELE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQU0vQixZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFKbEMsZ0JBQVcsR0FBb0IsS0FBSyxDQUFDO0FBQ2hELFFBQVcsV0FBTSxHQUFzQyxJQUFJLENBQUM7QUFDNUQsUUFBRSxnQkFBVyxHQUFrQixJQUFJLENBQUM7QUFDcEMsUUFFSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLFFBQUksSUFBSSxPQUFPLEVBQUU7QUFDakIsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlHLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDs2Q0FyQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxXQUFXLGtCQUNyQixRQUFRLEVBQUUsVUFBVTtRQUNwQixtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRTs7Ozs7MkJBWVQ7RUFDRjs7Ozs7Ozs7Ozt1R0FDSTtBQUFDO0FBQTJDLFlBN0IvQyxVQUFVO0FBQ1g7QUFBRztBQUdGLHNCQTBCQyxLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0Q29sb3JzIH0gZnJvbSAnLi9wcmVzZXQtY29sb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcmliYm9uJyxcbiAgZXhwb3J0QXM6ICduelJpYmJvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtcmliYm9uXCJcbiAgICAgIFtjbGFzc109XCJwcmVzZXRDb2xvciAmJiAnYW50LXJpYmJvbi1jb2xvci0nICsgcHJlc2V0Q29sb3JcIlxuICAgICAgW2NsYXNzLmFudC1yaWJib24tcGxhY2VtZW50LWVuZF09XCJuelBsYWNlbWVudCA9PT0gJ2VuZCdcIlxuICAgICAgW2NsYXNzLmFudC1yaWJib24tcGxhY2VtZW50LXN0YXJ0XT1cIm56UGxhY2VtZW50ID09PSAnc3RhcnQnXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIiFwcmVzZXRDb2xvciAmJiBuekNvbG9yXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUZXh0XCI+e3sgbnpUZXh0IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXJpYmJvbi1jb3JuZXJcIiBbc3R5bGUuY29sb3JdPVwiIXByZXNldENvbG9yICYmIG56Q29sb3JcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56Q29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6ICdzdGFydCcgfCAnZW5kJyA9ICdlbmQnO1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtcmliYm9uLXdyYXBwZXInKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Q29sb3IgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q29sb3IpIHtcbiAgICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLm56Q29sb3IgJiYgYmFkZ2VQcmVzZXRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpICE9PSAtMSA/IHRoaXMubnpDb2xvciA6IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=