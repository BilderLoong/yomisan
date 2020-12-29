import React from 'react';
import ReactDOM from 'react-dom';
import PopupDiv from './popup_div';
import ErrorBoundary from './ErrorBoundary';

class Popup {
  constructor() {
    this.popupRef = null;
    this.entry;
  }

  create() {
    const root = document.body;
    this.popupRef = document.createElement('div');
    this.popupRef.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    });
    this.popupRef.addEventListener('mouseup', (e) => {
      e.stopPropagation();
    });
    this.popupRef.id = 'yomisan-root';
    root.appendChild(this.popupRef);
  }

  display(entry, event) {
    const x = event.clientX;
    const y = event.clientY;
    this.entry = entry;
    this.create();
    this.setPopup(x, y);
    ReactDOM.render(
      <ErrorBoundary>
        <PopupDiv entry={this.entry} />
      </ErrorBoundary>,
      this.popupRef
    );
  }

  setPopup(x, y) {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const popWidth = 500;
    const popHeight = 200;

    // the horizontal position of popup
    if (x + popWidth > winWidth) {
      //left
      this.popupRef.style.left = `${x - popWidth}px`;
    } else {
      //right
      this.popupRef.style.left = `${x}px`;
    }
    //the vertical position of popup
    if (winHeight - y < popHeight) {
      //up
      this.popupRef.style.top = `${y - popHeight}px`;
    } else {
      //down
      this.popupRef.style.top = `${y}px`;
    }
  }

  remove() {
    this.popupRef.remove();
  }
}
export default Popup;
