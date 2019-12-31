function welcome(){
  let firstName = prompt('Enter your first name :');
  let lastName = prompt('Enter your last name :');
  alert('you are welcome ' + firstName + ' ' + lastName + ' Now You Can Start By clicking OK ! Good Luck !');
  document.getElementsByClassName('slopeicon')[0].style.display = 'block';
  }
  var balls = [];
  var canvasX = 0;
  var canvasY = 0;
  var timer = null;
  var m_lastX = 0;
  var m_lastY = 0;
  var M_SPACE = 24;
  var B_VMIN = 5;
  var B_VMAX = 5;
  var B_WIDTH = 13;
  var B_HEIGHT = 13;
  function rnd(n) {
    return Math.random()*n;
  }
  function rndI(n) {
    return parseInt(rnd(n));
  }
  function createBall(oParent) {
    oParent.appendChild(balls[0].cloneNode(false));
    initBall(balls[balls.length-1]);
  }
  function createBallAtMouse(e) {
    e = e?e:event;
    createBall(document.getElementById('ball-container'));
    with (balls[balls.length-1]) {
      _x = e.clientX;
      _y = e.clientY;
    }
  }
  function initBall(oBall) {
    oBall._x = Math.random() * 20;
    oBall._y = Math.random() * 20;
    oBall._vX = B_VMIN + rnd(B_VMAX) * (Math.random() > 0.5 ? 1 : -1);
    oBall._vY = B_VMIN + rnd(B_VMAX);
  }
  function moveBall(oBall) {
    oBall._x += oBall._vX;
    oBall._y += oBall._vY;
    oBall.style.left = oBall._x + 'px';
    oBall.style.right = oBall._y + 'px';
    oBall.style.top = oBall._y + 'px';
    oBall.style.button = oBall._y + 'px';
  
  
    
    if ((oBall._vX > 0 && oBall._x + oBall._vX + B_WIDTH > canvasX) || (oBall._vX < 0 && oBall._x + oBall._vX < 0)) {
      // horizontal bounce
      oBall._vX *= -1;
    }
    if ((oBall._vY > 0 && oBall._y + oBall._vY + B_HEIGHT > canvasY) || (oBall._vY < 0 && oBall._y + oBall._vY < 0)) {
      // vertical bounce
      oBall._vY *= -1;
    }
  }
  function animateStuff() {
    for (var i=balls.length; i--;) {
      moveBall(balls[i]);
    }
    collisionCheck();
  }
  function isColliding(ball1, ball2) {
    if (Math.abs(ball1._x - ball2._x) < B_WIDTH && Math.abs(ball1._y - ball2._y) < B_HEIGHT) {
      /*
       * we have a collision!
       * edge case to consider: balls may get stuck colliding back and forth
       * between each other for a few frames if they don't fully "separate"
       * from each other in one frame of motion.
      */
      return true;
    } else {
      return false;
    }
  }
  function collisionCheck() {
    // simple loop through all the ball objects, comparing coordinates
    var i, j;
    for (i = balls.length; i--;) {
      for (j = balls.length; j--;) {
        if (j !== i) { // don't compare each ball to itself
          if (isColliding(balls[j], balls[i])) {
            // bounce the ball based on its dominant direction (horizontal or vertical movement)
            if (Math.abs(balls[j]._vX) > Math.abs(balls[j]._vY)) {
              // moving more horizontally
              balls[j]._vX *= -1;
            } else if (Math.abs(balls[j]._vY) > Math.abs(balls[j]._vX)) {
              // moving more vertically
              balls[j]._vY *= -1;
            } else {
              // edge case: if identical speed on x/y, bounce both
              balls[j]._vX *= -1;
              balls[j]._vY *= -1;
            }
          }
        }
      }
    }
  }
  function startAnimation() {
    if (!timer) {
      timer = setInterval(animateStuff,20);
    }
  }
  function stopAnimation() {
    if (!timer) {
      return false;
    }
    clearInterval(timer);
    timer = null;
  }
  function mouseDown(e) {
    e = e?e:event;
    m_lastX = e.clientX;
    m_lastY = e.clientY;
    
    document.onmousemove = mouseMove;
    document.onmouseup = mouseUp;
  }
  function mouseMove(e) {
    e = e?e:event;
    if (Math.abs(e.clientX - m_lastX) > M_SPACE || Math.abs(e.clientY - m_lastY) > M_SPACE) {
      m_lastX = e.clientX;
      m_lastY = e.clientY;
      createBallAtMouse(e);
    }
    return false;
  }
  function mouseUp() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
  function init() {
    balls = document.getElementById('ball-container').getElementsByTagName('img');
    for (var i=balls.length; i--;) {
      initBall(balls[i]);
    }
    getWindowCoords();
    startAnimation();
    document.onmousedown = mouseDown;
  }
  getWindowCoords = (navigator.userAgent.match(/opera/i) || navigator.userAgent.match(/safari/i)) ? function() {
    canvasX = 1400;
    canvasY = 760;
  } : function() {
    canvasX = document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth;
    canvasY = document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight;
  }
  window.onresize = getWindowCoords;
  window.onload = init;