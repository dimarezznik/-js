// Задания по базе javascript

// задание 1, Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

/*
alert('Я JavaScript!')
*/


// задание 8, Напишите код, который будет спрашивать логин с помощью prompt.
// // // // Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

/*
let whoIs = prompt('Кто там?', '');

if (whoIs == 'Admin'){
    let pass = prompt('Password?', '')
    if (pass == 'Main'){
        alert('Welcome')
    } else  if(pass == '' || pass == null){
        alert('Cancel')
    }
    else {
        alert('Error')
    }
} else if(whoIs == null || whoIs == ''){
    alert('Cancel')
} else {
    alert('Error')
}*/


// задание 9, четные числа

/*for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}*/

// задание 10 переписать на switch

/*const number = +prompt('Введите число между 0 и 3', '');

/!*if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}*!/

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
    break;
}*/

// задание 11, найти минимально число

/*
function min(a, b){
    if (a < b){
        alert(a)
    } else {
        alert(b)
    }
}

min(3, -7)*/

// задание 12, заменить на стрелочную функцию

/*
/!*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);*!/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);*/

// задание 13, code style

/*
/!*
function pow(x,n)
{
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
    alert(pow(x,n))
}*!/

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
    alert(pow(x, n))
}*/


// задание 14, Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

/*
const isEmpty = (obj) => {
    for (let key in obj){
        return false;
    }
    return true
}

const object = {
    name: 'Dima'
}

isEmpty(object)*/

// задание 15, калькулятор с this

/*let calculator = {
    read() {
        this.a = +prompt('write a', 0)
        this.b = +prompt('write b', 0)
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

// задание 16 калькулятор с new

/*function Calculator () {
    this.read = function () {
        this.a = +prompt('write a', 0)
        this.b = +prompt('write b', 0)
    }

    this.sum = function () {
        return this.a + this.b
    }

    this.mul = function () {
        return this.a * this.b
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());*/

// задание 17, что выведет

/*let str = "Привет";

str.test = 5;

alert(str.test); // undefined, при use strict - ошибка*/

// задание 18, Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

/*
function sum() {
    let firstNum = +prompt('first', 0)
    let secondNum = +prompt('second', 0)
    alert(firstNum + secondNum)
}

sum()*/

// задание 19 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

/*let str = 'dima';

function ucFirst(str){

    return str[0].toUpperCase() + str.slice(1)

}

ucFirst(str)*/


// задание 20, Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива.
// Вставьте «Рэп» и «Регги» в начало массива.

/*
const styles = ['Jaz', 'Bluz'];

styles.push('Rock-n-Roll')

styles[Math.floor((styles.length-1) / 2)] = 'Classic'

styles.shift()

styles.unshift('Rap', 'Reggi')

alert(styles)*/

// задание 21, Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

/*
function camelize(str) {
    alert(str.split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(''));
}

let str = 'xxx-aaa-sss';

camelize(str)*/

// задание 22, Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

/*function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));*/

// задание 23, Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(){
    let count = 0;
    for (let value of Object.values(salaries)){
        count += value
    }
    return count
}

console.log(sumSalaries(salaries));*/

// задание 24, Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

/*let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

console.log( name );
console.log( age );
console.log( isAdmin );*/

// задание 25, Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

/*let test = new Date(2012, 1, 20, 15, 12 )

alert(test)*/

// задание 26, Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
/*

let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonType = JSON.parse(JSON.stringify(user))

console.log(jsonType)*/

// задание 27, Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

/*без рекурсии*/
/*function sumTo(num) {
    let acc = 0;
    for (let i = 0; i <= num; i++) {
        acc += i;
    }
    console.log(acc)
}

sumTo(100)*/

/*с рекурсией*/

/*
function sumTo(num){
    if (num == 1){
        return 1;
    }
    return num + sumTo(num - 1)
}

console.log(sumTo(100))*/


// задание 28, Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

/*
function sum(a) {
    return  function (b) {
        return a + b;
    }
}

console.log(sum(3)(4));*/


// задание 29, Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение: counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

/*makeCounter изночально:*/
/*
function makeCounter() {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() );*/

/*makeCounter переделанный*/

/*function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter()

console.log( counter() );
console.log( counter.decrease() );
console.log( counter() );
console.log( counter.set() )
console.log( counter() )*/

// задание 30, Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

/*через setTimeout*/
/*function printNumbers(from, to) {
    setTimeout(function interval(){
        if (from !== to){
            setTimeout(interval, 1000)
        }
        console.log(from++)
    }, 1000)
}

printNumbers(1, 5);*/


/*через setInterval*/

/*
function printNumbers(from, to){
   let clear = setInterval(function interval() {
        if (from == to){
            clearInterval(clear)
        }
        console.log(from++)
    }, 1000)
}

printNumbers(1, 5)*/


// задание 31, Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

/*
function delay(f, ms){
    return  function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

function f(text) {
    return alert(text)
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");*/

// задание 32, Исправьте выделенную строку, чтобы всё работало

/*
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
/!*Неправильно:*!/
// askPassword(user.loginOk, user.loginFail); //(*)

/!*Переделанный*!/
let okLog = user.loginOk.bind(user)
let failLog = user.loginFail.bind(user)

askPassword(okLog, failLog);*/

// задание 33, Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.


/*В функциональном стиле*/
/*function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();*/


/*В классовом стиле*/
/*class Clock {

    constructor({template}) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();*/

// задание 34, К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

/*class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        /!*this.name = name; - было*!/
        super(name); // исправлено
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);*/

// задание 35, Создайте класс FormatError, который наследует от встроенного класса SyntaxError. Класс должен поддерживать свойства message, name и stack.

/*
class FormatError extends SyntaxError{
    constructor(message) {
        super(message)
        this.name = 'FormatError';
    }
}

let err = new FormatError("ошибка форматирования");

alert( err.message );
alert( err.name );
alert( err.stack );

alert( err instanceof FormatError );
alert( err instanceof SyntaxError );*/

// задание 36, Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

/*
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'))*/


// задание 37, Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

/*Изночально*/
/*function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404*/

/*Переделанный*/

/*async function loadJson(url){
    let resp = await fetch(url)
    if (resp.status === 200){
        let jsonResp = await resp.json()
        console.log(jsonResp)
    } else {
        throw new Error(resp.status)
    }
}

loadJson('no-such-user.json')
    .catch(alert)*/
