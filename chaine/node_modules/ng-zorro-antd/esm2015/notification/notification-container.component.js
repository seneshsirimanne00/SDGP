/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { NzMNContainerComponent } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './notification.component';

function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_1_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r4 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r4)("placement", ctx_r0.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_3_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r7 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r7)("placement", ctx_r1.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_5_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r10 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r10)("placement", ctx_r2.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_7_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r13 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r13)("placement", ctx_r3.config.nzPlacement);
} }
const NZ_CONFIG_MODULE_NAME = 'notification';
const NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true,
    nzDirection: 'ltr'
};
export class NzNotificationContainerComponent extends NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.dir = 'ltr';
        this.instances = [];
        this.topLeftInstances = [];
        this.topRightInstances = [];
        this.bottomLeftInstances = [];
        this.bottomRightInstances = [];
        const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
        this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
    }
    create(notification) {
        const noti = this.onCreate(notification);
        const key = noti.options.nzKey;
        const notificationWithSameKey = this.instances.find(msg => msg.options.nzKey === notification.options.nzKey);
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = [...this.instances, noti];
        }
        this.readyInstances();
        return noti;
    }
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return instance;
    }
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateConfig();
            const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
            if (config) {
                const { nzDirection } = config;
                this.dir = nzDirection || this.dir;
            }
        });
    }
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.bottom = toCssPixel(this.config.nzBottom);
        this.cdr.markForCheck();
    }
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    }
    readyInstances() {
        this.topLeftInstances = this.instances.filter(m => m.options.nzPlacement === 'topLeft');
        this.topRightInstances = this.instances.filter(m => m.options.nzPlacement === 'topRight' || !m.options.nzPlacement);
        this.bottomLeftInstances = this.instances.filter(m => m.options.nzPlacement === 'bottomLeft');
        this.bottomRightInstances = this.instances.filter(m => m.options.nzPlacement === 'bottomRight');
        this.cdr.detectChanges();
    }
    mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover, nzPlacement } = this.config;
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover, nzPlacement: nzPlacement }, options);
    }
}
NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService)); };
NzNotificationContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 8, vars: 28, consts: [[1, "ant-notification", "ant-notification-topLeft"], [3, "instance", "placement", "destroyed", 4, "ngFor", "ngForOf"], [1, "ant-notification", "ant-notification-topRight"], [1, "ant-notification", "ant-notification-bottomLeft"], [1, "ant-notification", "ant-notification-bottomRight"], [3, "instance", "placement", "destroyed"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzNotificationContainerComponent_nz_notification_3_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵtemplate(5, NzNotificationContainerComponent_nz_notification_5_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵtemplate(7, NzNotificationContainerComponent_nz_notification_7_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("top", ctx.top)("left", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.topLeftInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("top", ctx.top)("right", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.topRightInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("bottom", ctx.bottom)("left", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bottomLeftInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("bottom", ctx.bottom)("right", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bottomRightInstances);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc3.NzNotificationComponent], encapsulation: 2, changeDetection: 0 });
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFHSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNDLE1BQU0scUJBQXFCLEdBQUcsY0FBYyxDQUFDO0FBRTdDLE1BQU0sOEJBQThCLEdBQWlDO0FBQ3JFLElBQUUsS0FBSyxFQUFFLE1BQU07QUFDZixJQUFFLFFBQVEsRUFBRSxNQUFNO0FBQ2xCLElBQUUsV0FBVyxFQUFFLFVBQVU7QUFDekIsSUFBRSxVQUFVLEVBQUUsSUFBSTtBQUNsQixJQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ2YsSUFBRSxjQUFjLEVBQUUsSUFBSTtBQUN0QixJQUFFLFNBQVMsRUFBRSxJQUFJO0FBQ2pCLElBQUUsV0FBVyxFQUFFLEtBQUs7QUFDcEIsQ0FBQyxDQUFDO0FBK0RGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxzQkFBc0I7QUFDNUUsSUFVRSxZQUFZLEdBQXNCLEVBQUUsZUFBZ0M7QUFDdEUsUUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLFFBWkUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUdFLGNBQVMsR0FBd0MsRUFBRSxDQUFDO0FBQ3RELFFBQUUscUJBQWdCLEdBQXdDLEVBQUUsQ0FBQztBQUM3RCxRQUFFLHNCQUFpQixHQUF3QyxFQUFFLENBQUM7QUFDOUQsUUFBRSx3QkFBbUIsR0FBd0MsRUFBRSxDQUFDO0FBQ2hFLFFBQUUseUJBQW9CLEdBQXdDLEVBQUUsQ0FBQztBQUNqRSxRQUdJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNyRixRQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxLQUFJLEtBQUssQ0FBQztBQUM1QyxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxZQUFnQztBQUFJLFFBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0MsUUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNuQyxRQUFJLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pELEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQU0sWUFBWSxDQUFDLE9BQStDLENBQUMsS0FBSyxDQUNqRyxDQUFDO0FBQ04sUUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsRUFBRTtBQUN4QyxZQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUMzRCxnQkFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELGFBQU87QUFDUCxZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakQsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLFFBQ0ksT0FBTyxJQUFJLENBQUM7QUFDaEIsSUFBRSxDQUFDO0FBQ0gsSUFDWSxRQUFRLENBQUMsUUFBNEI7QUFBSSxRQUNqRCxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNELFFBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0FBQzlDLFFBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBYyxDQUFDO0FBQ2pELFFBQUksT0FBTyxRQUF3QyxDQUFDO0FBQ3BELElBQUUsQ0FBQztBQUNILElBQ1kscUJBQXFCO0FBQUssUUFDbEMsSUFBSSxDQUFDLGVBQWU7QUFDeEIsYUFBTyxnQ0FBZ0MsQ0FBQyxxQkFBcUIsQ0FBQztBQUM5RCxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLGFBQU8sU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUN0QixZQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixZQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RixZQUFRLElBQUksTUFBTSxFQUFFO0FBQ3BCLGdCQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDekMsZ0JBQVUsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3QyxhQUFTO0FBQ1QsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULElBQUUsQ0FBQztBQUNILElBQ1ksWUFBWTtBQUFLLFFBQ3pCLElBQUksQ0FBQyxNQUFNLGlEQUNOLDhCQUE4QixHQUM5QixJQUFJLENBQUMsTUFBTSxHQUNYLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FDckUsQ0FBQztBQUNOLFFBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQztBQUM5QyxRQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7QUFDcEQsUUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ1UsbUJBQW1CLENBQUMsR0FBdUIsRUFBRSxJQUF3QjtBQUFJLFFBQy9FLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFJLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMvQixRQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNqQyxRQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixRQUFJLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNZLGNBQWM7QUFBSyxRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQztBQUM1RixRQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEgsUUFBSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsQ0FBQztBQUNsRyxRQUFJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLGFBQWEsQ0FBQyxDQUFDO0FBQ3BHLFFBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUNZLFlBQVksQ0FBQyxPQUFtQztBQUFJLFFBQzVELE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQy9FLFFBQUksdUJBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFdBQVcsSUFBSyxPQUFPLEVBQUc7QUFDM0YsSUFBRSxDQUFDO0FBQ0g7NERBekpDLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRTtDQUEyQixrQkFDckMsUUFBUSxFQUFFLHlCQUF5QixrQkFDbkMsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFxRFQsY0FDRjs7Ozs7Ozs7Ozs7OzsrR0FDSTtBQUFDO0FBQTBELFlBcEY5QixpQkFBaUI7QUFBSSxZQUMxQixlQUFlO0FBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56TU5Db250YWluZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGEsIE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUUgPSAnbm90aWZpY2F0aW9uJztcblxuY29uc3QgTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHOiBSZXF1aXJlZDxOb3RpZmljYXRpb25Db25maWc+ID0ge1xuICBuelRvcDogJzI0cHgnLFxuICBuekJvdHRvbTogJzI0cHgnLFxuICBuelBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcbiAgbnpEdXJhdGlvbjogNDUwMCxcbiAgbnpNYXhTdGFjazogNyxcbiAgbnpQYXVzZU9uSG92ZXI6IHRydWUsXG4gIG56QW5pbWF0ZTogdHJ1ZSxcbiAgbnpEaXJlY3Rpb246ICdsdHInXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb25Db250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24gYW50LW5vdGlmaWNhdGlvbi10b3BMZWZ0XCJcbiAgICAgIFtjbGFzcy5hbnQtbm90aWZpY2F0aW9uLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgIFtzdHlsZS50b3BdPVwidG9wXCJcbiAgICAgIFtzdHlsZS5sZWZ0XT1cIicwcHgnXCJcbiAgICA+XG4gICAgICA8bnotbm90aWZpY2F0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiB0b3BMZWZ0SW5zdGFuY2VzXCJcbiAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcubnpQbGFjZW1lbnRcIlxuICAgICAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiXG4gICAgICA+PC9uei1ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uIGFudC1ub3RpZmljYXRpb24tdG9wUmlnaHRcIlxuICAgICAgW2NsYXNzLmFudC1ub3RpZmljYXRpb24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgW3N0eWxlLnRvcF09XCJ0b3BcIlxuICAgICAgW3N0eWxlLnJpZ2h0XT1cIicwcHgnXCJcbiAgICA+XG4gICAgICA8bnotbm90aWZpY2F0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiB0b3BSaWdodEluc3RhbmNlc1wiXG4gICAgICAgIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiXG4gICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLm56UGxhY2VtZW50XCJcbiAgICAgICAgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIlxuICAgICAgPjwvbnotbm90aWZpY2F0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbiBhbnQtbm90aWZpY2F0aW9uLWJvdHRvbUxlZnRcIlxuICAgICAgW2NsYXNzLmFudC1ub3RpZmljYXRpb24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgW3N0eWxlLmJvdHRvbV09XCJib3R0b21cIlxuICAgICAgW3N0eWxlLmxlZnRdPVwiJzBweCdcIlxuICAgID5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGJvdHRvbUxlZnRJbnN0YW5jZXNcIlxuICAgICAgICBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIlxuICAgICAgICBbcGxhY2VtZW50XT1cImNvbmZpZy5uelBsYWNlbWVudFwiXG4gICAgICAgIChkZXN0cm95ZWQpPVwicmVtb3ZlKCRldmVudC5pZCwgJGV2ZW50LnVzZXJBY3Rpb24pXCJcbiAgICAgID48L256LW5vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24gYW50LW5vdGlmaWNhdGlvbi1ib3R0b21SaWdodFwiXG4gICAgICBbY2xhc3MuYW50LW5vdGlmaWNhdGlvbi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICBbc3R5bGUuYm90dG9tXT1cImJvdHRvbVwiXG4gICAgICBbc3R5bGUucmlnaHRdPVwiJzBweCdcIlxuICAgID5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGJvdHRvbVJpZ2h0SW5zdGFuY2VzXCJcbiAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcubnpQbGFjZW1lbnRcIlxuICAgICAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiXG4gICAgICA+PC9uei1ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1OQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcbiAgdG9wPzogc3RyaW5nIHwgbnVsbDtcbiAgY29uZmlnITogUmVxdWlyZWQ8Tm90aWZpY2F0aW9uQ29uZmlnPjsgLy8gaW5pdGlhbGl6ZWQgYnkgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yXG4gIGluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgdG9wTGVmdEluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgdG9wUmlnaHRJbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4+ID0gW107XG4gIGJvdHRvbUxlZnRJbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4+ID0gW107XG4gIGJvdHRvbVJpZ2h0SW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBuekNvbmZpZ1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpO1xuICAgIHRoaXMuZGlyID0gY29uZmlnPy5uekRpcmVjdGlvbiB8fCAnbHRyJztcbiAgfVxuXG4gIGNyZWF0ZShub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uRGF0YSk6IFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4ge1xuICAgIGNvbnN0IG5vdGkgPSB0aGlzLm9uQ3JlYXRlKG5vdGlmaWNhdGlvbik7XG4gICAgY29uc3Qga2V5ID0gbm90aS5vcHRpb25zLm56S2V5O1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5pbnN0YW5jZXMuZmluZChcbiAgICAgIG1zZyA9PiBtc2cub3B0aW9ucy5uektleSA9PT0gKG5vdGlmaWNhdGlvbi5vcHRpb25zIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnM+KS5uektleVxuICAgICk7XG4gICAgaWYgKGtleSAmJiBub3RpZmljYXRpb25XaXRoU2FtZUtleSkge1xuICAgICAgdGhpcy5yZXBsYWNlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5LCBub3RpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuc2xpY2UoMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluc3RhbmNlcyA9IFsuLi50aGlzLmluc3RhbmNlcywgbm90aV07XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeUluc3RhbmNlcygpO1xuXG4gICAgcmV0dXJuIG5vdGk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25DcmVhdGUoaW5zdGFuY2U6IE56Tm90aWZpY2F0aW9uRGF0YSk6IFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4ge1xuICAgIGluc3RhbmNlLm9wdGlvbnMgPSB0aGlzLm1lcmdlT3B0aW9ucyhpbnN0YW5jZS5vcHRpb25zKTtcbiAgICBpbnN0YW5jZS5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBpbnN0YW5jZS5vbkNsaWNrID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgICByZXR1cm4gaW5zdGFuY2UgYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPjtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjb25zdCB7IG56RGlyZWN0aW9uIH0gPSBjb25maWc7XG4gICAgICAgICAgdGhpcy5kaXIgPSBuekRpcmVjdGlvbiB8fCB0aGlzLmRpcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHLFxuICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAuLi50aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX01PRFVMRV9OQU1FKVxuICAgIH07XG5cbiAgICB0aGlzLnRvcCA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpUb3AhKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpCb3R0b20hKTtcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGEpOiB2b2lkIHtcbiAgICBvbGQudGl0bGUgPSBfbmV3LnRpdGxlO1xuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XG4gICAgb2xkLnR5cGUgPSBfbmV3LnR5cGU7XG4gICAgb2xkLm9wdGlvbnMgPSBfbmV3Lm9wdGlvbnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZHlJbnN0YW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy50b3BMZWZ0SW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuZmlsdGVyKG0gPT4gbS5vcHRpb25zLm56UGxhY2VtZW50ID09PSAndG9wTGVmdCcpO1xuICAgIHRoaXMudG9wUmlnaHRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3BSaWdodCcgfHwgIW0ub3B0aW9ucy5uelBsYWNlbWVudCk7XG4gICAgdGhpcy5ib3R0b21MZWZ0SW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuZmlsdGVyKG0gPT4gbS5vcHRpb25zLm56UGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcpO1xuICAgIHRoaXMuYm90dG9tUmlnaHRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcpO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1lcmdlT3B0aW9ucyhvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMge1xuICAgIGNvbnN0IHsgbnpEdXJhdGlvbiwgbnpBbmltYXRlLCBuelBhdXNlT25Ib3ZlciwgbnpQbGFjZW1lbnQgfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiB7IG56RHVyYXRpb24sIG56QW5pbWF0ZSwgbnpQYXVzZU9uSG92ZXIsIG56UGxhY2VtZW50OiBuelBsYWNlbWVudCwgLi4ub3B0aW9ucyB9O1xuICB9XG59XG4iXX0=