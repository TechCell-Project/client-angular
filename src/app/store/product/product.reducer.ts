import { PagingResponse } from '@models/common.model';
import { Product } from '@models/product.model';
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '@store/product/product.actions';

export interface ProductState {
  products: PagingResponse<Product> | null;
  product: Product | null;
  isLoading: boolean;
  isLoadingDetails: boolean;
}

export const initialState: ProductState = {
  products: null,
  product: null,
  isLoading: false,
  isLoadingDetails: false,
};

export const ProductReducer = createReducer(
  initialState,
  on(ProductActions.getProductRequest, state => ({
    ...state,
    isLoading: true,
  })),
  on(ProductActions.getProductSuccess, (state, data) => ({
    ...state,
    products: data,
    isLoading: false,
  })),
  on(ProductActions.getProductFailure, state => ({
    ...state,
    products: null,
    isLoading: false,
  })),
  on(ProductActions.getProductDetailsRequest, state => ({
    ...state,
    isLoadingDetails: true,
  })),
  on(ProductActions.getProductDetailsSuccess, (state, data) => ({
    ...state,
    product: data,
    isLoadingDetails: false,
  })),
  on(ProductActions.getProductDetailsFailure, state => ({
    ...state,
    product: null,
    isLoadingDetails: false,
  })),
);
