import { Injectable } from '@angular/core';
import { HttpConfig } from '@config/http.config';

@Injectable()
export class CartService {
  private readonly _path = '/carts'

  constructor(private httpService: HttpConfig) {
  }

  getCarts = () => {

  }
}
