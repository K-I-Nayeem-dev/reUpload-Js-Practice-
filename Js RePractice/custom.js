/* Create & Use Object .. Make Template using function  & make a Constructor */
// function Students(name, age, lang, cgpa){

//     this.name = name,
//     this.age = age,
//     this.lang = lang,
//     this.cgpa = cgpa

//     this.display = function (){

//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.lang);
//         console.log(this.cgpa);

//     }

// }

// var stu1 = new Students('kamrul islam nayeem', 25,['english', 'Bangla', 'Hindi'] , 3.5 );

// stu1.display();

// Object End ...

// Making Guessing Game using Math ..

// var numberOfWins = 0;
// var numberOfLoose = 0;

// for (i = 0; i < 5; i++) {

//   var guessNumber = parseInt(prompt("Enter Number 1 to 5"));

//   var randomNumber = Math.floor(Math.random() * 5) + 1;

//   if (guessNumber == randomNumber) {

//     console.log("you are Won");
//     numberOfWins++

//   } else {

//     console.log("you Loose");
//     numberOfLoose++

//   }

// }

// document.write('You Won = ' + numberOfWins + " Times " + "<br>" + 'You Loose = ' + numberOfLoose + " Times ");

// Guessing Game End ...

// Calculator Program Start

// var num1 = parseInt(prompt("Enter Number 1"));

// var num2 = parseInt(prompt("Enter Number 2"));

// var sum = num1 + num2;
// var sub = num1 - num2;
// var multi = num1 * num2;
// var modu = num1 % num2;
// var div = num1 / num2;

// document.write('Sum is : ' + sum + "<br>");
// document.write('Sub is : ' + sub + "<br>");
// document.write('Multi is : ' + multi + "<br>");
// document.write('Modu is : ' + modu + "<br>");
// document.write('div is : ' + div + "<br>");

// Calculator Making End //

// Making Letter Grade Program

// var marks = parseFloat(prompt("Enter Marks To Check Grade"));

// if(marks >= 80 && marks <= 100){
//     console.log('You Got A+');
// }
// else if(marks >= 70 && marks <=79){
//     console.log('You Got A');
// }
// else if(marks >= 60 && marks <= 69){
//     console.log('You Got A-');
// }
// else if(marks >= 50 && marks <= 59){
//     console.log('You Got B');
// }
// else if(marks >= 40 && marks <= 49){
//     console.log('You Got C');
// }
// else if(marks >= 33 & marks <= 39){
//     console.log('You Got D');
// }
// else if(marks > 100 || marks < 0){
//     console.log('Invalid Number');
// }
// else{
//     console.log('You Fail');
// }

// var Bangla = parseFloat(prompt("Enter Bangla Subject Marks : "));

// var English = parseFloat(prompt("Enter English Subject Marks : "));

// var Math = parseFloat(prompt("Enter Math Subject Marks : "));

// var Economics = parseFloat(prompt("Enter Bangla Subject Marks : "));

// var Polytechnic = parseFloat(prompt("Enter Bangla Subject Marks : "));

// var mark = Bangla + English + Math + Economics + Polytechnic;

// var percentage = (mark / 400) * 100;

// if(percentage <= 100 && percentage >= 80){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else if(percentage <= 79 && percentage >= 70){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else if(percentage <= 69 && percentage >= 60){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else if(percentage <= 59 && percentage >= 50){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else if(percentage <= 49 && percentage >= 40){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else if(percentage <= 33 && percentage >= 39){
//     console.log('Your Percentage is = ' + percentage + '%' + " You Pass" );
// }
// else{
//     console.log('Sorry Your Are Fail !!');
// }

// Making Result Sheet End .....

// Switch Practice in Js ......

// var letter = prompt("Enter Letter : ");

// letter = letter.toLowerCase();

// switch(letter){
//     case(letter = 'a'):
//     case(letter = 'e'):
//     case(letter = 'i'):
//     case(letter = 'o'):
//     case(letter = 'u'):
//     console.log('Vowel');
//     break;
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '8':
//     case '9':
//     console.log('Plz Enter a Letter to Check Vowel or Consonant');
//     break;
//     default:
//     console.log('Consonant');
// }

// switch case End //////

// Loop in Javascript Start .......

// var sum = 0;

// for(i=1; i<=10; i++){
//     sum = sum + i;
//     document.write( sum + "<br>" );
// }

// var number = new Array();

// for(x=0; x<5; x++){
//     number[x] = parseFloat(prompt('Enter Number : '));
//     console.log(number.sort(function(a,b){
//         return a-b;
//     }));
// }

// let x = 1;

// while(x<=5){
//     console.log(x);
//     x++
// }

// let z = 1;

// do{
//     console.log(z);
//     z++
// }while(z<=5);

// Loop End ......

// photo slider making ,,,,,,,

// var images = [
//   "../Class - 03/images/1.jpg",
//   "../Class - 03/images/im.jpg",
//   "../Class - 03/images/img.jpg",
//   "../Class - 03/images/imgg.jpg",
// ];

// let imgTag = document.querySelector("#img");

// let count = 0;

// function next() {
//   count++;

//   if (count >= images.length ) {
//     count = 0;
//     imgTag.src = images[count];
//   }
//   else{
//     imgTag.src = images[count];
//   }
// }

// function prev() {

//     count--

//     if (count < 0 ) {
//         count = images.length - 1;
//         imgTag.src = images[count];
//       }
//       else{
//         imgTag.src = images[count];
//       }
// }

// img Slider end ///

// document selector Start //

// document.getElementById('hello').innerHTML = 'hi from Paragraph'

// document.getElementById('head1').innerText = 'hello Hi';

// document.getElementsByClassName("head")[0].innerHTML = 'good Bye good bye';

// document.getElementsByTagName('h5')[0].innerText = 'Here Again';

// document.querySelector('#head1').innerHTML = 'Hello hi';

// document.querySelector('.head').innerHTML = 'Good Bye Good bye';

// document.querySelector('h5').innerHTML = ' BYE BYE';

// var newHead = document.createElement('h1');

// var newText = document.createTextNode('this Is new TExt');

// newHead.appendChild(newText);

// var div = document.querySelector('.myclass');

// div.appendChild(newHead);

// var newHead1 = document.createElement('h1');

// var newText1 = document.createTextNode('i want to buy iphone');

// var old_div = document.querySelector('#head1');

// newHead1.appendChild(newText1);

// div.insertBefore(newHead1, old_div);

// var newClass = document.querySelector('.myclass');

// var head = document.querySelector("#head1");

// newClass.removeChild(head);

// var count1 = 0;
// var count2 = 0;

// function button1(){
//     count1++
//     setTimeout( ()=>{
//         var text = document.getElementById('head').innerHTML = 'Button 1 is Clicked';

//         var btn1 = document.querySelector('#btn1').innerHTML = 'Button 1';

//         },5000)

//         var btn1 = document.querySelector('#btn1').innerHTML = 'Clicked ' + count1 + ' Times';

// }
// function button2(){

//     count2++

//     setTimeout( ()=>{
//     var text = document.getElementById('head').innerHTML = 'Button 2 is Clicked';

//     var btn2 = document.querySelector('#btn2').innerHTML = 'Button 2';

//     },5000)

//     var btn2 = document.querySelector('#btn2').innerHTML = 'Clicked ' + count2 + ' Times';
// }

// let para = document.querySelector('#head');
// function addStyle(){
//    para.classList.add('para-style');
// }

// function removeStyle(){
//  para.classList.remove('para-style');
// }

// var para = document.querySelector('#head');
// let dark = document.querySelector("#dark");
// let body = document.querySelector("body");
// let cdark = document.querySelector(".dark");

// dark.addEventListener('click', function(){
//    body.classList.toggle('bg-dark');
//    body.classList.toggle('text-white');
//    dark.innerHTML = 'Light';
// })

// function addStyle(){
//    para.classList.add('para-style');
// }

// function removeStyle(){
//    para.classList.remove('para-style');
// }

// var myVar = document.querySelector("#btn");

// para.addEventListener('mouseover', function(){
//    para.classList.add("para-style");
// })

// para.addEventListener('mouseout', function(){
//    para.classList.remove("para-style");
// })

// para.addEventListener('click', function(){
//    para.classList.toggle('para-style');

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

// document selector Start //

// Click to Play Audio .....

// var len = document.querySelectorAll('.myButton').length;

// for(let i = 0 ; i < len ; i++){
//    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//       var text = this.innerHTML;
//       console.log(text);
//       audioPlay(text);

//    })
// }

// function audioPlay(text){
//    switch(text){
//       case 'A':
//       var audio = new Audio('../Class - 03/sounds/a.mp3');
//       audio.play();
//       break;
//       case 'B':
//       var audio = new Audio('../Class - 03/sounds/b.mp3');
//       audio.play();
//       break;
//       case 'C':
//       var audio = new Audio('../Class - 03/sounds/c.mp3');
//       audio.play();
//       break;
//       case 'D':
//       var audio = new Audio('../Class - 03/sounds/d.mp3');
//       audio.play();
//       break;
//       case 'E':
//       var audio = new Audio('../Class - 03/sounds/e.mp3');
//       audio.play();
//       break;
//       case 'F':
//       var audio = new Audio('../Class - 03/sounds/f.mp3');
//       audio.play();
//       break;
//       case 'G':
//       var audio = new Audio('../Class - 03/sounds/g.mp3');
//       audio.play();
//       break;
//    }
// }

// audio Play End ....

// Making Nice Number ....

// let para = document.querySelector('.niceNumber p');
// let count = 0;

// document.querySelector('.next').addEventListener('click', function(){
//    count++
//    if(count >= 10){
//       para.innerHTML= count = 10;
//    }
//    else{
//       para.innerHTML= count;
//    }
// });

// document.querySelector('.prev').addEventListener('click', function(){
//    count--
//    if(count < 0 ){
//       para.innerHTML= count = 0;
//    }else{
//       para.innerHTML= count;
//    }
// })

// nice Number end //

// Click Button To Play Audio Start.....

// let para = document.querySelector('#para');

// let len = document.querySelectorAll('.myButton').length;

// for(let i = 0 ; i < len; i++ ){
//    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//       let text = this.innerHTML;
//       console.log(text);
//       para.innerHTML = text + ' is Clicked';
//       playAudio(text);
//    })
// }

// function playAudio(letter){

// switch(letter){
//    //    case 'a':
//    //    var sound = new Audio('../Class - 03/sounds/a.mp3');
//    //    sound.play();
//    //    break;
//    //    case 'b':
//    //    var sound = new Audio('../Class - 03/sounds/b.mp3');
//    //    sound.play();
//    //    break;
//    //    case 'c':
//    //    var sound = new Audio('../Class - 03/sounds/c.mp3');
//    //    sound.play();
//    //    break;
//    // }

//    if(letter == 'a'){
//       var sound = new Audio('../Class - 03/sounds/a.mp3');
//       sound.play();
//    }
//    else if( letter == 'b'){
//       var sound = new Audio('../Class - 03/sounds/b.mp3');
//       sound.play()
//    }
//    else if( letter == 'c'){
//       var sound = new Audio('../Class - 03/sounds/c.mp3');
//       sound.play()
//    }

// }

// Click Button To Play Audio End.....

// How to Add Animation in JavaScript ......

// let para = document.querySelector("#para");

// let len = document.querySelectorAll(".myButton").length;

// for (let i = 0; i < len; i++) {
//   document
//     .querySelectorAll(".myButton")
//     [i].addEventListener("click", function () {
//       var text = this.innerHTML;
//       console.log(text);
//       playAnimation(text);
//     });
// }

// function playAnimation(text) {
//   var selectedButton = document.querySelector("." + text);

//   selectedButton.classList.add("anim");

//   setTimeout(function () {
//     selectedButton.classList.remove("anim");
//   },200);
// }

// function playAnimation(text){

//   let selectedButton = document.querySelector('.'+ text);

//   selectedButton.classList.add('anim');

//   setTimeout(() => {
//   selectedButton.classList.remove('anim');
//   }, 500);

// }

// How to Add Animation in JavaScript ......

// Complete  Multiple button, play Sound , Play Animation , & Key press Listener Start //

// let len = document.querySelectorAll('.myButton').length;

// for(let i = 0; i < len ; i++ ){

//    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){

//       var text = this.innerText;

//       console.log(text);

//       playAudio(text);
//       playAnimation(text)

//    })

// }

// let count = 0;

// document.addEventListener('keypress', function(event){
//    count++
//    var text = event.key;

//    playAudio(text);
//    playAnimation(text);
// })

