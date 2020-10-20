import {gsap} from "gsap";

// gsap.set("#smallestBubble",{transformOrigin: "top"});

const bubbleSpeed=1;

const bubbleTL =gsap.timeline();
bubbleTL.from("#smallestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -170, ease: "none"})
        .to("#smallestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 170, ease: "none"})
        .from("#biggestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -130, ease: "none"})
        .to("#biggestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 120, ease: "none"})
        .from("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -100, ease: "none"})
        .to("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 100, ease: "none"})
        .from("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -120, ease: "none"})
        .to("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 120, ease: "none"});
        // .to("#bubbles", {duration:bubbleSpeed, repeat:-1, ease: "none"});

export function bubbleAnimation(){
    return bubbleTL;
}

// gsap.set("#sliderColor-",{transformOrigin: "center"});

const loaderTL =gsap.timeline();
loaderTL.from("#sliderColor-",{ width: 0})
        .to("#sliderColor-",{ width: 50})
        .to("#sliderColor-",{ width: 100})
        .to("#sliderColor-",{ width: 158})
        .to("#sliderColor-",{ width: 300});

export function loaderAnimation(){
    return loaderTL;
}
