// $(document).ready(() => {
const $CONT = $('.container');
const $DBGUI = $('<div>').attr('class', 'dbgui');

//create page
let $SCREEN = $('<div>').attr('class', 'screen');
$SCREEN.attr('id', 's001');
$CONT.append($SCREEN);

//append debug gui
$CONT.append($DBGUI);

//keyboard key to move page out of window
$(document).keydown(e => {
  switch (e.which) {
    case 37: //left
      if ($SCREEN.css('right') !== '-450px') {
        console.log('left arrow press');
        $SCREEN.css({ top: '', right: '', bottom: '', left: '' });
        $SCREEN.animate({ right: '-450px' }, 5, 'linear');
      }
      break;

    case 38: // up
      if ($SCREEN.css('bottom') !== '-350px') {
        console.log('up arrow press');
        $SCREEN.css({ top: '', right: '', bottom: '', left: '' });
        $SCREEN.animate({ bottom: '-350px' }, 5, 'linear');
      }
      break;

    case 39: // right
      if ($SCREEN.css('left') !== '-450px') {
        console.log('right arrow press');
        $SCREEN.css({ top: '', right: '', bottom: '', left: '' });
        $SCREEN.animate({ left: '-450px' }, 5, 'linear');
      }
      break;

    case 40: // down
      if ($SCREEN.css('top') !== '-350px') {
        console.log('down arrow press');
        $SCREEN.css({ top: '', right: '', bottom: '', left: '' });
        $SCREEN.animate({ top: '-350px' }, 5, 'linear');
      }
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault();
});
