/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMNContainerComponent } from './base';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './message.component';

function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-message", 2);
    ɵngcc0.ɵɵlistener("destroyed", function NzMessageContainerComponent_nz_message_1_Template_nz_message_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("instance", instance_r1);
} }
const NZ_CONFIG_COMPONENT_NAME = 'message';
const NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24,
    nzDirection: 'ltr'
};
export class NzMessageContainerComponent extends NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.instances = [];
        const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
    }
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateConfig();
            const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (config) {
                const { nzDirection } = config;
                this.dir = nzDirection || this.dir;
            }
        });
    }
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
}
NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService)); };
NzMessageContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "instance", "destroyed"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 1, "nz-message", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("top", ctx.top);
        ɵngcc0.ɵɵclassProp("ant-message-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.instances);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc3.NzMessageComponent], encapsulation: 2, changeDetection: 0 });
NzMessageContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      <nz-message *ngFor="let instance of instances" [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></nz-message>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBaUIsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBR2hELE1BQU0sd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0FBRTNDLE1BQU0seUJBQXlCLEdBQTRCO0FBQzNELElBQUUsU0FBUyxFQUFFLElBQUk7QUFDakIsSUFBRSxVQUFVLEVBQUUsSUFBSTtBQUNsQixJQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ2YsSUFBRSxjQUFjLEVBQUUsSUFBSTtBQUN0QixJQUFFLEtBQUssRUFBRSxFQUFFO0FBQ1gsSUFBRSxXQUFXLEVBQUUsS0FBSztBQUNwQixDQUFDLENBQUM7QUFjRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCO0FBQ3ZFLElBS0UsWUFBWSxHQUFzQixFQUFFLGVBQWdDO0FBQ3RFLFFBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNoQyxRQVBXLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQzFDLFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUFFLGNBQVMsR0FBbUMsRUFBRSxDQUFDO0FBQ2pELFFBSUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hGLFFBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxXQUFXLEtBQUksS0FBSyxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUNILElBQ1kscUJBQXFCO0FBQUssUUFDbEMsSUFBSSxDQUFDLGVBQWU7QUFDeEIsYUFBTyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQztBQUNqRSxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLGFBQU8sU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUN0QixZQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixZQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM1RixZQUFRLElBQUksTUFBTSxFQUFFO0FBQ3BCLGdCQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDekMsZ0JBQVUsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3QyxhQUFTO0FBQ1QsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULElBQUUsQ0FBQztBQUNILElBQ1ksWUFBWTtBQUFLLFFBQ3pCLElBQUksQ0FBQyxNQUFNLGlEQUNOLHlCQUF5QixHQUN6QixJQUFJLENBQUMsTUFBTSxHQUNYLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FDeEUsQ0FBQztBQUNOLFFBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7dURBaERDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRTtNQUFzQixrQkFDaEMsUUFBUSxFQUFFLG9CQUFvQixrQkFDOUIsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsUUFBUSxFQUFFLG9QQUlULGNBQ0Y7Ozs7Ozs7OzswR0FDSTtBQUFDO0FBQXFELFlBakN6QixpQkFBaUI7QUFBSSxZQUMvQixlQUFlO0FBQUc7Ozs7Ozs7Ozs7Ozs7OztvSEFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56TU5Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtZXNzYWdlJztcblxuY29uc3QgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRzogUmVxdWlyZWQ8TWVzc2FnZUNvbmZpZz4gPSB7XG4gIG56QW5pbWF0ZTogdHJ1ZSxcbiAgbnpEdXJhdGlvbjogMzAwMCxcbiAgbnpNYXhTdGFjazogNyxcbiAgbnpQYXVzZU9uSG92ZXI6IHRydWUsXG4gIG56VG9wOiAyNCxcbiAgbnpEaXJlY3Rpb246ICdsdHInXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZS1jb250YWluZXInLFxuICBleHBvcnRBczogJ256TWVzc2FnZUNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZVwiIFtjbGFzcy5hbnQtbWVzc2FnZS1ydGxdPVwiZGlyID09PSAncnRsJ1wiIFtzdHlsZS50b3BdPVwidG9wXCI+XG4gICAgICA8bnotbWVzc2FnZSAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzXCIgW2luc3RhbmNlXT1cImluc3RhbmNlXCIgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIj48L256LW1lc3NhZ2U+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgaW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek1lc3NhZ2VEYXRhPj4gPSBbXTtcbiAgdG9wPzogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKGNkciwgbnpDb25maWdTZXJ2aWNlKTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcbiAgICB0aGlzLmRpciA9IGNvbmZpZz8ubnpEaXJlY3Rpb24gfHwgJ2x0cic7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY29uc3QgeyBuekRpcmVjdGlvbiB9ID0gY29uZmlnO1xuICAgICAgICAgIHRoaXMuZGlyID0gbnpEaXJlY3Rpb24gfHwgdGhpcy5kaXI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIC4uLk5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcsXG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgfTtcblxuICAgIHRoaXMudG9wID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uelRvcCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==