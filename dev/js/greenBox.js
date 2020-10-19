import {gsap} from "gsap";


export function greenBoxAnimation(){
    var tl = gsap.timeline();
    tl.from(".green-box",{duration: 2, y: 300})
        .to(".green-box",{duration: 2, x: 300});
    return tl;
}
