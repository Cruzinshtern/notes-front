import { Component, OnInit } from '@angular/core';
import {AuthApiService} from '../../services/auth-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authApiService: AuthApiService
  ) { }

  ngOnInit(): void {
  }

}
