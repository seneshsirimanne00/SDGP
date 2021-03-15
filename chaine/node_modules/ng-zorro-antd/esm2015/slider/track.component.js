/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class NzSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.reverse = false;
        this.dir = 'ltr';
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    ngOnChanges() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const visibility = this.included ? 'visible' : 'hidden';
        const offset = this.offset;
        const length = this.length;
        const positonStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                height: `${length}%`,
                visibility
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: `${length}%`, visibility });
        this.style = positonStyle;
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
NzSliderTrackComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["nzSliderTrack"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
NzSliderTrackComponent.propDecorators = {
    offset: [{ type: Input }],
    reverse: [{ type: Input }],
    dir: [{ type: Input }],
    length: [{ type: Input }],
    vertical: [{ type: Input }],
    included: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "offset", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderTrackComponent.prototype, "reverse", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "length", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "included", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: `
    <div class="ant-slider-track" [ngStyle]="style"></div>
  `
            }]
    }], function () { return []; }, { offset: [{
            type: Input
        }], reverse: [{
            type: Input
        }], dir: [{
            type: Input
        }], length: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2suY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3NsaWRlci90cmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBcUJwRSxNQUFNLE9BQU8sc0JBQXNCO0FBQUcsSUFWdEM7QUFDRyxRQWdCdUIsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUM3QyxRQUEyQixZQUFPLEdBQVksS0FBSyxDQUFDO0FBQ3BELFFBQVcsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUNsQyxRQUEwQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQzdDLFFBQTJCLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUMsUUFBMkIsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QyxRQUNFLFVBQUssR0FBdUIsRUFBRSxDQUFDO0FBQ2pDLElBa0NBLENBQUM7QUFDRCxJQWxDRSxXQUFXO0FBQUssUUFDZCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ25DLFFBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNqQyxRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQzVELFFBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMvQixRQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDL0IsUUFDSSxNQUFNLFlBQVksR0FBdUIsUUFBUTtBQUNyRCxZQUFNLENBQUMsQ0FBQztBQUNSLGdCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO0FBQ3BELGdCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU07QUFDOUMsZ0JBQVUsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFHO0FBQzlCLGdCQUFVLFVBQVU7QUFDcEIsYUFBUztBQUNULFlBQU0sQ0FBQyxpQ0FDTSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsS0FDcEMsS0FBSyxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQ25CLFVBQVUsR0FDWCxDQUFDO0FBQ1YsUUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUNVLDBCQUEwQjtBQUFLLFFBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7QUFDekQsUUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzFELFFBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtBQUM1QixZQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFNLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQUs7QUFDTCxRQUFJLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0g7a0RBM0RDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUU7SUFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0IsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLFFBQVEsRUFBRSxnRUFFVCxjQUNGOzs7OytFQUNJO0FBQUM7QUFBMEMscUJBTzdDLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssa0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFJO0FBTGM7QUFBYSxJQUEzQixXQUFXLEVBQUU7QUFBRTtBQUNSLHNEQUQwQjtBQUNsQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2QsdURBRHNDO0FBRTFCO0FBQWEsSUFBM0IsV0FBVyxFQUFFO0FBQUU7QUFDUixzREFEMEI7QUFDbEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNQLHdEQUR1QjtBQUNqQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBRVIsd0RBRndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM1QztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBOelNsaWRlclRyYWNrU3R5bGUge1xuICBib3R0b20/OiBzdHJpbmcgfCBudWxsO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVsbDtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudWxsO1xuICB3aWR0aD86IHN0cmluZyB8IG51bGw7XG4gIHZpc2liaWxpdHk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItdHJhY2snLFxuICBleHBvcnRBczogJ256U2xpZGVyVHJhY2snLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci10cmFja1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJUcmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vZmZzZXQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGVuZ3RoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZlcnRpY2FsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmNsdWRlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmV2ZXJzZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG9mZnNldDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XG5cbiAgc3R5bGU6IE56U2xpZGVyVHJhY2tTdHlsZSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy52ZXJ0aWNhbDtcbiAgICBjb25zdCByZXZlcnNlID0gdGhpcy5yZXZlcnNlO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSB0aGlzLmluY2x1ZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgICBjb25zdCBwb3NpdG9uU3R5bGU6IE56U2xpZGVyVHJhY2tTdHlsZSA9IHZlcnRpY2FsXG4gICAgICA/IHtcbiAgICAgICAgICBbcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbSddOiBgJHtvZmZzZXR9JWAsXG4gICAgICAgICAgW3JldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnXTogJ2F1dG8nLFxuICAgICAgICAgIGhlaWdodDogYCR7bGVuZ3RofSVgLFxuICAgICAgICAgIHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgLi4udGhpcy5nZXRIb3Jpem9udGFsU3R5bGVQb3NpdGlvbigpLFxuICAgICAgICAgIHdpZHRoOiBgJHtsZW5ndGh9JWAsXG4gICAgICAgICAgdmlzaWJpbGl0eVxuICAgICAgICB9O1xuXG4gICAgdGhpcy5zdHlsZSA9IHBvc2l0b25TdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG9yaXpvbnRhbFN0eWxlUG9zaXRpb24oKTogeyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfSB7XG4gICAgbGV0IGxlZnQgPSB0aGlzLnJldmVyc2UgPyAnYXV0bycgOiBgJHt0aGlzLm9mZnNldH0lYDtcbiAgICBsZXQgcmlnaHQgPSB0aGlzLnJldmVyc2UgPyBgJHt0aGlzLm9mZnNldH0lYCA6ICdhdXRvJztcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICBjb25zdCB0bXAgPSBsZWZ0O1xuICAgICAgbGVmdCA9IHJpZ2h0O1xuICAgICAgcmlnaHQgPSB0bXA7XG4gICAgfVxuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0IH07XG4gIH1cbn1cbiJdfQ==