'use strict';

let a = prompt('Введите первое значение');
let b = prompt('Введите второе значение');
let c = prompt('Введите знак оператора');
let value;

if(c == '+') value = +a + +b;
if(c == '-') value = a - b;
if(c == '*') value = a * b;
if(c == '/') value = a / b;

alert (value);