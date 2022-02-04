// import React from 'react';
//
// class ToggleSwitch extends React.Component {
//  constructor(props) {
//    super(props);
//    this.toggleButt = this.toggleButt.bind(this);
//    this.state = {
//      button: 'on'
//    };
//  }
//
//  toggleButt() {
//    this.setState({ button: 'off' });
//  }
//
//  render() {
//    const isOn = this.state.button;
//    let position;
//    if (isOn === 'on') {
//      postion = 'buttleft';
//    } else {
//      postion = 'buttright';
//    }
//    return (
//      <div className='background'>
//        <button className={postion}></button>
//      </div >
//    );
//  }
//
// }
//
// ReactDOM.render(
//  <ToggleSwitch />,
//  document.querySelector('#root')
// );
//
