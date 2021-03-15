/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputNumber, isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';

function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r5.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const formatter_r9 = ctx.$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", formatter_r9(ctx_r8.nzPercent), " ");
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.formatter)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r7.nzPercent));
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵngcc0.ɵɵreference(3);
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.nzFormat)("ngIfElse", _r6);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzShowInfo);
} }
function NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("width", ctx_r14.nzSuccessPercent, "%")("border-radius", ctx_r14.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
} }
function NzProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵelement(2, "div", 15);
    ɵngcc0.ɵɵtemplate(3, NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r12.nzPercent, "%")("border-radius", ctx_r12.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.nzStrokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r12.nzSuccessPercent || ctx_r12.nzSuccessPercent === 0);
} }
function NzProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) { }
function NzProgressComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r10.isSteps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzProgressComponent_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const step_r17 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngStyle", step_r17);
} }
function NzProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) { }
function NzProgressComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r11.steps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.isSteps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isSteps);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const i_r23 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("offset", i_r23.offset)("stop-color", i_r23.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelementStart(1, "linearGradient", 24);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("id", "gradient-" + ctx_r19.gradientId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r19.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "path", 26);
} if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", p_r24.strokePathStyle);
    ɵngcc0.ɵɵattribute("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.nzStrokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.nzPercent ? ctx_r20.strokeWidth : 0);
} }
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
} }
function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 21);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵngcc0.ɵɵelement(3, "path", 22);
    ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");
    ɵngcc0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    ɵngcc0.ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
