'use babel';
// input component
import React from 'react';
import ReactDOM from 'react-dom';
import Dragger from 'react-dragger-r'
import { CompositeDisposable } from 'atom';


export class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(){

  }
  render() {
    return (
      <div>
        welcome to react
        <Dragger style={{ left: 50 }}>
           <div>普通的拖拽组件</div>
        </Dragger>
        <button onClick = {this.handleClick()}>点击</button>
      </div>
    );
  }
}


//
// import Draggable from 'react-draggable';
//
// class Test extends React.Element {
//
//   eventLogger = (e: MouseEvent, data: Object) => {
//     console.log('Event: ', e);
//     console.log('Data: ', data);
//   };
//
//   render() {
//     return (
//       <Draggable
//         axis="x"
//         handle=".handle"
//         defaultPosition={{x: 0, y: 0}}
//         position={null}
//         grid={[25, 25]}
//         onStart={this.handleStart}
//         onDrag={this.handleDrag}
//         onStop={this.handleStop}>
//         <div>
//           <div className="handle">Drag from here</div>
//           <div>This readme is really dragging on...</div>
//         </div>
//       </Draggable>
//     );
//   }
// }
