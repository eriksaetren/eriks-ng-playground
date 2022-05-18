import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-output-component',
  templateUrl: './input-output-component.html',
  styleUrls: ['./input-output-component.css'],
})
export class InputOutputComponent {
  @Input() ioInput: string = 'test';
  @Output() ioEventEmitter = new EventEmitter<string>();
  public testString = 'derp';

  ioTriggerEmitEvent(msg: string) {
    this.ioEventEmitter.emit(msg);
  }
}
