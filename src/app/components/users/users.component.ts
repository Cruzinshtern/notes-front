import { Component, OnInit } from '@angular/core';
import {UsersApiService} from '../../services/users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList;

  constructor(
    private usersApiServive: UsersApiService
  ) { }

  ngOnInit(): void {
    this.usersApiServive.getAll().subscribe(
      response => {
        this.userList = response.items;
      }
    )
  }

}
