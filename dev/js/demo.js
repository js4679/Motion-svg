import {gsap} from "gsap";

// gsap.set("#smallestBubble",{transformOrigin: "top"});

const bubbleSpeed=1;

const bubbleTL =gsap.timeline();
bubbleTL.from("#smallestBubble", {duration:bubbleSpeed, alpha:0, y: -170, ease: "none"})
        .from("#biggestBubble", {duration:bubbleSpeed, alpha:0, y: -130, ease: "none"})
        .from("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, y: -100, ease: "none"})
        .from("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, y: -120, ease: "none"})
        .to("#smallestBubble", {duration:bubbleSpeed, alpha:0, y: 170, ease: "none"})
        .to("#biggestBubble", {duration:bubbleSpeed, alpha:0, y: 30, ease: "none"})
        .to("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, y: 100, ease: "none"})
        .to("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, y: 120, ease: "none"});

export function bubbleAnimation(){
    return bubbleTL;
}

const loaderTL =gsap.timeline();
loaderTL.from("#sliderColor-", {duration:bubbleSpeed,  x: -70, ease: "none"})

export function loaderAnimation(){
    return loaderTL;
}
