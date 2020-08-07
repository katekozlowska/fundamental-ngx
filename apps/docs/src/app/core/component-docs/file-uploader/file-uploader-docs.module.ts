import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { FileUploaderHeaderComponent } from './file-uploader-header/file-uploader-header.component';
import { FileUploaderDocsComponent } from './file-uploader-docs.component';
import { API_FILES } from '../../api-files';
import { FileUploaderExampleComponent } from './examples/file-uploader-example/file-uploader-example.component';
import { FileUploaderDragDisabledExampleComponent } from './examples/file-uploader-drag-disabled-example/file-uploader-drag-disabled-example.component';
import { FileUploaderMaxExampleComponent } from './examples/file-uploader-max-example/file-uploader-max-example.component';
import { FileUploaderModule } from '@fundamental-ngx/core'
import { FileUploaderCompactExampleComponent } from './examples/file-uploader-compact-example/file-uploader-compact-example.component';
import { FileUploaderMinExampleComponent } from './examples/file-uploader-min-example/file-uploader-min-example.component';
import { FileUploaderMinAndMaxSizeExampleComponent } from './examples/file-uploader-min-and-max-size-example/file-uploader-min-and-max-size-example.component';
import { FileUploaderTruncationExampleComponent } from './examples/file-uploader-truncation-example/file-uploader-truncation-example.component';

const routes: Routes = [
    {
        path: '',
        component: FileUploaderHeaderComponent,
        children: [
            { path: '', component: FileUploaderDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.fileUploader } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, FileUploaderModule],
    exports: [RouterModule],
    declarations: [
        FileUploaderDocsComponent,
        FileUploaderHeaderComponent,
        FileUploaderExampleComponent,
        FileUploaderMaxExampleComponent,
        FileUploaderDragDisabledExampleComponent,
        FileUploaderCompactExampleComponent,
        FileUploaderMinExampleComponent,
        FileUploaderMinAndMaxSizeExampleComponent,
        FileUploaderTruncationExampleComponent
    ]
})
export class FileUploaderDocsModule { }