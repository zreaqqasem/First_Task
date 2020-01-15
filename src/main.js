import ball from "../src/ball.js";
import moveBallsAndDrawHoles from "../src/methods.js";
let ball1 = new ball();
let ball2 = new ball();
let ball3 = new ball();

setTimeout(moveBallsAndDrawHoles(ball1), 1000) ;  
setTimeout( moveBallsAndDrawHoles(ball2),1500);
setTimeout( moveBallsAndDrawHoles(ball3),2000);



 
