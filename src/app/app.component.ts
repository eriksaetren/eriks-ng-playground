import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentProp = 'some parent property text';
  nameProp = 'Angular ' + VERSION.major;
}
