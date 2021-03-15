/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, Optional, Renderer2 } from '@angular/core';
import { gridResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/layout';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from 'ng-zorro-antd/core/services';
import * as ɵngcc4 from '@angular/cdk/bidi';
export class NzRowDirective {
    constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.breakpointService = breakpointService;
        this.directionality = directionality;
        this.nzAlign = null;
        this.nzJustify = null;
        this.nzGutter = null;
        this.actualGutter$ = new ReplaySubject(1);
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-row');
    }
    getGutter() {
        const results = [null, null];
        const gutter = this.nzGutter || 0;
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((g, index) => {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(gridResponsiveMap).map((screen) => {
                    const bp = screen;
                    if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
                        results[index] = g[bp];
                    }
                });
            }
            else {
                results[index] = Number(g) || null;
            }
        });
        return results;
    }
    setGutterStyle() {
        const [horizontalGutter, verticalGutter] = this.getGutter();
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        const renderGutter = (name, gutter) => {
            const nativeElement = this.elementRef.nativeElement;
            if (gutter !== null) {
                this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
            }
        };
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.setGutterStyle();
    }
    ngOnChanges(changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(gridResponsiveMap)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.setGutterStyle();
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzBreakpointService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzRowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]], hostVars: 18, hostBindings: function NzRowDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-rtl", ctx.dir === "rtl");
    } }, inputs: { nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzRowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzBreakpointService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzRowDirective.propDecorators = {
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRowDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-row],nz-row,nz-form-item',
                exportAs: 'nzRow',
                host: {
                    '[class.ant-row-top]': `nzAlign === 'top'`,
                    '[class.ant-row-middle]': `nzAlign === 'middle'`,
                    '[class.ant-row-bottom]': `nzAlign === 'bottom'`,
                    '[class.ant-row-start]': `nzJustify === 'start'`,
                    '[class.ant-row-end]': `nzJustify === 'end'`,
                    '[class.ant-row-center]': `nzJustify === 'center'`,
                    '[class.ant-row-space-around]': `nzJustify === 'space-around'`,
                    '[class.ant-row-space-between]': `nzJustify === 'space-between'`,
                    '[class.ant-row-rtl]': `dir === "rtl"`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.MediaMatcher }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.Platform }, { type: ɵngcc3.NzBreakpointService }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzAlign: [{
            type: Input
        }], nzJustify: [{
            type: Input
        }], nzGutter: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9ncmlkL3Jvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQW1CLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFvQjNDLE1BQU0sT0FBTyxjQUFjO0FBQUcsSUE0QzVCLFlBQ1MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ2pCLGlCQUFzQyxFQUMxQixjQUE4QjtBQUNuRCxRQVBRLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7QUFBQyxRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQUMsUUFDZixhQUFRLEdBQVIsUUFBUSxDQUFVO0FBQUMsUUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtBQUFDLFFBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUN0RCxRQW5EVyxZQUFPLEdBQW1CLElBQUksQ0FBQztBQUMxQyxR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QUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDswQ0F0R0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw4QkFBOEIsa0JBQ3hDLFFBQVEsRUFBRSxPQUFPLGtCQUNqQixJQUFJLEVBQUUsc0JBQ0oscUJBQXFCLEVBQUUsbUJBQW1CLHNCQUMxQyx3QkFBd0IsRUFBRSxzQkFBc0Isc0JBQ2hELHdCQUF3QixFQUFFLHNCQUFzQixzQkFDaEQ7SUFBdUIsRUFBRSx1QkFBdUIsc0JBQ2hELHFCQUFxQixFQUFFLHFCQUFxQixzQkFDNUMsd0JBQXdCLEVBQUUsd0JBQXdCLHNCQUNsRCw4QkFBOEIsRUFBRTsyQkFBOEIsc0JBQzlELCtCQUErQixFQUFFLCtCQUErQixzQkFDaEUscUJBQXFCLEVBQUUsZUFBZSxrQkFDdkMsY0FDRjt1SkFDSTtBQUFDO0FBQXdDLFlBakM1QyxVQUFVO0FBQ1YsWUFNQSxTQUFTO0FBQ1QsWUFiTyxZQUFZO0FBQUksWUFPdkIsTUFBTTtBQUNOLFlBUE8sUUFBUTtBQUFJLFlBY3dCLG1CQUFtQjtBQUFJLFlBaEJoRCxjQUFjLHVCQTBGN0IsUUFBUTtBQUFNO0FBQUc7QUFDckIsc0JBbkRFLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ3JpZFJlc3BvbnNpdmVNYXAsIE56QnJlYWtwb2ludEtleSwgTnpCcmVha3BvaW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuZXhwb3J0IHR5cGUgTnpBbGlnbiA9ICd0b3AnIHwgJ21pZGRsZScgfCAnYm90dG9tJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXJvd10sbnotcm93LG56LWZvcm0taXRlbScsXG4gIGV4cG9ydEFzOiAnbnpSb3cnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93LXRvcF0nOiBgbnpBbGlnbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1taWRkbGVdJzogYG56QWxpZ24gPT09ICdtaWRkbGUnYCxcbiAgICAnW2NsYXNzLmFudC1yb3ctYm90dG9tXSc6IGBuekFsaWduID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXN0YXJ0XSc6IGBuekp1c3RpZnkgPT09ICdzdGFydCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1lbmRdJzogYG56SnVzdGlmeSA9PT0gJ2VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1jZW50ZXJdJzogYG56SnVzdGlmeSA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1hcm91bmRdJzogYG56SnVzdGlmeSA9PT0gJ3NwYWNlLWFyb3VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1iZXR3ZWVuXSc6IGBuekp1c3RpZnkgPT09ICdzcGFjZS1iZXR3ZWVuJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXJ0bF0nOiBgZGlyID09PSBcInJ0bFwiYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Um93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56QWxpZ246IE56QWxpZ24gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpKdXN0aWZ5OiBOekp1c3RpZnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpHdXR0ZXI6IHN0cmluZyB8IG51bWJlciB8IEluZGV4YWJsZU9iamVjdCB8IFtudW1iZXIsIG51bWJlcl0gfCBbSW5kZXhhYmxlT2JqZWN0LCBJbmRleGFibGVPYmplY3RdIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVhZG9ubHkgYWN0dWFsR3V0dGVyJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXT4oMSk7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZ2V0R3V0dGVyKCk6IFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXSB7XG4gICAgY29uc3QgcmVzdWx0czogW251bWJlciB8IG51bGwsIG51bWJlciB8IG51bGxdID0gW251bGwsIG51bGxdO1xuICAgIGNvbnN0IGd1dHRlciA9IHRoaXMubnpHdXR0ZXIgfHwgMDtcbiAgICBjb25zdCBub3JtYWxpemVkR3V0dGVyID0gQXJyYXkuaXNBcnJheShndXR0ZXIpID8gZ3V0dGVyIDogW2d1dHRlciwgbnVsbF07XG4gICAgbm9ybWFsaXplZEd1dHRlci5mb3JFYWNoKChnLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBnID09PSAnb2JqZWN0JyAmJiBnICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JpZFJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBicCA9IHNjcmVlbiBhcyBOekJyZWFrcG9pbnRLZXk7XG4gICAgICAgICAgaWYgKHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEoZ3JpZFJlc3BvbnNpdmVNYXBbYnBdKS5tYXRjaGVzICYmIGdbYnBdKSB7XG4gICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IGchW2JwXSBhcyBudW1iZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gTnVtYmVyKGcpIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBzZXRHdXR0ZXJTdHlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBbaG9yaXpvbnRhbEd1dHRlciwgdmVydGljYWxHdXR0ZXJdID0gdGhpcy5nZXRHdXR0ZXIoKTtcbiAgICB0aGlzLmFjdHVhbEd1dHRlciQubmV4dChbaG9yaXpvbnRhbEd1dHRlciwgdmVydGljYWxHdXR0ZXJdKTtcbiAgICBjb25zdCByZW5kZXJHdXR0ZXIgPSAobmFtZTogc3RyaW5nLCBndXR0ZXI6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmIChndXR0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCBuYW1lLCBgLSR7Z3V0dGVyIC8gMn1weGApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVuZGVyR3V0dGVyKCdtYXJnaW4tbGVmdCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLXJpZ2h0JywgaG9yaXpvbnRhbEd1dHRlcik7XG4gICAgcmVuZGVyR3V0dGVyKCdtYXJnaW4tdG9wJywgdmVydGljYWxHdXR0ZXIpO1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLWJvdHRvbScsIHZlcnRpY2FsR3V0dGVyKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTnpCcmVha3BvaW50U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtcm93Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0R3V0dGVyU3R5bGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekd1dHRlcikge1xuICAgICAgdGhpcy5zZXRHdXR0ZXJTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2VcbiAgICAgICAgLnN1YnNjcmliZShncmlkUmVzcG9uc2l2ZU1hcClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldEd1dHRlclN0eWxlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19