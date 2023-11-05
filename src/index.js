import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

import ElevatorScrollbar from './ninja-ui/scrollbars/elevatorScrollbar';
import ShastaScrollbar from './ninja-ui/scrollbars/shastaScrollbar'
import NeonScrollbar from './ninja-ui/scrollbars/neonScrollbar';
import GrooveScrollbar from './ninja-ui/scrollbars/grooveScrollbar';

// const body = document.querySelector('body');

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
   const instance = new Dropdown(dropdown);
   instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('you clicked me!  =)');
});


//create scrollbar
let scrollbar = new GrooveScrollbar();
scrollbar.init();
console.log('scrollbar should be created');

window.addEventListener('scroll', () => {
  scrollbar.scroll();
});

let veil = document.querySelector('.veil');

veil.addEventListener('mousedown', (e) => {
  scrollbar.handleThumbMouseDown(e);
  console.log('mousedown event added');
});

window.addEventListener('mouseup', e => {
  scrollbar.handleThumbMouseUp(e);
});

window.addEventListener('mousemove', e => {
  scrollbar.handleThumbMouseMove(e);
});

document.querySelector('#elevator').addEventListener('click', () => {
  scrollbar.destroy();
  console.log('scrollbar destroyed');
  scrollbar = new ElevatorScrollbar();
  scrollbar.init();
  console.log('elevator scrollbar created');
  
  veil = document.querySelector('.veil');
  
  veil.addEventListener('mousedown', (e) => {
    scrollbar.handleThumbMouseDown(e);
  });
  
  console.log('mousedown event added');
})

document.querySelector('#groove').addEventListener('click', () => {
  scrollbar.destroy();
  console.log('scrollbar destroyed');
  scrollbar = new GrooveScrollbar();
  scrollbar.init();
  console.log('groove scrollbar created');
  
  veil = document.querySelector('.veil');
  
  veil.addEventListener('mousedown', (e) => {
    scrollbar.handleThumbMouseDown(e);
  });
  
  console.log('mousedown event added');
})

document.querySelector('#neon').addEventListener('click', () => {
  scrollbar.destroy();
  console.log('scrollbar destroyed');
  scrollbar = new NeonScrollbar();
  scrollbar.init();
  console.log('neon scrollbar created');

  veil = document.querySelector('.veil');
  
  veil.addEventListener('mousedown', (e) => {
    scrollbar.handleThumbMouseDown(e);
  });

  console.log('mousedown event added');
})

document.querySelector('#shasta').addEventListener('click', () => {
  scrollbar.destroy();
  console.log('scrollbar destroyed');
  scrollbar = new ShastaScrollbar();
  scrollbar.init();
  console.log('shasta scrollbar created');
  
  veil = document.querySelector('.veil');
  
  veil.addEventListener('mousedown', (e) => {
    scrollbar.handleThumbMouseDown(e);
  });

  console.log('mousedown event added');
})