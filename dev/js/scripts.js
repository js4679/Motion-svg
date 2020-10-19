// import * as Demo from './demo.js';

import {gsap} from "gsap";
import {redBoxAnimation} from './redBox.js';
import {blueBoxAnimation} from './blueBox.js';
import {greenBoxAnimation} from './greenBox.js';

// console.log(Demo);

var mainTL = gsap.timeline({paused:true});

mainTL.add(redBoxAnimation())
        //.addLabel("blue")
        // .addPause()
        .add(blueBoxAnimation())
       
        .add(greenBoxAnimation())
        // .seek("blue")
        .play();