// function playAudio(text){
//    switch(text){
//       case 'a':
//       var audio = new Audio('../Class - 03/sounds/a.mp3');
//       audio.play();
//       break;

//       case 'b':
//       var audio = new Audio('../Class - 03/sounds/b.mp3');
//       audio.play();
//       break;

//       case 'c':
//       var audio = new Audio('../Class - 03/sounds/c.mp3');
//       audio.play();
//       break;

//    }
// }

// function playAnimation(text){
//    var selectedButton = document.querySelector('.'+ text);

//    selectedButton.classList.add('anim');

//    setTimeout(() => {
//    selectedButton.classList.remove('anim');
//    }, 500);
// }

// Complete  Multiple button, play Sound , Play Animation , & Key press Listener End //

// keypress Event Start ......

// let para = document.querySelector('#para');

// let count = 0;

// document.addEventListener('keypress', function(event){

//    count++;

//    let text = event.key;

//    para.innerHTML = 'You Have pressed Keyboard Key ' + count + ' Times & You Press ' + text;

// })

// let para = document.querySelector('#para');

// let count = 0;

// document.addEventListener('keypress', function(event){

//    count++

//    var text = event.key;
//    console.log(text);

//    para.innerHTML = "You Pressd Keyboard Key " + count + " Times & Now You Pressd " + text;

// })

// keypress Event End ......

// ES6 Practice Start .......

// let x = 5;

// if(true){
//    let x = 6;
//    console.log(x);
// }

// console.log(x);

// const x = 5;

// if(true){
//    const x = 3;
//    console.log(x);
// }
// console.log(x);

// new Concatination ....

// let full_name = "kamrul Islam";
// let age = 39
// console.log(`My Name is ${full_name} And My age is ${age}`);

// new function or we can call Arrow Function ....

// This is fucntion tooo....

// const add = (x,y) => {
//    let sum = x * y;
//    console.log(sum);
// }

// add(2,53)

// function add(x,y){
//    let sum = x*y
//    console.log(sum);
// }
// add(55,34);

// const su = (a, s) => {
//    let add = a*s;
//    console.log(add);
// }

// su(23,34)

// "use strict"

// x=20
// console.log(`X is = ${x}`);

// function message(text = "This is Default Parameter"){
//    console.log(`${text}`);
// };

// message();
// message("Now Text Change");

// function number(x,y,...z){
//    console.log(`x = ${x}, y = ${y}, z = ${z}`);
// }

// number(23, 34, 23, 5,523, 6, 64, 6)

// function number(x,y,z){
//    return x + y + z;
// }

// let num1 = [1,2,3]
// let num2 = [4,5,6]

// let num = [...num1, ...num2];

// console.log(num);

// let p1 = {
//    name: 'nayeem',
//    age: 20
// }

// let p2 = {
//    Nationality: 'Bangladeshi',
//    Subject: "CSE"
// }

// let p = {...p1, ...p2};

// console.log(p);

// let num1 = [1,2,3];
// let num2 = [5,...num1, 6];

// console.log(num2);

// let p1 = {
//    name: 'nayeem',
//    age: 20
// }

// let p2 = {
//    Nationality: 'Bangladeshi',
//    Subject: "CSE"
// }

// let p = {...p1, ...p2};

// console.log(p);

// object literals

// function message(name , age){
//    return{
//       name: name,
//       age : age
//    }
// }

// console.log(message("Nayeem" , 24));

// // এই হলো পার্থক্য Object literals এর ...

// function message(name , age){
//    return{
//       name,
//       age
//    }
// }

// console.log(message('kamurl', 25));

/// concise Method Syntax ....

// const message = {
//    body : function(){
//       return `Hi I Am Object Function`;
//    }
// }

// console.log(message.body());

// Proper concise Method ......

// const message = {
//    body(){
//       return  `Hi This is Practice Purpose`
//    }
// }

// console.log(message.body());

// const message = {
//       body(){
//          return  `Hi This is Practice Purpose`
//       }
//    }

//    console.log(message.body());

// For...of Loop ........

// for(let i = 0 ; i < 3 ; i++){
//    let names = ['s1', 's2', 's3']
//    console.log(names[i]);
// }

// let names = ['s1', 's2' , 's3'];

// for(let name of names){
//    console.log(name);
// }

// For...in Loop .............

// let students = {
//    ID : function(ID, Name, Age , Subject){
//       return ID, Name, Age, Subject;
//    }
// }

// for(let x in students){
//    console.log(`${x} : ${students[x]}`);

// }

// let students = {
//    'info stu'(ID, Name, Age , Subject){
//       return {
//          ID,
//          Name,
//          Age,
//          Subject
//       };
//    }
// }

// console.log(students['info stu'](100, 'Nayeem' , 25, 'CSE'));

// let student = {
//    ID : 100,
//    Name : 'Nayeem',
//    Subject : 'CSE'
// }

// for(let x in student){
//    console.log(`${x} : ${student[x]}`);
// }

// ES6 Practice End .......

// ES6 Practice Restart .......

// let x = 5;

// if(true){
//    let x = 6;
//    console.log(x);
// }

// let f_name = "Kamrul";

// let L_name = "Nayeem";

// let fullName = f_name + " " + L_name;

// console.log(`Hello My Name is ${fullName} `);

// ES5 Function ........

// function hello(message){
//    console.log(message);
// }

// hello('This is My Function');

// ES5 Function ........

// ES6 Function ........

// const hell = (msg)=>{
//    console.log(msg);
// }

// hell('This is ES6 Message');

// (eh)=>{
//  console.log('hello');
// }

// Hoisting & Strict Mode.....

// "use strict"

// x = 20;
// console.log(x);
// var x;

// z = 30;
// console.log(z);
// let z;

// y = 40;
// console.log(y);

// Hoisting & Strict Mode.....

// defalut Parameter.....

// ES5 Function default parameter

// function message(text = " this is Default Message.... "){
//    console.log(text);
// }

// message('Message Deliverd');

// ES5 Function default parameter

// ES6 Function default parameter

// const fun = (msg = "This Is Default ES6 Message...")=>{
//    console.log(msg);
// }

// fun("Job Finished");

// ES6 Function default parameter

// defalut Parameter.....

// Rest Parameter Start ......

// function number(...number){
//    let total = 0;

//    for(const sum of number){
//       total += sum;
//    }

//    return total

// }
// console.log(number(23, 324,5,5,2,235, 6, 62, 26));
// Rest Parameter End ......

// Spread Operator ......

// let num1 = [123, 53, 2, 34, 52 , "kamrul"];
// let num2 = [54, 3, 72, 220, 60 , "Nayeem"];

// let num = num1.concat(num2);

// console.log(num);

// let num = [13, 53, 65, 25, 6,32, 67, 23, 65];

// function addtion(a, b, ...c){

//    let sum = 0;

//    for(let i = 0; i < addtion(...c).length ; i++){

//       sum += addtion(c)[i];

//       return a + b + sum

//    }

// }

// console.log(addtion(...num));

//

// console.log(addtion(...num ));

// console.log(num[0] + num[1] + num[2] + num[3] + num[4]);

// let num = [53, 2,56, 49, 36, 76];

// let sum = 0;

// for(i = 0 ; i<num.length; i++){
//    sum = sum + num[i]
// }
// console.log(sum);

// let numb = [...num1, ...num2];

// console.log(numb);

// let n1 = [23,65, 6,7, 3, 634];

// let n2 = [87, 54, ...n1,3, 72];

// console.log(n2);

// const p1 = {
//    name: "kamrul Islam Nayeem",
//    Roll: 83
// }

// const p2 = {
//    address: "Hasan Nagor",
//    Subject: "CSE",
//    ...p1
// }

// const p3 = {
//    Country : "Bangladesh",
//    Capital : "Dhaka",
//    ...p1 , ...p2
// }

// // let p = {...p1, ...p2};

// console.log(p3);

// Spread Operator ......

// Hoisting & Strict Mode Start......

// x = 20
// console.log(x);
// var x;

// z = 30

// console.log(z);

// const z;

// "use strict"

// x = 20

// console.log(x);

// Hoisting & Strict Mode End......

// Objects Literals ......

// const details = {
//    body : function(){
//       console.log('This is a Function');
//    }
// }
// details.body();

// const most = {
//    bod(){
//       console.log('This is a Function 2');
//    }
// }
// most.bod();

// const object_literal = {
//    ['body Call'](){
//       console.log('This is a Function 3');
//    }
// }
// object_literal['body Call']();

// function Studentinfo(name , age){
//    return{
//       name : name,
//       age : age
//    }
// }

// console.log(Studentinfo('kamrul', 20));

// concise Method......

// const more = {
//    ['body find'](){
//       return `Hi this is Concise Method`;
//    }
// }
// console.log(more['body find']());

// Objects Literals ......

// for of loop.....

// let num = [23, 53, 65, 76, 34];

// let sum = 0;

// for(let x of num){
//    sum += x;
// }
// console.log(sum);

// let num2 = [55, 34, 76, 89, 75, 43];

// for(let value of num2){
//    console.log(value);
// }

// For in Loop ....

// const details = {
//    name : 'kamrul',
//    address : 'kamrangirchar',
//    roll : 20,
//    subject : 'CSE',
//    school : 'T&T Ideal High School & collage'
// }

// for(let x in details){
//    // console.log(x);
//    // console.log(details[x]);
//    console.log(`${x} : ${details[x]}`);

// }

// ForEach Loop Start........

// let number = [32, 65, 76, 34, 63, 23];

// for(var x = 0; x < number.length; x++){
//    console.log(number[x]);
// }

// let number = [32, 65, 76, 34, 63, 23];

// number.forEach((x)=>{
//    console.log(x);
// });

// let number = [32, 65, 76, 34, 63, 23];

// let squareNumber = [];

// console.log(squareNumber);

// number.forEach((x)=>{
//    squareNumber.push(x*x);
// });

// console.log(squareNumber);

// let number = [32, 65, 76, 34, 63, 23];

// console.log(number);

// number.forEach((x, key, value)=>{
//    value[key] = x + 5
// });

// console.log(number);

// ForEach Loop End........

// Map & Filter Array Function ......

// let number = [53, 76, 45, 32, 87, 34];

// let squareNumber = number.map((x)=>{
//    return(x*x);
// });
// console.log(squareNumber);

// let number = [32, 5, 3, 6,34, 76, 43, 98, 54, 87];

// let filterNumber = number.filter((x)=>{
//    return x > 10;
// })
// console.log(filterNumber.sort((a,b)=>{
//    return a - b
// }));

// let number = [20, 50, 30, 60, 40, 70 , 80, 90];

// let squareNUmber = number.map((x)=>{
//     return x*x;
// })

// console.log(squareNUmber);

// let numbe = [20, 50, 30, 60, 40, 70 , 80, 90];

// let filterNumber = numbe.filter((x)=>{
//     return x>25;
// })

// console.log(filterNumber.sort((a,b)=>{
//     return a - b
// }));

// Map & filter Array Function ......

// Arrow Function Part One Start ........

// function display1(){
//     console.log('Hello this is Traditional function');
// }

// display1();

// const display2 = ()=>{
//     console.log('this is arrow function');
// }

// display2();

// function return1(){
//     return 'this is traditional Function';
// }
// console.log(return1());

// const return2 = ()=>{
//     return 'this is Arrow Function';
// }
// console.log(return2());

// function message() { return "this is traditional Function"};

// console.log(message());

// const msg = () => 'this is arrow function' ;

// console.log(msg());

// function add1(num1, num2) { return num1 + num2 } ;

// console.log(add1(30, 20));

// const add2 = (num1, num2)=> { return num1 + num2 };

// console.log(add2(20, 40));

// const add3 = num => num+num ;

// console.log(add3(34));

// Arrow Function Part One End........

// Arrow Function Part Two Start........

// let students = [
//     {
//         id : 100,
//         name : "kamurl",
//         gpa : 3.5
//     },
//     {
//         id : 101,
//         name : "Arafat",
//         gpa : 3.8
//     },
//     {
//         id : 102,
//         name : "Nayeem",
//         gpa : 4.5
//     },
//     {
//         id : 103,
//         name : "Farhan",
//         gpa : 3.9
//     }
// ]

// function student(){
//     return students.filter(function(x){
//         return x.gpa > 3.8
//     }).map(function(y){
//         return y.name
//     })
// }

// console.log(student());

// const student = () => students.filter( x => x.gpa > 3.0).map( y => y.name);

// console.log(student());

