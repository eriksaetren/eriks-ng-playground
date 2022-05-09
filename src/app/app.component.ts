import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentProp: string = 'some parent property text';
  parentNameProp: string = 'Angular ' + VERSION.major;
}
