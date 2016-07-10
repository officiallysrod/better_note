import React from 'react';
import NotesListItem from './notes-list-item.component';

function NotesList(props) {
  return (
    <div className="pane pane-sm sidebar">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>
            <span className="icon icon-folder"></span> Notes
          </h3>
        </li>

        {props.notes.map(note => <NotesListItem key={note.key} body={note.body} />)}

      </ul>
    </div>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default NotesList;
