import React from 'react';
import ReactDOM from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import 'brace/keybinding/vim';
import PreviewPane from './components/preview-pane.component';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
    this.state = {
      noteBody: ''
    };
  }

  onNoteBodyChange(editorContent) {
    this.setState({ noteBody: editorContent });
  }

  focusTextEditor(editor) {
    editor.focus();
  }

  render() {
    return (
      <div className="pane-group">
        <AceEditor
          className="pane"
          setOptions={{
            showPrintMargin: false,
            showInvisibles: true
          }}
          height="100%"
          mode="markdown"
          theme="github"
          keyboardHandler="vim"
          tabSize={2}
          value={this.state.noteBody}
          onLoad={this.focusTextEditor}
          onChange={this.onNoteBodyChange}
        />
        <PreviewPane markdown={this.state.noteBody} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
