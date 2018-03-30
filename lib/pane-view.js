'use babel';


export default class PaneView {
  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('xmtest');
    // Create message element
    const message = document.createElement('div');
    message.textContent = 'hello PaneView!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  getTitle() {
    // Used by Atom for tab text
    return '源码';
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
    return 'atom://xmtest/pane'
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {
    return {
      deserializer: 'pane/PaneView'
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
