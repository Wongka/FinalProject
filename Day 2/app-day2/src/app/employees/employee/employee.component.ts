import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee={
    name:"Jhonny",
    age:35,
    gender:"Male"
  }
  angularlogo="https://angular.io/assets/images/logos/angular/angular.png"
  btnTxt = "Vote";
  handleClick(e:Event){
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
