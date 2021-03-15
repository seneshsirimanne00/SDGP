/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { warn } from 'ng-zorro-antd/core/logger';
import { BehaviorSubject } from 'rxjs';
import en_US from './languages/en_US';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
import * as ɵngcc0 from '@angular/core';
export class NzI18nService {
    constructor(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    get localeChange() {
        return this._change.asObservable();
    }
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    translate(path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        let content = this._getObjectPath(this._locale, path);
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach(key => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key])));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    getLocale() {
        return this._locale;
    }
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    setDateLocale(dateLocale) {
        this.dateLocale = dateLocale;
    }
    getDateLocale() {
        return this.dateLocale;
    }
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    getLocaleData(path, defaultValue) {
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
        }
        return result || defaultValue || this._getObjectPath(en_US, path) || {};
    }
    _getObjectPath(obj, path) {
        let res = obj;
        const paths = path.split('.');
        const depth = paths.length;
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
NzI18nService.ɵfac = function NzI18nService_Factory(t) { return new (t || NzI18nService)(ɵngcc0.ɵɵinject(NZ_I18N, 8), ɵngcc0.ɵɵinject(NZ_DATE_LOCALE, 8)); };
NzI18nService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzI18nService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_I18N]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_DATE_LOCALE]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2kxOG4vbnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRDtBQUdDOztBQUNELE1BQU0sT0FBTyxhQUFhO0FBQzFCLElBUUUsWUFBeUMsTUFBdUIsRUFBc0MsVUFBc0I7QUFDOUgsUUFSVSxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RSxRQU9JLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFSRSxJQUFJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFNRSw4RUFBOEU7QUFDaEYsSUFBRSxnREFBZ0Q7QUFDbEQsSUFBRSxTQUFTLENBQUMsSUFBWSxFQUFFLElBQWdCO0FBQUksUUFDMUMsc0ZBQXNGO0FBQzFGLFFBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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QUFDLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSDs2SkFBQztBQUNELGtPQXhGSztBQUFDO0VBSEwsVUFBVSxTQUFDLGtCQUNWLFVBQVUsRUFBRSxNQUFNLGNBQ25CLHZFQUVlLDRDQVFELFFBQVEsWUFBSSxNQUFNLFNBQUMsT0FBTztBQUFTLDRDQUFtQixRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7QUFBUTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgZW5fVVMgZnJvbSAnLi9sYW5ndWFnZXMvZW5fVVMnO1xuXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xuaW1wb3J0IHsgRGF0ZUxvY2FsZSwgTnpJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOWl9EQVRFX0xPQ0FMRSwgTlpfSTE4TiB9IGZyb20gJy4vbnotaTE4bi50b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56STE4blNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2NhbGUhOiBOekkxOG5JbnRlcmZhY2U7XG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xuICBwcml2YXRlIGRhdGVMb2NhbGUhOiBEYXRlTG9jYWxlO1xuXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxOekkxOG5JbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOWl9JMThOKSBsb2NhbGU6IE56STE4bkludGVyZmFjZSwgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0xPQ0FMRSkgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aF9DTik7XG4gICAgdGhpcy5zZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUgfHwgbnVsbCk7XG4gIH1cblxuICAvLyBbTk9URV0gUGVyZm9ybWFuY2UgaXNzdWU6IHRoaXMgbWV0aG9kIG1heSBjYWxsZWQgYnkgZXZlcnkgY2hhbmdlIGRldGVjdGlvbnNcbiAgLy8gVE9ETzogY2FjaGUgbW9yZSBkZWVwbHkgcGF0aHMgZm9yIHBlcmZvcm1hbmNlXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBOelNhZmVBbnkpOiBzdHJpbmcge1xuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgYXMgc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IChjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVtrZXldKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cbiAgICogTk9URTogSWYgY2FsbGVkIGF0IHJ1bnRpbWUsIHJlbmRlcmVkIGludGVyZmFjZSBtYXkgbm90IGNoYW5nZSBhbG9uZyB3aXRoIHRoZSBsb2NhbGUgY2hhbmdlLFxuICAgKiBiZWNhdXNlIHRoaXMgZG8gbm90IHRyaWdnZXIgYW5vdGhlciByZW5kZXIgc2NoZWR1bGUuXG4gICAqXG4gICAqIEBwYXJhbSBsb2NhbGUgVGhlIHRyYW5zbGF0aW5nIGxldHRlcnNcbiAgICovXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmxvY2FsZSA9PT0gbG9jYWxlLmxvY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPyB0aGlzLl9sb2NhbGUubG9jYWxlIDogJyc7XG4gIH1cblxuICBzZXREYXRlTG9jYWxlKGRhdGVMb2NhbGU6IERhdGVMb2NhbGUpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVMb2NhbGUgPSBkYXRlTG9jYWxlO1xuICB9XG5cbiAgZ2V0RGF0ZUxvY2FsZSgpOiBEYXRlTG9jYWxlIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlTG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb2NhbGUgZGF0YVxuICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxuICAgKi9cbiAgZ2V0TG9jYWxlRGF0YShwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IE56U2FmZUFueSk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGF0aCA/IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSA6IHRoaXMuX2xvY2FsZTtcblxuICAgIGlmICghcmVzdWx0ICYmICFkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHdhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb25zIGZvciBcIiR7cGF0aH1cIiBpbiBsYW5ndWFnZSBcIiR7dGhpcy5fbG9jYWxlLmxvY2FsZX1cIi5cbllvdSBjYW4gdXNlIFwiTnpJMThuU2VydmljZS5zZXRMb2NhbGVcIiBhcyBhIHRlbXBvcmFyeSBmaXguXG5XZWxjb21lIHRvIHN1Ym1pdCBhIHB1bGwgcmVxdWVzdCB0byBoZWxwIHVzIG9wdGltaXplIHRoZSB0cmFuc2xhdGlvbnMhXG5odHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9DT05UUklCVVRJTkcubWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZSB8fCB0aGlzLl9nZXRPYmplY3RQYXRoKGVuX1VTLCBwYXRoKSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE9iamVjdFBhdGgob2JqOiBJbmRleGFibGVPYmplY3QsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG9iamVjdCB8IE56U2FmZUFueSB7XG4gICAgbGV0IHJlcyA9IG9iajtcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBjb25zdCBkZXB0aCA9IHBhdGhzLmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xuICAgICAgcmVzID0gcmVzW3BhdGhzW2luZGV4KytdXTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XG4gIH1cbn1cbiJdfQ==