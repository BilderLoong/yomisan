import { Popup } from './popup';
import './style.scss';
import manifest from './manifest.json';
import icon from './icons/icon.png';

document.addEventListener('selectstart', selectstart);
document.addEventListener('mouseup', onMouseup);
document.addEventListener('mousedown', onMousedown);

const popup = new Popup();
// let selectedText = '';
// let timeout = null;
let selecting = true;

function onMouseup(event) {
  //get the selection
  let selection = window.getSelection().toString();
  if (selecting && selection.length > 0) {
    selecting = false;
    gotSelection(selection, event);
  }
}

function onMousedown() {
  console.log('popup remove');
  popup.remove();
}

function selectstart() {
  selecting = true;

  /*get selectedText when the selection
    doesn't change after 200ms*/
  //   if (timeout) clearTimeout(timeout);
  //   selectedText = window.getSelection().toString();
  //   timeout = setTimeout(() => {
  //     if (selectedText == window.getSelection().toString()) {
  //       gotSelection(selectedText);
  //     }
  //   }, 200);
}

function gotSelection(text, event) {
  console.log(text);
  let entry = getEntry(text);
  popup.display(entry, event);
}

function getEntry(text) {
  // prototype
  return { expression: text };
}
