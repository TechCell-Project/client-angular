import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from '@pages/pages.module';
import { ComponentModule } from '@component/component.module';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IconSetService } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  TechCellEffectsModule,
  TechCellRouteStoreModule,
  TechCellStoreDevToolsModule,
  TechCellStoreModule,
} from '@store/store';
import { HttpConfig } from '@config/http.config';
import { PipesModule } from '@pipes/pipes.module';

// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    PagesModule,
    SharedModule,
    PipesModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      newestOnTop: true,
      closeButton: true,
    }),
    FontAwesomeModule,
    TechCellStoreModule,
    TechCellEffectsModule,
    TechCellRouteStoreModule,
    TechCellStoreDevToolsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    IconSetService,
    HttpConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
