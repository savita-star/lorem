import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lorem-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log(
        '🚀 ~ file: login.component.ts ~ line 19 ~ LoginComponent ~ submit ~ this.form',
        this.form
      );
    }
  }
}
