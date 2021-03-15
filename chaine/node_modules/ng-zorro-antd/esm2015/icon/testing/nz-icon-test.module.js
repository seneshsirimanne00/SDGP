/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import * as ɵngcc0 from '@angular/core';
const antDesignIcons = AllIcons;
const ɵ0 = key => {
    const i = antDesignIcons[key];
    return i;
};
const icons = Object.keys(antDesignIcons).map(ɵ0);
const ɵ1 = icons;
/**
 * Include this module in every testing spec, except `icon.spec.ts`.
 */
// @dynamic
export class NzIconTestModule {
}
NzIconTestModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconTestModule });
NzIconTestModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: function () { return [NzIconModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], null, null); })();
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pY29uL3Rlc3RpbmcvbnotaWNvbi10ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEtBQUssUUFBUSxNQUFNLGlDQUFpQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVELE1BQU0sY0FBYyxHQUFHLFFBRXRCLENBQUM7QUFDRixXQUNnRSxHQUFHLENBQUMsRUFBRTtBQUN0RSxJQUFFLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUhELE1BQU0sS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFHN0QsQ0FBQztBQUNILFdBVWdCLEtBQUs7QUFUckI7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXO0FBVVgsTUFBTSxPQUFPLGdCQUFnQjtBQUFHOzRDQVQvQixRQUFRLFNBQUM7RUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLFNBQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUUsUUFBUSwwQkFDakI7Q0FBUSxJQUFPO2lCQUNoQjtJQUNGLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDO0FBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EZWZpbml0aW9uIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBBbGxJY29ucyBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcblxuaW1wb3J0IHsgTnpJY29uTW9kdWxlLCBOWl9JQ09OUyB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmNvbnN0IGFudERlc2lnbkljb25zID0gQWxsSWNvbnMgYXMge1xuICBba2V5OiBzdHJpbmddOiBJY29uRGVmaW5pdGlvbjtcbn07XG5cbmNvbnN0IGljb25zOiBJY29uRGVmaW5pdGlvbltdID0gT2JqZWN0LmtleXMoYW50RGVzaWduSWNvbnMpLm1hcChrZXkgPT4ge1xuICBjb25zdCBpID0gYW50RGVzaWduSWNvbnNba2V5XTtcbiAgcmV0dXJuIGk7XG59KTtcblxuLyoqXG4gKiBJbmNsdWRlIHRoaXMgbW9kdWxlIGluIGV2ZXJ5IHRlc3Rpbmcgc3BlYywgZXhjZXB0IGBpY29uLnNwZWMudHNgLlxuICovXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW056SWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5aX0lDT05TLFxuICAgICAgdXNlVmFsdWU6IGljb25zXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvblRlc3RNb2R1bGUge31cbiJdfQ==