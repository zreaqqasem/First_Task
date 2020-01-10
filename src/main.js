import ball from "../src/ball.js";
import move from "../src/methods.js";

let numOfBalls = prompt ('enter the number of balls you want');
let balls  = new Array();
let balls2 = new Array();
balls.length = numOfBalls;
balls2.length = balls.length;
for (let i = 0 ; i < balls.length ; i ++ )
{
  balls[i] = new ball();
  move(balls[i]);
}

 
