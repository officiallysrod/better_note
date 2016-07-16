import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header.component';
import NotesList from './components/notes-list.component';
import TextEditor from './components/text-editor.component';
import PreviewPane from './components/preview-pane.component';
import Rebase from 're-base';
require('../dist/styles/css/photon.min.css');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.base = Rebase.createClass('https://betternote-c7ec3.firebaseio.com');
    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
    this.toggleActiveNote = this.toggleActiveNote.bind(this);
    this.state = {
      notes: [],
      activeNote: {},
      appLoading: true
    };
  }

  componentWillMount() {
    this.base.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true,
      then() {
        const activeNote = this.state.notes.find(note => note.isActive === true);
        this.setState({ activeNote, appLoading: false });
      }
    });
  }

  onNoteBodyChange(noteBody) {
    const activeNote = this.state.activeNote;
    const notes = this.state.notes;
    const activeNoteIndex = notes.indexOf(activeNote);
    activeNote.body = noteBody;
    notes[activeNoteIndex] = activeNote;
    this.setState({ notes, activeNote });
  }

  toggleActiveNote(activeNote) {
    const notes = this.state.notes;
    for (const n of notes) {
      n.isActive = (n.key === activeNote.key);
    }
    this.setState({ notes, activeNote });
  }

  render() {
    return (
      <div className="window">
        <AppHeader />
        <div className="window-content">
          <div className="pane-group">
            <NotesList
              notes={this.state.notes}
              toggleActiveNote={this.toggleActiveNote}
            />
            <TextEditor
              noteBody={this.state.activeNote.body || ''}
              onNoteBodyChange={this.onNoteBodyChange}
            />
            <PreviewPane markdown={this.state.activeNote.body} />
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('react-app'));