// let students = [
//     {
//         id: 101,
//         name: 'kamrul',
//         gpa: 2.9
//     },
//     {
//         id: 102,
//         name: 'arafat',
//         gpa: 3.9
//     },
//     {
//         id: 103,
//         name: 'Nayeem',
//         gpa: 2.8
//     },
//     {
//         id: 104,
//         name: 'rahman',
//         gpa: 3.5
//     }
// ]

// function studentName(){
//      return students.filter(function(x){
//        return x.gpa > 3
//     })
// }

// console.log(studentName);

// const studentName = ()=> students.filter( x => x.gpa > 3).map( y => y.name);

// console.log(studentName());

// function student(){
//     return students.filter(function(x){
//         return x.gpa > 3
//     }).map(function(y){
//         return y.name
//     })
// }

// console.log(student());

// const student = ()=> students.filter( x => x.gpa > 3 ).map( y => y.name)

// console.log(student());

// Arrow Function Part two End........

// Destructuring Array & Objects Start ............

// Array Destructuring STart.....

// let number = [10, 20, 30, 40, 50];

// let [num1, num2, num3, num4, num5] = number;

// let [nu1, nu2, ...z] = number;

// console.log(num1);
// console.log(num2);

// console.log(nu1);
// console.log(nu2);

// Array Destructuring End.....

// swap Variables by Destructuring Start ....

// let a = 10;
// let b = 20;

// [a,b] = [b, a];

// console.log(b);

// let one = 'one';

// let two = 'two';

// [one, two] = [two, one]

// console.log(one);

// swap Variables by Destructuring End ....

// Object Destructuring Start ......

// let students = {
//     id : 101,
//     fullName : 'kamrul Islam Nayeem',
//     gpa : 3.9,
//     lang : {
//         native : 'bangla',
//         beginner : 'English'
//     }
// }

// const {id, fullName, gpa, lang} = students;

// console.log(id, fullName , gpa, lang.native);

// Object Destructuring End......

// Destructuring Function Parameter Start ......

// let students = {
//     id: 101,
//     fullName : 'Kamrul Islam nayeem'
// }

// const studetails = (students)=> {
//     console.log(`${students.id} , ${students.fullName}`);
// }

// studetails(students);

// Destructuring Function Parameter End......

// Array Method find / findIndex Start ......

// let number = [13, 29, 93, 18, 33];

// function even(x){

//     if(x%2===0)
//     return x

// }

// const evenNumber = () => number.find(even);

// console.log(evenNumber(even));

// let number = [23, 33, 53, 89, 28, 34];

// const evenNumber = (value, index, array) => {
//     if(value%2===0)
//     return value;
// }

// let even = number.find(evenNumber)

// console.log(even);

// let evenNumber = number.find(x=> x%2===0)

// console.log(evenNumber);

// const evenNumber = ()=> number.find( x=> x%2===0)

// console.log(evenNumber());

// function even(x){
//     if(x%2===0)
//     return x
// }

// const evenNumber = ()=> number.find(even);

// console.log(evenNumber());

// function evenNumber(){
//     return number.find(even);
// }

// function even(x){
//     if(x%2===0)
//     return x
// }

// console.log(evenNumber());

// let number = [23, 53, 18, 87, 38, 48];

// let firstEvenNumberIndex = number.findIndex( x => x%2===0);

// console.log(firstEvenNumberIndex);

// const evenNumber = (value, index, array) => {

//     if(value%2===0){
//         return value
//     }

// }

// function evenNumber(){

//     return number.find(function(x){
//        return x%2===0
//     })

// }

// let firstEvenNumber = number.find(evenNumber)

// console.log(evenNumber());

// Array Method find / findIndex End ......

// Object find / findIndex Start ......

// var students = [
//     {
//         id: 101,
//         gpa : 2.5
//     },
//     {
//         id: 102,
//         gpa : 3.5
//     },
//     {
//         id: 103,
//         gpa : 4.5
//     },
//     {
//         id: 104,
//         gpa : 5
//     },
// ];

// let target_Gpa = students.find( x => x.gpa > 4);

// console.log(target_Gpa);

// let student = [
//     {
//         id: 101,
//         gpa: 2.5
//     },
//     {
//         id: 102,
//         gpa: 3.5
//     },
//     {
//         id: 103,
//         gpa: 4.5
//     },
//     {
//         id: 104,
//         gpa: 5
//     },
// ]

// let gpaFinder = student.find(gpa);

// function gpa(x){
//     if(x.gpa > 4){
//         return x;
//     }
// }

// console.log(gpaFinder);

// function gpafinder(){
//     return student.find(function(x){
//        return x.gpa > 4
//     })
// }

// console.log(gpafinder());

// let gpafinder = student.find(x => x.gpa > 4);

// console.log(gpafinder);

// Object find / findIndex End ......

// Destructuring Array & Objects End ............

// String Methods , startsWith/ endsWith/ includes....

// const message = 'this is a message';

// console.log(message.endsWith('message'));

// String Methods , startsWith/ endsWith/ includes....

// ES6 Module Start.....

// import {msg ,setText} from './module.js';

// console.log(msg);

// setText('this is export function');

// console.log(msg);

// ES6 Module End.....

// ES6 Class Start.....

// class Student{

//     constructor(id, name){
//         this.id =  id
//         this.name = name
//     }

//     set studentName(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return this.id + " " + this.name;
//     }

// }

// let s1 = new Student(100, 'kamrul');

// console.log(s1.id);
// console.log(s1.name);

// s1.studentName = "Nayeem"

// console.log(s1.name);

// console.log(s1.studentInfo);

// ES6 Class End.....

// ES6 Synchronous VS Asynchronous Start.....

// const taskOne =  ()=> {
//     setTimeout(()=>{
//         console.log('Task 1.');
//     }, 100)
// }

// const taskTwo =  ()=> {
//     setTimeout(()=>{
//         console.log('Task 2.');
//     }, 300)
// }

// const taskThree =  ()=> {
//     setTimeout(()=>{
//         console.log('Task 3.');
//     }, 500)
// }

// const taskFour =  ()=> {
//     setTimeout(()=>{
//         console.log('Task 4.');
//     }, 700)
// }

// const taskFive =  ()=> {
//     setTimeout(()=>{
//         console.log('Task 5.');
//     }, 1000)
// }

// taskOne()
// taskTwo()
// taskThree()
// taskFour()
// taskFive()

// const taskOne = ()=>{
//     console.log('task 1');
// }

// const dataLoading =()=>{
//     console.log('task 2, Data Loading');
// }

// const taskTwo = ()=>{
//     setTimeout(dataLoading, 1000)
// }
// const taskThree = ()=>{
//     console.log('task 3');
// }
// const taskFour = ()=>{
//     console.log('task 4');
// }
// const taskFive = ()=>{
//     console.log('task 5');
// }

// taskOne()
// taskTwo()
// taskThree()
// taskFour()
// taskFive()

// ES6 Synchronous VS Asynchronous End.....

// ES6 callback & higher Order function Start .....

// const square = x => `Square Of ${x} : ${x*x}`;

// console.log(square(34));

// function square(x){
//     console.log(`Square Of ${x} : ${x*x}`);
// }

// function higherOrderFunction(num, callback){
//     callback(num)
// }

// higherOrderFunction(7, square)

// const taskOne = (callback) => {
//   console.log("Task One");
//   callback();
// };

// const taskTwo = (callback) => {
//   setTimeout(() => {
//     console.log("Task Two. Data Loading");
//     callback();
//   }, 1000);
// };

// const taskThree = (callback) => {
//   console.log("Task Three");
//   callback();
// };

// const taskFour = (callback) => {
//   console.log("Task Four");
//   callback()
// };

// const taskFive = () => {
//   console.log("Task Five");
// };

// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//         taskFour(() => {
//             taskFive()
//         })
//     });
//   });
// });

// console.log(`Hi`);

// document.querySelector('button').addEventListener('click', ()=>{
//     console.log('Button is Clicked');
// })

// console.log(`Bye`);

// ES6 callback & higher Order function End.....

// ES6 Promise Part 1 Start.....

// console.log('Welcome');

// const promise1 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//     let completePromise = true;

//     if(completePromise){
//         resolve ('Complete Promise 1');
//     }
//     else{
//         reject ('Not Complete Promise 1');
//     }
//    }, 2000)
// });

// const promise2 = new Promise((resolve, reject)=>{

//    setTimeout(()=>{
//     resolve ('This Promise 2 is Compelte');

//     // reject('This Promise 2 is Not Complete');
// }, 1000);

// });

// Promise.race([promise1, promise2]).then((res)=>{
//     console.log(res);
// })

// promise2
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// promise1
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log('End');

// ES6 Promise Part 1 End.....

// ES6 Function ........

// ES6 Practice End .......

// image slider Start ....

// var prevBtn = document.querySelectorAll('button')[0];

// var nextBtn = document.querySelectorAll('button')[1];

// var images = ['../Class - 03/images/1.jpg', '../Class - 03/images/im.jpg','../Class - 03/images/img.jpg', '../Class - 03/images/imgg.jpg'];

// var imgTag = document.querySelector('img');

// var count = 0;

// nextBtn.addEventListener('click', function(){
//     count++

//     if(count >= images.length){
//         count = 0
//         imgTag.src = images[count];
//     }
//     else{
//         imgTag.src = images[count]
//     }

// })

// prevBtn.addEventListener('click', function(){

//     count--

//     if(count < 0){
//         count = images.length - 1
//         imgTag.src = images[count];
//     }
//     else{
//         imgTag.src = images[count]
//     }

// })

// var photos = ['../Class - 03/images/1.jpg', '../Class - 03/images/im.jpg', '../Class - 03/images/img.jpg','../Class - 03/images/imgg.jpg'];

// var imgTag = document.querySelector('img');

// var count = 0;

// function next(){

//     count++

//     if(count >= photos.length){
//         count = 0;
//         imgTag.src = photos[count];
//     }
//     else{
//         imgTag.src = photos[count];
//     }

// }

// function prev(){

//     count--

//     if(count < 0){
//         count = photos.length - 1
//         imgTag.src = photos[count];
//     }
//     else{
//         imgTag.src = photos[count];
//     }

// }

// image slider End ....

// changing Css Style Start .....

// var addStyle = document.querySelectorAll('button')[0];

// var removeStyle = document.querySelectorAll('button')[1];

// var para = document.querySelector('p');

// addStyle.addEventListener('click',function(){
//     para.innerText = 'Add Style Button is Clicked';
//     para.classList.add('para-style');
// })

// removeStyle.addEventListener('click',function(){
//     para.innerText = 'Remove Style Button is Clicked';
//     para.classList.remove('para-style');
//     para.style.transition = '0.5s'
// })

// changing Css Style End .....

// addEventLister Start ......

// var button1 = document.querySelectorAll('button')[0];

// var button2 = document.querySelectorAll('button')[1];

// button1.addEventListener('click', myFunction)

// function myFunction(){
//     alert('Hello this is Click Function')
// }

// button1.addEventListener('mouseover', function(){
//     para.classList.add('para-style');
// })

// button1.addEventListener('mouseleave', function(){
//     para.classList.remove('para-style');
// })

// addEventLister End ......

// Add multiple addEventLisenter in Buttons Start .....

// var para = document.querySelector('p');

// var count = 0;

// document.addEventListener('keypress', function(event){

//     count++

//     var text = event.key;

//     para.innerHTML =  `Now ${text} is Clicked & You Click keyword ${count} Times`;

// })

// var button = document.querySelectorAll('.myButtons');

// var len = document.querySelectorAll('.myButtons').length

// for(var i = 0; i<len; i++){
//     button[i].addEventListener('click', function(){

//         var text = this.innerHTML;

//         para.innerHTML = text + ' Button is Clicked';

//         audioPlay(text);

//         playAnimation(text)

//         console.log(text);

//     })
// }

// function audioPlay(text){
//     switch(text){
//         case 'a':
//         var audio = new Audio('../Class - 03/sounds/a.mp3');
//         audio.play();
//         break;
//         case 'b':
//         var audio = new Audio('../Class - 03/sounds/b.mp3');
//         audio.play();
//         break;
//         case 'c':
//         var audio = new Audio('../Class - 03/sounds/c.mp3');
//         audio.play();
//         break;
//     }
// }

// function playAnimation(text){

//     var selectedButton = document.querySelector('.'+ text);

//     selectedButton.classList.add('anim');

//     setTimeout(()=>{
//         selectedButton.classList.remove('anim');
//     },500)

// }

// document.addEventListener('keypress' , (event)=>{
//     var text = event.key;

//     audioPlay(text);

//     playAnimation(text)
// })

// Add multiple addEventLisenter in Buttons End .....

// ES6 Start .....

// let x = 5;

