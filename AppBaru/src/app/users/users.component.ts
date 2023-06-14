import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from './users-api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: string | null = '';
  constructor(private route: ActivatedRoute, private userApi: UsersApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameter => {
      this.username = parameter.get('username');
    });
    this.route.queryParams.subscribe(parameter => {
      console.log(parameter);
    });
    this.route.fragment.subscribe(parameter => {
      console.log(parameter);
    });
  }

  buatUser() {
    this.router.navigate(['users', 'create']);
  }

  testObservable() {
    const myObservable = of('satu', 'dua', 'tiga');

    myObservable.subscribe(data => {
      console.log(data);
    });

    myObservable.subscribe({
      next: data => { console.log(data) },
      error: err => { console.log(err) },
      complete: () => { console.log('complete') }
    });
  }


}
