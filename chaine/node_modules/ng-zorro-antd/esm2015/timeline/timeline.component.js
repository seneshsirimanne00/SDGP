/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, Optional, QueryList, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { NzTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './timeline.service';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc5 from 'ng-zorro-antd/icon';

function NzTimelineComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 4);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzTimelineComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTimelineComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTimelineComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r5.template);
} }
function NzTimelineComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 4);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} }
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template, 1, 0, "i", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r8.nzPendingDot, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.nzPendingDot);
} }
function NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.isPendingBoolean ? "" : ctx_r9.nzPending, " ");
} }
function NzTimelineComponent_ng_template_4_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelement(1, "div", 7);
    ɵngcc0.ɵɵelementStart(2, "div", 8);
    ɵngcc0.ɵɵtemplate(3, NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template, 3, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 10);
    ɵngcc0.ɵɵtemplate(5, NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzPendingDot);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzPending);
} }
function NzTimelineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTimelineComponent_ng_template_4_li_0_Template, 6, 2, "li", 5);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.nzPending);
} }
const _c0 = ["*"];
export class NzTimelineComponent {
    constructor(cdr, timelineService, directionality) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.directionality = directionality;
        this.nzMode = 'left';
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.timelineItems = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { nzMode, nzReverse, nzPending } = changes;
        if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
            this.updateChildren();
        }
        if (nzPending) {
            this.isPendingBoolean = nzPending.currentValue === true;
        }
    }
    ngOnInit() {
        var _a;
        this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.updateChildren();
        this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateChildren();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateChildren() {
        if (this.listOfItems && this.listOfItems.length) {
            const length = this.listOfItems.length;
            this.listOfItems.forEach((item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position = getInferredTimelineItemPosition(index, this.nzMode);
                item.detectChanges();
            });
            this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
        }
        this.cdr.markForCheck();
    }
}
NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.TimelineService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzTimelineComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfItems = _t);
    } }, inputs: { nzMode: "nzMode", nzReverse: "nzReverse", nzPending: "nzPending", nzPendingDot: "nzPendingDot" }, exportAs: ["nzTimeline"], features: [ɵngcc0.ɵɵProvidersFeature([TimelineService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 13, consts: [[1, "ant-timeline"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pendingTemplate", ""], [3, "ngTemplateOutlet"], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, NzTimelineComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzTimelineComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, NzTimelineComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzTimelineComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵprojection(6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzReverse);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.timelineItems);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzReverse);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgTemplateOutlet, ɵngcc4.NzStringTemplateOutletDirective, ɵngcc5.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TimelineService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTimelineComponent.propDecorators = {
    listOfItems: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
    nzMode: [{ type: Input }],
    nzPending: [{ type: Input }],
    nzPendingDot: [{ type: Input }],
    nzReverse: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                providers: [TimelineService],
                exportAs: 'nzTimeline',
                template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-right]="nzMode === 'right'"
      [class.ant-timeline-alternate]="nzMode === 'alternate' || nzMode === 'custom'"
      [class.ant-timeline-pending]="!!nzPending"
      [class.ant-timeline-reverse]="nzReverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      <ng-container *ngIf="nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- timeline items -->
      <ng-container *ngFor="let item of timelineItems">
        <ng-template [ngTemplateOutlet]="item.template"></ng-template>
      </ng-container>
      <ng-container *ngIf="!nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      <li *ngIf="nzPending" class="ant-timeline-item ant-timeline-item-pending">
        <div class="ant-timeline-item-tail"></div>
        <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
          <ng-container *nzStringTemplateOutlet="nzPendingDot">
            {{ nzPendingDot }}
            <i *ngIf="!nzPendingDot" nz-icon nzType="loading"></i>
          </ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-container *nzStringTemplateOutlet="nzPending">
            {{ isPendingBoolean ? '' : nzPending }}
          </ng-container>
        </div>
      </li>
    </ng-template>
    <!-- Grasp items -->
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.TimelineService }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzMode: [{
            type: Input
        }], nzReverse: [{
            type: Input
        }], listOfItems: [{
            type: ContentChildren,
            args: [NzTimelineItemComponent]
        }], nzPending: [{
            type: Input
        }], nzPendingDot: [{
            type: Input
        }] }); })();
