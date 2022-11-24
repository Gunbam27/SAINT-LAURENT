

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

// new Pageable("main");
const sectionFirst = document.querySelector('.wrap_background')
const sectionHeight = sectionFirst.offsetHeight;

window.addEventListener("wheel", (e) =>{
    console.log(window.pageYOffset)
    if(e.deltaY>0){window.scrollTo({top:sectionHeight,left:0,behavior:'smooth'})}
    if(e.deltaY<0){window.scrollTo({top:-(sectionHeight),left:0,behavior:'smooth'})}
})
console.log(sectionHeight);


