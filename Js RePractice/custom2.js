"use strict";

// Video 1

// var FirstName = 'Kamrul';

// var lastName = "islam";

// var fullName = FirstName + " " + lastName;

// var school = "T & T Girls School & Collage";

// var address = "Dhaka, Bangladesh";

// console.log("Your Name :" + fullName + ", Your School : " + school + ", & Your Address : " + address );

// var name , age , school, country;

// name = 'nayeem';

// age = 20;

// age.toString();

// school = true;

// country = {
//     name : "Kamrul",
//     age : 20 ,
//     school : true,
//     boolean : {
//         name : 'arafat',
//         age: 24,
//         email: 'arafathossain@gmail.com'
//     }
// };

// console.log(typeof(age));

// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(school));
// console.log(typeof(country));

// document.write( "name : " + name , "age : " + age, "school : " + school, "country : " + country)

// var age = 20;
// age = parseInt(age);
// age = toString(age);
// console.log(typeof(age));
// console.log(typeof(parseInt(age)));

// number = 2.53454;

// number = number.toFixed(2);

// console.log(number);

// number = 2.53454;

// console.log(number.toPrecision(4));

// console.log(typeof(Number('20')));

// var num1 = parseInt(prompt("Plz Enter Number 1"));

// var num2 = parseInt(prompt("Plz Enter Number 2"));

// var sum = num1 + num2;
// console.log('Sum is = ' + sum);

// var sub = num1 - num2;
// console.log('Sub is = ' + sub);

// var multi = num1 * num2;
// console.log('Multi is = ' + multi);

// var modu = num1 % num2;
// console.log('Modu is = ' + modu);

// var div = num1 / num2;
// console.log('Div is = ' + div);

// let base = parseInt(prompt('Enter Base'));

// let height = parseInt(prompt('Enter height'));

// let square = base * height;

// console.log("Square is : " + square);

// let base1 = parseInt(prompt('Enter Base'));

// let base2 = parseInt(prompt('Enter Base'));

// let height = parseInt(prompt('Enter height'));

// let trapeziam = ((base1 + base2) * height) / 2;

// console.log("trapeziam is : " + trapeziam);

// let farn = parseFloat(prompt('Enter Farenheit to Check Celsius'));

// let cesli = (farn - 32) * 5/9;

// cesli = cesli.toFixed(4)

// document.write(farn + "<sup>o</sup>F " + ' Farenheit is : ' + cesli + "<sup>o</sup>C" + " Ceslious");

// let celsi = parseFloat(prompt('Enter Celsious to Check Farenheit'));

// let farn = (celsi * 9/5) + 32;

// farn = farn.toFixed(1)

// document.write(celsi + "<sup>o</sup>C " + ' Ceslious is : ' + farn + "<sup>o</sup>F" + " Farenheit");

// var num = parseInt(prompt('Enter Number for check Even Or Odd'));

// if(num % 2 == 0){
//     console.log('Even');
// }

// if(num % 2 != 0){
//     console.log('Odd');
// }

// if(num % 2 == 0){
//     console.log('Even');
// }else{
//     console.log('Odd');
// }

// var marks = parseFloat(prompt("Enter Marks To Check Grade"));

// if(marks >= 80 && marks <= 100){
//     console.log('A+');
// }
// else if(marks >= 70 && marks <= 79){
//     console.log('A-');
// }
// else if(marks >= 60 && marks <= 69){
//     console.log('A');
// }
// else if(marks >= 50 && marks <= 59){
//     console.log('B');
// }
// else if(marks >= 40 && marks <= 49){
//     console.log('C');
// }
// else if(marks >= 33 && marks <= 39){
//     console.log('D');
// }
// else if(marks > 100 || marks < 0){
//     console.log('Enter A invalid Number');
// }
// else{
//     console.log('You Fail');
// }

// let num1 = parseInt(prompt("Enter number One"));
// let num2 = parseInt(prompt("Enter number Two"));
// let num3 = parseInt(prompt("Enter number Three"));

// if(num1 > num2 && num1 > num3){
//     console.log("Numbe 1 is Bigger");
// }else if(num2 > num1 && num2 > num3){
//     console.log('Number 2 is Bigger');
// }else{
//     console.log('Number 3 is Bigger');
// }

// num1 > num2 && num1 > num3 ? console.log('Number 1 is Bigger : ' + num1 + " <br> Num 2 Was : " + num2 + " Num 3 Was : " + num3) : num2 > num1 && num2 > num3 ? console.log('Number 2 is Bigger : ' + num2 + "<br> Num 1 Was : " + num1 + " Num 3 Was : " + num3) : console.log('Number 3 is Bigger : ' + num3 + " <br> Num 2 Was : " + num2 + " Num 1 Was : " + num1);

// let letter = prompt('Enter Letter to Check Vowel Or Consonent');

// letter = letter.toLocaleLowerCase();

// if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//     console.log("Letter " + " ' " + letter + " ' " + " is Vowel");
// }
// else{
//     if(Number(letter)){
//         console.log('plz enter a Letter insead of Number');
//     }else{
//         console.log("Letter " + " ' " + letter + " ' " + " is Consonant");
//     }
// }

// let num = parseInt(prompt("Enter Number 0 to 9"));

// switch (num) {
//   case 0 :
//     console.log("ZERO");
//     break;
//   case 1 || "1":
//     console.log("ONE");
//     break;
//   case 2 || "2":
//     console.log("TWO");
//     break;
//   case 3 || "3":
//     console.log("THREE");
//     break;
//   case 4 || "4":
//     console.log("FOUE");
//     break;
//   case 5 || "5":
//     console.log("FIVE");
//     break;
//   case 6 || "6":
//     console.log("SIX");
//     break;
//   case 7 || "7":
//     console.log("SEVEN");
//     break;
//   case 8 || "8":
//     console.log("EIGHT");
//     break;
//   case 9 || "9":
//     console.log("NINE");
//     break;
//   default:
//     console.log("Enter a Valid Value");
// }

// let age = parseInt(prompt("Enter Age to Confirm Married"));

// switch (age < 18 || age >= 18) {
//   case 18:
//     console.log("Not Eligable");
//     break;
//   case 22:
//     console.log("Eligable");
//     break;
//   default:
//     console.log("Enter a Valid Value");
// }

// if(age < 18){
//   console.log('Young');
// }else if(age >= 18 && age <= 50){
//   console.log('Adult');
// }else if(age > 50){
//   console.log('Old');
// }else{
//   console.log('Enter a Valid Value');
// }

// let letter = prompt("Enter Letter");

// letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//   case "e":
//   case "o":
//   case "i":
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }

// let i = [32, 43, 52, 66, 32, 11, 76, 64, 36, 76];

// i.forEach(function(x , b){
//   if(x % 2 == 0){
//     console.log( b  + ' = ' + x + ' Even');
//   }
//   else{
//     console.log(b  + ' = ' + x + ' odd');
//   }
// })

// for(let x = i; x <= i.length ; x++){

//   if(i % 2 == 0){

//     console.log(i[x] + ' Even');

//   }
//   else{

//     console.log(i[x] + ' Odd');

//   }

// }

// console.log(i);

// let sum = 0;

// for (let x = 1; x <= 5; x++) {
//   let num = parseInt(prompt("Enter Numbers"));

//   sum += num;

//   console.log(sum);

//   if (sum % 2 == 0) {

