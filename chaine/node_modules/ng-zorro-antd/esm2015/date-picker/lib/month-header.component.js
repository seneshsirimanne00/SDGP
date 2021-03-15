/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { transCompatFormat } from './util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';

function MonthHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r1.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
export class MonthHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }
        ];
    }
}
MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) { return new (t || MonthHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
MonthHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthHeaderComponent, selectors: [["month-header"]], exportAs: ["monthHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function MonthHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, MonthHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelement(8, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        ɵngcc0.ɵɵelement(10, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
MonthHeaderComponent.ctorParameters = () => [
    { type: DateHelperService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'month-header',
                exportAs: 'monthHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlci9saWIvbW9udGgtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzNDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxtQkFBbUI7QUFDN0QsSUFBRSxZQUFvQixVQUE2QjtBQUNuRCxRQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osUUFGc0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7QUFBQyxJQUVsRCxDQUFDO0FBQ0gsSUFDRSxZQUFZO0FBQUssUUFDZixPQUFPO0FBQ1gsWUFBTTtBQUNOLGdCQUFRLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVk7QUFDaEQsZ0JBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUNyQyxnQkFBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDOUMsZ0JBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkcsYUFBTztBQUNQLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIO2dEQXRCQyxTQUFTLFNBQUMsa0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRTthQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixRQUFRLEVBQUUsYUFBYSxrQkFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQTJDLGNBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0VBQ0k7QUFBQztBQUE4QyxZQVozQyxpQkFBaUI7QUFBRzs7Ozs7Ozs7OztrRkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgQWJzdHJhY3RQYW5lbEhlYWRlciB9IGZyb20gJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyJztcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0cmFuc0NvbXBhdEZvcm1hdCB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdtb250aC1oZWFkZXInLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBleHBvcnRBczogJ21vbnRoSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb250aEhlYWRlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGFuZWxIZWFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpOiBQYW5lbFNlbGVjdG9yW10ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLWJ0bmAsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoJ3llYXInKSxcbiAgICAgICAgbGFiZWw6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCB0cmFuc0NvbXBhdEZvcm1hdCh0aGlzLmxvY2FsZS55ZWFyRm9ybWF0KSlcbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iXX0=