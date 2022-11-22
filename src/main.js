gsap.registerPlugin(ScrollTrigger);

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

const elm = document.querySelectorAll('section');
const elmCount = elm.length;
console.log(elmCount);
const wrap_background = document.querySelector('.wrap_background')
window.addEventListener("load", ()=> {
    elm.forEach(function (item,index){
        item.addEventListener('wheel',(e)=>{
            e.preventDefault();
            let delta = 0;
            let moveTop = window.scrollY;
            let elmSelector = elm[index];

            if(delta<0){
                if(elmSelector !== elmCount-1){
                    moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                }
            }
            const body = document.querySelector('html');
            window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
        })
    })
});
    