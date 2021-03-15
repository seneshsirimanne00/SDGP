/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
export class NzCellEllipsisDirective {
    constructor() {
        this.nzEllipsis = true;
    }
}
NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) { return new (t || NzCellEllipsisDirective)(); };
NzCellEllipsisDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCellEllipsisDirective, selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]], hostVars: 2, hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-cell-ellipsis", ctx.nzEllipsis);
    } }, inputs: { nzEllipsis: "nzEllipsis" } });
NzCellEllipsisDirective.propDecorators = {
    nzEllipsis: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCellEllipsisDirective, [{
        type: Directive,
        args: [{
                selector: 'th[nzEllipsis],td[nzEllipsis]',
                host: {
                    '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
                }
            }]
    }], function () { return []; }, { nzEllipsis: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9zdHlsZWQvZWxsaXBzaXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFRdkQsTUFBTSxPQUFPLHVCQUF1QjtBQUNwQyxJQVBBO0FBQ0csUUFRd0IsZUFBVSxHQUFHLElBQUksQ0FBQztBQUM3QyxJQUFBLENBQUM7QUFDRDttREFYQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO0dBQStCLGtCQUN6QyxJQUFJLEVBQUUsc0JBQ0osaUNBQWlDLEVBQUUsWUFBWSxrQkFDaEQsY0FDRjs7aURBQ0k7QUFBQztBQUNJLHlCQUVQLEtBQUs7QUFBSTtBQUFlO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFFViwyREFGMkI7Ozs7Ozs7Ozs7O29CQUM3QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGhbbnpFbGxpcHNpc10sdGRbbnpFbGxpcHNpc10nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY2VsbC1lbGxpcHNpc10nOiAnbnpFbGxpcHNpcydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNlbGxFbGxpcHNpc0RpcmVjdGl2ZSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekVsbGlwc2lzOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWxsaXBzaXMgPSB0cnVlO1xufVxuIl19