/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
import * as ɵngcc0 from '@angular/core';
const isDefined = function (value) {
    return value !== undefined;
};
const ɵ0 = isDefined;
export class NzConfigService {
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter(n => n === componentName), mapTo(undefined));
    }
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    }
}
NzConfigService.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(ɵngcc0.ɵɵinject(NZ_CONFIG, 8)); };
NzConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(i0.ɵɵinject(i1.NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
NzConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CONFIG]
            }] }]; }, null); })();
// tslint:disable:no-invalid-this
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// tslint:disable-next-line:typedef
export function WithConfig() {
    return function ConfigDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__assignedValue__${propName}`;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get() {
                const originalValue = (originalDescriptor === null || originalDescriptor === void 0 ? void 0 : originalDescriptor.get) ? originalDescriptor.get.bind(this)() : this[privatePropName];
                const assignedByUser = ((this.assignmentCount || {})[propName] || 0) > 1;
                if (assignedByUser && isDefined(originalValue)) {
                    return originalValue;
                }
                const componentConfig = this.nzConfigService.getConfigForComponent(this._nzModuleName) || {};
                const configValue = componentConfig[propName];
                const ret = isDefined(configValue) ? configValue : originalValue;
                return ret;
            },
            set(value) {
                // If the value is assigned, we consider the newly assigned value as 'assigned by user'.
                this.assignmentCount = this.assignmentCount || {};
                this.assignmentCount[propName] = (this.assignmentCount[propName] || 0) + 1;
                if (originalDescriptor === null || originalDescriptor === void 0 ? void 0 : originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    };
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUF5QixTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUQ7QUFDb0M7O0FBQXBDLE1BQU0sU0FBUyxHQUFHLFVBQVUsS0FBaUI7QUFBSSxJQUMvQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBQ0Y7QUFJQSxNQUFNLE9BQU8sZUFBZTtBQUM1QixJQUtFLFlBQTJDLGFBQXdCO0FBQ3JFLFFBTlUsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztBQUN6RCxRQUtJLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSCxJQUNFLHFCQUFxQixDQUF3QixhQUFnQjtBQUFJLFFBQy9ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSCxJQUNFLGdDQUFnQyxDQUFDLGFBQTBCO0FBQUksUUFDN0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxFQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ2pCLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNFLEdBQUcsQ0FBd0Is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QVksRUFBRSxJQUFJO0FBQ3hCLFlBQU0sVUFBVSxFQUFFLElBQUk7QUFDdEIsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBQ0Q7QUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGZpbHRlciwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56Q29uZmlnLCBOekNvbmZpZ0tleSwgTlpfQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAodmFsdWU/OiBOelNhZmVBbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8a2V5b2YgTnpDb25maWc+KCk7XG5cbiAgLyoqIEdsb2JhbCBjb25maWcgaG9sZGluZyBwcm9wZXJ0eS4gKi9cbiAgcHJpdmF0ZSBjb25maWc6IE56Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogTnpDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XG4gIH1cblxuICBnZXRDb25maWdGb3JDb21wb25lbnQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBUKTogTnpDb25maWdbVF0ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXTtcbiAgfVxuXG4gIGdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnVXBkYXRlZCQucGlwZShcbiAgICAgIGZpbHRlcihuID0+IG4gPT09IGNvbXBvbmVudE5hbWUpLFxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogTnpDb25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KGNvbXBvbmVudE5hbWUpO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpc1xuXG4vKipcbiAqIFRoaXMgZGVjb3JhdG9yIGlzIHVzZWQgdG8gZGVjb3JhdGUgcHJvcGVydGllcy4gSWYgYSBwcm9wZXJ0eSBpcyBkZWNvcmF0ZWQsIGl0IHdvdWxkIHRyeSB0byBsb2FkIGRlZmF1bHQgdmFsdWUgZnJvbVxuICogY29uZmlnLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuZXhwb3J0IGZ1bmN0aW9uIFdpdGhDb25maWc8VD4oKSB7XG4gIHJldHVybiBmdW5jdGlvbiBDb25maWdEZWNvcmF0b3IodGFyZ2V0OiBOelNhZmVBbnksIHByb3BOYW1lOiBOelNhZmVBbnksIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+KTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfX2Fzc2lnbmVkVmFsdWVfXyR7cHJvcE5hbWV9YDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCgpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsRGVzY3JpcHRvcj8uZ2V0ID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKCkgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XG4gICAgICAgIGNvbnN0IGFzc2lnbmVkQnlVc2VyID0gKCh0aGlzLmFzc2lnbm1lbnRDb3VudCB8fCB7fSlbcHJvcE5hbWVdIHx8IDApID4gMTtcblxuICAgICAgICBpZiAoYXNzaWduZWRCeVVzZXIgJiYgaXNEZWZpbmVkKG9yaWdpbmFsVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQodGhpcy5fbnpNb2R1bGVOYW1lKSB8fCB7fTtcbiAgICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb21wb25lbnRDb25maWdbcHJvcE5hbWVdO1xuICAgICAgICBjb25zdCByZXQgPSBpc0RlZmluZWQoY29uZmlnVmFsdWUpID8gY29uZmlnVmFsdWUgOiBvcmlnaW5hbFZhbHVlO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlPzogVCk6IHZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYXNzaWduZWQsIHdlIGNvbnNpZGVyIHRoZSBuZXdseSBhc3NpZ25lZCB2YWx1ZSBhcyAnYXNzaWduZWQgYnkgdXNlcicuXG4gICAgICAgIHRoaXMuYXNzaWdubWVudENvdW50ID0gdGhpcy5hc3NpZ25tZW50Q291bnQgfHwge307XG4gICAgICAgIHRoaXMuYXNzaWdubWVudENvdW50W3Byb3BOYW1lXSA9ICh0aGlzLmFzc2lnbm1lbnRDb3VudFtwcm9wTmFtZV0gfHwgMCkgKyAxO1xuXG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3I/LnNldCkge1xuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKSh2YWx1ZSEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH07XG4gIH07XG59XG4iXX0=