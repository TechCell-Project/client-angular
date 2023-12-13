import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '@models/user.model';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectIsLoading } from '@store/auth/auth.selectors';
import { loginRequest } from '@store/auth/auth.actions';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { RootPath } from '@utils/list.utils';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected readonly RootPath = RootPath;
  patientForm: FormGroup;

  icons = { faGoogle };

  loginForm: FormGroup = new FormGroup({
    emailOrUsername: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading$ = this.store.select(selectIsLoading).pipe(
    filter(value => value !== null),
  );

  ngOnInit() {
    this.title.setTitle('Techcell - Đăng nhập');
    this.store.select(selectIsAuthenticated).subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigateByUrl(RootPath.Home).then();
      }
    });
  }

  showError(controlName: string): boolean {
    return this.hasVisibleError(this.patientForm.get(controlName) as AbstractControl);
  }

  hasVisibleError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    console.log(this.patientForm)
    this.patientForm.markAllAsTouched();
  }

  handleSubmitLogin() {
    // this.loginForm.markAllAsTouched()
    const payload: LoginRequest = this.loginForm.value;
    if (this.loginForm.valid) {
      this.store.dispatch(loginRequest(payload));
    }
    console.log(this.loginForm);
    console.log(this.loginForm.controls['emailOrUsername']?.errors?.['required']);
  }

  constructor(
    private store: Store,
    private title: Title,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required, Validators.email],
    });
  }
}
