import React from 'react';
import NotesListItem from './notes-list-item.component';
require('../../dist/styles/fonts/photon-entypo.woff');

function NotesList(props) {
  return (
    <div className="pane pane-sm sidebar">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>
            <span className="icon icon-folder"></span> Notes
          </h3>
        </li>

        {props.notes.map(note =>
          <NotesListItem
            key={note.key}
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
  toggleActiveNote: React.PropTypes.func.isRequired
};

export default NotesList;
