import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { CekLevelGuard } from './cek-level';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserFormComponent,
    UserListComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers:[UsersService,CekLevelGuard]
})

export class UsersModule { }
