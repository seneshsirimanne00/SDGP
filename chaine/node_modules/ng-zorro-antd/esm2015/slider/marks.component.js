/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    ɵngcc0.ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
export class NzSliderMarksComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.max - this.min;
        this.marks = this.marksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        const markValue = this.reverse ? this.max + this.min - value : value;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((markValue - this.min) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((markValue - this.min) / range) * 100}%`
            };
        }
        if (isConfigObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                mark.active = isActive;
            });
        }
    }
}
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
NzSliderMarksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", vertical: "vertical", included: "included", min: "min", max: "max", reverse: "reverse" }, exportAs: ["nzSliderMarks"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
NzSliderMarksComponent.propDecorators = {
    lowerBound: [{ type: Input }],
    upperBound: [{ type: Input }],
    marksArray: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    vertical: [{ type: Input }],
    included: [{ type: Input }],
    reverse: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "included", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                template: `
    <div class="ant-slider-mark">
      <span
        class="ant-slider-mark-text"
        *ngFor="let attr of marks; trackBy: trackById"
        [class.ant-slider-mark-active]="attr.active"
        [ngStyle]="attr.style!"
        [innerHTML]="attr.label"
      ></span>
    </div>
  `
            }]
    }], function () { return []; }, { lowerBound: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], marksArray: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], reverse: [{
            type: Input
        }] }); })();
function isConfigObject(config) {
    return typeof config !== 'string';
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya3MuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3NsaWRlci9tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFzQnZELE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQWxCdEM7QUFDRyxRQXFCUSxlQUFVLEdBQWtCLElBQUksQ0FBQztBQUM1QyxRQUFXLGVBQVUsR0FBa0IsSUFBSSxDQUFDO0FBQzVDLFFBQVcsZUFBVSxHQUFxQixFQUFFLENBQUM7QUFDN0MsUUFFMkIsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QyxRQUEyQixhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBRUUsVUFBSyxHQUFzQixFQUFFLENBQUM7QUFDaEMsSUFzRUEsQ0FBQztBQUNELElBdEVFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDcEUsUUFDSSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDeEIsU0FBSztBQUNMLFFBQ0ksSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7QUFDM0QsWUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTLENBQUMsTUFBYyxFQUFFLElBQXFCO0FBQUksUUFDakQsT0FBTyxJQUFJLENBQUMsS0FBSyxD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LFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7a0RBdEdDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUU7SUFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0IsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLFFBQVEsRUFBRSwrUkFVVCxjQUNGOzs7Ozs7OytGQUNJO0FBQUM7QUFBMEMseUJBSTdDLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLGtCQUNWLEtBQUs7QUFBSyxrQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUk7QUFGZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1Asd0RBRHVCO0FBQ2pCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDUCx3REFEdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQzVDO0FBMkVBLFNBQVMsY0FBYyxDQUFDLE1BQWM7QUFBSSxJQUN4QyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztBQUNwQyxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpEaXNwbGF5ZWRNYXJrLCBOekV4dGVuZGVkTWFyaywgTnpNYXJrLCBOek1hcmtPYmogfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXNsaWRlci1tYXJrcycsXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXJNYXJrcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1zbGlkZXItbWFya1wiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJhbnQtc2xpZGVyLW1hcmstdGV4dFwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBhdHRyIG9mIG1hcmtzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxuICAgICAgICBbY2xhc3MuYW50LXNsaWRlci1tYXJrLWFjdGl2ZV09XCJhdHRyLmFjdGl2ZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImF0dHIuc3R5bGUhXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJhdHRyLmxhYmVsXCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW5jbHVkZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBsb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1hcmtzQXJyYXk6IE56RXh0ZW5kZWRNYXJrW10gPSBbXTtcbiAgQElucHV0KCkgbWluITogbnVtYmVyO1xuICBASW5wdXQoKSBtYXghOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5jbHVkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcmV2ZXJzZSE6IGJvb2xlYW47XG5cbiAgbWFya3M6IE56RGlzcGxheWVkTWFya1tdID0gW107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWFya3NBcnJheSwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgcmV2ZXJzZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChtYXJrc0FycmF5IHx8IHJldmVyc2UpIHtcbiAgICAgIHRoaXMuYnVpbGRNYXJrcygpO1xuICAgIH1cblxuICAgIGlmIChtYXJrc0FycmF5IHx8IGxvd2VyQm91bmQgfHwgdXBwZXJCb3VuZCB8fCByZXZlcnNlKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBtYXJrOiBOekRpc3BsYXllZE1hcmspOiBudW1iZXIge1xuICAgIHJldHVybiBtYXJrLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE1hcmtzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcblxuICAgIHRoaXMubWFya3MgPSB0aGlzLm1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0TWFya1N0eWxlcyh2YWx1ZSwgcmFuZ2UsIGNvbmZpZyk7XG4gICAgICBjb25zdCBsYWJlbCA9IGlzQ29uZmlnT2JqZWN0KGNvbmZpZykgPyBjb25maWcubGFiZWwgOiBjb25maWc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXJrU3R5bGVzKHZhbHVlOiBudW1iZXIsIHJhbmdlOiBudW1iZXIsIGNvbmZpZzogTnpNYXJrKTogTmdTdHlsZUludGVyZmFjZSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGNvbnN0IG1hcmtWYWx1ZSA9IHRoaXMucmV2ZXJzZSA/IHRoaXMubWF4ICsgdGhpcy5taW4gLSB2YWx1ZSA6IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgICAgYm90dG9tOiBgJHsoKG1hcmtWYWx1ZSAtIHRoaXMubWluKSAvIHJhbmdlKSAqIDEwMH0lYFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApYCxcbiAgICAgICAgbGVmdDogYCR7KChtYXJrVmFsdWUgLSB0aGlzLm1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29uZmlnT2JqZWN0KGNvbmZpZykgJiYgY29uZmlnLnN0eWxlKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFya3MgJiYgdGhpcy5sb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMudXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmsudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAoIXRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMudXBwZXJCb3VuZCkgfHwgKHRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy51cHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLmxvd2VyQm91bmQhKTtcblxuICAgICAgICBtYXJrLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29uZmlnT2JqZWN0KGNvbmZpZzogTnpNYXJrKTogY29uZmlnIGlzIE56TWFya09iaiB7XG4gIHJldHVybiB0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJztcbn1cbiJdfQ==