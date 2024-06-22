console.log("Jai Shree Ram");
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadingAnimation (){
let tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.7,
    delay: 0.5,
})

tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
        let loadtimer = document.querySelector("#line1-part1 h5")
        let grow = 0;
        setInterval(function () {
            if (grow < 100) {
                loadtimer.innerHTML = grow++;
            } else {
                grow = 100;
                loadtimer.innerHTML = grow;
            }
        }, 25)
    }
})

tl.to(".line h2",{
    animationName:"NowAnimation",
    opacity:1
})
tl.from("#loader p",{
    y:12,
    opacity:0,
    
})

tl.to("#loader", {
    opacity: 0,
    // duration: 0.4,
    delay:2,
})
tl.from(".page1",{
    y:1000,
    duration:0.5,
    opacity:0,
})

tl.to("#loader",{
    display:'none',
})

tl.from("#nav", {
    opacity:0,
    duration:1,
})
tl.from(".hero h1, .hero h2, .hero h3",{
    y:120,
    stagger:0.2,
    duration: 0.8,
    
})
tl.from(".page2",{
    opacity:0,
    
})

}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            x:dets.x-30,
            y:dets.y,
        })
    });
    let videoContainer= document.querySelector(".video-container");
    videoContainer.addEventListener("mouseenter",()=>{
        document.querySelector("#crsr").style.display="none"
        videoContainer.addEventListener("mousemove",(details)=>{
            gsap.to(".video-cursor",{
                top:details.y-150,
                left:details.x-400,
            })
        })
    })
    videoContainer.addEventListener("mouseleave",function(){
        document.querySelector("#crsr").style.display="initial";
        gsap.to(".video-cursor",{
            left:80 + "%",
            top:-10 + "%",
        })
    })
    Shery.makeMagnet("#first-svg", {});
    Shery.makeMagnet(".nav-part2-1 h3", {});
    Shery.makeMagnet(".nav-part2-2 h3", {});
}

function ImageAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y,
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",()=>{
        gsap.to("#flag",{
            opacity:1, 
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",()=>{
        gsap.to("#flag",{
            opacity:0, 
        })
    })
    document.querySelector("#center-ball").addEventListener("mouseenter",()=>{
        gsap.to("#center-ball",{
            scale:0.9,
            duration:0.3,
        })
    })
    document.querySelector("#center-ball").addEventListener("mouseleave",()=>{
        gsap.to("#center-ball",{
            scale:1,
            duration:0.3,
        })
    })
}

function videoAnimation(){
   let videoContainer = document.querySelector(".video-container");
   let video =  document.querySelector(".video-container video");
   let videoCursor = document.querySelector(".video-cursor")
   let flag = 0;
   videoContainer.addEventListener("click", ()=>{
    if(flag===0){
        video.play();
        video.style.opacity=1;
        videoCursor.innerHTML=`<i class="ri-pause-line"></i>`
        videoCursor.style.scale=0.5
        flag=1
    } else{
        video.pause();
        video.style.opacity=0;
        videoCursor.innerHTML=`<i class="ri-play-line"></i>`
        videoCursor.style.scale=1
        flag=0
    }
   })
}

function SheryAnimation(){
    Shery.imageEffect(".image-div ",{
        style:5,
        // debug:true,
        config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":0.65,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7666557722625823},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":2},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]}},
        gooey:true,
    })
}

locomotiveAnimation();
loadingAnimation();
cursorAnimation();
ImageAnimation();
videoAnimation()
SheryAnimation();

