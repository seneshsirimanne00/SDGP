import { __rest } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './drawer.component';
import { NzDrawerServiceModule } from './drawer.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./drawer.service.module";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
export class DrawerBuilderForService {
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        const _a = this.options, { nzOnCancel } = _a, componentOption = __rest(_a, ["nzOnCancel"]);
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.savePreviouslyFocusedElement();
        this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.drawerRef.open();
        });
        this.drawerRef.nzOnClose.subscribe(() => {
            if (nzOnCancel) {
                nzOnCancel().then(canClose => {
                    if (canClose !== false) {
                        this.drawerRef.close();
                    }
                });
            }
            else {
                this.drawerRef.close();
            }
        });
        this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    getInstance() {
        return this.drawerRef;
    }
    updateOptions(options) {
        Object.assign(this.drawerRef, options);
    }
}
export class NzDrawerService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay)); };
NzDrawerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.ɵɵinject(i1.Overlay)); }, token: NzDrawerService, providedIn: i2.NzDrawerServiceModule });
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerService, [{
        type: Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: ɵngcc1.Overlay }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFO0FBQ29DO0FBQ0Q7OztBQURuQyxNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUFLckMsWUFBb0IsT0FBZ0IsRUFBVSxPQUF3QjtBQUN4RSxRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFTO0FBQUMsUUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBRi9ELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUM3QyxRQUVJLG1FQUFtRTtBQUN2RSxRQUFJLE1BQU0sS0FBcUMsSUFBSSxDQUFDLE9BQU8sRUFBakQsRUFBRSxVQUFVLE9BQXFDLEVBQWhDLGVBQWUsY0FBaEMsY0FBa0MsQ0FBZSxDQUFDO0FBQzVELFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzVDLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQzdGLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN4QyxRQUFJLHlEQUF5RDtBQUM3RCxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztBQUNsRCxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNsRixZQUFNLElBQUksQ0FBQyxTQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUM1QyxZQUFNLElBQUksVUFBVSxFQUFFO0FBQ3RCLGdCQUFRLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNyQyxvQkFBVSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7QUFDbEMsd0JBQVksSUFBSSxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxxQkFBVztBQUNYLGdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ2hGLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoQyxZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFlBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbkMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsT0FBTyxJQUFJLENBQUMsU0FBVSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYSxDQUFDLE9BQW1DO0FBQUksUUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sZUFBZTtBQUM1QixJQUFFLFlBQW9CLE9BQWdCO0FBQUksUUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztBQUFDLElBQUUsQ0FBQztBQUMxQyxJQUNFLE1BQU0sQ0FBOEMsT0FBeUQ7QUFBSSxRQUMvRyxPQUFPLElBQUksdUJBQXVCLENBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRixJQUFFLENBQUM7QUFDSDttSUFBQztBQUNELHNOQVBLO0FBQUM7RUFETCxVQUFVLFNBQUMsckJBRUksWUExRFAsT0FBTztDQXdERixEQXhESztRQXdESyxFQUFFLHFCQUFxQixFQUFFOzs7d0VBeEQ1QjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQgfSBmcm9tICcuL2RyYXdlci1vcHRpb25zJztcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9kcmF3ZXItcmVmJztcbmltcG9ydCB7IE56RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZU1vZHVsZSB9IGZyb20gJy4vZHJhd2VyLnNlcnZpY2UubW9kdWxlJztcblxuZXhwb3J0IGNsYXNzIERyYXdlckJ1aWxkZXJGb3JTZXJ2aWNlPFQsIFI+IHtcbiAgcHJpdmF0ZSBkcmF3ZXJSZWY6IE56RHJhd2VyQ29tcG9uZW50PFQsIFI+IHwgbnVsbDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucykge1xuICAgIC8qKiBwaWNrIHtAbGluayBOekRyYXdlck9wdGlvbnMubnpPbkNhbmNlbH0gYW5kIG9taXQgdGhpcyBvcHRpb24gKi9cbiAgICBjb25zdCB7IG56T25DYW5jZWwsIC4uLmNvbXBvbmVudE9wdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICB0aGlzLmRyYXdlclJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyYXdlckNvbXBvbmVudCkpLmluc3RhbmNlO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhjb21wb25lbnRPcHRpb24pO1xuICAgIC8vIFByZXZlbnQgcmVwZWF0ZWRseSBvcGVuIGRyYXdlciB3aGVuIHRhcCBmb2N1cyBlbGVtZW50LlxuICAgIHRoaXMuZHJhd2VyUmVmLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLmRyYXdlclJlZi5uek9uVmlld0luaXQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3ZXJSZWYhLm9wZW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdlclJlZi5uek9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmIChuek9uQ2FuY2VsKSB7XG4gICAgICAgIG56T25DYW5jZWwoKS50aGVuKGNhbkNsb3NlID0+IHtcbiAgICAgICAgICBpZiAoY2FuQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlclJlZiEuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJSZWYhLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdlclJlZi5hZnRlckNsb3NlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmRyYXdlclJlZiA9IG51bGw7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpEcmF3ZXJSZWY8VCwgUj4ge1xuICAgIHJldHVybiB0aGlzLmRyYXdlclJlZiE7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50KTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyYXdlclJlZiEsIG9wdGlvbnMpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogTnpEcmF3ZXJTZXJ2aWNlTW9kdWxlIH0pXG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIGNyZWF0ZTxUID0gTnpTYWZlQW55LCBEID0gdW5kZWZpbmVkLCBSID0gTnpTYWZlQW55PihvcHRpb25zOiBOekRyYXdlck9wdGlvbnM8VCwgRCBleHRlbmRzIHVuZGVmaW5lZCA/IHt9IDogRD4pOiBOekRyYXdlclJlZjxULCBSPiB7XG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxULCBSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==