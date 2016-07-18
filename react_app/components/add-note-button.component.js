import React from 'react';

function AddNoteButton(props) {
  return (
    <button className="btn btn-default" onClick={props.addNote} >
      <span className="icon icon-pencil"></span>
    </button>
  );
}

AddNoteButton.propTypes = {
  addNote: React.PropTypes.func.isRequired
};

export default AddNoteButton;
