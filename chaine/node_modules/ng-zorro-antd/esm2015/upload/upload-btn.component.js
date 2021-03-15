/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { warn } from 'ng-zorro-antd/core/logger';
import { Observable, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';

const _c0 = ["file"];
const _c1 = ["nz-upload-btn", ""];
const _c2 = ["*"];
export class NzUploadBtnComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.reqs = {};
        this.destroy = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-upload');
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        this.file.nativeElement.click();
    }
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    // skip safari bug
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            const files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        const hie = e.target;
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    traverseFileTree(files) {
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                const dirReader = item.createReader();
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        for (const file of files) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            const fileName = '' + file.name;
            const mimeType = '' + file.type;
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random().toString(36).substring(2);
        }
        return file;
    }
    uploadFiles(fileList) {
        let filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach(f => {
                filters$ = filters$.pipe(switchMap(list => {
                    const fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                }));
            });
        }
        filters$.subscribe(list => {
            list.forEach((file) => {
                this.attachUid(file);
                this.upload(file, list);
            });
        }, e => {
            warn(`Unhandled upload filter error`, e);
        });
    }
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }, e => {
                warn(`Unhandled upload beforeUpload error`, e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    post(file) {
        if (this.destroy) {
            return;
        }
        let process$ = of(file);
        const opt = this.options;
        const { uid } = file;
        const { action, data, headers, transformFile } = opt;
        const args = {
            action: typeof action === 'string' ? action : '',
            name: opt.name,
            headers,
            file,
            postFile: file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? e => {
                    opt.onProgress(e, file);
                }
                : undefined,
            onSuccess: (ret, xhr) => {
                this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: xhr => {
                this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        if (typeof action === 'function') {
            const actionResult = action(file);
            if (actionResult instanceof Observable) {
                process$ = process$.pipe(switchMap(() => actionResult), map(res => {
                    args.action = res;
                    return file;
                }));
            }
            else {
                args.action = actionResult;
            }
        }
        if (typeof transformFile === 'function') {
            const transformResult = transformFile(file);
            process$ = process$.pipe(switchMap(() => (transformResult instanceof Observable ? transformResult : of(transformResult))));
        }
        if (typeof data === 'function') {
            const dataResult = data(file);
            if (dataResult instanceof Observable) {
                process$ = process$.pipe(switchMap(() => dataResult), map(res => {
                    args.data = res;
                    return file;
                }));
            }
            else {
                args.data = dataResult;
            }
        }
        if (typeof headers === 'function') {
            const headersResult = headers(file);
            if (headersResult instanceof Observable) {
                process$ = process$.pipe(switchMap(() => headersResult), map(res => {
                    args.headers = res;
                    return file;
                }));
            }
            else {
                args.headers = headersResult;
            }
        }
        process$.subscribe(newFile => {
            args.postFile = newFile;
            const req$ = (opt.customRequest || this.xhr).call(this, args);
            if (!(req$ instanceof Subscription)) {
                warn(`Must return Subscription type in '[nzCustomRequest]' property`);
            }
            this.reqs[uid] = req$;
            opt.onStart(file);
        });
    }
    xhr(args) {
        const formData = new FormData();
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        formData.append(args.name, args.postFile);
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        const req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((event) => {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    event.percent = (event.loaded / event.total) * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                args.onSuccess(event.body, args.file, event);
            }
        }, err => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    clean(uid) {
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach(uid => this.clean(uid));
        }
    }
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzUploadBtnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.file = _t.first);
    } }, hostVars: 4, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzUploadBtnComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", "0")("role", "button");
        ɵngcc0.ɵɵclassProp("ant-upload-disabled", ctx.options.disabled);
    } }, inputs: { options: "options" }, exportAs: ["nzUploadBtn"], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "input", 0, 1);
        ɵngcc0.ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("multiple", ctx.options.multiple);
        ɵngcc0.ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    } }, encapsulation: 2 });
