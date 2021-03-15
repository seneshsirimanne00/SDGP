/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, NgZone, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { defer, merge, of, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c1 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) { }
function NzListItemActionsComponent_li_0_em_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "em", 3);
} }
function NzListItemActionsComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, NzListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵngcc0.ɵɵtemplate(2, NzListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", i_r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !last_r2);
} }
export class NzListItemExtraComponent {
    constructor() { }
}
NzListItemExtraComponent.ɵfac = function NzListItemExtraComponent_Factory(t) { return new (t || NzListItemExtraComponent)(); };
NzListItemExtraComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemExtraComponent, selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]], hostAttrs: [1, "ant-list-item-extra"], exportAs: ["nzListItemExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemExtraComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzListItemExtraComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemExtraComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-extra, [nz-list-item-extra]',
                exportAs: 'nzListItemExtra',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-item-extra'
                }
            }]
    }], function () { return []; }, null); })();
export class NzListItemActionComponent {
    constructor() { }
}
NzListItemActionComponent.ɵfac = function NzListItemActionComponent_Factory(t) { return new (t || NzListItemActionComponent)(); };
NzListItemActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemActionComponent, selectors: [["nz-list-item-action"]], viewQuery: function NzListItemActionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzListItemAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzListItemActionComponent.ctorParameters = () => [];
NzListItemActionComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemActionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-action',
                exportAs: 'nzListItemAction',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template><ng-content></ng-content></ng-template> `
            }]
    }], function () { return []; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
export class NzListItemActionsComponent {
    constructor(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer(() => {
            if (this.nzListItemActions) {
                return of(null);
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.contentChildrenChanges$));
        });
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if (this.nzActions.length) {
                this.actions = this.nzActions;
            }
            else {
                this.actions = this.nzListItemActions.map(action => action.templateRef);
            }
            this.cdr.detectChanges();
        });
    }
    ngOnChanges() {
        this.inputActionChanges$.next(null);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzListItemActionsComponent.ɵfac = function NzListItemActionsComponent_Factory(t) { return new (t || NzListItemActionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzListItemActionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemActionsComponent, selectors: [["ul", "nz-list-item-actions", ""]], contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemActionComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
    } }, hostAttrs: [1, "ant-list-item-action"], inputs: { nzActions: "nzActions" }, exportAs: ["nzListItemActions"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]], template: function NzListItemActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.actions);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
NzListItemActionsComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NzListItemActionsComponent.propDecorators = {
    nzActions: [{ type: Input }],
    nzListItemActions: [{ type: ContentChildren, args: [NzListItemActionComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ul[nz-list-item-actions]',
                exportAs: 'nzListItemActions',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
                host: {
                    class: 'ant-list-item-action'
                }
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzActions: [{
            type: Input
        }], nzListItemActions: [{
            type: ContentChildren,
            args: [NzListItemActionComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWNlbGwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0tY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVELE1BQU0sT0FBTyx3QkFBd0I7QUFDckMsSUFBRSxnQkFBZSxDQUFDO0FBQ2xCO29EQVhDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7WUFBMEMsa0JBQ3BELFFBQVEsRUFBRSxpQkFBaUIsa0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxRQUFRLEVBQUUsNkJBQTZCLGtCQUN2QyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLHFCQUFxQixrQkFDN0IsY0FDRjs7O2lEQUNJO0FBQUM7Ozs7Ozs7Ozs7OztnREFDVztBQVNqQixNQUFNLE9BQU8seUJBQXlCO0FBQ3RDLElBQ0UsZ0JBQWUsQ0FBQztBQUNsQjtxREFUQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtPQUMvQixRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLHdEQUF3RCxjQUNuRTs7Ozs7Ozs7aURBQ0k7QUFBQztBQUNZO0FBQ2QsMEJBREQsU0FBUyxTQUFDLFdBQVc7QUFBTTs7Ozs7Ozs7Ozs7O29CQUFFO0FBa0JoQyxNQUFNLE9BQU8sMEJBQTBCO0FBQUcsSUFpQnhDLFlBQW9CLE1BQWMsRUFBVSxHQUFzQjtBQUNwRSxRQURzQixXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQUMsUUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBaEIxRCxjQUFTLEdBQTZCLEVBQUUsQ0FBQztBQUNwRCxRQUVFLFlBQU8sR0FBNkIsRUFBRSxDQUFDO0FBQ3pDLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbkMsUUFBVSx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3BELFFBQVUsNEJBQXVCLEdBQXFCLEtBQUssQ0FBQyxHQUFHLEVBQUU7QUFDakUsWUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUNoQyxnQkFBTSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixhQUFLO0FBQ0wsWUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FDOUMsQ0FBQztBQUNOLFFBQUUsQ0FBQyxDQUFDLENBQUM7QUFDTCxRQUVJLEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQ2pFLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsYUFBTyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3RCLFlBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtBQUNuQyxnQkFBVSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDeEMsYUFBUztBQUFDLGlCQUFLO0FBQ2YsZ0JBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVksQ0FBQyxDQUFDO0FBQ25GLGFBQVM7QUFDVCxZQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDakMsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO3NEQXBEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDBCQUEwQixrQkFDcEMsUUFBUSxFQUFFLG1CQUFtQixrQkFDN0IsZUFBZSxFQUFFO01BQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLDZMQUtUO0VBQ0QsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxzQkFBc0I7RUFDOUIsY0FDRjs7Ozs7OztxSEFDSTtBQUFDO0FBQW9ELFlBaER4RCxNQUFNO0FBQ04sWUFMQSxpQkFBaUI7QUFDbEI7QUFBRztBQUdLLHdCQWlETixLQUFLO0FBQUssZ0NBQ1YsZUFBZSxTQUFDLHlCQUF5QjtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1leHRyYSwgW256LWxpc3QtaXRlbS1leHRyYV0nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1FeHRyYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1saXN0LWl0ZW0tZXh0cmEnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tYWN0aW9uJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtQWN0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bFtuei1saXN0LWl0ZW0tYWN0aW9uc10nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1BY3Rpb25zJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIGFjdGlvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cbiAgICA8L2xpPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1pdGVtLWFjdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQENvbnRlbnRDaGlsZHJlbihOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50KSBuekxpc3RJdGVtQWN0aW9ucyE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50PjtcblxuICBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW5wdXRBY3Rpb25DaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XG4gIHByaXZhdGUgY29udGVudENoaWxkcmVuQ2hhbmdlcyQ6IE9ic2VydmFibGU8bnVsbD4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMubnpMaXN0SXRlbUFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29udGVudENoaWxkcmVuQ2hhbmdlcyQpXG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgbWVyZ2UodGhpcy5jb250ZW50Q2hpbGRyZW5DaGFuZ2VzJCwgdGhpcy5pbnB1dEFjdGlvbkNoYW5nZXMkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm56QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56QWN0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56TGlzdEl0ZW1BY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLnRlbXBsYXRlUmVmISk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0QWN0aW9uQ2hhbmdlcyQubmV4dChudWxsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19