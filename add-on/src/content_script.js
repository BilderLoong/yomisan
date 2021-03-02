import './style.scss';
import Popup from './popup';

document.addEventListener('selectstart', selectstart);
document.addEventListener('mouseup', onMouseup);
document.addEventListener('mousedown', onMousedown);

// let selectedText = '';
// let timeout = null;
let selecting = true;
let popup = null;

function onMouseup(event) {
  //get the selection
  let selection = window.getSelection().toString();
  if (selecting && selection.length > 0) {
    popup = new Popup();
    selecting = false;
    gotSelection(selection, event);
  }
}

function onMousedown() {
  if (popup) {
    popup.remove();
    popup = null;
  }
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
  // console.log(text);
  let entry = getEntry(text);
  popup.display(entry, event);
}

function getEntry(text) {
  // prototype
  const glossary = {
    definition: {
      tag: 'tag',
      english: 'English definition 1',
    },
    example: ['example 1', 'example 2'],
  };

  const entry = {
    expression: 'expression',
    sentence: 'the sentence include the expression',
    dictionaryEntry: {
      dictionaryName: 'dictionary name',
      ipa: {
        us: 'us ipa',
        uk: 'uk ipa',
      },
      glossaries: [glossary],
    },
  };

  return entry;
}
