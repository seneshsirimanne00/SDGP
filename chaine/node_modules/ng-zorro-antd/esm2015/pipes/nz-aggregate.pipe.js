/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { sum } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
export class NzAggregatePipe {
    transform(value, method) {
        if (!Array.isArray(value)) {
            return value;
        }
        if (value.length === 0) {
            return undefined;
        }
        switch (method) {
            case 'sum':
                return sum(value);
            case 'avg':
                return sum(value) / value.length;
            case 'max':
                return Math.max(...value);
            case 'min':
                return Math.min(...value);
            default:
                throw Error(`Invalid Pipe Arguments: Aggregate pipe doesn't support this type`);
        }
    }
}
NzAggregatePipe.ɵfac = function NzAggregatePipe_Factory(t) { return new (t || NzAggregatePipe)(); };
NzAggregatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzAggregate", type: NzAggregatePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAggregatePipe, [{
        type: Pipe,
        args: [{
                name: 'nzAggregate'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWdncmVnYXRlLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGlwZXMvbnotYWdncmVnYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPOUMsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQUM3QixTQUFTLENBQUMsS0FBZSxFQUFFLE1BQXVCO0FBQUksUUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDL0IsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsUUFDSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVCLFlBQU0sT0FBTyxTQUFTLENBQUM7QUFDdkIsU0FBSztBQUNMLFFBQ0ksUUFBUSxNQUFNLEVBQUU7QUFDcEIsWUFBTSxLQUFLLEtBQUs7QUFDaEIsZ0JBQVEsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsWUFBTSxLQUFLLEtBQUs7QUFDaEIsZ0JBQVEsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN6QyxZQUFNLEtBQUssS0FBSztBQUNoQixnQkFBUSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNsQyxZQUFNLEtBQUssS0FBSztBQUNoQixnQkFBUSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNsQyxZQUFNO0FBQ04sZ0JBQVEsTUFBTSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztBQUN4RixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7MkNBMUJDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsYUFBYTtNQUNwQjs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdW0gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmV4cG9ydCB0eXBlIEFnZ3JlZ2F0ZU1ldGhvZCA9ICdzdW0nIHwgJ21heCcgfCAnbWluJyB8ICdhdmcnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduekFnZ3JlZ2F0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTnpBZ2dyZWdhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyW10sIG1ldGhvZDogQWdncmVnYXRlTWV0aG9kKTogdW5kZWZpbmVkIHwgbnVtYmVyIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgcmV0dXJuIHN1bSh2YWx1ZSk7XG4gICAgICBjYXNlICdhdmcnOlxuICAgICAgICByZXR1cm4gc3VtKHZhbHVlKSAvIHZhbHVlLmxlbmd0aDtcbiAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZSk7XG4gICAgICBjYXNlICdtaW4nOlxuICAgICAgICByZXR1cm4gTWF0aC5taW4oLi4udmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgUGlwZSBBcmd1bWVudHM6IEFnZ3JlZ2F0ZSBwaXBlIGRvZXNuJ3Qgc3VwcG9ydCB0aGlzIHR5cGVgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==