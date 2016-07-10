import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import 'brace/keybinding/vim';

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
      <AceEditor
        className="pane"
        setOptions={{
          showPrintMargin: false,
          fontFamily: 'Source Code Pro',
          fontSize: '10pt'
        }}
        height="100%"
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
    );
  }
}

TextEditor.propTypes = {
  noteBody: React.PropTypes.string.isRequired,
  onNoteBodyChange: React.PropTypes.func.isRequired
};

export default TextEditor;
