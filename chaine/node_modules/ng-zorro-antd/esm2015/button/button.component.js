/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from 'ng-zorro-antd/core/transition-patch';

const _c0 = ["nz-button", ""];
function NzButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 1);
} }
const _c1 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'button';
export class NzButtonComponent {
    constructor(elementRef, cdr, renderer, nzConfigService, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzDanger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.nzType = null;
        this.nzShape = null;
        this.nzSize = 'default';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    insertSpan(nodes, renderer) {
        nodes.forEach(node => {
            if (node.nodeName === '#text') {
                const span = renderer.createElement('span');
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        });
    }
    assertIconOnly(element, renderer) {
        const listOfNode = Array.from(element.childNodes);
        const iconCount = listOfNode.filter(node => node.nodeName === 'I').length;
        const noText = listOfNode.every(node => node.nodeName !== '#text');
        const noSpan = listOfNode.every(node => node.nodeName !== 'SPAN');
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzLoading, nzType } = changes;
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
        if ((nzType === null || nzType === void 0 ? void 0 : nzType.currentValue) === 'danger') {
            warnDeprecation(`'danger' value of 'nzType' in Button is going to be removed in 12.0.0. Please use 'nzDanger' instead.`);
        }
    }
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    }
    ngAfterContentInit() {
        this.loading$
            .pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$))
            .subscribe(loading => {
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) { return new (t || NzButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzButtonComponent, selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]], contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzIconDirective, true, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    } }, hostVars: 32, hostBindings: function NzButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
        ɵngcc0.ɵɵclassProp("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-text", ctx.nzType === "text")("ant-btn-danger", ctx.nzType === "danger")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.nzSize === "large")("ant-btn-sm", ctx.nzSize === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-input-search-button", ctx.nzSearch)("ant-btn-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBlock: "nzBlock", nzGhost: "nzGhost", nzSearch: "nzSearch", nzLoading: "nzLoading", nzDanger: "nzDanger", disabled: "disabled", tabIndex: "tabIndex", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, exportAs: ["nzButton"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzButtonComponent_i_0_Template, 1, 0, "i", 0);
        ɵngcc0.ɵɵprojection(1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc5.ɵNzTransitionPatchDirective], encapsulation: 2, changeDetection: 0 });
NzButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NzConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzButtonComponent.propDecorators = {
    nzIconDirectiveElement: [{ type: ContentChild, args: [NzIconDirective, { read: ElementRef },] }],
    nzBlock: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzDanger: [{ type: Input }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }],
    nzType: [{ type: Input }],
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzDanger", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "disabled", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzButtonComponent, [{
        type: Component,
        args: [{
                selector: 'button[nz-button], a[nz-button]',
                exportAs: 'nzButton',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <i nz-icon nzType="loading" *ngIf="nzLoading"></i>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-btn-primary]': `nzType === 'primary'`,
                    '[class.ant-btn-dashed]': `nzType === 'dashed'`,
                    '[class.ant-btn-link]': `nzType === 'link'`,
                    '[class.ant-btn-text]': `nzType === 'text'`,
                    '[class.ant-btn-danger]': `nzType === 'danger'`,
                    '[class.ant-btn-circle]': `nzShape === 'circle'`,
                    '[class.ant-btn-round]': `nzShape === 'round'`,
                    '[class.ant-btn-lg]': `nzSize === 'large'`,
                    '[class.ant-btn-sm]': `nzSize === 'small'`,
                    '[class.ant-btn-dangerous]': `nzDanger`,
                    '[class.ant-btn-loading]': `nzLoading`,
                    '[class.ant-btn-background-ghost]': `nzGhost`,
                    '[class.ant-btn-block]': `nzBlock`,
                    '[class.ant-input-search-button]': `nzSearch`,
                    '[class.ant-btn-rtl]': `dir === 'rtl'`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBlock: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzDanger: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzIconDirectiveElement: [{
            type: ContentChild,
            args: [NzIconDirective, { read: ElementRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVk5RCxNQUFNLHFCQUFxQixHQUFnQixRQUFRLENBQUM7QUFnQ3BELE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQThDL0IsWUFDVSxVQUFzQixFQUN0QixHQUFzQixFQUN0QixRQUFtQixFQUNwQixlQUFnQyxFQUNuQixjQUE4QjtBQUNuRCxRQUxTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7QUFBQyxRQUNwQixtQkFBYyxH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QUFDaEIsb0RBRDBDO0FBQzNCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZixtREFEd0M7QUFDMUI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNmLG1EQUR3QztBQUk1QjtBQUFhLElBQTFCLFVBQVUsRUFBRTtBQUFFO0FBQ3JCLGlEQURxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDMUQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBkYW5nZXJgIG5vdCBzdXBwb3J0ZWQsIHVzZSBgbnpEYW5nZXJgIGluc3RlYWRcbiAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXG4gKi9cbnR5cGUgTnpMZWdhY3lCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2RlZmF1bHQnIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8ICd0ZXh0JyB8IG51bGw7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uVHlwZSA9IE56TGVnYWN5QnV0dG9uVHlwZTtcbmV4cG9ydCB0eXBlIE56QnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgTnpCdXR0b25TaXplID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW256LWJ1dHRvbl0sIGFbbnotYnV0dG9uXScsXG4gIGV4cG9ydEFzOiAnbnpCdXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJuekxvYWRpbmdcIj48L2k+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtYnRuLXByaW1hcnldJzogYG56VHlwZSA9PT0gJ3ByaW1hcnknYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFzaGVkXSc6IGBuelR5cGUgPT09ICdkYXNoZWQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tbGlua10nOiBgbnpUeXBlID09PSAnbGluaydgLFxuICAgICdbY2xhc3MuYW50LWJ0bi10ZXh0XSc6IGBuelR5cGUgPT09ICd0ZXh0J2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWRhbmdlcl0nOiBgbnpUeXBlID09PSAnZGFuZ2VyJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWNpcmNsZV0nOiBgbnpTaGFwZSA9PT0gJ2NpcmNsZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1yb3VuZF0nOiBgbnpTaGFwZSA9PT0gJ3JvdW5kJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFuZ2Vyb3VzXSc6IGBuekRhbmdlcmAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxvYWRpbmddJzogYG56TG9hZGluZ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3RdJzogYG56R2hvc3RgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1ibG9ja10nOiBgbnpCbG9ja2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbl0nOiBgbnpTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnZGlzYWJsZWQgPyAtMSA6ICh0YWJJbmRleCA9PT0gbnVsbCA/IG51bGwgOiB0YWJJbmRleCknLFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QmxvY2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256R2hvc3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGFuZ2VyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBDb250ZW50Q2hpbGQoTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbnpJY29uRGlyZWN0aXZlRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekdob3N0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRhbmdlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelR5cGU6IE56QnV0dG9uVHlwZSA9IG51bGw7XG4gIEBJbnB1dCgpIG56U2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpCdXR0b25TaXplID0gJ2RlZmF1bHQnO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgaW5zZXJ0U3Bhbihub2RlczogTm9kZUxpc3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcmVuZGVyZXIucGFyZW50Tm9kZShub2RlKTtcbiAgICAgICAgcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgc3Bhbiwgbm9kZSk7XG4gICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHNwYW4sIG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNzZXJ0SWNvbk9ubHkoZWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZOb2RlID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IGljb25Db3VudCA9IGxpc3RPZk5vZGUuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ0knKS5sZW5ndGg7XG4gICAgY29uc3Qgbm9UZXh0ID0gbGlzdE9mTm9kZS5ldmVyeShub2RlID0+IG5vZGUubm9kZU5hbWUgIT09ICcjdGV4dCcpO1xuICAgIGNvbnN0IG5vU3BhbiA9IGxpc3RPZk5vZGUuZXZlcnkobm9kZSA9PiBub2RlLm5vZGVOYW1lICE9PSAnU1BBTicpO1xuICAgIGNvbnN0IGlzSWNvbk9ubHkgPSBub1NwYW4gJiYgbm9UZXh0ICYmIGljb25Db3VudCA+PSAxO1xuICAgIGlmIChpc0ljb25Pbmx5KSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCAnYW50LWJ0bi1pY29uLW9ubHknKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWJ0bicpO1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX01PRFVMRV9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpMb2FkaW5nLCBuelR5cGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56TG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRoaXMubnpMb2FkaW5nKTtcbiAgICB9XG5cbiAgICBpZiAobnpUeXBlPy5jdXJyZW50VmFsdWUgPT09ICdkYW5nZXInKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCdkYW5nZXInIHZhbHVlIG9mICduelR5cGUnIGluIEJ1dHRvbiBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEyLjAuMC4gUGxlYXNlIHVzZSAnbnpEYW5nZXInIGluc3RlYWQuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXNzZXJ0SWNvbk9ubHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuaW5zZXJ0U3Bhbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpMb2FkaW5nKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19