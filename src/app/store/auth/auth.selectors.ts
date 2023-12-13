import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@store/auth/auth.reducer';
import { FeatureKey } from '@utils/list.utils';

export const selectAuthFeature = createFeatureSelector<AuthState>(FeatureKey.Auth);

export const selectUser = createSelector(selectAuthFeature, (state) => state.user);
export const selectIsLoading = createSelector(selectAuthFeature, (state) => state.isLoading);
export const selectIsAuthenticated = createSelector(selectAuthFeature, (state) => state.isAuthenticated);
export const selectErrorMsg = createSelector(selectAuthFeature, (state) => state.errorMsg);

export const selectAuthAll = createSelector(
  selectUser,
  selectIsAuthenticated,
  selectIsLoading,
  (user, isAuthenticated, isLoading) => ({ user, isAuthenticated, isLoading }),
);
