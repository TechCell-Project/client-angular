export class Location {
  name_extension: Array<string> = [];
  status: number | null = null;
}

export class Province extends Location {
  province_id: string | null = null;
  province_name: string | null = null;
  country_id: number | null = null;
}

export class District extends Location {
  province_id: string | null = null;
  district_id: string | null = null;
  district_name: string | null = null;
  support_type: number | null = null;
  can_update_cod: boolean = false;
}

export class Ward extends Location {
  district_id: string | null = null;
  ward_code: string | null = null;
  ward_name: string | null = null;
  support_type: number | null = null;
  can_update_cod: boolean = false;
}
