import {bubbleAnimation} from "./demo.js"
// import {loaderAnimation} from "./demo.js"
import {gsap} from "gsap";

const mainTL = gsap.timeline();
mainTL.add(bubbleAnimation());
    // .add(loaderAnimation());

