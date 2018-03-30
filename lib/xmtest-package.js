'use babel';

import XmtestView from './xmtest-view';
import PaneView from './pane-view';
import PanelView from './panel-view';
import AttrView from './attr-view';

import { CompositeDisposable,Disposable } from 'atom';

const XMTEST_URL = 'atom://xmtest/xmtest';
const PANE_URL = 'atom://xmtest/pane';

export default class XmtestPackage {

  activate(state) {
    console.log('111');
    this.PanelView = new PanelView(state.PanelViewState);
    this.AttrView = new AttrView(state.AttrViewState);
    this.addLeftPanel = atom.workspace.addLeftPanel({
      item: this.PanelView.getElement(),
      visible: false
    })
    this.addRightPanel = atom.workspace.addRightPanel({
      item: this.AttrView.getElement(),
      visible: false
    })
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.workspace.addOpener(uri => {
      console.log('22222',uri);
      if(uri === XMTEST_URL){
        return new XmtestView();
      }
    }))
    this.subscriptions.add(atom.workspace.addOpener(uri => {
      console.log('24442',uri);
      if(uri === PANE_URL){
        return new PaneView();
      }
    }))
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'xmtest:toggle': () => this.toggle(),
      })
    )
  }

  deactivate() {
    this.subscriptions.dispose();
    this.addLeftPanel.destroy();
    this.PanelView.destroy();
  }


  toggle() {
      console.log('XmtestView was toggled!');
      // atom.workspace.toggle('atom://xmtest');
      atom.workspace.open(XMTEST_URL);
      atom.workspace.open(PANE_URL);
      if(this.addLeftPanel.isVisible()){
        this.addLeftPanel.hide()
      }else{
        this.addLeftPanel.show()
      }
      if(this.addRightPanel.isVisible()){
        this.addRightPanel.hide()
      }else{
        this.addRightPanel.show()
      }
  }
};
