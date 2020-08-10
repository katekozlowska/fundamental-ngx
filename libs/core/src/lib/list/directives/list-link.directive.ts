import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[fd-list-link], [fdListLink]'
})
export class ListLinkDirective {

    /** Whether list is selected */
    @HostBinding('class.fd-list__link')
    fdListLinkClass = true;

    /** */
    @Input()
    @HostBinding('class.fd-list__link--navigation-indicator')
    navigationIndicator = false;

    /** */
    @Input()
    @HostBinding('class.is-navigated')
    navigated = false;

    /** */
    @Input()
    @HostBinding('class.is-selected')
    selected = false;

    /** Whether tab is selected */
    @HostBinding('class.fd-list__link')
    fdListSecondaryClass = true;
}