//     let number = parseInt(prompt("Enter If Number"));

//     for (let z = 1; z <= 5; z++) {

//       sum += number;

//       console.log(sum);

//     }
//   }
//   else{
//     console.log(sum);
//   }
// }

// let sum = 0;

// for(let i = 1; i<=5; i++){
//   sum += i;
//   console.log(sum);
// }

// let i = 1;

// while(i<=5){
//   console.log(i + i * i);
//   i++
// }

// let i = 1;

// do{
//   console.log(i);
//   i++;
// }while(i<=5)

// for(let i = 1; i <=20 ; i++){

//   if(i == 12){
//     continue;
//   }

//   console.log(i);

// }

// console.log('Done');

// 10 > 20 ? console.log("true") : console.log('false');

// var num1 = parseInt(prompt("Enter Number 1"));

// var num2 = parseInt(prompt("Enter Number 2"));

// var num3 = parseInt(prompt("Enter Number 3"));

// num1 > num2 && num1 > num3 ? console.log(num1 + " Num 1 is Bigger") : num2 > num1 && num2 > num3 ? console.log(num2 + ' Num 2 is bigger') : console.log(num3 + " Num 3 is bigger");

// let num = parseInt(prompt('Enter number to Square'));

// function square(){

//   let number = num * num;
//   console.log( 'Square is : ' +  number );

// }

// square()

// function calculation(num1 , num2){

//   let modu = num1 % num2;
//   console.log( "Modu is : " + modu);

//   let div = num1 / num2;
//   console.log("Div is : " + div);

//   let sub = num1 - num2;
//   console.log("Sub is : " + sub);

//   let sum = num1 + num2;
//   console.log("Sum is : " + sum);

//   let square = num1 * num2;
//   console.log("Square is : " + square);

// }

// calculation(2,3);

// (function calculation(num1 , num2){

//   let modu = num1 % num2;
//   console.log( "Modu is : " + modu);

//   let div = num1 / num2;
//   console.log("Div is : " + div);

//   let sub = num1 - num2;
//   console.log("Sub is : " + sub);

//   let sum = num1 + num2;
//   console.log("Sum is : " + sum);

//   let square = num1 * num2;
//   console.log("Square is : " + square);

// })(50, 53);

// let hi = function hello(){
//   console.log("Hello");
// }

// hi();

// let names = ['names1', 'names2', 'names3', 'names4', 'names5'];

// names.forEach((x)=>{
//   console.log(x);
// })

// let names = new Array(5);

// names[0] = 'nayemm';
// names[1] = 'kamrul';
// names[2] = 'Arafat';
// names[3] = 'islam';
// names[4] = 'mobile';
// names[6] = 'iphone';
// names[7] = 'samsung';

// console.log(names[8]);

// let names = [['nayeem', 20, 'best'], ['kamrul', 15, 'biggest'], ['islam', 25, 'better']];

// names.forEach((x)=>{
//   console.log(x);
// })

// let names = ['kamrul', 'islam'];

// names.push('nayeem');

// console.log(names);

// names.pop();

// console.log(names);

// names.shift()

// console.log(names);

// names.unshift('Arafat');

// console.log(names);

// let desh = ['bangladesh', 'india'];

// let country = ['afganistan', 'turkey'];

// let to = desh.concat(country);

// console.log(to);

// let number = [10, 20, 39, 49, 59, 69, 70, 80];

// for(let x = 0; x<number.length; x++){
//   console.log(number[x]);
// }

// let numb = new Array();

// for (let x = 0; x < 5; x++) {
//   numb[x] = parseInt(prompt('Enter Number'))
// }

// numb = numb.sort(function(a, b){
//   // return a - b;
//   return b-a;
// })

// console.log(numb);

// let names = ['kamrul', 'islam', 'nayeem', 'arafat'];

// for(let x = 0; x < names.length; x++){
//   console.log();
// }

// console.log(names);
// names.splice(2, 0, 'anbul', 'nimsaj', 'bahubali')
// console.log(names);
// names.splice(1, 2);
// console.log(names);
// let sl = names.slice(1);
// console.log(sl);
// names.sort()
// console.log(names);
// names.reverse();
// console.log(names);

// function highnumber(score){
//   let max = score[0];

//   for(let x = 1; x < score.length ; x++){
//     if(max < score[x]){
//         max = score[x];
//     }
//   }
//   return max;

// }

// var number = [12, 43, 65, 76 , 98, 32, 65];

// let high = highnumber(number);

// console.log(high);

// function highnumber(score){
//   let max = score[0];

//   for(let x = 1; x < score.length; x++){
//     if(max < score[x]){
//       max = score[x];
//     }
//   }
//   return max;
// }

// let number = [23, 54, 78, 98, 29, 54, 65, 87, 32, 76, 99];

// let high = highnumber(number);

// console.log(high);

// number.sort((a,b)=>{
//   return a - b;
// })

// console.log(number);

// function highestrunner(playinfo){

//     let maxrunner = playinfo[0][0];

//     let maxrun = playinfo[0][1];

//     for(let x = 1; x < playinfo.length; x++){
//       if(maxrun < playinfo[x][1]){
//         maxrun = playinfo[x][1];
//         maxrunner = playinfo[x][0];
//       }
//     }
//     return maxrunner;

// }

// let number = [
//   ['kamrul', 100],
//   ['walid', 33],
//   ['abir', 25],
//   ['habib', 18],
//   ['siam', 88],
//   ['tahsan', 1001]
// ];

// let high = highestrunner(number);

// console.log(high);

// for(let x = 0; x<number.length; x++){
//   console.log(number[x]);
// }

// function highnumber(score){

//   for(let i = 0; i < 5; i++){
//     number[i] = parseInt(prompt('Enter Number'))
//   }

//   let max = score[0];

//   for(let x = 1; x < score.length; x++){
//     if(max < score[x]){
//       max = score[x]
//     }
//   }

//   console.log(max);

// }

// let number = new Array();

// highnumber(number);

// function highestrunner(playinfo){

//   let maxrunner = playinfo[0][0];

//   let maxrun = playinfo[0][1];

//   for(let x = 1; x < playinfo.length ; x++){
//     if(maxrun < playinfo[x][1]){
//       maxrun = playinfo[x][1];
//       maxrunner = playinfo[x][0];
//     }
//   }

//   console.log(maxrunner);

// }

// let names = [

//   ['kamrul', 100],
//   ['walid', 33],
//   ['abir', 25],
//   ['habib', 18],
//   ['siam', 88],
//   ['tahsan', 101]

// ];

// highestrunner(names);

// let long = ['kamrul', 'islam', 'nayeem', 'arafat', 'mollick', 'abir', 'walid'];

// let len = long.length;

// function longName(name){

//   let long_Name = name[0].length;

//   for(let x = 1; x < len; x++){

//     if(long_Name < name[x].length){
//       long_Name = name[x];
//     }
//   }

//   return long_Name;

// }

// let lon = longName(long);

// console.log(lon);

// let student1 = {
//   name: 'nayeem',
//   age: 20,
//   address: 'Dhaka',
//   proffesion: 'Web Developer',
// }

// console.log('your Name : ' + student1.name + ' Your age : ' + student1.age + " your address " +  student1.address + " your Proffesion " + student1.proffesion);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.address);
// console.log(student1.proffesion);

// function Student(name, age, address, Proffesion){
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.Proffesion = Proffesion;

