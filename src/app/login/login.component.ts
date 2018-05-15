import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      auth: this.formBuilder.group({
        user: this.formBuilder.control(
          '',
          [Validators.required, Validators.minLength(3)]
        ),
        password: this.formBuilder.control(
          '',
          [Validators.required, Validators.minLength(3), Validators.maxLength(32)]
        ),
      })
    });
  }

  submit = () => {
    if (this.form.valid) {
      this.loading = true;
      this.loginService.auth(this.form.value)
        .subscribe(
          (response: {token: string}) => {
            this.loading = false;
            sessionStorage.setItem('token', response.token);
          },
          (response) => {
            this.loading = false;
            this.error = true;
          }
        );
    } else {

    }
  }

}
