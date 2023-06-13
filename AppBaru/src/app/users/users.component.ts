import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from './users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username:string= '';
  constructor(
    private route: ActivatedRoute, 
    private userApi: UsersApiService, 
    private router:Router
  ) { }

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username')
    this.route.paramMap.subscribe(param =>{
      this.username = param.get('username');
    });
    //membaca parameter dari url
    this.route.queryParamMap.subscribe(params =>{
      console.log(params.get("cari"));
    })
    this.route.queryParams.subscribe(params =>{
      console.log(params);
    })
    //fragment
    this.route.fragment.subscribe(params=>{
      console.log(params);
    })
  }
    //test post data user
    buatUser(){
      // let data = {
      //   name: 'Fulan',
      //   username: 'fulan',
      //   email: 'email@mail.com'
      // };
      // this.userApi.createUser(data).subscribe(data=>{
      //   console.log(data);
      // });
      this.router.navigate(['users','create']);
    }
  

}
