import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';

@Injectable()
export class ConstantUtils {
  public API_URL = environment.apiUrl;
}
