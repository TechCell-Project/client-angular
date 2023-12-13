import { User } from '@models/user.model';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '@store/auth/auth.actions';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  errorMsg: string | null;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  errorMsg: null,
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.loginRequest, state => ({
    ...state,
    isLoading: true,
  })),
  on(AuthActions.loginSuccess, AuthActions.authRefresh, (state, payload) => ({
    ...state,
    user: payload,
    isLoading: false,
    isAuthenticated: true,
  })),
  on(AuthActions.loginFailure, (state, error) => ({
    ...state,
    user: null,
    isLoading: false,
    isAuthenticated: false,
    errorMsg: error.errorMsg,
  })),
  on(AuthActions.authLogout, state => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    errorMsg: null,
  })),
);