// // console.log(x);

// if(true){
//     let x = 6;
//     console.log(x);
// }

// console.log(x);

// let p = 'Hello this is text';

// console.log('This is ES5 Concat method ' + p);

// console.log(`this is es6 concat method ${p}`);

// function es5(){
//     return `hello`;
// }

// console.log(es5());

// const js = ()=> `Hello`;

// console.log(js());

// function add(a, b){
//     console.log(a + b);
// }

// add(34, 53);

// const addi = (a, b)=>{
//     console.log(a + b);
// }

// addi(54, 98);

//

// function text(text = "This is default Parameter"){

//   console.log(text);

// }

// text("Now this is custom Parameter");

// const text = (text = "This is es6 with default parameter")=>{
//     console.log(text);
// }
// text('this is es6');

// function add(a, b, ...c){

//     console.log(`a: ${a} b: ${b} c: ${c}`);

// }

// add(33, 53, 65, 34, 32, 53, 34, 6,43);

// const addi = (a, b, ...c)=>{
//     console.log(`a: ${a} b: ${b} c: ${c}`);
//     console.log(a + b + c);
// }

// addi(34, 634, 53, 63, 60);

// function addi(a, b, c){
//     return a + b + c
// }

// let num = [23, 54, 87];

// console.log(addi(num[0], num[1], num[2]));
// console.log(addi(...num));

// let num1 = [3, 5, 9];

// let num2 = [2, 6, 8];

// let num = [...num1, ...num2];

// console.log(num.sort((a,b)=>{
//     return a - b;
// }));

// let num1 = [3, 5, 9];

// let num = [4, ...num1 , 6];

// console.log(num);

// let p1 = {
//     name: 'nayeem',
//     age : 24
// }

// let p2 = {
//     Sector : 'Web-developer',
//     Institute : "CIT",
//     ...p1
// }

// let p = {...p1, ...p2}

// console.log(p2);

// function object(name, age){
//     return {
//         name : name,
//         age : age
//     }
// }

// console.log(object('kamrul', 20));

// function obb(name, age){
//     return {
//         name,
//         age
//     }
// }

// console.log(obb('nayeem', 30));

// const ob = (name, age)=> {
//    return {name, age}
// }

// console.log(ob('arafat', 20));

// let students = {
//     body : function(text = "this is default parameter"){
//         return text
//     }
// }

// console.log(students.body(`this is concise method`));

// const message = {
//     body(){
//         return `concise method`;
//     }
// }

// console.log(message.body());

// const msg = {
//     ['body msg'](){
//         return `this is also concise method`
//     }
// }

// console.log(msg['body msg']());

// function add(name, age){
//     return {
//         name,
//         age
//     }
// }

// console.log(add('kamrul', 20));

// const message = (name, age)=>{
//     return {
//         name,
//         age
//     }
// }

// console.log(message('nayeem', 20));

// const msg = {
//     body : function(a, b){
//         return `Hello this is Concise Method ${a + b}`
//     }
// }

// console.log(msg.body(34, 45));

// const ms = {
//     ['body msg'](){
//         return `hello`
//     }
// }

// console.log(ms['body msg']());

// const msg = {
//     body(){
//         return `concise method`
//     }
// }

// console.log(msg.body());

// let students = ['s1', 's2', 's3'];

// for (const names of students) {
//     console.log(names);
// }

// let number = [3, 5,4,63, 6,78, 43,32,76];

// for (const num of number) {
//     console.log(num);
// }

// let studentinfo = {
//     name: 'nayeem',
//     age: 20,
//     gpa: 3.9,
//     lang: ['bangla', 'english', 'hindi']
// }

// for(const value in studentinfo){
//     console.log(value + ' : ' +  studentinfo[value]);
// }

// let num = [32, 56, 43, 67, 23, 13, 65, 89];

// let square = [];

// num.forEach((value, key ,arr)=>{
//     square.push(value * value)
// })

// console.log(square);

// num.forEach(function(value, key , arr){
//     arr[key] = value + 5
// })

// console.log(num);

// let square = [];

// num.forEach(function(x){
//     square.push(x)
// })

// console.log(...square);

// num.forEach((x, key , arr)=> {
//    console.log(x);
// })

// num.forEach(function(x){
//     console.log(x);
// })

// function myfuntion(x){
//     console.log(x);
// }

// let num = [32, 56, 77, 98, 45, 32, 65];

// let filter = num.filter((x)=> x > 50 )

// console.log(filter);

// let filter = num.filter((x)=>{

//     return x > 40

// })

// console.log(filter.sort(function(a , b){
//     return a - b
// }));

// let square = num.map((x)=>{
//     return x + 5;
// })

// console.log(square);

// let square = [];

// num.forEach(function(value , key , arr){
//    square.push(arr[key] = value + 5)
// })

// console.log(square);

// let squareNUmber = num.map(function(x){

//     return x + 5;

// })

// console.log(squareNUmber);

// let square = num.map(function(x){
//     return x * x;
// })

// console.log(square);

// let filter = num.filter(function(x){
//     return x > 50;
// })

// console.log(filter.sort((a,b)=> a - b));

// let stu1 = students.filter((x) => {
//   return x.gpa > 4;
// }).map((y)=>{
//     return y.name
// });

// console.log(stu1);

// function stuName() {
//   return students
//     .filter(function (x) {
//       return x.gpa > 4;
//     })
//     .map(function (y) {
//       return y.name;
//     });
// }

// console.log(stuName());

// console.log(students);

// let num = [54, 23, 67, 87, 98, 43];

// let [num1, num2, num3, num4, num5, num6] = num

// console.log(`${num1 + num2 + num4 + num5}`);

// console.log(num[0], num[1], num[2], num[3], num[4], num[5]);

// let a = 10, b = 20;

// [a,b] = [b,a];

// console.log(a);

// let a = 10;

// let b = 20;

// [a,b] = [b,a];

// console.log(a);

// const student = {
//     name: 'Kamrul',
//     age: 20,
//     gpa: 3.9,
//     lang: {
//         native: 'bangla',
//         beginner: 'english'
//     }
// }

// const {name, age, gpa, lang} = student;

// console.log(name);

// let number = [34, 65, 7,64, 45, 32 , 998];

// let [num1, num2, num3, num4, num5, num6] = number

// console.log(num1);

// const students = {
//     id: 11,
//     name: 'nayeem',
//     age: 20,
//     gpa: 3.9,
//     lang: {
//         native: 'bangla',
//         beginner: 'english'
//     }
// }

// const stu1 = function(students){
//     console.log(`${students.id} , ${students.name}`);
// }

// stu1(students)

// const stu1 = ({id, name})=>{
//     console.log(`${id}, ${name}`);
// }

// stu1(students)

// const stuinfo = ({id, name})=>{
//     console.log(id , name);
// }

// stuinfo(students);

// const {id, name, age, gpa, lang} = students

// const studentsInfo = (students)=>{
//     console.log(`${students.id}, ${students.name}`);
// }

// studentsInfo(students);

// const studentInfo = ({id, age, name})=>{
//     console.log(`${id}, ${name}, ${age}`);
// };

// studentInfo(students)

// let number = [43, 65, 78, 64, 3, 32];

// const num = ([num1, num2, num3, num4, num5, num6])=>{
//     console.log(`${num1} , ${num2} , ${num3}`);
// };

// num(number);

// let number = [43, 65, 23, 98, 87, 76];

// let num = ([num1, num2, num3 ,num4, num5])=>{
//     console.log(num1, num2, num4);
// }

// num(number);

// let number = [9,2 ,7, 11, 23, 4, 3];

// const even = (x)=>{
//     if(x%2==0){
//         return x
//     }
// }

// let num = number.find(even);

// console.log(num);

// let num = number.find(function(x){
//     return x%2==0
// })

// let num = number.findIndex((x)=>{
//     return x%2==0
// })

// console.log(num);

// console.log(num);

// const student = [
//     {
//         id: 10,
//         name: 'nayeem',
//         gpa: 2.5
//     },
//     {
//         id: 11,
//         name: 'Kamrul',
//         gpa: 3.5
//     },
//     {
//         id: 12,
//         name: 'Arafat',
//         gpa: 4.5
//     },
//     {
//         id: 13,
//         name: 'sajib',
//         gpa: 5
//     },
//     {
//         id: 14,
//         name: 'rahman',
//         gpa: 3.8
//     },
//     {
//         id: 15,
//         name: 'asif',
//         gpa: 3.2
//     }
// ]

// let high_gpa = student.find((x)=>{
//     return x.gpa >= 5
// })

// console.log(high_gpa);

// let high_gpa = student.find((x)=>{
//     return x.gpa > 4
// })

// let high_gpa = student.findIndex((x)=>{
//     return x.gpa > 4
// })

// console.log(high_gpa);

// let message = "this is sunday";

// console.log(message.startsWith('this'));

// console.log(message.endsWith('sunday'));

// console.log(message.includes('is'));

// let message = 'this is msg';

// console.log(message.startsWith('This'));

// import{msg, setText, text}from'./module.js';

// console.log(msg);

// setText("text this is module function");

// console.log(text);

// setText('hellohibye bye')

// import {text as message} from './module.js';

// console.log(message);

// class students {
//     constructor(id, name){
//         this.id = id;
//         this.name = name
//     }

//     set studensName(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return this.id  + " " + this.name;
//     }

// }

// let s1 = new students(101, 'Kamrul');

// console.log(s1.studentInfo);

// console.log(s1);

// s1.studensName = 'kamrul islam Nayeem';

// console.log(s1.name);

// class students {
//     constructor(id, name){
//         this.id = id,
//         this.name = name
//     }

//     set studentName(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return this.id + " " + this.name;
//     }

// }

// let stu1 = new students(101, 'kamrul');

// console.log(stu1.studentInfo);

// console.log(stu1);

// stu1.studentName = 'Nayeem';

// console.log(stu1.name);

// const taskOne = (callback)=>{
//     console.log("Task 1");
//     callback();
// }

// // const dataLoading = ()=>{
// //     console.log('Task 2 Data Loading');
// // }

// const taskTwo = (callback)=>{
//     setTimeout(()=>{
//         console.log('Task 2 Data Loading');
//         callback();
//     }, 2000)
// }

// const taskThree = (callback)=>{
//     console.log("Task 3");
//     callback();
// }

// const taskFour = (callback)=>{
//     console.log("Task 4");
//     callback()
// }

// const taskFive = ()=>{
//     console.log("Task 5");
// }

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive()
//             })
//         })
//     })
// })

// function HoF(){
//     console.log('hello this is higher call back function');
// }

// function sample(HoF){

// }

// sample(HoF())

// function square(x){
//     console.log(`Square Of Number ${x} : ${x * x}`);
// }

// function HigherOrderFunction(num, callback){
//     callback(num)
// }

// HigherOrderFunction(6, square)

// console.log("Hello");

// var btn = document.querySelector('button');

// btn.addEventListener('click', ()=>{
//     console.log(`Button is Clicked`);
// })

// console.log("bye");

// document.querySelector('button').addEventListener('click', function(){
//     var text = this.innerHTML;
//     console.log(`${text} Clicked`);
// })

// document.querySelector('button').addEventListener('click', ()=>{
//     console.log('click');
// })

// const square  = x=>  `The Square of ${x} : ${x*x}`;

// const HigherOrderFunction = (num, callback)=>{
//     return callback(num);
// }

// console.log(HigherOrderFunction(43, square));

// function add(x){
//     console.log(`total Add is ${x} : ${x*x}`);
// }

// function hignOrderFunction(num, callback){
//     callback(num)
// }

// hignOrderFunction(34, add)

// const students = (id,name)=>{
//     return {
//         id,
//         name
//     }
// }

// console.log(students(23, 'kamrul'));

// const metho = {
//     body: function(id, name){
//       return {
//         id,name
//       }
//     }
// }

// console.log(metho.body(20, 'kamruol'));

// const msg = {
//     ['hello msg'](){
//         return `Hello this is Object Literal`;
//     }
// }

// console.log(msg['hello msg']());

// const msg = {
//     body : ()=> `Hello this is  object literals` ,
//     title : ()=> `this is another object literals `
// }

// console.log(msg.body());
// console.log(msg.title());

// let number = [32, 5,6 ,64, 23, 67, 98];

// number.forEach((x, key, arr)=>{
//     console.log(arr[key] = x + 5);
// })

// for (const num of number) {
//     console.log(num);
// }

// let student = {
//     name: 'kamrul',
//     age: 20,
//     gpa: 3.9,
//     lang: ['bangla', 'english', 'hindi']
// }

