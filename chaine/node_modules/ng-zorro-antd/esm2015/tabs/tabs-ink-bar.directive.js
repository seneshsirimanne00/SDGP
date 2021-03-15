/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Inject, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import * as ɵngcc0 from '@angular/core';
export class NzTabsInkBarDirective {
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
}
NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
NzTabsInkBarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabsInkBarDirective, selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]], hostAttrs: [1, "ant-tabs-ink-bar"], hostVars: 2, hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-ink-bar-animated", ctx._animated);
    } }, inputs: { position: "position", animated: "animated" } });
NzTabsInkBarDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzTabsInkBarDirective.propDecorators = {
    position: [{ type: Input }],
    animated: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
                host: {
                    class: 'ant-tabs-ink-bar',
                    '[class.ant-tabs-ink-bar-animated]': '_animated'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { position: [{
            type: Input
        }], animated: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWJzL3RhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBVTNELE1BQU0sT0FBTyxxQkFBcUI7QUFDbEMsSUFPRSxZQUNVLFVBQW1DLEVBQ25DLE1BQWMsRUFDNEIsYUFBc0I7QUFDekUsUUFIUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtBQUFDLFFBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQUMyQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztBQUM1RSxRQVhXLGFBQVEsR0FBc0IsWUFBWSxDQUFDO0FBQ3RELFFBQVcsYUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQixJQVNLLENBQUM7QUFDTixJQVRFLElBQUksU0FBUztBQUFLLFFBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3BFLElBQUUsQ0FBQztBQUNILElBT0UsY0FBYyxDQUFDLE9BQW9CO0FBQUksUUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7QUFDdkMsWUFBTSxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FBQyxPQUFvQjtBQUFJLFFBQ2hDLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUM5RCxRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7QUFDeEMsWUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDNUIsWUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDL0IsWUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzdCLFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQzlCLFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxZQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlLENBQUMsT0FBb0I7QUFBSSxRQUN0QyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzVELElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZSxDQUFDLE9BQW9CO0FBQUksUUFDdEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM3RCxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWMsQ0FBQyxPQUFvQjtBQUFJLFFBQ3JDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDM0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxnQkFBZ0IsQ0FBQyxPQUFvQjtBQUFJLFFBQ3ZDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDOUQsSUFBRSxDQUFDO0FBQ0g7aURBMURDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsb0NBQW9DLGtCQUM5QyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGtCQUFrQixzQkFDekI7SUFBbUMsRUFBRSxXQUFXLGtCQUNqRCxjQUNGOzttRUFDSTtBQUFDO0FBQ1UsWUFkSSxVQUFVO0FBQUksWUFBYSxNQUFNO0FBQUkseUNBd0JwRCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtBQUFRO0FBQUc7QUFHNUMsdUJBYlQsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGwnO1xuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei10YWJzLWluay1iYXIsIFtuei10YWJzLWluay1iYXJdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXRhYnMtaW5rLWJhcicsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkXSc6ICdfYW5pbWF0ZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJzSW5rQmFyRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcG9zaXRpb246IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBhbmltYXRlZCA9IHRydWU7XG5cbiAgZ2V0IF9hbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25Nb2RlICE9PSAnTm9vcEFuaW1hdGlvbnMnICYmIHRoaXMuYW5pbWF0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHB1YmxpYyBhbmltYXRpb25Nb2RlPzogc3RyaW5nXG4gICkge31cblxuICBhbGlnblRvRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB0aGlzLnNldFN0eWxlcyhlbGVtZW50KSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmtCYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpbmtCYXIuc3R5bGUudG9wID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUubGVmdCA9IHRoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgaW5rQmFyLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50V2lkdGgoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlua0Jhci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIGlua0Jhci5zdHlsZS50b3AgPSB0aGlzLmdldFRvcFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgaW5rQmFyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRMZWZ0UG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwKSArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCkgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0VG9wIHx8IDApICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDApICsgJ3B4JyA6ICcwJztcbiAgfVxufVxuIl19