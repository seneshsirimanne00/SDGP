/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core/services';
import { NzMNService } from './base';
import { NzMessageContainerComponent } from './message-container.component';
import { NzMessageServiceModule } from './message.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./message.service.module";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/services';
import * as ɵngcc2 from '@angular/cdk/overlay';
export class NzMessageService extends NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'message-';
    }
    success(content, options) {
        return this.createInstance({ type: 'success', content }, options);
    }
    error(content, options) {
        return this.createInstance({ type: 'error', content }, options);
    }
    info(content, options) {
        return this.createInstance({ type: 'info', content }, options);
    }
    warning(content, options) {
        return this.createInstance({ type: 'warning', content }, options);
    }
    loading(content, options) {
        return this.createInstance({ type: 'loading', content }, options);
    }
    create(type, content, options) {
        return this.createInstance({ type, content }, options);
    }
    createInstance(message, options) {
        this.container = this.withContainer(NzMessageContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options
        }));
    }
}
NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(ɵngcc0.ɵɵinject(ɵngcc1.NzSingletonService), ɵngcc0.ɵɵinject(ɵngcc2.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
NzMessageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: NzMessageService, providedIn: i3.NzMessageServiceModule });
NzMessageService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageService, [{
        type: Injectable,
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: ɵngcc1.NzSingletonService }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRTtBQUFxQztBQUU3QjtBQUVQOzs7O0FBQ0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFdBQVc7QUFDakQsSUFHRSxZQUFZLGtCQUFzQyxFQUFFLE9BQWdCLEVBQUUsUUFBa0I7QUFDMUYsUUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELFFBSlksb0JBQWUsR0FBRyxVQUFVLENBQUM7QUFDekMsSUFHRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtBQUFJLFFBQzdFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxLQUFLLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtBQUFJLFFBQzNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtBQUFJLFFBQzFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtBQUFJLFFBQzdFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtBQUFJLFFBQzdFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxNQUFNLENBQ0osSUFBbUUsRUFDbkUsT0FBbUMsRUFDbkMsT0FBOEI7QUFDL0IsUUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0QsSUFBRSxDQUFDO0FBQ0gsSUFDVSxjQUFjLENBQUMsT0FBc0IsRUFBRSxPQUE4QjtBQUFJLFFBQy9FLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ3JFLFFBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0saUNBQ3ZCLE9BQU8sR0FDUDtBQUNULFlBQVEsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQzdCLFlBQVEsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdkMsWUFBUSxPQUFPO0FBQ2YsU0FBTyxFQUNELENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSDtvTkFBQztBQUNELHlSQWpESztBQUFDO0VBSEwsVUFBVSxTQUFDLHJCQUdvQyxZQVZ2QyxrQkFBa0I7S0FRekIsVUFBVSxFQUFFLGpCQVJpQixZQUZ0QixPQUFPO2dCQVVvQixoQkFWaEIsWUFDQyxRQUFRO0FBQUc7SUFVL0I7Ozs7O3dJQVZpQztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcblxuaW1wb3J0IHsgTnpNTlNlcnZpY2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhT3B0aW9ucywgTnpNZXNzYWdlUmVmIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBOek1OU2VydmljZSB7XG4gIHByb3RlY3RlZCBjb250YWluZXI/OiBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBjb21wb25lbnRQcmVmaXggPSAnbWVzc2FnZS0nO1xuXG4gIGNvbnN0cnVjdG9yKG56U2luZ2xldG9uU2VydmljZTogTnpTaW5nbGV0b25TZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihuelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXksIGluamVjdG9yKTtcbiAgfVxuXG4gIHN1Y2Nlc3MoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnc3VjY2VzcycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBlcnJvcihjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdlcnJvcicsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBpbmZvKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgd2FybmluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGxvYWRpbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnbG9hZGluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJyB8IHN0cmluZyxcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPixcbiAgICBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnNcbiAgKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluc3RhbmNlKG1lc3NhZ2U6IE56TWVzc2FnZURhdGEsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLndpdGhDb250YWluZXIoTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50KTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5jcmVhdGUoe1xuICAgICAgLi4ubWVzc2FnZSxcbiAgICAgIC4uLntcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICBtZXNzYWdlSWQ6IHRoaXMuZ2V0SW5zdGFuY2VJZCgpLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==