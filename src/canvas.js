export default class canvas {
  
  constructor ()
  {
    this.my_canvas = document.getElementById("firstTask");
    this.context = this.my_canvas.getContext("2d");
    this.ballImg = new Image();
    this.ballImg.src = "../First_Task/images/circle-cropped.png";
    this.holeImg = new Image();
    this.holeImg.src = "../First_Task/images/hole.png";
  }
}