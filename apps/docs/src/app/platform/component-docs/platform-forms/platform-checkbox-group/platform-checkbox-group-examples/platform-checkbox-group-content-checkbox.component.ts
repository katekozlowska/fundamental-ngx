import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-content',
    templateUrl: './platform-checkbox-group-content-checkbox.component.html'
})
export class PlatformCheckboxGroupContentCheckboxComponent implements OnInit {
    hobbies = { hobbies: ['coding', 'gardening'] };

    form1 = new FormGroup({});
    form2 = new FormGroup({});
    form3 = new FormGroup({
        visited: new FormControl(['Italy', 'France'])
    });

    // Template driven
    subjects = '';
    reptiles = ['Lizards', 'Snakes'];

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
