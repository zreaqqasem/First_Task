export default class ball {
  
  constructor ()
  {
    this.x_possition = this.x_possition();
    this.y_possition = this.y_possition();
    this.x_velocity = this.x_velocity();
    this.y_velocity = this.y_velocity();
    this.Frame_per_second = 30;
    this.ball_size = 40;
  }

     x_possition() {

     this.x_possition = Math.random() * 1450; 
     this.x_possition = Math.floor(this.x_possition);
     return this.x_possition;   // generate a random number between 1 and 1450 which it the width of the canvas
  }

   y_possition (){
   
    this.y_possition = Math.random() * 800; //generate a random number between 1 and 800 which it the height of the canvas.
    this.y_possition = Math.floor(this.y_possition);
    return this.y_possition;
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

  direction () // generate a random ball_direction start.
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
    if (this.x_possition - this.ball_size / 2 < 0 && this.x_velocity < 0) {   // here is the colision of the 4 wall cases.
      this.x_velocity = -this.x_velocity;
     }
     if (this.x_possition + this.ball_size / 2 > 1450 && this.x_velocity > 0) {
      this.x_velocity = -this.x_velocity;
     }
     if (this.y_possition - this.ball_size / 2 < 0 && this.y_velocity < 0) {
      this.y_velocity = -this.y_velocity;
     }
     if (this.y_possition + this.ball_size / 2 > 800 && this.y_velocity > 0) {
      this.y_velocity = -this.y_velocity;
     }

  }
}












