export class Point {
    constructor(private x?:number,private y?:number,private z?:number){

    }

    draw(){
        console.log(this.x);
    }
}