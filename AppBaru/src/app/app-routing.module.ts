import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const usersRoute = [
  {path:'',component:UserListComponent},
  {path:':id',component:UserDetailComponent},
  {path:':id/edit',component:UserFormComponent},
];

const KonfigurasiRouter = [
  {path:'news',component:NewsComponent},
  {path:'users',component:UsersComponent,children:usersRoute},
  // {path:'users/:username',component:UsersComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(KonfigurasiRouter)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
