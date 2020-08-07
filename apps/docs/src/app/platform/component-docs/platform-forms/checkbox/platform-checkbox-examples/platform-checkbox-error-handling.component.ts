import { FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fdp-checkbox-error-handling',
    templateUrl: 'platform-checkbox-error-handling.component.html'
})
export class PlatformChekboxStyleComponent implements OnInit {
    customForm: FormGroup;
    data: SomeObject;
    validators: ValidatorFn[];

    result: any;

    constructor() {
        this.customForm = new FormGroup({});
        this.validators = [Validators.requiredTrue];

        this.data = new SomeObject(true, true);
    }

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result = this.customForm.getRawValue();
        });
    }

    onSubmit(): void {
        alert('Status: ' + this.customForm.status);
    }

    changeFunction(): void {
        this.result = this.customForm.getRawValue();
    }
}

class SomeObject {
    constructor(public presence: boolean, public aggrement: boolean) { }
}
