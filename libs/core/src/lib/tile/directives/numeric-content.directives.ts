import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { applyCssClass } from '../../utils/decorators/apply-css-class.decorator';

type NumericContentState = 'negative' | 'critical' | 'positive' | 'informative' | '' | 'neutral';
type NumericContentSize = 's' | 'm' | 'l' | '';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content]'
})
export class NumericContentDirective implements OnInit, OnChanges {
    /** Apply user custom styles */
    @Input()
    class: string;

    /** @hidden */
    @HostBinding('class.fd-numeric-content')
    baseClass: boolean = true;

    @Input()
    size: NumericContentSize = '';

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return [
            'fd-numeric-content',
            this.size ? 'fd-numeric-content--' + this.size : '',
            this.class,
            this._isSmallTile() ? 'fd-numeric-content--small-tile' : ''
        ]
            .filter((x) => x !== '')
            .join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }

    /** @hidden */
    private _isSmallTile(): boolean {
        let retVal = false;
        if (
            this._elementRef.nativeElement.parentElement &&
            this._elementRef.nativeElement.parentElement.parentElement &&
            this._elementRef.nativeElement.parentElement.parentElement.classList.contains('fd-tile--s')
        ) {
            retVal = true;
        }
        return retVal;
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-launch-icon-container]'
})
export class NumericContentLaunchIconContainerDirective {
    /** @hidden */
    @HostBinding('class.fd-numeric-content__launch-icon-container')
    baseClass: boolean = true;
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-launch-icon]'
})
export class NumericContentLaunchIconDirective implements OnInit, OnChanges {
    /** Apply user custom styles */
    @Input()
    class: string;

    /** Glyph */
    @Input()
    glyph: string;

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return ['fd-numeric-content__launch-icon', this.glyph ? 'sap-icon--' + this.glyph : '', this.class]
            .filter((x) => x !== '')
            .join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-kpi-container]'
})
export class NumericContentKpiContainerDirective {
    /** @hidden */
    @HostBinding('class.fd-numeric-content__kpi-container')
    baseClass: boolean = true;
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-kpi]'
})
export class NumericContentKpiDirective implements OnInit, OnChanges {
    /** State of the KPI. Options are 'neutral' (default), 'positive', 'negative', 'critical', and 'informative'. */
    @Input()
    state: NumericContentState = '';

    /** Apply user custom styles */
    @Input()
    class: string;

    /** Glyph */
    @Input()
    glyph: string;

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return ['fd-numeric-content__kpi', this.state ? 'fd-numeric-content__kpi--' + this.state : '', this.class]
            .filter((x) => x !== '')
            .join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-scale-container]'
})
export class NumericContentScaleContainerDirective {
    /** @hidden */
    @HostBinding('class.fd-numeric-content__scale-container')
    baseClass: boolean = true;
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-scale-arrow]'
})
export class NumericContentScaleArrowDirective {
    /** Apply user custom styles */
    @Input()
    class: string;

    /** Glyph */
    @Input()
    glyph: string;

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return ['fd-numeric-content__scale-arrow', this.glyph ? 'sap-icon--' + this.glyph : '', this.class]
            .filter((x) => x !== '')
            .join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-scale]'
})
export class NumericContentScaleDirective implements OnInit, OnChanges {
    /** State of the SCALE. Options are 'neutral' (default), 'positive', 'negative', 'critical', and 'informative'. */
    @Input()
    state: NumericContentState = '';

    /** Apply user custom styles */
    @Input()
    class: string;

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return ['fd-numeric-content__scale', this.state ? 'fd-numeric-content__scale--' + this.state : '', this.class]
            .filter((x) => x !== '')
            .join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-numeric-content-scale-text]'
})
export class NumericContentScaleTextDirective {
    /** @hidden */
    @HostBinding('class.fd-numeric-content__scale-text')
    baseClass: boolean = true;
}
