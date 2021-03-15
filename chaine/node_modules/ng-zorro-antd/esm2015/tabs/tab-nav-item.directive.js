/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { NzTabComponent } from './tab.component';
import * as ɵngcc0 from '@angular/core';
export class NzTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) { return new (t || NzTabNavItemDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTabNavItemDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabNavItemDirective, selectors: [["", "nzTabNavItem", ""]], inputs: { disabled: "disabled", active: "active", tab: "tab" } });
NzTabNavItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTabNavItemDirective.propDecorators = {
    disabled: [{ type: Input }],
    tab: [{ type: Input }],
    active: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabNavItemDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTabNavItem]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { disabled: [{
            type: Input
        }], active: [{
            type: Input
        }], tab: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWJzL3RhYi1uYXYtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUdILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS2pELE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQU9uQyxZQUFtQixVQUFtQztBQUN4RCxRQURxQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtBQUFDLFFBTjlDLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFDVyxXQUFNLEdBQVksS0FBSyxDQUFDO0FBQ25DLFFBSUksSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWMsQ0FBQztBQUNoRCxJQUFFLENBQUM7QUFDSCxJQUNFLEtBQUs7QUFBSyxRQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLE1BQU07QUFBSyxRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLElBQUk7QUFBSyxRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLEdBQUc7QUFBSyxRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0g7aURBbENDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGNBQzNCOzhMQUNJO0FBQUM7QUFBK0MsWUFQakMsVUFBVTtBQUFHO0FBQUc7QUFFdEIsdUJBTVgsS0FBSztBQUFLLGtCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelRhYk5hdkl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRhYk5hdkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24ge1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWIhOiBOelRhYkNvbXBvbmVudDtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZWwhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50ITogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQhO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgZ2V0IHRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wO1xuICB9XG59XG4iXX0=