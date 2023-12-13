import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, FormModule, GridModule, ToastModule } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent, LoginComponent, RegisterComponent } from '@pages/index';
import { ComponentModule } from '@component/component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    CarouselModule,
    RouterLink,
    IconDirective,
    FontAwesomeModule,
    ComponentModule,
    ReactiveFormsModule,
    PipesModule,
    ToastModule,
    FormModule,
  ],
})
export class PagesModule {}
