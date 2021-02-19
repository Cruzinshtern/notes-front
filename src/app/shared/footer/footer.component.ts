import { Component, OnInit } from '@angular/core';
import {AuthApiService} from '../../services/auth-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private authApiService: AuthApiService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.authApiService.logout();
  }
}
