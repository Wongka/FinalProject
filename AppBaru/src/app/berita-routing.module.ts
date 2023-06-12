import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListBeritaComponent } from './berita/list-berita/list-berita.component';
import { DetailBeritaComponent } from './berita/detail-berita/detail-berita.component';
import { FormBeritaComponent } from './berita/form-berita/form-berita.component';

const BeritaRoute = [
  {path:'',component:ListBeritaComponent},
  {path:':id',component:DetailBeritaComponent},
  {path:':id/edit',component:FormBeritaComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    RouterModule.forChild(BeritaRoute)
  ]
})
export class BeritaRoutingModule { }
