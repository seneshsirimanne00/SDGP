/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class NzRadioService {
    constructor() {
        this.selected$ = new ReplaySubject(1);
        this.touched$ = new Subject();
        this.disabled$ = new ReplaySubject(1);
        this.name$ = new ReplaySubject(1);
    }
    touch() {
        this.touched$.next();
    }
    select(value) {
        this.selected$.next(value);
    }
    setDisabled(value) {
        this.disabled$.next(value);
    }
    setName(value) {
        this.name$.next(value);
    }
}
NzRadioService.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); };
NzRadioService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzRadioService, factory: NzRadioService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yYWRpby9yYWRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUc5QyxNQUFNLE9BQU8sY0FBYztBQUMzQixJQUZBO0FBQ0UsUUFDQSxjQUFTLEdBQUcsSUFBSSxhQUFhLENBQVksQ0FBQyxDQUFDLENBQUM7QUFDOUMsUUFBRSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUNqQyxRQUFFLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztBQUM1QyxRQUFFLFVBQUssR0FBRyxJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztBQUN2QyxJQVlBLENBQUM7QUFDRCxJQWJFLEtBQUs7QUFBSyxRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxNQUFNLENBQUMsS0FBZ0I7QUFBSSxRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUFFLFdBQVcsQ0FBQyxLQUFjO0FBQUksUUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFBRSxPQUFPLENBQUMsS0FBYTtBQUFJLFFBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNIOzBDQWxCQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56UmFkaW9TZXJ2aWNlIHtcbiAgc2VsZWN0ZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TnpTYWZlQW55PigxKTtcbiAgdG91Y2hlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXNhYmxlZCQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcbiAgbmFtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xuICB0b3VjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWQkLm5leHQoKTtcbiAgfVxuICBzZWxlY3QodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xuICB9XG4gIHNldERpc2FibGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgc2V0TmFtZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYW1lJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19