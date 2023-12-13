import { Injectable } from '@angular/core';
import { HttpConfig } from '@config/http.config';
import {
  ChangePassRequest,
  ForgotPassRequest,
  LoginRequest,
  RegisterRequest,
  User,
  VerifyEmailRequest,
} from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _path = '/auth';

  constructor(private httpService: HttpConfig) {
  }

  login = (Request: LoginRequest) => {
    return this.httpService.post<User, LoginRequest>(`${this._path}/login`, Request);
  };

  loginWithGoogle = (idToken: string) => {
    return this.httpService.post(`${this._path}/google`, { idToken });
  };

  register = (Request: RegisterRequest) => {
    return this.httpService.post<User, RegisterRequest>(`${this._path}/register`, Request);
  };

  refreshToken = (refreshToken: string) => {
    return this.httpService.post<User>(`${this._path}/refresh-token`, { refreshToken });
  };

  verifyEmail = (Request: VerifyEmailRequest) => {
    return this.httpService.post<unknown, VerifyEmailRequest>(`${this._path}/verify-email`, Request);
  };

  resendVerifyEmail = (email: string) => {
    return this.httpService.post<unknown>(`${this._path}/resend-verify-email-otp`, { email });
  };

  forgotPassword = (email: string) => {
    return this.httpService.post<unknown>(`${this._path}/forgot-password`, { email });
  };

  verifyForgotPassword = (Request: ForgotPassRequest) => {
    return this.httpService.post<unknown, ForgotPassRequest>(`${this._path}/verify-forgot-password`, Request);
  };

  changePassword = (Request: ChangePassRequest) => {
    return this.httpService.post<unknown, ChangePassRequest>(`${this._path}/change-password`, Request);
  };
}
