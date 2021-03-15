/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NzTreeIndentComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span");
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-tree-indent-unit", !ctx_r0.nzSelectMode)("ant-select-tree-indent-unit", ctx_r0.nzSelectMode)("ant-select-tree-indent-unit-start", ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-tree-indent-unit-start", !ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-select-tree-indent-unit-end", ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2])("ant-tree-indent-unit-end", !ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2]);
} }
export class NzTreeIndentComponent {
    constructor() {
        this.nzTreeLevel = 0;
        this.nzIsStart = [];
        this.nzIsEnd = [];
        this.nzSelectMode = false;
        this.listOfUnit = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        const { nzTreeLevel } = changes;
        if (nzTreeLevel) {
            this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
        }
    }
}
NzTreeIndentComponent.ɵfac = function NzTreeIndentComponent_Factory(t) { return new (t || NzTreeIndentComponent)(); };
NzTreeIndentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeIndentComponent, selectors: [["nz-tree-indent"]], hostVars: 5, hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-hidden", true);
        ɵngcc0.ɵɵclassProp("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
    } }, inputs: { nzTreeLevel: "nzTreeLevel", nzIsStart: "nzIsStart", nzIsEnd: "nzIsEnd", nzSelectMode: "nzSelectMode" }, exportAs: ["nzTreeIndent"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "ant-tree-indent-unit", "ant-select-tree-indent-unit", "ant-select-tree-indent-unit-start", "ant-tree-indent-unit-start", "ant-select-tree-indent-unit-end", "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"]], template: function NzTreeIndentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeIndentComponent_span_0_Template, 1, 12, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listOfUnit);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
NzTreeIndentComponent.propDecorators = {
    nzTreeLevel: [{ type: Input }],
    nzIsStart: [{ type: Input }],
    nzIsEnd: [{ type: Input }],
    nzSelectMode: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeIndentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-indent',
                exportAs: 'nzTreeIndent',
                template: `
    <span
      [class.ant-tree-indent-unit]="!nzSelectMode"
      [class.ant-select-tree-indent-unit]="nzSelectMode"
      [class.ant-select-tree-indent-unit-start]="nzSelectMode && nzIsStart[i]"
      [class.ant-tree-indent-unit-start]="!nzSelectMode && nzIsStart[i]"
      [class.ant-select-tree-indent-unit-end]="nzSelectMode && nzIsEnd[i]"
      [class.ant-tree-indent-unit-end]="!nzSelectMode && nzIsEnd[i]"
      *ngFor="let _ of listOfUnit; let i = index"
    ></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.aria-hidden]': 'true',
                    '[class.ant-tree-indent]': '!nzSelectMode',
                    '[class.ant-select-tree-indent]': 'nzSelectMode'
                }
            }]
    }], function () { return []; }, { nzTreeLevel: [{
            type: Input
        }], nzIsStart: [{
            type: Input
        }], nzIsEnd: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1pbmRlbnQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUvdHJlZS1pbmRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBd0I1RyxNQUFNLE9BQU8scUJBQXFCO0FBQUcsSUF0QnJDO0FBQ0csUUFzQlEsZ0JBQVcsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBVyxjQUFTLEdBQWMsRUFBRSxDQUFDO0FBQ3JDLFFBQVcsWUFBTyxHQUFjLEVBQUUsQ0FBQztBQUNuQyxRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQ0UsZUFBVSxHQUFhLEVBQUUsQ0FBQztBQUM1QixJQVNBLENBQUM7QUFDRCxJQVRFLFFBQVEsS0FBVSxDQUFDO0FBQ3JCLElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNwQyxRQUFJLElBQUksV0FBVyxFQUFFO0FBQ3JCLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtpREF0Q0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0I7VUFDMUIsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRTs7OzJLQVVULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixJQUFJLEVBQUUsc0JBQ0osb0JBQW9CLEVBQUUsTUFBTSxzQkFDNUIseUJBQXlCLEVBQUUsZUFBZSxzQkFDMUMsZ0NBQWdDLEVBQUUsY0FBYyxrQkFDakQ7V0FDRjs7OytFQUNJO0FBQUM7QUFBeUMsMEJBQzVDLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1pbmRlbnQnLFxuICBleHBvcnRBczogJ256VHJlZUluZGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgIFtjbGFzcy5hbnQtdHJlZS1pbmRlbnQtdW5pdF09XCIhbnpTZWxlY3RNb2RlXCJcbiAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaW5kZW50LXVuaXRdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaW5kZW50LXVuaXQtc3RhcnRdPVwibnpTZWxlY3RNb2RlICYmIG56SXNTdGFydFtpXVwiXG4gICAgICBbY2xhc3MuYW50LXRyZWUtaW5kZW50LXVuaXQtc3RhcnRdPVwiIW56U2VsZWN0TW9kZSAmJiBueklzU3RhcnRbaV1cIlxuICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1pbmRlbnQtdW5pdC1lbmRdPVwibnpTZWxlY3RNb2RlICYmIG56SXNFbmRbaV1cIlxuICAgICAgW2NsYXNzLmFudC10cmVlLWluZGVudC11bml0LWVuZF09XCIhbnpTZWxlY3RNb2RlICYmIG56SXNFbmRbaV1cIlxuICAgICAgKm5nRm9yPVwibGV0IF8gb2YgbGlzdE9mVW5pdDsgbGV0IGkgPSBpbmRleFwiXG4gICAgPjwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtaGlkZGVuXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLWluZGVudF0nOiAnIW56U2VsZWN0TW9kZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaW5kZW50XSc6ICduelNlbGVjdE1vZGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlSW5kZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelRyZWVMZXZlbCA9IDA7XG4gIEBJbnB1dCgpIG56SXNTdGFydDogYm9vbGVhbltdID0gW107XG4gIEBJbnB1dCgpIG56SXNFbmQ6IGJvb2xlYW5bXSA9IFtdO1xuICBASW5wdXQoKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcblxuICBsaXN0T2ZVbml0OiBudW1iZXJbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelRyZWVMZXZlbCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpUcmVlTGV2ZWwpIHtcbiAgICAgIHRoaXMubGlzdE9mVW5pdCA9IFsuLi5uZXcgQXJyYXkobnpUcmVlTGV2ZWwuY3VycmVudFZhbHVlIHx8IDApXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==