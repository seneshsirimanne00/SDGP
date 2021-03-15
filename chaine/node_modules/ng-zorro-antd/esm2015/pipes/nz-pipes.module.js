/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAggregatePipe } from './nz-aggregate.pipe';
import { NzBytesPipe } from './nz-bytes.pipe';
import { NzToCssUnitPipe } from './nz-css-unit.pipe';
import { NzEllipsisPipe } from './nz-ellipsis.pipe';
import { NzSafeNullPipe } from './nz-safe-null.pipe';
import { NzSanitizerPipe } from './nz-sanitizer.pipe';
import { NzTrimPipe } from './nz-trim.pipe';
import * as ɵngcc0 from '@angular/core';
const pipes = [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe];
export class NzPipesModule {
}
NzPipesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPipesModule });
NzPipesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPipesModule, { declarations: function () { return [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPipesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [pipes],
                declarations: [pipes]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGlwZXMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3BpcGVzL256LXBpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU1QyxNQUFNLEtBQUssR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBTzNILE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQztLQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUNoQixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FDdEI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWdncmVnYXRlUGlwZSB9IGZyb20gJy4vbnotYWdncmVnYXRlLnBpcGUnO1xuaW1wb3J0IHsgTnpCeXRlc1BpcGUgfSBmcm9tICcuL256LWJ5dGVzLnBpcGUnO1xuaW1wb3J0IHsgTnpUb0Nzc1VuaXRQaXBlIH0gZnJvbSAnLi9uei1jc3MtdW5pdC5waXBlJztcbmltcG9ydCB7IE56RWxsaXBzaXNQaXBlIH0gZnJvbSAnLi9uei1lbGxpcHNpcy5waXBlJztcbmltcG9ydCB7IE56U2FmZU51bGxQaXBlIH0gZnJvbSAnLi9uei1zYWZlLW51bGwucGlwZSc7XG5pbXBvcnQgeyBOelNhbml0aXplclBpcGUgfSBmcm9tICcuL256LXNhbml0aXplci5waXBlJztcbmltcG9ydCB7IE56VHJpbVBpcGUgfSBmcm9tICcuL256LXRyaW0ucGlwZSc7XG5cbmNvbnN0IHBpcGVzID0gW056VG9Dc3NVbml0UGlwZSwgTnpTYWZlTnVsbFBpcGUsIE56U2FuaXRpemVyUGlwZSwgTnpUcmltUGlwZSwgTnpCeXRlc1BpcGUsIE56QWdncmVnYXRlUGlwZSwgTnpFbGxpcHNpc1BpcGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW3BpcGVzXSxcbiAgZGVjbGFyYXRpb25zOiBbcGlwZXNdXG59KVxuZXhwb3J0IGNsYXNzIE56UGlwZXNNb2R1bGUge31cbiJdfQ==