
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


gsap.timeline({
    scrollTrigger:{
        trigger:".wrap_secon",
        start:"center center",
        end:"bottom top",
        markers:true,
        pin:true,
        scrub:true,
    }
})
.from(".txt1",{x:innerWidth * 1})
.from(".txt2",{x:innerWidth * -1})
.from(".txt3",{x:innerWidth * 1})
.from(".txt4",{x:innerWidth * -1})

gsap.timeline({
    scrollTrigger:{
        trigger:".wrap_third",
        start:"top top",
        end:"bottom top",
        markers:true,
        pin:true,
        scrub:true,
    }
})
// .from(".wrap_third",{opacity:1})
.from(".img2",{y:innerHeight * -1})
// .from(".txt6",{y:innerHeight * 1})
// .from(".txt7",{y:innerHeight * 1})
// .from(".txt8",{y:innerHeight * 1})