//   this.display = function(){
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.address);
//     console.log(this.Proffesion);
//   }

// }

// let student1 = new Student('nayeem', 20, 'Dhaka', 'Web Developer');

// console.log(student1);

// student1.display();

// console.log(Math.abs(-45));
// console.log(Math.floor(32.9));
// console.log(Math.ceil(32.1));
// console.log(Math.sqrt(2, 5));
// document.write(Math.floor(Math.random() * 5) + 1);
// console.log(Math.floor(Math.random() * 5) + 1);
// console.log(Math.random() * 5);

// let numberOfWins = 0;
// let numberOfLoose = 0;

// for (let x = 0; x < 5; x++) {

//   let guessNumber = parseInt(prompt("Enter Guessing Number"));

//   let randomNumber = Math.floor(Math.random() * 5) + 1;

//   if (guessNumber == randomNumber) {

//     console.log("You Win");
//     numberOfWins++
//   }
//   else{
//     console.log("You Loose");
//     numberOfLoose++
//   }
// }

// document.write("You Won : " + numberOfWins + " Times <br>");
// document.write("You Losse : " + numberOfLoose + " Times <br>");

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());

// document.getElementById('heading').innerText = "This Text is changed";
// document.getElementById('heading').style.color = 'red';

// document.getElementsByClassName('head')[0].innerText = 'this is class head';

// let x = document.getElementsByTagName('h1')

// console.log(x);

// document.getElementsByTagName('h1')[1].innerHTML = 'this is Second h1 tag';

//

// document.querySelector('a').innerHTML = 'a TEXt Changed';

// document.querySelector('li a').innerHTML = "Ul li text changed";

// document.querySelector('div a').innerHTML = 'div text changed'

// let li =  document.querySelectorAll('li');

// console.log(li);

// let num = 0;
// function hello(){
//     ++num
//     let p1 = document.querySelectorAll('p')[0];
//     p1.innerHTML = 'this button is Clicked ' + num + ' Times';

//     if(num > 5){
//         p1.innerHTML = "You Reach Maximum Capacity";
//     }

// }

// let link = document.querySelectorAll('a')[0];

// link.style.textDecoration = 'none';
// link.style.fontWeight = 'bold';
// link.style.fontSize = '1.5rem';
// link.style.color = 'white';
// link.style.letterSpacing = '5px';

// link.addEventListener('click', ()=>{
//     link.innerHTML = 'Link Clicked';
// })

// console.log(link);

// let div = document.querySelector('div');

// let h1 = document.querySelectorAll('h1')[0];

// let h2 = document.querySelectorAll('h1')[2];

// let text = document.createTextNode('THIS IS NEW H1');

// h1.appendChild(text);

// div.appendChild(h1);

// div.removeChild(h2);

// let newHead = document.createElement('h1');

// let text = document.createTextNode('This is new Head');

// let div = document.querySelector('#div');

// newHead.appendChild(text);

// div.appendChild(newHead);

// console.log(div);

// let div = document.querySelector('div');

// let removeChild = document.querySelectorAll('h1')[2];

// div.removeChild(removeChild);

// let div = document.querySelector('#div');

// let topHead = document.querySelectorAll('h1')[0];

// let newHead = document.createElement('h1');

// let textNode = document.createTextNode('Top Custom Head');

// newHead.appendChild(textNode);

// div.insertBefore(newHead, topHead);

// let list = document.querySelectorAll('.student1')[2];

// let div = list.parentElement;

// console.log(div);

// let list = document.querySelectorAll('li a')[1];

// let nextElement = list.previousElementSibling;

// console.log(nextElement);

// let incre = 0;
// let next = document.querySelector("#next");
// let prev = document.querySelector("#prev");
// let number = document.querySelector("#para");
// let para = (document.querySelector("p"));
// para.innerHTML = incre;

// let div = document.querySelector("div");
// let button = document.createElement("button");
// let btnText = document.createTextNode("Reset");
// div.style.marginTop = '10px';
// button.appendChild(btnText);
// div.appendChild(button);

// function nextt(){

//     incre++

//     para.innerHTML = incre;

//     if(incre >= 10){
//         para.innerHTML = incre = 10;
//     }

// }

// function prevv(){

//     incre--

//     para.innerHTML = incre;

//     if(incre < 0){
//         para.innerHTML = incre = 0;
//     }

// }

// div.addEventListener('click', function(){
//     para.innerHTML = incre = 0;
// })

// let imgtag = document.querySelector('#img');

// let images = ['../Class - 03/images/1.jpg', '../Class - 03/images/im.jpg','../Class - 03/images/img.jpg', '../Class - 03/images/imgg.jpg'];

// let count = 0;

// function nextt(){
//     count++;
//     if(count >= images.length){
//         count = 0;
//         imgtag.src = images[count];
//     }
//     else{
//         imgtag.src = images[count];
//     }
// }

// function prevv(){
//     count--;
//     if(count < 0){
//         count = images.length - 1;
//         imgtag.src = images[count];
//     }
//     else{
//         imgtag.src = images[count];
//     }
// }

// let number = ['zero',1,'two',3,'Four',5,'Six',7,'Eight',9,'ten'];
// let len = number.length
// let para = document.querySelector('#para');
// let count = 0;
// para.innerHTML = count;

// function nextt(){
//     count++;
//     if(count >= len){
//         count = 0;
//         para.innerHTML = number[count];
//     }
//     else{
//         para.innerHTML = number[count];
//     }
// }

// function prevv(){
//     count--;
//     if(count < 0){
//         count = len - 1;
//         para.innerHTML = number[count];
//     }
//     else{
//         para.innerHTML = number[count];
//     }
// }

// let para = document.querySelector('#para');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', ()=>{
//     para.classList.add('para-style')
//     // setTimeout(() => {
//     //     para.classList.remove('para-style');
//     // }, 1000);
// })

// btn2.addEventListener('click', ()=>{
//     para.classList.remove('para-style')
// })

// btn1.addEventListener('click', function(){
//     alert('this btn is clicked');
// })

// btn1.addEventListener('click', myFunction);

// function myFunction(){
//     alert('thisi is out of function');
// }

// let para = document.querySelector("#para");

// let countt = document.querySelector("#count");

// let len = document.querySelectorAll(".myButton").length;

// let div = document.querySelector("div");
// let button = document.createElement("button");
// let btnText = document.createTextNode("Reset");
// div.style.marginTop = '10px';
// button.appendChild(btnText);
// div.appendChild(button);

// button.classList.add('btn');
// button.classList.add('btn-danger');

// let count = 0;

// for(let i = 0; i < len; i++){

//     document.querySelectorAll('.myButton')[i].addEventListener('click', function(){

//         count++

//         let text = this.innerHTML;

//         para.innerHTML = text + " is Clicked";

//         countt.innerHTML = 'Clicked ' + count + ' Times';

//     })

// }

// div.addEventListener('click', function(){

//     para.innerHTML = count = 0;

//     countt.innerHTML = 'Reset Clicked ' + count;
// })

// var para = document.querySelector("p");

// var len = document.querySelectorAll(".myButton").length;

// for (i = 0; i < len; i++) {
//   document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//       var text = this.innerHTML;
//       para.innerHTML = text + " is Clicked";
//       para.classList.toggle('para-style');
//     });
// }

// let para = document.querySelector("#para");
// let buttons = document.querySelectorAll(".buttons").length;