// for ( const x in student){
//     console.log(`${x} : ${student[x]}`);
// }

// let number = [43, 54, 65, 34, 76, 89, 32];

// let filter = number.filter((x)=>{
//     return x > 70
// })
// console.log(filter);

// let square = number.map((x)=>{
//     return x * x
// })

// console.log(square);

// number.map((x)=>{
//     square.push(x*x)
// })

// console.log(square);

// function helo(a, b){
//     return a + b;
// }

// console.log(helo(34, 54));

// const add = (a, b)=>{
//     return a + b
// }

// console.log(add(43, 67));

// function msg(text = "this is default parameter"){
//     console.log(text);
// }

// msg('kmn acho');

// function rest(a, b, ...c){
//     console.log(`a: ${a} b: ${b} c: ${c}`);
// }

// console.log(rest(34, 53, 65, 34, 23, 87, 99, 57));

// const add = x=> `this is es6 function `

// console.log(add());

// function add(num1, num2){
//     return num1 + num2
// }

// console.log(add(34, 66));

// const add = (num1, num2)=> num1 + num2

// console.log(add(34, 66));

// const students = [
//     {
//         name: 'nayeem',
//         age: 20,
//         gpa: 2.9
//     },
//     {
//         name: 'kamrul',
//         age: 24,
//         gpa: 3.9
//     },
//     {
//         name: 'arafat',
//         age: 22,
//         gpa: 4.9
//     },
//     {
//         name: 'anbul',
//         age: 20,
//         gpa: 4.5
//     },
//     {
//         name: 'idon',
//         age: 21,
//         gpa: 5
//     }
// ]

// const stu1 = students.filter(x =>  x.gpa > 4).map( (y) => y.gpa)

// console.log(stu1);

// let number = [43, 35, 65, 86, 98, 22, 12];

// let [num1, num2, num3, num4, num5, num6, num7] = number;

// console.log(num1, num2, num3, num4, num5, num6, num7);

// let a = 10, b = 20;

// [a,b] = [b, a]

// console.log(a, b);

// let msg1 = 'this is message 1';

// let msg2 = 'this is message 2';

// [msg1, msg2] = [msg2, msg1];

// console.log(msg1);

// const students = {
//     id: 101,
//     name: 'kamrul',
//     age: 24,
//     gpa: 2.9,
//     lang : {
//         native : 'bangla',
//         beginner: 'english'
//     }
// }

// const {id, name, age, gpa, lang} = students;

// console.log(lang.beginner , lang.native);

// const students = {
//     id: 101,
//     name: 'nayeem'
// }

// const stuInfo = ({id, name})=> {
//     console.log(`${id}, ${name}`);
// }

// stuInfo(students);

// const studentInfo = (students)=>{
//     console.log(`${students.id} , ${students.name}`);
// }

// studentInfo(students)

// function studentInfo(students){
//     console.log(`${students.id}, ${students.name}`);
// }

// studentInfo(students);

// let number = [11, 23, 43, 55, 10, 90];

// let fin = number.find( x => x % 2 === 0 );

// console.log(fin);

// let find = number.find(function(x){
//     return x%2===0
// })

// console.log(find);

// const students = [
//     {
//         name: 'nayeem',
//         age: 20,
//         gpa: 2.9
//     },
//     {
//         name: 'kamrul',
//         age: 24,
//         gpa: 3.9
//     },
//     {
//         name: 'arafat',
//         age: 22,
//         gpa: 4.9
//     },
//     {
//         name: 'anbul',
//         age: 20,
//         gpa: 4.5
//     },
//     {
//         name: 'idon',
//         age: 21,
//         gpa: 5
//     }
// ]

// let firstGpaFind = students.find(x => x.gpa > 4);

// console.log(firstGpaFind);

// import {number} from './module.js';

// const num = number.filter(x => x > 50);

// console.log(number);

// console.log(num);

// console.log(text);

// setText('this is new text');

// console.log(text);

// class students{
//     constructor(id, name, age, gpa){
//         this.id = id,
//         this.name = name,
//         this.age = age,
//         this.gpa = gpa
//     }

//     set studentFullName(name){
//         this.name = name
//     }

//     get stuInfo(){
//         return `${this.id} , ${this.age} , ${this.gpa}, ${this.name}`
//     }
// }

// let s1 = new students(100, 'kamrul', 24, 3.9);

// s1.studentFullName = 'nayeem';

// console.log(s1.stuInfo);

// console.log(s1);

// for(const stu in s1){
//     console.log(`${stu} : ${s1[stu]}`);
// }

// class students{
//     constructor(id, name, age){
//         this.id = id,
//         this.name = name,
//         this.age = age
//     }

//     set studentsFullName(name){
//         this.name = name;
//     }

//     get studentInfo(){
//         return `${this.id} ${this.age} ${this.name}`
//     }

// }

// let s1 = new students(101, 'kamrul', 27);

// console.log(s1);

// s1.name = 'Nayeem';

// console.log(s1);

// console.log(s1.studentInfo);

// function square(x){
//     console.log(`Square Number of ${x} : ${x*x}`);
// };

// function HignOrderFunction(num, callback){
//     callback(num)
// }

// HignOrderFunction(34, square)

// class students{
//     constructor(id, name, age) {
//         this.id = id,
//         this.name = name,
//         this.age = age
//     }
//     set StuName(name){
//         this.name = name
//     }

//     get studentsInfo(){
//         return `${this.id} ${this.name} ${this.age}`
//     }
// }

// let s2 = new students(101, 'kamrul', 24);

// console.log(s2.studentsInfo);

// console.log(s2);

// s2.StuName = 'Nayeem';

// console.log(s2);

// const mehtho = {
//     body: function(){
//         return `hello this is concise method`
//     }
// }

// console.log(mehtho.body());

// import {text,setText} from './module.js';

// console.log(text);

// setText('this is new text');

// console.log(text);

// const taskOne = (callback)=>{
//     console.log(`Task One`);
//     callback()
// }

// const taskTwo = (callback)=>{
//     setTimeout(()=>{
//         console.log('Task 2 Data Loading');
//         callback();
//     }, 2000)
// }

// const taskThree = (callback)=>{
//     console.log(`Task Three`);
//     callback();
// }

// const taskFour = (callback)=>{
//     console.log(`Task Four`);
//     callback();
// }

// const taskFive = ()=>{
//     console.log(`Task Five`);
// }

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive()
//             })
//         })
//     })
// })

// const square = x => `The Square Of ${x} : ${x*x} `

// const HoF = (num, callback) => {
//    return callback(num);
// }

// console.log(HoF(25, square));

// const y = square;

// console.log(y(5));

// let para = document.querySelector('p');

// para.innerHTML = square(23)

// var hello = function(num){
//     console.log(`${num} : ${num*num}`);
// }

// hello(34)

// (function text(){
//     console.log(`this is text function`);
// })();

// let promise1 = new Promise((resolve, reject)=>{

//     let completePromise = true;

//     if(completePromise){
//         resolve(`Promise Completed`)
//     }
//     else{
//         reject(new Error('this is a completed error'));
//     }
// })

// promise1.then((res)=> console.log(res))
// .catch((err)=> console.log(err.message))

// let promise2 = new Promise((resolve, reject)=>{
//     resolve('this is an Error');
// })

// promise.then((res => console.log(`${res}`)))
// .catch(err => console.log(`${err}`))

// Promise.all([promise1, promise2])
// .then((res)=>{
//     console.log(res);
// })

// let promise1 = new Promise((resolve, reject)=>{

//     let CP = true

//    setTimeout(()=>{
//     if(CP){
//         resolve(`Promise Complete`)
//     }
//     else{
//         reject(`Promise Not Complete`)
//     }
//    }, 2000)

// })

// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 is Completed')
//     },1000)
// })

// Promise.race([promise1, promise2]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// promise2.then((res)=>{
//     console.log(res);
// })

// Promise.all([promise1, promise2]).then(([res1, res2])=>{
//     console.log(res1 , res2);
// }).catch((err)=>{
//     console.log(err);
// })

// const taskOne = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`Task 1 Complete`)
//     })
// }

// const taskTwo = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`Task 2 Complete`)
//     })
// }

// const taskThree = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Task 3 Complete`)
//         },2000)
//     })
// }

// const taskFour = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`Task 4 Complete`)
//     })
// }

// const taskFive = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`Task 5 Complete`)
//     })
// }

// async function CallAllTask(){

//     try{
//         const t1 = await taskOne();
//         console.log(t1);
//         const t2 = await taskTwo();
//         console.log(t2);
//         const t3 = await taskThree();
//         console.log(t3);
//         const t4 = await taskFour();
//         console.log(t4);
//         const t5 = await taskFive();
//         console.log(t5);
//     }catch(e){
//         console.log(e);
//     }

// }

// CallAllTask()

// taskOne().then(res=> console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .then(taskFive)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// taskOne().then( res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .then(taskFive)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// let x = 20

// if(true){
//     let x = 60
//     console.log(x);
// }

// console.log(x);

// let fullName = 'kamrul Islam Nayeem';

// console.log('Hi my Name is ' + fullName);

// console.log(`Hi My Name is ${fullName}`);

// function add(num1, num2){
//     return num1 + num2
// }

// console.log(add(34,32));

// const add = (num1, num2)=>{
//     console.log(`Sum of add ${num1+num2}`);
// }

// add(21,52)

// 'use strict'

// x = 20

// console.log(x);

// var x;

// function text(msg = 'this is default Parameter'){
//     console.log(msg);
// }

// text('Done Default Parameter');

// const message = (text = 'this is default parameter') => {
//     console.log(text);
// }

// message('Done Default parameter');

// function number(a,b, ...c){

//     let totalC = 0;

//     for( const num of c){
//         totalC += num
//     }
//     console.log(`a : ${a} , b : ${b} , c : ${totalC}`);
// }
// number(34, 32, 53,43)

// function add(a,b,c){
//     return a + b + c
// }

// let num = [1, 2, 3];

// console.log(add(num[0], num[1], num[2]));

// console.log(add(...num));

// let num1 = [23, 54, 75];

// let num2 = [65, 78, 45, ...num1];

// console.log(num2);

// let num = [...num1, ...num2];

// console.log(num);

// let num = num1.concat(num2);

// console.log(num);

// let p1 = {
//     name: 'Nayeem',
//     age: 20
// }

// let p2 = {
//     gpa: 3.9,
//     subject: "CSE"
// }

// let p3 = {
//     ...p1,
//     ...p2,
//     lang : ['Bangla, English, Hindi'],
//     nationality: 'Bangladeshi'
// }

// let p = {...p1, ...p2};

// console.log(p3.lang);

// const no = (id, name)=>{
//     return{
//         id: id,
//         name: name
//     }
// }

// console.log(no(29, 'kamrul'));

// const studentInfo = (id, name)=>{
//     return{
//         id, name
//     }
// }

// console.log(studentInfo(10, 'kamrul'));

// const c1 = {
//     body(){
//         return `this is body function`
//     }
// }

// console.log(c1.body());

// const c2 = {
//     body : function(){
//         return  `This is concise method`
//     }
// }

// console.log(c2.body());

// const concise = {
//     ['body size'](){
//         return `This in concise method`;
//     }
// }

// console.log(concise['body size']());

// let num = [32, 54, 76, 89, 43, 67, 23];

// for(const x of num){
//     console.log(x);
// }

// for(let i = 0 ; i < num.length ; i++){
//     console.log(num[i]);
// }

// let ob = {
//     id: 101,
//     name: 'nayeem',
//     age: 23,
//     subject: 'CSE'
// }

// for(const y in ob){
//     console.log(`${y} : ${ob[y]}`);
// }

// ES6 End .....

// let num = [32, 54, 76, 89, 43, 67, 23];

// let square = [];

// num.forEach((value, index, arr)=>{
//     console.log(arr[index] = value + 5);
// })

// console.log(square);

// num.forEach((x)=>{
//     console.log(x);
// })

// let num = [32, 54, 76, 89, 43, 67, 23];

// let filter = num.filter((x)=>{
//     return x > 40
// })

// console.log(filter.sort());

// let square = num.map( x => x*x);

// console.log(square);

// function hello(num1, num2){
//     return num1 + num2;
// }

// console.log(hello(34,56));

// const real = (num1, num2) => num1 + num2 ;

// console.log(real(45,5));

// function add(x){
//     return x*x
// }

// console.log(add(5));

// const addi = x => x*x;

// console.log(addi(54));

