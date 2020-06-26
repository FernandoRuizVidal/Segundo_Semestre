console.log('Hello Wey');
/* tipos */
var myString:string = "Hello Wey";
myString = 22 + "años";
var myNumber:number = 12;
var myBool:boolean = false;
var myVar:any = 18;
myVar = "Fer";
/* Array */
var StringArray:string[] = ["", "", ""]
var NumberArray:number[] = [1, 2, 3]
var BooleanArray:boolean[] = [true, false, true]
var AnyArray:any[] = ["Uno", 2, true, [], {}]
/* Tuple */
var StriNumTuple:[string, number];
StriNumTuple = ["Hello", 1];
StriNumTuple = ["Hola", 1];
/* Void, Undefined, Null */
//let myVoid:void = undefined;
//let myNull:null = null;
//let myUndefined:undefined = undefined;
/* funcion */
function getSum(num1:number , num2:number):number{
    return num1 + num2;
}
let mySum = function(
    num1:number|string, 
    num2:number|string):number{
    if(typeof(num1) === 'string'){
        num1 = parseInt(num1);
    }
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
/* function getName(
    firstName:string,
    LastName?:string):string{
    if (LastName == undefined) {
        return firstName;
    }
        return `${firstName} de ${LastName}`;
}
function MyVoidFunction():void{
    return;
}*/

/* Interfaces */
interface Todo{
    title:string;
    text:string
}
function showTodo(todo:Todo) {
    console.log(`${todo.title} - ${todo.text}`)
}
showTodo({
    title:`Eat Food`,
    text:`Natasha`
})
let myTodo:Todo= {title:'Eat Diner', text:'Lorem'};
showTodo(myTodo);
/* Clases */
class User{
    name:string;
    public email:string;
    protected age:number;

    constructor(
        name:string,
        email:string,
        age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
        register(){
            console.log(`${this.name} is registered`);
        }
        showMeAge(){
            return this.age;
        }
        public AgeInYears(){
            return this.age + ' Years';
        }
        payInvoice(){
            console.log(`${this.name} paide invoice`);
        }
}
var Moi = new User('Moi', 'abc@def.ghi.com', 12);

    console.log(Moi.AgeInYears())
class Member extends User{
    id:number;
        constructor(id, name, email, age){
            super(name, email, age);
            this.id = id;
        }
        payInvoice(){
            super.payInvoice();
        }
}

var Oscar = new Member(12, 'Oscar', 'MAZ@SJJMS.COM', 12);
Oscar.payInvoice();
document.write();