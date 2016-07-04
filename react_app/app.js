import React from 'react';
import ReactDOM from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import 'brace/keybinding/vim';

class App extends React.Component {

  render() {
    return (
      <AceEditor
        mode="markdown"
        theme="github"
        keyboardHandler="vim"
        tabSize="2"
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
