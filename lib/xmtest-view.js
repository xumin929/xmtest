'use babel';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd';
import { Card } from '../components/icon';
// import * as Aa from '../components/button';

export default class XmtestView {
  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('xmtest');
    // Create message element
    const message = document.createElement('div');
    this.element.appendChild(message);
    // let object = {
    //   'name':'Button',
    //   'width':'100',
    // }
    // const Element = Aa[object.name];
    // console.log("Button",Element);

    this.subscriptions = atom.workspace.getCenter().observeActivePaneItem(item => {
      if (!atom.workspace.isTextEditor(item))  return;
      ReactDOM.render(<Card />, message);
    });

  }


  getTitle() {
    // Used by Atom for tab text
    return '设计';
  }
  getDefaultLocation() {
    return 'center';
  }

  getAllowedLocations() {
    // The locations into which the item can be moved.
    return ['left', 'right', 'bottom','center'];
  }

  getURI() {
    // Used by Atom to identify the view when toggling.
    return 'atom://xmtest/xmtest'
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {
    return {
      deserializer: 'xmtest/XmtestView'
    };
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
    // this.subscriptions.dispose();
  }

  getElement() {
    return this.element;
  }

}
