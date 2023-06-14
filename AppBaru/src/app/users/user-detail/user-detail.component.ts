import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  idUser: string | null = '';
  detailUser: any;
  constructor(private router: ActivatedRoute, private serviceUser: UsersService, private userApi: UsersApiService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(parameter => {
      let id = parameter.get('id');
      console.log(id);
      this.idUser = id;
      this.getDetailUser();
    });
  }
  getDetailUser() {
    let idDicari = parseInt(this.idUser || '');
    let data = this.serviceUser.getUserById(idDicari);
    if (!data) {
      this.detailUser = 'User tidak ditemukan';
    } else {
      this.detailUser = data.nama;
    }
  }


}
