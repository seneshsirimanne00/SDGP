/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
/**
 * hack the bug
 * angular router change with unexpected transition trigger after calling applicationRef.attachView
 * https://github.com/angular/angular/issues/34718
 */
import * as ɵngcc0 from '@angular/core';
export class NzTransitionPatchDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.hidden = null;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
    }
    setHiddenAttribute() {
        if (this.hidden === true) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
        }
        else if (this.hidden === false || this.hidden === null) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
        }
        else if (typeof this.hidden === 'string') {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', this.hidden);
        }
    }
    ngOnChanges() {
        this.setHiddenAttribute();
    }
    ngAfterViewInit() {
        this.setHiddenAttribute();
    }
}
NzTransitionPatchDirective.ɵfac = function NzTransitionPatchDirective_Factory(t) { return new (t || NzTransitionPatchDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTransitionPatchDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTransitionPatchDirective, selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"], ["nz-input-group"]], inputs: { hidden: "hidden" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzTransitionPatchDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTransitionPatchDirective.propDecorators = {
    hidden: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransitionPatchDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { hidden: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi1wYXRjaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uLXBhdGNoL3RyYW5zaXRpb24tcGF0Y2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBS0gsTUFBTSxPQUFPLDBCQUEwQjtBQUFHLElBWXhDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7QUFDekUsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBWC9ELFdBQU0sR0FBYyxJQUFJLENBQUM7QUFDcEMsUUFXSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUUsSUFBRSxDQUFDO0FBQ0gsSUFiRSxrQkFBa0I7QUFBSyxRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQzlCLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLFNBQUs7QUFBQyxhQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDOUQsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3RSxTQUFLO0FBQUMsYUFBSyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7QUFDaEQsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZGLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUtFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUFLLFFBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIO3NEQTNCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUNOO1lBQXFJLGNBQ3hJLHdWQUNJO0FBQUM7QUFBb0QsWUFadkIsVUFBVTtBQUFJLFlBQWdCLFNBQVM7QUFBRztBQUFHO0FBQ3JELHFCQVl4QixLQUFLO0FBQUk7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiBoYWNrIHRoZSBidWdcbiAqIGFuZ3VsYXIgcm91dGVyIGNoYW5nZSB3aXRoIHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiB0cmlnZ2VyIGFmdGVyIGNhbGxpbmcgYXBwbGljYXRpb25SZWYuYXR0YWNoVmlld1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzQ3MThcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICdbbnotYnV0dG9uXSwgbnotYnV0dG9uLWdyb3VwLCBbbnotaWNvbl0sIFtuei1tZW51LWl0ZW1dLCBbbnotc3VibWVudV0sIG56LXNlbGVjdC10b3AtY29udHJvbCwgbnotc2VsZWN0LXBsYWNlaG9sZGVyLCBuei1pbnB1dC1ncm91cCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2l0aW9uUGF0Y2hEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBoaWRkZW46IE56U2FmZUFueSA9IG51bGw7XG4gIHNldEhpZGRlbkF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oaWRkZW4gPT09IGZhbHNlIHx8IHRoaXMuaGlkZGVuID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuaGlkZGVuID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCB0aGlzLmhpZGRlbik7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SGlkZGVuQXR0cmlidXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIaWRkZW5BdHRyaWJ1dGUoKTtcbiAgfVxufVxuIl19