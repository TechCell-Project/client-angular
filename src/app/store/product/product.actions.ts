import { createAction, props } from '@ngrx/store';
import { PagingResponse } from '@models/common.model';
import { PagingProduct, Product } from '@models/product.model';

export enum EProductActions {
  GetProductRequest = '[PRODUCT GetProductRequest]',
  GetProductSuccess = '[PRODUCT GetProductSuccess]',
  GetProductFailure = '[PRODUCT GetProductFailure]',
  GetProductDetailsRequest = '[PRODUCT GetProductDetailsRequest]',
  GetProductDetailsSuccess = '[PRODUCT GetProductDetailsSuccess]',
  GetProductDetailsFailure = '[PRODUCT GetProductDetailsFailure]',
}

export const getProductSuccess = createAction(EProductActions.GetProductSuccess, props<PagingResponse<Product>>());
export const getProductFailure = createAction(EProductActions.GetProductFailure);
export const getProductRequest = createAction(EProductActions.GetProductRequest, props<PagingProduct>());

export const getProductDetailsSuccess = createAction(EProductActions.GetProductDetailsSuccess, props<Product>());
export const getProductDetailsFailure = createAction(EProductActions.GetProductDetailsFailure);
export const getProductDetailsRequest = createAction(EProductActions.GetProductDetailsRequest, props<{
  id: string,
  details: boolean
}>());
