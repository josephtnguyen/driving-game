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
  }
}
