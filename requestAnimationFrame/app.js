let start;
let done = false;

const image= document.querySelector('.img1');
const image2= document.querySelector('.img2');



function step(timestamp) {
    // console.log('hello');
    // requestAnimationFrame(step);

    if (start === undefined) {
        start = timestamp;

    }

    const elapsed = timestamp - start;

    if (elapsed > 5000) {
        done = true;

    }
    if (done) {
        return;

    }

    // console.log(elapsed);

    // image.style.transform=`translateX(${elapsed/20}px)`
    // image.style.transform=`translateY(${elapsed/20}px)`
    image.style.transform='rotate(360deg)';
    image.style.transform=' perspective(800px) translate(20px, 0, 40px) rotateY(6deg)';
    image.style.transform=' translateX(1150px) rotate(180deg) ';
    image.style.transitionDuration='1s';

    image2.style.transform=' translateX(750px) rotate(360deg) ';
    image2.style.transitionDuration='2s'


    requestAnimationFrame(step);
}

requestAnimationFrame(step);