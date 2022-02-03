import React from 'react';
import ReactDOM from 'react-dom';

function ClickOn(props) {
  return (
    <button onClick={props.onClick}>
      Click Me!
    </button>
  );
}

function ClickOff(props) {
  return (
   <button onClick={props.onClick}>
     Thanks!
     </button>
  );
}
class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClickOn() {
    this.setState({ isClicked: true });
  }

  handleClickOff() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClickedOn = this.state.isClicked;
    let button;
    if (isClickedOn === true) {
      button = <ClickOn onClick={this.handleClickOff} />;
    } else {
      button = <ClickOff onClick={this.handleClickOn} />;
    }
    return (
      <div>
        {button}
      </div>
    );
  }

}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
