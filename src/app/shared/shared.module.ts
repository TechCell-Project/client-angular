import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantUtils } from '@utils/constant.utils';
import { FuncUtils } from '@utils/func.utils';
import { AuthService } from '@services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ConstantUtils,
    FuncUtils,
    AuthService,
  ],
})

export class SharedModule {}
