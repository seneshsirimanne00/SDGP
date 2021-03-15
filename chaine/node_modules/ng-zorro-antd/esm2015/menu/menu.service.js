/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class MenuService {
    constructor() {
        /** all descendant menu click **/
        this.descendantMenuItemClick$ = new Subject();
        /** child menu item click **/
        this.childMenuItemClick$ = new Subject();
        this.theme$ = new BehaviorSubject('light');
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
    }
    onDescendantMenuItemClick(menu) {
        this.descendantMenuItemClick$.next(menu);
    }
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setMode(mode) {
        this.mode$.next(mode);
    }
    setTheme(theme) {
        this.theme$.next(theme);
    }
    setInlineIndent(indent) {
        this.inlineIndent$.next(indent);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUloRCxNQUFNLE9BQU8sV0FBVztBQUN4QixJQUZBO0FBQ0UsUUFDQSxpQ0FBaUM7QUFDbkMsUUFBRSw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO0FBQ3RELFFBQUUsNkJBQTZCO0FBQy9CLFFBQUUsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQWEsQ0FBQztBQUNqRCxRQUFFLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBa0IsT0FBTyxDQUFDLENBQUM7QUFDekQsUUFBRSxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQWlCLFVBQVUsQ0FBQyxDQUFDO0FBQzFELFFBQUUsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztBQUNsRCxRQUFFLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0FBQzVELElBb0JBLENBQUM7QUFDRCxJQXBCRSx5QkFBeUIsQ0FBQyxJQUFlO0FBQUksUUFDM0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDSCxJQUNFLG9CQUFvQixDQUFDLElBQWU7QUFBSSxRQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNILElBQ0UsT0FBTyxDQUFDLElBQW9CO0FBQUksUUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsS0FBc0I7QUFBSSxRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWUsQ0FBQyxNQUFjO0FBQUksUUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0g7dUNBOUJDLFVBQVU7Ozs7Z0RBQ1Q7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlLCBOek1lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2Uge1xuICAvKiogYWxsIGRlc2NlbmRhbnQgbWVudSBjbGljayAqKi9cbiAgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xuICAvKiogY2hpbGQgbWVudSBpdGVtIGNsaWNrICoqL1xuICBjaGlsZE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xuICB0aGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56TWVudVRoZW1lVHlwZT4oJ2xpZ2h0Jyk7XG4gIG1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOek1lbnVNb2RlVHlwZT4oJ3ZlcnRpY2FsJyk7XG4gIGlubGluZUluZGVudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMjQpO1xuICBpc0NoaWxkU3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgb25EZXNjZW5kYW50TWVudUl0ZW1DbGljayhtZW51OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xuICB9XG5cbiAgb25DaGlsZE1lbnVJdGVtQ2xpY2sobWVudTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZE1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IE56TWVudU1vZGVUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlJC5uZXh0KG1vZGUpO1xuICB9XG5cbiAgc2V0VGhlbWUodGhlbWU6IE56TWVudVRoZW1lVHlwZSk6IHZvaWQge1xuICAgIHRoaXMudGhlbWUkLm5leHQodGhlbWUpO1xuICB9XG5cbiAgc2V0SW5saW5lSW5kZW50KGluZGVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmxpbmVJbmRlbnQkLm5leHQoaW5kZW50KTtcbiAgfVxufVxuIl19