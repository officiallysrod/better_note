import React from 'react';

function NotesList(props) {
  return (
    <div className="pane pane-sm sidebar">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>
            <span className="icon icon-folder"></span> Notes
          </h3>
        </li>
        {props.notes.map((note, index) =>
          (
          <li
            key={index}
            className={`list-group-item ${index === 0 ? 'active' : ''}`}
          >
            {note.body}
          </li>
          )
        )}
      </ul>
    </div>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default NotesList;
