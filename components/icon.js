'use babel';
// input component
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// export class Icon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       obj : "qq"
//     }
//   }
//   handleClick(){
//     this.setSate({
//       obj: {
//         name :'Button',
//         style :'1',
//       }
//     })
//   }
//
//   render() {
//     // console.log('this.state.obj.name',this.state);
//     // const Qa = element[this.state.obj.name]
//     return (
//       <div>
//           卡卡卡
//       </div>
//     );
//   }
// }




// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
 import { Test } from './button';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

@DragSource(Test.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    );
  }
}
