import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <strong>React is working.</strong>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
