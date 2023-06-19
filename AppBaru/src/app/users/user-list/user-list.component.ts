import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataUser:Observable<User[]> | undefined;
  page = 1;
  pageSize = 5;
  searchText = new FormControl('');
  constructor(private serviceUser: UsersService, private userApi: UsersApiService) { 
    this.searchText.valueChanges.subscribe(value=>{
      this.dataUser = this.search(value || '');
    });
   }

  ngOnInit(): void {
    this.dataUser = this.userApi.getAllUser();
  }

  search(text:string){
    return this.userApi.searchUser(text);
  }
  onSort(e: any){
    console.log(e);
  }


  deleteUser(id:number){
    this.userApi.deleteUser(id).subscribe(response=>{
      console.log(response);
    });
  }


}
