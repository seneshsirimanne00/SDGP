/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, Optional } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { IMAGE_PREVIEW_MASK_CLASS_NAME, NZ_CONFIG_MODULE_NAME } from './image-config';
import { NzImagePreviewOptions } from './image-preview-options';
import { NzImagePreviewRef } from './image-preview-ref';
import { NzImagePreviewComponent } from './image-preview.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
export class NzImageService {
    constructor(overlay, injector, nzConfigService, directionality) {
        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
    }
    preview(images, options) {
        return this.display(images, options);
    }
    display(images, config) {
        const configMerged = Object.assign(Object.assign({}, new NzImagePreviewOptions()), (config !== null && config !== void 0 ? config : {}));
        const overlayRef = this.createOverlay(configMerged);
        const previewComponent = this.attachPreviewComponent(overlayRef, configMerged);
        previewComponent.setImages(images);
        const previewRef = new NzImagePreviewRef(previewComponent, configMerged, overlayRef);
        previewComponent.previewRef = previewRef;
        return previewRef;
    }
    attachPreviewComponent(overlayRef, config) {
        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: OverlayRef, useValue: overlayRef },
                { provide: NzImagePreviewOptions, useValue: config }
            ]
        });
        const containerPortal = new ComponentPortal(NzImagePreviewComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    createOverlay(config) {
        var _a, _b;
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        const overLayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: (_b = (_a = config.nzCloseOnNavigation) !== null && _a !== void 0 ? _a : globalConfig.nzCloseOnNavigation) !== null && _b !== void 0 ? _b : true,
            backdropClass: IMAGE_PREVIEW_MASK_CLASS_NAME,
            direction: config.nzDirection || globalConfig.nzDirection || this.directionality.value
        });
        return this.overlay.create(overLayConfig);
    }
}
NzImageService.ɵfac = function NzImageService_Factory(t) { return new (t || NzImageService)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵinject(ɵngcc3.Directionality, 8)); };
NzImageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzImageService, factory: NzImageService.ɵfac });
NzImageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: NzConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzImageService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9pbWFnZS9pbWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFXLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBT3BFLE1BQU0sT0FBTyxjQUFjO0FBQzNCLElBQUUsWUFDVSxPQUFnQixFQUNoQixRQUFrQixFQUNsQixlQUFnQyxFQUNwQixjQUE4QjtBQUNuRCxRQUpTLFlBQU8sR0FBUCxPQUFPLENBQVM7QUFBQyxRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFVO0FBQUMsUUFDbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQ3RELElBQUssQ0FBQztBQUNOLElBQ0UsT0FBTyxDQUFDLE1BQWlCLEVBQUUsT0FBK0I7QUFBSSxRQUM1RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ1UsT0FBTyxDQUFDLE1BQWlCLEVBQUUsTUFBOEI7QUFBSSxRQUNuRSxNQUFNLFlBQVksbUNBQVEsSUFBSSxxQkFBcUIsRUFBRSxHQUFLLENBQUMsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztBQUMvRSxRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEQsUUFBSSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkYsUUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsUUFBSSxNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6RixRQUNJLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0MsUUFBSSxPQUFPLFVBQVUsQ0FBQztBQUN0QixJQUFFLENBQUM7QUFDSCxJQUNVLHNCQUFzQixDQUFDLFVBQXNCLEVBQUUsTUFBNkI7QUFBSSxRQUN0RixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3JDLFlBQU0sTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ3JELGdCQUFRLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDNUQsYUFBTztBQUNQLFNBQUssQ0FBQyxDQUFDO0FBQ1AsUUFDSSxNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekYsUUFBSSxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVELFFBQ0ksT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUNILElBQ1UsYUFBYSxDQUFDLE1BQTZCO0FBQUk7QUFDakQsUUFBSixNQUFNLFlBQVksR0FBSSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFpQixJQUFJLEVBQUUsQ0FBQztBQUNsSCxRQUFJLE1BQU0sYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDO0FBQzVDLFlBQU0sV0FBVyxFQUFFLElBQUk7QUFDdkIsWUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7QUFDM0QsWUFBTSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRTtBQUN4RCxZQUFNLG1CQUFtQixjQUFFLE1BQU0sQ0FBQyxtQkFBbUIsbUNBQUksWUFBWSxDQUFDLG1CQUFtQixtQ0FBSSxJQUFJO0FBQ2pHLFlBQU0sYUFBYSxFQUFFLDZCQUE2QjtBQUNsRCxZQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLO0FBQzVGLFNBQUssQ0FBQyxDQUFDO0FBQ1AsUUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLElBQUUsQ0FBQztBQUNIOzBDQXBEQyxVQUFVOzBHQUNUO0FBQUM7QUFDVSxZQWhCSixPQUFPO0FBQUksWUFFQyxRQUFRO0FBQUksWUFDWCxlQUFlO0FBQUksWUFKaEMsY0FBYyx1QkFxQmxCLFFBQVE7QUFBTTs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VDb25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuXG5pbXBvcnQgeyBJTUFHRV9QUkVWSUVXX01BU0tfQ0xBU1NfTkFNRSwgTlpfQ09ORklHX01PRFVMRV9OQU1FIH0gZnJvbSAnLi9pbWFnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpJbWFnZSwgTnpJbWFnZVByZXZpZXdPcHRpb25zIH0gZnJvbSAnLi9pbWFnZS1wcmV2aWV3LW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpJbWFnZVByZXZpZXdSZWYgfSBmcm9tICcuL2ltYWdlLXByZXZpZXctcmVmJztcbmltcG9ydCB7IE56SW1hZ2VQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpJbWFnZVNlcnZpY2Uge1xuICBwcmV2aWV3KGltYWdlczogTnpJbWFnZVtdLCBvcHRpb24/OiBOekltYWdlUHJldmlld09wdGlvbnMpOiBOekltYWdlUHJldmlld1JlZjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56SW1hZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIHByZXZpZXcoaW1hZ2VzOiBOekltYWdlW10sIG9wdGlvbnM/OiBOekltYWdlUHJldmlld09wdGlvbnMpOiBOekltYWdlUHJldmlld1JlZiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheShpbWFnZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5KGltYWdlczogTnpJbWFnZVtdLCBjb25maWc/OiBOekltYWdlUHJldmlld09wdGlvbnMpOiBOekltYWdlUHJldmlld1JlZiB7XG4gICAgY29uc3QgY29uZmlnTWVyZ2VkID0geyAuLi5uZXcgTnpJbWFnZVByZXZpZXdPcHRpb25zKCksIC4uLihjb25maWcgPz8ge30pIH07XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWdNZXJnZWQpO1xuICAgIGNvbnN0IHByZXZpZXdDb21wb25lbnQgPSB0aGlzLmF0dGFjaFByZXZpZXdDb21wb25lbnQob3ZlcmxheVJlZiwgY29uZmlnTWVyZ2VkKTtcbiAgICBwcmV2aWV3Q29tcG9uZW50LnNldEltYWdlcyhpbWFnZXMpO1xuICAgIGNvbnN0IHByZXZpZXdSZWYgPSBuZXcgTnpJbWFnZVByZXZpZXdSZWYocHJldmlld0NvbXBvbmVudCwgY29uZmlnTWVyZ2VkLCBvdmVybGF5UmVmKTtcblxuICAgIHByZXZpZXdDb21wb25lbnQucHJldmlld1JlZiA9IHByZXZpZXdSZWY7XG4gICAgcmV0dXJuIHByZXZpZXdSZWY7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFByZXZpZXdDb21wb25lbnQob3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgY29uZmlnOiBOekltYWdlUHJldmlld09wdGlvbnMpOiBOekltYWdlUHJldmlld0NvbXBvbmVudCB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogT3ZlcmxheVJlZiwgdXNlVmFsdWU6IG92ZXJsYXlSZWYgfSxcbiAgICAgICAgeyBwcm92aWRlOiBOekltYWdlUHJldmlld09wdGlvbnMsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChOekltYWdlUHJldmlld0NvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogTnpJbWFnZVByZXZpZXdPcHRpb25zKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gKHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpIGFzIEltYWdlQ29uZmlnKSB8fCB7fTtcbiAgICBjb25zdCBvdmVyTGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLFxuICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogY29uZmlnLm56Q2xvc2VPbk5hdmlnYXRpb24gPz8gZ2xvYmFsQ29uZmlnLm56Q2xvc2VPbk5hdmlnYXRpb24gPz8gdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IElNQUdFX1BSRVZJRVdfTUFTS19DTEFTU19OQU1FLFxuICAgICAgZGlyZWN0aW9uOiBjb25maWcubnpEaXJlY3Rpb24gfHwgZ2xvYmFsQ29uZmlnLm56RGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWVcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJMYXlDb25maWcpO1xuICB9XG59XG4iXX0=