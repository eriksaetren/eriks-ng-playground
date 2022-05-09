import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'output-component',
  templateUrl: './output-component.html',
  styleUrls: ['./output-component.css'],
})
export class OutputComponent {
  @Output() childOutputProp: EventEmitter<string>;

  outputEvent(input: string) {
    this.childOutputProp.emit(input);
  }
}
