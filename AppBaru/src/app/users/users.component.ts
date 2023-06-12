import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username:string= '';
  constructor(
    private route:ActivatedRoute
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

}
