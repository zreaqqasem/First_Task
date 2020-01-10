import canvas from "../src/canvas.js";
import { hole } from "./hole.js";

export default  function moveBallsAndDrawHoles (my_ball){
  
  const canvas1 = new canvas();
  let hole1 = new hole(450,400);
  let hole2 = new hole(1000,200); // you can create any number of holes you want in our example we create 3 holes .
  let hole3 = new hole(200,500);
  my_ball.direction();

  setInterval(() => {
  
    my_ball.x_possition +=  my_ball.x_velocity;
    my_ball.y_possition += my_ball.y_velocity;
    my_ball.checkWalls();
    setInterval(() => {
    canvas1.context.drawImage(canvas1.ballImg, my_ball.x_possition - my_ball.ball_size / 2, my_ball.y_possition - my_ball.ball_size / 2, my_ball.ball_size, my_ball.ball_size); //draw ball.
    canvas1.context.drawImage(canvas1.holeImg, hole1.x_possition, hole1.y_possition, hole1.hole_size, hole1.hole_size);
    canvas1.context.drawImage(canvas1.holeImg, hole2.x_possition, hole2.y_possition, hole2.hole_size, hole2.hole_size); // draw holes
    canvas1.context.drawImage(canvas1.holeImg, hole3.x_possition, hole3.y_possition, hole3.hole_size, hole3.hole_size);

  

  }, 1000/my_ball.Frame_per_second );
  
  setInterval (canvas1.context.clearRect(0,0,1450, 800),1000/my_ball.Frame_per_second); // cleare canvas after move ball each time to delete its effect on the canvas.

  }, 1000/my_ball.Frame_per_second );

}