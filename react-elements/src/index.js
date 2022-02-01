import React from 'react';
import ReactDOM from 'react-dom';

const newh1 = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

ReactDOM.render(newh1,
  document.getElementById('root')
);
