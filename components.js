/*
                   homepage
                      |
    -----------------------------------------                         
   |           |            |                |
sign in     sign up    newest images    new post app
   |           |            |
   |           |            |
validation  register    images app

*/

/** global variables */

let screens = [
  {
    name: 'homepage',
    out: ['signIn', 'signUp', 'newestImages', 'newPostApp']
  },
  {
    name: 'signIn',
    out: ['validation']
  },
  {
    name: 'signUp',
    out: ['register', 'a', 'b', 'c']
  },
  {
    name: 'newestImages',
    out: ['imagesApp']
  },
  {
    name: 'newPostApp',
    out: ['test']
  },
  {
    name: 'validation',
    out: []
  },
  {
    name: 'register',
    out: []
  },
  {
    name: 'imagesApp',
    out: []
  }
];

const CONTAINER = document.querySelector('.container');
let searchTerm = 'signUp';

/** create a div with the searchTerm as the focus */

function createFocus(searchTerm) {
  let focus = document.createElement('div');
  let h4 = document.createElement('h4');
  let h4Text = document.createTextNode(searchTerm);
  let p = document.createElement('p');
  let lorem =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aperiam distinctio possimus quos dolore quidem, laboriosam rem iste reiciendis aliquam! Alias iste omnis eos itaque provident quasi non consectetur quia?';
  let pText = document.createTextNode(lorem.repeat(5));

  p.appendChild(pText);
  h4.appendChild(h4Text);
  focus.appendChild(h4);
  focus.appendChild(p);

  focus.className = `screen screen-focus`;
  focus.id = searchTerm;

  CONTAINER.appendChild(focus);

  return focus;
}

/** returns an array of objects that have outs connecting to focus */

function outOf(searchTerm) {
  return screens.filter(s => s.out.includes(searchTerm));
}

/** create screens that are next to focus */

function createNextToFocus(next, idx, dir) {
  //left or right of focus
  let delta;
  if (dir === 'l') {
    delta = -1;
  } else {
    delta = 1;
    dir = 'r';
  }

  //create div
  let result = document.createElement('div');
  result.className = `screen screen-${dir} node`;
  result.textContent = next[0].out[idx + delta];
  result.id = next[0].out[idx + delta];
  CONTAINER.appendChild(result);
  return result;
}

/** create div above focus */

function createAbove(inOutOf) {
  let result = document.createElement('div');
  result.className = `screen screen-above node`;
  result.textContent = inOutOf[0].name;
  result.id = inOutOf[0].name;
  CONTAINER.appendChild(result);
  return result;
}

/** function to group creation of the sides  */

function createSides() {
  if (inOutOf[0].out.indexOf(searchTerm) > 0) {
    createNextToFocus(inOutOf, inOutOf[0].out.indexOf(searchTerm), 'l');
  }

  if (inOutOf[0].out.indexOf(searchTerm) < inOutOf[0].out.length) {
    createNextToFocus(inOutOf, inOutOf[0].out.indexOf(searchTerm), 'r');
  }
}

/** get focus object from screens */

function getFocusObj(searchTerm) {
  return screens.filter(node => {
    return node.name === searchTerm;
  })[0];
}

//map through focus obj out and create nodes
function createBottom(focusObj) {
  let bottomCont = document.createElement('div');
  bottomCont.className = 'bottom-container';

  //map through outs of focus and create divs
  focusObj.out.map(o => {
    let div = document.createElement('div');
    div.className = 'screen screen-bottom node';
    div.textContent = o;
    div.id = o;
    bottomCont.appendChild(div);
  });
  CONTAINER.appendChild(bottomCont);
}

/**
 *
 * Need to create lines for graph
 *
 * lines will be furthest back component
 *
 *
 *
 *
 *
 */

/** create page */
let focusElem = createFocus(searchTerm);
let focusObj = getFocusObj(searchTerm);
let inOutOf = outOf(searchTerm);
if (inOutOf.length > 0) {
  let aboveElem = createAbove(inOutOf);
  createSides();
}
createBottom(focusObj);
