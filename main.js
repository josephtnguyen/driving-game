var data = {
  x: 0,
  y: 0,
  moving: false,
  direction: 'right'
};
var carIsMoving = null;

var $racecar = document.querySelector('.racecar');

window.addEventListener('keydown', handleMove);

function handleMove(event) {
  if (event.key === 'ArrowLeft') {
    $racecar.className = 'racecar left';
    data.direction = 'left';
  } else if (event.key === 'ArrowRight') {
    $racecar.className = 'racecar right';
    data.direction = 'right';
  } else if (event.key === 'ArrowUp') {
    $racecar.className = 'racecar up';
    data.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    $racecar.className = 'racecar down';
    data.direction = 'down';
  } else if (event.key === ' ') {
    if (!data.moving) {
      carIsMoving = setInterval(moveCar, 16);
      data.moving = true;
    } else {
      clearInterval(carIsMoving);
      data.moving = false;
    }
  }
}

function moveCar() {
  data.x += 10;
  $racecar.style.left = data.x + 'px';
  $racecar.style.top = data.y + 'px';
}
