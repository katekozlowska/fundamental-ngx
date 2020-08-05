import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[fdListFormItem], [fd-list-form-item]'
})
export class ListFormItemDirective {
    /** @hidden */
    @HostBinding('class.fd-list__form-item')
    fdListFormItem: boolean = true;
}
