/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
export class NzSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type = 'html') {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified`);
        }
    }
}
NzSanitizerPipe.ɵfac = function NzSanitizerPipe_Factory(t) { return new (t || NzSanitizerPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
NzSanitizerPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzSanitizer", type: NzSanitizerPipe, pure: true });
NzSanitizerPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSanitizerPipe, [{
        type: Pipe,
        args: [{
                name: 'nzSanitizer'
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2FuaXRpemVyLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGlwZXMvbnotc2FuaXRpemVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQWlELE1BQU0sMkJBQTJCLENBQUM7OztBQVF4RyxNQUFNLE9BQU8sZUFBZTtBQUFHLElBQzdCLFlBQXNCLFNBQXVCO0FBQUksUUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBYztBQUFDLElBQUUsQ0FBQztBQUNuRCxJQUlFLFNBQVMsQ0FBQyxLQUFnQixFQUFFLE9BQXlCLE1BQU07QUFBSSxRQUM3RCxRQUFRLElBQUksRUFBRTtBQUNsQixZQUFNLEtBQUssTUFBTTtBQUNqQixnQkFBUSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0QsWUFBTSxLQUFLLE9BQU87QUFDbEIsZ0JBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlELFlBQU0sS0FBSyxLQUFLO0FBQ2hCLGdCQUFRLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RCxZQUFNLEtBQUssYUFBYTtBQUN4QixnQkFBUSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEUsWUFBTTtBQUNOLGdCQUFRLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUN2RCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7MkNBdkJDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsYUFBYSxjQUNwQjt3R0FDSTtBQUFDO0FBQXlDLFlBUnRDLFlBQVk7QUFBRzs7Ozs7OzZFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxudHlwZSBEb21TYW5pdGl6ZXJUeXBlID0gJ2h0bWwnIHwgJ3N0eWxlJyB8ICd1cmwnIHwgJ3Jlc291cmNlVXJsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbnpTYW5pdGl6ZXInXG59KVxuZXhwb3J0IGNsYXNzIE56U2FuaXRpemVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogTnpTYWZlQW55LCB0eXBlOiAnaHRtbCcpOiBTYWZlSHRtbDtcbiAgdHJhbnNmb3JtKHZhbHVlOiBOelNhZmVBbnksIHR5cGU6ICdzdHlsZScpOiBTYWZlU3R5bGU7XG4gIHRyYW5zZm9ybSh2YWx1ZTogTnpTYWZlQW55LCB0eXBlOiAndXJsJyk6IFNhZmVVcmw7XG4gIHRyYW5zZm9ybSh2YWx1ZTogTnpTYWZlQW55LCB0eXBlOiAncmVzb3VyY2VVcmwnKTogU2FmZVJlc291cmNlVXJsO1xuICB0cmFuc2Zvcm0odmFsdWU6IE56U2FmZUFueSwgdHlwZTogRG9tU2FuaXRpemVyVHlwZSA9ICdodG1sJyk6IFNhZmVIdG1sIHwgU2FmZVN0eWxlIHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZSk7XG4gICAgICBjYXNlICdyZXNvdXJjZVVybCc6XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNhZmUgdHlwZSBzcGVjaWZpZWRgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==