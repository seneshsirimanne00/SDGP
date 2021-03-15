/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineService } from './timeline.service';
import { TimelineTimeDefaultColors } from './typings';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './timeline.service';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';

const _c0 = ["template"];
function NzTimelineItemComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzDot);
} }
function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 1);
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, NzTimelineItemComponent_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-timeline-item-right", (ctx_r1.nzPosition || ctx_r1.position) === "right")("ant-timeline-item-left", (ctx_r1.nzPosition || ctx_r1.position) === "left")("ant-timeline-item-last", ctx_r1.isLast);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("border-color", ctx_r1.borderColor);
    ɵngcc0.ɵɵclassProp("ant-timeline-item-head-red", ctx_r1.nzColor === "red")("ant-timeline-item-head-blue", ctx_r1.nzColor === "blue")("ant-timeline-item-head-green", ctx_r1.nzColor === "green")("ant-timeline-item-head-gray", ctx_r1.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r1.nzDot);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzDot);
} }
const _c1 = ["*"];
function isDefaultColor(color) {
    return TimelineTimeDefaultColors.findIndex(i => i === color) !== -1;
}
export class NzTimelineItemComponent {
    constructor(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.nzColor = 'blue';
        this.isLast = false;
        this.borderColor = null;
    }
    ngOnChanges(changes) {
        this.timelineService.markForCheck();
        if (changes.nzColor) {
            this.updateCustomColor();
        }
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
    updateCustomColor() {
        this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
    }
}
NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.TimelineService)); };
NzTimelineItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { nzColor: "nzColor", nzPosition: "nzPosition", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTimelineItemComponent_ng_template_0_Template, 6, 19, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzTimelineItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TimelineService }
];
NzTimelineItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['template', { static: false },] }],
    nzPosition: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzDot: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.TimelineService }]; }, { nzColor: [{
            type: Input
        }], template: [{
            type: ViewChild,
            args: ['template', { static: false }]
        }], nzPosition: [{
            type: Input
        }], nzDot: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBMkMseUJBQXlCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9GLFNBQVMsY0FBYyxDQUFDLEtBQWM7QUFBSSxJQUN4QyxPQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBbUNELE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQVdyQyxZQUFvQixHQUFzQixFQUFVLGVBQWdDO0FBQUksUUFBcEUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBUDVFLFlBQU8sR0FBd0IsTUFBTSxDQUFDO0FBQ2pELFFBRUUsV0FBTSxHQUFHLEtBQUssQ0FBQztBQUNqQixRQUFFLGdCQUFXLEdBQWtCLElBQUksQ0FBQztBQUNwQyxJQUV5RixDQUFDO0FBQzFGLElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QyxRQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQy9CLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWE7QUFBSyxRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ1UsaUJBQWlCO0FBQUssUUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDMUUsSUFBRSxDQUFDO0FBQ0g7bURBNURDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDO0NBQW1CLEVBQUUsS0FBSyxrQkFDMUIsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozt1R0EyQlA7d0JBRkYsY0FDRix0Q0FDSztBQUFpRCxZQWxEckQsaUJBQWlCO0FBQ2pCLFlBU08sZUFBZTtBQUFHO0FBQUc7QUFDWCx1QkF3Q2hCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8seUJBRTlDLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGltZWxpbmVTZXJ2aWNlIH0gZnJvbSAnLi90aW1lbGluZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29sb3IsIE56VGltZWxpbmVQb3NpdGlvbiwgVGltZWxpbmVUaW1lRGVmYXVsdENvbG9ycyB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBUaW1lbGluZVRpbWVEZWZhdWx0Q29sb3JzLmZpbmRJbmRleChpID0+IGkgPT09IGNvbG9yKSAhPT0gLTE7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUtaXRlbSwgW256LXRpbWVsaW5lLWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lSXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLXJpZ2h0XT1cIihuelBvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ3JpZ2h0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sZWZ0XT1cIihuelBvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ2xlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWxhc3RdPVwiaXNMYXN0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZFwiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkXT1cIm56Q29sb3IgPT09ICdyZWQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXT1cIm56Q29sb3IgPT09ICdibHVlJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW5dPVwibnpDb2xvciA9PT0gJ2dyZWVuJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JheV09XCJuekNvbG9yID09PSAnZ3JheSdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbV09XCIhIW56RG90XCJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekRvdFwiPnt7IG56RG90IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56UG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XG4gIEBJbnB1dCgpIG56Q29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnYmx1ZSc7XG4gIEBJbnB1dCgpIG56RG90Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaXNMYXN0ID0gZmFsc2U7XG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbUNvbG9yKCk7XG4gICAgfVxuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBpc0RlZmF1bHRDb2xvcih0aGlzLm56Q29sb3IpID8gbnVsbCA6IHRoaXMubnpDb2xvcjtcbiAgfVxufVxuIl19