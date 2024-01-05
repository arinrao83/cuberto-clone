function init(){
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
init()


document.querySelector("#create").addEventListener("mouseenter",function(){
  document.querySelector("#mini").style.bottom = "0"
  document.querySelector("#mini").style.borderRadius = 0
  document.querySelector("#create h2").style.top = "-10rem"
})


document.querySelector("#create").addEventListener("mouseenter",function(){
  document.querySelector("#create").style.scale = 1.01

  setTimeout

},"100")  

document.querySelector("#create").addEventListener("mouseleave",function(){
  document.querySelector("#mini").style.bottom = "-100%"
  document.querySelector("#mini").style.borderRadius = "50%"
  document.querySelector("#create h2").style.top = "-1rem"
})


gsap.from(".elem1 h1",{
  rotate:5,
  opacity:0,
  y:50,
  stagger:.2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // 
    scrub:3,
    start:"-40% 20%",
    end:"-40% 20%"
  }
})

gsap.to("#vid",{
  width:"80%",
  transform:`translate(-50%,0)`,
  borderRadius:"250px",
  y:100,
  x:-100,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // 
    start:"5% 0%",
    end:"47% 0%",
    scrub:2
  }
})

gsap.to("#page1 h4",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // 
    start:"5% 0%",
    end:"25% 0%",
    scrub:3
  }
})

gsap.to("#page1 h5",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    // 
    start:"5% 0%",
    end:"25% 0%",
    scrub:3
  }
})


gsap.to("#move",{
  x:-1000,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    scrub:5,
    start:"-30% top",
    end:"250% 0%"
  }
})

document.querySelector("#string0").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string0").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})







document.querySelector("#string1").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string1").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})


document.querySelector("#string2").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string2").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})


var page4 = document.querySelector("#page4-2")
page4.addEventListener("mousemove",function(dets){
  document.querySelector("#magic").style.left = `${dets.x -150}px`
  document.querySelector("#magic").style.top = `${dets.y -150}px`
  document.querySelector("#magic").style.width =`400px`
  document.querySelector("#magic").style.height =`400px`

})

var page4 = document.querySelector("#page4-2")
page4.addEventListener("mouseleave",function(dets){
  document.querySelector("#magic").style.left = `2rem`
  document.querySelector("#magic").style.top = `0rem`
  document.querySelector("#magic").style.width =`95%`
  document.querySelector("#magic").style.height =`550px`

})

gsap.to("#magic",{
  width:"400px",
  height:"400px",
  
  scrollTrigger:{
    trigger:"#page4-2",
    scroller:"#main",
    // markers:true,
    start:"-25% top",
    end:"-22% top",
    scrub:3

  }
})

gsap.to("#magic video",{
  left:"1.5rem",
  top:"1rem",
  scrollTrigger:{
    trigger:"#page4-2",
    scroller:"#main",
    // markers:true,
    start:"-25% top",
    end:"-22% top",
    scrub:3

  }
})




document.querySelector("#string3").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string3").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})


var page4 = document.querySelector("#page6-2")
page4.addEventListener("mousemove",function(dets){
  document.querySelector("#magic1").style.left = `${dets.x -150}px`
  document.querySelector("#magic1").style.top = `${dets.y -150}px`
  document.querySelector("#magic1").style.width =`400px`
  document.querySelector("#magic1").style.height =`400px`

})

var page4 = document.querySelector("#page6-2")
page4.addEventListener("mouseleave",function(dets){
  document.querySelector("#magic1").style.left = `2rem`
  document.querySelector("#magic1").style.top = `0rem`
  document.querySelector("#magic1").style.width =`95%`
  document.querySelector("#magic1").style.height =`550px`

})

gsap.to("#magic1",{
  width:"400px",
  height:"400px",
  
  scrollTrigger:{
    trigger:"#page6-2",
    scroller:"#main",
    // markers:true,
    start:"-25% top",
    end:"-22% top",
    scrub:3

  }
})

gsap.to("#magic1 video",{
  left:"1.5rem",
  top:"1rem",
  scrollTrigger:{
    trigger:"#page6-2",
    scroller:"#main",
    // markers:true,
    start:"-25% top",
    end:"-22% top",
    scrub:3

  }
})


gsap.to(".in",{
  x:"-1000px",
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    // markers:true,
    scrub:1,
    start:"0% top",
    end:"480% 0%"
  }
})


gsap.to(".in1",{
  x:"1000px",
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    // markers:true,
    scrub:1,
    start:"0% top",
    end:"480% 0%"
  }
})



document.querySelector("#string4").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string4").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})


gsap.to("#page7 img",{
  x:"-1200 px",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"-30% top",
    scrub:5,
    // markers:true
    

  }
})

gsap.to(".ml",{
  x:"-500px",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page10",
    // markers:true,
    scrub:5,
    top:"-30% 0%"
  }

})


gsap.to(".ml1",{
  x:"500px",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page10",
    // markers:true,
    scrub:5,
    top:"-30% 0%"
  }

})



document.querySelector("#string5").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string5").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})




document.querySelector("#change").addEventListener("mouseenter",function(){
  document.querySelector("#change h4").style.top = `-100%`
  document.querySelector("#inchange").style.bottom = `0`
  document.querySelector("#inchange").style.borderRadius = `0`
})

