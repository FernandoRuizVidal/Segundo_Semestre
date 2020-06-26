var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello Wey');
/* tipos */
var myString = "Hello Wey";
myString = 22 + "años";
var myNumber = 12;
var myBool = false;
var myVar = 18;
myVar = "Fer";
/* Array */
var StringArray = ["", "", ""];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, true];
var AnyArray = ["Uno", 2, true, [], {}];
/* Tuple */
var StriNumTuple;
StriNumTuple = ["Hello", 1];
StriNumTuple = ["Hola", 1];
/* Void, Undefined, Null */
//let myVoid:void = undefined;
//let myNull:null = null;
//let myUndefined:undefined = undefined;
/* funcion */
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: "Eat Food",
    text: "Natasha"
});
var myTodo = { title: 'Eat Diner', text: 'Lorem' };
showTodo(myTodo);
/* Clases */
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' Years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var Moi = new User('Moi', 'abc@def.ghi.com', 12);
console.log(Moi.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Oscar = new Member(12, 'Oscar', 'MAZ@SJJMS.COM', 12);
Oscar.payInvoice();
document.write();