// const object = [
//     {
//         name : 'nayeem',
//         age : 23,
//         gpa : 2.5
//     },
//     {
//         name : 'arafat',
//         age: 22,
//         gpa : 3.5
//     },
//     {
//         name : 'siam',
//         age: 27,
//         gpa : 4.5
//     },
//     {
//         name : 'habib',
//         age: 25,
//         gpa : 3.6
//     },
//     {
//         name : 'walid',
//         age: 19,
//         gpa : 4.2
//     },
//     {
//         name : 'abir',
//         age: 24,
//         gpa : 5
//     }
// ]

// let obj = object.filter( x => x.gpa > 2 ).map( y => y.name);

// console.log(obj);

// let num = [34, 65, 34, 76, 53, 46];

// const num_arr = ([num1, num2]) =>{
//     console.log(num1, num2);
// }

// num_arr(num)

// function num_array(num){
//     console.log(num[0], num[1]);
// }

// num_array(num);

// let [num1, num2, num3, num4, num5, num6] = num;

// console.log(num1);

// const obj = {
//     name : 'nayeem',
//     age : 20,
//     gpa : 3.9,
//     lang : {
//         native: 'bangla',
//         beginner: 'english'
//     }
// }

// const {name, age, gpa , lang} = obj

// console.log(lang.native);

// let a = 10, b = 20;

// let a = 10;

// let b = 20;

// [a , b] = [b , a];

// console.log(a);

// let obj = {
//     name : 'nayeem',
//     age : 20,
//     gpa : 3.9,
//     lang : {
//         native: 'bangla',
//         beginner: 'english'
//     }
// };

// let ob = {
//     name : 'arafat',
//     age : 22,
//     gpa : 3.3
// };

// [obj , ob] = [ob , obj]

// console.log(obj);

// function des(obj){
//     console.log(`${obj.name} ${obj.age}`);
// }

// des(obj)

// const des = ({name, age}) =>{
//     console.log(`${name} ${age}`);
// }

// des(obj)

// function studentInfo(obj){
//     console.log(obj.name , obj.age);
// }

// studentInfo(obj)

// const studentInfo = ({name, age, gpa}) =>{
//     console.log(`${name}, ${age}, ${gpa}`);
// }

// studentInfo(obj)

// let num = [23, 53, 29, 11, 18, 30];

// // let evenNum = num.find(x => x % 2 === 0)

// const even  = ((x)=>{
//     return  x % 2 ===0
// })

// let evenNum = num.find(even);

// console.log(evenNum);

// const object = [
//     {
//         name : 'nayeem',
//         age : 23,
//         gpa : 2.5
//     },
//     {
//         name : 'arafat',
//         age: 22,
//         gpa : 3.5
//     },
//     {
//         name : 'siam',
//         age: 27,
//         gpa : 4.5
//     },
//     {
//         name : 'habib',
//         age: 25,
//         gpa : 3.6
//     },
//     {
//         name : 'walid',
//         age: 19,
//         gpa : 4.2
//     },
//     {
//         name : 'abir',
//         age: 24,
//         gpa : 5
//     }
// ]

// let firstGpaFind = object.find(x=> x.gpa > 4)

// console.log(firstGpaFind);

// let msg = 'this is string method';

// console.log(msg.includes('is'));

// import {num} from './module.js';

// console.log(text);

// setText('this is new text module')

// console.log(text);

// newModule();

// num.forEach( x => console.log(x))

// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// class student {
//     constructor(id, name, age, gpa){
//         this.id = id,
//         this.name = name,
//         this.age = age,
//         this.gpa = gpa
//     }

//     set student_name(name){
//         this.name = name
//     }

//     get student_info(){
//         return `${this.id} : ${this.name} : ${this.age} : ${this.gpa}`
//     }
// }

// let s1 = new student(101, 'kamrul', 20, 3.9);

// console.log(s1);

// s1.student_name = 'nayeem';

// console.log(s1);

// console.log(s1.student_info);

// const taskOne = (callback)=>{
//     console.log(`Task 1`);
//     callback();
// }

// const dataLoading = ()=>{
//     console.log(`Task 2 Data Loading`);
// }

// const taskTwo = (callback)=>{
//     setTimeout(()=>{
//         console.log(`Task 2 data loading`);
//         callback()
//     }, 1000)
// }

// const taskThree = (callback)=>{
//     console.log(`Task 3`);
//     callback();
// }

// const taskFour = (callback)=>{
//     console.log(`Task 4`);
//     callback();
// }

// const taskFive = ()=>{
//     console.log(`Task 5`);
// }

// taskOne(()=>{
//     taskTwo((()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive()
//             })
//         })
//     }))
// })

// function square(x){
//     console.log(x*x);
// }

// function hof(num, callback){
//     callback(num)
// }

// hof(13, square)

// let promise1 = new Promise((resolve, reject)=>{
//     let completePromise = true;

//     setTimeout(()=>{
//         if(completePromise){
//             resolve ( `the promise is resolve`);
//         }
//         else{
//             reject ( new Error(`this is a Error`))
//         }
//     },200)

// })

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(`this is promise 2`)
//     })
// },1000)

// Promise.all([promise1, promise2]).then(([res1, res2])=>{
//     console.log(res1);
//     console.log(res2);
// }).catch((err)=>{
//     console.log(err);
// })

// promise2.then((res)=>{
//     console.log(res);
// })

// promise1.then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// let promise1 = new Promise(pro);

// function pro(resolve, reject){
//     var completeMsg = true

//     if(completeMsg){
//         resolve(`Promise Completed`)
//     }
//     else{
//         reject(`Promise Not Completed`)
//     }

// }

// promise1.then(function(res){
//     console.log(res);
// })

// let taskOne = () => {
//   return new Promise((resolve, reject) => {
//     resolve(`Promise 1 Complete`);
//   });
// };

// let taskTwo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Promise 2 Complete`);
//     }, 2000);
//   });
// };

// let taskThree = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(`Promise 3 Complete`);
//     reject(`Promise 3 Not Completed`);
//   });
// };

// let taskFour = () => {
//   return new Promise((resolve, reject) => {
//     resolve(`Promise 4 Complete`);
//   });
// };

// let taskFive = () => {
//   return new Promise((resolve, reject) => {
//     resolve(`Promise 5 Complete`);
//   });
// };

// const  callback = async () => {
//   try{
//     let t1 = await taskOne();
//   console.log(t1);
//   let t2 = await taskTwo();
//   console.log(t2);
//   let t3 = await taskThree();
//   console.log(t3);
//   let t4 = await taskFour();
//   console.log(t4);
//   let t5 = await taskFive();
//   console.log(t5);
//   }
//   catch(e){
//     console.log(e);
//   }
// };

// callback();

//   .catch((err)=>{
//     console.log(err);
//   })

// let taskOne = ()=>{
//     return new Promise((resolve, reject)=>{
//         let complete = true
//         if(complete){
//             resolve(`promise 1 Complete`)
//         }
//         else{
//             reject(`promise Not Complete`)
//         }
//     })
// }

// let taskTwo = ()=>{
//     return new Promise((resolve, reject)=>{
//         // resolve(`promise 2 Complete`)
//         reject(`promise 2 Not Complete`)
//     })
// }

// let taskThree = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`promise 3 Complete`)
//     })
// }

// let taskFour = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`promise 4 Complete`)
//     })
// }

// let taskFive = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`promise 5 Complete`)
//     })
// }

// const callback = async ()=>{

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

//     }catch(c){
//         console.log(c);
//     }
// }

// callback();

// taskOne()
// .then(res=> console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res)=> console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .then(taskFive)
// .then(res => console.log(res))
// .catch(err=> console.log(err))

// let input = document.querySelector('input[name=name]');

// input.addEventListener('change', (e)=>{
//     console.log('change');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target.value);
// });

// let program = document.querySelectorAll('input[name=program]');

// Array.from(program).map((program)=>{
//     program.addEventListener('change', handlerEvent);
// })

// function handlerEvent(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

// Array.from(program).map((e)=>{
//     e.addEventListener('change', function(x){
//         if(x.target.checked){
//             console.log(x.target.value);
//         }
//     })
// })

// let department = document.querySelector('select[name=section]')

// department.addEventListener('change', (e)=>{
//     console.log(e.target.value);
// })

// let para = document.querySelector('p');

// let text = document.querySelector('textarea[name=text_area]')

// text.addEventListener('change', function(e){
//     setTimeout(()=>{
//         para.innerHTML = e.target.value;
//         para.style.color = 'red'
//         para.style.fontSize = '3rem'
//         para.style.transition = '.5s'
//     },10)
// })

// let input = document.querySelector('input[name=name]');

// input.addEventListener('change', changeHandler)

// function changeHandler(e){

//     console.log(e.target.value);

// }

// let department = document.querySelectorAll('input[name=program]');

// Array.from(department).map((department)=>{
//     department.addEventListener('change', changeHandler)
// })

// function changeHandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

// let msg = [[`this is array 1`], [`this is array 2`]];

// msg.forEach((e)=>{
//     console.log(e);
// })

// for(let i = 0 ; i < msg.length ; i++){
//     console.log(msg[i]);
// }

// Array.from(msg).map((x)=>{
//     console.log(x);
// })

// for(const x of msg){
//     console.log(x);
// }

// let section = document.querySelector('select[name=section]');

// section.addEventListener('change', function(e){
//     console.log(e.target.value);
// })

// let para = document.querySelector('p');

// let textArea = document.querySelector('textarea');

// textArea.addEventListener('change', (e)=>{
//     console.log(e.target.value);
//     para.innerText =  `Text Area Changed to : ${e.target.value}`;
// })

// let from = document.querySelector('form');
// let para = from.querySelector('p');
// let name = from.querySelector('div #name');
// let email = from.querySelector('div #email');
// let password = from.querySelector('div #password');

// from.addEventListener('submit', formHandler);

// function formHandler(e){
//     e.preventDefault();

//     if(name.value == '' && email.value == '' && password.value == ''){
//         para.innerHTML = 'Plz Fill Input Fields';
//         para.style.color = 'red';
//         para.style.fontSize = '2rem';
//         para.style.transition = '.5s';
//     }else{
//         console.log(name.value);
//         console.log(email.value);
//         console.log(password.value);
//         name.value = '';
//         email.value = '';
//         password.value = '';
//     }

// }

// let form = document.querySelector("form");
// let name = form.querySelector("div #name");
// let email = form.querySelector("div #email");
// let password = form.querySelector("div #password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(name.value);
//   console.log(email.value);
//   console.log(password.value);

//   name.value = '';
//   email.value = '';
//   password.value = '';

// const userInfo = {
//     name : name.value,
//     email : email.value,
//     password : password.value
// }

// console.log(`Your Information is`);

// for(const x in userInfo){
//     console.log(` ${x} : ${userInfo[x]}`);
// }

// name.value = '';
// email.value = '';
// password.value = ''

// });

// let videovideo = document.querySelector('video');

// let para = document.querySelector('#para');

// video.addEventListener('canplay', function(){
//     para.innerHTML = `Video Can Play Now`
// })

// video.addEventListener('play', function(){
//     para.innerHTML = `Video is Play`
// })

// video.addEventListener('playing', function(){
//     para.innerHTML = `Video is Playing`
// })

// video.addEventListener('pause', function(){
//     para.innerHTML = `Video is Pause`
// })

// video.addEventListener('volumechange', function(){
//     para.innerHTML = 'Volume is Changed';
//     setTimeout(()=>{
//         para.innerHTML = `Video is Playing`
//     },200)
// })

// video.addEventListener('ended', function(){
//     para.innerHTML = `Thank You For Watching`
// })

// window.addEventListener('load', function(){
//     console.log('load');
// })

// window.addEventListener('unload', function(e){
//     console.log('unload');
// })

// window.addEventListener('scroll', function(){
//     console.log('window is scrolling');
// })

// let body = document.querySelector('body');

// let button = document.querySelector('button');

// button.addEventListener('click', function(){

//     // body.classList.toggle('bg-dark')

//     if(body.classList.toggle('bg-dark')){
//         body.classList.add('text-white')
//         button.style.transition = '.5s';
//         button.innerHTML = 'Dark Mode'
//     }
//     else{
//         button.style.transition = '.5s';
//         button.innerHTML = 'Light Mode'
//         body.classList.remove('text-white')
//     }

// })

// let toggle = document.querySelector('details');

// toggle.addEventListener('toggle', function(e){

//     if(e.target.open){
//         console.log(`toggle is triggered`);
//     }

// })

// window.addEventListener('load', function(){
//     console.log('load');
// })

// window.addEventListener('unload', function(e){
//     e.preventDefault(console.log('unload'))
// })

// window.addEventListener('scroll', function(){
//     console.log('scroll');
// })

