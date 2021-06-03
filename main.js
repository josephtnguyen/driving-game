var data = {
  x: 0,
  y: 0,
  moving: false,
  direction: 'right'
};
var carIsMoving = null;

var $racecars = document.querySelectorAll('.racecar');
var $racecar = null;

var $choiceModal = document.querySelector('.choice-container');
var $vehicles = document.querySelector('.vehicles');

window.addEventListener('keydown', handleMove);
$vehicles.addEventListener('click', handleChoice);

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

function handleChoice(event) {
  var id = event.target.id;

  for (var i = 0; i < $racecars.length; i++) {
    if ($racecars[i].classList.contains(id)) {
      $racecars[i].classList.remove('hidden');
      $racecar = $racecars[i];
      break;
    }
  }

  $choiceModal.classList.add('hidden');
}

function moveCar() {
  if (data.direction === 'left') {
    data.x -= 10;
  } else if (data.direction === 'right') {
    data.x += 10;
  } else if (data.direction === 'up') {
    data.y -= 10;
  } else if (data.direction === 'down') {
    data.y += 10;
  }

  $racecar.style.left = data.x + 'px';
  $racecar.style.top = data.y + 'px';
}
