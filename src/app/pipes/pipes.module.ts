import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlPipe } from './form-control-pipe.pipe';

@NgModule({
  declarations: [
    FormControlPipe
  ],
  exports: [
    FormControlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
