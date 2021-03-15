/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Directive, ElementRef, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["nzType", "button"];
const _c1 = ["nzType", "avatar"];
const _c2 = ["nzType", "input"];
const _c3 = ["nzType", "image"];
export class NzSkeletonElementDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzActive = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-skeleton', 'ant-skeleton-element');
    }
}
NzSkeletonElementDirective.ɵfac = function NzSkeletonElementDirective_Factory(t) { return new (t || NzSkeletonElementDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzSkeletonElementDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzSkeletonElementDirective, selectors: [["nz-skeleton-element"]], hostVars: 2, hostBindings: function NzSkeletonElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-skeleton-active", ctx.nzActive);
    } }, inputs: { nzActive: "nzActive", nzType: "nzType" } });
NzSkeletonElementDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzSkeletonElementDirective.propDecorators = {
    nzActive: [{ type: Input }],
    nzType: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonElementDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-skeleton-element',
                host: {
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzActive: [{
            type: Input
        }], nzType: [{
            type: Input
        }] }); })();
export class NzSkeletonElementButtonComponent {
    constructor() {
        this.nzShape = 'default';
        this.nzSize = 'default';
    }
}
NzSkeletonElementButtonComponent.ɵfac = function NzSkeletonElementButtonComponent_Factory(t) { return new (t || NzSkeletonElementButtonComponent)(); };
NzSkeletonElementButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSkeletonElementButtonComponent, selectors: [["nz-skeleton-element", "nzType", "button"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, attrs: _c0, decls: 1, vars: 8, consts: [[1, "ant-skeleton-button"]], template: function NzSkeletonElementButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-skeleton-button-round", ctx.nzShape === "round")("ant-skeleton-button-circle", ctx.nzShape === "circle")("ant-skeleton-button-lg", ctx.nzSize === "large")("ant-skeleton-button-sm", ctx.nzSize === "small");
    } }, encapsulation: 2, changeDetection: 0 });
NzSkeletonElementButtonComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonElementButtonComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="button"]',
                template: `
    <span
      class="ant-skeleton-button"
      [class.ant-skeleton-button-round]="nzShape === 'round'"
      [class.ant-skeleton-button-circle]="nzShape === 'circle'"
      [class.ant-skeleton-button-lg]="nzSize === 'large'"
      [class.ant-skeleton-button-sm]="nzSize === 'small'"
    ></span>
  `
            }]
    }], function () { return []; }, { nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }] }); })();
export class NzSkeletonElementAvatarComponent {
    constructor() {
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.styleMap = {};
    }
    ngOnChanges(changes) {
        if (changes.nzSize && typeof this.nzSize === 'number') {
            const sideLength = `${this.nzSize}px`;
            this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
        }
        else {
            this.styleMap = {};
        }
    }
}
NzSkeletonElementAvatarComponent.ɵfac = function NzSkeletonElementAvatarComponent_Factory(t) { return new (t || NzSkeletonElementAvatarComponent)(); };
NzSkeletonElementAvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSkeletonElementAvatarComponent, selectors: [["nz-skeleton-element", "nzType", "avatar"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 1, vars: 9, consts: [[1, "ant-skeleton-avatar", 3, "ngStyle"]], template: function NzSkeletonElementAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-skeleton-avatar-square", ctx.nzShape === "square")("ant-skeleton-avatar-circle", ctx.nzShape === "circle")("ant-skeleton-avatar-lg", ctx.nzSize === "large")("ant-skeleton-avatar-sm", ctx.nzSize === "small");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.styleMap);
    } }, directives: [ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
NzSkeletonElementAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonElementAvatarComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="avatar"]',
                template: `
    <span
      class="ant-skeleton-avatar"
      [class.ant-skeleton-avatar-square]="nzShape === 'square'"
      [class.ant-skeleton-avatar-circle]="nzShape === 'circle'"
      [class.ant-skeleton-avatar-lg]="nzSize === 'large'"
      [class.ant-skeleton-avatar-sm]="nzSize === 'small'"
      [ngStyle]="styleMap"
    ></span>
  `
            }]
    }], function () { return []; }, { nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }] }); })();
