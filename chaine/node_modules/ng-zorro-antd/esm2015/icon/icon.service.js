/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2, Self } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { Subject } from 'rxjs';
import { NZ_ICONS_USED_BY_ZORRO } from './icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/common/http';
export const NZ_ICONS = new InjectionToken('nz_icons');
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export class NzIconService extends IconService {
    constructor(rendererFactory, sanitizer, nzConfigService, handler, _document, icons) {
        super(rendererFactory, handler, _document, sanitizer);
        this.nzConfigService = nzConfigService;
        this.configUpdated$ = new Subject();
        this.iconfontCache = new Set();
        this.onConfigChange();
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(icons || []));
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
    }
    normalizeSvgElement(svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    }
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe(() => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        });
    }
    configDefaultTheme() {
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    configDefaultTwotoneColor() {
        const iconConfig = this.getConfig();
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
NzIconService.ɵfac = function NzIconService_Factory(t) { return new (t || NzIconService)(ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2), ɵngcc0.ɵɵinject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵinject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵinject(ɵngcc3.HttpBackend, 8), ɵngcc0.ɵɵinject(DOCUMENT, 8), ɵngcc0.ɵɵinject(NZ_ICONS, 8)); };
NzIconService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8)); }, token: NzIconService, providedIn: "root" });
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: NzConfigService },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.RendererFactory2 }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc3.HttpBackend, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_ICONS]
            }] }]; }, null); })();
