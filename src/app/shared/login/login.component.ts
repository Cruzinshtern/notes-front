import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersApiService} from '../../services/users-api.service';
import {AuthApiService} from '../../services/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authApiService: AuthApiService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit(): void {
    const userToAuth = this.loginForm.getRawValue();
    this.loginForm.reset();
    this.authApiService.login(userToAuth).subscribe();
  }

}
