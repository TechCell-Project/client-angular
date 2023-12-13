import { Injectable } from '@angular/core';
import { HttpConfig } from '@config/http.config';
import { PagingProduct, Product } from '@models/product.model';
import { PagingResponse } from '@models/common.model';
import { FuncUtils } from '@utils/func.utils';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _path = '/products';

  constructor(private httpService: HttpConfig, private func: FuncUtils) {
  }

  getProducts = (params: PagingProduct) => {
    const queryParams = this.func.appendSearchParams(params);
    return this.httpService.get<PagingResponse<Product>>(`${this._path}?${queryParams}`);
  };

  getProductById = (id: string, details?: boolean) => {
    let url = `${this._path}/${id}`;
    if (details) {
      url += '?detail=true';
    }
    return this.httpService.get<Product>(url);
  };
}
