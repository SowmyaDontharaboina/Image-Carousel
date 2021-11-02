
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const images = document.querySelectorAll('#imgs img');

let activeImgIndex = 0;


function changeImage(){
    if(activeImgIndex > images.length -1) {
        activeImgIndex = 0; 
    }else if(activeImgIndex < 0) {
        activeImgIndex = images.length - 1;
    }
    imgs.style.transform = `translateX(${-activeImgIndex * 500}px)`;
}
function run () {
    activeImgIndex++;
    changeImage()
}
let interval = setInterval(run, 2000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
leftBtn.addEventListener('click', () => {
    activeImgIndex--;
    changeImage();
    resetInterval();
})

rightBtn.addEventListener('click', () => {
    activeImgIndex++;
    changeImage();
    resetInterval();
})