let gradientIdSeed = 0;
const NZ_CONFIG_MODULE_NAME = 'progress';
const statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
const statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
const defaultFormatter = (p) => `${p}%`;
const ɵ0 = defaultFormatter;
export class NzProgressComponent {
    constructor(cdr, nzConfigService, directionality) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzStrokeColor = undefined;
        this.nzSize = 'default';
        this.nzPercent = 0;
        this.nzStrokeWidth = undefined;
        this.nzGapDegree = undefined;
        this.nzType = 'line';
        this.nzGapPosition = 'top';
        this.nzStrokeLinecap = 'round';
        this.nzSteps = 0;
        this.steps = [];
        /** Gradient style when `nzType` is `line`. */
        this.lineGradient = null;
        /** If user uses gradient color. */
        this.isGradient = false;
        /** If the linear progress is a step progress. */
        this.isSteps = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /** Paths to rendered in the template. */
        this.progressCirclePath = [];
        this.trailPathStyle = null;
        this.dir = 'ltr';
        this.trackByFn = (index) => `${index}`;
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    get formatter() {
        return this.nzFormat || defaultFormatter;
    }
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    get strokeWidth() {
        return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
    }
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    ngOnChanges(changes) {
        const { nzSteps, nzGapPosition, nzStrokeLinecap, nzStrokeColor, nzGapDegree, nzType, nzStatus, nzPercent, nzSuccessPercent, nzStrokeWidth } = changes;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
            this.updateIcon();
        }
        if (nzStrokeColor) {
            this.setStrokeColor();
        }
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
            this.getCirclePaths();
        }
        if (nzPercent || nzSteps || nzStrokeWidth) {
            this.isSteps = this.nzSteps > 0;
            if (this.isSteps) {
                this.getSteps();
            }
        }
    }
    ngOnInit() {
        var _a;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateIcon() {
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate step render configs.
     */
    getSteps() {
        const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
        const stepWidth = this.nzSize === 'small' ? 2 : 14;
        const steps = [];
        for (let i = 0; i < this.nzSteps; i++) {
            let color;
            if (i <= current - 1) {
                color = this.nzStrokeColor;
            }
            const stepStyle = {
                backgroundColor: `${color}`,
                width: `${stepWidth}px`,
                height: `${this.strokeWidth}px`
            };
            steps.push(stepStyle);
        }
        this.steps = steps;
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        const radius = 50 - this.strokeWidth / 2;
        const gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        const len = Math.PI * 2 * radius;
        const gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        let beginPositionX = 0;
        let beginPositionY = -radius;
        let endPositionX = 0;
        let endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((value, index) => {
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : this.nzStrokeColor) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        })
            .reverse();
    }
    setStrokeColor() {
        const color = this.nzStrokeColor;
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient(color);
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient(this.nzStrokeColor);
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    }
}
NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzProgressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzShowInfo: "nzShowInfo", nzWidth: "nzWidth", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzPercent: "nzPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzType: "nzType", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap", nzSteps: "nzSteps", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzStatus: "nzStatus" }, exportAs: ["nzProgress"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 15, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzProgressComponent_div_3_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzType === "line");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCircleStyle);
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgForOf, ɵngcc3.NgStyle], encapsulation: 2, changeDetection: 0 });
NzProgressComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzStrokeColor: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapPosition: [{ type: Input }],
    nzStrokeLinecap: [{ type: Input }],
    nzSteps: [{ type: Input }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", Boolean)
], NzProgressComponent.prototype, "nzShowInfo", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzProgressComponent.prototype, "nzStrokeColor", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzProgressComponent.prototype, "nzSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzProgressComponent.prototype, "nzPercent", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzProgressComponent.prototype, "nzGapDegree", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzProgressComponent.prototype, "nzGapPosition", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzProgressComponent.prototype, "nzSteps", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzProgressComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: `
    <ng-template #progressInfoTemplate>
      <span class="ant-progress-text" *ngIf="nzShowInfo">
        <ng-container *ngIf="(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate">
          <i nz-icon [nzType]="icon"></i>
        </ng-container>
        <ng-template #formatTemplate>
          <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
            {{ formatter(nzPercent) }}
          </ng-container>
        </ng-template>
      </span>
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType == 'line'"
      [class.ant-progress-small]="nzSize == 'small'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      <!-- line progress -->
      <div *ngIf="nzType === 'line'">
        <!-- normal line style -->
        <ng-container *ngIf="!isSteps">
          <div class="ant-progress-outer" *ngIf="!isSteps">
            <div class="ant-progress-inner">
              <div
                class="ant-progress-bg"
                [style.width.%]="nzPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.background]="!isGradient ? nzStrokeColor : null"
                [style.background-image]="isGradient ? lineGradient : null"
                [style.height.px]="strokeWidth"
              ></div>
              <div
                *ngIf="nzSuccessPercent || nzSuccessPercent === 0"
                class="ant-progress-success-bg"
                [style.width.%]="nzSuccessPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.height.px]="strokeWidth"
              ></div>
            </div>
          </div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </ng-container>
        <!-- step style -->
        <div class="ant-progress-steps-outer" *ngIf="isSteps">
          <div *ngFor="let step of steps; let i = index" class="ant-progress-steps-item" [ngStyle]="step"></div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </div>
      </div>

      <!-- circle / dashboard progress -->
      <div
        [style.width.px]="this.nzWidth"
        [style.height.px]="this.nzWidth"
        [style.fontSize.px]="this.nzWidth * 0.15 + 6"
        class="ant-progress-inner"
        [class.ant-progress-circle-gradient]="isGradient"
        *ngIf="isCircleStyle"
      >
        <svg class="ant-progress-circle " viewBox="0 0 100 100">
          <defs *ngIf="isGradient">
            <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop *ngFor="let i of circleGradient" [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
            </linearGradient>
          </defs>
          <path
            class="ant-progress-circle-trail"
            stroke="#f3f3f3"
            fill-opacity="0"
            [attr.stroke-width]="strokeWidth"
            [attr.d]="pathString"
            [ngStyle]="trailPathStyle"
          ></path>
          <path
            *ngFor="let p of progressCirclePath; trackBy: trackByFn"
            class="ant-progress-circle-path"
            fill-opacity="0"
            [attr.d]="pathString"
            [attr.stroke-linecap]="nzStrokeLinecap"
            [attr.stroke]="p.stroke"
            [attr.stroke-width]="nzPercent ? strokeWidth : 0"
            [ngStyle]="p.strokePathStyle"
          ></path>
        </svg>
        <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzShowInfo: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzStrokeColor: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzPercent: [{
            type: Input
        }], nzStrokeWidth: [{
            type: Input
        }], nzGapDegree: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzGapPosition: [{
            type: Input
        }], nzStrokeLinecap: [{
            type: Input
        }], nzSteps: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzSuccessPercent: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }] }); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFJTCxRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXZCLE1BQU0scUJBQXFCLEdBQWdCLFVBQVUsQ0FBQztBQUN0RCxNQUFNLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFDO0FBQ2xDLElBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO0FBQ3RCLElBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO0FB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Q29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOdW1iZXJJbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIE56UHJvZ3Jlc3NDaXJjbGVQYXRoLFxuICBOelByb2dyZXNzQ29sb3JHcmFkaWVudCxcbiAgTnpQcm9ncmVzc0Zvcm1hdHRlcixcbiAgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSxcbiAgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MsXG4gIE56UHJvZ3Jlc3NTdGF0dXNUeXBlLFxuICBOelByb2dyZXNzU3RlcEl0ZW0sXG4gIE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUsXG4gIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSxcbiAgTnpQcm9ncmVzc1R5cGVUeXBlXG59IGZyb20gJy4vdHlwaW5ncyc7XG5pbXBvcnQgeyBoYW5kbGVDaXJjbGVHcmFkaWVudCwgaGFuZGxlTGluZWFyR3JhZGllbnQgfSBmcm9tICcuL3V0aWxzJztcblxubGV0IGdyYWRpZW50SWRTZWVkID0gMDtcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdwcm9ncmVzcyc7XG5jb25zdCBzdGF0dXNJY29uTmFtZU1hcCA9IG5ldyBNYXAoW1xuICBbJ3N1Y2Nlc3MnLCAnY2hlY2snXSxcbiAgWydleGNlcHRpb24nLCAnY2xvc2UnXVxuXSk7XG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1xuICBbJ25vcm1hbCcsICcjMTA4ZWU5J10sXG4gIFsnZXhjZXB0aW9uJywgJyNmZjU1MDAnXSxcbiAgWydzdWNjZXNzJywgJyM4N2QwNjgnXVxuXSk7XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyOiBOelByb2dyZXNzRm9ybWF0dGVyID0gKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ256UHJvZ3Jlc3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3Byb2dyZXNzSW5mb1RlbXBsYXRlPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtdGV4dFwiICpuZ0lmPVwibnpTaG93SW5mb1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpICYmICFuekZvcm1hdDsgZWxzZSBmb3JtYXRUZW1wbGF0ZVwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNmb3JtYXRUZW1wbGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZm9ybWF0dGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbnpQZXJjZW50IH07IGxldCBmb3JtYXR0ZXJcIj5cbiAgICAgICAgICAgIHt7IGZvcm1hdHRlcihuelBlcmNlbnQpIH19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cIidhbnQtcHJvZ3Jlc3MgYW50LXByb2dyZXNzLXN0YXR1cy0nICsgc3RhdHVzXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtbGluZV09XCJuelR5cGUgPT0gJ2xpbmUnXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc21hbGxdPVwibnpTaXplID09ICdzbWFsbCdcIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1zaG93LWluZm9dPVwibnpTaG93SW5mb1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZV09XCJpc0NpcmNsZVN0eWxlXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc3RlcHNdPVwiaXNTdGVwc1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICA+XG4gICAgICA8IS0tIGxpbmUgcHJvZ3Jlc3MgLS0+XG4gICAgICA8ZGl2ICpuZ0lmPVwibnpUeXBlID09PSAnbGluZSdcIj5cbiAgICAgICAgPCEtLSBub3JtYWwgbGluZSBzdHlsZSAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1N0ZXBzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1vdXRlclwiICpuZ0lmPVwiIWlzU3RlcHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWJnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGguJV09XCJuelBlcmNlbnRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cIm56U3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIiFpc0dyYWRpZW50ID8gbnpTdHJva2VDb2xvciA6IG51bGxcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImlzR3JhZGllbnQgPyBsaW5lR3JhZGllbnQgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJuelN1Y2Nlc3NQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQgPT09IDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLXN1Y2Nlc3MtYmdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cIm56U3VjY2Vzc1BlcmNlbnRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cIm56U3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPCEtLSBzdGVwIHN0eWxlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLXN0ZXBzLW91dGVyXCIgKm5nSWY9XCJpc1N0ZXBzXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiYW50LXByb2dyZXNzLXN0ZXBzLWl0ZW1cIiBbbmdTdHlsZV09XCJzdGVwXCI+PC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBjaXJjbGUgLyBkYXNoYm9hcmQgcHJvZ3Jlc3MgLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ0aGlzLm56V2lkdGhcIlxuICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMubnpXaWR0aFwiXG4gICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCJ0aGlzLm56V2lkdGggKiAwLjE1ICsgNlwiXG4gICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCJcbiAgICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1jaXJjbGUtZ3JhZGllbnRdPVwiaXNHcmFkaWVudFwiXG4gICAgICAgICpuZ0lmPVwiaXNDaXJjbGVTdHlsZVwiXG4gICAgICA+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlIFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICAgIDxkZWZzICpuZ0lmPVwiaXNHcmFkaWVudFwiPlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IFtpZF09XCInZ3JhZGllbnQtJyArIGdyYWRpZW50SWRcIiB4MT1cIjEwMCVcIiB5MT1cIjAlXCIgeDI9XCIwJVwiIHkyPVwiMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3AgKm5nRm9yPVwibGV0IGkgb2YgY2lyY2xlR3JhZGllbnRcIiBbYXR0ci5vZmZzZXRdPVwiaS5vZmZzZXRcIiBbYXR0ci5zdG9wLWNvbG9yXT1cImkuY29sb3JcIj48L3N0b3A+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiNmM2YzZjNcIlxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgW2F0dHIuZF09XCJwYXRoU3RyaW5nXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInRyYWlsUGF0aFN0eWxlXCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcCBvZiBwcm9ncmVzc0NpcmNsZVBhdGg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aFwiXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgIFthdHRyLmRdPVwicGF0aFN0cmluZ1wiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2UtbGluZWNhcF09XCJuelN0cm9rZUxpbmVjYXBcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInAuc3Ryb2tlXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJuelBlcmNlbnQgPyBzdHJva2VXaWR0aCA6IDBcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwicC5zdHJva2VQYXRoU3R5bGVcIlxuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTdWNjZXNzUGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelBlcmNlbnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTdHJva2VXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekdhcERlZ3JlZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelN0ZXBzOiBOdW1iZXJJbnB1dDtcblxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2hvd0luZm86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U3Ryb2tlQ29sb3I/OiBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpGb3JtYXQ/OiBOelByb2dyZXNzRm9ybWF0dGVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBlcmNlbnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aD86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXROdW1iZXIoKSBuekdhcERlZ3JlZT86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpTdGF0dXM/OiBOelByb2dyZXNzU3RhdHVzVHlwZTtcbiAgQElucHV0KCkgbnpUeXBlOiBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpHYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJztcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN0ZXBzOiBudW1iZXIgPSAwO1xuXG4gIHN0ZXBzOiBOelByb2dyZXNzU3RlcEl0ZW1bXSA9IFtdO1xuXG4gIC8qKiBHcmFkaWVudCBzdHlsZSB3aGVuIGBuelR5cGVgIGlzIGBsaW5lYC4gKi9cbiAgbGluZUdyYWRpZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAvKiogSWYgdXNlciB1c2VzIGdyYWRpZW50IGNvbG9yLiAqL1xuICBpc0dyYWRpZW50ID0gZmFsc2U7XG5cbiAgLyoqIElmIHRoZSBsaW5lYXIgcHJvZ3Jlc3MgaXMgYSBzdGVwIHByb2dyZXNzLiAqL1xuICBpc1N0ZXBzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVhY2ggcHJvZ3Jlc3Mgd2hvc2UgYG56VHlwZWAgaXMgY2lyY2xlIG9yIGRhc2hib2FyZCBzaG91bGQgaGF2ZSB1bmlxdWUgaWQgdG9cbiAgICogZGVmaW5lIGA8bGluZWFyR3JhZGllbnQ+YC5cbiAgICovXG4gIGdyYWRpZW50SWQgPSBncmFkaWVudElkU2VlZCsrO1xuXG4gIC8qKiBQYXRocyB0byByZW5kZXJlZCBpbiB0aGUgdGVtcGxhdGUuICovXG4gIHByb2dyZXNzQ2lyY2xlUGF0aDogTnpQcm9ncmVzc0NpcmNsZVBhdGhbXSA9IFtdO1xuICBjaXJjbGVHcmFkaWVudD86IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT47XG4gIHRyYWlsUGF0aFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG4gIHBhdGhTdHJpbmc/OiBzdHJpbmc7XG4gIGljb24hOiBzdHJpbmc7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcblxuICBnZXQgZm9ybWF0dGVyKCk6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIge1xuICAgIHJldHVybiB0aGlzLm56Rm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCAodGhpcy5uelR5cGUgPT09ICdsaW5lJyAmJiB0aGlzLm56U2l6ZSAhPT0gJ3NtYWxsJyA/IDggOiA2KTtcbiAgfVxuXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBuelN0ZXBzLFxuICAgICAgbnpHYXBQb3NpdGlvbixcbiAgICAgIG56U3Ryb2tlTGluZWNhcCxcbiAgICAgIG56U3Ryb2tlQ29sb3IsXG4gICAgICBuekdhcERlZ3JlZSxcbiAgICAgIG56VHlwZSxcbiAgICAgIG56U3RhdHVzLFxuICAgICAgbnpQZXJjZW50LFxuICAgICAgbnpTdWNjZXNzUGVyY2VudCxcbiAgICAgIG56U3Ryb2tlV2lkdGhcbiAgICB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuelN0YXR1cykge1xuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLm56U3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgIH1cblxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHRoaXMubnpQZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCkge1xuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuelN0YXR1cyB8fCBuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCB8fCBuelN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICBpZiAobnpTdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgIH1cblxuICAgIGlmIChuekdhcFBvc2l0aW9uIHx8IG56U3Ryb2tlTGluZWNhcCB8fCBuekdhcERlZ3JlZSB8fCBuelR5cGUgfHwgbnpQZXJjZW50IHx8IG56U3Ryb2tlQ29sb3IgfHwgbnpTdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgIH1cblxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdGVwcyB8fCBuelN0cm9rZVdpZHRoKSB7XG4gICAgICB0aGlzLmlzU3RlcHMgPSB0aGlzLm56U3RlcHMgPiAwO1xuICAgICAgaWYgKHRoaXMuaXNTdGVwcykge1xuICAgICAgICB0aGlzLmdldFN0ZXBzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IHN0YXR1c0ljb25OYW1lTWFwLmdldCh0aGlzLnN0YXR1cyk7XG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKHRoaXMuaXNDaXJjbGVTdHlsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgc3RlcCByZW5kZXIgY29uZmlncy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RlcHMoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5uelN0ZXBzICogKHRoaXMubnpQZXJjZW50IC8gMTAwKSk7XG4gICAgY29uc3Qgc3RlcFdpZHRoID0gdGhpcy5uelNpemUgPT09ICdzbWFsbCcgPyAyIDogMTQ7XG5cbiAgICBjb25zdCBzdGVwcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm56U3RlcHM7IGkrKykge1xuICAgICAgbGV0IGNvbG9yO1xuICAgICAgaWYgKGkgPD0gY3VycmVudCAtIDEpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCxcbiAgICAgICAgd2lkdGg6IGAke3N0ZXBXaWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7dGhpcy5zdHJva2VXaWR0aH1weGBcbiAgICAgIH07XG4gICAgICBzdGVwcy5wdXNoKHN0ZXBTdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwYXRocyB3aGVuIHRoZSB0eXBlIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQuXG4gICAqL1xuICBwcml2YXRlIGdldENpcmNsZVBhdGhzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSA/IFt0aGlzLm56U3VjY2Vzc1BlcmNlbnQhLCB0aGlzLm56UGVyY2VudF0gOiBbdGhpcy5uelBlcmNlbnRdO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHNoYXJlZCBzdHlsZXMuXG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gJ3RvcCcgOiAnYm90dG9tJyk7XG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgY29uc3QgZ2FwRGVncmVlID0gdGhpcy5uekdhcERlZ3JlZSB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gMCA6IDc1KTtcblxuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XG5cbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xuXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcbiAgICB9O1xuXG4gICAgLy8gQ2FsY3VsYXRlIHN0eWxlcyBmb3IgZWFjaCBwYXRoLlxuICAgIHRoaXMucHJvZ3Jlc3NDaXJjbGVQYXRoID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdWNjZXNzUGVyY2VudCA9IHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5kZXggPT09IDA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3Ryb2tlOiB0aGlzLmlzR3JhZGllbnQgJiYgIWlzU3VjY2Vzc1BlcmNlbnQgPyBgdXJsKCNncmFkaWVudC0ke3RoaXMuZ3JhZGllbnRJZH0pYCA6IG51bGwsXG4gICAgICAgICAgc3Ryb2tlUGF0aFN0eWxlOiB7XG4gICAgICAgICAgICBzdHJva2U6ICF0aGlzLmlzR3JhZGllbnQgPyAoaXNTdWNjZXNzUGVyY2VudCA/IHN0YXR1c0NvbG9yTWFwLmdldCgnc3VjY2VzcycpIDogKHRoaXMubnpTdHJva2VDb2xvciBhcyBzdHJpbmcpKSA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyxcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KCh2YWx1ZSB8fCAwKSAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGBcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3Ryb2tlQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XG4gICAgY29uc3QgaXNHcmFkaWVudCA9ICh0aGlzLmlzR3JhZGllbnQgPSAhIWNvbG9yICYmIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpO1xuICAgIGlmIChpc0dyYWRpZW50ICYmICF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gaGFuZGxlTGluZWFyR3JhZGllbnQoY29sb3IgYXMgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNHcmFkaWVudCAmJiB0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBoYW5kbGVDaXJjbGVHcmFkaWVudCh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gW107XG4gICAgfVxuICB9XG59XG4iXX0=