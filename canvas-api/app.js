const canvas=document.querySelector('#my-canvas');
const ctx= canvas.getContext('2d');


//draw a rectangle
ctx.fillStyle = 'green'
ctx.fillRect(10,10,150,200);

//draw a circle
ctx.fillStyle='pink'
ctx.arc(300,200,100,0,Math.PI*2);
ctx.fill();

//draw lines

ctx.beginPath();
ctx.strokeStyle= 'orange'
ctx.lineWidth=5;
ctx.moveTo(30,50);
ctx.lineTo(200,300);
ctx.stroke();

//draw text
ctx.font='30px Arial';
ctx.fillStyle='blue';
ctx.lineWidth=1.5;
ctx.fillText('Rao Aqil Siddique' ,200,300,400);
ctx.strokeText('Rao Faheem' ,300,400,300);


//draw image

const img=document.querySelector('img');
img.style.background='transparent';
img.style.display='none';

img.addEventListener('load', ()=>ctx.drawImage(img,200,200))