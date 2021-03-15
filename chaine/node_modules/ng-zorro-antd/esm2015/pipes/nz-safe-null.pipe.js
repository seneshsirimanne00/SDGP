/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
export class NzSafeNullPipe {
    transform(value, replace = '') {
        if (isNil(value)) {
            return replace;
        }
        return value;
    }
}
NzSafeNullPipe.ɵfac = function NzSafeNullPipe_Factory(t) { return new (t || NzSafeNullPipe)(); };
NzSafeNullPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzSafeNull", type: NzSafeNullPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSafeNullPipe, [{
        type: Pipe,
        args: [{
                name: 'nzSafeNull'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2FmZS1udWxsLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGlwZXMvbnotc2FmZS1udWxsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLaEQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQUM1QixTQUFTLENBQUksS0FBUSxFQUFFLFVBQWtCLEVBQUU7QUFBSSxRQUM3QyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN0QixZQUFNLE9BQU8sT0FBTyxDQUFDO0FBQ3JCLFNBQUs7QUFDTCxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLElBQUUsQ0FBQztBQUNIOzBDQVZDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsWUFBWTtPQUNuQjs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbnpTYWZlTnVsbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTYWZlTnVsbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtPFQ+KHZhbHVlOiBULCByZXBsYWNlOiBzdHJpbmcgPSAnJyk6IFQgfCBzdHJpbmcge1xuICAgIGlmIChpc05pbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiByZXBsYWNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==