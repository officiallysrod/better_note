import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import 'brace/keybinding/vim';
import DeleteNoteButton from './delete-note-button.component';

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.props.onNoteBodyChange.bind(this);
  }

  focusTextEditor(editor) {
    editor.focus();
  }

  render() {
    return (
      <div className="pane">
        <div className="toolbar-actions">
          <div className="text-right">
            <DeleteNoteButton noteId={this.props.noteId} deleteNote={this.props.deleteNote} />
          </div>
        </div>
        <AceEditor
          setOptions={{
            showPrintMargin: false,
            fontFamily: 'Source Code Pro',
            fontSize: '10pt'
          }}
          height="97%"
          width="97%"
          mode="markdown"
          theme="github"
          keyboardHandler="vim"
          wrapEnabled
          tabSize={2}
          showGutter={false}
          highlightActiveLine={false}
          value={this.props.noteBody}
          onLoad={this.focusTextEditor}
          onChange={this.props.onNoteBodyChange}
        />
      </div>
    );
  }
}

TextEditor.propTypes = {
  noteId: React.PropTypes.number.isRequired,
  noteBody: React.PropTypes.string.isRequired,
  onNoteBodyChange: React.PropTypes.func.isRequired,
  deleteNote: React.PropTypes.func.isRequired
};

export default TextEditor;
