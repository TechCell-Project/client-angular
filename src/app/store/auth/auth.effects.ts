import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { RootPath } from '@utils/list.utils';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((data) =>
        this.authService.login(data).pipe(
          map((user) => {
            if (user.data) {
              localStorage.setItem('user', JSON.stringify(user.data));
              this.toastrService.success('Bạn đã đăng nhập thành công!', 'Thành công');
            }
            return AuthActions.loginSuccess(user.data);
          }),
          catchError((err) => {
            this.toastrService.error('Tài khoản hoặc mật khẩu không chính xác!', 'Thất bại');
            return of(AuthActions.loginFailure({ errorMsg: err }));
          }),
        ),
      ),
    ),
  );

  authenticated$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigateByUrl(RootPath.Home).then();
        }),
      ),
    { dispatch: false },
  );

  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.authLogout),
        tap(() => {
          this.toastrService.success('Đăng xuất Techcell thành công', 'Thành công')
          localStorage.removeItem('user');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
  ) {
  }
}
