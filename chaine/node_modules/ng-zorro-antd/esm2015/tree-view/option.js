/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTreeNodeComponent } from './node';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './node';

const _c0 = ["*"];
export class NzTreeNodeOptionComponent {
    constructor(treeNode) {
        this.treeNode = treeNode;
        this.nzSelected = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
    }
    get isExpanded() {
        return this.treeNode.isExpanded;
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzSelected } = changes;
        if (nzDisabled) {
            if (nzDisabled.currentValue) {
                this.treeNode.disable();
            }
            else {
                this.treeNode.enable();
            }
        }
        if (nzSelected) {
            if (nzSelected.currentValue) {
                this.treeNode.select();
            }
            else {
                this.treeNode.deselect();
            }
        }
    }
}
NzTreeNodeOptionComponent.ɵfac = function NzTreeNodeOptionComponent_Factory(t) { return new (t || NzTreeNodeOptionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeNodeComponent)); };
NzTreeNodeOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeOptionComponent, selectors: [["nz-tree-node-option"]], hostAttrs: [1, "ant-tree-node-content-wrapper"], hostVars: 4, hostBindings: function NzTreeNodeOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeNodeOptionComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-node-content-wrapper-open", ctx.isExpanded)("ant-tree-node-selected", ctx.nzSelected);
    } }, inputs: { nzSelected: "nzSelected", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-tree-title"]], template: function NzTreeNodeOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeOptionComponent.ctorParameters = () => [
    { type: NzTreeNodeComponent }
];
NzTreeNodeOptionComponent.propDecorators = {
    nzSelected: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzSelected", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-option',
                template: `
    <span class="ant-tree-title"><ng-content></ng-content></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-tree-node-content-wrapper',
                    '[class.ant-tree-node-content-wrapper-open]': 'isExpanded',
                    '[class.ant-tree-node-selected]': 'nzSelected',
                    '(click)': 'onClick($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeNodeComponent }]; }, { nzSelected: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUtdmlldy9vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFMUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFlN0MsTUFBTSxPQUFPLHlCQUF5QjtBQUFHLElBUXZDLFlBQW9CLFFBQWdDO0FBQUksUUFBcEMsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7QUFBQyxRQUo1QixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQTJCLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUMsUUFBcUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7QUFDOUQsSUFDeUQsQ0FBQztBQUMxRCxJQUNFLElBQUksVUFBVTtBQUFLLFFBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsQ0FBYTtBQUFJLFFBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDL0MsUUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQixZQUFNLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRTtBQUNuQyxnQkFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDL0IsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksVUFBVSxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFO0FBQ25DLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDL0IsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNqQyxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3FEQW5EQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHFCQUFxQixrQkFDL0IsUUFBUSxFQUFFO29DQUVULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLCtCQUErQixzQkFDdEMsNENBQTRDLEVBQUUsWUFBWTtPQUMxRCxnQ0FBZ0MsRUFBRSxZQUFZLHNCQUM5QyxTQUFTLEVBQUUsaUJBQWlCLGtCQUM3QixjQUNGOzs7Ozs7OztpREFDSTtBQUFDO0FBQW1ELFlBZmhELG1CQUFtQjtBQUFHO0FBQUc7QUFHZix5QkFnQmhCLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssc0JBQ1YsTUFBTTtBQUFJO0FBRmM7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULDZEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QsNkRBRDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM5QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56VHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL25vZGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUtb3B0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC10cmVlLXRpdGxlXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5dJzogJ2lzRXhwYW5kZWQnLFxuICAgICdbY2xhc3MuYW50LXRyZWUtbm9kZS1zZWxlY3RlZF0nOiAnbnpTZWxlY3RlZCcsXG4gICAgJyhjbGljayknOiAnb25DbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVPcHRpb25Db21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU5vZGU6IE56VHJlZU5vZGVDb21wb25lbnQ8VD4pIHt9XG5cbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZDtcbiAgfVxuXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56Q2xpY2suZW1pdChlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVkLCBuelNlbGVjdGVkIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekRpc2FibGVkKSB7XG4gICAgICBpZiAobnpEaXNhYmxlZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50cmVlTm9kZS5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyZWVOb2RlLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuelNlbGVjdGVkKSB7XG4gICAgICBpZiAobnpTZWxlY3RlZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50cmVlTm9kZS5zZWxlY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJlZU5vZGUuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==