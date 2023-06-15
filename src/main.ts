import './style.css'

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
 




// какое-то ДЗ
// let a = +(prompt("1")as string)
// let b = +(prompt("2")as string)
// let x = (a + b)
// let result = (x < 4) ? "мало" : "Много"

// console.log(result)


// DZ 2 #1
//Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...).

// let age = +( prompt ("Введите возраст") as string)


// if (age >= 0  || age <= 2){
// alert("ребенок")
// }
// else if (age >= 12  || age <= 18){
//     alert("подростoк")
// }
// else if (age >= 18  || age <= 60){
//     alert("взрослый")
// }
// else (age > 60){
//   alert('Дед')
// }



// Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).

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

