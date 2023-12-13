import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authRefresh } from '@store/auth/auth.actions';
import { User } from '@models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser = () => {
    // @ts-ignore
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(authRefresh(user));
    }
  };
}
