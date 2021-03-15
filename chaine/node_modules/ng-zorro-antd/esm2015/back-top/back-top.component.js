/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { InputNumber } from 'ng-zorro-antd/core/util';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from 'ng-zorro-antd/icon';

function NzBackTopComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelement(2, "i", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function NzBackTopComponent_div_0_ng_template_3_Template(rf, ctx) { }
function NzBackTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function NzBackTopComponent_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.clickBackTop(); });
    ɵngcc0.ɵɵtemplate(1, NzBackTopComponent_div_0_ng_template_1_Template, 3, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NzBackTopComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = ɵngcc0.ɵɵreference(2);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-back-top-rtl", ctx_r0.dir === "rtl");
    ɵngcc0.ɵɵproperty("@fadeMotion", undefined);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzTemplate || _r1);
} }
const NZ_CONFIG_MODULE_NAME = 'backTop';
export class NzBackTopComponent {
    constructor(doc, nzConfigService, scrollSrv, platform, cd, zone, cdr, directionality) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.platform = platform;
        this.cd = cd;
        this.zone = zone;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.scrollListenerDestroy$ = new Subject();
        this.destroy$ = new Subject();
        this.target = null;
        this.visible = false;
        this.dir = 'ltr';
        this.nzVisibilityHeight = 400;
        this.nzDuration = 450;
        this.nzClick = new EventEmitter();
        this.dir = this.directionality.value;
    }
    ngOnInit() {
        var _a;
        this.registerScrollEvent();
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0, { duration: this.nzDuration });
        this.nzClick.emit(true);
    }
    getTarget() {
        return this.target || window;
    }
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.detectChanges();
    }
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollListenerDestroy$.next();
        this.handleScroll();
        this.zone.runOutsideAngular(() => {
            fromEvent(this.getTarget(), 'scroll')
                .pipe(throttleTime(50), takeUntil(this.scrollListenerDestroy$))
                .subscribe(() => this.handleScroll());
        });
    }
    ngOnDestroy() {
        this.scrollListenerDestroy$.next();
        this.scrollListenerDestroy$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        const { nzTarget } = changes;
        if (nzTarget) {
            this.target = typeof this.nzTarget === 'string' ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
            this.registerScrollEvent();
        }
    }
}
NzBackTopComponent.ɵfac = function NzBackTopComponent_Factory(t) { return new (t || NzBackTopComponent)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzScrollService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzBackTopComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBackTopComponent, selectors: [["nz-back-top"]], inputs: { nzVisibilityHeight: "nzVisibilityHeight", nzDuration: "nzDuration", nzTemplate: "nzTemplate", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzBackTop"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ant-back-top", 3, "ant-back-top-rtl", "click", 4, "ngIf"], [1, "ant-back-top", 3, "click"], ["defaultContent", ""], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"], ["nz-icon", "", "nzType", "vertical-align-top"]], template: function NzBackTopComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzBackTopComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc5.NgIf, ɵngcc5.NgTemplateOutlet, ɵngcc6.NzIconDirective], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
NzBackTopComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzBackTopComponent.propDecorators = {
    nzTemplate: [{ type: Input }],
    nzVisibilityHeight: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzDuration: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzBackTopComponent.prototype, "nzDuration", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBackTopComponent, [{
        type: Component,
        args: [{
                selector: 'nz-back-top',
                exportAs: 'nzBackTop',
                animations: [fadeMotion],
                template: `
    <div class="ant-back-top" [class.ant-back-top-rtl]="dir === 'rtl'" (click)="clickBackTop()" @fadeMotion *ngIf="visible">
      <ng-template #defaultContent>
        <div class="ant-back-top-content">
          <div class="ant-back-top-icon">
            <i nz-icon nzType="vertical-align-top"></i>
          </div>
        </div>
      </ng-template>
      <ng-template [ngTemplateOutlet]="nzTemplate || defaultContent"></ng-template>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.NzScrollService }, { type: ɵngcc3.Platform }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzVisibilityHeight: [{
            type: Input
        }], nzDuration: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzTemplate: [{
            type: Input
        }], nzTarget: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELE1BQU0scUJBQXFCLEdBQWdCLFNBQVMsQ0FBQztBQXNCckQsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBa0JoQyxZQUM0QixHQUFjLEVBQ2pDLGVBQWdDLEVBQy9CLFNBQTBCLEVBQzFCLFFBQWtCLEVBQ2xCLEVBQXFCLEVBQ3JCLElBQVksRUFD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QUMsVUFBVSxDQUFDLGtCQUN4QixRQUFRLEVBQUU7eUxBV1Qsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxtQkFBbUIsRUFBRSxLQUFLLGNBQzNCOzs7O2dLQUNJO0FBQUM7QUFBNEMsNENBbUI3QyxNQUFNLFNBQUMsUUFBUTtBQUFTLFlBakRQLGVBQWU7QUFBSSxZQUNoQyxlQUFlO0FBQUksWUFyQm5CLFFBQVE7QUFBSSxZQUluQixpQkFBaUI7QUFDakIsWUFJQSxNQUFNO0FBQ04sWUFOQSxpQkFBaUI7QUFDakIsWUFOa0IsY0FBYyx1QkE2RTdCLFFBQVE7QUFBTTtBQUFHO0FBQ2pCLHlCQWZGLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyxzQkFDVixNQUFNO0FBQUk7QUFIMkI7QUFBYSxJQUF6QyxVQUFVLEVBQUU7QUFBRSxJQUFBLFdBQVcsRUFBRTtBQUFFO0FBQ3BDLDhEQURvRTtBQUUvQztBQUFhLElBQTNCLFdBQVcsRUFBRTtBQUFFO0FBQ2Qsc0RBRHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDbkQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBOdW1iZXJJbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2JhY2tUb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1iYWNrLXRvcCcsXG4gIGV4cG9ydEFzOiAnbnpCYWNrVG9wJyxcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtYmFjay10b3BcIiBbY2xhc3MuYW50LWJhY2stdG9wLXJ0bF09XCJkaXIgPT09ICdydGwnXCIgKGNsaWNrKT1cImNsaWNrQmFja1RvcCgpXCIgQGZhZGVNb3Rpb24gKm5nSWY9XCJ2aXNpYmxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWJhY2stdG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWJhY2stdG9wLWljb25cIj5cbiAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwidmVydGljYWwtYWxpZ24tdG9wXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUZW1wbGF0ZSB8fCBkZWZhdWx0Q29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOekJhY2tUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelZpc2liaWxpdHlIZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEdXJhdGlvbjogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBASW5wdXQoKSBuelRlbXBsYXRlPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0TnVtYmVyKCkgbnpWaXNpYmlsaXR5SGVpZ2h0OiBudW1iZXIgPSA0MDA7XG4gIEBJbnB1dCgpIG56VGFyZ2V0Pzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56RHVyYXRpb246IG51bWJlciA9IDQ1MDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBjbGlja0JhY2tUb3AoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgMCwgeyBkdXJhdGlvbjogdGhpcy5uekR1cmF0aW9uIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogSFRNTEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlID09PSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSkgPiB0aGlzLm56VmlzaWJpbGl0eUhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxMaXN0ZW5lckRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXG4gICAgICAgIC5waXBlKHRocm90dGxlVGltZSg1MCksIHRha2VVbnRpbCh0aGlzLnNjcm9sbExpc3RlbmVyRGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxMaXN0ZW5lckRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLnNjcm9sbExpc3RlbmVyRGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelRhcmdldCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpUYXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIHRoaXMubnpUYXJnZXQgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3Rvcih0aGlzLm56VGFyZ2V0KSA6IHRoaXMubnpUYXJnZXQ7XG4gICAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==