
let add5 = (a:number,b:number = 10):number => a+b;
console.log(add5(1));

let add6 = (a:number,b?:number): number => a+(b || 0);

console.log(add6(1));

class Person{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    display():void{
        console.log(this.name);
    }
}

let cetakPerson = (p:Person):void =>{
    p.display();
}
let p1 = new Person("Willy");
cetakPerson(p1);