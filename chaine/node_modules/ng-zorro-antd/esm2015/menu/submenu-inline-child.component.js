/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { collapseMotion } from 'ng-zorro-antd/core/animation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) { }
export class NzSubmenuInlineChildComponent {
    constructor(elementRef, renderer, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.directionality = directionality;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.nzOpen = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
    }
    calcMotionState() {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        var _a;
        this.calcMotionState();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { mode, nzOpen, menuClass } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                });
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                });
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubmenuInlineChildComponent.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) { return new (t || NzSubmenuInlineChildComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzSubmenuInlineChildComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSubmenuInlineChildComponent, selectors: [["", "nz-submenu-inline-child", ""]], hostVars: 3, hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@collapseMotion", ctx.expandState);
        ɵngcc0.ɵɵclassProp("ant-menu-rtl", ctx.dir === "rtl");
    } }, inputs: { templateOutlet: "templateOutlet", menuClass: "menuClass", mode: "mode", nzOpen: "nzOpen" }, exportAs: ["nzSubmenuInlineChild"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function NzSubmenuInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [ɵngcc2.NgTemplateOutlet], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 });
NzSubmenuInlineChildComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzSubmenuInlineChildComponent.propDecorators = {
    templateOutlet: [{ type: Input }],
    menuClass: [{ type: Input }],
    mode: [{ type: Input }],
    nzOpen: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubmenuInlineChildComponent, [{
        type: Component,
        args: [{
                selector: '[nz-submenu-inline-child]',
                animations: [collapseMotion],
                exportAs: 'nzSubmenuInlineChild',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
  `,
                host: {
                    '[class.ant-menu-rtl]': `dir === 'rtl'`,
                    '[@collapseMotion]': 'expandState'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { templateOutlet: [{
            type: Input
        }], menuClass: [{
            type: Input
        }], mode: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lbnUvc3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFpQjNDLE1BQU0sT0FBTyw2QkFBNkI7QUFBRyxJQVUzQyxZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQXNCLGNBQThCO0FBQzdILFFBRHNCLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQVRuSCxtQkFBYyxHQUFrQyxJQUFJLENBQUM7QUFDaEUsUUFBVyxjQUFTLEdBQVcsRUFBRSxDQUFDO0FBQ2xDLFFBQVcsU0FBSSxHQUFtQixVQUFVLENBQUM7QUFDN0MsUUFBVyxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQUUseUJBQW9CLEdBQWEsRUFBRSxDQUFDO0FBQ3RDLFFBQUUsZ0JBQVcsR0FBRyxXQUFXLENBQUM7QUFDNUIsUUFBRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0FBQ3pCLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDekMsUUFFSSxt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Qy9DLFFBQVEsRUFBRSx5RUFFVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osc0JBQXNCLEVBQUUsZUFBZTtpQkFDdkMsbUJBQW1CLEVBQUUsYUFBYSxrQkFDbkM7T0FDRjs7Ozs7K0hBQ0k7QUFBQztBQUF1RCxZQS9CM0QsVUFBVTtBQUNWLFlBS0EsU0FBUztBQUNULFlBWGtCLGNBQWMsdUJBNkMwQyxRQUFRO0FBQU07QUFBRztBQUNoRiw2QkFWVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXN1Ym1lbnUtaW5saW5lLWNoaWxkXScsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIGV4cG9ydEFzOiAnbnpTdWJtZW51SW5saW5lQ2hpbGQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVPdXRsZXRcIj48L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbWVudS1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbQGNvbGxhcHNlTW90aW9uXSc6ICdleHBhbmRTdGF0ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVJbmxpbmVDaGlsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0ZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtZW51Q2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtb2RlOiBOek1lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBsaXN0T2ZDYWNoZUNsYXNzTmFtZTogc3RyaW5nW10gPSBbXTtcbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LW1lbnUnLCAnYW50LW1lbnUtaW5saW5lJywgJ2FudC1tZW51LXN1YicpO1xuICB9XG5cbiAgY2FsY01vdGlvblN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1vZGUsIG56T3BlbiwgbWVudUNsYXNzIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChtb2RlIHx8IG56T3Blbikge1xuICAgICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcbiAgICB9XG4gICAgaWYgKG1lbnVDbGFzcykge1xuICAgICAgaWYgKHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWVcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKVxuICAgICAgICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWVudUNsYXNzKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWUgPSB0aGlzLm1lbnVDbGFzcy5zcGxpdCgnICcpO1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+ICEhaXRlbSlcbiAgICAgICAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==