// Start Canvas//

let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// Js Canvas Rectangel//

// c.fillRect(0, 0, 100, 100);
// c.fillStyle = 'aqua';
// c.fillRect(100, 100, 100, 100);
// c.fillRect(200, 0, 100, 100);
// c.fillStyle = '#f1f1f1';
// c.fillRect(300, 100, 100, 100);
// c.fillRect(400, 0, 100, 100);
// c.fillStyle = 'red';
// c.fillRect(500, 100, 100, 100);
// c.fillRect(600, 0, 100, 100);
// c.fillRect(0, 200, 100, 100);
// c.fillRect(100, 300, 100, 100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);
// c.fillRect(400, 200, 100, 100);
// c.fillRect(500, 300, 100, 100);
// c.fillRect(600, 200, 100, 100);
// c.fillRect(0, 400, 100, 100);
// c.fillRect(100, 500, 100, 100);
// c.fillRect(200, 400, 100, 100);
// c.fillRect(300, 500, 100, 100);
// c.fillRect(400, 400, 100, 100);
// c.fillRect(500, 500, 100, 100);
// c.fillRect(600, 400, 100, 100);

// Js Canvas Rectangel//

// Js Canvas Line//

// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(150, 10);
// c.strokeStyle = 'white';
// c.stroke();

// c.beginPath();
// c.moveTo(200, 10);
// c.lineTo(100, 10);
// c.strokeStyle = 'blue'
// c.stroke();

// c.beginPath();
// c.moveTo(200,100);
// c.lineTo(150, 10);
// c.strokeStyle = 'white';
// c.stroke();

// c.beginPath();
// c.moveTo(400, 10);
// c.lineTo(300, 10);
// c.strokeStyle = 'white'
// c.stroke();

// c.beginPath();
// c.moveTo(300,100);
// c.lineTo(350, 10);
// c.strokeStyle = 'green';
// c.stroke();

// c.beginPath();
// c.moveTo(600, 10);
// c.lineTo(500, 10);
// c.strokeStyle = 'green'
// c.stroke();

// c.beginPath();
// c.moveTo(400,100);
// c.lineTo(350, 10);
// c.strokeStyle = 'green';
// c.stroke();

// c.beginPath();
// c.moveTo(500,100);
// c.lineTo(550, 10);
// c.strokeStyle = 'blue';
// c.stroke();

// c.beginPath();
// c.moveTo(600,100);
// c.lineTo(550, 10);
// c.strokeStyle = 'blue';
// c.stroke();

// c.beginPath();
// c.moveTo(8, 20);
// c.lineTo(7, 0);
// c.strokeStyle = 'red';
// c.lineWidth = '5';
// c.stroke();

// c.beginPath();
// c.moveTo(200, 97);
// c.lineTo(300, 97);
// c.strokeStyle = 'red';
// c.lineWidth = '5';
// c.stroke();

// Js Canvas Line//

// Js Arc / Circle//

// c.beginPath();
// c.strokeStyle = 'white';
// c.arc(100, 100, 30, 0, Math.PI * .5)
// c.stroke();

// c.beginPath();
// c.strokeStyle = 'white';
// c.arc(195, 100, 30, 14, Math.PI * 1)
// c.stroke();

// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2);
// c.fillStyle = 'red';
// c.fill();
// c.strokeStyle = 'white';
// c.lineWidth = 10;
// c.stroke();

// for(let i = 0; i < 150; i++){

//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     // let xy = Math.random() * window.innerWidth;
//     // let yx = Math.random() * window.innerHeight;

//     // let xx = Math.floor(Math.random() * 150);
//     // let yy = Math.floor(Math.random() * 150);

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2);
//     c.strokeStyle = 'red';

//     // c.fillStyle = 'aqua';
//     // c.fillRect(xy, yx, xx, yy);

//     c.stroke();

// }

// Js Arc / Circle//

// Js Circle Animation//

// for(let i = 0; i < 110 ; i++){
//     let x = Math.random() *  window.innerWidth;
//     let y = Math.random() *  window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 10, 0, Math.PI * 2);
//     c.fill();
//     c.fillStyle = 'white';
// }

// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// let dx = (Math.random() * - .5) * 8;
// let dy = (Math.random() * - .5) * 8;
// let radious = 30;


///////// this is Arc Circle Animation Start /////////////


// function Circle(x, y, dx, dy, radious){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radious = radious;

//     this.draw = ()=>{
//         c.beginPath();
//         c.arc(this.x, this.y, this.radious, 0, Math.PI * 2);
//         c.fillStyle = 'blue';
//         c.fill();
//     }

