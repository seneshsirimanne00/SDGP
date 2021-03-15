/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../addon/row-indent.directive';
import * as ɵngcc3 from '../addon/row-expand-button.directive';
import * as ɵngcc4 from 'ng-zorro-antd/checkbox';
import * as ɵngcc5 from '@angular/forms';

const _c0 = ["nzChecked", ""];
function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "nz-row-indent", 2);
    ɵngcc0.ɵɵelementStart(2, "button", 3);
    ɵngcc0.ɵɵlistener("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onExpandChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("indentSize", ctx_r0.nzIndentSize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
} }
function NzTdAddOnComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onCheckedChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
} }
const _c1 = ["*"];
export class NzTdAddOnComponent {
    constructor() {
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzIndentSize = 0;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzExpand = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
    }
    onCheckedChange(checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    }
    onExpandChange(expand) {
        this.nzExpand = expand;
        this.nzExpandChange.emit(expand);
    }
    ngOnChanges(changes) {
        const isFirstChange = (value) => value && value.firstChange && value.currentValue !== undefined;
        const { nzExpand, nzChecked, nzShowExpand, nzShowCheckbox } = changes;
        if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
        }
        if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
        }
        if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
            this.nzShowExpand = true;
        }
        if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
        }
    }
}
NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) { return new (t || NzTdAddOnComponent)(); };
NzTdAddOnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTdAddOnComponent, selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]], hostVars: 4, hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
    } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzIndentSize: "nzIndentSize", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzExpand: "nzExpand" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]], template: function NzTdAddOnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);
        ɵngcc0.ɵɵprojection(2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowCheckbox);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzRowIndentDirective, ɵngcc3.NzRowExpandButtonDirective, ɵngcc4.NzCheckboxComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel], encapsulation: 2, changeDetection: 0 });
NzTdAddOnComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzIndentSize: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzExpand", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTdAddOnComponent, [{
        type: Component,
        args: [{
                selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-container *ngIf="nzShowExpand || nzIndentSize > 0">
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      <button nz-row-expand-button [expand]="nzExpand" (expandChange)="onExpandChange($event)" [spaceMode]="!nzShowExpand"></button>
    </ng-container>
    <label
      nz-checkbox
      *ngIf="nzShowCheckbox"
      [nzDisabled]="nzDisabled"
      [ngModel]="nzChecked"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="onCheckedChange($event)"
    >
    </label>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-table-cell-with-append]': `nzShowExpand || nzIndentSize > 0`,
                    '[class.ant-table-selection-column]': `nzShowCheckbox`
                }
            }]
    }], function () { return []; }, { nzChecked: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzIndentSize: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowCheckbox: [{
            type: Input
        }], nzExpand: [{
            type: Input
        }], nzCheckedChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQtYWRkb24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9jZWxsL3RkLWFkZG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUNBQXVDO0FBQ3ZDO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCdkQsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBMUJsQztBQUNHLFFBOEJRLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFBVyxlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlCLFFBQVcsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDbkMsUUFBVyxpQkFBWSxHQUFHLENBQUMsQ0FBQztBQUM1QixRQUEyQixpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNoRCxRQUEyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztBQUNsRCxRQUEyQixhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQXFCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUNuRSxRQUFxQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDbEUsUUFBVSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7QUFDeEMsUUFBVSw0QkFBdUIsR0FBRyxLQUFLLENBQUM7QUFDMUMsSUEwQkEsQ0FBQztBQUNELElBMUJFLGVBQWUsQ0FBQyxPQUFnQjtBQUFJLFFBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxjQUFjLENBQUMsTUFBZTtBQUFJLFFBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFBRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0FBQ2xILFFBQUksTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUMxRSxRQUFJLElBQUksWUFBWSxFQUFFO0FBQ3RCLFlBQU0sSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztBQUN4QyxTQUFLO0FBQ0wsUUFBSSxJQUFJLGNBQWMsRUFBRTtBQUN4QixZQUFNLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7QUFDMUMsU0FBSztBQUNMLFFBQUksSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7QUFDaEUsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUMvQixTQUFLO0FBQ0wsUUFBSSxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUNuRSxZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDs4Q0FwRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTt3R0FBMEgsa0JBQ3BJLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFOztzVEFlVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osb0NBQW9DLEVBQUUsa0NBQWtDLHNCQUN4RSxvQ0FBb0MsRUFBRSxnQkFBZ0Isa0JBQ3ZELGNBQ0Y7Ozs7Ozs7OztnTkFDSTtBQUFDO0FBQXNDLHdCQUt6QyxLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssOEJBQ1YsTUFBTTtBQUFLLDZCQUNYLE1BQU07QUFBSTtBQUpjO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDWCx3REFEK0I7QUFDckI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNiLDBEQURtQztBQUN2QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1Asb0RBRHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDNUM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZFtuekNoZWNrZWRdLCB0ZFtuekRpc2FibGVkXSwgdGRbbnpJbmRldGVybWluYXRlXSwgdGRbbnpJbmRlbnRTaXplXSwgdGRbbnpFeHBhbmRdLCB0ZFtuelNob3dFeHBhbmRdLCB0ZFtuelNob3dDaGVja2JveF0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2hvd0V4cGFuZCB8fCBuekluZGVudFNpemUgPiAwXCI+XG4gICAgICA8bnotcm93LWluZGVudCBbaW5kZW50U2l6ZV09XCJuekluZGVudFNpemVcIj48L256LXJvdy1pbmRlbnQ+XG4gICAgICA8YnV0dG9uIG56LXJvdy1leHBhbmQtYnV0dG9uIFtleHBhbmRdPVwibnpFeHBhbmRcIiAoZXhwYW5kQ2hhbmdlKT1cIm9uRXhwYW5kQ2hhbmdlKCRldmVudClcIiBbc3BhY2VNb2RlXT1cIiFuelNob3dFeHBhbmRcIj48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bGFiZWxcbiAgICAgIG56LWNoZWNrYm94XG4gICAgICAqbmdJZj1cIm56U2hvd0NoZWNrYm94XCJcbiAgICAgIFtuekRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwibnpDaGVja2VkXCJcbiAgICAgIFtuekluZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hlY2tlZENoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9sYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLXdpdGgtYXBwZW5kXSc6IGBuelNob3dFeHBhbmQgfHwgbnpJbmRlbnRTaXplID4gMGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbl0nOiBgbnpTaG93Q2hlY2tib3hgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUZEFkZE9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0V4cGFuZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93Q2hlY2tib3g6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56SW5kZW50U2l6ZSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgaXNOelNob3dFeHBhbmRDaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgaXNOelNob3dDaGVja2JveENoYW5nZWQgPSBmYWxzZTtcblxuICBvbkNoZWNrZWRDaGFuZ2UoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpDaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xuICB9XG5cbiAgb25FeHBhbmRDaGFuZ2UoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekV4cGFuZCA9IGV4cGFuZDtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZXhwYW5kKTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgaXNGaXJzdENoYW5nZSA9ICh2YWx1ZTogU2ltcGxlQ2hhbmdlKSA9PiB2YWx1ZSAmJiB2YWx1ZS5maXJzdENoYW5nZSAmJiB2YWx1ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7IG56RXhwYW5kLCBuekNoZWNrZWQsIG56U2hvd0V4cGFuZCwgbnpTaG93Q2hlY2tib3ggfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U2hvd0V4cGFuZCkge1xuICAgICAgdGhpcy5pc056U2hvd0V4cGFuZENoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobnpTaG93Q2hlY2tib3gpIHtcbiAgICAgIHRoaXMuaXNOelNob3dDaGVja2JveENoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNGaXJzdENoYW5nZShuekV4cGFuZCkgJiYgIXRoaXMuaXNOelNob3dFeHBhbmRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLm56U2hvd0V4cGFuZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0ZpcnN0Q2hhbmdlKG56Q2hlY2tlZCkgJiYgIXRoaXMuaXNOelNob3dDaGVja2JveENoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93Q2hlY2tib3ggPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19