// for (let i = 0; i < buttons; i++) {

//     document.querySelectorAll('.buttons')[i].addEventListener("click", function () {
//     let text = this.innerHTML;
//     let selectedButton = document.querySelector('.'+ text);
//     para.innerHTML = text +  " is Clicked";
//     para.style.marginLeft = '20px';
//     para.style.marginTop = '20px';
//     para.style.fontSize = '1.5rem';
//     playAudio(text);
//     playAnimation(text);
//   });

// }

// function playAudio(text){
//     switch(text){
//         case 'A':
//         var audio = new Audio('../Class - 03/sounds/a.mp3');
//         audio.play();
//         break;
//         case 'B':
//         var audio = new Audio('../Class - 03/sounds/b.mp3');
//         audio.play();
//         break;
//         case 'C':
//         var audio = new Audio('../Class - 03/sounds/c.mp3');
//         audio.play();
//         break;
//         case 'D':
//         var audio = new Audio('../Class - 03/sounds/d.mp3');
//         audio.play();
//         break;
//         case 'E':
//         var audio = new Audio('../Class - 03/sounds/e.mp3');
//         audio.play();
//         break;
//         case 'F':
//         var audio = new Audio('../Class - 03/sounds/f.mp3');
//         audio.play();
//         break;
//         case 'G':
//         var audio = new Audio('../Class - 03/sounds/g.mp3');
//         audio.play();
//         break;
//     }
// }

// function playAnimation(text){
//    let selectedButton = document.querySelector('.'+ text);

//    selectedButton.classList.add('anim');
//    setTimeout(()=>{
//        selectedButton.classList.remove('anim');
//    },100)

// }

// document.addEventListener('keypress', (e)=>{
//     let text = event.key;
//     console.log(text);
// })

// let x = 5;

// if(true){
//     let x = 6;
//     console.log(x);
// }

// console.log(`The number was ${x}`);

// function add(x, y){
//     let sum = x * y;
//     console.log(sum);
// }

// add(34, 85);

// const add = (x,y)=>{
//     let sum = x * y;
//     console.log(`Sum is = ${sum}`);
// }

// add(6, 5);

// x = 20;

// console.log(x);

// const default_parameter = (text = 'Default Message')=>{
//     console.log(text);
// }

// // default_parameter('Hello this is Default message');
// default_parameter();

// const rest_parameter = (x, y, ...z) => {
//   console.log(` ${x} ${y} ${z} `);
// };

// rest_parameter('Hello', 'this is', 'rest_parameter');

// rest_parameter(1,2,3,4,5,6,7,8,9);

// function addition(x,y,z){
//     return x + y + z;
// }

// let num = [12, 53, 67];

// console.log(addition(num[0],num[1], num[2]));

// console.log(addition(...num));

// let num1 = [12, 53, 54];

// let num2 = [32,...num1, 23, 65];

// let numbers = num1.concat(num2);

// let numbers = [...num1, ...num2];

// console.log(numbers);
// num2.sort()
// console.log(num2);

// let p1 = {
//     'name': 'kamrul islam',
//     'age': 20
// }

// let p2 = {
//     ...p1,
//     'address' : 'your Location',
//     'boolean' : 'true',
// }

// let p = {...p1, ...p2};

// p2.forEach((x)=>{
//     console.log(x);
// })

// console.log(p2.name);
// console.log(p2.age);
// console.log(p2.address);
// console.log(p2.boolean);

// function StudentInfo(name, age){
//     return{
//         name: name,
//         age: age
//     }
// }

// console.log(StudentInfo('kamrul', 20));

// function StudentInfo(name, age){
//     return{
//         name,
//         age,
//     }
// }

// console.log(StudentInfo('nayeem', 24));

// const msg = {
//     body: function(msg = 'this is consice method'){
//         return msg;
//     },
// }

// console.log(msg.body("Hello this is default parameter"));

// const message = {
//     'body name'(){
//         return 'this is also concise method';
//     }
// }

// console.log(message['body name']());

// const msg = {
//     body(){
//         return 'this is one of concise method';
//     }
// }

// console.log(msg.body());

// let names = ['s1', 's2', 's3', 's4', 's5', 's6'];

// for(let name of names){
//     console.log(name);
// }

// for(let i = 0; i < 6; i++){
//     console.log(names[i]);
// }

// let names = {
//   name: "kamarul islam nayeem",
//   age: 20,
//   school: "T&T High School",
//   subject: "CSE",
//   note: "YES",
// };

// // for(let x in names){
// //     console.log(` ${x} : ${names[x]} `);
// // }

// for (let x in names) {
//   console.log(x);
//   console.log(names[x]);
// }

// let names = ['s1', 's2', 's3', 's4', 's5', 's6'];

// names.forEach(number);

// function number(x){
//     console.log(x);
// }

// for(let i = 0; i<names.length ; i++){
//     console.log(names[i]);
// }

// names.forEach((x)=>{
//     console.log(x);
// })

// names.forEach((value, key, arr)=>{
// document.write(`${value}`);
// console.log(`${value}`);
// })

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// numbers.forEach((value, index, arr)=>{
//     arr[index] = (value + 5);
// })

// console.log(numbers);

// numbers.forEach((x)=>{
//     squareNumber.push(x * x)
// })

// console.log(squareNumber);

// squareNumber.pop();

// console.log(squareNumber);

// let squareNumber = numbers.map((x)=>{
//     return (x * x);
// })

// console.log(squareNumber);

// function defalt(msg = 'hello this is default parameter'){
//     console.log(msg);
// }

// defalt('bangladesh')

// function resst(a, b, ...c){
//     console.log(a , b, c);
// }

// resst('hellp', 23, 'heoi', 3259);

// let num = [23, 65, 765];

// let num2 = [54, ...num, 98, 76];

// let number = [...num, ...num2];

// console.log(num2
// );

// x = 20;

// console.log(x);

// var x;

// let x ;

// const msg = (x)=>{
//     console.log(x * x);
// }

// msg(10)

// let number = new Array();

// function highNumber(num){

//     for(let i = 0; i < 5; i++){
//         number[i] = parseInt(prompt('enter Number'));
//     }

//     let max = num[0];

//     for(let x = 1; x < num.length; x++){
//         if(max < num[x]){
//             max = num[x];
//         }
//     }

//     return max;

// }

// let number = [23, 65, 32, 99, 76, 32, 89, 54, 87];

// let maxx = highNumber(number);

// console.log(maxx);

// console.log(number);

// console.log(number);

// function highestrunner(playinfo){

//     let maxrunner = playinfo[0][0];
//     let maxrun = playinfo[0][1];

//     for(let x = 1; x < playinfo.length; x++){

//         if(maxrun < playinfo[x][1]){
//             maxrun = playinfo[x][1];
//             maxrunner = playinfo[x][0];
//         }

//     }

//     return maxrunner;

// }

// let players = [
//     ['Mehedi', 20],
//     ['Abir', 23],
//     ['Habib', 25],
//     ['Walid', 335],
//     ['Nayeem', 56],
//     ['Islam', 76],
//     ['Siam', 32]
// ]

// let maxxrun = highestrunner(players);

// console.log(maxxrun);

// let num = [23, 5, 65];

// let num2 = [32, 55, 87];

// let numbers = num.concat(num2);

// console.log(numbers);

// let btn = document.querySelector('button');

// btn.innerHTML = "A";
// btn.style.color = 'red';
// btn.style.fontSize = '1rem';

