import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { fadeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { FADE_CLASS_NAME_MAP, NZ_CONFIG_MODULE_NAME } from './image-config';
import { NzImagePreviewOptions } from './image-preview-options';
import { getClientSize, getFitContentPosition, getOffset } from './utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from './image-preview-options';
import * as ɵngcc3 from '@angular/cdk/overlay';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/cdk/drag-drop';
import * as ɵngcc6 from 'ng-zorro-antd/icon';

const _c0 = ["imgRef"];
function NzImagePreviewComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzImagePreviewComponent_li_5_Template_li_click_0_listener() { const option_r3 = ctx.$implicit; return option_r3.onClick(); });
    ɵngcc0.ɵɵelement(1, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-image-preview-operations-operation-disabled", ctx_r0.zoomOutDisabled && option_r3.type === "zoomOut");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", option_r3.icon);
} }
function NzImagePreviewComponent_ng_container_7_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 12, 13);
} if (rf & 2) {
    const image_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", image_r5.width)("height", image_r5.height)("transform", ctx_r7.previewImageTransform);
    ɵngcc0.ɵɵattribute("src", image_r5.src, ɵngcc0.ɵɵsanitizeUrl)("alt", image_r5.alt);
} }
function NzImagePreviewComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzImagePreviewComponent_ng_container_7_img_1_Template, 2, 8, "img", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const imageIndex_r6 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.index === imageIndex_r6);
} }
function NzImagePreviewComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵlistener("click", function NzImagePreviewComponent_ng_container_8_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onSwitchLeft($event); });
    ɵngcc0.ɵɵelement(2, "span", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 16);
    ɵngcc0.ɵɵlistener("click", function NzImagePreviewComponent_ng_container_8_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onSwitchRight($event); });
    ɵngcc0.ɵɵelement(4, "span", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-image-preview-switch-left-disabled", ctx_r2.index <= 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("ant-image-preview-switch-right-disabled", ctx_r2.index >= ctx_r2.images.length - 1);
} }
const initialPosition = {
    x: 0,
    y: 0
};
export class NzImagePreviewComponent {
    constructor(cdr, nzConfigService, config, overlayRef) {
        var _a, _b;
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.config = config;
        this.overlayRef = overlayRef;
        this.images = [];
        this.index = 0;
        this.isDragging = false;
        this.visible = true;
        this.animationState = 'enter';
        this.animationStateChanged = new EventEmitter();
        this.previewImageTransform = '';
        this.previewImageWrapperTransform = '';
        this.operations = [
            {
                icon: 'close',
                onClick: () => {
                    this.onClose();
                },
                type: 'close'
            },
            {
                icon: 'zoom-in',
                onClick: () => {
                    this.onZoomIn();
                },
                type: 'zoomIn'
            },
            {
                icon: 'zoom-out',
                onClick: () => {
                    this.onZoomOut();
                },
                type: 'zoomOut'
            },
            {
                icon: 'rotate-right',
                onClick: () => {
                    this.onRotateRight();
                },
                type: 'rotateRight'
            },
            {
                icon: 'rotate-left',
                onClick: () => {
                    this.onRotateLeft();
                },
                type: 'rotateLeft'
            }
        ];
        this.zoomOutDisabled = false;
        this.position = Object.assign({}, initialPosition);
        this.containerClick = new EventEmitter();
        this.closeClick = new EventEmitter();
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.zoom = (_a = this.config.nzZoom) !== null && _a !== void 0 ? _a : 1;
        this.rotate = (_b = this.config.nzRotate) !== null && _b !== void 0 ? _b : 0;
        this.updateZoomOutDisabled();
        this.updatePreviewImageTransform();
        this.updatePreviewImageWrapperTransform();
    }
    get animationDisabled() {
        var _a;
        return (_a = this.config.nzNoAnimation) !== null && _a !== void 0 ? _a : false;
    }
    get maskClosable() {
        var _a, _b;
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        return (_b = (_a = this.config.nzMaskClosable) !== null && _a !== void 0 ? _a : defaultConfig.nzMaskClosable) !== null && _b !== void 0 ? _b : true;
    }
    setImages(images) {
        this.images = images;
        this.cdr.markForCheck();
    }
    switchTo(index) {
        this.index = index;
        this.cdr.markForCheck();
    }
    next() {
        if (this.index < this.images.length - 1) {
            this.reset();
            this.index++;
            this.updatePreviewImageTransform();
            this.updatePreviewImageWrapperTransform();
            this.updateZoomOutDisabled();
            this.cdr.markForCheck();
        }
    }
    prev() {
        if (this.index > 0) {
            this.reset();
            this.index--;
            this.updatePreviewImageTransform();
            this.updatePreviewImageWrapperTransform();
            this.updateZoomOutDisabled();
            this.cdr.markForCheck();
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    onClose() {
        this.closeClick.emit();
    }
    onZoomIn() {
        this.zoom += 1;
        this.updatePreviewImageTransform();
        this.updateZoomOutDisabled();
        this.position = Object.assign({}, initialPosition);
    }
    onZoomOut() {
        if (this.zoom > 1) {
            this.zoom -= 1;
            this.updatePreviewImageTransform();
            this.updateZoomOutDisabled();
            this.position = Object.assign({}, initialPosition);
        }
    }
    onRotateRight() {
        this.rotate += 90;
        this.updatePreviewImageTransform();
    }
    onRotateLeft() {
        this.rotate -= 90;
        this.updatePreviewImageTransform();
    }
    onSwitchLeft(event) {
        event.preventDefault();
        event.stopPropagation();
        this.prev();
    }
    onSwitchRight(event) {
        event.preventDefault();
        event.stopPropagation();
        this.next();
    }
    onContainerClick(e) {
        if (e.target === e.currentTarget && this.maskClosable) {
            this.containerClick.emit();
        }
    }
    onAnimationStart(event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
        }
        else if (event.toState === 'leave') {
            this.setLeaveAnimationClass();
        }
        this.animationStateChanged.emit(event);
    }
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
        }
        else if (event.toState === 'leave') {
            this.setLeaveAnimationClass();
        }
        this.animationStateChanged.emit(event);
    }
    startLeaveAnimation() {
        this.animationState = 'leave';
        this.cdr.markForCheck();
    }
    onDragStarted() {
        this.isDragging = true;
    }
    onDragReleased() {
        this.isDragging = false;
        const width = this.imageRef.nativeElement.offsetWidth * this.zoom;
        const height = this.imageRef.nativeElement.offsetHeight * this.zoom;
        const { left, top } = getOffset(this.imageRef.nativeElement);
        const { width: clientWidth, height: clientHeight } = getClientSize();
        const isRotate = this.rotate % 180 !== 0;
        const fitContentParams = {
            width: isRotate ? height : width,
            height: isRotate ? width : height,
            left,
            top,
            clientWidth,
            clientHeight
        };
        const fitContentPos = getFitContentPosition(fitContentParams);
        if (isNotNil(fitContentPos.x) || isNotNil(fitContentPos.y)) {
            this.position = Object.assign(Object.assign({}, this.position), fitContentPos);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updatePreviewImageTransform() {
        this.previewImageTransform = `scale3d(${this.zoom}, ${this.zoom}, 1) rotate(${this.rotate}deg)`;
    }
    updatePreviewImageWrapperTransform() {
        this.previewImageWrapperTransform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
    }
    updateZoomOutDisabled() {
        this.zoomOutDisabled = this.zoom <= 1;
    }
    setEnterAnimationClass() {
        if (this.animationDisabled) {
            return;
        }
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
        }
    }
    setLeaveAnimationClass() {
        if (this.animationDisabled) {
            return;
        }
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
        }
    }
    reset() {
        this.zoom = 1;
        this.rotate = 0;
        this.position = Object.assign({}, initialPosition);
    }
}
NzImagePreviewComponent.ɵfac = function NzImagePreviewComponent_Factory(t) { return new (t || NzImagePreviewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzImagePreviewOptions), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.OverlayRef)); };
NzImagePreviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzImagePreviewComponent, selectors: [["nz-image-preview"]], viewQuery: function NzImagePreviewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "document"], hostVars: 8, hostBindings: function NzImagePreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵsyntheticHostListener("@fadeMotion.start", function NzImagePreviewComponent_animation_fadeMotion_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@fadeMotion.done", function NzImagePreviewComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        ɵngcc0.ɵɵlistener("click", function NzImagePreviewComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@fadeMotion", ctx.animationState);
        ɵngcc0.ɵɵstyleProp("z-index", ctx.config.nzZIndex);
        ɵngcc0.ɵɵclassProp("ant-image-preview-moving", ctx.isDragging)("ant-image-preview-wrap", true);
    } }, exportAs: ["nzImagePreview"], decls: 10, vars: 6, consts: [[1, "ant-image-preview"], ["tabindex", "0", "aria-hidden", "true", 2, "width", "0", "height", "0", "overflow", "hidden", "outline", "none"], [1, "ant-image-preview-content"], [1, "ant-image-preview-body"], [1, "ant-image-preview-operations"], ["class", "ant-image-preview-operations-operation", 3, "ant-image-preview-operations-operation-disabled", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "ant-image-preview-img-wrapper", 3, "cdkDragFreeDragPosition", "mousedown", "cdkDragReleased"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ant-image-preview-operations-operation", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 1, "ant-image-preview-operations-icon", 3, "nzType"], ["cdkDragHandle", "", "class", "ant-image-preview-img", 3, "width", "height", "transform", 4, "ngIf"], ["cdkDragHandle", "", 1, "ant-image-preview-img"], ["imgRef", ""], [1, "ant-image-preview-switch-left", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "ant-image-preview-switch-right", 3, "click"], ["nz-icon", "", "nzType", "right", "nzTheme", "outline"]], template: function NzImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "ul", 4);
        ɵngcc0.ɵɵtemplate(5, NzImagePreviewComponent_li_5_Template, 2, 3, "li", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵlistener("mousedown", function NzImagePreviewComponent_Template_div_mousedown_6_listener() { return ctx.onDragStarted(); })("cdkDragReleased", function NzImagePreviewComponent_Template_div_cdkDragReleased_6_listener() { return ctx.onDragReleased(); });
        ɵngcc0.ɵɵtemplate(7, NzImagePreviewComponent_ng_container_7_Template, 2, 1, "ng-container", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzImagePreviewComponent_ng_container_8_Template, 5, 4, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(9, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.operations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("transform", ctx.previewImageWrapperTransform);
        ɵngcc0.ɵɵproperty("cdkDragFreeDragPosition", ctx.position);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.images);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.images.length > 1);
    } }, directives: [ɵngcc4.NgForOf, ɵngcc5.CdkDrag, ɵngcc4.NgIf, ɵngcc6.NzIconDirective, ɵngcc5.CdkDragHandle], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
NzImagePreviewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService },
    { type: NzImagePreviewOptions },
    { type: OverlayRef }
];
NzImagePreviewComponent.propDecorators = {
    imageRef: [{ type: ViewChild, args: ['imgRef',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzImagePreviewComponent, [{
        type: Component,
        args: [{
                selector: 'nz-image-preview',
                exportAs: 'nzImagePreview',
                animations: [fadeMotion],
                template: `
    <div class="ant-image-preview">
      <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
      <div class="ant-image-preview-content">
        <div class="ant-image-preview-body">
          <ul class="ant-image-preview-operations">
            <li
              class="ant-image-preview-operations-operation"
              [class.ant-image-preview-operations-operation-disabled]="zoomOutDisabled && option.type === 'zoomOut'"
              (click)="option.onClick()"
              *ngFor="let option of operations"
            >
              <span class="ant-image-preview-operations-icon" nz-icon [nzType]="option.icon" nzTheme="outline"></span>
            </li>
          </ul>
          <div
            class="ant-image-preview-img-wrapper"
            cdkDrag
            [style.transform]="previewImageWrapperTransform"
            [cdkDragFreeDragPosition]="position"
            (mousedown)="onDragStarted()"
            (cdkDragReleased)="onDragReleased()"
          >
            <ng-container *ngFor="let image of images; index as imageIndex">
              <img
                cdkDragHandle
                class="ant-image-preview-img"
                #imgRef
                *ngIf="index === imageIndex"
                [attr.src]="image.src"
                [attr.alt]="image.alt"
                [style.width]="image.width"
                [style.height]="image.height"
                [style.transform]="previewImageTransform"
              />
            </ng-container>
          </div>
          <ng-container *ngIf="images.length > 1">
            <div
              class="ant-image-preview-switch-left"
              [class.ant-image-preview-switch-left-disabled]="index <= 0"
              (click)="onSwitchLeft($event)"
            >
              <span nz-icon nzType="left" nzTheme="outline"></span>
            </div>
            <div
              class="ant-image-preview-switch-right"
              [class.ant-image-preview-switch-right-disabled]="index >= images.length - 1"
              (click)="onSwitchRight($event)"
            >
              <span nz-icon nzType="right" nzTheme="outline"></span>
            </div>
          </ng-container>
        </div>
      </div>
      <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
    </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-image-preview-moving]': 'isDragging',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[class.ant-image-preview-wrap]': 'true',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@fadeMotion]': 'animationState',
                    '(@fadeMotion.start)': 'onAnimationStart($event)',
                    '(@fadeMotion.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    tabindex: '-1',
                    role: 'document'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.NzImagePreviewOptions }, { type: ɵngcc3.OverlayRef }]; }, { imageRef: [{
            type: ViewChild,
            args: ['imgRef']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQVcscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUUsTUFBTSxlQUFlLEdBQUc7QUFDeEIsSUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNOLElBQUUsQ0FBQyxFQUFFLENBQUM7QUFDTixDQUFDLENBQUM7QUFnRkYsTUFBTSxPQUFPLHVCQUF1QjtBQUFHLElBcUVyQyxZQUNVLEdBQXNCLEVBQ3ZCLGVBQWdDLEVBQ2hDLE1BQTZCLEVBQzVCLFVBQXNCO0FBQy9CO0FBQ2MsUUFMTCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3hC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QUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUIsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7MitCQXlEVCxrQkFDRCxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLElBQUksRUFBRSxzQkFDSjs2QkFBa0MsRUFBRSxZQUFZO3FCQUNoRCxnQkFBZ0I7QUFBRSxpQkFBaUIsc0JBQ25DOzJCQUFnQyxFQUFFLE1BQU07YUFDeEMsY0FBYyxFQUFFO1FBQXNCLHNCQUN0QyxlQUFlLEVBQUUsZ0JBQWdCO0NBQ2pDLHFCQUFxQixFQUFFO21CQUEwQixzQkFDakQ7aUJBQW9CLEVBQUUseUJBQXlCLHNCQUMvQyxTQUFTLEVBQUUsMEJBQTBCLHNCQUNyQyxRQUFRLEVBQUUsSUFBSSxzQkFDZCxJQUFJLEVBQUUsVUFBVSxrQkFDakIsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZMQUNJO0FBQUM7QUFBaUQsWUE3R3JELGlCQUFpQjtBQUNqQixZQVFPLGVBQWU7QUFBSSxZQU1WLHFCQUFxQjtBQUFJLFlBbEJsQyxVQUFVO0FBQUc7QUFBRztBQUVqQix1QkFvS0wsU0FBUyxTQUFDLFFBQVE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRkFERV9DTEFTU19OQU1FX01BUCwgTlpfQ09ORklHX01PRFVMRV9OQU1FIH0gZnJvbSAnLi9pbWFnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpJbWFnZSwgTnpJbWFnZVByZXZpZXdPcHRpb25zIH0gZnJvbSAnLi9pbWFnZS1wcmV2aWV3LW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpJbWFnZVByZXZpZXdSZWYgfSBmcm9tICcuL2ltYWdlLXByZXZpZXctcmVmJztcbmltcG9ydCB7IGdldENsaWVudFNpemUsIGdldEZpdENvbnRlbnRQb3NpdGlvbiwgZ2V0T2Zmc2V0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpJbWFnZUNvbnRhaW5lck9wZXJhdGlvbiB7XG4gIGljb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuXG4gIG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgaW5pdGlhbFBvc2l0aW9uID0ge1xuICB4OiAwLFxuICB5OiAwXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1pbWFnZS1wcmV2aWV3JyxcbiAgZXhwb3J0QXM6ICduekltYWdlUHJldmlldycsXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWltYWdlLXByZXZpZXdcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJ3aWR0aDogMDsgaGVpZ2h0OiAwOyBvdmVyZmxvdzogaGlkZGVuOyBvdXRsaW5lOiBub25lO1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LWJvZHlcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJhbnQtaW1hZ2UtcHJldmlldy1vcGVyYXRpb25zXCI+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtaW1hZ2UtcHJldmlldy1vcGVyYXRpb25zLW9wZXJhdGlvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5hbnQtaW1hZ2UtcHJldmlldy1vcGVyYXRpb25zLW9wZXJhdGlvbi1kaXNhYmxlZF09XCJ6b29tT3V0RGlzYWJsZWQgJiYgb3B0aW9uLnR5cGUgPT09ICd6b29tT3V0J1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvcHRpb24ub25DbGljaygpXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcGVyYXRpb25zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtaW1hZ2UtcHJldmlldy1vcGVyYXRpb25zLWljb25cIiBuei1pY29uIFtuelR5cGVdPVwib3B0aW9uLmljb25cIiBuelRoZW1lPVwib3V0bGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LWltZy13cmFwcGVyXCJcbiAgICAgICAgICAgIGNka0RyYWdcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwicHJldmlld0ltYWdlV3JhcHBlclRyYW5zZm9ybVwiXG4gICAgICAgICAgICBbY2RrRHJhZ0ZyZWVEcmFnUG9zaXRpb25dPVwicG9zaXRpb25cIlxuICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbkRyYWdTdGFydGVkKClcIlxuICAgICAgICAgICAgKGNka0RyYWdSZWxlYXNlZCk9XCJvbkRyYWdSZWxlYXNlZCgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBpbWFnZXM7IGluZGV4IGFzIGltYWdlSW5kZXhcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNka0RyYWdIYW5kbGVcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LWltZ1wiXG4gICAgICAgICAgICAgICAgI2ltZ1JlZlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT09IGltYWdlSW5kZXhcIlxuICAgICAgICAgICAgICAgIFthdHRyLnNyY109XCJpbWFnZS5zcmNcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWFnZS5hbHRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJpbWFnZS53aWR0aFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJpbWFnZS5oZWlnaHRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwicHJldmlld0ltYWdlVHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LXN3aXRjaC1sZWZ0XCJcbiAgICAgICAgICAgICAgW2NsYXNzLmFudC1pbWFnZS1wcmV2aWV3LXN3aXRjaC1sZWZ0LWRpc2FibGVkXT1cImluZGV4IDw9IDBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25Td2l0Y2hMZWZ0KCRldmVudClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImxlZnRcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImFudC1pbWFnZS1wcmV2aWV3LXN3aXRjaC1yaWdodFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5hbnQtaW1hZ2UtcHJldmlldy1zd2l0Y2gtcmlnaHQtZGlzYWJsZWRdPVwiaW5kZXggPj0gaW1hZ2VzLmxlbmd0aCAtIDFcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25Td2l0Y2hSaWdodCgkZXZlbnQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJyaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwid2lkdGg6IDA7IGhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgb3V0bGluZTogbm9uZTtcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtaW1hZ2UtcHJldmlldy1tb3ZpbmddJzogJ2lzRHJhZ2dpbmcnLFxuICAgICdbc3R5bGUuekluZGV4XSc6ICdjb25maWcubnpaSW5kZXgnLFxuICAgICdbY2xhc3MuYW50LWltYWdlLXByZXZpZXctd3JhcF0nOiAndHJ1ZScsXG4gICAgJ1tALmRpc2FibGVkXSc6ICdjb25maWcubnpOb0FuaW1hdGlvbicsXG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnYW5pbWF0aW9uU3RhdGUnLFxuICAgICcoQGZhZGVNb3Rpb24uc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAZmFkZU1vdGlvbi5kb25lKSc6ICdvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KScsXG4gICAgJyhjbGljayknOiAnb25Db250YWluZXJDbGljaygkZXZlbnQpJyxcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICByb2xlOiAnZG9jdW1lbnQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbWFnZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpbWFnZXM6IE56SW1hZ2VbXSA9IFtdO1xuICBpbmRleCA9IDA7XG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgdmlzaWJsZSA9IHRydWU7XG4gIGFuaW1hdGlvblN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2xlYXZlJyA9ICdlbnRlcic7XG4gIGFuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgcHJldmlld0ltYWdlVHJhbnNmb3JtID0gJyc7XG4gIHByZXZpZXdJbWFnZVdyYXBwZXJUcmFuc2Zvcm0gPSAnJztcbiAgb3BlcmF0aW9uczogTnpJbWFnZUNvbnRhaW5lck9wZXJhdGlvbltdID0gW1xuICAgIHtcbiAgICAgIGljb246ICdjbG9zZScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgfSxcbiAgICAgIHR5cGU6ICdjbG9zZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICd6b29tLWluJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vblpvb21JbigpO1xuICAgICAgfSxcbiAgICAgIHR5cGU6ICd6b29tSW4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnem9vbS1vdXQnLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICB0aGlzLm9uWm9vbU91dCgpO1xuICAgICAgfSxcbiAgICAgIHR5cGU6ICd6b29tT3V0J1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ3JvdGF0ZS1yaWdodCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMub25Sb3RhdGVSaWdodCgpO1xuICAgICAgfSxcbiAgICAgIHR5cGU6ICdyb3RhdGVSaWdodCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdyb3RhdGUtbGVmdCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMub25Sb3RhdGVMZWZ0KCk7XG4gICAgICB9LFxuICAgICAgdHlwZTogJ3JvdGF0ZUxlZnQnXG4gICAgfVxuICBdO1xuXG4gIHpvb21PdXREaXNhYmxlZCA9IGZhbHNlO1xuICBwb3NpdGlvbiA9IHsgLi4uaW5pdGlhbFBvc2l0aW9uIH07XG4gIHByZXZpZXdSZWYhOiBOekltYWdlUHJldmlld1JlZjtcbiAgY29udGFpbmVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGNsb3NlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW1nUmVmJykgaW1hZ2VSZWYhOiBFbGVtZW50UmVmPEhUTUxJbWFnZUVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgem9vbTogbnVtYmVyO1xuICBwcml2YXRlIHJvdGF0ZTogbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBnZXQgYW5pbWF0aW9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm56Tm9BbmltYXRpb24gPz8gZmFsc2U7XG4gIH1cblxuICBnZXQgbWFza0Nsb3NhYmxlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWc6IE56U2FmZUFueSA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpIHx8IHt9O1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5uek1hc2tDbG9zYWJsZSA/PyBkZWZhdWx0Q29uZmlnLm56TWFza0Nsb3NhYmxlID8/IHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IE56SW1hZ2VQcmV2aWV3T3B0aW9ucyxcbiAgICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWZcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy56b29tID0gdGhpcy5jb25maWcubnpab29tID8/IDE7XG4gICAgdGhpcy5yb3RhdGUgPSB0aGlzLmNvbmZpZy5uelJvdGF0ZSA/PyAwO1xuICAgIHRoaXMudXBkYXRlWm9vbU91dERpc2FibGVkKCk7XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3SW1hZ2VUcmFuc2Zvcm0oKTtcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdJbWFnZVdyYXBwZXJUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIHNldEltYWdlcyhpbWFnZXM6IE56SW1hZ2VbXSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc3dpdGNoVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdJbWFnZVRyYW5zZm9ybSgpO1xuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3SW1hZ2VXcmFwcGVyVHJhbnNmb3JtKCk7XG4gICAgICB0aGlzLnVwZGF0ZVpvb21PdXREaXNhYmxlZCgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmRleCA+IDApIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0ltYWdlVHJhbnNmb3JtKCk7XG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdJbWFnZVdyYXBwZXJUcmFuc2Zvcm0oKTtcbiAgICAgIHRoaXMudXBkYXRlWm9vbU91dERpc2FibGVkKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VDbGljay5lbWl0KCk7XG4gIH1cblxuICBvblpvb21JbigpOiB2b2lkIHtcbiAgICB0aGlzLnpvb20gKz0gMTtcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdJbWFnZVRyYW5zZm9ybSgpO1xuICAgIHRoaXMudXBkYXRlWm9vbU91dERpc2FibGVkKCk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgLi4uaW5pdGlhbFBvc2l0aW9uIH07XG4gIH1cblxuICBvblpvb21PdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuem9vbSA+IDEpIHtcbiAgICAgIHRoaXMuem9vbSAtPSAxO1xuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3SW1hZ2VUcmFuc2Zvcm0oKTtcbiAgICAgIHRoaXMudXBkYXRlWm9vbU91dERpc2FibGVkKCk7XG4gICAgICB0aGlzLnBvc2l0aW9uID0geyAuLi5pbml0aWFsUG9zaXRpb24gfTtcbiAgICB9XG4gIH1cblxuICBvblJvdGF0ZVJpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMucm90YXRlICs9IDkwO1xuICAgIHRoaXMudXBkYXRlUHJldmlld0ltYWdlVHJhbnNmb3JtKCk7XG4gIH1cblxuICBvblJvdGF0ZUxlZnQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3RhdGUgLT0gOTA7XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3SW1hZ2VUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIG9uU3dpdGNoTGVmdChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcmV2KCk7XG4gIH1cblxuICBvblN3aXRjaFJpZ2h0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0ICYmIHRoaXMubWFza0Nsb3NhYmxlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckNsaWNrLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLnNldEVudGVyQW5pbWF0aW9uQ2xhc3MoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdsZWF2ZScpIHtcbiAgICAgIHRoaXMuc2V0TGVhdmVBbmltYXRpb25DbGFzcygpO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICB0aGlzLnNldEVudGVyQW5pbWF0aW9uQ2xhc3MoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdsZWF2ZScpIHtcbiAgICAgIHRoaXMuc2V0TGVhdmVBbmltYXRpb25DbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0TGVhdmVBbmltYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdsZWF2ZSc7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkRyYWdTdGFydGVkKCk6IHZvaWQge1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBvbkRyYWdSZWxlYXNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW1hZ2VSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuem9vbTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmltYWdlUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogdGhpcy56b29tO1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBnZXRPZmZzZXQodGhpcy5pbWFnZVJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCB7IHdpZHRoOiBjbGllbnRXaWR0aCwgaGVpZ2h0OiBjbGllbnRIZWlnaHQgfSA9IGdldENsaWVudFNpemUoKTtcbiAgICBjb25zdCBpc1JvdGF0ZSA9IHRoaXMucm90YXRlICUgMTgwICE9PSAwO1xuICAgIGNvbnN0IGZpdENvbnRlbnRQYXJhbXMgPSB7XG4gICAgICB3aWR0aDogaXNSb3RhdGUgPyBoZWlnaHQgOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaXNSb3RhdGUgPyB3aWR0aCA6IGhlaWdodCxcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICBjbGllbnRXaWR0aCxcbiAgICAgIGNsaWVudEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgZml0Q29udGVudFBvcyA9IGdldEZpdENvbnRlbnRQb3NpdGlvbihmaXRDb250ZW50UGFyYW1zKTtcbiAgICBpZiAoaXNOb3ROaWwoZml0Q29udGVudFBvcy54KSB8fCBpc05vdE5pbChmaXRDb250ZW50UG9zLnkpKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0geyAuLi50aGlzLnBvc2l0aW9uLCAuLi5maXRDb250ZW50UG9zIH07XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcmV2aWV3SW1hZ2VUcmFuc2Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aWV3SW1hZ2VUcmFuc2Zvcm0gPSBgc2NhbGUzZCgke3RoaXMuem9vbX0sICR7dGhpcy56b29tfSwgMSkgcm90YXRlKCR7dGhpcy5yb3RhdGV9ZGVnKWA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXZpZXdJbWFnZVdyYXBwZXJUcmFuc2Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aWV3SW1hZ2VXcmFwcGVyVHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5wb3NpdGlvbi54fXB4LCAke3RoaXMucG9zaXRpb24ueX1weCwgMClgO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVab29tT3V0RGlzYWJsZWQoKTogdm9pZCB7XG4gICAgdGhpcy56b29tT3V0RGlzYWJsZWQgPSB0aGlzLnpvb20gPD0gMTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW50ZXJBbmltYXRpb25DbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25EaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIGlmIChiYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKEZBREVfQ0xBU1NfTkFNRV9NQVAuZW50ZXIpO1xuICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoRkFERV9DTEFTU19OQU1FX01BUC5lbnRlckFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMZWF2ZUFuaW1hdGlvbkNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gICAgaWYgKGJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoRkFERV9DTEFTU19OQU1FX01BUC5sZWF2ZSk7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChGQURFX0NMQVNTX05BTUVfTUFQLmxlYXZlQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuem9vbSA9IDE7XG4gICAgdGhpcy5yb3RhdGUgPSAwO1xuICAgIHRoaXMucG9zaXRpb24gPSB7IC4uLmluaXRpYWxQb3NpdGlvbiB9O1xuICB9XG59XG4iXX0=