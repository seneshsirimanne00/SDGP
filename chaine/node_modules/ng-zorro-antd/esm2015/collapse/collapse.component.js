/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';

const _c0 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'collapse';
export class NzCollapseComponent {
    constructor(nzConfigService, cdr, elementRef, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzAccordion = false;
        this.nzBordered = true;
        this.nzGhost = false;
        this.nzExpandIconPosition = 'left';
        this.dir = 'ltr';
        this.listOfNzCollapsePanelComponent = [];
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-collapse');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzCollapseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], hostVars: 10, hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
    } }, inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered", nzGhost: "nzGhost", nzExpandIconPosition: "nzExpandIconPosition" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzCollapseComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzExpandIconPosition: [{ type: Input }]
};
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzGhost", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-collapse-icon-position-left]': `nzExpandIconPosition === 'left'`,
                    '[class.ant-collapse-icon-position-right]': `nzExpandIconPosition === 'right'`,
                    '[class.ant-collapse-ghost]': `nzGhost`,
                    '[class.ant-collapse-borderless]': '!nzBordered',
                    '[class.ant-collapse-rtl]': "dir === 'rtl'"
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzAccordion: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzExpandIconPosition: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NvbGxhcHNlL2NvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBSTNDLE1BQU0scUJBQXFCLEdBQWdCLFVBQVUsQ0FBQztBQWtCdEQsTUFBTSxPQUFPLG1CQUFtQjtBQUFHLElBZWpDLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDdEIsVUFBc0IsRUFDVixjQUE4QjtBQUNuRCxRQUpRLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ1gsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQ3RELFFBbkJXLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO0FBQzlELFFBSXlDLGdCQUFXLEdBQVksS0FBSyxDQUFDO0FBQ3RFLFFBQXlDLGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDcEUsUUFBeUMsWUFBTyxHQUFZLEtBQUssQ0FBQztBQUNsRSxRQUFXLHlCQUFvQixHQUFxQixN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RSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFO21CQUVULGtCQUNELElBQUksRUFBRSxzQkFDSix5Q0FBeUMsRUFBRSxpQ0FBaUMsc0JBQzVFLDBDQUEwQztDQUFFLGtDQUFrQyxzQkFDOUUsNEJBQTRCLEVBQUUsU0FBUyxzQkFDdkMsaUNBQWlDLEVBQUUsYUFBYSxzQkFDaEQsMEJBQTBCLEVBQUUsZUFBZSxrQkFDNUMsY0FDRjs7OztpREFDSTtBQUFDO0FBQTZDLFlBMUI3QixlQUFlO0FBQUksWUFWdkMsaUJBQWlCO0FBQ2pCLFlBQ0EsVUFBVTtBQUNWLFlBTmtCLGNBQWMsdUJBMEQ3QixRQUFRO0FBQU07QUFBRztBQUV0QiwwQkFmRyxLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxtQ0FDVixLQUFLO0FBQUk7QUFINkI7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBQ2hDLHdEQUQ0RDtBQUM3QjtBQUFhLElBQTFDLFVBQVUsRUFBRTtBQUFFLElBQUEsWUFBWSxFQUFFO0FBQUU7QUFDOUIsdURBRHdEO0FBQzNCO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUM1QixvREFEb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNsRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2NvbGxhcHNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY29sbGFwc2UnLFxuICBleHBvcnRBczogJ256Q29sbGFwc2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pY29uLXBvc2l0aW9uLWxlZnRdJzogYG56RXhwYW5kSWNvblBvc2l0aW9uID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWljb24tcG9zaXRpb24tcmlnaHRdJzogYG56RXhwYW5kSWNvblBvc2l0aW9uID09PSAncmlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1naG9zdF0nOiBgbnpHaG9zdGAsXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtYm9yZGVybGVzc10nOiAnIW56Qm9yZGVyZWQnLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLXJ0bF0nOiBcImRpciA9PT0gJ3J0bCdcIlxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBY2NvcmRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Qm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256R2hvc3Q6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekFjY29yZGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgbnpHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekV4cGFuZEljb25Qb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWNvbGxhcHNlJyk7XG5cbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIGFkZFBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZVBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5zcGxpY2UodGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG5cbiAgY2xpY2soY29sbGFwc2U6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QWNjb3JkaW9uICYmICFjb2xsYXBzZS5uekFjdGl2ZSkge1xuICAgICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnRcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvbGxhcHNlKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5uekFjdGl2ZSkge1xuICAgICAgICAgICAgaXRlbS5uekFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5uekFjdGl2ZUNoYW5nZS5lbWl0KGl0ZW0ubnpBY3RpdmUpO1xuICAgICAgICAgICAgaXRlbS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb2xsYXBzZS5uekFjdGl2ZSA9ICFjb2xsYXBzZS5uekFjdGl2ZTtcbiAgICBjb2xsYXBzZS5uekFjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLm56QWN0aXZlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==