import { Injectable } from '@angular/core';
import { HttpConfig } from '@config/http.config';
import { District, Province, Ward } from '@models/location.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly _path = '/address';

  constructor(private httpService: HttpConfig) {
  }

  getProvinces = () => {
    return this.httpService.get<Array<Province>>(`${this._path}/provinces`);
  };

  getDistricts = (province_id: string) => {
    return this.httpService.get<Array<District>>(`${this._path}/districts/${province_id}`);
  };

  getWards = (district_id: string) => {
    return this.httpService.get<Array<Ward>>(`${this._path}/wards/${district_id}`);
  };
}
