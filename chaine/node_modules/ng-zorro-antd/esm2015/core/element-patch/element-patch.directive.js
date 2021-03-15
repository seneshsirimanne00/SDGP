/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef } from '@angular/core';
/**
 * A patch directive to select the element of a component.
 */
import * as ɵngcc0 from '@angular/core';
export class NzElementPatchDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
}
NzElementPatchDirective.ɵfac = function NzElementPatchDirective_Factory(t) { return new (t || NzElementPatchDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzElementPatchDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzElementPatchDirective, selectors: [["", "nzElement", ""], ["", "nz-element", ""]], exportAs: ["nzElement"] });
NzElementPatchDirective.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzElementPatchDirective, [{
        type: Directive,
        args: [{
                selector: '[nzElement], [nz-element]',
                exportAs: 'nzElement'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1wYXRjaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9lbGVtZW50LXBhdGNoL2VsZW1lbnQtcGF0Y2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RDtBQUNBO0FBQ0EsR0FBRzs7QUFLSCxNQUFNLE9BQU8sdUJBQXVCO0FBQ3BDLElBSUUsWUFBbUIsVUFBc0I7QUFBSSxRQUExQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsSUFBRSxDQUFDO0FBQy9DLElBTEUsSUFBSSxhQUFhO0FBQUssUUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSDttREFSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJCQUEyQixrQkFDckMsUUFBUSxFQUFFLFdBQVc7U0FDdEIsdUtBQ0k7QUFBQztBQUNVLFlBWEksVUFBVTtBQUFHOzs7Ozs7OzJFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbi8qKlxuICogQSBwYXRjaCBkaXJlY3RpdmUgdG8gc2VsZWN0IHRoZSBlbGVtZW50IG9mIGEgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpFbGVtZW50XSwgW256LWVsZW1lbnRdJyxcbiAgZXhwb3J0QXM6ICduekVsZW1lbnQnXG59KVxuZXhwb3J0IGNsYXNzIE56RWxlbWVudFBhdGNoRGlyZWN0aXZlIHtcbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cbiJdfQ==