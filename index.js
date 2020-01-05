
class canvas {

constructor ()

{
  this.my_canvas = document.getElementById("firstTask");
  this.context = this.my_canvas.getContext("2d");
  this.ballImg = new Image();
  this.ballImg.src = "circle-cropped.png";
  this.background = new Image();
  this.background.src = "finals.jpg";
}

}

class ball {
  
  
  constructor ()
  {
    this.ball_x = this.ball_x();
    this.ball_y = this.ball_y();
    this.x_velocity = this.x_velocity();
    this.y_velocity = this.y_velocity();
    this.Frame_per_second = 30;
    this.ball_size = 40;
    
  }

     ball_x() {

     this.ball_x = Math.random() * 1450; 
     this.ball_x = Math.floor(this.ball_x);
     return this.ball_x;   // generate a random number between 1 and 1450 which it the width of the canvas.


    
  }

   ball_y ()
  {
   
    this.ball_y = Math.random() * 800; //generate a random number between 1 and 800 which it the height of the canvas.
    this.ball_y = Math.floor(this.ball_y);
    return this.ball_y;


  }
  x_velocity() // get a random x axsis velocity for any ball object
  {

    this.x_velocity = (Math.random() * 10 + 10 );
    this.x_velocity = Math.floor(this.x_velocity);
    return this.x_velocity;
  }

   y_velocity () // get a random y axis velocity for any ball object.
  {
    this.y_velocity = (Math.random() * 10 + 10 );
    this.y_velocity = Math.floor(this.y_velocity);
    return this.y_velocity;


  }

  direction () // generate a random direction start.
  {

    if (Math.floor(Math.random() * 2) == 0) {
      this.x_velocity = -this.x_velocity ;
  }
  if (Math.floor(Math.random() * 2) == 0) {
      this.y_velocity = -this.y_velocity;
  }

  }


  checkWalls()
  {
    if (this.ball_x - this.ball_size / 2 < 0 && this.x_velocity < 0) {   // here is the colision of the 4 wall cases.
      this.x_velocity = -this.x_velocity;
     }
     if (this.ball_x + this.ball_size / 2 > 1450 && this.x_velocity > 0) {
      this.x_velocity = -this.x_velocity;
     }
     if (this.ball_y - this.ball_size / 2 < 0 && this.y_velocity < 0) {
      this.y_velocity = -this.y_velocity;
     }
     if (this.ball_y + this.ball_size / 2 > 800 && this.y_velocity > 0) {
      this.y_velocity = -this.y_velocity;
     }

  }




 
  
}
 function move (my_ball)
{
  
  const canvas1 = new canvas();
  my_ball.direction();

  setInterval(() => {


    my_ball.ball_x +=  my_ball.x_velocity;
    my_ball.ball_y += my_ball.y_velocity;
    my_ball.checkWalls();
   
   
    setInterval(() => {
    
    canvas1.context.drawImage(canvas1.ballImg, my_ball.ball_x - my_ball.ball_size / 2, my_ball.ball_y - my_ball.ball_size / 2, my_ball.ball_size, my_ball.ball_size);   

  }, 1000/my_ball.Frame_per_second );

   canvas1.context.clearRect(0,0,1450, 800);
    
  }, 1000/my_ball.Frame_per_second);

}



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







