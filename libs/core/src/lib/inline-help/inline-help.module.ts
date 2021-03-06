import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineHelpComponent } from './inline-help.component';
import { PopoverModule } from '../popover/public_api';

@NgModule({
    imports: [CommonModule, PopoverModule],
    exports: [InlineHelpComponent],
    declarations: [InlineHelpComponent]
})
export class InlineHelpModule {}