// window.addEventListener('resize', function(){

//     let widht = window.outerWidth;
//     let height = window.outerHeight;

//     console.log(`Height : ${height} Width : ${widht}`);
// })

// let div = document.querySelector('div');

// let para = document.querySelector('div p');

// div.addEventListener('contextmenu', ()=>{
//     console.log('contextmenu');
//     para.innerHTML = 'Context Menu Event Triggerd'
// })

// div.addEventListener('click', ()=>{
//     console.log('click is ocure');
//     // para.innerHTML = 'Click Event Triggerd'
// })

// div.addEventListener('dblclick', ()=>{
//     console.log('dblclick is ocure');
//     // para.innerHTML = 'Double Click Event Triggerd'
// })

// div.addEventListener('mousedown', ()=>{
//     console.log('mouse down');
//     // para.innerHTML = 'Mouse Down Event Triggerd'
// })
// div.addEventListener('mouseup', ()=>{
//     console.log('mouse up');
//     // para.innerHTML = 'Mouse Up Event Triggerd'
// })

// div.addEventListener('mouseenter', ()=>{
//     console.log('mouse enter');
//     // para.innerHTML = 'Mouse Enter Event Triggerd'
// })

// div.addEventListener('mouseleave', ()=>{
//     console.log('mouse leave');
//     // para.innerHTML = 'Mouse Leave Event Triggerd'
// })

// div.addEventListener('mousemove', (e)=>{
//     console.log(`ClienX : ${e.clientX} ClientY : ${e.clientY}`);
//     // para.innerHTML = 'Mouse Move Event Triggerd'
// })

// div.addEventListener('mouseover', ()=>{
//     console.log('mouse over');
//     // para.innerHTML = 'Mouse Over Event Triggerd'
// })

// window.addEventListener('keypress', function(e){
//     console.log(`KeyPressed`);
// })

// window.addEventListener('keyup', function(e){
//     console.log(`Keyup`);
// })
// window.addEventListener('keydown', function(e){
//     console.log(`keydown`);
// })

// const textarea = document.querySelector('textarea');

// textarea.addEventListener('keydown', function(e){

//     if(e.code){
//         console.log(e.code);
//     }

// })

// textarea.addEventListener('keypress', function(e){
//     if(e.repeat){
//         alert('Key do not repeat')
//     }
// })

// textarea.addEventListener('keyup', function(){
//     console.log('keyup');
// })

// const input = document.querySelector('input');

// input.addEventListener('focus', function(e){
//     // console.log(`focus is occured`);
//     input.style.backgroundColor = 'orange';
//     input.style.padding = '1.5rem';
//     input.style.transition = '.5s';
//     input.style.border = 'none';
//     input.style.outline = 'none';
//     input.style.borderRadius = '5px';
//     input.style.marginLeft = '20px';
//     input.style.marginTop = '20px';
//     input.style.filter = 'blur(3px)';
// })

// input.addEventListener('blur', function(e){
//     input.style.backgroundColor = 'white';
//     input.style.padding = '5px';
//     input.style.transition = '.5s';
//     input.style.borderRadius = '0';
//     input.style.marginLeft = '0';
//     input.style.marginTop = '0';
//     input.style.filter = 'blur(3px)';
//     if(e.target.value){
//         console.log(e.target.value);
//     }

//     input.value = e.target.value.toUpperCase()

// })

// input.addEventListener('focusin', function(){
//     console.log(`focusin is occured`);
// })

// input.addEventListener('focusout', function(){
//     console.log(`focusout is occured`);
// })

// const input = document.querySelector('input');

// const para = document.querySelector('p');

// input.addEventListener('copy',function(e){

//     if(e.target.value == ''){
//         console.log('plz Enter Value to Copy');
//     }
//     else{
//         para.innerHTML = 'You Have Copied'
//     }
// })

// input.addEventListener('cut',function(e){

//     if(e.target.value == ''){
//         console.log('plz Enter Value to Cut');
//     }
//     else{
//         para.innerHTML = 'You Have Cut'
//     }
// })

// input.addEventListener('paste',function(){
//         para.innerHTML = 'You Have paste'
// })

// const button = document.querySelector('button');

// button.addEventListener('click',function(){
//     button.innerHTML = Date();
// })

// const div = document.querySelector('#div');

// const para = document.querySelector('#para');

// const body = document.querySelector('body');

// para.addEventListener('dragstart', function(e){
//     e.dataTransfer.setData('Text', e.target.id);
// })

// div.addEventListener('dragover', function(e){
//     e.preventDefault();
// })

// div.addEventListener('drop', function(e){
//     let id = e.dataTransfer.getData('Text');
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// })

// const div = document.querySelector('div');

// const p = document.querySelector('p');

// p.addEventListener('dragstart', (e)=>{
//     e.dataTransfer.setData("Text", e.target.id)
// })

// div.addEventListener('dragover', (e)=>{
//     e.preventDefault();
// })

// div.addEventListener('drop', (e)=>{
//     let id = e.dataTransfer.getData("Text");
//     div.appendChild(document.getElementById(id));
//     e.preventDefault()
// })

////////////////// Drag Event End //////////////

///////// Browser Model Object : Location , Start //////////////

// console.log(window);
// console.log(window.document);
// console.log(window.location);
// console.log(location.href);
// console.log(location.host);
// console.log(location.hash);
// console.log(location.hostname);
// console.log(location.origin);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location);

// let locationDiv = document.querySelector('.locationDiv');

// let p1 = locationDiv.children[0];
// p1.textContent = location;

// let p2 = locationDiv.children[1];
// p2.textContent = location.protocol;

// let p3 = locationDiv.children[2];
// p3.textContent = location.hostname;

// let p4= locationDiv.children[3];
// p4.textContent = location.port;

// let p5= locationDiv.children[4];
// p5.textContent = location.pathname;

// let button = document.createElement('button');

// let btnText = document.createTextNode('Click to Visit Youtube');

// button.appendChild(btnText);

// locationDiv.appendChild(button);

// button.addEventListener('click', ()=>{
//     location.assign('https://www.youtube.com');
// })

///////// Browser Model Object : Location , End //////////////

///////// Browser Model Object : PopUp Box , Start //////////////

// alert('this is Alert Box')

// function deletedObject(){

//     let value = confirm('Want To Delete This');

//     if(value){
//         console.log('Item Deleted');
//     }else{
//         console.log('Item Not Delete');
//     }

// }

// deletedObject();

// function welcomeMsg(){
//     let name = prompt("Enter Your Name : ");

//     let text;

//     if(name == null || name == ''){
//         text = 'No Name Found';
//     }
//     else{
//         text = name;
//     }

//     let h1 = document.createElement('h1');

//     let textNode = document.createTextNode(text);

//     h1.appendChild(textNode)

//     document.body.appendChild(h1);

// }

// welcomeMsg();

///////// Browser Model Object : PopUp Box , End //////////////

///////// Browser Model Object : Timing Event , Start //////////////

// setTimeout(() => {
//     console.log('Sorry You are One SEcond Late');
// }, 1000);

// setInterval(() => {
//     console.log('repeat this in Every Five Second');
// }, 5000);

let btn = document.querySelector(".save_btn");
let p = document.querySelector("#msg");

// btn.addEventListener('click', ()=>{
//     p.textContent = 'Registration Successfully';
//     setTimeout(() => {
//         p.textContent = '';
//     },2000);
// })

// let num = 0;

// setInterval(() => {
//     num++;
//     p.textContent = num;
//     if(num == 5){
//         p.textContent = "Done " + num + ' sec';
//     }
// }, 1000);

// setInterval(countDown, 1000);
// let count = 0;

// function countDown(){
//     p.textContent = count;
//     count++;
// }

// btn.addEventListener("click", countDown);

// btn.textContent = 'Click to Start Time';

// function countDown(){
//     btn.textContent = 'Counting';
//     let count = 0;
//     p.textContent = count
//     setInterval(() => {
//         count++;
//         p.textContent = count;
//     }, 1000);
// }

//////////// Now Make time Clock Start ////////////////////

// btn.addEventListener('click', clock)

// function clock(){

//     let date = new Date();

//     let hour = date.getHours();

//     let miniutes = date.getMinutes();

//     let seconds = date.getSeconds();

//     hour = timeee(hour);
//     miniutes = timeee(miniutes);
//     seconds = timeee(seconds);

//     let time = hour + " : " + miniutes + " : " + seconds;

//     p.textContent = time;

//     setInterval(clock, 1000);

// }

// function timeee(value){

//     if(value<10){

//         value = "0"+ value;

//     }

//     return value;
// }

//////////// Now Make time Clock End ////////////////////

///////// Browser Model Object : Timing Event , End //////////////

/////////  Try Catch Finally => Start //////////////

// try{
//     alert('Hi Message');
//     alert(x);
// }catch(err){
//     // console.log(err);
//     // console.log(err.name);
//     // console.log(err.message);
//     // alert('this is error Message');
//     console.log('This is Error Message');
// }finally{
//     alert('Bye Message');
// }

/////////  Try Catch Finally => End //////////////

/////////  Try Catch Throw Start //////////////

// document.querySelector('#check').addEventListener('click', ()=>{
//     let num = document.querySelector('#input').value;
//     // if(num === ''){
//     //     console.log('Enter A Value');
//     // }
//     // else
//     // {
//     //     console.log(num);
//     // }

//     try{
//         if(num < 5)
//         {
//             throw "input Number To Low";
//         }
//         else if(num > 10)
//         {
//             throw "input Number to High";
//         }
//         else{
//             setTimeout(() => {
//                 let con = confirm('Want to Try Aging');
//                 if(con){
//                     document.getElementById('para').textContent = "Enter Number Between 5 to 10 : ";
//                 }
//                 else{
//                     document.getElementById('para').textContent = "Thanks For Participens";
//                 }
//             },3000);
//             document.getElementById('para').textContent = "Success";
//         }
//     }catch(err){
//         setTimeout(() => {
//             document.getElementById('para').textContent = 'Enter Number Between 5 to 10 : ';
//         }, 3000);

//         document.getElementById('para').textContent = err;

//     }finally{
//         console.log('Thanks For Participens');
//     }

// })

// try{
//     if(10 < 5){
//         throw ' Wrong Number';
//     }
//     else{
//         throw 'Right Number';
//     }
// }catch(err){
//     console.log(err);
// }

/////////  Try Catch Throw End //////////////

///////// Js Canvas Start //////////////

// let c = document.getElementById('myCanvas');

// let ctx = c.getContext("2d");

// ctx.fillStyle = 'aqua';
// ctx.fillRect(50, 50, 496.5, 280);

// ctx.lineWidth = 5;
// ctx.lineTo(2, 30);
// ctx.strokeStyle = 'black';
// ctx.strokeRect(50, 50, 496, 279);

// ctx.stroke();

///////// Js Canvas End //////////////

///////// Calling a API From JavaScript Start //////////////

// XMLHttpRequest Start

// const makeRequest = (method, url)=>{

//     let xhr = new XMLHttpRequest();

//     xhr.open(method , url);
//     xhr.onload = ()=>{
//         let data = xhr.response;
//         let all = JSON.parse(data);
//         console.log(all);
//     }

//     xhr.onerror = ()=>{
//         console.log("This XML Get Error");
//     }

//     xhr.send();

// }

// const getData = ()=>{
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts');

// }
// getData();

// const makeRequest = (method, url, data)=>{
//     let xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.setRequestHeader('content-type' , 'application/json');

//     xhr.onload = ()=>{
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }

//     xhr.send(JSON.stringify(data));
// }

// const getData = ()=>{
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
// }

// getData();

// const sendData = ()=>{
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }

// sendData();

// const updateData = ()=>{
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'Title',
//         body: 'boss dk',
//         userId: 1,
//     });
// }

// updateData();

// const updateSingleData = ()=>{
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
//         body: 'coding is Everything',
//         title: 'coding is my life',
//     });
// }

// updateSingleData();

// const delelteData = ()=>{
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }

// delelteData();

// const makeRequest = (method, url, data)=>{
//     let xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.setRequestHeader('content-type' , 'application/json');

//     xhr.onload = ()=>{
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }

//     xhr.send(JSON.stringify(data));
// }

// const getData = ()=>{
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
// }
// getData();

// const sendData = ()=>{
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }
// sendData();

// const updateData = ()=>{
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
//         id: 1,
//         title: 'fdfeoo',
//         body: 'badfer',
//         userId: 1,
//     })
// }
// updateData();

// const updateSingleData = ()=>{
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'f',
//         body: 'badfer',
//     })
// }

