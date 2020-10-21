import {gsap} from "gsap";

gsap.set("#svg",{transformOrigin: "center"});

const bubbleSpeed=1.5;

const bubbleTL =gsap.timeline();
bubbleTL.from("#smallestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -170, ease: "none"}, "bubblego")
        .to("#smallestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 270, ease: "none"})
        .to("#sliderColor-",{ width: 100})
        .from("#biggestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -130, ease: "none"}, "bubblego")
        .to("#biggestBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 120, ease: "none"}, "away1")
        .to("#sliderColor-",{ width: 150})
        .from("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -100, ease: "none"}, "bubblego")
        .to("#mediumDarkBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 170, ease: "none"}, "away2")
        .to("#sliderColor-",{ width: 224})
        .from("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: -120, ease: "none"}, "bubblego")
        .to("#mediumLightBubble", {duration:bubbleSpeed, alpha:0, scale: 0, y: 190, ease: "none"}, "away3")
        .to("#sliderColor-",{ duration: 1, scaleX: 30, transformOrigin: "center" })
        .to("#sliderColor-",{ duration: 1, scale: 100, transformOrigin: "center" });


export function bubbleAnimation(){
    return bubbleTL;
}

// gsap.set("#sliderColor-",{transformOrigin: "center"});

// const loaderTL =gsap.timeline();
// loaderTL.from("#sliderColor-",{ width: 0})
//         .to("#sliderColor-",{ width: 50}, "bubblego")
//         .to("#sliderColor-",{ width: 100}, "away1")
//         .to("#sliderColor-",{ width: 158}, "away2")
//         .to("#sliderColor-",{ width: 300}, "away3");

// export function loaderAnimation(){
//     return loaderTL;
// }
