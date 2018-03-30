'use babel';

//
import React from 'react';
import ReactDOM from 'react-dom';
import { Test } from '../components/button';

export default class PanelView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('panel-view');

    // Create message element
    const message = document.createElement('div');
    message.classList.add('message');
    this.element.appendChild(message);
    this.subscriptions = atom.workspace.getCenter().observeActivePaneItem(item => {
      if (!atom.workspace.isTextEditor(item))  return;
      ReactDOM.render(<Test />, message);
    });
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
