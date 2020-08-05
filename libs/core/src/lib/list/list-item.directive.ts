import { Component, ContentChild, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox/checkbox.component';
import { DefaultMenuItem } from '../menu/default-menu-item.class';

/**
 * The component that represents a list item.
 * The list item can contain plain text, links or actions.
 */
@Component({
    // tslint:disable-next-line:component-selector
    selector: '[fdListItem] ,[fd-list-item]',
    templateUrl: './list-item.component.html',
    host: {
        class: 'fd-list__item',
        tabindex: '0'
    }
})
export class ListItemDirective implements DefaultMenuItem {
    /** Whether list is selected */
    @Input()
    @HostBinding('attr.aria-selected')
    @HostBinding('class.is-selected')
    selected = false;

    /** Whether there is no data inside list item */
    @Input()
    @HostBinding('class.fd-list__item--no-data')
    noData = false;

    /** Whether there is item performs some action */
    @Input()
    @HostBinding('class.fd-list__item--action')
    action = false;

    @Output()
    keyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** @hidden */
    @ContentChild(CheckboxComponent)
    checkbox: CheckboxComponent;

    constructor(
        public elementRef: ElementRef
    ) {}


    /** @hidden */
    @HostListener('keydown', ['$event'])
    keydownHandler(event: KeyboardEvent): void {
        this.keyDown.emit(event);
    }

    click(): void {
        this.elementRef.nativeElement.click();
    }

    focus(): void {
        this.elementRef.nativeElement.focus();
    }
}
