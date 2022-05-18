import {
  AfterViewInit,
  Component,
  TemplateRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { InputOutputComponent } from './input-output-component/input-output-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  parentProp: string = 'some parent property text';
  parentNameProp: string = 'Angular ' + VERSION.major;
  someParentString: string = '';

  @ViewChild(InputOutputComponent) ioComponent: InputOutputComponent;

  alertMessage(msg: string) {
    alert(msg);
  }

  setParentString(str: string) {
    this.someParentString = str;
  }

  ngAfterViewInit() {
    console.log(this.ioComponent.testString);
  }
}
