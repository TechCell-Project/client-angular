import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() control = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() class: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
}
