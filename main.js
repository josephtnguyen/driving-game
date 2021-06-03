var data = {
  x: 0,
  y: 0,
  moving: false
};
var carIsMoving = null;

var $racecar = document.querySelector('.racecar');

window.addEventListener('keydown', handleMove);

function handleMove(event) {
  if (event.key === 'ArrowLeft') {
    $racecar.className = 'racecar left';
  } else if (event.key === 'ArrowRight') {
    $racecar.className = 'racecar right';
  } else if (event.key === 'ArrowUp') {
    $racecar.className = 'racecar up';
  } else if (event.key === 'ArrowDown') {
    $racecar.className = 'racecar down';
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
