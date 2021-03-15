/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber, isStyleSupport, measure } from 'ng-zorro-antd/core/util';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Directionality } from '@angular/cdk/bidi';
import { NzTextCopyComponent } from './text-copy.component';
import { NzTextEditComponent } from './text-edit.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from 'ng-zorro-antd/i18n';
import * as ɵngcc4 from 'ng-zorro-antd/core/services';
import * as ɵngcc5 from '@angular/cdk/bidi';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from './text-edit.component';
import * as ɵngcc8 from './text-copy.component';

const _c0 = ["ellipsisContainer"];
const _c1 = ["expandable"];
const _c2 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 1);
    ɵngcc0.ɵɵtext(1);
} if (rf & 2) {
    const content_r5 = ctx.content;
    ɵngcc0.ɵɵproperty("ngIf", !content_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", content_r5, " ");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.nzSuffix);
} }
const _c3 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(3, _c3, ctx_r7.nzContent));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r13.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9, 10);
    ɵngcc0.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.onExpand(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.locale == null ? null : ctx_r15.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", null, 7);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 8);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.isEllipsis);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzSuffix);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzExpandable && ctx_r9.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(3);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.expanded || !ctx_r2.hasOperationsWithEllipsis && ctx_r2.nzEllipsisRows === 1 && !ctx_r2.hasEllipsisObservers || ctx_r2.canCssEllipsis || ctx_r2.nzSuffix && ctx_r2.expanded)("ngIfElse", _r8);
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-edit", 11);
    ɵngcc0.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onStartEditing(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r3.nzContent)("icon", ctx_r3.nzEditIcon)("tooltip", ctx_r3.nzEditTooltip);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-copy", 12);
    ɵngcc0.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onTextCopy($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r4.copyText)("tooltips", ctx_r4.nzCopyTooltips)("icons", ctx_r4.nzCopyIcons);
} }
const _c4 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'typography';
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
export class NzTypographyComponent {
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzCopyTooltips = undefined;
        this.nzCopyIcons = ['copy', 'check'];
        this.nzEditTooltip = undefined;
        this.nzEditIcon = 'edit';
        this.nzEllipsisRows = 1;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new EventEmitter();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.dir = 'ltr';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
        this.document = document;
    }
    get hasEllipsisObservers() {
        return this.nzOnEllipsis.observers.length > 0;
    }
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    get hasOperationsWithEllipsis() {
        return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
    }
    get copyText() {
        return (typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent);
    }
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    onStartEditing() {
        this.editing = true;
    }
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
        this.cdr.markForCheck();
    }
    onExpand() {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    }
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame(() => {
            this.syncEllipsis();
        });
    }
    getOriginContentViewRef() {
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            }
        };
    }
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        const fixedNodes = [this.textCopyRef, this.textEditRef].filter(e => e && e.nativeElement).map(e => e.nativeElement);
        const expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach(n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        });
        this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    getExpandableBtnElement() {
        if (this.nzExpandable) {
            const expandText = this.locale ? this.locale.expand : '';
            const cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                const el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    }
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.renderOnNextFrame());
        }
    }
    ngOnInit() {
        var _a;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows, nzSuffix } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzI18nService), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzResizeService), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8)); };
NzTypographyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTextEditComponent, true);
        ɵngcc0.ɵɵviewQuery(NzTextCopyComponent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, hostVars: 24, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
        ɵngcc0.ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzCopyTooltips: "nzCopyTooltips", nzCopyIcons: "nzCopyIcons", nzEditTooltip: "nzEditTooltip", nzEditIcon: "nzEditIcon", nzEllipsisRows: "nzEllipsisRows", nzContent: "nzContent", nzType: "nzType", nzCopyText: "nzCopyText", nzSuffix: "nzSuffix" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange", nzOnEllipsis: "nzOnEllipsis" }, exportAs: ["nzTypography"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c4, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["jsEllipsis", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "icon", "tooltip", "endEditing", "startEditing"], [3, "text", "tooltips", "icons", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 2);
        ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzEditable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    } }, directives: [ɵngcc6.NgIf, ɵngcc6.NgTemplateOutlet, ɵngcc7.NzTextEditComponent, ɵngcc8.NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzResizeService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzCopyTooltips: [{ type: Input }],
    nzCopyIcons: [{ type: Input }],
    nzEditTooltip: [{ type: Input }],
    nzEditIcon: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnEllipsis: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Array)
], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyComponent, [{
        type: Component,
        args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template [ngTemplateOutlet]="contentTemplate" [ngTemplateOutletContext]="{ content: nzContent }"></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">{{ locale?.expand }}</a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-rtl]': 'dir === "rtl"',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-success]': 'nzType === "success"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Platform }, { type: ɵngcc3.NzI18nService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc4.NzResizeService }, { type: ɵngcc5.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCopyable: [{
            type: Input
        }], nzEditable: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzExpandable: [{
            type: Input
        }], nzEllipsis: [{
            type: Input
        }], nzCopyTooltips: [{
            type: Input
        }], nzCopyIcons: [{
            type: Input
        }], nzEditTooltip: [{
            type: Input
        }], nzEditIcon: [{
            type: Input
        }], nzEllipsisRows: [{
            type: Input
        }], nzContentChange: [{
            type: Output
        }], nzCopy: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnEllipsis: [{
            type: Output
        }], nzContent: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCopyText: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], textEditRef: [{
            type: ViewChild,
            args: [NzTextEditComponent, { static: false }]
        }], textCopyRef: [{
            type: ViewChild,
            args: [NzTextCopyComponent, { static: false }]
        }], ellipsisContainer: [{
            type: ViewChild,
            args: ['ellipsisContainer', { static: false }]
        }], expandableBtn: [{
            type: ViewChild,
            args: ['expandable', { static: false }]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFB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QUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sNEJBQ3ZELFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sOEJBQ2hELFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBTTtBQXhCNUI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHlEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QseURBRDJCO0FBQ25CO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCx5REFEMkI7QUFDbkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNYLDJEQUQrQjtBQUNyQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QseURBRDJCO0FBQ3JCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsNkRBQWtCO0FBQ3pEO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBcUMsMERBQWdCO0FBQ3REO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsNERBQUs7QUFDNUM7QUFBYSxJQUExQixVQUFVLEVBQUU7QUFBRTtBQUNsQix5REFEK0M7QUFFZjtBQUFhLElBQXpDLFVBQVUsRUFBRTtBQUFFLElBQUEsV0FBVyxFQUFFO0FBQUU7QUFDOUIsNkRBRHdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ25FO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XG5pbXBvcnQgeyBOelJlc2l6ZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCwgTnpTYWZlQW55LCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBpc1N0eWxlU3VwcG9ydCwgbWVhc3VyZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56STE4blNlcnZpY2UsIE56VGV4dEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTnpUZXh0Q29weUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1jb3B5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRleHRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LWVkaXQuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICd0eXBvZ3JhcGh5JztcbmNvbnN0IEVYUEFORF9FTEVNRU5UX0NMQVNTTkFNRSA9ICdhbnQtdHlwb2dyYXBoeS1leHBhbmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBcbiAgbnotdHlwb2dyYXBoeSxcbiAgW256LXR5cG9ncmFwaHldLFxuICBwW256LXBhcmFncmFwaF0sXG4gIHNwYW5bbnotdGV4dF0sXG4gIGgxW256LXRpdGxlXSwgaDJbbnotdGl0bGVdLCBoM1tuei10aXRsZV0sIGg0W256LXRpdGxlXVxuICBgLFxuICBleHBvcnRBczogJ256VHlwb2dyYXBoeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGUgbGV0LWNvbnRlbnQ9XCJjb250ZW50XCI+XG4gICAgICA8bmctY29udGVudCAqbmdJZj1cIiFjb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAge3sgY29udGVudCB9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlZGl0aW5nXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZXhwYW5kZWQgfHxcbiAgICAgICAgICAgICghaGFzT3BlcmF0aW9uc1dpdGhFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA9PT0gMSAmJiAhaGFzRWxsaXBzaXNPYnNlcnZlcnMpIHx8XG4gICAgICAgICAgICBjYW5Dc3NFbGxpcHNpcyB8fFxuICAgICAgICAgICAgKG56U3VmZml4ICYmIGV4cGFuZGVkKTtcbiAgICAgICAgICBlbHNlIGpzRWxsaXBzaXNcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGNvbnRlbnQ6IG56Q29udGVudCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U3VmZml4XCI+e3sgbnpTdWZmaXggfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNqc0VsbGlwc2lzPlxuICAgICAgICA8c3BhbiAjZWxsaXBzaXNDb250YWluZXI+PC9zcGFuPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNFbGxpcHNpc1wiPnt7IGVsbGlwc2lzU3RyIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelN1ZmZpeFwiPnt7IG56U3VmZml4IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxhICNleHBhbmRhYmxlICpuZ0lmPVwibnpFeHBhbmRhYmxlICYmIGlzRWxsaXBzaXNcIiBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWV4cGFuZFwiIChjbGljayk9XCJvbkV4cGFuZCgpXCI+e3sgbG9jYWxlPy5leHBhbmQgfX08L2E+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG56LXRleHQtZWRpdFxuICAgICAgKm5nSWY9XCJuekVkaXRhYmxlXCJcbiAgICAgIFt0ZXh0XT1cIm56Q29udGVudFwiXG4gICAgICBbaWNvbl09XCJuekVkaXRJY29uXCJcbiAgICAgIFt0b29sdGlwXT1cIm56RWRpdFRvb2x0aXBcIlxuICAgICAgKGVuZEVkaXRpbmcpPVwib25FbmRFZGl0aW5nKCRldmVudClcIlxuICAgICAgKHN0YXJ0RWRpdGluZyk9XCJvblN0YXJ0RWRpdGluZygpXCJcbiAgICA+PC9uei10ZXh0LWVkaXQ+XG5cbiAgICA8bnotdGV4dC1jb3B5XG4gICAgICAqbmdJZj1cIm56Q29weWFibGUgJiYgIWVkaXRpbmdcIlxuICAgICAgW3RleHRdPVwiY29weVRleHRcIlxuICAgICAgW3Rvb2x0aXBzXT1cIm56Q29weVRvb2x0aXBzXCJcbiAgICAgIFtpY29uc109XCJuekNvcHlJY29uc1wiXG4gICAgICAodGV4dENvcHkpPVwib25UZXh0Q29weSgkZXZlbnQpXCJcbiAgICA+PC9uei10ZXh0LWNvcHk+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHldJzogJyFlZGl0aW5nJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXJ0bF0nOiAnZGlyID09PSBcInJ0bFwiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVkaXQtY29udGVudF0nOiAnZWRpdGluZycsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1zZWNvbmRhcnldJzogJ256VHlwZSA9PT0gXCJzZWNvbmRhcnlcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS13YXJuaW5nXSc6ICduelR5cGUgPT09IFwid2FybmluZ1wiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWRhbmdlcl0nOiAnbnpUeXBlID09PSBcImRhbmdlclwiJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXN1Y2Nlc3NdJzogJ256VHlwZSA9PT0gXCJzdWNjZXNzXCInLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXNdJzogJ256RWxsaXBzaXMgJiYgIWV4cGFuZGVkJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLXNpbmdsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA9PT0gMScsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpcy1tdWx0aXBsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEnLFxuICAgICdbc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wXSc6ICcoY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPiAxKSA/IG56RWxsaXBzaXNSb3dzIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q29weWFibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RWRpdGFibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RXhwYW5kYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFbGxpcHNpczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFbGxpcHNpc1Jvd3M6IE51bWJlcklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvcHlhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekVkaXRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWxsaXBzaXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekNvcHlUb29sdGlwcz86IFtOelRTVHlwZSwgTnpUU1R5cGVdIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekNvcHlJY29uczogW056VFNUeXBlLCBOelRTVHlwZV0gPSBbJ2NvcHknLCAnY2hlY2snXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekVkaXRUb29sdGlwPzogbnVsbCB8IE56VFNUeXBlID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56RWRpdEljb246IE56VFNUeXBlID0gJ2VkaXQnO1xuICBASW5wdXQoKSBuekNvbnRlbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0TnVtYmVyKCkgbnpFbGxpcHNpc1Jvd3M6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIG56VHlwZTogJ3NlY29uZGFyeScgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdzdWNjZXNzJyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpDb3B5VGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelN1ZmZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvcHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvLyBUaGlzIGlzIG5vdCBhIHR3by13YXkgYmluZGluZyBvdXRwdXQgd2l0aCB7QGxpbmsgbnpFbGxpcHNpc31cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25FbGxpcHNpcyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKE56VGV4dEVkaXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWRpdFJlZj86IE56VGV4dEVkaXRDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoTnpUZXh0Q29weUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRDb3B5UmVmPzogTnpUZXh0Q29weUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZWxsaXBzaXNDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxsaXBzaXNDb250YWluZXI/OiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2V4cGFuZGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZXhwYW5kYWJsZUJ0bj86IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgY29udGVudDogc3RyaW5nIH0+O1xuXG4gIGxvY2FsZSE6IE56VGV4dEkxOG5JbnRlcmZhY2U7XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgZWRpdGluZyA9IGZhbHNlO1xuICBlbGxpcHNpc1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3NzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFbGxpcHNpczogYm9vbGVhbiA9IHRydWU7XG4gIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGVsbGlwc2lzU3RyID0gJy4uLic7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgZ2V0IGhhc0VsbGlwc2lzT2JzZXJ2ZXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56T25FbGxpcHNpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBjYW5Dc3NFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekVsbGlwc2lzICYmIHRoaXMuY3NzRWxsaXBzaXMgJiYgIXRoaXMuZXhwYW5kZWQgJiYgIXRoaXMuaGFzRWxsaXBzaXNPYnNlcnZlcnM7XG4gIH1cblxuICBnZXQgaGFzT3BlcmF0aW9uc1dpdGhFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpDb3B5YWJsZSB8fCB0aGlzLm56RWRpdGFibGUgfHwgdGhpcy5uekV4cGFuZGFibGUpICYmIHRoaXMubnpFbGxpcHNpcztcbiAgfVxuXG4gIHByaXZhdGUgdmlld0luaXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZmFJZDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgZ2V0IGNvcHlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy5uekNvcHlUZXh0ID09PSAnc3RyaW5nJyA/IHRoaXMubnpDb3B5VGV4dCA6IHRoaXMubnpDb250ZW50KSE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIHJlc2l6ZVNlcnZpY2U6IE56UmVzaXplU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBvblRleHRDb3B5KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubnpDb3B5LmVtaXQodGV4dCk7XG4gIH1cblxuICBvblN0YXJ0RWRpdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgb25FbmRFZGl0aW5nKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnpDb250ZW50Q2hhbmdlLmVtaXQodGV4dCk7XG4gICAgaWYgKHRoaXMubnpDb250ZW50ID09PSB0ZXh0KSB7XG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25FeHBhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0VsbGlwc2lzID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5uek9uRWxsaXBzaXMuZW1pdChmYWxzZSk7XG4gIH1cblxuICBjYW5Vc2VDU1NFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uekVkaXRhYmxlIHx8IHRoaXMubnpDb3B5YWJsZSB8fCB0aGlzLm56RXhwYW5kYWJsZSB8fCB0aGlzLm56U3VmZml4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB7QGxpbmsgbnpPbkVsbGlwc2lzfSB3b3Jrcywgd2lsbCBmb3JjZSB1c2UgSlMgdG8gY2FsY3VsYXRpb25zXG4gICAgaWYgKHRoaXMuaGFzRWxsaXBzaXNPYnNlcnZlcnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpFbGxpcHNpc1Jvd3MgPT09IDEpIHtcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgndGV4dE92ZXJmbG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgnd2Via2l0TGluZUNsYW1wJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyT25OZXh0RnJhbWUoKTogdm9pZCB7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmZhSWQpO1xuICAgIGlmICghdGhpcy52aWV3SW5pdCB8fCAhdGhpcy5uekVsbGlwc2lzIHx8IHRoaXMubnpFbGxpcHNpc1Jvd3MgPCAwIHx8IHRoaXMuZXhwYW5kZWQgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmZhSWQgPSByZXFBbmltRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zeW5jRWxsaXBzaXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk6IHsgdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHsgY29udGVudDogc3RyaW5nIH0+OyByZW1vdmVWaWV3KCk6IHZvaWQgfSB7XG4gICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXc8eyBjb250ZW50OiBzdHJpbmcgfT4odGhpcy5jb250ZW50VGVtcGxhdGUhLCB7XG4gICAgICBjb250ZW50OiB0aGlzLm56Q29udGVudCFcbiAgICB9KTtcbiAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmlld1JlZixcbiAgICAgIHJlbW92ZVZpZXc6ICgpID0+IHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLnJlbW92ZSh0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZih2aWV3UmVmKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN5bmNFbGxpcHNpcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jc3NFbGxpcHNpcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHZpZXdSZWYsIHJlbW92ZVZpZXcgfSA9IHRoaXMuZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKTtcbiAgICBjb25zdCBmaXhlZE5vZGVzID0gW3RoaXMudGV4dENvcHlSZWYsIHRoaXMudGV4dEVkaXRSZWZdLmZpbHRlcihlID0+IGUgJiYgZS5uYXRpdmVFbGVtZW50KS5tYXAoZSA9PiBlIS5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCBleHBhbmRhYmxlQnRuRWxlbWVudCA9IHRoaXMuZ2V0RXhwYW5kYWJsZUJ0bkVsZW1lbnQoKTtcbiAgICBpZiAoZXhwYW5kYWJsZUJ0bkVsZW1lbnQpIHtcbiAgICAgIGZpeGVkTm9kZXMucHVzaChleHBhbmRhYmxlQnRuRWxlbWVudCk7XG4gICAgfVxuICAgIGNvbnN0IHsgY29udGVudE5vZGVzLCB0ZXh0LCBlbGxpcHNpcyB9ID0gbWVhc3VyZShcbiAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5uekVsbGlwc2lzUm93cyxcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLFxuICAgICAgZml4ZWROb2RlcyxcbiAgICAgIHRoaXMuZWxsaXBzaXNTdHIsXG4gICAgICB0aGlzLm56U3VmZml4XG4gICAgKTtcblxuICAgIHJlbW92ZVZpZXcoKTtcblxuICAgIHRoaXMuZWxsaXBzaXNUZXh0ID0gdGV4dDtcbiAgICBpZiAoZWxsaXBzaXMgIT09IHRoaXMuaXNFbGxpcHNpcykge1xuICAgICAgdGhpcy5pc0VsbGlwc2lzID0gZWxsaXBzaXM7XG4gICAgICB0aGlzLm56T25FbGxpcHNpcy5lbWl0KGVsbGlwc2lzKTtcbiAgICB9XG4gICAgY29uc3QgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50ID0gdGhpcy5lbGxpcHNpc0NvbnRhaW5lciEubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRlbnROb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIG4uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIE5lZWQgdG8gY3JlYXRlIHRoZSBlbGVtZW50IGZvciBjYWxjdWxhdGlvbiBzaXplIGJlZm9yZSB2aWV3IGluaXRcbiAgcHJpdmF0ZSBnZXRFeHBhbmRhYmxlQnRuRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGlmICh0aGlzLm56RXhwYW5kYWJsZSkge1xuICAgICAgY29uc3QgZXhwYW5kVGV4dCA9IHRoaXMubG9jYWxlID8gdGhpcy5sb2NhbGUuZXhwYW5kIDogJyc7XG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZTtcbiAgICAgIGlmICghY2FjaGUgfHwgY2FjaGUuaW5uZXJUZXh0ID09PSBleHBhbmRUZXh0KSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IEVYUEFORF9FTEVNRU5UX0NMQVNTTkFNRTtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gZXhwYW5kVGV4dDtcbiAgICAgICAgdGhpcy5leHBhbmRhYmxlQnRuRWxlbWVudENhY2hlID0gZWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlQnRuRWxlbWVudENhY2hlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGFibGVCdG5FbGVtZW50Q2FjaGUgPSBudWxsO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBbmRTdWJzY3JpYmVXaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jc3NFbGxpcHNpcyA9IHRoaXMuY2FuVXNlQ1NTRWxsaXBzaXMoKTtcbiAgICAgIHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKTtcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5yZXNpemVTZXJ2aWNlXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekNvcHlhYmxlLCBuekVkaXRhYmxlLCBuekV4cGFuZGFibGUsIG56RWxsaXBzaXMsIG56Q29udGVudCwgbnpFbGxpcHNpc1Jvd3MsIG56U3VmZml4IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekNvcHlhYmxlIHx8IG56RWRpdGFibGUgfHwgbnpFeHBhbmRhYmxlIHx8IG56RWxsaXBzaXMgfHwgbnpDb250ZW50IHx8IG56RWxsaXBzaXNSb3dzIHx8IG56U3VmZml4KSB7XG4gICAgICBpZiAodGhpcy5uekVsbGlwc2lzKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19