document.querySelector("#change").addEventListener("mouseleave",function(){
  document.querySelector("#change h4").style.top = `.3rem`
  document.querySelector("#inchange").style.bottom = `-100%`
  document.querySelector("#inchange").style.borderRadius = `50%`
})


document.querySelector("#change1").addEventListener("mouseenter",function(){
  document.querySelector("#change1 h4").style.top = `-100%`
  document.querySelector("#inchange1").style.bottom = `0`
  document.querySelector("#inchange1").style.borderRadius = `0`
})

document.querySelector("#change1").addEventListener("mouseleave",function(){
  document.querySelector("#change1 h4").style.top = `.3rem`
  document.querySelector("#inchange1").style.bottom = `-100%`
  document.querySelector("#inchange1").style.borderRadius = `50%`
})


document.querySelector("#tell").addEventListener("mouseenter",function(){
  document.querySelector("#tell h4").style.top = `-100%`
  document.querySelector("#tell1").style.bottom = `0`
  document.querySelector("#tell1").style.borderRadius = `0`
})

document.querySelector("#tell").addEventListener("mouseleave",function(){
  document.querySelector("#tell h4").style.top = `-1.5rem`
  document.querySelector("#tell1").style.bottom = `-100%`
  document.querySelector("#tell1").style.borderRadius = `50%`
})





document.querySelector("#change3").addEventListener("mouseenter",function(){
  document.querySelector("#change3 h4").style.top = `-100%`
  document.querySelector("#inchange3").style.bottom = `0`
  document.querySelector("#inchange3").style.borderRadius = `0`
})

document.querySelector("#change3").addEventListener("mouseleave",function(){
  document.querySelector("#change3 h4").style.top = `.3rem`
  document.querySelector("#inchange3").style.bottom = `-100%`
  document.querySelector("#inchange3").style.borderRadius = `50%`
})



document.querySelector("#change4").addEventListener("mouseenter",function(){
  document.querySelector("#change4 h4").style.top = `-100%`
  document.querySelector("#inchange4").style.bottom = `0`
  document.querySelector("#inchange4").style.borderRadius = `0`
})

document.querySelector("#change4").addEventListener("mouseleave",function(){
  document.querySelector("#change4 h4").style.top = `.3rem`
  document.querySelector("#inchange4").style.bottom = `-100%`
  document.querySelector("#inchange4").style.borderRadius = `50%`
})


gsap.from("#page1 h1",{
  y:200,
  x:-500,
  opacity:0,
  duration:1.5
})

gsap.from("#page3 h4",{
  y:150,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top"
  }
})


gsap.from("#page4-1 h1",{
  y:200,
  x:-500,
  opacity:0,
  
  scrollTrigger:{
    trigger:"#page4-1",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top",
    end:"top 10%"
  }
})


gsap.from("#page4-2 h4",{
  y:150,
  
  
  scrollTrigger:{
    trigger:"#page4-2",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top",
    end:"top 10%"
  }
})

gsap.from("#random",{
  scale:0,
  
  
  scrollTrigger:{
    trigger:"#page4-2",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top",
    end:"top 10%"
  }
})






gsap.from("#page6-1 h1",{
  y:200,
  x:-500,
  opacity:0,
  
  scrollTrigger:{
    trigger:"#page6-1",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top",
    end:"top 10%"
  }
})


gsap.from("#page6-2 h4",{
  y:150,
  
  
  scrollTrigger:{
    trigger:"#page6-2",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"top top",
    end:"top 10%"
  }
})


gsap.from("#page7 h1",{
  y:320,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    scrub:3,
    // markers:true,
    start:'top top',
    end:"top 20%"
  }
})


gsap.from("#page7 h4",{
  y:320,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    scrub:3,
    // markers:true,
    start:'top 10%',
    end:"top 90%"
  }
})

gsap.from("#page8 h1",{
  scale:0,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    scrub:3,
    
    start:"-40% top",
    end:"top top"
  }
})


gsap.from("#page8 video",{
  scale:0,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    scrub:3,
    
    start:"-40% top",
    end:"top top"
  }
})

gsap.from("#page8 img",{
  scale:0,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    scrub:3,
    
    start:"-40% top",
    end:"top top"
  }
})

gsap.from("#page13 h1",{
  scale:0,
  y:150,
  scrollTrigger:{
    trigger:"#page13",
    scroller:"#main",
    scrub:3,
    // markers:true,
    start:"-40% top",
    end:"top top"
  }
})

gsap.from(".round",{
  width:"0",
  scrollTrigger:{
    trigger:"#page14",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"-20% top",
    end:"0% top"
  }
})


gsap.from(".round2",{
  width:"0",
  scrollTrigger:{
    trigger:"#page14",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"0% top",
    end:"15% top"
  }
})


gsap.from(".round3",{
  width:"0",
  scrollTrigger:{
    trigger:"#page14",
    scroller:"#main",
    // markers:true,
    scrub:3,
    start:"20% top",
    end:"35% top"
  }
})


document.querySelector("#bigemoji").addEventListener("mousemove",function(dets){
  document.querySelector("#emoji").style.right = `${dets.x *.05}px`
  document.querySelector("#emoji").style.bottom = `${dets.y *.05}px`
  document.querySelector("#emoji").style.scale= `1.2`
})

document.querySelector("#bigemoji").addEventListener("mouseleave",function(dets){
  document.querySelector("#emoji").style.right = `2rem`
  document.querySelector("#emoji").style.bottom = `2rem`
  document.querySelector("#emoji").style.scale= `1`

})