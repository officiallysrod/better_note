import React from 'react';

class DeleteNoteButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteNote(this.props.noteId);
  }

  render() {
    return (
      <button className="btn btn-default" onClick={this.handleClick}>
        <span className="icon icon-trash"></span>
      </button>
    );
  }

}

DeleteNoteButton.propTypes = {
  noteId: React.PropTypes.number.isRequired,
  deleteNote: React.PropTypes.func.isRequired
};

export default DeleteNoteButton;
