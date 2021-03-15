/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class NzThMeasureDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changes$ = new Subject();
        this.nzWidth = null;
        this.colspan = null;
        this.colSpan = null;
        this.rowspan = null;
        this.rowSpan = null;
    }
    ngOnChanges(changes) {
        const { nzWidth, colspan, rowspan, colSpan, rowSpan } = changes;
        if (colspan || colSpan) {
            const col = this.colspan || this.colSpan;
            if (!isNil(col)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', `${col}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
            }
        }
        if (rowspan || rowSpan) {
            const row = this.rowspan || this.rowSpan;
            if (!isNil(row)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', `${row}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
            }
        }
        if (nzWidth || colspan) {
            this.changes$.next();
        }
    }
}
NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) { return new (t || NzThMeasureDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzThMeasureDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzThMeasureDirective, selectors: [["th"]], inputs: { nzWidth: "nzWidth", colspan: "colspan", colSpan: "colSpan", rowspan: "rowspan", rowSpan: "rowSpan" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzThMeasureDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzThMeasureDirective.propDecorators = {
    nzWidth: [{ type: Input }],
    colspan: [{ type: Input }],
    colSpan: [{ type: Input }],
    rowspan: [{ type: Input }],
    rowSpan: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzThMeasureDirective, [{
        type: Directive,
        args: [{
                selector: 'th'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzWidth: [{
            type: Input
        }], colspan: [{
            type: Input
        }], colSpan: [{
            type: Input
        }], rowspan: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtbWVhc3VyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUFPbEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQjtBQUFJLFFBQXZELGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQU54RSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUMzQixRQUFXLFlBQU8sR0FBa0IsSUFBSSxDQUFDO0FBQ3pDLFFBQVcsWUFBTyxHQUEyQixJQUFJLENBQUM7QUFDbEQsUUFBVyxZQUFPLEdBQTJCLElBQUksQ0FBQztBQUNsRCxRQUFXLFlBQU8sR0FBMkIsSUFBSSxDQUFDO0FBQ2xELFFBQVcsWUFBTyxHQUEyQixJQUFJLENBQUM7QUFDbEQsSUFBNEUsQ0FBQztBQUM3RSxJQUFFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3BFLFFBQUksSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO0FBQzVCLFlBQU0sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQy9DLFlBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN2QixnQkFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hGLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7QUFDNUIsWUFBTSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDL0MsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdkYsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEYsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTtBQUM1QixZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO2dEQWpDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLElBQUksY0FDZjttUUFDSTtBQUFDO0FBQThDLFlBUEYsU0FBUztBQUFJLFlBQTNDLFVBQVU7QUFBRztBQUFHO0FBQXdDLHNCQVN6RSxLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0aCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUaE1lYXN1cmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb2xzcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29sU3Bhbjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJvd3NwYW46IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSByb3dTcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56V2lkdGgsIGNvbHNwYW4sIHJvd3NwYW4sIGNvbFNwYW4sIHJvd1NwYW4gfSA9IGNoYW5nZXM7XG4gICAgaWYgKGNvbHNwYW4gfHwgY29sU3Bhbikge1xuICAgICAgY29uc3QgY29sID0gdGhpcy5jb2xzcGFuIHx8IHRoaXMuY29sU3BhbjtcbiAgICAgIGlmICghaXNOaWwoY29sKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbHNwYW4nLCBgJHtjb2x9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbHNwYW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvd3NwYW4gfHwgcm93U3Bhbikge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yb3dzcGFuIHx8IHRoaXMucm93U3BhbjtcbiAgICAgIGlmICghaXNOaWwocm93KSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Jvd3NwYW4nLCBgJHtyb3d9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Jvd3NwYW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56V2lkdGggfHwgY29sc3Bhbikge1xuICAgICAgdGhpcy5jaGFuZ2VzJC5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=