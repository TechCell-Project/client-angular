import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '@coreui/angular';

type Variants = 'ghost' | 'outline'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() styles: { [key: string]: string } = {};
  @Input() content: string = '';
  @Input() type: ButtonType = 'button';
  @Input() variant?: Variants = undefined;
  @Input() class?: string = '';
  @Input() disabled?: boolean = false;
  @Input() loading?: boolean = false;
  @Output() onclick?: EventEmitter<void> = new EventEmitter<void>();

  handleClick = () => {
    this.onclick?.emit();
  };
}
