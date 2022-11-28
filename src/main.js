
const UI_left = document.querySelector('.ui_left');
const svg_left = document.querySelector('.first_left');
const UI_right = document.querySelector('.ui_left');
const svg_right = document.querySelector('.first_right');

UI_left.addEventListener('mouseenter',()=>{
    svg_left.classList.add('left_over');
    svg_right.classList.add('right_leave')
})
UI_left.addEventListener('mouseleave',()=>{
    svg_left.classList.remove('left_over');
    svg_right.classList.remove('right_leave')
})




gsap.registerPlugin(ScrollTrigger);

let tlMain = gsap.timeline({
    scrollTrigger:{
        trigger:".wrap_secon",
        start:"center center",
        end:"bottom top",
        markers:true,
        pin:true,
        scrub:0.9,
    }
})
.from(".txt1",{x:innerWidth * 1})
.from(".txt2",{x:innerWidth * -1})
.from(".txt3",{x:innerWidth * 1})
.from(".txt4",{x:innerWidth * -1});

gsap.timeline({
    scrollTrigger:{
        trigger:".wrap_third",
        start:"top 80%",
        end:"bottom -80%",
        markers:true,
        scrub:1,
        // containerAnimation:tlMain,
    }
})
.to(".img3",{
    rotation:240,
    duration:1, ease:'none',
})

gsap.timeline({
    scrollTrigger:{
        trigger:".wrap_fourth",
        start:"top 100%",
        end:"bottom bottom",
        markers:true,
        scrub:0.8,
        // containerAnimation:tlMain,
    }
})
.from(".img4",{y:600,scale:0.8})
.from(".img5",{y:600,scale:0.8})
.from(".img6",{y:600,scale:0.8})
.from(".img7",{y:400,scale:0.8});

const ptag1 = document.querySelector('.first_parall')
const ptag2 = document.querySelector('.secon_parall')

const txtArr1="SAINT LARENT SAINT LARENT SAINT LARENT SAINT LARENT SAINT LARENT SAINT LARENT".split(' ');
const txtArr2="BLACK IS GOOD BLACK IS GOOD BLACK IS GOOD BLACK IS GOOD BLACK IS GOOD BLACK IS GOOD".split(' ');

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0`
    }
  }

let count1=0;
let count2=0;

initTexts(ptag1,txtArr1);
initTexts(ptag2,txtArr2);

function marqueeText(count,element,direction) {
    if(count>element.scrollWidth/2){
        element.style.transform=`translate3d(0,0,0)`
        count = 0
    }
    element.style.transform=`translate3d(${count * direction}px,0,0)`
    return count;
}

function animate(){
    count1++;
    count2++;

    count1 = marqueeText(count1,ptag1,-1)
    count2 = marqueeText(count2,ptag2,1)

    window.requestAnimationFrame(animate)
}

function scrollHandler() {
    count1 += 15;
    count2 += 15;
  }
  window.addEventListener('scroll', scrollHandler)
animate();