// btn.addEventListener('click', function(){
//     btn.innerHTML = "C";
//     btn.style.color = 'pink'
// })

// let div = document.querySelector('div');

// let h1 = document.createElement('li');

// let text = document.createTextNode('Hello this is new text');

// h1.appendChild(text);

// div.appendChild(h1);

// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// let liText = document.createTextNode('Fruit list Add');
// li.appendChild(liText);
// let old_li = document.querySelectorAll('li')[3];
// ul.insertBefore(li, old_li)

// function Student(name, age){
//     return{
//         // name: name,
//         // age: age,
//         name,
//         age
//     }
// }

// let st1 = Student('Islam Nayyem', 20)

// console.log(st1);

// let st1 = {
//     name: 'kamrul',
//     age: 20,
//     school: 'T&T',
//     lang: ['bangla', 'english', 'hindi']
// }

// console.log(st1);

// function Students(name,age,school,lang){
//     this.name = name,
//     this.age = age,
//     this.school = school,
//     this.lang = lang,
//     this.display = ()=>{
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.school);
//         console.log(this.lang);
//     }
// }

// let st1 = new Students('kamrul', 20, 'T&T', ['bangla', 'hindi', 'english']);

// st1.display()

// const obj = {
//     'body msg'(){
//         return 'hello';
//     }
// }

// console.log(obj['body msg']());

// const msg = {
//     body : function(){
//         return 'Hello';
//     }
// }

// console.log(msg.body());

// const body = {
//     'body msg'(){
//         return 'body msg';
//     }
// }

// console.log(body['body msg']());

// const body = {
//     body(){
//         return 'just body';
//     }
// }

// console.log(body.body());

// let names = ['name1', 'name2', 'name3', 'namn4', 'name5', 'name6', 'name7'];

// for(let name of names){
//     console.log(name);
// }

// let obj = {
//     name : 'nayeem',
//     age : 20,
//     school : 'T&T',
//     Course : 'Web Development',
//     lang : ['bangla', 'english', 'hindi']
// }

// for( let objjj in obj){
//     // console.log( objjj+ ' : ' + obj[objjj]);
//     console.log(`${objjj} : ${obj[objjj]}`);
// }

// let numbers = [34, 65, 87, 43, 76, 98, 32, 66];

// let filter = numbers.filter((x)=>{
//     return x > 50;
// }).sort((a, b)=>{ return a - b });

// console.log(filter);

// .map((y)=>{
//     return y + 10;
// })

// let squareNumber = numbers.map((x)=>{
//     return x * x
// })

// console.log(squareNumber);

// numbers.map((valur, key, arr)=>{
//     arr[key] = (valur + 5)
// })

// console.log(numbers);

// let squareNumber = [];

// numbers.forEach((i)=>{
//     squareNumber.push(i - 5)
// })

// console.log(squareNumber);

// numbers.forEach((x)=>{
//     squareNumber.push(x * x)
// })

// console.log(squareNumber);

// for(let i = 0; i <= 100 ; i++){
//     console.log(i);
// }

// numbers.forEach((i)=>{
//     console.log(i);
// })

// function noi(){
//     console.log("Hello");
// }

// noi()

// const noi = ()=>{
//     console.log("hello this is arrow function");
// }

// noi();

// function amin(){
//     return 'HEllo this is return function';
// }

// console.log(amin());

// const amin = x=> x;

// console.log(amin('Hello this is pass function'));

// const x = x=> x * x;

// console.log(x(3));

// let numbers = [34, 65, 87, 43, 76, 98, 32, 66];

// let filt = numbers.filter(x => x > 40).sort((a,b)=> a - b);

// console.log(filt);

// let sum = numbers.map(x => x + 10)

// console.log(sum);
// let sum = [];

// numbers.forEach(x=>sum.push(x + 5));

// console.log(sum);

// function helo(x){
//     return x;
// }

// console.log(helo("hello guys"));

// const helo = x => x;

// console.log(helo("Hellosd idf e sidf i skdlf ie"));

// function number(num1 , num2){
//     return num1 + num2;
// }

// console.log(number(100, 392));

// const number = (num1 , num2)=> num1 + num2;

// console.log(number(323, 653));

// const number = num => num * num;

// console.log(number(20));

// let students = [
//     {
//         name: 'nayeem',
//         age: 20,
//         cgpa: 3.59,
//     },
//     {
//         name: 'kamrul',
//         age: 25,
//         cgpa: 3.84,
//     },
//     {
//         name: 'arafat',
//         age: 24,
//         cgpa: 4.1,
//     },
//     {
//         name: 'walid',
//         age: 34,
//         cgpa: 3.33,
//     },
//     {
//         name: 'siam',
//         age: 22,
//         cgpa: 3.34,
//     },
// ]

// const hello = ()=> students.filter( x=> x.cgpa > 3).map( y=> y.name);

// console.log(hello());

// function student_name(){
//     return students.filter(function(x){
//         return x.cgpa > 3;
//     }).map(function(y){
//         return y.name;
//     }).sort()
// }

// let stu_name = student_name();

// let names = stu_name.forEach(function(x){
//     return x;
// })

// console.log(stu_name);
// console.log(names);

// let numbers = [23, 54, 76, 87, 98, 54, 98];

// console.log(numbers);

// let [n1, n2, n3 , n4, n5, n6, n7] = numbers;

// console.log(n1, n2);

// let a = 10, b = 20;

// console.log(a, b);

// [a,b] = [b,a];

// console.log(a, b);

// let a = 10;

// let b = 20;

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// const students ={
//     id: 20,
//     name: 'nayeem',
//     address: 'school'
// }

// console.log(students);

// const{id, name, address} = students;

// console.log(id , address, name);

// let students = {
//     name : 'arafat',
//     id : 20,
//     address : 'Dhaka',
//     lang: {
//         native: 'Bangla',
//         beginner : 'English'
//     }
// }

// let {name, id, address, lang} = students;

// console.log(lang.beginner, lang.native);

// let {native, beginner} = students.lang;

// console.log(native);

// let students = {
//     name: 'kamrul',
//     age: 20
// }

// const stu = ({name, age})=> `${age} : ${name}`;

// console.log(stu(students));

// const stu = (stu)=> `${stu.name} : ${stu.age}`;

// console.log(stu(students));

// function stu(stu){
//     console.log(`${stu.name} : ${stu.age}`);
// }

// stu(students)

// const stu1 = student=> `Name : ${student.name} , Age : ${student.age}`;

// console.log(stu1(students));

// function stu(student){
//     console.log(`Name : ${student.name} , Age : ${student.age}`);
// }

// stu(students);

// const stu = ({name, age})=>  `name : ${name} , age : ${age} `

// console.log(stu(students));

// const stu = student=>{
//     console.log(`${student.name} : ${student.age}`);
// }

// stu(students);

// let number = [23, 56, 65, 87];

// const num = ([on, tw, th, fo]) =>  `${fo} : ${tw} : ${th} : ${on}`;

// console.log(num(number));

// const num = (num)=> `${num[2]} : ${num[3]} : ${num[0]} : ${num[1]}`;

// console.log(num(number));

// function num(num){
//     console.log(`${num[0]} : ${num[1]} : ${num[2]} : ${num[3]}`);
// }

// num(number);

// function ex(msg){
//     return msg;
// }

// console.log(ex('hello'));

