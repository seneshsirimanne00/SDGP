/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ContentChildren, Directive, EventEmitter, Inject, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken, NzMenuServiceLocalToken } from './menu.token';
import { NzSubMenuComponent } from './submenu.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './menu.service';
import * as ɵngcc2 from '@angular/cdk/bidi';
export function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
export function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
export class NzMenuDirective {
    constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.isMenuInsideDropDown;
        this.nzClick = new EventEmitter();
        this.actualMode = 'vertical';
        this.dir = 'ltr';
        this.inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
        this.mode$ = new BehaviorSubject(this.nzMode);
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
    }
    setInlineCollapsed(inlineCollapsed) {
        this.nzInlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(true));
                this.listOfOpenedNzSubMenuComponent = [];
            }
        }
    }
    ngOnInit() {
        var _a;
        combineLatest([this.inlineCollapsed$, this.mode$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
        this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe(menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
        if (nzInlineCollapsed) {
            this.inlineCollapsed$.next(this.nzInlineCollapsed);
        }
        if (nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (nzMode) {
            this.mode$.next(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MenuService), ɵngcc0.ɵɵdirectiveInject(NzIsMenuInsideDropDownToken), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzMenuDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, hostVars: 34, hostBindings: function NzMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NzMenuServiceLocalToken,
                useClass: MenuService
            },
            /** use the top level service **/
            {
                provide: MenuService,
                useFactory: MenuServiceFactory,
                deps: [[new SkipSelf(), new Optional(), MenuService], NzMenuServiceLocalToken]
            },
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuDropDownTokenFactory,
                deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
NzMenuDirective.ctorParameters = () => [
    { type: MenuService },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    {
                        provide: NzMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), MenuService], NzMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.MenuService }, { type: Boolean, decorators: [{
                type: Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzInlineIndent: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzInlineCollapsed: [{
            type: Input
        }], nzSelectable: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXpELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxxQkFBa0MsRUFBRSxzQkFBbUM7QUFBSSxJQUM1RyxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7QUFDaEYsQ0FBQztBQUNELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyx5QkFBa0M7QUFBSSxJQUM3RSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUEyQ0QsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQW9DN0IsWUFDVSxhQUEwQixFQUNVLG9CQUE2QixFQUNqRSxHQUFzQixFQUNWLGNBQThCO0FBQ25ELFFBSlMsa0JBQWEsR0FBYixhQUFhLENBQWE7QUFBQyxRQUNTLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUztBQUFDLFFBQ2xFLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFuQ1csbUJBQWMsR0FBRyxFQUFFLENBQUM7QUFDL0IsUUFBVyxZQUFPLEdBQW9CLE9BQU8sQ0FBQztBQUM5QyxRQUFXLFdBQU0sR0FBbUIsVUFBVSxDQUFDO0FBQy9DLFFBQTJCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNyRCxRQUEyQixpQkFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0FBQ3JFLFFBQXFCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztBQUN2RSxRQUFFLGVBQVUsR0FBbUIsVUFBVSxDQUFDO0FBQzFDLFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQUFVLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xGLFFBQVUsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkUsUUFBVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNuQyxRQUFVLG1DQUE4QixHQUF5QixFQUFFLENBQUM7QUFDcEUsSUF1QkssQ0FBQztBQUNOLElBdkJFLGtCQUFrQixDQUFDLGVBQXdCO0FBQUksUUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztBQUM3QyxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDaEQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxvQkFBb0I7QUFBSyxRQUN2QixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtBQUN4QyxZQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ2xDLGdCQUFRLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlHLGdCQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNyRyxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUcsZ0JBQVEsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEVBQUUsQ0FBQztBQUNqRCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBUUUsUUFBUTtBQUFLO0FBQ0wsUUFBTixhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsYUFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQzdDLFlBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlELFlBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFlBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoQyxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hHLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsWUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3BELGdCQUFRLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0YsYUFBTztBQUNQLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDekMsUUFBSSxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7QUFDbEcsWUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUMzQixZQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsUUFBSSxDQUFDLEVBQUU7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLGtCQUFrQjtBQUFLLFFBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDeEUsWUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNsQyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQzNFLFFBQUksSUFBSSxpQkFBaUIsRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekQsU0FBSztBQUNMLFFBQUksSUFBSSxjQUFjLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUQsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLEVBQUU7QUFDakIsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsU0FBSztBQUNMLFFBQUksSUFBSSxNQUFNLEVBQUU7QUFDaEIsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7QUFDNUUsZ0JBQVEsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JHLGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDsyQ0F6SUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxXQUFXLGtCQUNyQixRQUFRLEVBQUUsUUFBUSxrQkFDbEIsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSx1QkFBdUIsMEJBQ2hDLFFBQVEsRUFBRSxXQUFXO1VBQ3RCLHNCQUNELGlDQUFpQyxxQkFDakMsMEJBQ0UsT0FBTyxFQUFFLFdBQVcsMEJBQ3BCLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLFdBQVc7QUFBQyxFQUFFLHVCQUF1QixDQUFDLHNCQUMvRTtHQUNEOzttQkFBb0QscUJBQ3BELDBCQUNFLE9BQU8sRUFBRTtJQUEyQiwwQkFDcEMsVUFBVSxFQUFFLHdCQUF3QiwwQkFDcEMsSUFBSTtDQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxzQkFDdEU7SUFDRixrQkFDRCxJQUFJLEVBQUUsc0JBQ0osMkJBQTJCLEVBQUUsc0JBQXNCLHNCQUNuRCxnQ0FBZ0MsRUFBRSxzQkFBc0Isc0JBQ3hELGlDQUFpQyxFQUFFLDZDQUE2QyxzQkFDaEYsZ0NBQWdDLEVBQUUsNENBQTRDLHNCQUM5RSxvQ0FBb0MsRUFBRSxtREFBbUQsc0JBQ3pGLHNDQUFzQyxFQUFFLHFEQUFxRCxzQkFDN0Ysa0NBQWtDLEVBQUUsaURBQWlELHNCQUNyRiw0Q0FBNEMsRUFBRSwyQ0FBMkMsc0JBQ3pGLGtCQUFrQixFQUFFLHVCQUF1QixzQkFDM0MsdUJBQXVCLEVBQUUsdUJBQXVCLHNCQUNoRCx3QkFBd0IsRUFBRSw4Q0FBOEMsc0JBQ3hFLHVCQUF1QixFQUFFLDZDQUE2QyxzQkFDdEUsMkJBQTJCLEVBQUU7d0JBQW9ELHNCQUNqRiw2QkFBNkIsRUFBRSxzREFBc0Qsc0JBQ3JGLHlCQUF5QixFQUFFLGtEQUFrRCxzQkFDN0U7O2dCQUFtQyxFQUFFO1lBQTRDLHNCQUNqRjs7R0FBc0IsRUFBRSxlQUFlLGtCQUN4QztNQUNGOzs7Ozs7Ozs7Ozs0Q0FDSTtBQUFDO0FBQXlDLFlBckR0QyxXQUFXO0FBQUksMENBMkZuQixNQUFNLFNBQUMsMkJBQTJCO0FBQVMsWUEvRzlDLGlCQUFpQjtBQUNqQixZQUprQixjQUFjLHVCQW9IN0IsUUFBUTtBQUFNO0FBQUc7QUFDcEIsd0NBckNDLGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFBTyx1Q0FDakUsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUFPLDZCQUNoRSxLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHNCQUNWLE1BQU07QUFBSTtBQUZjO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDaEIsMERBRHlDO0FBQzFCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFBc0MscURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ3JFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLCBOek1lbnVTZXJ2aWNlTG9jYWxUb2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XG5pbXBvcnQgeyBOek1lbnVNb2RlVHlwZSwgTnpNZW51VGhlbWVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3VibWVudS5jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gTWVudVNlcnZpY2VGYWN0b3J5KHNlcnZpY2VJbnNpZGVEcm9wRG93bjogTWVudVNlcnZpY2UsIHNlcnZpY2VPdXRzaWRlRHJvcERvd246IE1lbnVTZXJ2aWNlKTogTWVudVNlcnZpY2Uge1xuICByZXR1cm4gc2VydmljZUluc2lkZURyb3BEb3duID8gc2VydmljZUluc2lkZURyb3BEb3duIDogc2VydmljZU91dHNpZGVEcm9wRG93bjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBNZW51RHJvcERvd25Ub2tlbkZhY3RvcnkoaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbjogYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA/IGlzTWVudUluc2lkZURyb3BEb3duVG9rZW4gOiBmYWxzZTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJyxcbiAgZXhwb3J0QXM6ICduek1lbnUnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOek1lbnVTZXJ2aWNlTG9jYWxUb2tlbixcbiAgICAgIHVzZUNsYXNzOiBNZW51U2VydmljZVxuICAgIH0sXG4gICAgLyoqIHVzZSB0aGUgdG9wIGxldmVsIHNlcnZpY2UgKiovXG4gICAge1xuICAgICAgcHJvdmlkZTogTWVudVNlcnZpY2UsXG4gICAgICB1c2VGYWN0b3J5OiBNZW51U2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTWVudVNlcnZpY2VdLCBOek1lbnVTZXJ2aWNlTG9jYWxUb2tlbl1cbiAgICB9LFxuICAgIC8qKiBjaGVjayBpZiBtZW51IGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXG4gICAgICB1c2VGYWN0b3J5OiBNZW51RHJvcERvd25Ub2tlbkZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuXV1cbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1saWdodF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbnpUaGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelRoZW1lID09PSAnZGFyaydgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtdmVydGljYWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaG9yaXpvbnRhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWlubGluZV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbnpJbmxpbmVDb2xsYXBzZWRgLFxuICAgICdbY2xhc3MuYW50LW1lbnVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1yb290XSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd25gLFxuICAgICdbY2xhc3MuYW50LW1lbnUtbGlnaHRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWRhcmtdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelRoZW1lID09PSAnZGFyaydgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtdmVydGljYWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWhvcml6b250YWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG56SW5saW5lQ29sbGFwc2VkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SW5saW5lQ29sbGFwc2VkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNlbGVjdGFibGU6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxOek1lbnVJdGVtRGlyZWN0aXZlPjtcbiAgQENvbnRlbnRDaGlsZHJlbihOelN1Yk1lbnVDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50ITogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XG4gIEBJbnB1dCgpIG56SW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIG56VGhlbWU6IE56TWVudVRoZW1lVHlwZSA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0YWJsZSA9ICF0aGlzLmlzTWVudUluc2lkZURyb3BEb3duO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpNZW51SXRlbURpcmVjdGl2ZT4oKTtcbiAgYWN0dWFsTW9kZTogTnpNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGlubGluZUNvbGxhcHNlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMubnpJbmxpbmVDb2xsYXBzZWQpO1xuICBwcml2YXRlIG1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOek1lbnVNb2RlVHlwZT4odGhpcy5uek1vZGUpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudFtdID0gW107XG5cbiAgc2V0SW5saW5lQ29sbGFwc2VkKGlubGluZUNvbGxhcHNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpJbmxpbmVDb2xsYXBzZWQgPSBpbmxpbmVDb2xsYXBzZWQ7XG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQoaW5saW5lQ29sbGFwc2VkKTtcbiAgfVxuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLm56SW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50ID0gdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZmlsdGVyKHN1Ym1lbnUgPT4gc3VibWVudS5uek9wZW4pO1xuICAgICAgICB0aGlzLmxpc3RPZk56U3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZmFsc2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSh0cnVlKSk7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50ID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBASW5qZWN0KE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5pbmxpbmVDb2xsYXBzZWQkLCB0aGlzLm1vZGUkXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtpbmxpbmVDb2xsYXBzZWQsIG1vZGVdKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0dWFsTW9kZSA9IGlubGluZUNvbGxhcHNlZCA/ICd2ZXJ0aWNhbCcgOiBtb2RlO1xuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIHRoaXMubnpNZW51U2VydmljZS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcbiAgICAgIHRoaXMubnpDbGljay5lbWl0KG1lbnUpO1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RhYmxlICYmICFtZW51Lm56TWF0Y2hSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBueklubGluZUNvbGxhcHNlZCwgbnpJbmxpbmVJbmRlbnQsIG56VGhlbWUsIG56TW9kZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpJbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5uZXh0KHRoaXMubnpJbmxpbmVDb2xsYXBzZWQpO1xuICAgIH1cbiAgICBpZiAobnpJbmxpbmVJbmRlbnQpIHtcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5ueklubGluZUluZGVudCk7XG4gICAgfVxuICAgIGlmIChuelRoZW1lKSB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0VGhlbWUodGhpcy5uelRoZW1lKTtcbiAgICB9XG4gICAgaWYgKG56TW9kZSkge1xuICAgICAgdGhpcy5tb2RlJC5uZXh0KHRoaXMubnpNb2RlKTtcbiAgICAgIGlmICghY2hhbmdlcy5uek1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19