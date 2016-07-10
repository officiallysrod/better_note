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
    this.toggleActiveNote = this.toggleActiveNote.bind(this);
    this.state = {
      notes: [],
      noteBody: '',
      appLoading: true
    };
  }

  componentWillMount() {
    this.base.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true,
      then() {
        this.setState({ appLoading: false });
      }
    });
  }

  onNoteBodyChange(noteBody) {
    this.setState({ noteBody });
  }

  toggleActiveNote(activeNote) {
    const notes = this.state.notes;
    for (const n of notes) {
      n.isActive = (n.key === activeNote.key);
    }
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <div className="pane-group">
          <NotesList
            notes={this.state.notes}
            toggleActiveNote={this.toggleActiveNote}
          />
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
