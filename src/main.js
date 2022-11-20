const UI_left = document.querySelector('.ui_left');
const svg_left = document.querySelector('.left_section');
const UI_right = document.querySelector('.ui_left');
const svg_right = document.querySelector('.right_section');

UI_left.addEventListener('mouseenter',()=>{
    svg_left.classList.add('left_over');
    svg_right.classList.add('right_leave')
})
UI_left.addEventListener('mouseleave',()=>{
    svg_left.classList.remove('left_over');
    svg_right.classList.remove('right_leave')
})


// const svgMain = document.querySelector(".svg_main")
// const mainPaths = svgMain.querySelectorAll("path");

// mainPaths.forEach((path,i)=>{
//     const length= path.getTotalLength();
//     path.style.setProperty('--le')
// })
