const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const body = document.getElementById('body');



function modalOpen(event) {
    console.log('hi')  
    modal.classList.toggle('hide');     
    overlay.classList.toggle('hide'); 
    body.classList.toggle('bodyClass');
}


button.addEventListener('click', modalOpen);
overlay.addEventListener('click', modalOpen);

document.body.style.overflow