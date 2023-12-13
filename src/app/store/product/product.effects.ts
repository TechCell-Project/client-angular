import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '@services/product.service';
import * as ProductActions from '@store/product/product.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductRequest),
      exhaustMap((payload) => {
        return this.productService.getProducts(payload).pipe(
          map(response => {
            return ProductActions.getProductSuccess(response.data);
          }),
          catchError((err) => {
            console.log(err);
            return of(ProductActions.getProductFailure());
          }),
        );
      }),
    ),
  );

  getProductDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProductDetailsRequest),
      exhaustMap((payload) => {
        return this.productService.getProductById(payload.id, payload.details).pipe(
          map(response => {
            return ProductActions.getProductDetailsSuccess(response.data);
          }),
          catchError((err) => {
            console.log(err);
            return of(ProductActions.getProductDetailsFailure());
          }),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}
