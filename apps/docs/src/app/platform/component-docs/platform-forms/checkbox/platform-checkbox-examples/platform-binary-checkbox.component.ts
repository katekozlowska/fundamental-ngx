import { FormGroup, FormControl } from '@angular/forms';
import { Component, Optional, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';

@Component({
    selector: 'fdp-binary-checkbox',
    templateUrl: 'platform-binary-checkbox.component.html'
})
export class PlatformCompactChekboxExampleComponent implements OnInit {
    customForm: FormGroup = new FormGroup({});
    data: DataObject = new DataObject(false, true);

    yellow = false;
    white = true;
    violet: boolean;

    result: any;

    constructor(cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result = this.customForm.getRawValue();
        });
    }

    public checkedChangeFunction(event: any): void {
    }

    public indeterminateChangeFunction(event: any): void { }

    public changeFunction(event: any): void {
        this.result = this.customForm.getRawValue();
    }
}

class DataObject {
    constructor(public red: boolean, public blue: boolean, @Optional() public green?: boolean) { }
}
