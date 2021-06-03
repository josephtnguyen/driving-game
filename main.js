var data = {
  x: 0,
  y: 0
};

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
    setInterval(moveCar, 16);
  }
}

function moveCar() {
  data.x++;
  var position = 'top: ' + data.y + 'px; left: ' + data.x + 'px;';
  $racecar.setAttribute('style', position);
}