// const exx = (msgg)=>{ return msgg }

// console.log(exx('helllosid'));

// const exii = mii=> mii;

// console.log(exii('sortest function'));

// let numbers = [11, 53, 67, 99, 38,20, 99, 33];

// let fini = numbers.findIndex(x => x % 2=== 0);

// console.log(fini);

// const fin = value => value % 2 != 0;

// let ind = numbers.findIndex(fin);

// console.log(ind);

// function fin(x){
//     return x % 2 == 0;
// }

// console.log(ind);

// const even = (value, index, array)=>{
//     if(value % 2 == 0){
//         return value;
//     }
// }

// let en = numbers.find(even);

// console.log(en);

// let en = numbers.find(x=> x % 2 === 0);

// console.log(en);

// function even(x){
//     return x % 2 === 0;
// }

// console.log(en);

// let obj = [
//     {
//         id:100,
//         gpa:3.9
//     },
//     {
//         id:101,
//         gpa:4.2,
//     },
//     {
//         id:102,
//         gpa: 3.5,
//     },
//     {
//         id:103,
//         gpa:null,
//     }
// ];

// const gp = x=> x.gpa >= 4;

// let fin = obj.findIndex(gp);

// console.log(fin);

// function gp(x){
//    return x.gpa >= 4;
// }

// console.log(fin);

// let fin = obj.find(x=> x.gpa == null);

// console.log(fin);

// for(let names of obj){
//     for(let objjj in names){
//         console.log(`${objjj} : ${names[objjj]}`);
//     }
// }

// let obj = {
//     id: 100,
//     name:'kamrul',
//     school: 'T&T',
//     lang: {
//         native: 'bangla',
//         fluent: 'hindi',
//         beginner: 'english'
//     }
// }

// const {id,name, school, lang} = obj;

// console.log(lang);

// for(let objjj in obj){
//     console.log(`${objjj} : ${obj[objjj]}`);
// }

// const msg = 'this is message';

// console.log(msg.startsWith('this', 0));
// console.log(msg.endsWith('message'));
// console.log(msg.includes('is'));

// import{text} from './module.js';

// console.log(text);

// export function hello(x){
//     return x * x;
// }

// import{obj} from './module.js';

// let max_age = obj.filter(x=> x.age > 25)

// for(let age in max_age){
//    for(let ma in max_age[age]){
//     console.log(`${ma} : ${max_age[age][ma]}`);
//    }
// }

// for(let ob of obj){

//     // let x = ob.find(y=> y.age > 30);

//     // console.log(x);

//     // for(let oj in ob){
//     //     console.log(`${oj} : ${ob[oj]}`);
//     //     // let x =
//     // }

//     console.log(ob);

// }

// console.log(msg);
// console.log(number);

// number.forEach((x)=>{
//     console.log(x);
// })

// for(let num of number){
//     console.log(num);
// }

// class Student{
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }

//     set studentName(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return this.id + " " + this.name
//     }
// }

// let s1 = new Student(100, 'kamrul');

// s1.studentName = 'nayeem';

// for(let s in s1){
//     console.log(`${s} : ${s1[s]}`);
// }

// let s2 = s1.studentName = 'kamrul';

// console.log(s2);

// let s1 = new Student();

// console.log(s1.studentName);

// for(let s in s1){
//     console.log(`${s} : ${s1[s]}`);
// }

// console.log('task one');
// console.log('task two');
// console.log('task three');
// console.log('task four');
// console.log('task five');

// const taskOne = ()=>{
//     console.log('task One');
// }

// const dataLoading = ()=>{
//     console.log('task Two. data loading');
// }

// const taskTwo = ()=>{
//     setTimeout(dataLoading, 1000)
// }
// const taskThree = ()=>{
//     console.log('task Three');
// }
// const taskFour = ()=>{
//     console.log('task Four');
// }
// const taskFive = ()=>{
//     console.log('task Five');
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// function square(x){
//     console.log(`Square of ${x} : ${x * x}`);
// }

// function highorder(num, callback){
//     callback(num);
// }

// highorder(10, square)

// function hello(){
//     console.log(`hello this is for CallBack Function`);
// }

// function fai(out, hei){ hei(out) };

// fai('hello' ,hello);

//

// class Class{
//     constructor(id, name, age,email){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     set studentNames(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return 'Student Name : ' + this.name + ", ID : " + this.id + ", age : " + this.age + ', email : ' + this.email;
//     }

// }

// let s1 = new Class(100, 'kamrul', 24, 'Naeem8541@gmail.com');
// let s2 = new Class(101, 'nayeem', 23, 'Naeem85@gmail.com');
// let s3 = new Class(102, 'islam', 27, 'Naeem851@gmail.com');
// let s4 = new Class(103, 'arafat', 23, 'Naeem541@gmail.com');
// let s5 = new Class(104, 'sojib', 25, 'Naeem854@gmail.com');
// let s6 = new Class(105, 'raihan', 22, 'Naeem41@gmail.com');
// let s7 = new Class(106, 'rahman', 21, 'Naeem81@gmail.com');
// let s8 = new Class(107, 'kobir', 26, 'Naeem8@gmail.com');

// console.log(s1);

// s1.studentNames = 'Arafat';

// console.log(s1);

// console.log(s1.studentInfo);

// console.log(s2);
// console.log(s3);
// console.log(s4);
// console.log(s5);
// console.log(s6);
// console.log(s7);
// console.log(s8);

// console.log('t1');
// console.log('t2');
// console.log('t3');
// console.log('t4');
// console.log('t5');
// console.log('t6');

// const taskOne = ()=>{
//     console.log('task One');
// }

// const taskTwo = ()=>{
//     console.log('task Two');
// }

// const dataLoading = ()=>{
//     console.log('task Three. data loading');
// }

// const taskThree = ()=>{
//     setTimeout(dataLoading , 500)
// }
// const taskFour = ()=>{
//     console.log('task Four');
// }
// const taskFive = ()=>{
//     console.log('task Five');
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// function helo(msg){
//     console.log(`Sum is ${msg} : ${msg + msg}`);
// }

// function higherOrder(msg, message){
//     message(msg)
// }

// const hel = (num, callback)=> callback(num);

// hel(123,helo);

// const taskOne = callback=>{
//     setTimeout(()=>{
//         console.log('Task One');
//         callback();
//     },500)
// }

// const taskTwo = callback=>{
//     setTimeout(()=>{
//         console.log('Task Two');
//         callback();
//     }, 400)
// }

// const taskThree = callback=>{
//     setTimeout(()=>{
//         console.log('Task Three');
//         callback();
//     },300)
// }

// const taskFour = callback=>{
//     setTimeout(() => {
//         console.log('Task Four');
//         callback();
//     }, 200);
// }

