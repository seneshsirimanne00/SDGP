/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from './modal-ref';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal-ref';
export class NzModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzFooter: this.templateRef
            });
        }
    }
}
NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzModalRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzModalFooterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: ɵngcc1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.TemplateRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBTXpDLE1BQU0sT0FBTyxzQkFBc0I7QUFDbkMsSUFBRSxZQUFnQyxVQUFzQixFQUFTLFdBQTRCO0FBQzdGLFFBRGtDLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUFRLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtBQUFDLFFBQzFGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQ25DLGdCQUFRLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVztBQUNsQyxhQUFPLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtrREFaQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0IsUUFBUSxFQUFFLGVBQWUsY0FDMUI7OEpBQ0k7QUFBQztBQUNVLFlBUFAsVUFBVSx1QkFPSixRQUFRO0FBQU8sWUFSQSxXQUFXO0FBQUc7Ozs7Ozs7OztnRUFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuek1vZGFsRm9vdGVyXScsXG4gIGV4cG9ydEFzOiAnbnpNb2RhbEZvb3Rlcidcbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpNb2RhbFJlZjogTnpNb2RhbFJlZiwgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBpZiAodGhpcy5uek1vZGFsUmVmKSB7XG4gICAgICB0aGlzLm56TW9kYWxSZWYudXBkYXRlQ29uZmlnKHtcbiAgICAgICAgbnpGb290ZXI6IHRoaXMudGVtcGxhdGVSZWZcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19