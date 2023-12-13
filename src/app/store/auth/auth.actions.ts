import { createAction, props } from '@ngrx/store';
import { LoginRequest, RegisterRequest, User } from '@models/user.model';

export enum EAuthActions {
  AuthRequest = '[AUTH] AuthRequest',
  AuthRefresh = '[AUTH] Refresh',
  AuthLogout = '[AUTH] Logout',
  LoginSuccess = '[AUTH] LoginSuccess',
  LoginFailure = '[AUTH] LoginFailure',
  RegisterSuccess = '[AUTH] RegisterSuccess',
  RegisterFailure = '[AUTH] RegisterFailure',
}

export const loginRequest = createAction(
  EAuthActions.AuthRequest, props<LoginRequest>(),
);

export const loginSuccess = createAction(
  EAuthActions.LoginSuccess, props<User>(),
);

export const loginFailure = createAction(
  EAuthActions.LoginFailure, props<{ errorMsg: string }>(),
);

export const registerRequest = createAction(
  EAuthActions.AuthRequest, props<RegisterRequest>(),
);

export const registerSuccess = createAction(
  EAuthActions.RegisterSuccess, props<User>(),
);

export const registerFailure = createAction(
  EAuthActions.RegisterFailure, props<{ errorMsg: string }>(),
);

export const authRefresh = createAction(
  EAuthActions.AuthRefresh, props<User>(),
);

export const authLogout = createAction(EAuthActions.AuthLogout);
