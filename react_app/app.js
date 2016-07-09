import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './components/text-editor.component';
import PreviewPane from './components/preview-pane.component';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
    this.state = {
      noteBody: '```ruby\ndef example\n  @users = User.all\nend\n```'
    };
  }

  onNoteBodyChange(noteBody) {
    this.setState({ noteBody });
  }

  render() {
    return (
      <div className="pane-group">
        <TextEditor
          noteBody={this.state.noteBody}
          onNoteBodyChange={this.onNoteBodyChange}
        />
        <PreviewPane markdown={this.state.noteBody} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
