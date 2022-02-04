import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      email: ''
    };
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSumbit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {

    return (
    <form onSubmit={this.handleSumbit}>
     <label>
       Email:
     </label>
     <input type="email" value={this.state.value} onChange={this.handleChange}/>
      <button>Sign Up</button>
    </form>
    );
  }

}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
