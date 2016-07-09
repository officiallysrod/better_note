import React from 'react';
import ReactDOM from 'react-dom';
import NotesList from './components/notes-list.component';
import TextEditor from './components/text-editor.component';
import PreviewPane from './components/preview-pane.component';
import Rebase from 're-base';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.base = Rebase.createClass('https://betternote-c7ec3.firebaseio.com');
    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
    this.state = {
      notes: [],
      noteBody: '',
      loading: true
    };
  }

  componentDidMount() {
    this.base.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  onNoteBodyChange(noteBody) {
    this.setState({ noteBody });
  }

  render() {
    return (
      <div>
        <div className="pane-group">
          <NotesList notes={this.state.notes} />
          <TextEditor
            noteBody={this.state.noteBody}
            onNoteBodyChange={this.onNoteBodyChange}
          />
          <PreviewPane markdown={this.state.noteBody} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('react-app'));
