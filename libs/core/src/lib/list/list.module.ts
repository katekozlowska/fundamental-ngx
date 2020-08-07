import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';
import {
    ListIconDirective,
    ListLabelDirective,
    ListSecondaryDirective,
} from './list.directives';
import { ListMessageDirective } from './list-message.directive';
import { ListLinkDirective } from './directives/list-link.directive';
import { ListFormItemDirective } from './directives/list-form-item.directive';
import { FormModule } from '../form/form.module';
import { ListFooterDirective } from './directives/list-footer.directive';
import { ListTitleDirective } from './directives/list-title.directive';
import { ListGroupHeaderDirective } from './directives/list-group-header.directive';
@NgModule({
    declarations: [
        ListComponent,
        ListItemComponent,
        ListLabelDirective,
        ListTitleDirective,
        ListSecondaryDirective,
        ListIconDirective,
        ListFooterDirective,
        ListGroupHeaderDirective,
        ListMessageDirective,
        ListLinkDirective,
        ListFormItemDirective,
    ],
    imports: [CommonModule, FormModule],
    exports: [
        ListComponent,
        ListItemComponent,
        ListLabelDirective,
        ListTitleDirective,
        ListFooterDirective,
        ListGroupHeaderDirective,
        ListSecondaryDirective,
        ListIconDirective,
        ListMessageDirective,
        ListLinkDirective,
        ListFormItemDirective,
    ]
})
export class ListModule {}
