import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input-component/input-component';
import { OutputComponent } from './output-component/output-component';
import { InputOutputComponent } from './input-output-component/input-output-component';
import { TemplateTestComponent } from './template-test-component/template-test-component';

@NgModule({
  imports: [BrowserModule, FormsModule, TableModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    OutputComponent,
    InputOutputComponent,
    TemplateTestComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
