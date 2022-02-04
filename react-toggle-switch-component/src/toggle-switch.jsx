import React from 'react';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.state = {
      button: 'on',
      text: 'ON'

    };
  }

  toggleOff() {
    this.setState({
      button: 'off',
      text: 'ON'
    });
  }

  toggleOn() {
    this.setState({
      button: 'on',
      text: 'OFF'
    });
    this.setState();
  }

  render() {
    const isOn = this.state.button;
    let position;
    let Switch;
    let OnOff;
    if (isOn === 'on') {
      position = 'buttright';
      Switch = this.toggleOff;
      OnOff = 'backgroundoff';
    } else {
      Switch = this.toggleOn;
      position = 'buttleft';
      OnOff = 'backgroundon';
    }
    return (
      <div className={OnOff}>
        <button className={position} onClick={Switch}></button>
        <div id='sub'>{this.state.text}</div>
      </div>

    );
  }

}

ToggleSwitch();
