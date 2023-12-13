import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKey } from '@utils/list.utils';
import { ProductState } from '@store/product/product.reducer';


export const selectProductFeature = createFeatureSelector<ProductState>(FeatureKey.Product);

export const selectProducts = createSelector(selectProductFeature, (state) => state.products);

export const selectProduct = createSelector(selectProductFeature, (state) => state.product);

export const selectLoadingProduct = createSelector(selectProductFeature, (state) => state.isLoading);

export const selectLoadingProductDetails = createSelector(selectProductFeature, (state) => state.isLoadingDetails);

export const selectProductAll = createSelector(
  selectProducts,
  selectProduct,
  selectLoadingProduct,
  selectLoadingProductDetails,
  (products, product, isLoading, isLoadingDetails) => ({
    products,
    product,
    isLoading,
    isLoadingDetails,
  }),
);
