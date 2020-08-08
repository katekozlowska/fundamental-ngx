import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectItem } from '@fundamental-ngx/platform';

@Component({
    selector: 'fdp-platform-checkbox-group-example',
    templateUrl: './platform-checkbox-group-example.component.html'
})
export class PlatformCheckboxGroupExampleComponent implements OnInit {
    fruits: string[] = ['Apple', 'Banana', 'Grapes'];
    favourites = { fruitsEx: ['banana'] };
    favourites1 = { fruits1: ['Apple'] };
    languages = [
        new LanguageKnown('Java', 'java', false),
        new LanguageKnown('Javascript', 'javascript', true),
        new LanguageKnown('Python', 'python', false),
        new LanguageKnown('GoLang', 'go', true)
    ];

    form1 = new FormGroup({});
    form2 = new FormGroup({});
    form3 = new FormGroup({});

    result1: any;
    result2: any;
    result3: any;

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
        });
    }

    public changeFunction(): void {
        this.result1 = this.form1.getRawValue();
        this.result2 = this.form2.getRawValue();
        this.result3 = this.form3.getRawValue();
    }
}

class LanguageKnown implements SelectItem {
    constructor(public label: string, public value: string, public disabled: boolean) {}
}
