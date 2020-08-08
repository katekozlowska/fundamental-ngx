import { Component, DoCheck, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-list-example',
    templateUrl: './platform-radio-group-list-example.component.html'
})
export class PlatformRadioGroupListExampleComponent implements DoCheck, OnInit {
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    favoriteOption = '';
    favoriteOption2 = 'Winter';

    form1 = new FormGroup({});

    form2 = new FormGroup({});
    form2Data = { radiol2: 'Winter' };

    form3 = new FormGroup({
        month: new FormControl('Winter')
    });

    result1: any;
    result2: any;

    constructor(cd: ChangeDetectorRef) {}

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result1 = this.form1.getRawValue();
            this.result2 = this.form2.getRawValue();
        });
    }

    public changeFunction(): void {
        this.result1 = this.form1.getRawValue();
        this.result2 = this.form2.getRawValue();
    }

    ngDoCheck(): void {
        if (this.form1.controls.radiol1) {
            this.form1.controls.radiol1.setErrors({ invalid: true });
            this.form1.controls.radiol1.markAsTouched();
        }
    }
}
