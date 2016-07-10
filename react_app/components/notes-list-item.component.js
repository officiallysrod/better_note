import React from 'react';

function NotesListItem(props) {
  return (
    <li className="list-group-item">
      {props.body}
    </li>
  );
}

NotesListItem.propTypes = {
  body: React.PropTypes.string.isRequired
};

export default NotesListItem;
