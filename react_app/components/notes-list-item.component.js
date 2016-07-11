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

  stripMarkdownCharacters(markdownString) {
    let output = markdownString;
    output = output
      .replace(/\n={2,}/g, '\n')                             // Header
      .replace(/~~/g, '')                                    // Strikethrough
      .replace(/(- \[ \])/g, '')                             // Checkboxes
      .replace(/`{3}.*\n/g, '')                              // Fenced codeblocks
      .replace(/<(.*?)>/g, '$1')                             // Remove HTML tags
      .replace(/^[=\-]{2,}\s*$/g, '')                        // Remove setext-style headers
      .replace(/\[\^.+?\](: .*?$)?/g, '')                    // Remove footnotes
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
      .replace(/!\[.*?\][\[\(].*?[\]\)]/g, '')               // Remove images
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')            // Remove inline links
      .replace(/>/g, '')                                     // Remove Blockquotes
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '') // Remove reference-style links?
      .replace(/^#{1,6}\s*([^#]*)\s*(#{1,6})?/gm, '$1')      // Remove atx-style headers
      .replace(/([\*_]{1,3})(\S.*?\S)\1/g, '$2')
      .replace(/(`{3,})(.*?)\1/gm, '$2')
      .replace(/^-{3,}\s*$/g, '')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\n{2,}/g, '\n\n');
    return output;
  }

  render() {
    const listItemClass = classNames({
      'list-group-item': true,
      active: this.props.activeState
    });

    const cleanString = this.stripMarkdownCharacters(this.props.body);
    const [firstLine, ...bodyArray] = cleanString.split('\n');
    const body = bodyArray.join(' ');

    return (
      <li className={listItemClass} onClick={this.handleClick}>
        <p><strong>{firstLine}</strong></p>
        <p>{body}</p>
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