NzUploadBtnComponent.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: ViewChild, args: ['file', { static: false },] }],
    options: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzUploadBtnComponent, [{
        type: Component,
        args: [{
                selector: '[nz-upload-btn]',
                exportAs: 'nzUploadBtn',
                template: "<input\n  type=\"file\"\n  #file\n  (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory' : null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory' : null\"\n  [multiple]=\"options.multiple\"\n  style=\"display: none;\"\n/>\n<ng-content></ng-content>\n",
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"',
                    '[class.ant-upload-disabled]': 'options.disabled',
                    '(click)': 'onClick()',
                    '(keydown)': 'onKeyDown($event)',
                    '(drop)': 'onFileDrop($event)',
                    '(dragover)': 'onFileDrop($event)'
                },
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }]; }, { file: [{
            type: ViewChild,
            args: ['file', { static: false }]
        }], options: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFvQmhELE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQWlUbEMsWUFBZ0MsSUFBZ0IsRUFBVSxVQUFzQjtBQUNsRixRQURrQyxTQUFJLEdBQUosSUFBSSxDQUFZO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFoVGpGLFNBQUksR0FBb0MsRUFBRSxDQUFDO0FBQzdDLFFBQVUsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUMxQixRQStTSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELFFBQ0ksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNmLFlBQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO0FB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LGtCQUNuQyxrQkFDRCxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUFDO0FBQThDLFlBekIzQyxVQUFVLHVCQTBVSixRQUFRO0FBQU8sWUF6VVYsVUFBVTtBQUFHO0FBQUc7QUFBd0MsbUJBMkJ6RSxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFPLHNCQUMxQyxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelVwbG9hZEZpbGUsIE56VXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcbiAgZXhwb3J0QXM6ICduelVwbG9hZEJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxuICAgICdbYXR0ci5yb2xlXSc6ICdcImJ1dHRvblwiJyxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtZGlzYWJsZWRdJzogJ29wdGlvbnMuZGlzYWJsZWQnLFxuICAgICcoY2xpY2spJzogJ29uQ2xpY2soKScsXG4gICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gICAgJyhkcm9wKSc6ICdvbkZpbGVEcm9wKCRldmVudCknLFxuICAgICcoZHJhZ292ZXIpJzogJ29uRmlsZURyb3AoJGV2ZW50KSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XG4gIHByaXZhdGUgZGVzdHJveSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdmaWxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbGUhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBvcHRpb25zITogWmlwQnV0dG9uT3B0aW9ucztcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8ICF0aGlzLm9wdGlvbnMub3BlbkZpbGVEaWFsb2dPbkNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzLmZpbGUubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBza2lwIHNhZmFyaSBidWdcbiAgb25GaWxlRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdG9yeSkge1xuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyIS5pdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwoZS5kYXRhVHJhbnNmZXIhLmZpbGVzKVxuICAgICAgICAuZmlsdGVyKChmaWxlOiBGaWxlKSA9PiB0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkNoYW5nZShlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGllID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyEpO1xuICAgIGhpZS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCk6IHZvaWQge1xuICAgIGNvbnN0IF90cmF2ZXJzZUZpbGVUcmVlID0gKGl0ZW06IE56U2FmZUFueSwgcGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcbiAgICAgICAgaXRlbS5maWxlKChmaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSkge1xuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhbZmlsZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyUmVhZGVyID0gaXRlbS5jcmVhdGVSZWFkZXIoKTtcblxuICAgICAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoKGVudHJpZXM6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBfdHJhdmVyc2VGaWxlVHJlZShlbnRyaWVJdGVtLCBgJHtwYXRofSR7aXRlbS5uYW1lfS9gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMgYXMgTnpTYWZlQW55KSB7XG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XG4gICAgICBjb25zdCBtaW1lVHlwZSA9ICcnICsgZmlsZS50eXBlO1xuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuXG4gICAgICByZXR1cm4gYWNjZXB0ZWRGaWxlc0FycmF5LnNvbWUodHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSwgZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggLSB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKS5sZW5ndGgpICE9PSAtMVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoL1xcL1xcKiQvLnRlc3QodmFsaWRUeXBlKSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFVpZChmaWxlOiBOelVwbG9hZEZpbGUpOiBOelVwbG9hZEZpbGUge1xuICAgIGlmICghZmlsZS51aWQpIHtcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxOelVwbG9hZEZpbGVbXT4gPSBvZihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlTGlzdCkpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZmlsdGVycyQgPSBmaWx0ZXJzJC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZuUmVzID0gZi5mbihsaXN0KTtcbiAgICAgICAgICAgIHJldHVybiBmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcnMkLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICBsaXN0LmZvckVhY2goKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKGZpbGUpO1xuICAgICAgICAgIHRoaXMudXBsb2FkKGZpbGUsIGxpc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlID0+IHtcbiAgICAgICAgd2FybihgVW5oYW5kbGVkIHVwbG9hZCBmaWx0ZXIgZXJyb3JgLCBlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGxvYWQoZmlsZTogTnpVcGxvYWRGaWxlLCBmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XG4gICAgfVxuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xuICAgIGlmIChiZWZvcmUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICBiZWZvcmUuc3Vic2NyaWJlKFxuICAgICAgICAocHJvY2Vzc2VkRmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBGaWxlXScgfHwgcHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hVaWQocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgICB0aGlzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2Vzc2VkRmlsZSA9PT0gJ2Jvb2xlYW4nICYmIHByb2Nlc3NlZEZpbGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc3QoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlID0+IHtcbiAgICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGJlZm9yZVVwbG9hZCBlcnJvcmAsIGUpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBvc3QoZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJvY2VzcyQ6IE9ic2VydmFibGU8c3RyaW5nIHwgQmxvYiB8IEZpbGUgfCBOelVwbG9hZEZpbGU+ID0gb2YoZmlsZSk7XG4gICAgY29uc3Qgb3B0ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgdWlkIH0gPSBmaWxlO1xuICAgIGNvbnN0IHsgYWN0aW9uLCBkYXRhLCBoZWFkZXJzLCB0cmFuc2Zvcm1GaWxlIH0gPSBvcHQ7XG5cbiAgICBjb25zdCBhcmdzOiBOelVwbG9hZFhIUkFyZ3MgPSB7XG4gICAgICBhY3Rpb246IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gYWN0aW9uIDogJycsXG4gICAgICBuYW1lOiBvcHQubmFtZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBmaWxlLFxuICAgICAgcG9zdEZpbGU6IGZpbGUsXG4gICAgICBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHQud2l0aENyZWRlbnRpYWxzLFxuICAgICAgb25Qcm9ncmVzczogb3B0Lm9uUHJvZ3Jlc3NcbiAgICAgICAgPyBlID0+IHtcbiAgICAgICAgICAgIG9wdC5vblByb2dyZXNzIShlLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgb25TdWNjZXNzOiAocmV0LCB4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xuICAgICAgICBvcHQub25TdWNjZXNzIShyZXQsIGZpbGUsIHhocik7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogeGhyID0+IHtcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xuICAgICAgICBvcHQub25FcnJvciEoeGhyLCBmaWxlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGlvblJlc3VsdCA9IChhY3Rpb24gYXMgKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4gc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KShmaWxlKTtcbiAgICAgIGlmIChhY3Rpb25SZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIHByb2Nlc3MkID0gcHJvY2VzcyQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gYWN0aW9uUmVzdWx0KSxcbiAgICAgICAgICBtYXAocmVzID0+IHtcbiAgICAgICAgICAgIGFyZ3MuYWN0aW9uID0gcmVzO1xuICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MuYWN0aW9uID0gYWN0aW9uUmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtRmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgdHJhbnNmb3JtUmVzdWx0ID0gdHJhbnNmb3JtRmlsZShmaWxlKTtcbiAgICAgIHByb2Nlc3MkID0gcHJvY2VzcyQucGlwZShzd2l0Y2hNYXAoKCkgPT4gKHRyYW5zZm9ybVJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyB0cmFuc2Zvcm1SZXN1bHQgOiBvZih0cmFuc2Zvcm1SZXN1bHQpKSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZGF0YVJlc3VsdCA9IChkYXRhIGFzIChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHt9IHwgT2JzZXJ2YWJsZTx7fT4pKGZpbGUpO1xuICAgICAgaWYgKGRhdGFSZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIHByb2Nlc3MkID0gcHJvY2VzcyQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gZGF0YVJlc3VsdCksXG4gICAgICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgICAgICBhcmdzLmRhdGEgPSByZXM7XG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJncy5kYXRhID0gZGF0YVJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnNSZXN1bHQgPSAoaGVhZGVycyBhcyAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7fSB8IE9ic2VydmFibGU8e30+KShmaWxlKTtcbiAgICAgIGlmIChoZWFkZXJzUmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICBwcm9jZXNzJCA9IHByb2Nlc3MkLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IGhlYWRlcnNSZXN1bHQpLFxuICAgICAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICAgICAgYXJncy5oZWFkZXJzID0gcmVzO1xuICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MuaGVhZGVycyA9IGhlYWRlcnNSZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VzcyQuc3Vic2NyaWJlKG5ld0ZpbGUgPT4ge1xuICAgICAgYXJncy5wb3N0RmlsZSA9IG5ld0ZpbGU7XG4gICAgICBjb25zdCByZXEkID0gKG9wdC5jdXN0b21SZXF1ZXN0IHx8IHRoaXMueGhyKS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaWYgKCEocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgd2FybihgTXVzdCByZXR1cm4gU3Vic2NyaXB0aW9uIHR5cGUgaW4gJ1tuekN1c3RvbVJlcXVlc3RdJyBwcm9wZXJ0eWApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXFzW3VpZF0gPSByZXEkO1xuICAgICAgb3B0Lm9uU3RhcnQhKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB4aHIoYXJnczogTnpVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgYXJncy5kYXRhIVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUhLCBhcmdzLnBvc3RGaWxlIGFzIE56U2FmZUFueSk7XG5cbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xuICAgICAgYXJncy5oZWFkZXJzID0ge307XG4gICAgfVxuICAgIGlmIChhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgICAgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBgWE1MSHR0cFJlcXVlc3RgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ107XG4gICAgfVxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBhcmdzLndpdGhDcmVkZW50aWFscyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSkuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBIdHRwRXZlbnQ8TnpTYWZlQW55PikgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XG4gICAgICAgICAgICAoZXZlbnQgYXMgTnpTYWZlQW55KS5wZXJjZW50ID0gKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsISkgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyZ3Mub25Qcm9ncmVzcyEoZXZlbnQsIGFyZ3MuZmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICB0aGlzLmFib3J0KGFyZ3MuZmlsZSk7XG4gICAgICAgIGFyZ3Mub25FcnJvciEoZXJyLCBhcmdzLmZpbGUpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuKHVpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVxJCA9IHRoaXMucmVxc1t1aWRdO1xuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcbiAgfVxuXG4gIGFib3J0KGZpbGU/OiBOelVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5jbGVhbihmaWxlICYmIGZpbGUudWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKHVpZCA9PiB0aGlzLmNsZWFuKHVpZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXVwbG9hZCcpO1xuXG4gICAgaWYgKCFodHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9XG59XG4iXX0=