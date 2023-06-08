import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //menangkap data employee dari parent
  @Input()
  employee!:{id:number,name:string,age:number,gender:string,avatar: string};
  @Output()
  vote: EventEmitter<number> = new EventEmitter();
  @Output()
  unVote: EventEmitter<number> = new EventEmitter();
  //property untuk menyimpan status vote
  isVote:boolean = false

  
  handleClick(e:Event){
    if(this.isVote){
    console.log("unvote for "+this.employee.id);
    this.unVote.emit(this.employee.id);
    }else{
    console.log("vote for "+this.employee.id);
    this.vote.emit(this.employee.id);
    }
    this.isVote = !this.isVote;
  }
  //Text pdan warna pada tombol yang berubah sesuai status vote
  getBtnTxt():string{
    return this.isVote?"Cancel Vote":"Vote";
  }
  getBtnColor():string{
    return this.isVote?"#FF0000":"#00FF00";
  }
  
    
  constructor() { }

  ngOnInit() {
  }

}
