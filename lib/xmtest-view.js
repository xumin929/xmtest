'use babel';


export default class XmtestView {
  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('xmtest');
    // Create message element
    const message = document.createElement('div');
    message.textContent = 'hello xmtest!';
    message.classList.add('message');
    this.element.appendChild(message);

    // this.subscriptions = atom.workspace.getCenter().observeActivePaneItem(item => {
    //   if (!atom.workspace.isTextEditor(item)) return;
    //   console.log('1212',item);
    //   message.innerHTML = `
    //     <h2>${item.getFileName() || 'untitled'}</h2>
    //     <ul>
    //       <li><b>Soft Wrap:</b> ${item.softWrapped}</li>
    //       <li><b>Line Count:</b> ${item.getLineCount()}</li>
    //     </ul>
    //     <div><Button>点击</Button></div>
    //   `;
    // });
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
    return 'atom://xmtest'
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
