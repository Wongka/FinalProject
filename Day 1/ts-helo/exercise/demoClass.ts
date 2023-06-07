
//Definisi class
class Point {
    x: number;
    y: number;

    draw(){
        console.log('X:'+this.x+', Y:'+this.y );
    }
    getDistance(){
        //do something here
    }
}

//Membuat Object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

//Class dengan constructor
class PointWithConstructor {
    constructor(private x?:number,private y?:number){
        if(x!==undefined) this.x = x;
        if(y!==undefined) this.y = y;
    }
    draw(){
        console.log('X:'+this.x+', Y:'+this.y );
    }
    getDistance(){
        //do something here
    }
}
let pointWithConstructor = new PointWithConstructor(1,2);
pointWithConstructor.draw();
    
    