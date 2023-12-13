import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class FuncUtils {
  constructor() {
  }

  // Get User Data Local Storage
  public getUserFromLS = (key: keyof User): any => {
    const userObj = localStorage.getItem('user');
    if (userObj) {
      const user: User = JSON.parse(userObj);
      return user[key];
    }
    return null;
  };

  // Handle Authenticate
  public checkTokenExpired = () => {
    let decodeToken: JwtPayload | null = null;
    const accessToken = this.getUserFromLS('accessToken');

    if (accessToken) {
      decodeToken = jwtDecode<JwtPayload>(accessToken);
    }

    if (decodeToken) {
      const { exp } = decodeToken;
      const currentTime = Math.floor(Date.now() / 1000);
      return Number(exp) < currentTime;
    }
    return true;
  };

  public setNewToken = (accessToken: string, refreshToken: string) => {
    const userObj = localStorage.getItem('user');
    if (userObj) {
      const user: User = JSON.parse(userObj);
      user.accessToken = accessToken;
      user.refreshToken = refreshToken;
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  public appendSearchParams = (payload: Object) => {
    const url = new URLSearchParams();

    Object.entries(payload).map(([key, value]) => {
      if (value === null || !value) {
        return;
      }
      url.append(key, value.toString());
    });
    return url.toString();
  };
}
