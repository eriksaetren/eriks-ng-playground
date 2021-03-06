import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input-component/input-component';
import { OutputComponent } from './output-component/output-component';
import { InputOutputComponent } from './input-output-component/input-output-component';
import { TableTestComponent } from './table-test-component/table-test-component';
import { TemplateTestComponent } from './template-test/template-test-component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerTableExtractorPipe } from './table-test-component/pipes/customer-table-extractor';
import { BadgeModule } from 'primeng/badge';
import { CustomerStatusToSeverityPipe } from './table-test-component/pipes/customer-status-to-severity-pipe';
import { CustomerTableSortableColumnPipe } from './table-test-component/pipes/customer-table-sortable-column';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    BadgeModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    OutputComponent,
    InputOutputComponent,
    TableTestComponent,
    TemplateTestComponent,
    CustomerTableExtractorPipe,
    CustomerStatusToSeverityPipe,
    CustomerTableSortableColumnPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
