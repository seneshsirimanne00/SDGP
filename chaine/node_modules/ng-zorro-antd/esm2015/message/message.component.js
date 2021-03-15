/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent } from './base';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.instance.content, ɵngcc0.ɵɵsanitizeHtml);
} }
export class NzMessageComponent extends NzMNComponent {
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
}
NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzMessage"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("@moveUpMotion.done", function NzMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) { return ctx.animationStateChanged.next($event); })("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementContainerStart(3, 3);
        ɵngcc0.ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
        ɵngcc0.ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
        ɵngcc0.ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
        ɵngcc0.ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@moveUpMotion", ctx.instance.state);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", "ant-message-" + ctx.instance.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.instance.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "success");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "info");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "warning");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "loading");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.instance.content);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 });
NzMessageComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzMessageComponent.propDecorators = {
    instance: [{ type: Input }],
    destroyed: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container [ngSwitch]="instance.type">
            <i *ngSwitchCase="'success'" nz-icon nzType="check-circle"></i>
            <i *ngSwitchCase="'info'" nz-icon nzType="info-circle"></i>
            <i *ngSwitchCase="'warning'" nz-icon nzType="exclamation-circle"></i>
            <i *ngSwitchCase="'error'" nz-icon nzType="close-circle"></i>
            <i *ngSwitchCase="'loading'" nz-icon nzType="loading"></i>
          </ng-container>
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { destroyed: [{
            type: Output
        }], instance: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUN2QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTtBQUFHLElBSXRELFlBQVksR0FBc0I7QUFDcEMsUUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixRQUpxQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7QUFDekYsSUFHRSxDQUFDO0FBQ0g7OENBdkNDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0M7QUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUUsV0FBVyxrQkFDckIsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUMxQixRQUFRLEVBQUU7O3lGQXVCVCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTkFDSTtBQUFDO0FBQTRDLFlBOUNoRCxpQkFBaUI7QUFDbEI7QUFBRztBQUdBLHVCQTJDRCxLQUFLO0FBQUssd0JBQ1YsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1vdmVVcE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBOek1OQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IE56TWVzc2FnZURhdGEgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZScsXG4gIGV4cG9ydEFzOiAnbnpNZXNzYWdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFttb3ZlVXBNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW50LW1lc3NhZ2Utbm90aWNlXCJcbiAgICAgIFtAbW92ZVVwTW90aW9uXT1cImluc3RhbmNlLnN0YXRlXCJcbiAgICAgIChAbW92ZVVwTW90aW9uLmRvbmUpPVwiYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLm5leHQoJGV2ZW50KVwiXG4gICAgICAobW91c2VlbnRlcik9XCJvbkVudGVyKClcIlxuICAgICAgKG1vdXNlbGVhdmUpPVwib25MZWF2ZSgpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1lc3NhZ2Utbm90aWNlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tZXNzYWdlLWN1c3RvbS1jb250ZW50XCIgW25nQ2xhc3NdPVwiJ2FudC1tZXNzYWdlLScgKyBpbnN0YW5jZS50eXBlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaW5zdGFuY2UudHlwZVwiPlxuICAgICAgICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiIG56LWljb24gbnpUeXBlPVwiY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidpbmZvJ1wiIG56LWljb24gbnpUeXBlPVwiaW5mby1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ3dhcm5pbmcnXCIgbnotaWNvbiBuelR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ2Vycm9yJ1wiIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidsb2FkaW5nJ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvaT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaW5zdGFuY2UuY29udGVudFwiPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJpbnN0YW5jZS5jb250ZW50XCI+PC9zcGFuPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbXBvbmVudCBleHRlbmRzIE56TU5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGluc3RhbmNlITogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT47XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaWQ6IHN0cmluZzsgdXNlckFjdGlvbjogYm9vbGVhbiB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjZHIpO1xuICB9XG59XG4iXX0=