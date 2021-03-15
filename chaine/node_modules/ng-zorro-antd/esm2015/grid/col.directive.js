/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './row.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './row.directive';
import * as ɵngcc2 from '@angular/cdk/bidi';
export class NzColDirective {
    constructor(elementRef, nzRowDirective, renderer, directionality) {
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.directionality = directionality;
        this.classMap = {};
        this.destroy$ = new Subject();
        this.hostFlexStyle = null;
        this.dir = 'ltr';
        this.nzFlex = null;
        this.nzSpan = null;
        this.nzOrder = null;
        this.nzOffset = null;
        this.nzPush = null;
        this.nzPull = null;
        this.nzXs = null;
        this.nzSm = null;
        this.nzMd = null;
        this.nzLg = null;
        this.nzXl = null;
        this.nzXXl = null;
    }
    setHostClassMap() {
        const hostClassMap = Object.assign({ ['ant-col']: true, [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan), [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush), ['ant-col-rtl']: this.dir === 'rtl' }, this.generateClass());
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i)) {
                this.renderer.removeClass(this.elementRef.nativeElement, i);
            }
        }
        this.classMap = Object.assign({}, hostClassMap);
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
                this.renderer.addClass(this.elementRef.nativeElement, i);
            }
        }
    }
    setHostFlexStyle() {
        this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }
    parseFlex(flex) {
        if (typeof flex === 'number') {
            return `${flex} ${flex} auto`;
        }
        else if (typeof flex === 'string') {
            if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
                return `0 0 ${flex}`;
            }
        }
        return flex;
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.setHostClassMap();
        });
        this.setHostClassMap();
        this.setHostFlexStyle();
    }
    ngOnChanges(changes) {
        this.setHostClassMap();
        const { nzFlex } = changes;
        if (nzFlex) {
            this.setHostFlexStyle();
        }
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
                const renderGutter = (name, gutter) => {
                    const nativeElement = this.elementRef.nativeElement;
                    if (gutter !== null) {
                        this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
                    }
                };
                renderGutter('padding-left', horizontalGutter);
                renderGutter('padding-right', horizontalGutter);
                renderGutter('padding-top', verticalGutter);
                renderGutter('padding-bottom', verticalGutter);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzRowDirective, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzColDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]], hostVars: 2, hostBindings: function NzColDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("flex", ctx.hostFlexStyle);
    } }, inputs: { nzFlex: "nzFlex", nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzColDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzColDirective.propDecorators = {
    nzFlex: [{ type: Input }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzColDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-col],nz-col,nz-form-control,nz-form-label',
                exportAs: 'nzCol',
                host: {
                    '[style.flex]': 'hostFlexStyle'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzFlex: [{
            type: Input
        }], nzSpan: [{
            type: Input
        }], nzOrder: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzPush: [{
            type: Input
        }], nzPull: [{
            type: Input
        }], nzXs: [{
            type: Input
        }], nzSm: [{
            type: Input
        }], nzMd: [{
            type: Input
        }], nzLg: [{
            type: Input
        }], nzXl: [{
            type: Input
        }], nzXXl: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9ncmlkL2NvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQWlCakQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQThFNUIsWUFDVSxVQUFzQixFQUNILGNBQThCLEVBQ2xELFFBQW1CLEVBQ04sY0FBOEI7QUFDbkQsUUFKUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDSixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQUNuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDUCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFsRlUsYUFBUSxHQUErQixFQUFFLENBQUM7QUFDcEQsUUFBVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNuQyxRQUFFLGtCQUFhLEdBQWtCLElBQUksQ0FBQztBQUN0QyxRQUFFLFFBQUcsR0FBYyxLQUFLLENBQUM7QUFDekIsUUFBVyxXQUFNLEdBQTJCLElBQUksQ0FBQztBQUNqRCxRQUFXLFdBQU0sR0FBMkIsSUFBSSxDQUFDO0FBQ2pELFFBQVcsWUFBTyxHQUEyQixJQUFJLENBQUM7QUFDbEQsUUFBVyxh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QVM7QUFDVCxZQVprQixjQUFjLHVCQXFIN0IsUUFBUTtBQUFNO0FBQUc7QUFDckIscUJBOUVFLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vcm93LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XG4gIHNwYW4/OiBudW1iZXI7XG4gIHB1bGw/OiBudW1iZXI7XG4gIHB1c2g/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1jb2xdLG56LWNvbCxuei1mb3JtLWNvbnRyb2wsbnotZm9ybS1sYWJlbCcsXG4gIGV4cG9ydEFzOiAnbnpDb2wnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5mbGV4XSc6ICdob3N0RmxleFN0eWxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBob3N0RmxleFN0eWxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgQElucHV0KCkgbnpGbGV4OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpTcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpPcmRlcjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQdXNoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQdWxsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpYczogc3RyaW5nIHwgbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNtOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWQ6IHN0cmluZyB8IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpMZzogc3RyaW5nIHwgbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelhsOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56WFhsOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG5cbiAgc2V0SG9zdENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGhvc3RDbGFzc01hcCA9IHtcbiAgICAgIFsnYW50LWNvbCddOiB0cnVlLFxuICAgICAgW2BhbnQtY29sLSR7dGhpcy5uelNwYW59YF06IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcbiAgICAgIFtgYW50LWNvbC1vcmRlci0ke3RoaXMubnpPcmRlcn1gXTogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcbiAgICAgIFtgYW50LWNvbC1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFtgYW50LWNvbC1wdWxsLSR7dGhpcy5uelB1bGx9YF06IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcbiAgICAgIFtgYW50LWNvbC1wdXNoLSR7dGhpcy5uelB1c2h9YF06IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcbiAgICAgIFsnYW50LWNvbC1ydGwnXTogdGhpcy5kaXIgPT09ICdydGwnLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNsYXNzTWFwKSB7XG4gICAgICBpZiAodGhpcy5jbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uaG9zdENsYXNzTWFwIH07XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2xhc3NNYXApIHtcbiAgICAgIGlmICh0aGlzLmNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpICYmIHRoaXMuY2xhc3NNYXBbaV0pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SG9zdEZsZXhTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvc3RGbGV4U3R5bGUgPSB0aGlzLnBhcnNlRmxleCh0aGlzLm56RmxleCk7XG4gIH1cblxuICBwYXJzZUZsZXgoZmxleDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZmxleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBgJHtmbGV4fSAke2ZsZXh9IGF1dG9gO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZsZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoL15cXGQrKFxcLlxcZCspPyhweHxlbXxyZW18JSkkLy50ZXN0KGZsZXgpKSB7XG4gICAgICAgIHJldHVybiBgMCAwICR7ZmxleH1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxleDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lOiBBcnJheTxrZXlvZiBOekNvbERpcmVjdGl2ZT4gPSBbJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCddO1xuICAgIGNvbnN0IGxpc3RDbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdueicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbbmFtZV0pKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXNbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwW2BhbnQtY29sLSR7c2l6ZU5hbWV9LSR7dGhpc1tuYW1lXX1gXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZW1iZWRkZWQgPSB0aGlzW25hbWVdIGFzIEVtYmVkZGVkUHJvcGVydHk7XG4gICAgICAgICAgY29uc3QgcHJlZml4QXJyYXk6IEFycmF5PGtleW9mIEVtYmVkZGVkUHJvcGVydHk+ID0gWydzcGFuJywgJ3B1bGwnLCAncHVzaCcsICdvZmZzZXQnLCAnb3JkZXInXTtcbiAgICAgICAgICBwcmVmaXhBcnJheS5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhDbGFzcyA9IHByZWZpeCA9PT0gJ3NwYW4nID8gJy0nIDogYC0ke3ByZWZpeH0tYDtcbiAgICAgICAgICAgIGxpc3RDbGFzc01hcFtgYW50LWNvbC0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID0gZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzTWFwKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEhvc3RDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SG9zdEZsZXhTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzTWFwKCk7XG4gICAgY29uc3QgeyBuekZsZXggfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56RmxleCkge1xuICAgICAgdGhpcy5zZXRIb3N0RmxleFN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56Um93RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJHdXR0ZXIgPSAobmFtZTogc3RyaW5nLCBndXR0ZXI6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgaWYgKGd1dHRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCBuYW1lLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctbGVmdCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctcmlnaHQnLCBob3Jpem9udGFsR3V0dGVyKTtcbiAgICAgICAgcmVuZGVyR3V0dGVyKCdwYWRkaW5nLXRvcCcsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICAgICAgcmVuZGVyR3V0dGVyKCdwYWRkaW5nLWJvdHRvbScsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19