import { Component } from '@angular/core';
import { cilSearch, cilAlignRight, cilUser, cilBell } from '@coreui/icons';
import { RootPath } from '@utils/list.utils';
import { Router } from '@angular/router';
import { selectUser } from '@store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { AuthState } from '@store/auth/auth.reducer';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { authLogout } from '@store/auth/auth.actions';
import { NgxSpinnerService } from 'ngx-spinner';

interface INavLink {
  name: string;
  path: RootPath | string;
  children?: INavLink[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected readonly RootPath = RootPath;

  user$ = this.store.select(selectUser);

  constructor(private router: Router, private store: Store<AuthState>, private spinner: NgxSpinnerService) {
  }

  links: INavLink[] = [
    { name: 'Trang chủ', path: RootPath.Home },
    {
      name: 'Sản phẩm',
      path: RootPath.Category,
      children: [
        { name: 'Smart phone', path: RootPath.Category + '/smart-phone' },
        { name: 'Phụ kiện', path: RootPath.Category + '/phu-kien' },
      ],
    },
    { name: 'Tra đơn hàng', path: '' },
  ];

  icons = { cilSearch, cilAlignRight, cilUser, cilBell, faUser, faRightFromBracket };

  isActive = (route: string): boolean => {
    return this.router.isActive(route, true);
  };

  redirect = (route: RootPath) => {
    this.router.navigateByUrl(route).then();
  };

  onLogout = () => {
    this.spinner.show().then();
    setTimeout(() => {
      this.store.dispatch(authLogout());
      this.spinner.hide().then();
    }, 2000);
  };
}
