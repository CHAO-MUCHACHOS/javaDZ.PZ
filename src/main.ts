import "./style.css";

// //@ts-ignore
// document.getElementById("demo").innerHTML = 11;

let Dz1 = document.querySelector("#dz-class1");

const DZ1_1 = document.querySelector("#btn2_1");
DZ1_1?.addEventListener("click", n1_1);

const DZ1_2 = document.querySelector("#btn2_2");
DZ1_2?.addEventListener("click", n1_2);

const DZ1_3 = document.querySelector("#btn2_3");
DZ1_3?.addEventListener("click", n1_3);

const DZ1_4 = document.querySelector("#btn2_4");
DZ1_4?.addEventListener("click", n1_4);

const DZ1_5 = document.querySelector("#btn2_5");
DZ1_5?.addEventListener("click", n1_5);

const DZ1_6 = document.querySelector("#btn2_6");
DZ1_6?.addEventListener("click", n1_6);

const DZ1_7 = document.querySelector("#btn2_7");
DZ1_7?.addEventListener("click", n1_7);

const DZ1_8 = document.querySelector("#btn2_8");
DZ1_8?.addEventListener("click", n1_8);

const DZ2_1 = document.querySelector("#btn3_1");
DZ2_1?.addEventListener("click", n2_1);

const DZ2_2 = document.querySelector("#btn3_2");
DZ2_2?.addEventListener("click", n2_2);

const DZ2_3 = document.querySelector("#btn3_3");
DZ2_3?.addEventListener("click", n2_3);

const DZ2_4 = document.querySelector("#btn3_4");
DZ2_4?.addEventListener("click", n2_4);

const DZ2_5 = document.querySelector("#btn3_5");
DZ2_5?.addEventListener("click", n2_5);

const DZ2_6 = document.querySelector("#btn3_6");
DZ2_6?.addEventListener("click", n2_6);

const DZ2_7 = document.querySelector("#btn3_7");
DZ2_7?.addEventListener("click", n2_7);

const DZ2_8 = document.querySelector("#btn3_8");
DZ2_8?.addEventListener("click", n2_8);

const DZ2_9 = document.querySelector("#btn3_9");
DZ2_9?.addEventListener("click", n2_9);

const DZ2_10 = document.querySelector("#btn3_10");
DZ2_10?.addEventListener("click", n2_10);

const sad = document.querySelector("#inf");
sad?.addEventListener("click", info);

// DZ1.innerText = "полиндром"
function info() {
  alert("первые ДЗ и ПЗ потерялись xD");
}

// switch(Переменная)){
//     case "HTTP": (с чем сравнивает)
//     Переменная = "Hypertext transfer protocol"; (присваивает)
//     break; (конец)
// let X = +( prompt ("Введите число") as string)

// do {
//     statement1;
//     statement2;
//     statement3;
//    } while(condition)

// alert()

// confirm()

// prompt

// let num= +(prompt('число ') as string)

// #1-2
// let num = +(prompt('число ') as string)
// if(num%2 !== 0){
//     num-=1
// }

// for(let i = 2 ; i<num; i++){

// if(i % 2 == 0){
//     console.log(i);
// }

// }
// console.log(i);

// #3
// function div (x){

// for(let i=1;i<=x; i++){

// if(x%i==0) console.log(i);

// }
// }

// div(10)

// #6
// function dayOfWork(x) {
//     let days = 0
//     while(x>=10){
//     x = x-x/10
//     days++
//     }
// return days

// }

// console.log(9,
//     dayOfWork(10)
//     )

// const input1 = document.querySelector('input')

// const button1 = document.querySelector('button')

// const output1 = document.querySelector('#output')

// let x = +(prompt("Введите число")as string)
// x = x * x
// console.log(x);
// 12345

// ---------------------------------------------------------
// 9 PZ

// let x = +(prompt(`Введите 5-ти значное число`)as string)
//  let lastNum= x % 10
//  String(lastNum)
// let y = x % 10
//  x -= y
//  x /= 10

//  console.log(`${lastNum}${x}`);

//? какое-то ДЗ
// let a = +(prompt("1")as string)
// let b = +(prompt("2")as string)
// let x = (a + b)
// let result = (x < 4) ? "мало" : "Много"

// console.log(result)

//?  DZ 2 #1
//?Запросить у пользователя его возраст и определить, кем он
//? является: ребенком (0–2), подростком (12–18), взрослым
//? (18_60) или пенсионером (60– ...).

function n1_1() {
  let age = +(prompt("Введите возраст") as string);

  if (age >= 0 && age <= 2) {
    alert("ребенок");
  } else if (age >= 12 && age <= 18) {
    alert("подростoк");
  } else if (age >= 18 && age <= 60) {
    alert("взрослый");
  } else if (age > 60) {
    alert("Дед");
  }
}

//? Запросить у пользователя число от 0 до 9 и вывести ему
//? спецсимвол, который расположен на этой клавише (1–!,
//? 2–@, 3–# и т. д).

function n1_2() {
  let num = +(prompt("Число") as string);
  switch (num) {
    case 1:
      console.log("!");
      break;

    case 2:
      console.log("@");
      break;

    case 3:
      console.log("#");
      break;

    case 4:
      console.log("$");
      break;

    case 5:
      console.log("%");
      break;

    case 6:
      console.log("^");
      break;

    case 7:
      console.log("&");
      break;

    case 8:
      console.log("*");
      break;

    case 9:
      console.log("(");
      break;

    case 0:
      console.log(")");
      break;
    default:
      alert("От 0 до 9!");
      break;
  }
}

//? Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
function n1_3() {
  let num = +(prompt("Число") as string);
  let firstNum = num / 100;
  firstNum = Math.round(firstNum);
  let secNum = (num / 10) % 10;
  secNum = Math.round(secNum);
  let thirdNum = num % 10;

  if (firstNum == secNum || firstNum == thirdNum || secNum == thirdNum) {
    alert("есть совпадения");
  } else {
    alert("нет совпадений");
  }
}
//? Запросить у пользователя год и проверить, високосный он
//?или нет. Високосный год либо кратен 400, либо кратен 4 и
//?при этом не кратен 100
function n1_4() {
  let num = +(prompt("год") as string);
  let yer = num % 400;
  let yer2 = num % 4;
  let yer3 = num % 100;
  if (yer == 10 || (yer2 == 0 && yer3 != 0)) {
    alert("высокосный");
  } else {
    alert("не высокосный");
  }
}

//? Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function n1_5() {
  let num = +(prompt("5 значное число") as string);

  let num1 = num % 10;

  console.log(num1);

  let num2 = (num % 100) / 10;

  num2 = Math.round(num2);

  console.log(num2);

  let num4 = (num % 10000) / 1000;

  num4 = Math.round(num4);

  console.log(num4);

  let num5 = (num % 100000) / 10000;

  num5 = Math.round(num5);

  console.log(num5);

  if (num1 == num5 && num2 == num4) {
    alert("полиндром");
  } else {
    alert("нет");
  }
}

function n1_6() {
  let mone = +(prompt("кол-во USD") as string);

  let cur = prompt("в какую валюту? (EUR , UAN, AZN)");

  if (cur == "EUR") {
    let UtoE = mone * 0.91;
    alert(UtoE);
  }

  if (cur == "UAN") {
    let UtoU = mone * 36.94;
    alert(UtoU);
  }

  if (cur == "AZN") {
    let UtoA = mone * 1.7;
    alert(UtoA);
  }
}

function n1_7() {
  let mone = +(prompt("сумма покупки") as string);

  let per3 = mone * 0.03;
  let per5 = mone * 0.05;
  let per7 = mone * 0.07;

  if (mone >= 200 && mone < 300) {
    mone -= per3;
    alert(mone);
  } else if (mone >= 300 && mone <= 500) {
    mone -= per5;
    alert(mone);
  } else mone > 500;
  {
    mone -= per7;
    alert(mone);
  }
}

function n1_8() {
  let D = +(prompt("длина окружности") as string);
  let P = +(prompt("периметр кадрата") as string);
  P /= 4;
  if (D <= P) {
    alert("может");
  } else {
    alert("не может");
  }
}

// ?Подсчитать сумму всех чисел в заданном пользователем
//? диапазоне.

function n2_1() {
  let num1 = +(prompt("числа от") as string);
  let num2 = +(prompt("числа до") as string);
  let i = 0;

  while (num1 <= num2) {
    i = i + num1;
    num1++;
  }
  alert(i);
}

function n2_2() {
  let num1 = +(prompt("первое число") as string);
  let num2 = +(prompt("второе число") as string);
  while (num1 != 0 && num2 != 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  alert(num1 + num2);
}

function n2_3() {
  let num = +(prompt("введите число") as string);

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}

function n2_4() {
  let num = +(prompt("введите число") as string);
  let i = 0;
  while (num > 0) {
    num /= 10;
    num = Math.round(num);
    i++;
  }
  alert(i);
}

function n2_5() {
  let i = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  do {
    let num = +(prompt("введите число") as string);
    if (num > 0) {
      a++;
    } else if (num == 0) {
      b++;
    } else {
      c++;
    }
    if (num % 2 == 0) {
      d++;
    } else {
      e++;
    }
    i++;
  } while (i < 10);
  alert(
    `${a} положительных; ${c} отрицательных; ${b} равно нулю; ${d} четных; нечетных${e} `
  );
}

function n2_6() {
  do {
    let num1 = +(prompt("введите первое число") as string);
    let num2 = +(prompt("введите второе число") as string);
    let sign = prompt("введите знак") as string;

    switch (sign) {
      case "+":
        alert(`равно: ${num1 + num2}`);
        break;

      case "-":
        alert(`равно: ${num1 - num2}`);
        break;

      case "/":
        alert(`равно: ${num1 / num2}`);
        break;

      case "%":
        alert(`равно: ${num1 % num2}`);
        break;

      case "**":
        alert(`равно: ${num1 ** num2} `);
        break;

      default:
        alert("вы не ввели число");
        break;
    }
  } while (confirm("хотите решить еще?") == true);
}

function n2_7() {
  let num1 = +(prompt("введите число") as string);  
  let num2 = +(prompt("на сколько сдвинуть?") as string);
let i = 0



  // кол-во цифр в num1
  while(num1 > 0){
    num1 /= 10
    num1 = Math.trunc(num1)
    i++
}

i-=num2

while(num1 > i){
  num1 /= 10
  num1 = Math.trunc(num1)
  i++
  }
console.log(num1);


  
}

function n2_8() {}

function n2_9() {}

function n2_10() {}