export const NZ_ICONS_PATCH = new InjectionToken('nz_icons_patch');
export class NzIconPatchService {
    constructor(extraIcons, rootIconService) {
        this.extraIcons = extraIcons;
        this.rootIconService = rootIconService;
        this.patched = false;
    }
    doPatch() {
        if (this.patched) {
            return;
        }
        this.extraIcons.forEach(iconDefinition => this.rootIconService.addIcon(iconDefinition));
        this.patched = true;
    }
}
NzIconPatchService.ɵfac = function NzIconPatchService_Factory(t) { return new (t || NzIconPatchService)(ɵngcc0.ɵɵinject(NZ_ICONS_PATCH, 2), ɵngcc0.ɵɵinject(NzIconService)); };
NzIconPatchService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzIconPatchService, factory: NzIconPatchService.ɵfac });
NzIconPatchService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NZ_ICONS_PATCH,] }] },
    { type: NzIconService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconPatchService, [{
        type: Injectable
    }], function () { return [{ type: Array, decorators: [{
                type: Self
            }, {
                type: Inject,
                args: [NZ_ICONS_PATCH]
            }] }, { type: NzIconService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2ljb24vaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQ7QUFFQTtBQUd5QjtBQUNQO0FBQTRDOzs7OztBQUQ5RCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcsSUFBSSxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUNqRyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7QUFFL0M7QUFDQTtBQUNBLEdBQUc7QUFJSCxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7QUFDOUMsSUFnQ0UsWUFDRSxlQUFpQyxFQUNqQyxTQUF1QixFQUNiLGVBQWdDLEVBQzlCLE9BQW9CLEVBQ0YsU0FBb0IsRUFD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QVUsRUFBRSxNQUFNLHpCQXJCdUQsWUFDbEUsWUFBWTtXQXFCcEIsWEFyQndCLFlBRUosZUFBZTtBQUFJLFlBSi9CLFdBQVcsdUJBNkRmLFFBQVE7QUFBTyw0Q0FDZixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7QUFBUyx3Q0FDcEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO0FBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBRTtBQTZDMUMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFHbkUsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQixJQUVFLFlBQW9ELFVBQTRCLEVBQVUsZUFBOEI7QUFBSSxRQUF4RSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtBQUFDLFFBQVMsb0JBQWUsR0FBZixlQUFlLENBQWU7QUFBQyxRQUZ6SCxZQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLElBQzZILENBQUM7QUFDOUgsSUFDRSxPQUFPO0FBQUssUUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdEIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzVGLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0g7OENBZEMsVUFBVTtzSEFDVDtBQUFDO0FBQ1Usd0NBRUUsSUFBSSxZQUFJLE1BQU0sU0FBQyxjQUFjO0FBQVMsWUFBd0QsYUFBYTtBQUFHOzs7Ozs7OzsyREFDN0g7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFJlbmRlcmVyRmFjdG9yeTIsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyBJY29uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHdhcm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOWl9JQ09OU19VU0VEX0JZX1pPUlJPIH0gZnJvbSAnLi9pY29ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XG4gIHNjcmlwdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTlpfSUNPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25zJyk7XG5leHBvcnQgY29uc3QgTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25fZGVmYXVsdF90d290b25lX2NvbG9yJyk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xuXG4vKipcbiAqIEl0IHNob3VsZCBiZSBhIGdsb2JhbCBzaW5nbGV0b24sIG90aGVyd2lzZSByZWdpc3RlcmVkIGljb25zIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcbiAgY29uZmlnVXBkYXRlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd2aWV3Qm94JywgJzAgMCAxMDI0IDEwMjQnKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8ICFzdmcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoRnJvbUljb25mb250KG9wdDogTnpJY29uZm9udE9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NyaXB0VXJsIH0gPSBvcHQ7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLmljb25mb250Q2FjaGUuaGFzKHNjcmlwdFVybCkpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ3NyYycsIHNjcmlwdFVybCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnZGF0YS1uYW1lc3BhY2UnLCBzY3JpcHRVcmwucmVwbGFjZSgvXihodHRwcz98aHR0cCk6L2csICcnKSk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgICAgdGhpcy5pY29uZm9udENhY2hlLmFkZChzY3JpcHRVcmwpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBoYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IE56U2FmZUFueSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05TKSBpY29ucz86IEljb25EZWZpbml0aW9uW11cbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXJGYWN0b3J5LCBoYW5kbGVyLCBfZG9jdW1lbnQsIHNhbml0aXplcik7XG5cbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKCk7XG4gICAgdGhpcy5hZGRJY29uKC4uLk5aX0lDT05TX1VTRURfQllfWk9SUk8sIC4uLihpY29ucyB8fCBbXSkpO1xuICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xuICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XG4gIH1cblxuICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdpY29uJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcbiAgICAgIHRoaXMuY29uZmlnVXBkYXRlZCQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VGhlbWUoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5kZWZhdWx0VGhlbWUgPSBpY29uQ29uZmlnLm56VGhlbWUgfHwgJ291dGxpbmUnO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGljb25Db25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIGNvbnN0IGRlZmF1bHRUd290b25lQ29sb3IgPSBpY29uQ29uZmlnLm56VHdvdG9uZUNvbG9yIHx8IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcblxuICAgIGxldCBwcmltYXJ5Q29sb3IgPSBERUZBVUxUX1RXT1RPTkVfQ09MT1I7XG5cbiAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvcikge1xuICAgICAgaWYgKGRlZmF1bHRUd290b25lQ29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIHByaW1hcnlDb2xvciA9IGRlZmF1bHRUd290b25lQ29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdUd290b25lIGNvbG9yIG11c3QgYmUgYSBoZXggY29sb3IhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWcoKTogSWNvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnaWNvbicpIHx8IHt9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JQ09OU19QQVRDSCA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnNfcGF0Y2gnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56SWNvblBhdGNoU2VydmljZSB7XG4gIHBhdGNoZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihAU2VsZigpIEBJbmplY3QoTlpfSUNPTlNfUEFUQ0gpIHByaXZhdGUgZXh0cmFJY29uczogSWNvbkRlZmluaXRpb25bXSwgcHJpdmF0ZSByb290SWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UpIHt9XG5cbiAgZG9QYXRjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXRjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5leHRyYUljb25zLmZvckVhY2goaWNvbkRlZmluaXRpb24gPT4gdGhpcy5yb290SWNvblNlcnZpY2UuYWRkSWNvbihpY29uRGVmaW5pdGlvbikpO1xuICAgIHRoaXMucGF0Y2hlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==