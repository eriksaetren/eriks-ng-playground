import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input-component/input-component';
import { OutputComponent } from './output-component/output-component';
import { InputOutputComponent } from './input-output-component/input-output-component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    OutputComponent,
    InputOutputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
