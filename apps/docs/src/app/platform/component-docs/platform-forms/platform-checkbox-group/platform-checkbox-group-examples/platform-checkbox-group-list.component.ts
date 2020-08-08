import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-list',
    templateUrl: './platform-checkbox-group-list.component.html'
})
export class PlatformCheckboxGroupListComponent implements OnInit {
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    sports: string[] = ['cycling', 'running', 'visit gym', 'swimming'];
    phoneslist: string[] = ['Samsung', 'Apple', 'OnePlus', 'Redmi'];

    // data passing to form
    selectedPhones = { phones: ['Samsung', 'OnePlus'] };

    form1 = new FormGroup({});
    form2 = new FormGroup({});
    form3 = new FormGroup({
        sports: new FormControl(['cycling', 'running'])
    });

    // template driven
    countrySeason = '';
    selectedSports = ['running', 'swimming'];

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
}
