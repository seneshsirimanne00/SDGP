/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Optional, Renderer2 } from '@angular/core';
import { NzButtonGroupComponent } from 'ng-zorro-antd/button';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/button';
export class NzDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
}
NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) { return new (t || NzDropdownButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzButtonGroupComponent, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzDropdownButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDropdownButtonDirective, selectors: [["", "nz-button", "", "nz-dropdown", ""]] });
NzDropdownButtonDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: NzButtonGroupComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropdownButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-button][nz-dropdown]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzButtonGroupComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUs5RCxNQUFNLE9BQU8seUJBQXlCO0FBQUcsSUFDdkMsWUFDVSxRQUFtQixFQUNDLHNCQUE4QyxFQUNsRSxVQUFzQjtBQUMvQixRQUhTLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNBLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7QUFBQyxRQUNuRSxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQ2xDLElBQUssQ0FBQztBQUNOLElBQUUsZUFBZTtBQUFLLFFBQ2xCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEYsUUFBSSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxhQUFhLEVBQUU7QUFDdEQsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNuRSxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7cURBZkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwwQkFBMEIsY0FDckM7c0pBQ0k7QUFBQztBQUFtRCxZQU5NLFNBQVM7QUFBSSxZQUNuRSxzQkFBc0IsdUJBUTFCLElBQUksWUFBSSxRQUFRO0FBQU8sWUFUTyxVQUFVO0FBQUc7Ozs7Ozs7Ozs7K0RBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWJ1dHRvbl1bbnotZHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogTnpCdXR0b25Hcm91cENvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgaWYgKHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudCAmJiBwYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHBhcmVudEVsZW1lbnQsICdhbnQtZHJvcGRvd24tYnV0dG9uJyk7XG4gICAgfVxuICB9XG59XG4iXX0=