/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { NzResizeService } from './resize';
import * as i0 from "@angular/core";
import * as i1 from "./resize";
import * as i2 from "@angular/cdk/layout";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './resize';
import * as ɵngcc2 from '@angular/cdk/layout';
export var NzBreakpointEnum;
(function (NzBreakpointEnum) {
    NzBreakpointEnum["xxl"] = "xxl";
    NzBreakpointEnum["xl"] = "xl";
    NzBreakpointEnum["lg"] = "lg";
    NzBreakpointEnum["md"] = "md";
    NzBreakpointEnum["sm"] = "sm";
    NzBreakpointEnum["xs"] = "xs";
})(NzBreakpointEnum || (NzBreakpointEnum = {}));
export const gridResponsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export const siderResponsiveMap = {
    xs: '(max-width: 479.98px)',
    sm: '(max-width: 575.98px)',
    md: '(max-width: 767.98px)',
    lg: '(max-width: 991.98px)',
    xl: '(max-width: 1199.98px)',
    xxl: '(max-width: 1599.98px)'
};
export class NzBreakpointService {
    constructor(resizeService, mediaMatcher) {
        this.resizeService = resizeService;
        this.mediaMatcher = mediaMatcher;
        this.resizeService.subscribe().subscribe(() => { });
    }
    subscribe(breakpointMap, fullMap) {
        if (fullMap) {
            const get = () => this.matchMedia(breakpointMap, true);
            return this.resizeService.subscribe().pipe(map(get), startWith(get()), distinctUntilChanged((x, y) => x[0] === y[0]), map(x => x[1]));
        }
        else {
            const get = () => this.matchMedia(breakpointMap);
            return this.resizeService.subscribe().pipe(map(get), startWith(get()), distinctUntilChanged());
        }
    }
    matchMedia(breakpointMap, fullMap) {
        let bp = NzBreakpointEnum.md;
        const breakpointBooleanMap = {};
        Object.keys(breakpointMap).map(breakpoint => {
            const castBP = breakpoint;
            const matched = this.mediaMatcher.matchMedia(gridResponsiveMap[castBP]).matches;
            breakpointBooleanMap[breakpoint] = matched;
            if (matched) {
                bp = castBP;
            }
        });
        if (fullMap) {
            return [bp, breakpointBooleanMap];
        }
        else {
            return bp;
        }
    }
}
NzBreakpointService.ɵfac = function NzBreakpointService_Factory(t) { return new (t || NzBreakpointService)(ɵngcc0.ɵɵinject(ɵngcc1.NzResizeService), ɵngcc0.ɵɵinject(ɵngcc2.MediaMatcher)); };
NzBreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzBreakpointService_Factory() { return new NzBreakpointService(i0.ɵɵinject(i1.NzResizeService), i0.ɵɵinject(i2.MediaMatcher)); }, token: NzBreakpointService, providedIn: "root" });
NzBreakpointService.ctorParameters = () => [
    { type: NzResizeService },
    { type: MediaMatcher }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreakpointService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.NzResizeService }, { type: ɵngcc2.MediaMatcher }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2JyZWFrcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQztBQUVLO0FBRUk7Ozs7QUFIVCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0FBQzNCLElBQUMsK0JBQVcsQ0FBQTtBQUFDLElBQ1osNkJBQVMsQ0FBQTtBQUFDLElBQ1YsNkJBQVMsQ0FBQTtBQUFDLElBQ1YsNkJBQVMsQ0FBQTtBQUFDLElBQ1YsNkJBQVMsQ0FBQTtBQUFDLElBQ1YsNkJBQVMsQ0FBQTtBQUNYLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBTUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCO0FBQ2hELElBQUUsRUFBRSxFQUFFLG9CQUFvQjtBQUMxQixJQUFFLEVBQUUsRUFBRSxvQkFBb0I7QUFDMUIsSUFBRSxFQUFFLEVBQUUsb0JBQW9CO0FBQzFCLElBQUUsRUFBRSxFQUFFLG9CQUFvQjtBQUMxQixJQUFFLEVBQUUsRUFBRSxxQkFBcUI7QUFDM0IsSUFBRSxHQUFHLEVBQUUscUJBQXFCO0FBQzVCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQjtBQUNqRCxJQUFFLEVBQUUsRUFBRSx1QkFBdUI7QUFDN0IsSUFBRSxFQUFFLEVBQUUsdUJBQXVCO0FBQzdCLElBQUUsRUFBRSxFQUFFLHVCQUF1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IHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbmV4cG9ydCBlbnVtIE56QnJlYWtwb2ludEVudW0ge1xuICB4eGwgPSAneHhsJyxcbiAgeGwgPSAneGwnLFxuICBsZyA9ICdsZycsXG4gIG1kID0gJ21kJyxcbiAgc20gPSAnc20nLFxuICB4cyA9ICd4cydcbn1cblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IHsgW2tleSBpbiBOekJyZWFrcG9pbnRFbnVtXTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBCcmVha3BvaW50Qm9vbGVhbk1hcCA9IHsgW2tleSBpbiBOekJyZWFrcG9pbnRFbnVtXTogYm9vbGVhbiB9O1xuZXhwb3J0IHR5cGUgTnpCcmVha3BvaW50S2V5ID0ga2V5b2YgdHlwZW9mIE56QnJlYWtwb2ludEVudW07XG5cbmV4cG9ydCBjb25zdCBncmlkUmVzcG9uc2l2ZU1hcDogQnJlYWtwb2ludE1hcCA9IHtcbiAgeHM6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbTogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGc6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcblxuZXhwb3J0IGNvbnN0IHNpZGVyUmVzcG9uc2l2ZU1hcDogQnJlYWtwb2ludE1hcCA9IHtcbiAgeHM6ICcobWF4LXdpZHRoOiA0NzkuOThweCknLFxuICBzbTogJyhtYXgtd2lkdGg6IDU3NS45OHB4KScsXG4gIG1kOiAnKG1heC13aWR0aDogNzY3Ljk4cHgpJyxcbiAgbGc6ICcobWF4LXdpZHRoOiA5OTEuOThweCknLFxuICB4bDogJyhtYXgtd2lkdGg6IDExOTkuOThweCknLFxuICB4eGw6ICcobWF4LXdpZHRoOiAxNTk5Ljk4cHgpJ1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzaXplU2VydmljZTogTnpSZXNpemVTZXJ2aWNlLCBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyKSB7XG4gICAgdGhpcy5yZXNpemVTZXJ2aWNlLnN1YnNjcmliZSgpLnN1YnNjcmliZSgoKSA9PiB7fSk7XG4gIH1cblxuICBzdWJzY3JpYmUoYnJlYWtwb2ludE1hcDogQnJlYWtwb2ludE1hcCk6IE9ic2VydmFibGU8TnpCcmVha3BvaW50RW51bT47XG4gIHN1YnNjcmliZShicmVha3BvaW50TWFwOiBCcmVha3BvaW50TWFwLCBmdWxsTWFwOiB0cnVlKTogT2JzZXJ2YWJsZTxCcmVha3BvaW50Qm9vbGVhbk1hcD47XG4gIHN1YnNjcmliZShicmVha3BvaW50TWFwOiBCcmVha3BvaW50TWFwLCBmdWxsTWFwPzogdHJ1ZSk6IE9ic2VydmFibGU8TnpCcmVha3BvaW50RW51bSB8IEJyZWFrcG9pbnRCb29sZWFuTWFwPiB7XG4gICAgaWYgKGZ1bGxNYXApIHtcbiAgICAgIGNvbnN0IGdldCA9ICgpID0+IHRoaXMubWF0Y2hNZWRpYShicmVha3BvaW50TWFwLCB0cnVlKTtcbiAgICAgIHJldHVybiB0aGlzLnJlc2l6ZVNlcnZpY2Uuc3Vic2NyaWJlKCkucGlwZShcbiAgICAgICAgbWFwKGdldCksXG4gICAgICAgIHN0YXJ0V2l0aChnZXQoKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4OiBbTnpCcmVha3BvaW50RW51bSwgQnJlYWtwb2ludEJvb2xlYW5NYXBdLCB5OiBbTnpCcmVha3BvaW50RW51bSwgQnJlYWtwb2ludEJvb2xlYW5NYXBdKSA9PiB4WzBdID09PSB5WzBdKSxcbiAgICAgICAgbWFwKHggPT4geFsxXSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdldCA9ICgpID0+IHRoaXMubWF0Y2hNZWRpYShicmVha3BvaW50TWFwKTtcbiAgICAgIHJldHVybiB0aGlzLnJlc2l6ZVNlcnZpY2Uuc3Vic2NyaWJlKCkucGlwZShtYXAoZ2V0KSwgc3RhcnRXaXRoKGdldCgpKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKGJyZWFrcG9pbnRNYXA6IEJyZWFrcG9pbnRNYXApOiBOekJyZWFrcG9pbnRFbnVtO1xuICBwcml2YXRlIG1hdGNoTWVkaWEoYnJlYWtwb2ludE1hcDogQnJlYWtwb2ludE1hcCwgZnVsbE1hcDogdHJ1ZSk6IFtOekJyZWFrcG9pbnRFbnVtLCBCcmVha3BvaW50Qm9vbGVhbk1hcF07XG4gIHByaXZhdGUgbWF0Y2hNZWRpYShicmVha3BvaW50TWFwOiBCcmVha3BvaW50TWFwLCBmdWxsTWFwPzogdHJ1ZSk6IE56QnJlYWtwb2ludEVudW0gfCBbTnpCcmVha3BvaW50RW51bSwgQnJlYWtwb2ludEJvb2xlYW5NYXBdIHtcbiAgICBsZXQgYnAgPSBOekJyZWFrcG9pbnRFbnVtLm1kO1xuXG4gICAgY29uc3QgYnJlYWtwb2ludEJvb2xlYW5NYXA6IFBhcnRpYWw8QnJlYWtwb2ludEJvb2xlYW5NYXA+ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhicmVha3BvaW50TWFwKS5tYXAoYnJlYWtwb2ludCA9PiB7XG4gICAgICBjb25zdCBjYXN0QlAgPSBicmVha3BvaW50IGFzIE56QnJlYWtwb2ludEVudW07XG4gICAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShncmlkUmVzcG9uc2l2ZU1hcFtjYXN0QlBdKS5tYXRjaGVzO1xuXG4gICAgICBicmVha3BvaW50Qm9vbGVhbk1hcFticmVha3BvaW50IGFzIE56QnJlYWtwb2ludEVudW1dID0gbWF0Y2hlZDtcblxuICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgYnAgPSBjYXN0QlA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnVsbE1hcCkge1xuICAgICAgcmV0dXJuIFticCwgYnJlYWtwb2ludEJvb2xlYW5NYXAgYXMgQnJlYWtwb2ludEJvb2xlYW5NYXBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnA7XG4gICAgfVxuICB9XG59XG4iXX0=