function simpleChangeActivated(simpleChange) {
    return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
    return mode === 'custom'
        ? undefined
        : mode === 'left'
            ? 'left'
            : mode === 'right'
                ? 'right'
                : mode === 'alternate' && index % 2 === 0
                    ? 'left'
                    : 'right';
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFJVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRHJELE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQWNqQyxZQUNVLEdBQXNCLEVBQ3RCLGVBQWdDLEVBQ3BCLGNBQThCO0FBQ25ELFFBSFMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7QUFBQyxRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFmVyxXQUFNLEdBQW1CLE1BQU0sQ0FBQztBQUMzQyxRQUVXLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFDRSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7QUFDcEMsUUFBRSxrQkFBYSxHQUE4QixFQUFFLENBQUM7QUFDaEQsUUFBRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0FB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QUNmLFFBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNO0FBQ3JCLFlBQUksQ0FBQyxDQUFDLE1BQU07QUFDWixZQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTztBQUN0QixnQkFBSSxDQUFDLENBQUMsT0FBTztBQUNiLGdCQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztBQUM3QyxvQkFBSSxDQUFDLENBQUMsTUFBTTtBQUNaLG9CQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDZCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZWxpbmVTZXJ2aWNlIH0gZnJvbSAnLi90aW1lbGluZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGltZWxpbmVNb2RlLCBOelRpbWVsaW5lUG9zaXRpb24gfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lJyxcbiAgcHJvdmlkZXJzOiBbVGltZWxpbmVTZXJ2aWNlXSxcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWxcbiAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lXCJcbiAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtcmlnaHRdPVwibnpNb2RlID09PSAncmlnaHQnXCJcbiAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtYWx0ZXJuYXRlXT1cIm56TW9kZSA9PT0gJ2FsdGVybmF0ZScgfHwgbnpNb2RlID09PSAnY3VzdG9tJ1wiXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXBlbmRpbmddPVwiISFuelBlbmRpbmdcIlxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1yZXZlcnNlXT1cIm56UmV2ZXJzZVwiXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICA+XG4gICAgICA8IS0tIHBlbmRpbmcgZG90IChyZXZlcnNlZCkgLS0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpSZXZlcnNlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwicGVuZGluZ1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8IS0tIHRpbWVsaW5lIGl0ZW1zIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aW1lbGluZUl0ZW1zXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuelJldmVyc2VcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJwZW5kaW5nVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwhLS0gcGVuZGluZyBkb3QgLS0+XG4gICAgPC91bD5cbiAgICA8bmctdGVtcGxhdGUgI3BlbmRpbmdUZW1wbGF0ZT5cbiAgICAgIDxsaSAqbmdJZj1cIm56UGVuZGluZ1wiIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0gYW50LXRpbWVsaW5lLWl0ZW0tcGVuZGluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tdGFpbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZCBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbSBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpQZW5kaW5nRG90XCI+XG4gICAgICAgICAgICB7eyBuelBlbmRpbmdEb3QgfX1cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIW56UGVuZGluZ0RvdFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvaT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UGVuZGluZ1wiPlxuICAgICAgICAgICAge3sgaXNQZW5kaW5nQm9vbGVhbiA/ICcnIDogbnpQZW5kaW5nIH19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwhLS0gR3Jhc3AgaXRlbXMgLS0+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRpbWVsaW5lSXRlbUNvbXBvbmVudCkgbGlzdE9mSXRlbXMhOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIG56TW9kZTogTnpUaW1lbGluZU1vZGUgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIG56UGVuZGluZz86IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpQZW5kaW5nRG90Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGlzUGVuZGluZ0Jvb2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGltZWxpbmVJdGVtczogTnpUaW1lbGluZUl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek1vZGUsIG56UmV2ZXJzZSwgbnpQZW5kaW5nIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKHNpbXBsZUNoYW5nZUFjdGl2YXRlZChuek1vZGUpIHx8IHNpbXBsZUNoYW5nZUFjdGl2YXRlZChuelJldmVyc2UpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgaWYgKG56UGVuZGluZykge1xuICAgICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gbnpQZW5kaW5nLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuXG4gICAgdGhpcy5saXN0T2ZJdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZJdGVtcyAmJiB0aGlzLmxpc3RPZkl0ZW1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5saXN0T2ZJdGVtcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMubGlzdE9mSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5uelJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xuICAgICAgICBpdGVtLnBvc2l0aW9uID0gZ2V0SW5mZXJyZWRUaW1lbGluZUl0ZW1Qb3NpdGlvbihpbmRleCwgdGhpcy5uek1vZGUpO1xuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zID0gdGhpcy5uelJldmVyc2UgPyB0aGlzLmxpc3RPZkl0ZW1zLnRvQXJyYXkoKS5yZXZlcnNlKCkgOiB0aGlzLmxpc3RPZkl0ZW1zLnRvQXJyYXkoKTtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2ltcGxlQ2hhbmdlQWN0aXZhdGVkKHNpbXBsZUNoYW5nZT86IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoc2ltcGxlQ2hhbmdlICYmIChzaW1wbGVDaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCBzaW1wbGVDaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZmVycmVkVGltZWxpbmVJdGVtUG9zaXRpb24oaW5kZXg6IG51bWJlciwgbW9kZTogTnpUaW1lbGluZU1vZGUpOiBOelRpbWVsaW5lUG9zaXRpb24gfCB1bmRlZmluZWQge1xuICByZXR1cm4gbW9kZSA9PT0gJ2N1c3RvbSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogbW9kZSA9PT0gJ2xlZnQnXG4gICAgPyAnbGVmdCdcbiAgICA6IG1vZGUgPT09ICdyaWdodCdcbiAgICA/ICdyaWdodCdcbiAgICA6IG1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxuICAgID8gJ2xlZnQnXG4gICAgOiAncmlnaHQnO1xufVxuIl19