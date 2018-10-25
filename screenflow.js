$(document).ready(() => {
  const $CONT = $('.container');

  //create page
  let $SCREEN = $('<div>').attr('class', 'screen');
  $SCREEN.attr('id', 's001');
  $CONT.append($SCREEN);

  //keyboard key to move page out of window
  $(document).keydown(e => {
    switch (e.which) {
      case 37: //left
        $SCREEN.css({ transform: 'translateX(-70vw)' });
        // $SCREEN.css({ left: '10vh' });
        console.log('left arrow press');
        logCoords($SCREEN);
        break;

      case 38: // up
        $SCREEN.css({ transform: 'translateY(-70vh)' });
        console.log('up arrow press');
        logCoords($SCREEN);
        break;

      case 39: // right
        $SCREEN.css({ transform: 'translateX(70vw)' });
        console.log('right arrow press');
        logCoords($SCREEN);
        break;

      case 40: // down
        $SCREEN.css({ transform: 'translateY(70vh)' });
        console.log('down arrow press');
        logCoords($SCREEN);
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  //create page that comes into window
  // let $NEWSCREEN = $('<div>').attr('class', 'screen');
  // $NEWSCREEN.attr('id', 's002');
  // $NEWSCREEN.css({ transform: 'translateX(70vh)' });
  // $CONT.append($NEWSCREEN);
  //move page into window

  function logCoords($obj) {
    let pos = $obj.position();
    console.log(
      'left: ',
      Math.floor(pos.left),
      '\nright: ',
      Math.floor(pos.top)
    );
    console.log(
      'window\nwidth: ',
      window.innerWidth,
      '\nheight: ',
      window.innerHeight
    );
  }
});
