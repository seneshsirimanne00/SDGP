/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzDragService, NzResizeService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzCarouselContentDirective } from './carousel-content.directive';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './typings';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from 'ng-zorro-antd/core/services';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/common';

const _c0 = ["slickList"];
const _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const i_r7 = ctx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.onLiClick(i_r7); });
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵclassProp("slick-active", content_r6.isActive);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.nzDotRender || _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c2, i_r7));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 7);
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("slick-dots-top", ctx_r2.nzDotPosition === "top")("slick-dots-bottom", ctx_r2.nzDotPosition === "bottom")("slick-dots-left", ctx_r2.nzDotPosition === "left")("slick-dots-right", ctx_r2.nzDotPosition === "right");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r11 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(index_r11 + 1);
} }
const _c3 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'carousel';
export class NzCarouselComponent {
    constructor(elementRef, nzConfigService, renderer, cdr, platform, resizeService, nzDragService, directionality, customStrategies) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.nzDragService = nzDragService;
        this.directionality = directionality;
        this.customStrategies = customStrategies;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzEffect = 'scrollx';
        this.nzEnableSwipe = true;
        this.nzDots = true;
        this.nzAutoPlay = false;
        this.nzAutoPlaySpeed = 3000;
        this.nzTransitionSpeed = 500;
        /**
         * this property is passed directly to an NzCarouselBaseStrategy
         */
        this.nzStrategyOptions = undefined;
        this._dotPosition = 'bottom';
        this.nzBeforeChange = new EventEmitter();
        this.nzAfterChange = new EventEmitter();
        this.activeIndex = 0;
        this.vertical = false;
        this.transitionInProgress = null;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        this.onLiClick = (index) => {
            if (this.dir === 'rtl') {
                this.goTo(this.carouselContents.length - 1 - index);
            }
            else {
                this.goTo(index);
            }
        };
        /**
         * Drag carousel.
         */
        this.pointerDown = (event) => {
            if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
                this.clearScheduledTransition();
                this.gestureRect = this.slickListEl.getBoundingClientRect();
                this.nzDragService.requestDraggingSequence(event).subscribe(delta => {
                    var _a;
                    this.pointerDelta = delta;
                    this.isDragging = true;
                    (_a = this.strategy) === null || _a === void 0 ? void 0 : _a.dragging(this.pointerDelta);
                }, () => { }, () => {
                    if (this.nzEnableSwipe && this.isDragging) {
                        const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > this.gestureRect.width / 3) {
                            this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
                        }
                        else {
                            this.goTo(this.activeIndex);
                        }
                        this.gestureRect = null;
                        this.pointerDelta = null;
                    }
                    this.isDragging = false;
                });
            }
        };
        this.nzDotPosition = 'bottom';
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    set nzDotPosition(value) {
        this._dotPosition = value;
        if (value === 'left' || value === 'right') {
            this.vertical = true;
        }
        else {
            this.vertical = false;
        }
    }
    get nzDotPosition() {
        return this._dotPosition;
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.markContentActive(this.activeIndex);
            this.cdr.detectChanges();
        });
    }
    ngAfterContentInit() {
        this.markContentActive(0);
    }
    ngAfterViewInit() {
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.markContentActive(0);
            this.layout();
        });
        this.resizeService
            .subscribe()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.layout();
        });
        this.switchStrategy();
        this.markContentActive(0);
        this.layout();
        // If embedded in an entry component, it may do initial render at an inappropriate time.
        // ngZone.onStable won't do this trick
        // TODO: need to change this.
        Promise.resolve().then(() => {
            this.layout();
        });
    }
    ngOnChanges(changes) {
        const { nzEffect, nzDotPosition } = changes;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.layout();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.layout();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    }
    ngOnDestroy() {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    onKeyDown(e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    }
    next() {
        this.goTo(this.activeIndex + 1);
    }
    pre() {
        this.goTo(this.activeIndex - 1);
    }
    goTo(index) {
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            const length = this.carouselContents.length;
            const from = this.activeIndex;
            const to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from, to });
            this.strategy.switch(this.activeIndex, index).subscribe(() => {
                this.scheduleNextTransition();
                this.nzAfterChange.emit(index);
                this.isTransiting = false;
            });
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    }
    switchStrategy() {
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        const customStrategy = this.customStrategies ? this.customStrategies.find(s => s.name === this.nzEffect) : null;
        if (customStrategy) {
            this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer, this.platform);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer, this.platform)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer, this.platform);
    }
    scheduleNextTransition() {
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout(() => {
                this.goTo(this.activeIndex + 1);
            }, this.nzAutoPlaySpeed);
        }
    }
    clearScheduledTransition() {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    }
    markContentActive(index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((slide, i) => {
                if (this.dir === 'rtl') {
                    slide.isActive = index === this.carouselContents.length - 1 - i;
                }
                else {
                    slide.isActive = index === i;
                }
            });
        }
        this.cdr.markForCheck();
    }
    layout() {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    }
}
NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzResizeService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzDragService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
NzCarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselContents = _t);
    } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickList = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
    } }, hostVars: 4, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-carousel-vertical", ctx.vertical)("ant-carousel-rtl", ctx.dir === "rtl");
    } }, inputs: { nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed", nzTransitionSpeed: "nzTransitionSpeed", nzStrategyOptions: "nzStrategyOptions", nzDotPosition: "nzDotPosition", nzDotRender: "nzDotRender" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 3, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzDots);
    } }, directives: [ɵngcc5.NgIf, ɵngcc5.NgForOf, ɵngcc5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: NzResizeService },
    { type: NzDragService },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
];
NzCarouselComponent.propDecorators = {
    carouselContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
    slickList: [{ type: ViewChild, args: ['slickList', { static: false },] }],
    slickTrack: [{ type: ViewChild, args: ['slickTrack', { static: false },] }],
    nzDotRender: [{ type: Input }],
    nzEffect: [{ type: Input }],
    nzEnableSwipe: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzAutoPlay: [{ type: Input }],
    nzAutoPlaySpeed: [{ type: Input }],
    nzTransitionSpeed: [{ type: Input }],
    nzStrategyOptions: [{ type: Input }],
    nzDotPosition: [{ type: Input }],
    nzBeforeChange: [{ type: Output }],
    nzAfterChange: [{ type: Output }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzCarouselComponent.prototype, "nzEffect", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzDots", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NzCarouselComponent.prototype, "nzDotPosition", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-carousel',
                exportAs: 'nzCarousel',
                preserveWhitespaces: false,
                template: `
    <div class="slick-initialized slick-slider" [class.slick-vertical]="nzDotPosition === 'left' || nzDotPosition === 'right'">
      <div
        #slickList
        class="slick-list"
        tabindex="-1"
        (keydown)="onKeyDown($event)"
        (mousedown)="pointerDown($event)"
        (touchstart)="pointerDown($event)"
      >
        <!-- Render carousel items. -->
        <div class="slick-track" #slickTrack>
          <ng-content></ng-content>
        </div>
      </div>
      <!-- Render dots. -->
      <ul
        class="slick-dots"
        *ngIf="nzDots"
        [class.slick-dots-top]="nzDotPosition === 'top'"
        [class.slick-dots-bottom]="nzDotPosition === 'bottom'"
        [class.slick-dots-left]="nzDotPosition === 'left'"
        [class.slick-dots-right]="nzDotPosition === 'right'"
      >
        <li *ngFor="let content of carouselContents; let i = index" [class.slick-active]="content.isActive" (click)="onLiClick(i)">
          <ng-template [ngTemplateOutlet]="nzDotRender || renderDotTemplate" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
        </li>
      </ul>
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{ index + 1 }}</button>
    </ng-template>
  `,
                host: {
                    '[class.ant-carousel-vertical]': 'vertical',
                    '[class.ant-carousel-rtl]': `dir ==='rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }, { type: ɵngcc3.NzResizeService }, { type: ɵngcc3.NzDragService }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }, { type: Array, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
            }] }]; }, { nzEffect: [{
            type: Input
        }], nzEnableSwipe: [{
            type: Input
        }], nzDots: [{
            type: Input
        }], nzAutoPlay: [{
            type: Input
        }], nzAutoPlaySpeed: [{
            type: Input
        }], nzTransitionSpeed: [{
            type: Input
        }], nzStrategyOptions: [{
            type: Input
        }], nzBeforeChange: [{
            type: Output
        }], nzAfterChange: [{
            type: Output
        }], nzDotPosition: [{
            type: Input
        }], carouselContents: [{
            type: ContentChildren,
            args: [NzCarouselContentDirective]
        }], slickList: [{
            type: ViewChild,
            args: ['slickList', { static: false }]
        }], slickTrack: [{
            type: ViewChild,
            args: ['slickTrack', { static: false }]
        }], nzDotRender: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFLTCw2QkFBNkIsRUFFOUIsTUFB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O0FBRXJDLHdEQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDSDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpEcmFnU2VydmljZSwgTnpSZXNpemVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9iYXNlLXN0cmF0ZWd5JztcbmltcG9ydCB7IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvb3BhY2l0eS1zdHJhdGVneSc7XG5pbXBvcnQgeyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5JztcbmltcG9ydCB7XG4gIEZyb21Ub0ludGVyZmFjZSxcbiAgTnpDYXJvdXNlbERvdFBvc2l0aW9uLFxuICBOekNhcm91c2VsRWZmZWN0cyxcbiAgTnpDYXJvdXNlbFN0cmF0ZWd5UmVnaXN0cnlJdGVtLFxuICBOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUyxcbiAgUG9pbnRlclZlY3RvclxufSBmcm9tICcuL3R5cGluZ3MnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2Nhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNhcm91c2VsJyxcbiAgZXhwb3J0QXM6ICduekNhcm91c2VsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNsaWNrLWluaXRpYWxpemVkIHNsaWNrLXNsaWRlclwiIFtjbGFzcy5zbGljay12ZXJ0aWNhbF09XCJuekRvdFBvc2l0aW9uID09PSAnbGVmdCcgfHwgbnpEb3RQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiPlxuICAgICAgPGRpdlxuICAgICAgICAjc2xpY2tMaXN0XG4gICAgICAgIGNsYXNzPVwic2xpY2stbGlzdFwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChtb3VzZWRvd24pPVwicG9pbnRlckRvd24oJGV2ZW50KVwiXG4gICAgICAgICh0b3VjaHN0YXJ0KT1cInBvaW50ZXJEb3duKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8IS0tIFJlbmRlciBjYXJvdXNlbCBpdGVtcy4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiICNzbGlja1RyYWNrPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gUmVuZGVyIGRvdHMuIC0tPlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzPVwic2xpY2stZG90c1wiXG4gICAgICAgICpuZ0lmPVwibnpEb3RzXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtdG9wXT1cIm56RG90UG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtYm90dG9tXT1cIm56RG90UG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtbGVmdF09XCJuekRvdFBvc2l0aW9uID09PSAnbGVmdCdcIlxuICAgICAgICBbY2xhc3Muc2xpY2stZG90cy1yaWdodF09XCJuekRvdFBvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgID5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb250ZW50IG9mIGNhcm91c2VsQ29udGVudHM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3Muc2xpY2stYWN0aXZlXT1cImNvbnRlbnQuaXNBY3RpdmVcIiAoY2xpY2spPVwib25MaUNsaWNrKGkpXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RG90UmVuZGVyIHx8IHJlbmRlckRvdFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyRG90VGVtcGxhdGUgbGV0LWluZGV4PlxuICAgICAgPGJ1dHRvbj57eyBpbmRleCArIDEgfX08L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ3ZlcnRpY2FsJyxcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbC1ydGxdJzogYGRpciA9PT0ncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFbmFibGVTd2lwZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEb3RzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9QbGF5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9QbGF5U3BlZWQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpUcmFuc2l0aW9uU3BlZWQ6IE51bWJlcklucHV0O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpIGNhcm91c2VsQ29udGVudHMhOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xuXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja0xpc3Q/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlja1RyYWNrJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNsaWNrVHJhY2s/OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG56RG90UmVuZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciB9PjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekVmZmVjdDogTnpDYXJvdXNlbEVmZmVjdHMgPSAnc2Nyb2xseCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9QbGF5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkOiBudW1iZXIgPSAzMDAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelRyYW5zaXRpb25TcGVlZCA9IDUwMDtcblxuICAvKipcbiAgICogdGhpcyBwcm9wZXJ0eSBpcyBwYXNzZWQgZGlyZWN0bHkgdG8gYW4gTnpDYXJvdXNlbEJhc2VTdHJhdGVneVxuICAgKi9cbiAgQElucHV0KCkgbnpTdHJhdGVneU9wdGlvbnM6IE56U2FmZUFueSA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICAvLyBAdHMtaWdub3JlXG4gIEBXaXRoQ29uZmlnKClcbiAgc2V0IG56RG90UG9zaXRpb24odmFsdWU6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbikge1xuICAgIHRoaXMuX2RvdFBvc2l0aW9uID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnbGVmdCcgfHwgdmFsdWUgPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RG90UG9zaXRpb24oKTogTnpDYXJvdXNlbERvdFBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZG90UG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9kb3RQb3NpdGlvbjogTnpDYXJvdXNlbERvdFBvc2l0aW9uID0gJ2JvdHRvbSc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmVmb3JlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGcm9tVG9JbnRlcmZhY2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgYWN0aXZlSW5kZXggPSAwO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIHNsaWNrTGlzdEVsITogSFRNTEVsZW1lbnQ7XG4gIHNsaWNrVHJhY2tFbCE6IEhUTUxFbGVtZW50O1xuICBzdHJhdGVneT86IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3k7XG4gIHZlcnRpY2FsID0gZmFsc2U7XG4gIHRyYW5zaXRpb25JblByb2dyZXNzOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBnZXN0dXJlUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHBvaW50ZXJEZWx0YTogUG9pbnRlclZlY3RvciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGlzVHJhbnNpdGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU2VydmljZTogTnpSZXNpemVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnpEcmFnU2VydmljZTogTnpEcmFnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTKSBwcml2YXRlIGN1c3RvbVN0cmF0ZWdpZXM6IE56Q2Fyb3VzZWxTdHJhdGVneVJlZ2lzdHJ5SXRlbVtdXG4gICkge1xuICAgIHRoaXMubnpEb3RQb3NpdGlvbiA9ICdib3R0b20nO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2Fyb3VzZWwnKTtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IHRoaXMuc2xpY2tMaXN0IS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gdGhpcy5zbGlja1RyYWNrIS5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzaXplU2VydmljZVxuICAgICAgLnN1YnNjcmliZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gICAgdGhpcy5sYXlvdXQoKTtcblxuICAgIC8vIElmIGVtYmVkZGVkIGluIGFuIGVudHJ5IGNvbXBvbmVudCwgaXQgbWF5IGRvIGluaXRpYWwgcmVuZGVyIGF0IGFuIGluYXBwcm9wcmlhdGUgdGltZS5cbiAgICAvLyBuZ1pvbmUub25TdGFibGUgd29uJ3QgZG8gdGhpcyB0cmlja1xuICAgIC8vIFRPRE86IG5lZWQgdG8gY2hhbmdlIHRoaXMuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpFZmZlY3QsIG56RG90UG9zaXRpb24gfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpFZmZlY3QgJiYgIW56RWZmZWN0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgaWYgKG56RG90UG9zaXRpb24gJiYgIW56RG90UG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnpBdXRvUGxheSB8fCAhdGhpcy5uekF1dG9QbGF5U3BlZWQpIHtcbiAgICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcmUoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTGlDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgdGhpcy5nb1RvKHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggLSAxIC0gaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdvVG8oaW5kZXgpO1xuICAgIH1cbiAgfTtcbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xuICB9XG5cbiAgcHJlKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ubyh0aGlzLmFjdGl2ZUluZGV4IC0gMSk7XG4gIH1cblxuICBnb1RvKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzICYmIHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggJiYgIXRoaXMuaXNUcmFuc2l0aW5nKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoO1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICBjb25zdCB0byA9IChpbmRleCArIGxlbmd0aCkgJSBsZW5ndGg7XG4gICAgICB0aGlzLmlzVHJhbnNpdGluZyA9IHRydWU7XG4gICAgICB0aGlzLm56QmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tLCB0byB9KTtcbiAgICAgIHRoaXMuc3RyYXRlZ3khLnN3aXRjaCh0aGlzLmFjdGl2ZUluZGV4LCBpbmRleCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSh0byk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN3aXRjaFN0cmF0ZWd5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnN0cmF0ZWd5LmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIGN1c3RvbSBzdHJhdGVnaWVzIGZpcnN0LlxuICAgIGNvbnN0IGN1c3RvbVN0cmF0ZWd5ID0gdGhpcy5jdXN0b21TdHJhdGVnaWVzID8gdGhpcy5jdXN0b21TdHJhdGVnaWVzLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMubnpFZmZlY3QpIDogbnVsbDtcbiAgICBpZiAoY3VzdG9tU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kgPSBuZXcgKGN1c3RvbVN0cmF0ZWd5LnN0cmF0ZWd5IGFzIE56U2FmZUFueSkodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIsIHRoaXMucGxhdGZvcm0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RyYXRlZ3kgPVxuICAgICAgdGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnXG4gICAgICAgID8gbmV3IE56Q2Fyb3VzZWxUcmFuc2Zvcm1TdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlciwgdGhpcy5wbGF0Zm9ybSlcbiAgICAgICAgOiBuZXcgTnpDYXJvdXNlbE9wYWNpdHlTdHJhdGVneSh0aGlzLCB0aGlzLmNkciwgdGhpcy5yZW5kZXJlciwgdGhpcy5wbGF0Zm9ybSk7XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlTmV4dFRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICBpZiAodGhpcy5uekF1dG9QbGF5ICYmIHRoaXMubnpBdXRvUGxheVNwZWVkID4gMCAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCArIDEpO1xuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyk7XG4gICAgICB0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcmtDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnRzKSB7XG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudHMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgICAgIHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuY2Fyb3VzZWxDb250ZW50cy5sZW5ndGggLSAxIC0gaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS5pc0FjdGl2ZSA9IGluZGV4ID09PSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIGNhcm91c2VsLlxuICAgKi9cbiAgcG9pbnRlckRvd24gPSAoZXZlbnQ6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaXNUcmFuc2l0aW5nICYmIHRoaXMubnpFbmFibGVTd2lwZSkge1xuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSB0aGlzLnNsaWNrTGlzdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0aGlzLm56RHJhZ1NlcnZpY2UucmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQpLnN1YnNjcmliZShcbiAgICAgICAgZGVsdGEgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0cmF0ZWd5Py5kcmFnZ2luZyh0aGlzLnBvaW50ZXJEZWx0YSk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubnpFbmFibGVTd2lwZSAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHhEZWx0YSA9IHRoaXMucG9pbnRlckRlbHRhID8gdGhpcy5wb2ludGVyRGVsdGEueCA6IDA7XG5cbiAgICAgICAgICAgIC8vIFN3aXRjaCB0byBhbm90aGVyIHNsaWRlIGlmIGRlbHRhIGlzIGJpZ2dlciB0aGFuIHRoaXJkIG9mIHRoZSB3aWR0aC5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGVsdGEpID4gdGhpcy5nZXN0dXJlUmVjdCEud2lkdGggLyAzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh4RGVsdGEgPiAwID8gdGhpcy5hY3RpdmVJbmRleCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBsYXlvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kud2l0aENhcm91c2VsQ29udGVudHModGhpcy5jYXJvdXNlbENvbnRlbnRzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==