//     this.update = ()=>{

//         if(this.x + this.radious > innerWidth || this.x - this.radious < 0){
//             this.dx = -this.dx;
//         }

//         if(this.y + this.radious > innerHeight || this.y - this.radious < 0){
//             this.dy = -this.dy;
//         }

//         this.x += this.dx;
//         this.y += this.dy;
//         this.draw();
//     }
// }

// let circleArray = [];

// for(let i = 0; i < 100 ; i++){
//     let radious = 30;
//     let x = Math.random() * (innerWidth - radious * 2) + radious;
//     let y = Math.random() * (innerHeight - radious * 2) + radious;
//     let dx = (Math.random() * - .5) * 3;
//     let dy = (Math.random() * - .5) * 3;
//     circleArray.push(new Circle(x, y, dx, dy, radious));
// }

// function animated(){

//     requestAnimationFrame(animated);

//         c.clearRect(0, 0, innerWidth, innerHeight);

//         for(let i = 0; i < circleArray.length; i++){
//             circleArray[i].update();
//         }
// circle.draw();
// circle.update();
// c.beginPath();
// c.arc(x, y, radious, 0, Math.PI * 2);
// // // c.strokeStyle = 'white';
// c.stroke();

// }

// animated();



// for(let i = 0; i < 50 ; i++){

//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
    
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2);
//     c.stroke();

// }

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;

// let radius = 30;
// let x = Math.random() * (innerWidth - radius * 2) + radius;
// let y = Math.random() * (innerHeight - radius * 2) + radius;
// let dx = (Math.random() + 0.5 );
// let dy = (Math.random() + 0.5 );

// let dx = parseInt(Math.random() * prompt('Enter DX Value'));
// let dy = parseInt(Math.random() * prompt('Enter DY Value'));

// c.beginPath();
// c.arc(30, 300, 30, 0, Math.PI * 2);
// c.stroke();

///////// this is Arc Circle Animation End /////////////


///////// this is Arc Circle Animation Start /////////////

// function Circle(x, y, dx, dy, radius){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = ()=>{
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         c.fillStyle = 'rgb(255, 99, 71)';
//         c.fill();
//         // c.stroke();
//     }

//     this.update = ()=>{
//         if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             this.dx = -this.dx;
//         }

//         if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
//             this.dy = -this.dy
//         }
        
//         this.x += this.dx;
//         this.y += this.dy;
//         this.draw();
//     }

// }

// let circleArray = [];

// for(let i = 0; i < 40; i++){
//     let radius = 30;
//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius;
//     let dx = (Math.random() + 0.5 );
//     let dy = (Math.random() + 0.5 );
//     circleArray.push(new Circle(x,y, dx, dy, radius));
// }

// // let circle = new Circle(x, y, dx, dy, radius);

// function animate(){
//     requestAnimationFrame(animate);
//         c.clearRect(0, 0, innerWidth, innerHeight);

//         for(let i = 0; i < circleArray.length ; i++){
//             circleArray[i].update();
//         }

// }

// animate();

///////// this is Arc Circle Animation End /////////////

///////// this is Arc Circle Animation Start /////////////

// let radius = 30
// let x = Math.random() * (innerWidth - radius * 2) + radius;
// let y = Math.random() * (innerHeight - radius * 2) + radius;
// let dx = 3;
// let dy = 3;

// c.beginPath();
// c.arc(x, y, radius, 0, Math.PI * 2);
// c.stroke();

let mouse = {
    x : undefined,
    y : undefined,
}

window.addEventListener('mousemove', (event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

let maxRadius = 40;
let minRadius = 2;

let color = [
    '#348888',
    '#22BABB',
    '#9EF8EE',
    '#FA7F08',
    '#F24405',
]

function Circle(x, y, dx, dy, radius){

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color[Math.floor(Math.random() * color.length)];

    this.draw = ()=>{
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color; 
        c.fill();
        // c.stroke();
    }

    this.update = ()=>{

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        if(mouse.x - this.x < 50 && mouse.x - this.x > - 50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 8;
            }
        }
        else if(this.radius > this.minRadius){
            this.radius -= .5;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}

let circleArray = [];



function init(){
    circleArray = []
    for(let i = 0; i < 200; i++){
        let radius = (Math.random() * 2 )+ 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - .5) * 2;
        let dy = (Math.random() - .5) * 2;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}


function animated(){
    requestAnimationFrame(animated);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < circleArray.length ; i++){
        circleArray[i].update();
    }

}
animated();

init();

///////// this is Arc Circle Animation End /////////////


// Js Circle Animation//
