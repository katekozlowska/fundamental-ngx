import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';

/**
 * Directive tool to facilitate interacting with a native file input element.
 */
@Directive({
    selector: '[fdFileSelect]'
})
export class FileUploaderSelectDirective {
    /** Whether the input should accept multiple file selections. */
    @Input()
<<<<<<< HEAD
    private multiple = true;
=======
    private multiple: boolean = true;
>>>>>>> [ci skip] Fix(File Uploader):Introduncing new fiori3 file uploader component

    /** Event emitted when files are selected. */
    @Output()
    readonly onFileSelect: EventEmitter<File[]> = new EventEmitter<File[]>();

    /** @hidden */
    @HostBinding('attr.multiple')
    get multipleBinding(): string {
        return this.multiple ? '' : undefined;
    }

    /** @hidden */
    @HostListener('change', ['$event'])
    onChange(event: Event): void {
        if (event.target instanceof HTMLInputElement) {
            const elRef: HTMLInputElement = <HTMLInputElement>event.target;
            const files: FileList = elRef.files;
            const fileArray: File[] = Array.from(files);
            if (files.length) {
                this.onFileSelect.emit(fileArray);
            }
        }
    }
}
