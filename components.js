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
    out: ['register']
  },
  {
    name: 'newestImages',
    out: ['imagesApp']
  },
  {
    name: 'newPostApp',
    out: []
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
  focus.className = `${searchTerm} screen`;
  focus.textContent = searchTerm;
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
  result.className = `${next[0].out[idx + delta]} screen-${dir}`;
  result.textContent = next[0].out[idx + delta];
  CONTAINER.appendChild(result);
  return result;
}

/** create div above focus */

function createAbove(inOutOf) {
  let result = document.createElement('div');
  result.className = `${inOutOf[0].name} screen-above`;
  result.textContent = inOutOf[0].name;
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

let focusElem = createFocus(searchTerm);
let focusObj = getFocusObj(searchTerm);
let inOutOf = outOf(searchTerm);
let aboveElem = createAbove(inOutOf);
createSides();

//map through focus obj out and create nodes
function createBottom(focusObj) {
  focusObj.out.map(o => {
    // [o] = document.createElement('div');
    console.log(o);
  });
}

createBottom(focusObj);
