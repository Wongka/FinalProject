var add5 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(add5(1));
var add6 = function (a, b) { return a + (b || 0); };
console.log(add6(1));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var cetakPerson = function (p) {
    p.display();
};
var p1 = new Person("Willy");
cetakPerson(p1);
