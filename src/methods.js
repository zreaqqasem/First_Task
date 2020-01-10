import canvas from "../src/canvas.js";

export default  function move (my_ball){
  
  const canvas1 = new canvas();
  my_ball.direction();

  setInterval(() => {
  
    my_ball.x_possition +=  my_ball.x_velocity;
    my_ball.y_possition += my_ball.y_velocity;
    my_ball.checkWalls();
    setInterval(() => {
    canvas1.context.drawImage(canvas1.ballImg, my_ball.x_possition - my_ball.ball_size / 2, my_ball.y_possition - my_ball.ball_size / 2, my_ball.ball_size, my_ball.ball_size);   
  }, 1000/my_ball.Frame_per_second );

   canvas1.context.clearRect(0,0,1450, 800);
    
  }, 1000/my_ball.Frame_per_second);

}