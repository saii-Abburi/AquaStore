let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (window.innerWidth >= 1024) { // Apply only on laptop-like devices
        

        // Ensure smooth restoration to the original position
        moon.style.top = `${value * 0.7 - 74}px`;
        text.style.top = `${87 + value * -0.2}%`;
        train.style.left = `${value * 1.7}px`;
        desert_moon.style.top = `${value * 0.3}px`;
        man.style.left = `${value * 0.6}px`;
    }
    if (window.innerWidth < 768) { // Check for phone screen
        moon.style.top = `${value * 0.7}px`; // Reduced multiplier and offset
        text.style.top = `${85 + value * -0.1}%`; // Less negative impact
        train.style.left = `${value * 0.5}px`; // Reduced horizontal movement
        desert_moon.style.top = `${value * 0.15}px`; // Reduced vertical movement
        man.style.left = `${value * 0.3}px`; // Reduced horizontal movement
    }

});


let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;