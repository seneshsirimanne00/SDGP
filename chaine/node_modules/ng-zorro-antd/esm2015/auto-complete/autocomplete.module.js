/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteOptgroupComponent } from './autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './autocomplete.component';
import * as ɵngcc0 from '@angular/core';
export class NzAutocompleteModule {
}
NzAutocompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAutocompleteModule });
NzAutocompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[BidiModule, CommonModule, OverlayModule, FormsModule, NzOutletModule, NzNoAnimationModule, NzInputModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: function () { return [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]; }, imports: function () { return [BidiModule, CommonModule, OverlayModule, FormsModule, NzOutletModule, NzNoAnimationModule, NzInputModule]; }, exports: function () { return [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                imports: [BidiModule, CommonModule, OverlayModule, FormsModule, NzOutletModule, NzNoAnimationModule, NzInputModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT25FLE1BQU0sT0FBTyxvQkFBb0I7QUFBRztnREFMbkMsUUFBUSxTQUFDLGtCQUNSO1VBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDLGtCQUN2SSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRTtPQUErQixDQUFDLGtCQUNsSSxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxjQUNwSDs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcblxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekF1dG9jb21wbGV0ZUNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSwgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekF1dG9jb21wbGV0ZUNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSwgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpJbnB1dE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVNb2R1bGUge31cbiJdfQ==