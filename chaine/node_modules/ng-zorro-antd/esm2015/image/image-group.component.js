/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class NzImageGroupComponent {
    constructor() {
        this.images = [];
    }
    addImage(image) {
        this.images.push(image);
    }
}
NzImageGroupComponent.ɵfac = function NzImageGroupComponent_Factory(t) { return new (t || NzImageGroupComponent)(); };
NzImageGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzImageGroupComponent, selectors: [["nz-image-group"]], exportAs: ["nzImageGroup"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzImageGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzImageGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-image-group',
                exportAs: 'nzImageGroup',
                template: '<ng-content></ng-content>',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVl0RixNQUFNLE9BQU8scUJBQXFCO0FBQ2xDLElBVEE7QUFDRyxRQVFELFdBQU0sR0FBdUIsRUFBRSxDQUFDO0FBQ2xDLElBSUEsQ0FBQztBQUNELElBSkUsUUFBUSxDQUFDLEtBQXVCO0FBQUksUUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7aURBZEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0I7VUFDMUIsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkIsa0JBQ3JDLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtFQUN0Qzs7Ozs7Ozs7Ozs7OztnREFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56SW1hZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2ltYWdlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWltYWdlLWdyb3VwJyxcbiAgZXhwb3J0QXM6ICduekltYWdlR3JvdXAnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpJbWFnZUdyb3VwQ29tcG9uZW50IHtcbiAgaW1hZ2VzOiBOekltYWdlRGlyZWN0aXZlW10gPSBbXTtcblxuICBhZGRJbWFnZShpbWFnZTogTnpJbWFnZURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICB9XG59XG4iXX0=