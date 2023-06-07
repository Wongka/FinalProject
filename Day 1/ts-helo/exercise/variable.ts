let count=5;
count=6;
let count2;
count2 = 5;
count2 ='a';
count2 = true;
//type annotation
let count3: number;
count3 = 5;
//variable types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a' , false];
//enum
const ColorRed = 1;
const ColorGreen = 2;
const ColorBlue = 3;
enum Color {Red=0, Green=1, Blue=2, Purple=3};
let backgroundColor = Color.Red;
//type assertion
let message;
message='abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWAY = (message as string).endsWith('c');
//type union
let course: string | number = 'PJJ Angular';
course = 1234;
