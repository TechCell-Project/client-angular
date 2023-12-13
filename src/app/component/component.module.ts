import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@component/layout';
import { ButtonComponent } from '@component/common';
import {
  BadgeModule,
  ButtonModule,
  DropdownModule,
  FormModule,
  GridModule,
  ImgModule,
  NavbarModule,
  NavModule,
  OffcanvasModule, SpinnerModule, ToastModule,
  TooltipModule,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from '@component/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TextFieldComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TextFieldComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    NavModule,
    OffcanvasModule,
    DropdownModule,
    GridModule,
    ButtonModule,
    ImgModule,
    IconDirective,
    NgOptimizedImage,
    TooltipModule,
    BadgeModule,
    RouterLink,
    ReactiveFormsModule,
    FormModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    SpinnerModule,
  ],
})
export class ComponentModule {}
