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

const DZ3_1 = document.querySelector("#btn2_1_1");
DZ3_1?.addEventListener("click", n3_1);

const DZ3_2 = document.querySelector("#btn2_1_2");
DZ3_2?.addEventListener("click", n3_2);

const DZ3_3 = document.querySelector("#btn2_1_3");
DZ3_3?.addEventListener("click", n3_3);

const sad = document.querySelector("#inf");
sad?.addEventListener("click", info);

function info() {
  alert("первые ДЗ и ПЗ потерялись xD");
}

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
      alert(i);
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
  alert("скоро будет");
}

function n2_8() {
  let i = 0;
  let a = true;

  do {
    switch (i) {
      case 0:
        a = confirm("Понедельник. Хотите увидеть следующий день? ");
        i++;
        break;

      case 1:
        a = confirm("Вторник. Хотите увидеть следующий день? ");
        i++;
        break;

      case 2:
        a = confirm("Среда. Хотите увидеть следующий день? ");
        i++;
        break;

      case 3:
        a = confirm("Четверг. Хотите увидеть следующий день? ");
        i++;
        break;

      case 4:
        a = confirm("Пятница. Хотите увидеть следующий день? ");
        i++;
        break;

      case 5:
        a = confirm("Субота. Хотите увидеть следующий день? ");
        i++;
        break;

      case 6:
        a = confirm("Воскресенье. Хотите увидеть следующий день? ");
        i++;
        break;
    }
  } while (a == true);
}

function n2_9() {
  alert("слишком муторно");
}

function n2_10() {
  let hidNumb = +(prompt("введите число от 0 до 100") as string);
  let a;
  let num = 50;

  do {
    a = confirm(`ваше чсило > ${num}`);
    if (a == true) {
      num += 1;
    }

    a = confirm(`ваше чсило < ${num}`);
    if (a == true) {
      num -= 1;
    }
    a = confirm(`ваше чсило == ${num}`);
    if (a == true) {
      confirm(`ваше чсило ${num}`);
    }
  } while (num > hidNumb || num < hidNumb);
}
function n3_1() {
  let car = {
    prod: "Lada",
    model: "Lada Niva",
    yearOfIssue: 1997,
    averageSpeed: 85,
  };
  alert(`производитель: ${car.prod} 
модель: ${car.model}
год выпуска: ${car.yearOfIssue}
средняя скорость: ${car.averageSpeed}
время в дороге: ${reqTime()} часа
`);
  function reqTime() {
    let dist = +(prompt("растояние") as string);
    dist /= car.averageSpeed;
    if (dist > 4) {
      dist += 1;
      //@ts-ignore
      dist = dist.toFixed(2);
      return dist;
    } else {
      //@ts-ignore
      dist = dist.toFixed(2);
      return dist;
    }
  }
}

function n3_2() {

let numDenom = {
numer: +(prompt("числитель") as string),
frect: '/',
denom: +(prompt("знаменатель") as string),
}

//@ts-ignore
document.getElementById("sum").innerHTML = (`сумма: ${numDenom.numer*2 + numDenom.frect + numDenom.denom}`)

//@ts-ignore
document.getElementById("sub").innerHTML = (`вычитание: ${numDenom.numer - numDenom.numer +numDenom.frect + numDenom.denom}`)

//@ts-ignore
document.getElementById("div").innerHTML = (`умножение: ${numDenom.numer*numDenom.numer + numDenom.frect + numDenom.denom*numDenom.denom}`)

//@ts-ignore
document.getElementById("mult").innerHTML = (`деление: ${numDenom.numer/numDenom.numer + numDenom.frect + numDenom.denom/numDenom.denom}`)

//@ts-ignore
document.getElementById("red").innerHTML = (`сокращение: ${numDenom.numer/numDenom.denom}`)

//@ts-ignore
document.getElementById("size").innerHTML = ( "  <style> .mane_button2{ height: 125px; text-align: start; display:flex;flex-direction: column;align-items: center;justify-content: flex-start; } </style>" );
}








function n3_3() {

  let time = {
    hour: 15,
    min: 41,
    sec: 23
  }
  
  
  
  
  let inputSec = document.querySelector('#inp1')
  //@ts-ignore
  time.sec = inputSec.value
while (time.sec > 60){
time.sec -= 60
time.min++
}

let inputMin = document.querySelector('#inp2')
//@ts-ignore
time.min = inputMin.value
  while(time.min > 60){
    time.min -= 60
    time.hour++
  }
  
  
  let inputHour = document.querySelector('#inp3')
//@ts-ignore
time.hour = inputHour.value
    while(time.hour > 24){
    time.hour -= 24
  }
  
  //@ts-ignore
  document.getElementById("demo").innerHTML = (`${time.hour}:${time.min}:${time.sec}`);
  
  


//@ts-ignore
document.getElementById("sizeTime").innerHTML = ( "  <style> .mane_button3{ height: 100px; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; } .inpSec, .inpMin, .inpHour{ display:flex;} </style>" );
}