export class NzSkeletonElementInputComponent {
    constructor() {
        this.nzSize = 'default';
    }
}
NzSkeletonElementInputComponent.ɵfac = function NzSkeletonElementInputComponent_Factory(t) { return new (t || NzSkeletonElementInputComponent)(); };
NzSkeletonElementInputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSkeletonElementInputComponent, selectors: [["nz-skeleton-element", "nzType", "input"]], inputs: { nzSize: "nzSize" }, attrs: _c2, decls: 1, vars: 4, consts: [[1, "ant-skeleton-input"]], template: function NzSkeletonElementInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-skeleton-input-lg", ctx.nzSize === "large")("ant-skeleton-input-sm", ctx.nzSize === "small");
    } }, encapsulation: 2, changeDetection: 0 });
NzSkeletonElementInputComponent.propDecorators = {
    nzSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonElementInputComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="input"]',
                template: `
    <span
      class="ant-skeleton-input"
      [class.ant-skeleton-input-lg]="nzSize === 'large'"
      [class.ant-skeleton-input-sm]="nzSize === 'small'"
    ></span>
  `
            }]
    }], function () { return []; }, { nzSize: [{
            type: Input
        }] }); })();
export class NzSkeletonElementImageComponent {
}
NzSkeletonElementImageComponent.ɵfac = function NzSkeletonElementImageComponent_Factory(t) { return new (t || NzSkeletonElementImageComponent)(); };
NzSkeletonElementImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSkeletonElementImageComponent, selectors: [["nz-skeleton-element", "nzType", "image"]], attrs: _c3, decls: 3, vars: 0, consts: [[1, "ant-skeleton-image"], ["viewBox", "0 0 1098 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-skeleton-image-svg"], ["d", "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", 1, "ant-skeleton-image-path"]], template: function NzSkeletonElementImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵelement(2, "path", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonElementImageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-skeleton-element[nzType="image"]',
                template: `
    <span class="ant-skeleton-image">
      <svg class="ant-skeleton-image-svg" viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"
          class="ant-skeleton-image-path"
        />
      </svg>
    </span>
  `
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24tZWxlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24tZWxlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQWUzSCxNQUFNLE9BQU8sMEJBQTBCO0FBQ3ZDLElBR0UsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBSGxDLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFHSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hGLElBQUUsQ0FBQztBQUNIO3NEQWRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUscUJBQXFCLGtCQUMvQixJQUFJLEVBQUUsc0JBQ0o7bUJBQTZCLEVBQUUsVUFBVSxrQkFDMUMsY0FDRjs7K0RBQ0k7QUFBQztBQUNVLFlBaEJ3QyxVQUFVO0FBQUc7QUFBRztBQUE4Qyx1QkFnQm5ILEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFxQmQsTUFBTSxPQUFPLGdDQUFnQztBQUM3QyxJQWRBO0FBQ0csUUFhUSxZQUFPLEdBQTBCLFNBQVMsQ0FBQztBQUN0RCxRQUFXLFdBQU0sR0FBeUIsU0FBUyxDQUFDO0FBQ3BELElBQUEsQ0FBQztBQUNEOzREQWpCQyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDL0MsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQsUUFBUSxFQUFFO21CQVFULGNBQ0Y7OztpREFDSTtBQUFDO0FBQ0ksc0JBQVAsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFpQmQsTUFBTSxPQUFPLGdDQUFnQztBQUFHLElBZGhEO0FBQ0csUUFjUSxZQUFPLEdBQTBCLFFBQVEsQ0FBQztBQUNyRCxRQUFXLFdBQU0sR0FBeUIsU0FBUyxDQUFDO0FBQ3BELFFBQ0UsYUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNoQixJQVNBLENBQUM7QUFDRCxJQVRFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQzNELFlBQU0sTUFBTSxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7QUFDNUMsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUMzRixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDekIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzREQTVCQyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDL0MsUUFBUSxFQUFFLHNDQUFzQyxrQkFDaEQsUUFBUSxFQUFFLDZVQVNUO09BQ0Y7Ozs7K0VBQ0k7QUFBQztBQUFvRCxzQkFDdkQsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBeUJkLE1BQU0sT0FBTywrQkFBK0I7QUFDNUMsSUFaQTtBQUNHLFFBV1EsV0FBTSxHQUF3QixTQUFTLENBQUM7QUFDbkQsSUFBQSxDQUFDO0FBQ0Q7MkRBZEMsU0FBUyxTQUFDLGtCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1dBQy9DLFFBQVEsRUFBRSxxQ0FBcUMsa0JBQy9DLFFBQVEsRUFBRSwrS0FNVCxjQUNGOzs7O2lEQUNJO0FBQUM7QUFDSSxxQkFBUCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFpQmQsTUFBTSxPQUFPLCtCQUErQjtBQUFHOzJEQWQ5QyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07V0FDL0MsUUFBUSxFQUFFLHFDQUFxQyxrQkFDL0MsUUFBUSxFQUFFLDJtQ0FTVCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTnpTa2VsZXRvbkF2YXRhclNoYXBlLFxuICBOelNrZWxldG9uQXZhdGFyU2l6ZSxcbiAgTnpTa2VsZXRvbkJ1dHRvblNoYXBlLFxuICBOelNrZWxldG9uQnV0dG9uU2l6ZSxcbiAgTnpTa2VsZXRvbklucHV0U2l6ZVxufSBmcm9tICcuL3NrZWxldG9uLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbi1lbGVtZW50JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkVsZW1lbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBuekFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelR5cGUhOiAnYnV0dG9uJyB8ICdpbnB1dCcgfCAnYXZhdGFyJyB8ICdpbWFnZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXNrZWxldG9uJywgJ2FudC1za2VsZXRvbi1lbGVtZW50Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LXNrZWxldG9uLWVsZW1lbnRbbnpUeXBlPVwiYnV0dG9uXCJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtc2tlbGV0b24tYnV0dG9uXCJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYnV0dG9uLXJvdW5kXT1cIm56U2hhcGUgPT09ICdyb3VuZCdcIlxuICAgICAgW2NsYXNzLmFudC1za2VsZXRvbi1idXR0b24tY2lyY2xlXT1cIm56U2hhcGUgPT09ICdjaXJjbGUnXCJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYnV0dG9uLWxnXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWJ1dHRvbi1zbV09XCJuelNpemUgPT09ICdzbWFsbCdcIlxuICAgID48L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkVsZW1lbnRCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBuelNoYXBlOiBOelNrZWxldG9uQnV0dG9uU2hhcGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTa2VsZXRvbkJ1dHRvblNpemUgPSAnZGVmYXVsdCc7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbi1lbGVtZW50W256VHlwZT1cImF2YXRhclwiXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPVwiYW50LXNrZWxldG9uLWF2YXRhclwiXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWF2YXRhci1zcXVhcmVdPVwibnpTaGFwZSA9PT0gJ3NxdWFyZSdcIlxuICAgICAgW2NsYXNzLmFudC1za2VsZXRvbi1hdmF0YXItY2lyY2xlXT1cIm56U2hhcGUgPT09ICdjaXJjbGUnXCJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYXZhdGFyLWxnXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWF2YXRhci1zbV09XCJuelNpemUgPT09ICdzbWFsbCdcIlxuICAgICAgW25nU3R5bGVdPVwic3R5bGVNYXBcIlxuICAgID48L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkVsZW1lbnRBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelNoYXBlOiBOelNrZWxldG9uQXZhdGFyU2hhcGUgPSAnY2lyY2xlJztcbiAgQElucHV0KCkgbnpTaXplOiBOelNrZWxldG9uQXZhdGFyU2l6ZSA9ICdkZWZhdWx0JztcblxuICBzdHlsZU1hcCA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelNpemUgJiYgdHlwZW9mIHRoaXMubnpTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IGAke3RoaXMubnpTaXplfXB4YDtcbiAgICAgIHRoaXMuc3R5bGVNYXAgPSB7IHdpZHRoOiBzaWRlTGVuZ3RoLCBoZWlnaHQ6IHNpZGVMZW5ndGgsICdsaW5lLWhlaWdodCc6IHNpZGVMZW5ndGggfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZU1hcCA9IHt9O1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotc2tlbGV0b24tZWxlbWVudFtuelR5cGU9XCJpbnB1dFwiXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPVwiYW50LXNrZWxldG9uLWlucHV0XCJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24taW5wdXQtbGddPVwibnpTaXplID09PSAnbGFyZ2UnXCJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24taW5wdXQtc21dPVwibnpTaXplID09PSAnc21hbGwnXCJcbiAgICA+PC9zcGFuPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56U2tlbGV0b25FbGVtZW50SW5wdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBuelNpemU6IE56U2tlbGV0b25JbnB1dFNpemUgPSAnZGVmYXVsdCc7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbi1lbGVtZW50W256VHlwZT1cImltYWdlXCJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1za2VsZXRvbi1pbWFnZVwiPlxuICAgICAgPHN2ZyBjbGFzcz1cImFudC1za2VsZXRvbi1pbWFnZS1zdmdcIiB2aWV3Qm94PVwiMCAwIDEwOTggMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTM2NS43MTQyODYgMzI5LjE0Mjg1N3EwIDQ1LjcxNDI4Ni0zMi4wMzY1NzEgNzcuNjc3NzE0dC03Ny42Nzc3MTQgMzIuMDM2NTcxLTc3LjY3NzcxNC0zMi4wMzY1NzEtMzIuMDM2NTcxLTc3LjY3NzcxNCAzMi4wMzY1NzEtNzcuNjc3NzE0IDc3LjY3NzcxNC0zMi4wMzY1NzEgNzcuNjc3NzE0IDMyLjAzNjU3MSAzMi4wMzY1NzEgNzcuNjc3NzE0ek05NTAuODU3MTQzIDU0OC41NzE0MjlsMCAyNTYtODA0LjU3MTQyOSAwIDAtMTA5LjcxNDI4NiAxODIuODU3MTQzLTE4Mi44NTcxNDMgOTEuNDI4NTcxIDkxLjQyODU3MSAyOTIuNTcxNDI5LTI5Mi41NzE0Mjl6TTEwMDUuNzE0Mjg2IDE0Ni4yODU3MTRsLTkxNC4yODU3MTQgMHEtNy40NjA1NzEgMC0xMi44NzMxNDMgNS40MTI1NzF0LTUuNDEyNTcxIDEyLjg3MzE0M2wwIDY5NC44NTcxNDNxMCA3LjQ2MDU3MSA1LjQxMjU3MSAxMi44NzMxNDN0MTIuODczMTQzIDUuNDEyNTcxbDkxNC4yODU3MTQgMHE3LjQ2MDU3MSAwIDEyLjg3MzE0My01LjQxMjU3MXQ1LjQxMjU3MS0xMi44NzMxNDNsMC02OTQuODU3MTQzcTAtNy40NjA1NzEtNS40MTI1NzEtMTIuODczMTQzdC0xMi44NzMxNDMtNS40MTI1NzF6TTEwOTcuMTQyODU3IDE2NC41NzE0MjlsMCA2OTQuODU3MTQzcTAgMzcuNzQxNzE0LTI2Ljg0MzQyOSA2NC41ODUxNDN0LTY0LjU4NTE0MyAyNi44NDM0MjlsLTkxNC4yODU3MTQgMHEtMzcuNzQxNzE0IDAtNjQuNTg1MTQzLTI2Ljg0MzQyOXQtMjYuODQzNDI5LTY0LjU4NTE0M2wwLTY5NC44NTcxNDNxMC0zNy43NDE3MTQgMjYuODQzNDI5LTY0LjU4NTE0M3Q2NC41ODUxNDMtMjYuODQzNDI5bDkxNC4yODU3MTQgMHEzNy43NDE3MTQgMCA2NC41ODUxNDMgMjYuODQzNDI5dDI2Ljg0MzQyOSA2NC41ODUxNDN6XCJcbiAgICAgICAgICBjbGFzcz1cImFudC1za2VsZXRvbi1pbWFnZS1wYXRoXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uRWxlbWVudEltYWdlQ29tcG9uZW50IHt9XG4iXX0=