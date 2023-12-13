import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthReducer } from '@store/auth/auth.reducer';
import { AuthEffects } from '@store/auth/auth.effects';
import { ProductReducer } from '@store/product/product.reducer';
import { ProductEffects } from '@store/product/product.effects';

export const TechCellStoreModule = StoreModule.forRoot({
  auth: AuthReducer,
  product: ProductReducer,
});

export const TechCellEffectsModule = EffectsModule.forRoot(
  AuthEffects,
  ProductEffects,
);

export const TechCellStoreDevToolsModule = StoreDevtoolsModule.instrument(
  { maxAge: 25, logOnly: !isDevMode() });

export const TechCellRouteStoreModule = StoreRouterConnectingModule.forRoot();
