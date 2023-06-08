import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [
    {
      id:1,name:"Jhonny",age:28,gender:"male",
      avatar:"https://angular.io/assets/images/logos/angular/angular.png"
    },
    {
      id:2,name:"Adhi",age:20,gender:"male",
      avatar:"https://angular.io/assets/images/logos/angular/angular.png"
    },
    {
      id:3,name:"Hidayat",age:25,gender:"male",
      avatar:"https://angular.io/assets/images/logos/angular/angular.png"
    },
    {
      id:4,name:"Aubrey",age:21,gender:"female",
      avatar:"https://angular.io/assets/images/logos/angular/angular.png"
    },
  ];

  //property untuk menyimpan hasil voting
  myVote:number[]=[];
  constructor() { }

  ngOnInit() {
  }
  //method untuk mendapatkan nama-nama yang di vote (string)
  getMyVote():string{
    let pilihanku = this.employees
    .filter(item=>this.myVote.includes(item.id))
    .map(pil=>pil.name);
    return pilihanku.join(", ")
  }
  

  //method untuk vote
  voteEmployee(id:any){
    console.log("vote "+id);
    this.myVote.push(id);
  }

  //handle unVote
  unVoteEmployee(id:any){
    console.log("unvote "+id);
    this.myVote = this.myVote.filter(item=>item!=id);
  }
  

}
