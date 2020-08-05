import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    Input, OnDestroy,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import { ListItemDirective } from './list-item.directive';
import { MenuKeyboardService } from '../..';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

/**
 * The directive that represents a list.
 * It is used to display a list of items with simple information such as scopes, names, etc.
 */
@Component({
    // tslint:disable-next-line:component-selector
    selector: '[fd-list]',
    templateUrl: `./list.component.html`,
    host: {
        class: 'fd-list',
    },
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements AfterContentInit, OnDestroy {
    /** Whether dropdown mode is included to component, used for Select and Combobox */
    @Input()
    @HostBinding('class.fd-list--dropdown')
    dropdownMode: boolean = false;

    /** Whether multi mode is included to component, used for MultiInput */
    @Input()
    @HostBinding('class.fd-list--multi-input')
    multiInputMode: boolean = false;

    /** Whether compact mode is included to component */
    @Input()
    @HostBinding('class.fd-list--compact')
    compact: boolean = false;

    /** Whether list component contains message */
    @Input()
    @HostBinding('class.fd-list--has-message')
    hasMessage: boolean = false;

    /** Whether list component has removed borders */
    @Input()
    @HostBinding('class.fd-list--no-border')
    noBorder: boolean = false;

    /** Whether list component has removed borders */
    @Input()
    @HostBinding('class.fd-list--navigation')
    hasNavigation: boolean = false;

    /** Whether list component has removed borders */
    @Input()
    @HostBinding('class.fd-list--navigation-indication')
    showNavigationArrow: boolean = false;

    @Input()
    hasDragAndDrop: boolean = false;

    @ContentChildren(ListItemDirective)
    items: QueryList<ListItemDirective>;

    /** An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)  */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    /** An RxJS Subject that will kill the data stream upon queryList changes (for unsubscribing)  */
    private readonly _onRefresh$: Subject<void> = new Subject<void>();

    constructor(
        private _keyboardService: MenuKeyboardService
    ) {}

    ngAfterContentInit() {
        this.items.changes.pipe(takeUntil(this._onDestroy$), startWith(5)).subscribe(() => this._refreshSubscription());
    }

    ngOnDestroy() {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }

    private _refreshSubscription(): void {
        /** Finish all of the streams, form before */
        this._onRefresh$.next();

        /** Merge refresh/destroy observables */
        const refreshObs = merge(this._onRefresh$, this._onDestroy$);

        this.items.forEach((item, index) =>
            item.keyDown
                .pipe(takeUntil(refreshObs))
                .subscribe((event) => this._keyboardService.keyDownHandler(event, index, this.items.toArray()))
        );
    }
}
