import React from 'react';
import AddNoteButton from './add-note-button.component';
import NotesListItem from './notes-list-item.component';
require('../../dist/styles/fonts/photon-entypo.woff');

function NotesList(props) {
  return (
    <div className="pane pane-sm sidebar">
      <div className="toolbar-actions">
        <div className="pull-right">
          <AddNoteButton addNote={props.addNote} />
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-header">
          <h3>
            <span className="icon icon-folder"></span> Notes
          </h3>
        </li>

        {props.notes.map(note =>
          <NotesListItem
            key={note.id}
            note={note}
            body={note.body}
            activeState={note.isActive}
            toggleActiveNote={props.toggleActiveNote}
          />)
        }

      </ul>
    </div>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  toggleActiveNote: React.PropTypes.func.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default NotesList;
