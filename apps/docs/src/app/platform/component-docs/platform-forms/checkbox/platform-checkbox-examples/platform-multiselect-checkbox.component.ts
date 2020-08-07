import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fdp-multiselect-checkbox',
    templateUrl: 'platform-multiselect-checkbox.component.html'
})
export class PlatformCozyChekboxExampleComponent implements OnInit {
    field1: string[] = [];
    field2: string[] = ['vega'];
    field3: string[] = [];
    field4: string[] = ['altair', 'deneb'];

    form1 = new FormGroup({});
    form1Data = new Form1data([], ['newton']);

    form2 = new FormGroup({});

    form3 = new FormGroup({});
    form3data = new Form3data(['faraday', 'edison']);

    result: any;

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result = this.form1.getRawValue();
        });
    }

    public checkedChangeFunction(event: any): void { }

    public indeterminateChangeFunction(event: any): void { }

    public changeFunction(event: any): void {
        this.result = this.form1.getRawValue();
    }
}
class Form1data {
    constructor(public einstein: string[], public newton: string[]) { }
}

class Form3data {
    constructor(public scientists: string[]) { }
}
