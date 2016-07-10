import React from 'react';
import classNames from 'classnames';

class NotesListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleActiveNote(this.props.note);
  }

  render() {
    const listItemClass = classNames({
      'list-group-item': true,
      active: this.props.activeState
    });

    return (
      <li className={listItemClass} onClick={this.handleClick}>
        {this.props.body}
      </li>
    );
  }
}

NotesListItem.propTypes = {
  note: React.PropTypes.object.isRequired,
  body: React.PropTypes.string.isRequired,
  activeState: React.PropTypes.bool.isRequired,
  toggleActiveNote: React.PropTypes.func.isRequired
};

export default NotesListItem;
