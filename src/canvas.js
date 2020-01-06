
export default class canvas {

    constructor ()
    
    {
      this.my_canvas = document.getElementById("firstTask");
      this.context = this.my_canvas.getContext("2d");
      this.ballImg = new Image();
      this.ballImg.src = "../images/circle-cropped.png";
      this.background = new Image();
      this.background.src = "../images/finals.jpg";
    }
  }