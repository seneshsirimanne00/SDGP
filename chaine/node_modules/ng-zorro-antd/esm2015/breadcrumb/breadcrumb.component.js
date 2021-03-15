/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';

function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵngcc0.ɵɵelementStart(1, "a", 2);
    ɵngcc0.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const breadcrumb_r2 = ctx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.navigate(breadcrumb_r2.url, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("href", breadcrumb_r2.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(breadcrumb_r2.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
const _c0 = ["*"];
export class NzBreadCrumbComponent {
    constructor(injector, ngZone, cdr, elementRef, renderer, directionality) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.directionality = directionality;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.nzRouteLabelFn = label => label;
        this.breadcrumbs = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    ngOnInit() {
        var _a;
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.prepareComponentForRtl();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.prepareComponentForRtl();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigate(url, e) {
        e.preventDefault();
        this.ngZone.run(() => this.injector.get(Router).navigateByUrl(url).then()).then();
    }
    registerRouterChange() {
        try {
            const router = this.injector.get(Router);
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$), startWith(true) // trigger initial render
            )
                .subscribe(() => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                const routeUrl = child.snapshot.url
                    .map(segment => segment.path)
                    .filter(path => path)
                    .join('/');
                // Do not change nextUrl if routeUrl is falsy. This happens when it's a route lazy loading other modules.
                const nextUrl = !!routeUrl ? url + `/${routeUrl}` : url;
                const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
                // If have data, go to generate a breadcrumb for it.
                if (routeUrl && breadcrumbLabel) {
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return breadcrumbs;
    }
    prepareComponentForRtl() {
        if (this.dir === 'rtl') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
        }
    }
}
NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzBreadCrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel", nzRouteLabelFn: "nzRouteLabelFn" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAutoGenerate && ctx.breadcrumbs.length);
    } }, encapsulation: 2, changeDetection: 0 });
NzBreadCrumbComponent.ctorParameters = () => [
    { type: Injector },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: Input }],
    nzSeparator: [{ type: Input }],
    nzRouteLabel: [{ type: Input }],
    nzRouteLabelFn: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <ng-container *ngIf="nzAutoGenerate && breadcrumbs.length">
      <nz-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs">
        <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
      </nz-breadcrumb-item>
    </ng-container>
  `
            }]
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzAutoGenerate: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzRouteLabel: [{
            type: Input
        }], nzRouteLabelFn: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCOUQsTUFBTSxPQUFPLHFCQUFxQjtBQUFHLElBYW5DLFlBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEdBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1AsY0FBOEI7QUFDbkQsUUFOUyxhQUFRLEdBQVIsUUFBUSxDQUFVO0FBQUMsUUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztB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LFlBTUEsU0FBUztBQUNULFlBYmtCLGNBQWMsdUJBZ0U3QixRQUFRO0FBQU07QUFBRztBQUVwQiw2QkFsQkMsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFJO0FBSGU7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNiLDZEQURtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDbEQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotYnJlYWRjcnVtYicsXG4gIGV4cG9ydEFzOiAnbnpCcmVhZGNydW1iJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekF1dG9HZW5lcmF0ZSAmJiBicmVhZGNydW1icy5sZW5ndGhcIj5cbiAgICAgIDxuei1icmVhZGNydW1iLWl0ZW0gKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgPGEgW2F0dHIuaHJlZl09XCJicmVhZGNydW1iLnVybFwiIChjbGljayk9XCJuYXZpZ2F0ZShicmVhZGNydW1iLnVybCwgJGV2ZW50KVwiPnt7IGJyZWFkY3J1bWIubGFiZWwgfX08L2E+XG4gICAgICA8L256LWJyZWFkY3J1bWItaXRlbT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9HZW5lcmF0ZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9HZW5lcmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuelNlcGFyYXRvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gJy8nO1xuICBASW5wdXQoKSBuelJvdXRlTGFiZWw6IHN0cmluZyA9ICdicmVhZGNydW1iJztcbiAgQElucHV0KCkgbnpSb3V0ZUxhYmVsRm46IChsYWJlbDogc3RyaW5nKSA9PiBzdHJpbmcgPSBsYWJlbCA9PiBsYWJlbDtcblxuICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW107XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvR2VuZXJhdGUpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5wcmVwYXJlQ29tcG9uZW50Rm9yUnRsKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5wcmVwYXJlQ29tcG9uZW50Rm9yUnRsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZSh1cmw6IHN0cmluZywgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwodXJsKS50aGVuKCkpLnRoZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICBjb25zdCBhY3RpdmF0ZWRSb3V0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBzdGFydFdpdGgodHJ1ZSkgLy8gdHJpZ2dlciBpbml0aWFsIHJlbmRlclxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QpO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlICdOekF1dG9HZW5lcmF0ZScuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1icyhyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycsIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXSk6IEJyZWFkY3J1bWJPcHRpb25bXSB7XG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcblxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQub3V0bGV0ID09PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgICAvLyBPbmx5IHBhcnNlIGNvbXBvbmVudHMgaW4gcHJpbWFyeSByb3V0ZXItb3V0bGV0IChpbiBhbm90aGVyIHdvcmQsIHJvdXRlci1vdXRsZXQgd2l0aG91dCBhIHNwZWNpZmljIG5hbWUpLlxuICAgICAgICAvLyBQYXJzZSB0aGlzIGxheWVyIGFuZCBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgaXRlbS5cbiAgICAgICAgY29uc3Qgcm91dGVVcmw6IHN0cmluZyA9IGNoaWxkLnNuYXBzaG90LnVybFxuICAgICAgICAgIC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpXG4gICAgICAgICAgLmZpbHRlcihwYXRoID0+IHBhdGgpXG4gICAgICAgICAgLmpvaW4oJy8nKTtcblxuICAgICAgICAvLyBEbyBub3QgY2hhbmdlIG5leHRVcmwgaWYgcm91dGVVcmwgaXMgZmFsc3kuIFRoaXMgaGFwcGVucyB3aGVuIGl0J3MgYSByb3V0ZSBsYXp5IGxvYWRpbmcgb3RoZXIgbW9kdWxlcy5cbiAgICAgICAgY29uc3QgbmV4dFVybCA9ICEhcm91dGVVcmwgPyB1cmwgKyBgLyR7cm91dGVVcmx9YCA6IHVybDtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYkxhYmVsID0gdGhpcy5uelJvdXRlTGFiZWxGbihjaGlsZC5zbmFwc2hvdC5kYXRhW3RoaXMubnpSb3V0ZUxhYmVsXSk7XG5cbiAgICAgICAgLy8gSWYgaGF2ZSBkYXRhLCBnbyB0byBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgZm9yIGl0LlxuICAgICAgICBpZiAocm91dGVVcmwgJiYgYnJlYWRjcnVtYkxhYmVsKSB7XG4gICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogQnJlYWRjcnVtYk9wdGlvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBicmVhZGNydW1iTGFiZWwsXG4gICAgICAgICAgICBwYXJhbXM6IGNoaWxkLnNuYXBzaG90LnBhcmFtcyxcbiAgICAgICAgICAgIHVybDogbmV4dFVybFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaChicmVhZGNydW1iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlQ29tcG9uZW50Rm9yUnRsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYi1ydGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1icmVhZGNydW1iLXJ0bCcpO1xuICAgIH1cbiAgfVxufVxuIl19