import './style.css'



let Dz1 = document.querySelector('#test')

let qwst = document.querySelector('#quest')

const DZ1 = document.querySelector('#btn1')
DZ1?.addEventListener('click', n1 )

const DZ2 = document.querySelector('#btn2')
DZ2?.addEventListener('click', n2 )

const DZ3 = document.querySelector('#btn3')
DZ3?.addEventListener('click', n3 )

const DZ4 = document.querySelector('#btn4')
DZ4?.addEventListener('click', n4 )

const DZ5 = document.querySelector('#btn5')
DZ5?.addEventListener('click', n5 )

const DZ6 = document.querySelector('#btn6')
DZ6?.addEventListener('click', n6 )

const DZ7 = document.querySelector('#btn7')
DZ7?.addEventListener('click', n7 )

const DZ8 = document.querySelector('#btn8')
DZ8?.addEventListener('click', n8 )

const DZ9 = document.querySelector('#btn9')
DZ9?.addEventListener('click', n9 )

const sad = document.querySelector('#inf')
sad?.addEventListener('click', info)

// DZ1.innerText = "полиндром"
function info(){

  alert("первые ДЗ и ПЗ потерялись xD")
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

function n1() {

  let age = +( prompt ("Введите возраст") as string)
  
  
  if (age >= 0  && age <= 2){
       alert("ребенок")
  }
  else if (age >= 12  && age <= 18){
      alert("подростoк")
  }
  else if (age >= 18  && age <= 60){
      alert("взрослый")
  }
  else if (age > 60){
    alert('Дед')
  }

}  


//? Запросить у пользователя число от 0 до 9 и вывести ему 
//? спецсимвол, который расположен на этой клавише (1–!, 
//? 2–@, 3–# и т. д).

function n2() {
  let num = +(prompt("Число")as string)
switch(num){
case 1 :
  console.log("\!");
break

case 2 :
  console.log("\@");
break

case 3 :
  console.log("\#");
break

case 4 :
  console.log("\$");
break

case 5 :
  console.log("\%");
break

case 6 :
  console.log("\^");
break

case 7 :
  console.log("\&");
break

case 8 :
  console.log("\*");
break

case 9 :
  console.log("\(");
break

case 0 :
  console.log("\)");
break
 default:
  alert('От 0 до 9!')
  break

}

}


//? Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
function n3() {


let num = +(prompt("Число")as string)
let firstNum = num / 100
firstNum = (Math.round(firstNum))
let secNum = (num /10) % 10
secNum = (Math.round (secNum))
let thirdNum = num % 10

if( firstNum == secNum || firstNum == thirdNum || secNum == thirdNum ){
  alert ("есть совпадения")
}
else {
  alert ("нет совпадений")
}
}
//? Запросить у пользователя год и проверить, високосный он
//?или нет. Високосный год либо кратен 400, либо кратен 4 и
//?при этом не кратен 100
function n4(){
  let num = +(prompt("год")as string)
  let yer = num % 400
  let yer2 = num % 4 
  let yer3 = num % 100
  if( yer == 10 || yer2 == 0 && yer3 != 0){
      alert("высокосный")
    }
    else{
        alert("не высокосный")
      }
      
    }



//? Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function n5 (){
  let num = +(prompt("5 значное число")as string)

let num1 = (num % 10)

console.log(num1);

let num2 = (num % 100) / 10

num2 = Math.round(num2)

console.log(num2);

let num4 = (num % 10000) / 1000

num4 = Math.round(num4)

console.log(num4);

let num5 = (num % 100000) / 10000

num5 = Math.round(num5)

console.log(num5);

if (num1 == num5 && num2 == num4){
  alert('полиндром')

}
else{
  alert ('нет')
  
}
}

function n6 (){

  let mone = +(prompt("кол-во USD")as string)

let cur = prompt("в какую валюту? (EUR , UAN, AZN)")

if ( cur == "EUR"){
let UtoE = mone * 0.91
alert(UtoE)
}

if ( cur == "UAN"){
  let UtoU = mone * 36.94
  alert(UtoU)
  }

  if ( cur == "AZN"){
    let UtoA = mone * 1.70
    alert(UtoA)
    }

}

function n7(){
  let mone = +(prompt("сумма покупки")as string)

  let per3 = mone * 0.03
  let per5 = mone * 0.05
  let per7 = mone * 0.07


if(mone >= 200 && mone < 300){
mone -= per3
alert(mone)
}

else if(mone >= 300 && mone <= 500 ){
  mone -= per5
  alert(mone)
}

else(mone > 500)
{
  mone -= per7
  alert(mone)
}
}

function n8(){
  let D = +(prompt("длина окружности")as string)
  let P = +(prompt("периметр кадрата")as string)
  P /= 4
if(D <= P){
  alert("может")
}
else{
  alert("не может")
}

}

function n9(){
let qwst = 12


}