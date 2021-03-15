/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/core/trans-button';
import * as ɵngcc4 from 'ng-zorro-antd/tooltip';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc6 from 'ng-zorro-antd/icon';
import * as ɵngcc7 from 'ng-zorro-antd/input';

const _c0 = ["textarea"];
function NzTextEditComponent_button_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r3);
} }
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick(); });
    ɵngcc0.ɵɵtemplate(1, NzTextEditComponent_button_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzTooltipTitle", ctx_r0.tooltip === null ? null : ctx_r0.tooltip || (ctx_r0.locale == null ? null : ctx_r0.locale.edit));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.icon);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "textarea", 5, 6);
    ɵngcc0.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onEnter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 7);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.confirm(); });
    ɵngcc0.ɵɵelement(4, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} }
export class NzTextEditComponent {
    constructor(zone, host, cdr, i18n) {
        this.zone = zone;
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new Subject();
        this.icon = 'edit';
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter(true);
        this.nativeElement = this.host.nativeElement;
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    onInput(event) {
        const target = event.target;
        this.currentText = target.value;
    }
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    focusAndSetValue() {
        this.zone.onStable.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
            var _a;
            if ((_a = this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText || '';
                this.autosizeDirective.resizeToFitContent();
                this.cdr.markForCheck();
            }
        });
    }
}
NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService)); };
NzTextEditComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzAutosizeDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
    } }, inputs: { icon: "icon", text: "text", tooltip: "tooltip" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTooltipTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 2, "button", 0);
        ɵngcc0.ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 5, 0, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editing);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzTransButtonDirective, ɵngcc4.NzTooltipDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc6.NzIconDirective, ɵngcc7.NzInputDirective, ɵngcc7.NzAutosizeDirective], encapsulation: 2, changeDetection: 0 });
NzTextEditComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tooltip: [{ type: Input }],
    startEditing: [{ type: Output }],
    endEditing: [{ type: Output }],
    textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextEditComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: `
    <button
      *ngIf="!editing"
      nz-tooltip
      nz-trans-button
      class="ant-typography-edit"
      [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="icon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
    <ng-container *ngIf="editing">
      <textarea
        #textarea
        nz-input
        nzAutosize
        (input)="onInput($event)"
        (blur)="confirm()"
        (keydown.esc)="onCancel()"
        (keydown.enter)="onEnter($event)"
      ></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <i nz-icon nzType="enter"></i>
      </button>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }]; }, { icon: [{
            type: Input
        }], startEditing: [{
            type: Output
        }], endEditing: [{
            type: Output
        }], text: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: ViewChild,
            args: [NzAutosizeDirective, { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5L3RleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNqRCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUFnQmpDLFlBQW9CLElBQVksRUFBVSxJQUFnQixFQUFVLEdBQXNCLEVBQVUsSUFBbUI7QUFBSSxRQUF2RyxTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO0FBQUMsUUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQVMsU0FBSSxHQUFKLElBQUksQ0FBZTtBQUFDLFFBZnhILFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDbEIsUUFDVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNuQyxRQUVXLFNBQUksR0FBYSxNQUFNLENBQUM7QUFDbkMsUUFDcUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQzdELFFBQXFCLGVBQVUsR0FBRyxJQUFJ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QUNIOytDQXhHQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7OzRLQTJCVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLG1CQUFtQixFQUFFLEtBQUssY0FDM0I7Ozs7Ozs7MlBBQ0k7QUFBQztBQUE2QyxZQWxEakQsTUFBTTtBQUNOLFlBSkEsVUFBVTtBQUNWLFlBSEEsaUJBQWlCO0FBQ2pCLFlBYU8sYUFBYTtBQUFHO0FBQUc7QUFBdUMsbUJBOENoRSxLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSywyQkFDVixNQUFNO0FBQUsseUJBQ1gsTUFBTTtBQUFLLHVCQUNYLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sZ0NBQzlDLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelRleHRJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10ZXh0LWVkaXQnLFxuICBleHBvcnRBczogJ256VGV4dEVkaXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiIWVkaXRpbmdcIlxuICAgICAgbnotdG9vbHRpcFxuICAgICAgbnotdHJhbnMtYnV0dG9uXG4gICAgICBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWVkaXRcIlxuICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRvb2x0aXAgPT09IG51bGwgPyBudWxsIDogdG9vbHRpcCB8fCBsb2NhbGU/LmVkaXRcIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImljb247IGxldCBpY29uXCI+XG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCI+PC9pPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRpbmdcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAjdGV4dGFyZWFcbiAgICAgICAgbnotaW5wdXRcbiAgICAgICAgbnpBdXRvc2l6ZVxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwiY29uZmlybSgpXCJcbiAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVudGVyKCRldmVudClcIlxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8YnV0dG9uIG56LXRyYW5zLWJ1dHRvbiBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWVkaXQtY29udGVudC1jb25maXJtXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImVudGVyXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOelRleHRFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBlZGl0aW5nID0gZmFsc2U7XG4gIGxvY2FsZSE6IE56VGV4dEkxOG5JbnRlcmZhY2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIHRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IE56VFNUeXBlID0gJ2VkaXQnO1xuICBASW5wdXQoKSB0b29sdGlwPzogbnVsbCB8IE56VFNUeXBlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3RhcnRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZW5kRWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dGFyZWEhOiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKE56QXV0b3NpemVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBhdXRvc2l6ZURpcmVjdGl2ZSE6IE56QXV0b3NpemVEaXJlY3RpdmU7XG5cbiAgYmVmb3JlVGV4dD86IHN0cmluZztcbiAgY3VycmVudFRleHQ/OiBzdHJpbmc7XG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmJlZm9yZVRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMuYmVmb3JlVGV4dDtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRFZGl0aW5nLmVtaXQoKTtcbiAgICB0aGlzLmZvY3VzQW5kU2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbmRFZGl0aW5nLmVtaXQodGhpcy5jdXJyZW50VGV4dCk7XG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRoaXMuY3VycmVudFRleHQgPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBvbkVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xuICAgIHRoaXMuY29uZmlybSgpO1xuICB9XG5cbiAgZm9jdXNBbmRTZXRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUub25TdGFibGUucGlwZSh0YWtlKDEpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50ZXh0YXJlYT8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5jdXJyZW50VGV4dCB8fCAnJztcbiAgICAgICAgdGhpcy5hdXRvc2l6ZURpcmVjdGl2ZS5yZXNpemVUb0ZpdENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==