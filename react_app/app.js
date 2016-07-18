import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header.component';
import NotesList from './components/notes-list.component';
import TextEditor from './components/text-editor.component';
import PreviewPane from './components/preview-pane.component';
import DatabaseInstance from '../db/database';
require('../dist/styles/css/photon.min.css');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.db = new DatabaseInstance();
    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
    this.toggleActiveNote = this.toggleActiveNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {
      notes: [],
      activeNote: {}
    };
  }

  componentWillMount() {
    this.db.notes.orderBy('createdAt').reverse().toArray()
    .then(notes => this.setState({ notes }));

    this.db.notes.where('isActive').equals(1).first()
    .then(activeNote => this.setState({ activeNote }))
    .catch(error => {
      console.error(error);
      this.setState({ activeNote: {} });
    });
  }

  onNoteBodyChange(noteBody) {
    const self = this;
    self.db.notes.update(self.state.activeNote.id, { body: noteBody })
    .then(() => self.db.notes.get(self.state.activeNote.id))
    .then(activeNote => self.setState({ activeNote }))
    .then(() => self.db.notes.orderBy('createdAt').reverse().toArray())
    .then(notes => self.setState({ notes }));
  }

  addNote() {
    this.db.notes.add({
      body: '',
      isActive: 0,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
    .then(newNoteId => this.toggleActiveNote(newNoteId));
  }

  deleteNote(noteId) {
    this.db.notes.delete(noteId)
    .then(() => this.db.notes.orderBy('createdAt').reverse().toArray())
    .then(notes => {
      const newActiveNote = notes[0];
      newActiveNote.isActive = 1;
      this.setState({ notes, activeNote: newActiveNote });
    });
  }

  toggleActiveNote(selectedNoteId) {
    const self = this;

    this.db.transaction('rw', this.db.notes, function () {
      this.db.notes.update(selectedNoteId, { isActive: 1 });
      if (self.state.activeNote.hasOwnProperty('id')) {
        this.db.notes.update(self.state.activeNote.id, { isActive: 0 });
      }
      return this.db.notes.get(selectedNoteId);
    })
    .then(activeNote => self.setState({ activeNote }))
    .then(() => this.db.notes.orderBy('createdAt').reverse().toArray())
    .then(notes => self.setState({ notes }))
    .catch(error => console.error(error));
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
              addNote={this.addNote}
            />
            <TextEditor
              noteBody={this.state.activeNote.body || ''}
              onNoteBodyChange={this.onNoteBodyChange}
              noteId={this.state.activeNote.id}
              deleteNote={this.deleteNote}
            />
            <PreviewPane markdown={this.state.activeNote.body} />
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('react-app'));
