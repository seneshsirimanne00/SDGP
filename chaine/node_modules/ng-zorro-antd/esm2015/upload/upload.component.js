import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzUploadBtnComponent } from './upload-btn.component';
import { NzUploadListComponent } from './upload-list.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './upload-list.component';
import * as ɵngcc5 from './upload-btn.component';

const _c0 = ["uploadComp"];
const _c1 = ["listComp"];
const _c2 = function () { return []; };
function NzUploadComponent_ng_template_0_nz_upload_list_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-upload-list", 8, 9);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("display", ctx_r11.nzShowUploadList ? "" : "none");
    ɵngcc0.ɵɵproperty("locale", ctx_r11.locale)("listType", ctx_r11.nzListType)("items", ctx_r11.nzFileList || ɵngcc0.ɵɵpureFunction0(13, _c2))("icons", ctx_r11.nzShowUploadList)("iconRender", ctx_r11.nzIconRender)("previewFile", ctx_r11.nzPreviewFile)("previewIsImage", ctx_r11.nzPreviewIsImage)("onPreview", ctx_r11.nzPreview)("onRemove", ctx_r11.onRemove)("onDownload", ctx_r11.nzDownload)("dir", ctx_r11.dir);
} }
function NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzUploadComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r12.nzFileListRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r12.nzFileList));
} }
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadComponent_ng_template_0_nz_upload_list_0_Template, 2, 14, "nz-upload-list", 6);
    ɵngcc0.ɵɵtemplate(1, NzUploadComponent_ng_template_0_ng_container_1_Template, 2, 4, "ng-container", 7);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.locale && !ctx_r1.nzFileListRender);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzFileListRender);
} }
function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵelementStart(1, "div", 12, 13);
    ɵngcc0.ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵstyleProp("display", ctx_r5.nzShowButton ? "" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r5.classList);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("options", ctx_r5._btnOptions);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.fileDrop($event); });
    ɵngcc0.ɵɵelementStart(2, "div", 16, 13);
    ɵngcc0.ɵɵelementStart(4, "div", 17);
    ɵngcc0.ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r6.classList);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("options", ctx_r6._btnOptions);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵtemplate(2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r0 = ɵngcc0.ɵɵreference(1);
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    const _r9 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.nzListType === "picture-card")("ngIfElse", _r9);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵtemplate(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(5);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
const _c4 = ["*"];
export class NzUploadComponent {
    // #endregion
    constructor(cdr, i18n, directionality) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        // #region fields
        this.nzType = 'select';
        this.nzLimit = 0;
        this.nzSize = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzIconRender = null;
        this.nzFileListRender = null;
        this.nzChange = new EventEmitter();
        this.nzFileListChange = new EventEmitter();
        this.onStart = (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        };
        this.onProgress = (e, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        };
        this.onSuccess = (res, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        };
        this.onError = (err, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.detectChangesList();
        };
        this.onRemove = (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((res) => res)).subscribe(() => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            });
        };
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    get nzShowUploadList() {
        return this._showUploadList;
    }
    zipOptions() {
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                showDownloadIcon: true
            };
        }
        // filters
        const filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.nzLimit)
            });
        }
        if (this.nzSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => w.size / 1024 <= this.nzSize)
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            const types = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            openFileDialogOnClick: this.nzOpenFileDialogOnClick,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters,
            transformFile: this.nzTransformFile,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    // #region upload
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            originFileObj: file
        };
    }
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    // skip safari bug
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    detectChangesList() {
        var _a;
        this.cdr.detectChanges();
        (_a = this.listComp) === null || _a === void 0 ? void 0 : _a.detectChanges();
    }
    setClassMap() {
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some(file => file.status === 'uploading')) {
                subCls.push(`${this.prefixCls}-drag-uploading`);
            }
            if (this.dragState === 'dragover') {
                subCls.push(`${this.prefixCls}-drag-hover`);
            }
        }
        else {
            subCls = [`${this.prefixCls}-select-${this.nzListType}`];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            (this.nzDisabled && `${this.prefixCls}-disabled`) || '',
            (this.dir === 'rtl' && `${this.prefixCls}-rtl`) || ''
        ].filter(item => !!item);
        this.cdr.detectChanges();
    }
    // #endregion
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.setClassMap();
            this.cdr.detectChanges();
        });
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        });
    }
    ngOnChanges() {
        this.zipOptions().setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzUploadComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listComp = _t.first);
    } }, hostVars: 2, hostBindings: function NzUploadComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzIconRender: "nzIconRender", nzFileListRender: "nzFileListRender", nzShowUploadList: "nzShowUploadList", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzHeaders: "nzHeaders", nzRemove: "nzRemove", nzPreview: "nzPreview", nzPreviewFile: "nzPreviewFile", nzPreviewIsImage: "nzPreviewIsImage", nzTransformFile: "nzTransformFile", nzDownload: "nzDownload" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c4, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir", 4, "ngIf"], [4, "ngIf"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], ["listComp", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzUploadComponent_ng_container_6_Template, 7, 4, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r7 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r7);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzUploadListComponent, ɵngcc2.Dir, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgClass, ɵngcc5.NzUploadBtnComponent], encapsulation: 2, changeDetection: 0 });
NzUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzUploadComponent.propDecorators = {
    uploadComp: [{ type: ViewChild, args: ['uploadComp', { static: false },] }],
    listComp: [{ type: ViewChild, args: ['listComp', { static: false },] }],
    nzType: [{ type: Input }],
    nzLimit: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFileType: [{ type: Input }],
    nzAccept: [{ type: Input }],
    nzAction: [{ type: Input }],
    nzDirectory: [{ type: Input }],
    nzOpenFileDialogOnClick: [{ type: Input }],
    nzBeforeUpload: [{ type: Input }],
    nzCustomRequest: [{ type: Input }],
    nzData: [{ type: Input }],
    nzFilter: [{ type: Input }],
    nzFileList: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzHeaders: [{ type: Input }],
    nzListType: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzName: [{ type: Input }],
    nzShowUploadList: [{ type: Input }],
    nzShowButton: [{ type: Input }],
    nzWithCredentials: [{ type: Input }],
    nzRemove: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzPreviewFile: [{ type: Input }],
    nzPreviewIsImage: [{ type: Input }],
    nzTransformFile: [{ type: Input }],
    nzDownload: [{ type: Input }],
    nzIconRender: [{ type: Input }],
    nzFileListRender: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzFileListChange: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzLimit", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzSize", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzUploadComponent, [{
        type: Component,
        args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                template: "<ng-template #list>\n  <nz-upload-list\n    *ngIf=\"locale && !nzFileListRender\"\n    #listComp\n    [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"$any(nzShowUploadList)\"\n    [iconRender]=\"nzIconRender\"\n    [previewFile]=\"nzPreviewFile\"\n    [previewIsImage]=\"nzPreviewIsImage\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"\n    [onDownload]=\"nzDownload\"\n    [dir]=\"dir\"\n  ></nz-upload-list>\n  <ng-container *ngIf=\"nzFileListRender\">\n    <ng-container\n      *ngTemplateOutlet=\"nzFileListRender; context: { $implicit: nzFileList }\"\n    ></ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div\n    [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\"\n  >\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\" class=\"ant-upload-btn\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzType: [{
            type: Input
        }], nzLimit: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzDirectory: [{
            type: Input
        }], nzOpenFileDialogOnClick: [{
            type: Input
        }], nzFilter: [{
            type: Input
        }], nzFileList: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzListType: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzName: [{
            type: Input
        }], nzShowButton: [{
            type: Input
        }], nzWithCredentials: [{
            type: Input
        }], nzIconRender: [{
            type: Input
        }], nzFileListRender: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzFileListChange: [{
            type: Output
        }], nzShowUploadList: [{
            type: Input
        }], uploadComp: [{
            type: ViewChild,
            args: ['uploadComp', { static: false }]
        }], listComp: [{
            type: ViewChild,
            args: ['listComp', { static: false }]
        }], nzFileType: [{
            type: Input
        }], nzAccept: [{
            type: Input
        }], nzAction: [{
            type: Input
        }], nzBeforeUpload: [{
            type: Input
        }], nzCustomRequest: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzHeaders: [{
            type: Input
        }], nzRemove: [{
            type: Input
        }], nzPreview: [{
            type: Input
        }], nzPreviewFile: [{
            type: Input
        }], nzPreviewIsImage: [{
            type: Input
        }], nzTransformFile: [{
            type: Input
        }], nzDownload: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQXlCLE1BQU0sb0JBQW9CLENBQUM7QUFjMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWhFLE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQXdIL0IsYUFBYTtBQUNmLElBQ0UsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQixFQUFzQixjQUE4QjtBQUFJLFFBQTNHLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBUyxTQUFJLEdBQUosSUFB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QUFLLDhCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyx1QkFFVixNQUFNO0FBQUssK0JBQ1gsTUFBTTtBQUFJO0FBM0NhO0FBQzFCLElBRFksV0FBVyxFQUFFO0FBQUU7QUFDRCxrREFEWTtBQUNaO0FBRTFCLElBRlksV0FBVyxFQUFFO0FBQUU7QUFFRCxpREFGVztBQUtWO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVixzREFENkI7QUFDcEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNyQixrRUFEbUQ7QUFNL0I7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHFEQUQyQjtBQUduQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QscURBRDJCO0FBY25CO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVix1REFENkI7QUFDcEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUVqQiw0REFGMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDckQ7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelVwbG9hZEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQge1xuICBOekljb25SZW5kZXJUZW1wbGF0ZSxcbiAgTnpTaG93VXBsb2FkTGlzdCxcbiAgTnpVcGxvYWRDaGFuZ2VQYXJhbSxcbiAgTnpVcGxvYWRGaWxlLFxuICBOelVwbG9hZExpc3RUeXBlLFxuICBOelVwbG9hZFRyYW5zZm9ybUZpbGVUeXBlLFxuICBOelVwbG9hZFR5cGUsXG4gIE56VXBsb2FkWEhSQXJncyxcbiAgVXBsb2FkRmlsdGVyLFxuICBaaXBCdXR0b25PcHRpb25zXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi91cGxvYWQtYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelVwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXVwbG9hZCcsXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdXBsb2FkLXBpY3R1cmUtY2FyZC13cmFwcGVyXSc6ICduekxpc3RUeXBlID09PSBcInBpY3R1cmUtY2FyZFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxpbWl0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpcmVjdG9yeTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TXVsdGlwbGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1VwbG9hZExpc3Q6IEJvb2xlYW5JbnB1dCB8IE56U2hvd1VwbG9hZExpc3Q7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dCdXR0b246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256V2l0aENyZWRlbnRpYWxzOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZENvbXAnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXBsb2FkQ29tcCE6IE56VXBsb2FkQnRuQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdsaXN0Q29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBsaXN0Q29tcCE6IE56VXBsb2FkTGlzdENvbXBvbmVudDtcblxuICBsb2NhbGUhOiBOelVwbG9hZEkxOG5JbnRlcmZhY2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBuelR5cGU6IE56VXBsb2FkVHlwZSA9ICdzZWxlY3QnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekxpbWl0ID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTaXplID0gMDtcblxuICBASW5wdXQoKSBuekZpbGVUeXBlPzogc3RyaW5nO1xuICBASW5wdXQoKSBuekFjY2VwdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBuekFjdGlvbj86IHN0cmluZyB8ICgoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz4pO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3RvcnkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbkZpbGVEaWFsb2dPbkNsaWNrID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpCZWZvcmVVcGxvYWQ/OiAoZmlsZTogTnpVcGxvYWRGaWxlLCBmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBASW5wdXQoKSBuekN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogTnpVcGxvYWRYSFJBcmdzKSA9PiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIG56RGF0YT86IHt9IHwgKChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHt9IHwgT2JzZXJ2YWJsZTx7fT4pO1xuICBASW5wdXQoKSBuekZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXTtcbiAgQElucHV0KCkgbnpGaWxlTGlzdDogTnpVcGxvYWRGaWxlW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpIZWFkZXJzPzoge30gfCAoKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4ge30gfCBPYnNlcnZhYmxlPHt9Pik7XG4gIEBJbnB1dCgpIG56TGlzdFR5cGU6IE56VXBsb2FkTGlzdFR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56TmFtZSA9ICdmaWxlJztcblxuICBwcml2YXRlIF9zaG93VXBsb2FkTGlzdDogYm9vbGVhbiB8IE56U2hvd1VwbG9hZExpc3QgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgTnpTaG93VXBsb2FkTGlzdCkge1xuICAgIHRoaXMuX3Nob3dVcGxvYWRMaXN0ID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB0b0Jvb2xlYW4odmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICBnZXQgbnpTaG93VXBsb2FkTGlzdCgpOiBib29sZWFuIHwgTnpTaG93VXBsb2FkTGlzdCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dVcGxvYWRMaXN0O1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueldpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56UmVtb3ZlPzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBJbnB1dCgpIG56UHJldmlldz86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIG56UHJldmlld0ZpbGU/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIEBJbnB1dCgpIG56UHJldmlld0lzSW1hZ2U/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuelRyYW5zZm9ybUZpbGU/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBOelVwbG9hZFRyYW5zZm9ybUZpbGVUeXBlO1xuICBASW5wdXQoKSBuekRvd25sb2FkPzogKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgQElucHV0KCkgbnpJY29uUmVuZGVyOiBOekljb25SZW5kZXJUZW1wbGF0ZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZpbGVMaXN0UmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPE56VXBsb2FkQ2hhbmdlUGFyYW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelVwbG9hZENoYW5nZVBhcmFtPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpVcGxvYWRGaWxlW10+KCk7XG5cbiAgX2J0bk9wdGlvbnM/OiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubnpTaG93VXBsb2FkTGlzdCkge1xuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxuICAgICAgICBzaG93RG93bmxvYWRJY29uOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBmaWx0ZXJzXG4gICAgY29uc3QgZmlsdGVyczogVXBsb2FkRmlsdGVyW10gPSB0aGlzLm56RmlsdGVyLnNsaWNlKCk7XG4gICAgaWYgKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLm56TGltaXQgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnbGltaXQnKSA9PT0gLTEpIHtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdsaW1pdCcsXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5zbGljZSgtdGhpcy5uekxpbWl0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56U2l6ZSA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdzaXplJykgPT09IC0xKSB7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnc2l6ZScsXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiB3LnNpemUhIC8gMTAyNCA8PSB0aGlzLm56U2l6ZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekZpbGVUeXBlICYmIHRoaXMubnpGaWxlVHlwZS5sZW5ndGggPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAndHlwZScpID09PSAtMSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLm56RmlsZVR5cGUuc3BsaXQoJywnKTtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgZm46IChmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSEpKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2J0bk9wdGlvbnMgPSB7XG4gICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkLFxuICAgICAgYWNjZXB0OiB0aGlzLm56QWNjZXB0LFxuICAgICAgYWN0aW9uOiB0aGlzLm56QWN0aW9uLFxuICAgICAgZGlyZWN0b3J5OiB0aGlzLm56RGlyZWN0b3J5LFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0aGlzLm56T3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgICAgYmVmb3JlVXBsb2FkOiB0aGlzLm56QmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdDogdGhpcy5uekN1c3RvbVJlcXVlc3QsXG4gICAgICBkYXRhOiB0aGlzLm56RGF0YSxcbiAgICAgIGhlYWRlcnM6IHRoaXMubnpIZWFkZXJzLFxuICAgICAgbmFtZTogdGhpcy5uek5hbWUsXG4gICAgICBtdWx0aXBsZTogdGhpcy5uek11bHRpcGxlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLm56V2l0aENyZWRlbnRpYWxzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIHRyYW5zZm9ybUZpbGU6IHRoaXMubnpUcmFuc2Zvcm1GaWxlLFxuICAgICAgb25TdGFydDogdGhpcy5vblN0YXJ0LFxuICAgICAgb25Qcm9ncmVzczogdGhpcy5vblByb2dyZXNzLFxuICAgICAgb25TdWNjZXNzOiB0aGlzLm9uU3VjY2VzcyxcbiAgICAgIG9uRXJyb3I6IHRoaXMub25FcnJvclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7fVxuXG4gIC8vICNyZWdpb24gdXBsb2FkXG5cbiAgcHJpdmF0ZSBmaWxlVG9PYmplY3QoZmlsZTogTnpVcGxvYWRGaWxlKTogTnpVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgIG5hbWU6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgdWlkOiBmaWxlLnVpZCxcbiAgICAgIHJlc3BvbnNlOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgZXJyb3I6IGZpbGUuZXJyb3IsXG4gICAgICBwZXJjZW50OiAwLFxuICAgICAgb3JpZ2luRmlsZU9iajogZmlsZSBhcyBOelNhZmVBbnlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBOelVwbG9hZEZpbGUsIGZpbGVMaXN0OiBOelVwbG9hZEZpbGVbXSk6IE56VXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkID09PSBmaWxlLnVpZClbMF07XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUZpbGVJdGVtKGZpbGU6IE56VXBsb2FkRmlsZSwgZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKTogTnpVcGxvYWRGaWxlW10ge1xuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCAhPT0gZmlsZS51aWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN0YXJ0ID0gKGZpbGU6IE56VXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5uekZpbGVMaXN0KSB7XG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSBbXTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZmlsZVRvT2JqZWN0KGZpbGUpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0LmNvbmNhdCh0YXJnZXRJdGVtKTtcbiAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7IGZpbGU6IHRhcmdldEl0ZW0sIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsIHR5cGU6ICdzdGFydCcgfSk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xuICB9O1xuXG4gIHByaXZhdGUgb25Qcm9ncmVzcyA9IChlOiB7IHBlcmNlbnQ6IG51bWJlciB9LCBmaWxlOiBOelVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBldmVudDogZSxcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcbiAgICAgIHR5cGU6ICdwcm9ncmVzcydcbiAgICB9KTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiB7fSwgZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICB9KTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvbkVycm9yID0gKGVycjoge30sIGZpbGU6IE56VXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXG4gICAgICBmaWxlTGlzdCxcbiAgICAgIHR5cGU6ICdlcnJvcidcbiAgICB9KTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XG4gIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZHJhZ1xuXG4gIHByaXZhdGUgZHJhZ1N0YXRlPzogc3RyaW5nO1xuXG4gIC8vIHNraXAgc2FmYXJpIGJ1Z1xuICBmaWxlRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50eXBlID09PSB0aGlzLmRyYWdTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYWdTdGF0ZSA9IGUudHlwZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBsaXN0XG5cbiAgcHJpdmF0ZSBkZXRlY3RDaGFuZ2VzTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5saXN0Q29tcD8uZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25SZW1vdmUgPSAoZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgdGhpcy51cGxvYWRDb21wLmFib3J0KGZpbGUpO1xuICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xuICAgIGNvbnN0IGZuUmVzID0gdHlwZW9mIHRoaXMubnpSZW1vdmUgPT09ICdmdW5jdGlvbicgPyB0aGlzLm56UmVtb3ZlKGZpbGUpIDogdGhpcy5uelJlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMubnpSZW1vdmU7XG4gICAgKGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpKS5waXBlKGZpbHRlcigocmVzOiBib29sZWFuKSA9PiByZXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5yZW1vdmVGaWxlSXRlbShmaWxlLCB0aGlzLm56RmlsZUxpc3QpO1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcbiAgICAgICAgdHlwZTogJ3JlbW92ZWQnXG4gICAgICB9KTtcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGxldCBzdWJDbHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZHJhZycpIHtcbiAgICAgIGlmICh0aGlzLm56RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykpIHtcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicpIHtcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3ViQ2xzID0gW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXG4gICAgICB0aGlzLnByZWZpeENscyxcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAsXG4gICAgICAuLi5zdWJDbHMsXG4gICAgICAodGhpcy5uekRpc2FibGVkICYmIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGApIHx8ICcnLFxuICAgICAgKHRoaXMuZGlyID09PSAncnRsJyAmJiBgJHt0aGlzLnByZWZpeENsc30tcnRsYCkgfHwgJydcbiAgICBdLmZpbHRlcihpdGVtID0+ICEhaXRlbSk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVXBsb2FkJyk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=