// updateSingleData();

// const deleteData = ()=>{
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1',{
//     })
// }
// deleteData();

// const makeRequest = (method, url,data)=>{

//    return new Promise((resolve, reject)=>{
//         let xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.setRequestHeader('content-type', 'application/json');

// let x = xhr.responseText = 'hello';
// let x = xhr.responseType;
// console.log(x);

// xhr.onload = ()=>{
//     let data = xhr.response;
// console.log(JSON.parse(data));
// console.log(JSON.parse(xhr.responseText));
// console.log(xhr.responseURL);
// console.log(xhr.status);
// console.log(xhr.statusText);
//         }

//         xhr.send(JSON.stringify(data));
//    })

// }

// const getData = ()=>{
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res));
// }

// getData();

// const sendData = ()=>{
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }

// sendData();

// const updateData = ()=>{
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
//         id: 1,
//         title: 'foasdfeo',
//         body: 'basdfe',
//         userId: 1,
//     });
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/2',{
//         id: 2,
//         title: 'foaefefsdfeo',
//         body: 'basdfesdfe',
//         userId: 2,
//     });
// }

// updateData();

// const updateSingleData = ()=>{
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'foasdfeasdwdasdo',
//     });
// }

// updateSingleData();

// const updateSingleData = ()=>{
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1',{
//     });
// }

// updateSingleData();

// XMLHttpRequest End


// fetch Api Start with Promise 

// fetch('https://jsonplaceholder.typicode.com/posts/101')
// .then((res) => {
//     if(!res.ok){
//         let message = res.status;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=> {
//     if(!res.ok){
//         let message = res.status;
//         throw new Error(message)
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/101')
// .then(function(res){
//     if(!res.ok){
//         let msg = res.status;
//         throw new Error(msg);
//     }
//     return res.json()
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
  // body : JSON.stringify({
  //     body: 'bassdfeasdaser',
  //     title: '38djif'
  // }),
  // headers:{
  //     'Content-type': 'application/json; charset=UTF-8',
  // },
// })
//   .then((res) => {
    // if(!res.ok){
    //     let message = res.status;
    //     throw new Error(message);
    // }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then(function(res){
//     if(!res.ok){
//         let msg = res.status;
//         throw new Error(msg);
//     }
//     return res.json()
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })


// fetch Api End with Promise 

// fetch Api Start With async & Await

// const makeRequest = async ()=>{
//     let url =  await fetch('https://jsonplaceholder.typicode.com/posts');

//     if(!url.ok){
//         let message = url.status;
//         throw new Error(message);
//     }

//     let data = await url.json();
//     return data;
// }

// const getData = ()=>{
//     makeRequest()
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getData();


// const makeRequest = async (url,config)=>{
//     let fet = await fetch(url,config);
//     if(!fet.ok){
//         let message = fet.status;
//         throw new Error(message);
//     }
//     let data = await fet.json();
//     return data;
// }

// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// getData();

// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// sendData();

// const updateData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'fodfeo',
//             body: 'febar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// updateData();

// const updateSingleData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PATCH',
//         body: JSON.stringify({
//             title: 'fodfdfefsdfeo',
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// updateSingleData();

// const deleteData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'DELETE',
        // body: JSON.stringify({
        //     title: 'fodfdfefsdfeo',
        // }),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        // },
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// deleteData();

// const makeRequest = async (url,config)=>{
//     let fet = await fetch(url,config);
//     let data = await fet.json();
//     if(!fet.ok){
//         let message = fet.status;
//         throw new Error(message);
//     }
//     return data;
// }

// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// getData();

// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: "POST",
//         body: JSON.stringify({
//             userId : 11,
//             title: 'hello',
//             body: 'kmn acho',
//             address: 'dhaka',
//         }),
//         headers: {
//             'content-type' : 'application/json',
//         }
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// sendData();
// const updateData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: "PUT",
//         body: JSON.stringify({
//             userId : 11,
//             title: 'hfedfello',
//             body: 'kmn sdfeacho',
//             address: 'dhaasdfka',
//         }),
//         headers: {
//             'content-type' : 'application/json',
//         }
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// updateData();

// const updateSingleData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: "PATCH",
//         body: JSON.stringify({
//             title: 'Hello Again',
//             body: 'kmn acho anbul',
//         }),
//         headers: {
//             'content-type' : 'application/json',
//         }
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// updateSingleData();

// const deleteData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: "DELETE",
        // body: JSON.stringify({
        //     title: 'Hello Again',
        //     body: 'kmn acho anbul',
        // }),
        // headers: {
        //     'content-type' : 'application/json',
        // }
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }

// deleteData();



// fetch Api End With async & Await 



// Axios Api Start With async & Await 


// const makeRequest = async (config)=>{
//     return await axios(config)
// }   

// const getData = ()=>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/1",
//         method: 'put',
//         data: JSON.stringify({
//             title: 'Helfeflo',
//             body: 'This is Body',
//             userID: 1
//         })
//     })
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err))
// }

// getData();



// const makeRequest = (method, url,data)=>{

//   let xhr = new XMLHttpRequest();

//   xhr.open(method,url);
  
//   xhr.setRequestHeader('content-type' , 'application/json')
  
//   xhr.onload = ()=>{
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   }
  
//   xhr.send(JSON.stringify(data));
// }

// const getData = ()=>{
//   makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
// }

// getData();

// const sendData = ()=>{
//   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//     title: 'Hello',
//     body: "Body"
//   })
// }

// sendData();

// const updateData = ()=>{
//   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//     title: 'Hello',
//     body: "Bodyfef",
//     userId: 10
//   })
// }

// updateData();

// const updateSingleData = ()=>{
//   makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//     title: 'sdjfief',
//   })
// }

// updateSingleData();


// fetch('https://jsonplaceholder.typicode.com/pofests',{
//   method:'POST',
//   body: JSON.stringify({
//     title: 'title',
//     body: 'body'
//   }),
//   headers : {
//     'content-type' : 'application/json',
//   }
// })
// .then((res)=> {
//   if(!res.ok){
//     let message = res.status;
//     throw new Error(message);
//   }
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err.))

// const makeRequest = async (link,config)=>{
//     let url = await fetch(link,config);
//     let data = url.json();
//     if(!url.ok){
//       let message = url.status;
//       throw new Error(message)
//     }
//     return data;
// }

// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err.message))
// }

// getData();

// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'hello',
//         body: 'body'
//       }),
//       headers :{
//         'content-type' : 'application/json'
//       }
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err.message))
// }

// sendData();

// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method: 'post',
//   body : JSON.stringify({
//     title: 'tile',
//     body: 'body'
//   }),
//   headers: {
//     'content-type' : 'application/json'
//   }
// })
// .then((res)=> {
//   if(!res.ok){
//     let msg = res.status;
//     throw new Error(msg)
//   }
//   return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// const  makeRequest = async (url, config)=>{ 

//     let ftc = await fetch(url, config);
//     let data = ftc.json();
//     if(!ftc.ok){
//       let msg = ftc.status;
//       throw new Error(msg);
//     }

//     return data; 
// }

// const getData = ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts')
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err))
// }

// getData();

// const sendData = ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts',{
//     method: 'post',
//     body: JSON.stringify({
//       title: "title",
//       body: 'body',
//       userID : 101
//     }),
//     headers: {
//       'content-type' : 'application/json'
//     }
//   })
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err))
// }

// sendData();

// let xhr = new XMLHttpRequest();

// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts',body ={
//   title : 'title',
//   body : 'body'
// });

// xhr.setRequestHeader('content-type', 'application/json')

// xhr.onload = ()=>{
//   let data = xhr.response;
//   console.log(JSON.parse(data))
// }

// xhr.send(JSON.stringify(body));


// axios.post('https://jsonplaceholder.typicode.com/posts',{
//   body: JSON.stringify({
//     title: 'hello',
//     body : 'body'
//   })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err.message))


// Axios Api End With async & Await 

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=> res.json())
// .then((res)=> console.log(res))

// ajax Api Calling Start

// const makeRequest = (url,method,data)=>{
//   try {
//     let result = $.ajax({
//       url: url,
//       method: method,
//       data: data,
//     })
//     return result;
//   } catch (error) {
//     let err = result.status
//     throw new Error(err)
//   }

  // let result = $.ajax({
  //   url: url,
  //   method : method,
  //   data: data
  // })

  // return result;

// }




// const updateSingleData = ()=> {
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH',{
//     title: 'asdfe',
//   })
//   .then((res)=> console.log(res))
//   .catch((err)=>console.log(err))
// }

// updateSingleData();
// const updateData = ()=> {
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT',{
//     id: 1,
//     title: 'titsdfele',
//     body: "Boasdfedy",
//     userId : 1
//   })
//   .then((res)=> console.log(res))
//   .catch((err)=>console.log(err))
// }

// updateData();

// const getData = ()=> {
//   makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST',{
//     id: 1,
//     title: 'title',
//     body: "Body",
//     userId : 1
//   })
//   .then((res)=> console.log(res))
//   .catch((err)=>console.log(err))
// }

// getData();

// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   method: 'post',
//   data: {
//     id: 1,
//     title : 'titile',
//     body : 'Body',
//     userID : 1
//   }
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// const makeRequest = ()=>{
//   let result = $.ajax({
//     url:
//   })
// }




// axios.p('https://jsonplaceholder.typicode.com/posts',{
//   title:'tilte',
//   body: 'body'
// })
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err.message))

// ajax Api Calling End

// changing paragraph Style by Select option

let foSize = document.querySelector('#fontSize');

let bgColor = document.querySelector('#color');
console.log(bgColor.value)

let para = document.querySelector('#para');

let bttn = document.querySelector('#btn');

para.style.backgroundColor = 'pink';

para.style.fontStyle = 'italic';

localStorage.setItem('fontSize', foSize.value)

let fsz = localStorage.getItem('fontSize ');

bgColor.addEventListener('change',()=>{
  
  localStorage.setItem('bgColor', bgColor.value)

  let bgc = localStorage.getItem('bgColor');

  para.style.backgroundColor = bgc;

  console.log(bgc)
  // bgColor.value = bgc;
  
})

foSize.addEventListener('change', ()=>{

  para.style.fontSize = foSize.value;

  if(foSize.value == 10){
    para.style.fontSize = '10px';
    localStorage.setItem('fontSize', foSize.value)
    let fsz = localStorage.getItem('fontSize ');
    para.style.foSize = fsz;

  }
  else if(foSize.value == 15){
    para.style.fontSize = '15px';
  }
  else if(foSize.value == 20){
    para.style.fontSize = '20px';
  }
  else if(foSize.value == 25){
    para.style.fontSize = '25px';
  }
  else if(foSize.value == 30){
    para.style.fontSize = '30px';
  }
  else if(foSize.value == 35){
    para.style.fontSize = '35px';
  }
  
  localStorage.setItem('fontSize', foSize.value)

  console.log(foSize.value);

})

bttn.addEventListener('click',()=>{
  para.style.backgroundColor = 'pink';
  para.style.fontSize = '15px';
  localStorage.setItem('fontSize', '15')
  localStorage.setItem('bgColor', 'pink')
  bgColor.value = 'pink' ;
  foSize.value = 15;
  console.clear();
})



// let countries = ['Bangladesh', 'India', "Australia"];

// localStorage.setItem('userName', JSON.stringify(countries));

// const user = JSON.parse(localStorage.getItem('userName'));

// console.log(user)

// for(let us of user){
//   console.log(us)
// }

// localStorage.clear();

// const users = {
//   ID: 1,
//   Title: 'Title',
//   Body: 'Body',
//   Address: 'Address'
// }

// sessionStorage.setItem('userDetails', JSON.stringify(users))

// let data = JSON.parse(sessionStorage.getItem('userDetails'));


// for(let dat in data){
//   console.log(dat + " : " +  data[dat])
// }

// document.cookie = 'userName=kamrul islam; expires = Wed, 6 Sep 2023 19:3:00 GMT';

// localStorage.setItem('user', 'kamrul');

// let user = localStorage.getItem('user');

// localStorage.setItem('user', 'nayeem');


// sessionStorage.setItem('user', 'kamrul');

// let use = sessionStorage.getItem('user');

// console.log(use)

// sessionStorage.setItem('user', 'nayeem');

// let arr = ['heelo', 'efjife', 'feihfie', 'fhieffe'];

// localStorage.setItem('arrays', JSON.stringify(arr));

// let arr_out = JSON.parse(localStorage.getItem('arrays'));


// console.log(arr_out)

// changing paragraph Style by Select option

///////// Calling a API From JavaScript End //////////////
