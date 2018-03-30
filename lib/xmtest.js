'use babel';
console.log('0000');
import XmtestPackage from './xmtest-package'

export default new XmtestPackage();


// import XmtestView from './xmtest-view';
//
// import { CompositeDisposable,Disposable } from 'atom';
//
//
// export default {
//   subscriptions: null,
//   activate(state) {
//     this.xmtestView = new XmtestView();
//     console.log('111');
//     this.modalPanel = atom.workspace.addRightPanel({
//       item: this.xmtestView.getElement(),
//       visible: false
//     });
//     // this.leftPanel = atom.workspace.addLeftPanel({
//     //   item: this.xmtestView.getElement(),
//     //   visible: false
//     // });
//     // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
//     this.subscriptions = new CompositeDisposable(
//       atom.workspace.addOpener(uri => {
//         if(uri === 'atom://xmtest'){
//           return new XmtestView();
//         }
//       }),
//       atom.commands.add('atom-workspace', {
//         'xmtest:toggle': () => this.toggle(),
//       }),
//       new Disposable(() => {
//         atom.workspace.getPaneItems().forEach(item => {
//           if (item instanceof XmtestView) {
//             item.destroy();
//           }
//         });
//       })
//     );
//   },
//
//   deactivate() {
//     this.subscriptions.dispose();
//   },
//
//   toggle() {
//       console.log('XmtestView was toggled!');
//       atom.workspace.toggle('atom://xmtest');
//       if (this.modalPanel.isVisible()) {
//         this.modalPanel.hide();
//       }else{
//         this.modalPanel.show();
//       }
//   }
//   // addPanel() {
//   //   if (this.leftPanel.isVisible()) {
//   //     this.leftPanel.hide();
//   //   }else{
//   //     this.leftPanel.show();
//   //   }
//   // }
//   // deserializeXmtestView(serialized) {
//   //   return new XmtestView();
//   // }
//
// };