// const taskFive = callback=>{
//     setTimeout(() => {
//         console.log('Task Five');
//         callback();
//     }, 100);
// }

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive(()=>{

//                 })
//             })
//         })
//     })
// });

// let promise1 = new Promise(function(resolve, reject){

//     if(false){
// resolve( setTimeout(() => {
//     console.log('Promise Complete');
// }, 1000));
//     setTimeout(() => {
//         resolve('Problem  Solved');
//     }, 1000)
// }
// else{
// reject( setTimeout(() => {
//     console.log('promise Not Complete');
// }, 1000));
//     setTimeout(() => {
//         reject('Problem Not Solved');
//     }, 1000)

// }

// resolve(
//     setTimeout(() => {
//         console.log('Problem Sloved');
//     }, 1000)
// )

// reject(
//     setTimeout(() => {
//         console.log('Problem not Sloved');
//     }, 1000)
// )

// })

// promise1.then(function(res){
//     return res;
// }).catch(function(err){
//     return err;
// })

// let promise1 = new Promise(function(resolve, reject){

// if(true){
//     resolve('promise 1 Complete');
// }
// else{
//     reject('Promise 1 Not Complete');
// }
//    setTimeout(() => {
//     resolve('promise 1 solved');
//    }, 1000);

// })

// promise1.then(res => console.log(res)).catch(err => console.log(err));

// let promise2 = new Promise(function(resolve, reject){

// if(true){
//     resolve('promise 2 Complete');
// }
// else{
//     reject('Promise 2 Not Complete');
// }
//     setTimeout(() => {
//         resolve('promise 2 solved');
//        }, 2000);

// })

// promise2.then(res => console.log(res)).catch(err => console.log(err));

// Promise.all([promise1, promise2]).then(([res1, res2])=>{
//     console.log(res1);
//     console.log(res2);
// })
// .catch(([err1, err2])=>{
//     console.log(err1);
//     console.log(err2);
// })

// let promise1 = new Promise(function(resolve, reject){

//    if(true){
//     setTimeout(() => {
//         resolve('promise 1 solved');
//        }, 300);
//    }
//    else{
//     reject(new Error('This is Error Message'));
//    }

// })

// promise1.then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// let promise2 = new Promise(function(resolve, reject){

//     setTimeout(() => {
//         resolve('promise 2 solved');
//        }, 400);

// });

// let promise1 = new Promise((resolve, reject)=>{
//     if(true){
//         resolve('Promise 1 Complete');
//     }
//     else{
//         reject(new Error('This is Error Message'));
//     }
// })

// let promise2 = new Promise((resolve, reject)=>{
//     if(true){
//         resolve('Promise 2 Complete');
//     }
//     else{
//         reject(new Error('This is Error Message'));
//     }
// })

// Promise.all([promise1, promise2]).then(([res1, res2])=>{
//     console.log(res1);
//     console.log(res2);
// })

// promise1.then((res)=>console.log(res)).catch((err)=> console.log(err.message))

// let promise1 = new Promise((res)=>{
//     setTimeout(() => {
//         res('Promise 1 Resolved')
//     }, 900);
// })

// let promise2 = new Promise((res)=>{
//     setTimeout(() => {
//         res('Promise 2 Resolved')
//     }, 1100);
// })

// promise1.then((res)=>console.log(res)).catch((err)=> console.log(err.message));

// promise2.then((res)=>console.log(res)).catch((err)=> console.log(err.message))

// let taskOne = ()=>{
//     return new Promise((resolve, reject)=>{
//         if(false){
//             resolve('Task One Complete');
//         }
//         else{
//             reject('Task One In-complete');
//         }
//     })
// };

// taskOne().then(res=> console.log(res) ).catch(err=> console.log(err))

// let taskOne = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task One Complete');
//     })
// }

// let taskTwo = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Two Complete');
//     })
// }

// let taskThree = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Three Complete');
//     })
// }

// let taskFour = ()=>{
//     return new Promise((res, rej)=>{
//         rej('Task Four Failed');
//     })
// }

// let taskFive = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Five Complete');
//     })
// }

// let taskSix = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Six Complete');
//     })
// }

// taskOne().then(res=>{
//     console.log(res);
// }).then(taskTwo).then(res=>{
//     console.log(res);
// }).then(taskThree).then(res=>{
//     console.log(res);
// }).then(taskFour).then(res=>{
//     console.log(res);
// }).then(taskFive).then(res=>{
//     console.log(res);
// }).then(taskSix).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// taskOne().then(res=>console.log(res))

// console.log('task One');
// console.log('task Two');
// console.log('task Three');
// console.log('task Four');
// console.log('task Five');

// let taskOne = ()=>{
//     console.log('Task One Complete');
// };

// let dataLoading = ()=>{
//     console.log('Task Two Completed, Data Loading');
// }

// let taskTwo = ()=>{
//     setTimeout(dataLoading , 1000);
// };

// let taskThree = ()=>{
//     console.log('Task Three Complete');
// };

// let taskFour = ()=>{
//     console.log('Task Four Complete');
// };

// let taskFive = ()=>{
//     console.log('Task Five Complete');
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// let taskOne = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task One Complete');
//     })
// }

// let taskTwo = ()=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res('Task Two Complete');
//         },1000)
//     })
// }

// let taskThree = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Three Complete');
//     })
// }

// let taskFour = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Four Complete');
//     })
// }

// let taskFive = ()=>{
//     return new Promise((res, rej)=>{
//         res('Task Five Complete');
//     })
// }

// async function callallTask(){
//     const t1 = await taskOne();
//     console.log(t1)
//     const t2 = await taskTwo();
//     console.log(t2)
//     const t3 = await taskThree();
//     console.log(t3)
//     const t4 = await taskFour();
//     console.log(t4)
//     const t5 = await taskFive();
//     console.log(t5)
// }

// callallTask();

// taskOne().then(res=>console.log(res)).then(taskTwo).then(res=>{
//     console.log(res);
// }).then(taskThree).then(res=>console.log(res)).then(taskFour).then(res=>{
//     console.log(res);
// }).then(taskFive).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// let taskOne = (callback)=>{
//     console.log('Task One Complete');
//     callback();
// };

// let dataLoading = ()=>{
//     console.log('Task Two Completed, Data Loading');
// }

// let taskTwo = (callback)=>{
//     console.log('Task Two Completed, Data Loading');
//     callback();
// };

// let taskThree = (callback)=>{
//     console.log('Task Three Complete');
//     callback();
// };

// let taskFour = (callback)=>{
//     console.log('Task Four Complete');
//     callback();
// };

// let taskFive = (callback)=>{
//     console.log('Task Five Complete');
//     callback();
// };

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive(()=>{

//                 })
//             })
//         })
//     })
// })

// let taskOne = () => {
//   return new Promise((res) => {
//     res("Task One Complete");
//   });
// };

// let taskTwo = () => {
//   return new Promise((res) => {
//     res("Task Two Complete");
//   });
// };

// let taskThree = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Task Three Complete");
//     }, 1000);
//   });
// };

// let taskFour = () => {
//   return new Promise((res) => {
//     res("Task Four Complete");
//   });
// };

// let taskFive = () => {
//   return new Promise((res) => {
//     res("Task Five Complete");
//   });
// };

// taskOne().then(res=>{
//     console.log(res);
// }).then(taskTwo).then(res=>{
//     console.log(res);
// }).then(taskThree).then(res=>{
//     console.log(res);
// }).then(taskFour).then(res=>{
//     console.log(res);
// }).then(taskFive).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// async function callAllTask(){
//     try{
//         const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
//     const t5 = await taskFive();
//     console.log(t5);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// callAllTask();

// const hello = async () => {
//   try {
//     const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
//     const t5 = await taskFive();
//     console.log(t5);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// hello();

// let label = document.querySelector('label[for=number]');

// let para = document.querySelector('#phoneNumber');

// let input = document.querySelector('input[name=input]');

// label.addEventListener('click',()=>{
//     label.innerHTML = 'Write your Phone Number';
// })

// input.addEventListener('change',(e)=>{
//     // console.log(e.target.value);
//     label.innerHTML = 'Phone Number Added';
//     para.classList.remove('d-none');
//     para.innerHTML = 'Your Phone Number : ' + e.target.value;
//     e.target.value = '';
// })

// let program = document.querySelectorAll('input[name=program]');

// Array.from(program).map((program)=>{
//     program.addEventListener('change', function(e){
//         if(e.target.checked){
//             console.log(e.target.value);
//         }
//     });
// })

// function handlerEvent(e){
//     console.log(e);
// }

// let number = [32, 65, 76, 48, 88, 36];

// Array.from(number).map((program)=>{
//     console.log(program);
// })

// for(let pro of program){
//     console.log(pro);
// }

// let select = document.querySelector('select[name=selected]');

// select.addEventListener('change', (e)=>{
//     console.log(e.target.value);
// })

// let text = document.querySelector('textarea');

// text.addEventListener('change', (e)=>{
//     console.log(e.target.value);
// })

// let from = document.querySelector('form');

// let name = document.querySelector('input[name=name]');

// let email = document.querySelector('input[name=email]');

// let password = document.querySelector('input[name=password]');

// console.log(email);
// console.log(password);

// from.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     let obj = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     }

//     if(name.value != '' && email.value != '' && password.value != ''){

//     console.log(obj);
//     console.log('Form Submited');
//     name.value = '';
//     email.value = '';
//     password.value = '';

//     console.log('Your Full Information');

//     for(let ob in obj){
//         console.log(`${ob} : ${obj[ob]}`);
//     }

//     }
//     else{
//         console.log('Enter Full Form');
//     }

// })

// let movie = document.querySelector("video");

// let para = document.querySelector("#para");

// movie.addEventListener("canplay", () => {
//     para.innerHTML = "Video Can play Now";
// });

// movie.addEventListener("play", () => {
//     para.innerHTML = "Video is Playing";
// });

// movie.addEventListener("pause", () => {
//     para.innerHTML = "Video Pause";
// });

// movie.addEventListener("ended", () => {
//     para.innerHTML = "Thank You For Watch";
    
// });

// movie.addEventListener("volumechange", () => {
    // setTimeout(() => {
    //     para.innerHTML = "Volume Changing";
    // }, 500);
//         para.innerHTML = "Volume Changing";
// });

// window.addEventListener('load', ()=>{
//     console.log('window loaded');
// })

// window.addEventListener('unload', (e)=>{
//     e.preventDefault();
//     console.log('window unload');
// })

// window.addEventListener('scroll', ()=>{
//     console.log(' window Scrolling ');
// })

// window.addEventListener('resize', ()=>{
//     console.log("Y : " + window.innerHeight);
//     console.log("X :" + window.innerWidth);
// })


//   

// let div = document.querySelector('div');

// let para = document.querySelector('#para');

// div.addEventListener('click',()=> para.innerHTML = 'Div Clicked');

// div.addEventListener('dblclick',()=> para.innerHTML = 'Double Clicked in Div')

// div.addEventListener('mousedown',()=> para.innerHTML = 'Mouse Down')

// div.addEventListener('mouseup',()=> para.innerHTML = 'Mouse Up')

// div.addEventListener('mouseenter',()=>para.innerHTML = 'Mouse Enter')

// div.addEventListener('mouseleave',()=>para.innerHTML = 'Mouse leave')

// div.addEventListener('mouseover',()=>para.innerHTML = 'Mouse over')

// div.addEventListener('mouseout',()=>para.innerHTML = 'Mouse out')

// div.addEventListener('mousemove',(e)=>{
//     para.innerHTML = 'Mouse moving'
//     console.log(`X : ${e.clientX} & Y : ${e.clientY}`);
// })

// document.addEventListener('keydown', (e)=>{
//     let text = e.shiftKey;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     let text = e.altKey;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     let text = e.charCode;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     let text = e.code;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     let text = e.ctrlKey;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     let text = e.keyCode;
//     console.log(text);
// })
// document.addEventListener('keydown', (e)=>{
//     // let text = e.DOM_KEY_LOCATION_STANDARD;
//     // let text = e.DOM_KEY_LOCATION_RIGHT;
//     // let text = e.DOM_KEY_LOCATION_NUMPAD;
//     // let text = e.DOM_KEY_LOCATION_LEFT;
//     let text = e.metaKey;
//     console.log(text);
// })
//  

// const kbdEvent = new KeyboardEvent('syntheticKey', false);
// console.log(kbdEvent.isComposing);

// let input = document.querySelector('input');
// let para = document.querySelector('#para');
// para.innerHTML = 'remove Blur';
// para.style.cursor = 'pointer';
// para.style.display = 'inline-block';

// input.addEventListener('focus', ()=>{
//     console.log('Focus On');
// })

// input.addEventListener('focusin', ()=>{
//     console.log('Focus In');
//     input.style.border = 'none';
//     input.style.outline = 'none';
//     input.style.filter = 'blur(3px)';
// })

// input.addEventListener('blur', ()=>{
//     console.log('Blur On');
// })

// input.addEventListener('focusout', ()=>{
//     console.log('Focus Out');
//     input.style.filter = 'blur(3px)';
// })

// para.addEventListener('click', ()=>{
//     input.style.filter = 'blur(0px)'
// })

// let input = document.querySelector('input');
// let para = document.querySelector('#para');
// para.innerHTML = 'Click to Refresh';
// para.style.cursor = 'pointer';

// input.addEventListener('copy', ()=>{
//     console.log('text Copyed');
// })

// input.addEventListener('cut', ()=>{
//     if(input.innerHTML = '' ==  ''){
//         console.log('Nothing to Cut');
//     }
//     else{
//         console.log('text Cut');
//     }
// })

// input.addEventListener('change',()=>{
//     console.log(input.value);
// })

// para.addEventListener('click', ()=>{
    // window.addEventListener('unload', ()=>{
        
    // })
//     input.value = '';
// })

// let div = document.querySelector('div');
// let para = document.querySelector('#para');

// para.addEventListener('dragstart',(e)=>{
//     e.dataTransfer.setData('text', e.target.id);
// })


// div.addEventListener('dragover', (e)=>{
//     e.preventDefault();
// })

// div.addEventListener('drop', function(e){
//     let id = e.dataTransfer.getData('Text');
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// })



// para.addEventListener('dragstart', ()=>{
//     console.log("drag Start");
// })

// para.addEventListener('dragend', ()=>{
//     console.log("drag End");
// })

// div.addEventListener('dragenter', ()=>{
//     console.log('Drag Enter');
// });

// div.addEventListener('dragover', ()=>{
//     console.log('Drag Over');
// });

// div.addEventListener('drop', (e)=>{
//     e.preventDefault();
//     console.log('Drop');
// });

// div.addEventListener('dragleave', ()=>{
//     console.log('Drag Leave');
// });

// let div = document.querySelector('div');

// let para = document.querySelector('#para');

// para.addEventListener("dragstart", (e)=>{
//     e.dataTransfer.setData('text', e.target.id);
// })

// div.addEventListener('dragover', (e)=>{
//     e.preventDefault();
// })


// div.addEventListener('drop', (e)=>{
//     let id = e.dataTransfer.getData('text');
//     let di = div.appendChild(document.getElementById(id));
    // console.log(id);
    // console.log(di);
    // e.preventDefault();
// })