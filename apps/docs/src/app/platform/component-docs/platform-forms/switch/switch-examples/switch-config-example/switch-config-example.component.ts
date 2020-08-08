import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SwitchConfig } from '@fundamental-ngx/platform';

export const switchConfigFactory = SwitchConfig.createProviderFactory({
    contentDensity: 'compact'
});

export const customSwitchConfigProvider = {
    provide: SwitchConfig,
    useFactory: switchConfigFactory
};

@Component({
    selector: 'fdp-switch-config-example',
    templateUrl: './switch-config-example.component.html',
    providers: [customSwitchConfigProvider]
})
export class SwitchConfigExampleComponent implements OnInit {
    customForm = new FormGroup({
        switch: new FormControl(false)
    });

    result: any;

    constructor(cd: ChangeDetectorRef) {}

    ngOnInit(): void {
        /**
         * Need to add timeout here because FormGroup doesn't
         * broadcast when it's fields are updated.
         */
        setTimeout(() => {
            this.result = this.customForm.getRawValue();
        });
    }

    public changeFunction(): void {
        this.result = this.customForm.getRawValue();
    }
}
