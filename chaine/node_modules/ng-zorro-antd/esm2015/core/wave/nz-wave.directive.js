/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional, PLATFORM_ID } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
import * as ɵngcc0 from '@angular/core';
export const NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
export const NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
export class NzWaveDirective {
    constructor(ngZone, elementRef, config, animationType, platformId) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.platformId = platformId;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    get disabled() {
        return this.waveDisabled;
    }
    get rendererRef() {
        return this.waveRenderer;
    }
    isConfigDisabled() {
        let disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    }
    ngOnDestroy() {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    }
    ngOnInit() {
        this.renderWaveIfEnabled();
    }
    renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode, this.platformId);
        }
    }
    disable() {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    }
    enable() {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    }
}
NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) { return new (t || NzWaveDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
NzWaveDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzWaveDirective, selectors: [["", "nz-wave", ""], ["button", "nz-button", "", 3, "nzType", "link", 3, "nzType", "text"]], inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"] });
NzWaveDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
NzWaveDirective.propDecorators = {
    nzWaveExtraNode: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzWaveDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-wave],button[nz-button]:not([nzType="link"]):not([nzType="text"])',
                exportAs: 'nzWave'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { nzWaveExtraNode: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS93YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQU1wRCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBaUI7QUFDM0QsSUFBRSxRQUFRLEVBQUUsS0FBSztBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsRUFBRTtBQUNoRyxJQUFFLFVBQVUsRUFBRSxNQUFNO0FBQ3BCLElBQUUsT0FBTyxFQUFFLDZCQUE2QjtBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sVUFBVSw2QkFBNkI7QUFBSyxJQUNoRCxPQUFPLDZCQUE2QixDQUFDO0FBQ3ZDLENBQUM7QUFNRCxNQUFNLE9BQU8sZUFBZTtBQUFHLElBYzdCLFlBQ1UsTUFBYyxFQUNkLFVBQXNCLEVBQ3FCLE1BQW9CLEVBQ3BCLGFBQXFCLEVBQzNDLFVBQXFCO0FBQ25ELFFBTFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ29CLFdBQU0sR0FBTixNQUFNLENBQWM7QUFBQyxRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtBQUFDLFFBQzVDLGVBQVUsR0FBVixVQUFVLENBQVc7QUFDdEQsUUFuQlcsb0JBQWUsR0FBRyxLQUFL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bmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpXYXZlUmVuZGVyZXIgfSBmcm9tICcuL256LXdhdmUtcmVuZGVyZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56V2F2ZUNvbmZpZyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHOiBOeldhdmVDb25maWcgPSB7XG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOeldhdmVDb25maWc+KCduei13YXZlLWdsb2JhbC1vcHRpb25zJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZKCk6IE56V2F2ZUNvbmZpZyB7XG4gIHJldHVybiBOWl9XQVZFX0dMT0JBTF9ERUZBVUxUX0NPTkZJRztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXdhdmVdLGJ1dHRvbltuei1idXR0b25dOm5vdChbbnpUeXBlPVwibGlua1wiXSk6bm90KFtuelR5cGU9XCJ0ZXh0XCJdKScsXG4gIGV4cG9ydEFzOiAnbnpXYXZlJ1xufSlcbmV4cG9ydCBjbGFzcyBOeldhdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56V2F2ZUV4dHJhTm9kZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgd2F2ZVJlbmRlcmVyPzogTnpXYXZlUmVuZGVyZXI7XG4gIHByaXZhdGUgd2F2ZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndhdmVEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCByZW5kZXJlclJlZigpOiBOeldhdmVSZW5kZXJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud2F2ZVJlbmRlcmVyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOeldhdmVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogTnpTYWZlQW55XG4gICkge1xuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdGhpcy5pc0NvbmZpZ0Rpc2FibGVkKCk7XG4gIH1cblxuICBpc0NvbmZpZ0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0eXBlb2YgdGhpcy5jb25maWcuZGlzYWJsZWQgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzYWJsZWQgPSB0aGlzLmNvbmZpZy5kaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcldhdmVJZkVuYWJsZWQoKTtcbiAgfVxuXG4gIHJlbmRlcldhdmVJZkVuYWJsZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLndhdmVEaXNhYmxlZCAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIgPSBuZXcgTnpXYXZlUmVuZGVyZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdab25lLCB0aGlzLm56V2F2ZUV4dHJhTm9kZSwgdGhpcy5wbGF0Zm9ybUlkKTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcbiAgICB9XG4gIH1cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgLy8gY29uZmlnIHByaW9yaXR5XG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0aGlzLmlzQ29uZmlnRGlzYWJsZWQoKSB8fCBmYWxzZTtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmJpbmRUcmlnZ2VyRXZlbnQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==