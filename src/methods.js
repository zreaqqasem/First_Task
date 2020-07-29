import { hole } from "./hole.js";

export default  function moveBallsAndDrawHoles (my_ball){
  let hole1 = new hole(450,400);
  let hole2 = new hole(1000,200); // you can create any number of holes you want in our example we create 3 holes .
  let hole3 = new hole(200,500);
  const my_canvas = document.getElementById("ballgame"); // get our canvas based on our id 
  let context = my_canvas.getContext("2d"); // get canvas context
  let ballImg = new Image(); // create new image object                       
  ballImg.src = "../images/circle-cropped.png"; // store our ball image 
  let holeImg = new Image();
  holeImg.src = "../images/hole.png"; // bring our hole image 
  // 
  my_ball.direction(); 
  setInterval(movaball , 1000/my_ball.Frame_per_second);
  function movaball (){
    checkCircleCollision(my_ball, hole1);
    checkCircleCollision(my_ball, hole2);
    checkCircleCollision(my_ball, hole3);
    checkWalls();
    my_ball.x_possition +=  my_ball.x_velocity;
    my_ball.y_possition += my_ball.y_velocity;

    setInterval(() => {
    context.drawImage(ballImg, my_ball.x_possition - my_ball.ball_size / 2, my_ball.y_possition - my_ball.ball_size / 2, my_ball.ball_size, my_ball.ball_size); //draw ball.
    context.drawImage(holeImg, hole1.x_possition, hole1.y_possition, hole1.hole_size, hole1.hole_size);
    context.drawImage(holeImg, hole2.x_possition, hole2.y_possition, hole2.hole_size, hole2.hole_size); // draw holes
    context.drawImage(holeImg, hole3.x_possition, hole3.y_possition, hole3.hole_size, hole3.hole_size);
    clearInterval(moveBallsAndDrawHoles);
  

  }, 1000/my_ball.Frame_per_second );
  setInterval (context.clearRect(0,0,1450, 800),1000/my_ball.Frame_per_second); // cleare canvas after move ball each time to delete its effect on the canvas.


  }
  function checkCircleCollision(ball, hole)
  {
    var a = ball.x_possition - hole.x_possition;
    var b = ball.y_possition - hole.y_possition;
    var c = (a * a) + (b * b);
    var radii = ball.ball_size/2 + hole.hole_size/2;
    if(radii * radii >= c){
      ball.ball_size = 0;   
    }
  }

  function checkWalls()
  {
    if (my_ball.x_possition - my_ball.ball_size / 2 < 0 && my_ball.x_velocity < 0 ) {   // here is the colision of the 4 wall cases.
      my_ball.x_velocity = -my_ball.x_velocity;
     }
     if (my_ball.x_possition + my_ball.ball_size / 2 > 1450 && my_ball.x_velocity > 0) {
      my_ball.x_velocity = -my_ball.x_velocity;
     }
     if (my_ball.y_possition - my_ball.ball_size / 2 < 0 && my_ball.y_velocity < 0) {
      my_ball.y_velocity = -my_ball.y_velocity;
     }
     if (my_ball.y_possition + my_ball.ball_size / 2 > 800 && my_ball.y_velocity > 0) {
      my_ball.y_velocity = -my_ball.y_velocity;
     }

}

 
}