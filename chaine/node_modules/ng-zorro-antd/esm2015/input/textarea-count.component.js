/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, isDevMode, Renderer2 } from '@angular/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { NzInputDirective } from './input.directive';
import * as ɵngcc0 from '@angular/core';

const _c0 = [[["textarea", "nz-input", ""]]];
const _c1 = ["textarea[nz-input]"];
export class NzTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzMaxCharacterCount = 0;
        this.nzComputeCharacterCount = v => v.length;
        this.nzFormatter = (c, m) => `${c}` + (m > 0 ? `/${m}` : ``);
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.nzComputeCharacterCount(inputValue);
        const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) { return new (t || NzTextareaCountComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTextareaCountComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextareaCountComponent, selectors: [["nz-textarea-count"]], contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzInputDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { nzMaxCharacterCount: "nzMaxCharacterCount", nzComputeCharacterCount: "nzComputeCharacterCount", nzFormatter: "nzFormatter" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzTextareaCountComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzTextareaCountComponent.propDecorators = {
    nzInputDirective: [{ type: ContentChild, args: [NzInputDirective, { static: true },] }],
    nzMaxCharacterCount: [{ type: Input }],
    nzComputeCharacterCount: [{ type: Input }],
    nzFormatter: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextareaCountComponent, [{
        type: Component,
        args: [{
                selector: 'nz-textarea-count',
                template: `
    <ng-content select="textarea[nz-input]"></ng-content>
  `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzMaxCharacterCount: [{
            type: Input
        }], nzComputeCharacterCount: [{
            type: Input
        }], nzFormatter: [{
            type: Input
        }], nzInputDirective: [{
            type: ContentChild,
            args: [NzInputDirective, { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L3RleHRhcmVhLWNvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUVULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQVlyRCxNQUFNLE9BQU8sd0JBQXdCO0FBQUcsSUFTdEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztBQUFJLFFBQXBFLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFTLGVBQVUsR0FBVixVQUFVLENBQXlCO0FBQUMsUUFQNUUsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO0FBQzNDLFFBQVcsNEJBQXVCLEdBQTBCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMxRSxRQUFXLGdCQUFXLEdBQXlDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pHLFFBQ1Usa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLFFBQVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbkMsSUFDeUYsQ0FBQztBQUMxRixJQUNFLGtCQUFrQjtBQUFLLFFBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFLEVBQUU7QUFDL0MsWUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7QUFDaEcsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO0FBQ3pDLFlBQU0sTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO0FBQ2pGLFlBQU0sS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzdDLGlCQUFTLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDaEQsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBZSxDQUFDLENBQzNEO0FBQ1QsaUJBQVMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNCLGdCQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsWUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVksQ0FBQyxLQUFhO0FBQUksUUFDNUIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM1RCxRQUFJLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRSxRQUFJLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQy9FLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZGLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO29EQXBEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG1CQUFtQixrQkFDN0IsUUFBUSxFQUFFLCtEQUVUO1dBQ0QsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSwrQkFBK0Isa0JBQ3ZDLGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGNBQ2hEOzs7Ozs7OztpREFDSTtBQUFDO0FBQWtELFlBcEJ0RCxTQUFTO0FBQ1IsWUFMRCxVQUFVO0FBQ1g7QUFBRztBQUlILCtCQW9CRSxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQU8sa0NBQ3RELEtBQUs7QUFBSyxzQ0FDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRU1QVFksIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGV4dGFyZWEtY291bnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInRleHRhcmVhW256LWlucHV0XVwiPjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWlucHV0LXRleHRhcmVhLXNob3ctY291bnQnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VGV4dGFyZWFDb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGQoTnpJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpJbnB1dERpcmVjdGl2ZSE6IE56SW5wdXREaXJlY3RpdmU7XG4gIEBJbnB1dCgpIG56TWF4Q2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG56Q29tcHV0ZUNoYXJhY3RlckNvdW50OiAodjogc3RyaW5nKSA9PiBudW1iZXIgPSB2ID0+IHYubGVuZ3RoO1xuICBASW5wdXQoKSBuekZvcm1hdHRlcjogKGN1cjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gc3RyaW5nID0gKGMsIG0pID0+IGAke2N9YCArIChtID4gMCA/IGAvJHttfWAgOiBgYCk7XG5cbiAgcHJpdmF0ZSBjb25maWdDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpJbnB1dERpcmVjdGl2ZSAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbnotdGV4dGFyZWEtY291bnRdOiBDb3VsZCBub3QgZmluZCBtYXRjaGluZyB0ZXh0YXJlYVtuei1pbnB1dF0gY2hpbGQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wpIHtcbiAgICAgIGNvbnN0IHZhbHVlQ2hhbmdlcyA9IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzIHx8IEVNUFRZO1xuICAgICAgbWVyZ2UodmFsdWVDaGFuZ2VzLCB0aGlzLmNvbmZpZ0NoYW5nZSQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZSksXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YUNvdW50KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0YUNvdW50KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaXNOb3ROaWwodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IHRoaXMubnpDb21wdXRlQ2hhcmFjdGVyQ291bnQoaW5wdXRWYWx1ZSk7XG4gICAgY29uc3QgZGF0YUNvdW50ID0gdGhpcy5uekZvcm1hdHRlcihjdXJyZW50Q291bnQsIHRoaXMubnpNYXhDaGFyYWN0ZXJDb3VudCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvdW50JywgZGF0YUNvdW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnQ2hhbmdlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19