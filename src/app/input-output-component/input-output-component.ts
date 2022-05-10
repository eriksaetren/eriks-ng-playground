import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-output-component',
  templateUrl: './input-output-component.html',
  styleUrls: ['./input-output-component.css'],
})
export class InputOutputComponent {
  @Input() ioInput: string = '';
  @Output() ioEventEmitter = new EventEmitter<string>();

  ioTriggerEmitEvent(msg: string) {
    this.ioEventEmitter.emit(msg);
  }
}