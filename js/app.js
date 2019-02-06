document.addEventListener("DOMContentLoaded", () => {

  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var radius = 10;
  var x = canvas.width / 2;
  var y = canvas.height - radius - 20;
  var dx = (Math.random() - 0.5) * 20;
  var dy = (Math.random() - 1) * 20;
  while(Math.abs(dx) > Math.abs(dy)) {
    var dx = (Math.random() - 0.5) * 20;
    var dy = (Math.random() - 1) * 20;
  }

  function createBall() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
  }

  function moveBall() {
    x += dx;
    y += dy;
    if(x + radius > canvas.width || x - radius < 0) {
      dx = -dx;
    }
    if(y + radius > (canvas.height - playerHeight) && x < playerPositionX + playerWidth && x > playerPositionX || y - radius < 0) {
      dy = -dy;
      console.log(y);
      console.log(canvas.height);
    }
    if(y - radius > canvas.height) {
      window.location.reload();
    }
  }

  var playerWidth = 100;
  var playerHeight = 20;
  var playerPositionX = (canvas.width / 2) - (playerWidth / 2);
  var playerPositionY = canvas.height - (playerHeight / 2);

  function createPlayer() {
    context.fillRect(playerPositionX, playerPositionY, playerWidth, playerHeight);
    context.stroke();
    // movePlayer();
  }

  var rightArrow = false;
  var leftArrow = false;

  document.addEventListener("keydown", arrowPressed);
  document.addEventListener("keyup", arrowReleased);

  function arrowPressed(event) {
    if(event.key == "ArrowRight") {
      rightArrow = true;
    } else if(event.key == "ArrowLeft") {
      leftArrow = true;
    }
  }
  function arrowReleased(event) {
    if(event.key == "ArrowRight") {
      rightArrow = false;
    } else if(event.key == "ArrowLeft") {
      leftArrow = false;
    }
  }

  function movePlayer() {
    if(rightArrow && playerPositionX + playerWidth < canvas.width) {
      playerPositionX += 10;
    } else if(leftArrow && playerPositionX > 0) {
      playerPositionX -= 10;
    }
  }

  // function createBall() {
  //   context.beginPath();
  //   context.arc(x, y, radius, 0, Math.PI * 2, false);
  //   context.fill();
  //   context.stroke();
  // }

  // function createPlayer() {
  //   context.fillRect(playerPositionX, playerPositionY, playerWidth, playerHeight);
  //   context.stroke();
  //   movePlayer();
  // }

  function gameStart() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    createBall();
    moveBall();
    createPlayer();
    movePlayer();

    // x += dx;
    // y += dy;
    // if(x + radius > canvas.width || x - radius < 0) {
    //   dx = -dx;
    // }
    // if(y + radius > canvas.height || y - radius < 0) {
    //   dy = -dy;
    // }
  }

  function animate() {
    requestAnimationFrame(animate);
    gameStart();
  }
  // setInterval(gameStart, 10);
  animate();


});
