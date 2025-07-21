let slide= document.getElementById('img')
let images = document.querySelectorAll('img');
// let im = document.getElementById('img')
let pre = document.getElementById('left')
let next = document.getElementById('right')
let index=0
let total = images.length;

function showImage() {
    slide.style.transform = `translateX(-${index * 500}px)`;
  }

  next.addEventListener('click', () => {
    slide.style.animation = 'none';
    index = (index + 1) % total;
    showImage();
    
  }); 

  pre.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    showImage();
  });




  
  
