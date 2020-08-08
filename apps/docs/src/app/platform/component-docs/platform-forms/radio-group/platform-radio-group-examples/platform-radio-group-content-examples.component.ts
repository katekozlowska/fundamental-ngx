import { Component, DoCheck, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-content-example',
    templateUrl: './platform-radio-group-content-example.component.html'
})
export class PlatformRadioGroupContentExampleComponent implements DoCheck, OnInit {
    favoriteSeason = '';
    favoriteSeason2 = 'spring';
    favoriteMonth = '';
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    form1 = new FormGroup({});

    form2 = new FormGroup({});

    form3 = new FormGroup({});
    form3Data = { radioc3: 'winter' };

    form4 = new FormGroup({});

    form5 = new FormGroup({
        month: new FormControl('february')
    });

    result1: any;
    result2: any;
    result3: any;
    result4: any;

    constructor(cd: ChangeDetectorRef) {}

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result1 = this.form1.getRawValue();
            this.result2 = this.form2.getRawValue();
            this.result3 = this.form3.getRawValue();
            this.result4 = this.form4.getRawValue();
        });
    }

    public changeFunction(): void {
        this.result1 = this.form1.getRawValue();
        this.result2 = this.form2.getRawValue();
        this.result3 = this.form3.getRawValue();
        this.result4 = this.form4.getRawValue();
    }

    ngDoCheck(): void {
        if (this.form4.controls.radioc4) {
            this.form4.controls.radioc4.setErrors({ invalid: true });
            this.form4.controls.radioc4.markAsTouched();
        }
    }
}
