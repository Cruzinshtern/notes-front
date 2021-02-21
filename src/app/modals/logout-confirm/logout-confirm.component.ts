import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthApiService} from '../../services/auth-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.scss']
})
export class LogoutConfirmComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authApiService: AuthApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.authApiService.logout();
    this.router.navigate(['login']);
  }
}
