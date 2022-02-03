import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.newButt = this.newButt.bind(this);
    this.state = {
      btnclick: 0
    };
  }

  newButt() {
    this.setState({ btnclick: this.state.btnclick + 1 });
  }

  render() {
    let btnClass = 'normal';
    if (this.state.btnclick <= 2) {
      btnClass = 'normal';
    } else if (this.state.btnclick < 6) {
      btnClass = 'purple';
    } else if (this.state.btnclick < 9) {
      btnClass = 'lightpurple';
    } else if (this.state.btnclick < 12) {
      btnClass = 'pink';
    } else if (this.state.btnclick < 15) {
      btnClass = 'orange';
    } else if (this.state.btnclick < 18) {
      btnClass = 'yellow';
    } else if (this.state.btnclick < 19) {
      btnClass = 'normal';
    } else if (this.state.btnclick > 18) {
      this.setState({ btnclick: 0 });
    }
    return (
      <div>
        <button className={btnClass} onClick={this.newButt}>Hello</button>
        Button Clicked: {this.state.btnclick}
      </div>
    );

  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
