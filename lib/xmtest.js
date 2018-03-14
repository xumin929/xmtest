'use babel';

import XmtestView from './xmtest-view';
import { CompositeDisposable } from 'atom';

export default {

  xmtestView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.xmtestView = new XmtestView(state.xmtestViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.xmtestView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'xmtest:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.xmtestView.destroy();
  },

  serialize() {
    return {
      xmtestViewState: this.xmtestView.serialize()
    };
  },

  toggle() {
    console.log('Xmtest was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
