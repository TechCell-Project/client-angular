import { forwardRef, Inject, Injectable } from '@angular/core';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';
import { ConstantUtils } from '@utils/constant.utils';
import { FuncUtils } from '@utils/func.utils';
import { AuthService } from '@services/auth.service';
import { catchError, from, map, Observable } from 'rxjs';

type ObservableResponse<T = unknown> = Observable<AxiosResponse<T>>

@Injectable({
  providedIn: 'root',
})
export class HttpConfig {
  private readonly instance: AxiosInstance;
  private authService: AuthService = new AuthService(this);

  constructor(
    private constant: ConstantUtils,
    private func: FuncUtils,
  ) {
    this.instance = axios.create({
      baseURL: constant.API_URL,
      timeout: 4000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = func.getUserFromLS('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error),
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        const preRequest = error.config;
        const status = error.response?.status || error.status;

        if (status === HttpStatusCode.Unauthorized) {
          const refreshToken = func.getUserFromLS('refreshToken');

          if (!refreshToken) {
            return Promise.reject(error);
          }

          if (func.checkTokenExpired()) {
            this.authService.refreshToken(refreshToken).subscribe({
              next: ({ data }) => {
                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
                func.setNewToken(newAccessToken as string, newRefreshToken as string);
                preRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return this.instance(preRequest);
              },
              error: (error) => {
                return Promise.reject(error);
              },
            });
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public get = <TRes>(
    url: string,
    config?: AxiosRequestConfig,
  ): ObservableResponse<TRes> => {
    return from(this.instance.get<TRes>(url, config))
      .pipe(
        map((response) => response),
        catchError(this.handleError),
      );
  };

  public post = <TRes, TReq = unknown>(
    url: string,
    data: TReq,
    config?: AxiosRequestConfig,
  ): ObservableResponse<TRes> => {
    return from(this.instance.post<TRes>(url, data, config))
      .pipe(
        map((response) => response),
        catchError(this.handleError),
      );
  };

  public patch = <TRes, TReq = unknown>(
    url: string,
    data: TReq,
    config?: AxiosRequestConfig,
  ): ObservableResponse<TRes> => {
    return from(this.instance.patch<TRes>(url, data, config))
      .pipe(
        map((response) => response),
        catchError(this.handleError),
      );
  };

  public put = <TRes, TReq = unknown>(
    url: string,
    data: TReq,
    config?: AxiosRequestConfig,
  ): ObservableResponse<TRes> => {
    return from(this.instance.put<TRes>(url, data, config))
      .pipe(
        map((response) => response),
        catchError(this.handleError),
      );
  };

  public delete = <TRes>(
    url: string,
    config?: AxiosRequestConfig,
  ): ObservableResponse<TRes> => {
    return from(this.instance.delete<TRes>(url, config))
      .pipe(
        map((response) => response),
        catchError(this.handleError),
      );
  };

  private handleError(error: AxiosError): Observable<never> {
    console.log(error);
    throw new Error(error.message);
  }
}
