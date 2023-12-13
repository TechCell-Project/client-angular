import { Image, Timestamp } from './common.model';
import { District, Province, Ward } from './location.model';

export class User extends Timestamp {
  _id: string | null = null;
  email: string | null = null;
  emailVerified: boolean = false;
  role: string | null = null;
  userName: string | null = null;
  avatar: Image = new Image();
  address: Array<Address> = new Array<Address>();
  accessToken: string | null = null;
  refreshToken: string | null = null;
  firstName: string | null = null;
  lastName: string | null = null;
  block?: {
    isBlocked?: boolean;
    activityLogs?: ActivityLog[];
  };
}

export class Address {
  addressName: string | null = null;
  customerName: string | null = null;
  phoneNumbers: string | null = null;
  provinceLevel: Province | Province[] = [];
  districtLevel: District | District[] = [];
  wardLevel: Ward | Ward[] = [];
  detail: string | null = null;
  isDefault: boolean = false;
}

export class ActivityLog {
  activity: string | null = null;
  activityBy: string | null = null;
  activityReason: string | null = null;
  activityNote: string | null = null;
}

export class LoginRequest {
  emailOrUsername: string = '';
  password: string = '';
}

export class RegisterRequest {
  email: string = '';
  userName: string = '';
  password: string = '';
  re_password: string = '';
  firstName: string = '';
  lastName: string = '';
}

export class VerifyEmailRequest {
  email: string = '';
  otpCode: string = '';
}

export class ChangePassRequest {
  oldPassword: string | null = null;
  newPassword: string | null = null;
  reNewPassword: string | null = null;
}

export class ForgotPassRequest {
  email: string | null = null;
  otpCode: string | null = null;
  password: string | null = null;
}
