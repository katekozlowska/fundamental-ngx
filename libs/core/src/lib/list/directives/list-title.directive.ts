import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[fd-list-title], [fdListTitle]'
})
export class ListTitleDirective {
    /**
     * Enabling this flag causes forcing title directive to not wrap text,
     * instead of wrapping there will be text truncation
     */
    @Input()
    @HostBinding('class.fd-list__title--no-wrap')
    noWrap = false;

    /** @hidden */
    @HostBinding('class.fd-list__title')
    fdListTitleClass = true;
}
