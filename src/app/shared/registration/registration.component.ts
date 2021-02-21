import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersApiService} from '../../services/users-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersApiService: UsersApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit(): void {
    const newUser = this.registrationForm.getRawValue();
    this.registrationForm.reset();
    this.usersApiService.create(newUser).subscribe();
    this.router.navigate(['']);

  }

}
