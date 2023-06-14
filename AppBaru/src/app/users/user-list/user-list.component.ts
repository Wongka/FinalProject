import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataUser:Observable<User[]> | undefined;
  constructor(private serviceUser: UsersService, private userApi: UsersApiService) { }

  ngOnInit(): void {
    this.dataUser = this.userApi.getAllUser();
  }

  deleteUser(id:number){
    this.userApi.deleteUser(id).subscribe(response=>{
      console.log(response);
    });
  }


}
