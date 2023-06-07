//Definisi class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function () {
        //do something here
    };
    return Point;
}());
//Membuat Object
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
//Class dengan constructor
var PointWithConstructor = /** @class */ (function () {
    function PointWithConstructor(x, y) {
        this.x = x;
        this.y = y;
        if (x !== undefined)
            this.x = x;
        if (y !== undefined)
            this.y = y;
    }
    PointWithConstructor.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    PointWithConstructor.prototype.getDistance = function () {
        //do something here
    };
    return PointWithConstructor;
}());
var pointWithConstructor = new PointWithConstructor(1, 2);
pointWithConstructor.draw();
