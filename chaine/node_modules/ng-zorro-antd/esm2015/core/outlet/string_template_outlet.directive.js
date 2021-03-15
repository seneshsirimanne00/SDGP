/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzStringTemplateOutletDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.embeddedViewRef = null;
        this.context = new NzStringTemplateOutletContext();
        this.nzStringTemplateOutletContext = null;
        this.nzStringTemplateOutlet = null;
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    recreateView() {
        this.viewContainer.clear();
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        const templateRef = (isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef);
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
    }
    updateContext() {
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        const newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
        const oldCtx = this.embeddedViewRef.context;
        if (newCtx) {
            for (const propName of Object.keys(newCtx)) {
                oldCtx[propName] = newCtx[propName];
            }
        }
    }
    ngOnChanges(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        const shouldRecreateView = () => {
            let shouldOutletRecreate = false;
            if (nzStringTemplateOutlet) {
                if (nzStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                }
                else {
                    const isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
                    const isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            const hasContextShapeChanged = (ctxChange) => {
                const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                const currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    for (const propName of currCtxKeys) {
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return true;
                }
            };
            const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        };
        if (nzStringTemplateOutlet) {
            this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        const recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        }
        else {
            /** update context **/
            this.updateContext();
        }
    }
}
NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzStringTemplateOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();
export class NzStringTemplateOutletContext {
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9vdXRsZXQvc3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQW1CLEtBQUssRUFBMEMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96SSxNQUFNLE9BQU8sK0JBQStCO0FBQUcsSUErQjdDLFlBQW9CLGFBQStCLEVBQVUsV0FBbUM7QUFBSSxRQUFoRixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7QUFBQyxRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtBQUFDLFFBOUJ6RixvQkFBZSxHQUFzQyxJQUFJLENBQUM7QUFDcEUsUUFBVSxZQUFPLEdBQUcsSUFBSSw2QkFBNkIsRUFBRSxDQUFDO0FBQ3hELFFBQVcsa0NBQTZCLEdBQXFCLElBQUksQ0FBQztBQUNsRSxRQUFXLDJCQUFzQixHQUF1QyxJQUFJLENBQUM7QUFDN0UsSUEwQnFHLENBQUM7QUFDdEcsSUExQkUsTUFBTSxDQUFDLHNCQUFzQixDQUFJLElBQXdDLEVBQUUsSUFBZTtBQUFJLFFBQzVGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLElBQUUsQ0FBQztBQUNILElBQ1UsWUFBWTtBQUFLLFFBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsUUFBSSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLFlBQVksV0FBVyxDQUFDO0FBQzdFLFFBQUksTUFBTSxXQUFXLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYyxDQUFDO0FBQ3RHLFFBQUksSUFBSSxDQUFDLGVBQWUsR0FB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QUNMLFFBQ0ksTUFBTSxZQUFZLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztBQUM5QyxRQUFJLElBQUksWUFBWSxFQUFFO0FBQ3RCLFlBQU0seURBQXlEO0FBQy9ELFlBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxzQkFBc0I7QUFDNUIsWUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDM0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzJEQWpGQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDBCQUEwQixrQkFDcEMsUUFBUSxFQUFFLHdCQUF3QixjQUNuQzt5V0FDSTtBQUFDO0FBQXlELFlBUGtDLGdCQUFnQjtBQUFJLFlBQWpDLFdBQVc7QUFBRztBQUFHO0FBQ3ZGLDRDQVNYLEtBQUs7QUFBSyxxQ0FDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7O29CQUFFO0FBMkVkLE1BQU0sT0FBTyw2QkFBNkI7QUFDMUMsQ0FDQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelN0cmluZ1RlbXBsYXRlT3V0bGV0XScsXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZTxfVCA9IHVua25vd24+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29udGV4dCA9IG5ldyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCgpO1xuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56U3RyaW5nVGVtcGxhdGVPdXRsZXQ6IE56U2FmZUFueSB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSBudWxsO1xuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KF9kaXI6IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmU8VD4sIF9jdHg6IE56U2FmZUFueSk6IF9jdHggaXMgTnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNyZWF0ZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgY29uc3QgaXNUZW1wbGF0ZVJlZiA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVmID0gKGlzVGVtcGxhdGVSZWYgPyB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXQgOiB0aGlzLnRlbXBsYXRlUmVmKSBhcyBOelNhZmVBbnk7XG4gICAgdGhpcy5lbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgdGVtcGxhdGVSZWYsXG4gICAgICBpc1RlbXBsYXRlUmVmID8gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCA6IHRoaXMuY29udGV4dFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbnRleHQoKTogdm9pZCB7XG4gICAgY29uc3QgaXNUZW1wbGF0ZVJlZiA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIGNvbnN0IG5ld0N0eCA9IGlzVGVtcGxhdGVSZWYgPyB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0IDogdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IG9sZEN0eCA9IHRoaXMuZW1iZWRkZWRWaWV3UmVmIS5jb250ZXh0IGFzIE56U2FmZUFueTtcbiAgICBpZiAobmV3Q3R4KSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKG5ld0N0eCkpIHtcbiAgICAgICAgb2xkQ3R4W3Byb3BOYW1lXSA9IG5ld0N0eFtwcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+KSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xuICAgIGNvbnN0IHNob3VsZFJlY3JlYXRlVmlldyA9ICgpOiBib29sZWFuID0+IHtcbiAgICAgIGxldCBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGZhbHNlO1xuICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQpIHtcbiAgICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaXNQcmV2aW91c091dGxldFRlbXBsYXRlID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50T3V0bGV0VGVtcGxhdGUgPSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gaXNQcmV2aW91c091dGxldFRlbXBsYXRlIHx8IGlzQ3VycmVudE91dGxldFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkID0gKGN0eENoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xuICAgICAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xuICAgICAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XG4gICAgICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzaG91bGRDb250ZXh0UmVjcmVhdGUgPSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCAmJiBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XG4gICAgfTtcblxuICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XG4gICAgICB0aGlzLmNvbnRleHQuJGltcGxpY2l0ID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gc2hvdWxkUmVjcmVhdGVWaWV3KCk7XG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xuICAgICAgLyoqIHJlY3JlYXRlIHZpZXcgd2hlbiBjb250ZXh0IHNoYXBlIG9yIG91dGxldCBjaGFuZ2UgKiovXG4gICAgICB0aGlzLnJlY3JlYXRlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogdXBkYXRlIGNvbnRleHQgKiovXG4gICAgICB0aGlzLnVwZGF0ZUNvbnRleHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogTnpTYWZlQW55O1xufVxuIl19