import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { API_FILES } from '../../api-files';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListDocsComponent } from './list-docs.component';
import { ListInfiniteScrollExampleComponent } from './examples/list-infinite-scroll-example.component';
import {
    ListComplexExampleComponent,
    ListExampleComponent,
    ListIconExampleComponent,
    ListSecondaryExampleComponent
} from './examples/list-examples.component';
import {
    CheckboxModule,
    InfiniteScrollModule,
    LinkModule,
    ListModule,
    RadioModule,
    DragAndDropModule,
    BusyIndicatorModule
} from '@fundamental-ngx/core';
import { ListDndExampleComponent } from './examples/list-dnd-example/list-dnd-example.component';
import { ListSelectionExampleComponent } from './examples/list-selection-example/list-selection-example.component';
import { ListBorderlessExampleComponent } from './examples/list-borderless-example/list-borderless-example.component';
import { ListActionExampleComponent } from './examples/list-action-example/list-action-example.component';
import { ListNavigationExampleComponent } from './examples/list-navigation-example/list-navigation-example.component';

const routes: Routes = [
    {
        path: '',
        component: ListHeaderComponent,
        children: [
            { path: '', component: ListDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.list } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        ListModule,
        LinkModule,
        CheckboxModule,
        RadioModule,
        InfiniteScrollModule,
        DragAndDropModule,
        BusyIndicatorModule
    ],
    exports: [RouterModule],
    declarations: [
        ListDocsComponent,
        ListHeaderComponent,
        ListExampleComponent,
        ListInfiniteScrollExampleComponent,
        ListSecondaryExampleComponent,
        ListIconExampleComponent,
        ListComplexExampleComponent,
        ListDndExampleComponent,
        ListSelectionExampleComponent,
        ListBorderlessExampleComponent,
        ListActionExampleComponent,
        ListNavigationExampleComponent
    ]
})
export class ListDocsModule {}
